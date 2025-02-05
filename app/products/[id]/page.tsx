

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
      <div className="w-full flex justify-center my-8 h-[700px]">
        <Image src={product.image.url} alt={product.image.alt} width={500} height={500} />
        <ProductShopForm product={product} />
      </div>
      :
      <>
        {/* <ProductNotFound /> */}
      </>
    }
  </>

}