import products from "../data/products";
import ProductCard from "./ProductCard";

function ProductList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[24px] justify-items-center">{products.map((product) => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </div>
  );
}

export default ProductList;