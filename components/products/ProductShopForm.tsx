
import { PlaceOrder } from '@/app/actions'
import { FormatToARS } from '@/utils/utils'
import { RadioItemLarge, RadioItemSmall } from '../ui/radio-item'

interface ProductShopFormProps {
  product: Product
}

export const ProductShopForm = ({ product }: ProductShopFormProps) => {
  let shipmentOptions = [
    { key: "no-shipment", text: "Retiro por sucursal", price: 0 },
    { key: "shipment", text: "Envio dentro de Santa Fe Capital", price: +5000 }
  ]

  return (
    <div className="flex flex-col w-full max-w-[600px] h-full p-6 font-[family-name:var(--font-geist-sans)]">
      <h2 className="text-2xl font-semibold mb-4">{product.title}</h2>

      <form action={PlaceOrder} className="flex flex-col flex-1 space-y-4">
        <div className="mb-4">
          <p className="text-lg opacity-35 line-through font-normalnpm  font-[family-name:var(--font-geist-mono)]">{FormatToARS(product.price)}</p>
          <label htmlFor="price" className="font-bold font-[family-name:var(--font-geist-mono)] inline-block text-3xl" >{FormatToARS(product.price - (product.price * product.discount))}</label>
          <input name="price" value={product.price * (1 - product.discount)} id='price' readOnly hidden></input>
        </div>
        <div>
          <p className="block text-sm font-medium text-gray-900">
            Seleccionar Talle
          </p>
          <div className="flex gap-2 mt-2">
            {product.sizes.map((size, i) => (
              <div key={i}>
                <RadioItemSmall value={size} name="size" label={size} required={false} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="block text-sm font-medium text-gray-900">
            Seleccionar Envio
          </p>
          <div className="flex flex-col gap-2 mt-2 w-full ">
            {shipmentOptions.map((shipment) => (
              <div key={shipment.key}>
                <RadioItemLarge label={shipment.text} name="shipment" value={shipment.key} required={true} />
              </div>
            ))}
          </div>
        </div>
        <div className='h-full flex flex-1 items-end justify-end'>
          <button
            type="submit"
            className="w-full h-12 uppercase font-[family-name:var(--font-geist-mono)] bg-slate-950 text-white py-2 px-4 rounded-md border-[1px] cursor-pointer
            hover:bg-slate-700  border-slate-950  disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-300"
          >
            Comprar
          </button>
        </div>
      </form>
    </div>
  )
}