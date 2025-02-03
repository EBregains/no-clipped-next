export default async function Header({ title }: { title?: string }) {
  return <header>
    {title != null &&
      <div className="h-8 w-full bg-slate-950 text-white font-[family-name:var(--font-geist-mono)] flex items-center justify-center">
        <p>{title}</p>
      </div>
    }
  </header>
}