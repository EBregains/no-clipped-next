interface Product {
  id: number
  title: string,
  url: string,
  image: {
    url: string,
    alt: string
  },
  sizes: string[],
  subtitle?: string,
  price: number,
  discount: number,
  inStock: boolean
}

interface ShipmentMethods {

}