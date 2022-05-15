import {Link} from 'react-router-dom'
import React from 'react'
import styles from'./ProductList.module.css'
import {useState, useEffect} from 'react' //react hook
import Title from './Title'
import QuantityBtn from './QuantityBtn'

export default function ProductList() {

    let [productList,setProductList]=useState([])
    
    useEffect(()=>{fetch('https://hoyinleung.github.io/demoapi/react-basic-product.json')
        .then(response=>response.json())
        .then(data=>setProductList(data))},[])
    
  return (
    <>  
        <Title mainTitle='Choose the product'/>

        <div>{
            productList.map(product=>(
                
                <React.Fragment className={styles.productBorder} key={product.id}>
                    {product.name}<br/>
                    {product.price}<br/>
                    <Link to={'/product_detail/'+product.id}>
                        <img src={process.env.PUBLIC_URL+'/img/'+product.image}/><br/>
                    </Link>
                    {product.description}<br/>
                    
                    <QuantityBtn productInfo={product}/>
                </React.Fragment>
                )
            )
        }    
        </div>
    </>
  )
}
