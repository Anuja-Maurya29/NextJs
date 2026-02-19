import React from 'react'



const productDetail =async ({params}) => {
  const {id} = await params
  const res = await fetch(`https://dummyjson.com/products/${id}`)

  const product = await res.json()
  return (
   <>
  <p className='text-white'>{product.title}</p> 
   </>
  )
}

export default productDetail