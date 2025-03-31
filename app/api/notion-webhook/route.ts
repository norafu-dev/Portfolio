import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import crypto from "crypto";

// verify the request from notion
const verifyNotionRequest = (req: NextRequest, body: string) => {
  // get the signing secret from the environment variables
  const signingSecret = process.env.NOTION_WEBHOOK_SECRET;
  if (!signingSecret) {
    console.error("NOTION_WEBHOOK_SECRET is not set");
    return false;
  }

  // get the notion signature from the request headers
  const notionSignature = req.headers.get("x-notion-signature");
  if (!notionSignature) {
    console.error("x-notion-signature is not set");
    return false;
  }

  // compute the hmac of the request body
  const hmac = crypto.createHmac("sha256", signingSecret);
  hmac.update(body);
  const computedSignature = `sha256=${hmac.digest("hex")}`;

  // compare the computed signature with the notion signature
  try {
    return crypto.timingSafeEqual(
      Buffer.from(computedSignature),
      Buffer.from(notionSignature)
    );
  } catch (error) {
    console.error("Error verifying notion request", error);
    return false;
  }
};
export async function POST(req: NextRequest) {
  console.log("received Notion webhook:");
  try {
    const rawBody = await req.text();
    const payload = JSON.parse(rawBody);

    console.log(payload.status);

    // get the verification token from the payload, and set the NOTION_WEBHOOK_SECRET

    if (payload.verification_token) {
      console.log("verification_token:", payload.verification_token);
      return new Response(null, { status: 200 });
    }

    // validate if the request is from notion
    const isValid = verifyNotionRequest(req, rawBody);
    if (!isValid) {
      console.error("Notion webhook signature verification failed");
      return NextResponse.json({ error: "invalid signature" }, { status: 401 });
    }

    // log the webhook event (for debugging)
    console.log("received Notion webhook:", {
      eventType: payload.type,
      timestamp: new Date(payload.timestamp).toLocaleString(),
      pageId:
        payload.type === "comment.created"
          ? // the page that the comment is on
            payload.data.page_id
          : // the database that changed page is in
            payload.data.parent_id,
    });

    // invalidate the cache tag
    revalidateTag("notion-database");
    console.log("invalidated cache tag: notion-database");

    // return the success response
    return NextResponse.json({
      success: true,
      message: "database cache revalidated successfully",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    // error handling
    console.error("error handling Notion webhook:", error);
    return NextResponse.json(
      { error: "internal server error", message: (error as Error).message },
      { status: 500 }
    );
  }
}
