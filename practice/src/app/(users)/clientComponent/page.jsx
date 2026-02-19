"use client"
import Counter from '@/app/components/Counter'
import React, { useEffect, useState } from 'react'

const clientComponent =  () => {

  const fetchData = async()=>{
    const response =await fetch('https://dummyjson.com/products/1')
    const data =await response.json();
    console.log(data);
    setdata(data)
    return data

  }
const [data,setdata]=useState([])
  

  useEffect(()=>{
fetchData()

  },[])
  return (

   <>
   <p>Client component</p>
  <button onClick={()=>alert()}>Click me</button>
  <Counter/>
   </>
  )
}

export default clientComponent