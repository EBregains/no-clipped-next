import { routes } from "@/config"
import Link from "next/link"

export default async function Navigation() {
  return <div className="flex items-center justify-start font-[family-name:var(--font-geist-mono)]">
    {routes.map(route => {
      return <div
        className="relative group uppercase h-full leading-4 font-light opacity-90 
        hover:opacity-100 transition-opacity duration-700 flex-auto  border-r-[1px] border-slate-200"
        key={route.name}
      >
        <Link
          className="relative z-20 h-full flex items-center justify-center"
          href={route.url}>{
            route.name}
        </Link>
        <div className="absolute top-0 left-0 h-full w-0 group-hover:w-full transition-all border-b-4 border-slate-950 group-hover:bg-slate-300/10  z-10" />
      </div>
    })
    }
  </div>
}