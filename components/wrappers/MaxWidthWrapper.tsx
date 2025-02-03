export default async function MaxWidthWrapper({ children, className }: { children: React.ReactNode, className: string }) {
  return <div className={className}>
    <div className="max-w-[1000px]">
      {children}
    </div>
  </div>
}