// data fetching in next js server component 
//

import React from 'react'
import ProductCard from '../components/ProductCard'

const fetchProducts = async()=>{
    const res = await fetch('https://dummyjson.com/products',{
        cache:'no-store'
    })

    if(!res.ok){
        throw new Error("failed to load")
    }
    return res.json()
}

const ProductPage =async () => {
    const data = await fetchProducts()

  return (
<>
   <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Products</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>

</>
  )
}

export default ProductPage