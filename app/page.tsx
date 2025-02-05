import Hero from "@/components/hero/Hero";
import ProductCard from "@/components/products/ProductCard";
import ProductList from "@/components/products/ProductList";
import { productos } from "@/config";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] mb-24">
      <Hero />
      <ProductList title="Nuevo">
        {productos.map(product => {
          return <ProductCard
            key={product.id}
            title={product.title}
            url={product.url}
            image_url={product.image.url}
            price={product.price}
            discount={product.discount}
          />
        })}
      </ProductList>
    </div>
  );
}
