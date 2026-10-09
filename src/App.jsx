import { useState } from 'react'
import Sidebar from './components/Sidebar'
import SearchBar from './components/SearchBar'
import ProductList from './components/ProductList'
import CartSummary from './components/CartSummary'
import { products } from './data/testProducts'

function App() {
  const [search, setSearch] = useState('')
  const [bag, setBag] = useState([])

  const filtered = products.filter((p) =>
    `${p.name} ${p.subtitle}`.toLowerCase().includes(search.toLowerCase())
  )

  const addToBag = (product) => {
    setBag((current) =>
      current.some((item) => item.id === product.id) ? current : [...current, product]
    )
  }

  return (
    <div className="flex min-h-screen gap-4 bg-[#ececec] p-4">
      <Sidebar />
      <main className="flex-1">
        <SearchBar value={search} onChange={setSearch} />
        <div className="mt-6">
          {filtered.length === 0 ? (
            <p className="text-center text-gray-500">No products found.</p>
          ) : (
            <ProductList products={filtered} onAdd={addToBag} />
          )}
        </div>
      </main>
      <CartSummary items={bag} onViewBag={() => alert('Go to /cart')} />
    </div>
  )
}

export default App