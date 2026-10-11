import products from "../data/products";
import ProductCard from "./ProductCard";

function ProductList({ searchTerm }) {
  // This will show only products whose names match the search term
  const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div> {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500">Sorry, we don't have that item.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[24px] justify-items-center">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product}/>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;