

import { ProductShopForm } from "@/components/products/ProductShopForm"
import { productos } from "@/config"
import Image from "next/image"

export default async function Product({
  params,
}: {
  params: Promise<{ id: string }>
}) {

  const id = (await params).id
  let product: Product | undefined = productos.find(product => (product.url == id))

  return <>
    {product != undefined ?
      <div className="w-full flex flex-col gap-4 items-center mt-6">
        <div className="w-full max-w-[1000px] flex h-[600px]">
          <Image src={product.image.url} alt={product.image.alt} width={400} height={600} />
          <ProductShopForm product={product} />
        </div>
        <div className="w-full max-w-[1000px] flex h-[600px] bg-slate-100">

        </div>
      </div> :
      <>
        {/* <ProductNotFound /> */}
      </>
    }
  </>

}