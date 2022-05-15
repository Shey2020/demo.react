import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Title from './Title'
import QuantityBtn from"./QuantityBtn"
import { useState,useEffect } from 'react'

export default function ProductDetail() {

  let params = useParams()
  let {productDetail,setProductDetail}=useState(null)

  useEffect(()=>{fetch('https://hoyinleung.github.io/demoapi/react-basic-product.json')
        .then(response=>response.json())
        .then(data=>{
            let productInfo=data.find((element)=>{
              return element.id===parseInt(params.id)
            })
            setProductDetail(productInfo)
        })
      
      },[])

  return (
    <div>
      {productDetail &&
        <div>
        <Title mainTitle={params.id+'Product Details'}/>
          <img src={process.env.PUBLIC_URL+'/img/'+productDetail.image} 
          alt={productDetail.name} width="400"/>
          <p>Name: {productDetail.name}</p>
          <p>Price: {productDetail.price}</p>
          <p>Description: {productDetail.description}</p>
        <QuantityBtn productInfo={productDetail}/>
        </div>
      }
      <Link to='/'>Back to Product List</Link>
    
    </div>
  )
}
