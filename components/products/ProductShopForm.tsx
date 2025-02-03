
import { PlaceOrder } from '@/app/actions'
import { FormatToARS } from '@/utils/utils'
import RadioItemLarge from '../ui/radio-item'

interface ProductShopFormProps {
  product: Product
}

export const ProductShopForm = ({ product }: ProductShopFormProps) => {
  let shipmentOptions = [
    { key: "no-shipment", text: "Retiro por sucursal", price: 0 },
    { key: "shipment", text: "Envio dentro de Santa Fe Capital", price: +5000 }
  ]

  return (
    <div className="w-full p-6 font-[family-name:var(--font-geist-sans)]">
      <h2 className="text-2xl font-semibold mb-4">{product.title}</h2>

      <form action={PlaceOrder} className="space-y-4">
        <div className="mb-4">
          <p className="text-lg opacity-35 line-through font-normalnpm  font-[family-name:var(--font-geist-mono)]">{FormatToARS(product.price)}</p>
          <label htmlFor="price" className="font-bold font-[family-name:var(--font-geist-mono)] inline-block text-3xl" >{FormatToARS(product.price - (product.price * product.discount))}</label>
          <input name="price" value={product.price * (1 - product.discount)} id='price' readOnly hidden></input>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Seleccionar Talle
          </label>
          <div className="flex gap-2 mt-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                type="button"
                className={`py-2 px-2 text-sm size-10 border rounded-md font-[family-name:var(--font-geist-mono)]
`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Seleccionar Envio
          </label>
          <div className="flex flex-col gap-2 mt-2 w-full ">
            {shipmentOptions.map((shipment) => (
              <div key={shipment.key}>
                <RadioItemLarge label={shipment.text} name="shipment" value={shipment.key} required={true} />
              </div>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-slate-950 text-white py-2 px-4 rounded-md border-[1px]
            hover:bg-slate-100  border-slate-950 hover:text-slate-950 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-300"
        >
          Add to Cart
        </button>
      </form>

      <div className="mt-4 text-sm text-gray-500">
        <p>In stock: {product.inStock ? 'Yes' : 'No'}</p>
        <p>Slug: {product.url}</p>
      </div>
    </div>
  )
}