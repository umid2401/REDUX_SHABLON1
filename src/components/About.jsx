import React from 'react'
import { useSelector } from 'react-redux'
// import { productAction } from '../redux/actions/actions';
export default function About() {
    const { products } = useSelector(state => state.store)
  return (
    <div>
        {products.length&&products.map((item,index)=>(
            <p key={index}>{item.email}</p>
        ))}
    </div>
  )
}
