import { icons } from "@/icons/icons"
import { FormatToARS } from "@/utils/utils"
import Link from "next/link"

export default async function ProductCard({
  title,
  url,
  image_url,
  subtitle,
  price,
  discount,
}: {
  title: string,
  url: string,
  image_url: string
  subtitle?: string,
  price: number,
  discount?: number,
}) {
  return <Link href={"/products/" + url} className="w-96 block group hover:scale-[102%]  transition-all duration-300 cursor-pointer ">
    <img src={image_url} alt="Imagen" className="w-96 h-[576px] object-cover rounded-xs border-[1px] border-slate-300 border-opacity-15 group-hover:border-opacity-35 group-hover:shadow-xs" />
    <div className="flex flex-col w-full h-[72px] mt-2 ">
      <div className="flex items-center">
        {icons.Shirt}
        <h4 className="ml-2 inline-block">{title}</h4>
      </div>
      <div className="flex-1 flex justify-between items-end">
        {discount != null ? <>
          <p className="text-sm font-[family-name:var(--font-geist-sans)] opacity-70 line-through">{FormatToARS(price)}</p>
          <p className="font-bold text-2xl">{FormatToARS(price - (price * discount))}</p>
        </> : <>
          <p className="font-bold text-2xl">{FormatToARS(price)}</p>
        </>
        }
      </div>
    </div>
  </Link>
}