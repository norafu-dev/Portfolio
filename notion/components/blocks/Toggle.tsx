"use client";
import { ReactNode, useState } from "react";

const Toggle = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col gap-2 mt-2">
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="flex gap-4 cursor-pointer"
      >
        <div className={`${isOpen ? "rotate-180" : "rotate-90"}`}>▲</div>
        <div>{title}</div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} px-4`}>{children}</div>
    </div>
  );
};

export default Toggle;
