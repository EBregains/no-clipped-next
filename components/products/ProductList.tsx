import React from "react";

export default async function ProductList({
  children,
  title
}: {
  children: React.ReactNode,
  title: string
}) {
  return <div className="w-full flex justify-center my-4 font-[family-name:var(--font-geist-mono)]">
    <div className=" w-full max-w-[1000px]">
      <h3 className="mb-4">{title}</h3>
      <div className="flex gap-4">
        {children}
      </div>
    </div>
  </div>
}