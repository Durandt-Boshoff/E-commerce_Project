import ProductCard from './ProductCard'

function ProductList({ products, onAdd }) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          subtitle={product.subtitle}
          price={product.price}
          image={product.image}
          onAdd={() => onAdd(product)}
        />
      ))}
    </div>
  )
}

export default ProductList