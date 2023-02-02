import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { productAction } from '../redux/actions/actions';

export default function Home() {
    const dispatch = useDispatch()
    const { products } = useSelector(state => state.store)
    
    useEffect(() => {
        axios.get("https://reqres.in/api/users?page=2").then(res => {
            dispatch(productAction(res.data.data))
            console.log(res.data.data);
            
        })
            .catch(err => {
                console.log(err);
            })

    }, []);

    return (
        <div>

           {products.length&&products.map((item,index)=>(
            <div key={index}>
                <img src={item.avatar} alt="" />
            </div>
           ))
           }

            
        </div>
    )
}
