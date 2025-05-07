export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-lxgw">
      <div className="h-20"></div>
      {children}
    </div>
  );
}
