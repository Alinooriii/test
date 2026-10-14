
function Card({ product, onUpdate }) {
  // const handleUpdate = () => {
  //   const newTitle = prompt(
  //     'Enter new product title:',
  //     product.todo
  //   )

  //   if (newTitle && newTitle.trim()) {
  //     onUpdate(product.id, newTitle.trim())
  //   }
  // }

  return (
    <form onSubmit={handleUpdate}>
      { <div className=' border border-black rounded w-full bg-black flex justify-center item-center text-white text-[25px] text-shadow-2xs'> {todos.todo}</div>
      
      
      
      
      /* <div className="rounded-xl border bg-white p-4 shadow-sm">
      <img
      
        className="mb-3 h-40 w-full rounded-lg object-contain"
      />

      <h2 className="font-semibold">
        {product.title}
      </h2>

      <p className="mt-2 text-indigo-600">
        ${product.price}
      </p>

      <button 
      type="submit"
   
        className="mt-4 w-full rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
      >
        Edit Product
      </button>
    </div> */
    
    
    
    
    }
    </form>
  )
}

export default Card
