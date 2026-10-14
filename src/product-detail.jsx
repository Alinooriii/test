import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

function ProductDetails() {
  const { id } = useParams()

  const [todo, setTodo] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true)
      setError('')
      setProduct(null)

      try {
        const response = await axios.get(
          `https://dummyjson.com/todos`
        )
        setProduct(response.data)
      } catch (error) {
        console.error('Failed to fetch product:', error)
        setError('Product not found or failed to load.')
      } finally {
        setLoading(false)
      }
    }

    getProduct()
  }, [id])

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <p className="text-slate-500">Loading todo details...</p>
      </div>
    )
  }

  // if (error || !product) {
    return (
      <>
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      </>
  //     <main className="min-h-screen bg-slate-50 px-4 py-12 text-center">
  //       <h1 className="text-2xl font-bold text-slate-800">
  //         {error || 'Product not found'}
  //       </h1>
  //       <Link
  //         to="/"
  //         className="mt-5 inline-block rounded-xl bg-indigo-600 px-5 py-3 text-white hover:bg-indigo-700"
  //       >
  //         Back to products
  //       </Link>
  //     </main>
  //   )
  // }

  // return (
  //   <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-10">
  //     <div className="mx-auto max-w-6xl">
  //       <Link
  //         to="/"
  //         className="mb-6 inline-flex items-center gap-2 font-medium text-indigo-600 hover:text-indigo-800"
  //       >
  //         ← Back to products
  //       </Link>

  //       <div className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-2 md:p-8">
  //         <div>
  //           <img
  //             src={product.thumbnail}
  //             alt={product.title}
  //             className="h-80 w-full rounded-2xl bg-slate-50 object-contain p-4 md:h-96"
  //           />

  //           {product.images?.length > 1 && (
  //             <div className="mt-4 grid grid-cols-4 gap-3">
  //               {product.images.slice(0, 4).map((image, index) => (
  //                 <img
  //                   key={`${image}-${index}`}
  //                   src={image}
  //                   alt={`${product.title} ${index + 1}`}
  //                   className="h-20 w-full rounded-xl border border-slate-200 object-contain p-2"
  //                 />
  //               ))}
  //             </div>
  //           )}
  //         </div>

  //         <div className="flex flex-col justify-center">
  //           <p className="text-sm font-medium capitalize text-indigo-600">
  //             {product.category?.replaceAll('-', ' ')}
  //           </p>

  //           <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
  //             {product.title}
  //           </h1>

  //           <p className="mt-4 text-3xl font-bold text-indigo-600">
  //             ${product.price}
  //           </p>

  //           {product.rating != null && (
  //             <p className="mt-3 text-sm text-amber-600">
  //               ★ {product.rating} / 5
  //             </p>
  //           )}

  //           <p className="mt-5 leading-7 text-slate-600">
  //             {product.description}
  //           </p>

  //           <div className="mt-6 space-y-3 border-t border-slate-100 pt-5 text-sm text-slate-600">
  //             {product.brand && (
  //               <p>
  //                 <span className="font-semibold text-slate-800">
  //                   Brand:
  //                 </span>{' '}
  //                 {product.brand}
  //               </p>
  //             )}

  //             {product.stock != null && (
  //               <p>
  //                 <span className="font-semibold text-slate-800">
  //                   Stock:
  //                 </span>{' '}
  //                 {product.stock} available
  //               </p>
  //             )}

  //             {product.sku && (
  //               <p>
  //                 <span className="font-semibold text-slate-800">
  //                   SKU:
  //                 </span>{' '}
  //                 {product.sku}
  //               </p>
  //             )}

  //             {product.warrantyInformation && (
  //               <p>
  //                 <span className="font-semibold text-slate-800">
  //                   Warranty:
  //                 </span>{' '}
  //                 {product.warrantyInformation}
  //               </p>
  //             )}

  //             {product.shippingInformation && (
  //               <p>
  //                 <span className="font-semibold text-slate-800">
  //                   Shipping:
  //                 </span>{' '}
  //                 {product.shippingInformation}
  //               </p>
  //             )}
  //           </div>

  //           <Link
  //             to="/"
  //             className="mt-8 inline-flex w-fit rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
  //           >
  //             Continue shopping
  //           </Link>
  //         </div>
  //       </div>
  //     </div>
  //   </main>
  )
}


export default ProductDetails