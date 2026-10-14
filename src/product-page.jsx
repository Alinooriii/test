import axios from 'axios'
import { useEffect, useMemo, useState } from 'react'
import Card from './card'


function  ProductPage() {
  const [product, setProduct] = useState([])
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')
  const [maxPrice, setMaxPrice] = useState(2000)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(
          'https://dummyjson.com/todos'
           
        )
         console.log(response)
        setProduct(response.data.todos)
      } catch (error) {
           
        console.error('Failed to fetch products:', error)
      } finally {
        setLoading(false)
      }
    }


    getProduct()
  }, [])

  

  const categories = useMemo(
    () => [...new Set(product.((item) => item.category))].sort(),
    [product]
  )

  const filteredProducts = product.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchesCategory =
      category === 'all' || item.category === category

    const matchesPrice = item.price <= maxPrice

    return matchesSearch && matchesCategory && matchesPrice
  })

  const resetFilters = () => {
    setSearch('')
    setCategory('all')
    setMaxPrice(2000)
  }
  
const updateProduct = async (id, newTitle) => {
  try {
    const response = await axios.put(
      `https://dummyjson.com/products/${id}`,
      {
        title: newTitle,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    // Update product in React state
    setProduct((prevProducts) =>
      prevProducts.((item) =>
        item.id === id
          ? { ...item, ...response.data }
          : item
      )
    )

    console.log('Product updated:', response.data)
  } catch (error) {
    console.error('Failed to update product:', error)
  }
}


  return (
    <div className='h[1000px] min-h-screen w-full bg-blue-500 flex justify-center item-center'>
     <div className='min-h-screen bg-gray-300 w-[25%]'>
           Product.map
           <Card/>


map





     </div>













    </div>
//     <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-10">
//       <div className="mx-auto max-w-7xl">

//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold tracking-tight text-slate-900">
//             Our Products
//           </h1>
//           <p className="mt-2 text-sm text-slate-500">
//             Discover products you'll love.
//           </p>
//         </div>

//         {/* Filter panel */}
//         <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

//           <div className="mb-6 flex items-center justify-between">
//             <h2 className="text-lg font-semibold text-slate-800">
//               <span className="mr-2">☰</span>
//               Filters
//             </h2>

//             <button
//               onClick={resetFilters}
//               className="rounded-lg px-3 py-2 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50"
//             >
//               Reset all
//             </button>
//           </div>

//           <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

//             {/* Search */}
//             <div>
//               <label
//                 htmlFor="search"
//                 className="mb-2 block text-sm font-medium text-slate-700"
//               >
//                 Search products
//               </label>

//               <input
//                 id="search"
//                 type="text"
//                 placeholder="Search by product name..."
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
//               />
//             </div>

//             {/* Category */}
//             <div>
//               <label
//                 htmlFor="category"
//                 className="mb-2 block text-sm font-medium text-slate-700"
//               >
//                 Category
//               </label>

//               <select
//                 id="category"
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//                 className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm capitalize outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
//               >
//                 <option value="all">All categories</option>

//                 {categories.((product) => (
//                   <option key={product} value={product}>
//                     {item.replaceAll('-', ' ')}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Price slider */}
//             <div>
//               <div className="mb-3 flex items-center justify-between">
//                 <label
//                   htmlFor="price"
//                   className="text-sm font-medium text-slate-700"
//                 >
//                   Maximum price
//                 </label>

//                 <span className="rounded-lg bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-600">
//                   ${maxPrice}
//                 </span>
//               </div>

//               <input
//                 id="price"
//                 type="range"
//                 min="0"
//                 max="2000"
//                 step="10"
//                 value={maxPrice}
//                 onChange={(e) => setMaxPrice(Number(e.target.value))}
//                 className="w-full cursor-pointer accent-indigo-600"
//               />

//               <div className="mt-1 flex justify-between text-xs text-slate-400">
//                 <span>$0</span>
//                 <span>$2,000</span>
//               </div>
//             </div>
//           </div>

//           {/* Results count */}
//           <div className="mt-6 border-t border-slate-100 pt-4 text-sm text-slate-500">
//             Showing{' '}
//             <span className="font-semibold text-slate-800">
//               {filteredProducts.length}
//             </span>{' '}
//             of{' '}
//             <span className="font-semibold text-slate-800">
//               {product.length}
//             </span>{' '}
//             products
//           </div>
//         </section>

//         {/* Products */}
//         {loading ? (
//           <p className="py-12 text-center text-slate-500">
//             Loading products...
//           </p>
//         ) : filteredProducts.length > 0 ? (

// <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-6">
//   {filteredProducts.((item) => (
//     <Card
//       product={item}
//       key={item.id}
//       onUpdate={updateProduct}
//     />
//   ))}
// </div>

//         ) : (
//           <div className="rounded-2xl border border-slate-200 bg-white px-4 py-16 text-center">
//             <h2 className="text-xl font-semibold text-slate-800">
//               No products found
//             </h2>

//             <p className="mt-2 text-sm text-slate-500">
//               Try changing your search or filters.
//             </p>

//             <button
//               onClick={resetFilters}
//               className="mt-5 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
//             >
//               Clear filters
//             </button>
//           </div>
//         )}
//       </div>
//     </main>
  )
}

export default ProductPage