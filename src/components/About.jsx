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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia incidunt dicta eaque non ab ad inventore magni architecto quidem rerum.</p>
    </div>
  )
}
