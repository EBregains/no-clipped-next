export const routes = [
  {
    name: "Home",
    url: "/"
  },
  {
    name: "Productos",
    url: "/products"
  },
  {
    name: "Galeria",
    url: "/gallery"
  },
]

export const productos: Product[] = [
  {
    id: 1,
    title: "Remera Clasica",
    image: {
      url: "/No.clipped-59.jpg",
      alt: "Sample Product Image"
    },
    sizes: ["S", "M", "L", "XL", "XXL"],
    price: 26000,
    discount: 0.10,
    inStock: true,
    url: "noclipped-clasica-negra"
  },
]