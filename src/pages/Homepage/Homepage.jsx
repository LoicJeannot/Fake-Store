import React, { useEffect, useState } from 'react'
import './Homepage.css'
import axios from 'axios'
import ProductCard from '../../components/ProductCard/ProductCard'


function Homepage () {

  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(
    ()=>{
      axios.get('https://fakestoreapi.com/products')
      .then(res=> {
        setProducts(res.data)
      }
      )
      .catch(err=>console.log(err))
    }, []
  )
  useEffect (
    ()=>{
      axios.get('https://fakestoreapi.com/products/categories/')
      .then(res => {
        setCategories(res.data)
      } 
        )
        .catch (err=>console.log(err))
    }, []
)

const getCategory = (category) => {
  axios.get(`https://fakestoreapi.com/products/category/${category}`)
  .then(res=> {
    console.log(res.data)
    setProducts(res.data)
    }
  )
  .catch (err=>console.log(err))
}

const getAll = () => {
      axios.get('https://fakestoreapi.com/products')
      .then(res=> {
        console.log(res.data)
        setProducts(res.data)
      }
      )
      .catch(err=>console.log(err))
}

return (
    <div className='home-container'>
      <div className='categories-container'>
        {
        <a onClick={getAll} className='category'>All</a>
        }
        {
        categories.map ((item) => <a className='category' key = {item} onClick={() => getCategory(item)} >{item}</a>)
        }
      </div>
      <div className='product-container'>
        {
        products.map (item => <ProductCard key = {item.id} product = {item} />)
        }
        </div>
    </div>
  )
}

export default Homepage
