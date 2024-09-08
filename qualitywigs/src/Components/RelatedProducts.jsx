import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/Context'
import Title from './Title'
import ProductItem from './ProductItem'

const RelatedProducts = ({category, size}) => {

    const {products} = useContext(ShopContext)
    const [related, setRelated] = useState([])

    useEffect(() => {

        if (products.length > 0){
            if(products.length > 0){
                let temp = products.slice();
                
                temp = temp.filter((item) => category === item.category )
                temp = temp.filter((item) => size === item.size )

                setRelated(temp.slice(0,5))
            }
        }
    },[products])

  return (
    <div className='my-24'>
        <div className='text-center text-3xl py-2'>
            <Title text1={"RELATED"} text2={"PRODUCTS"}/>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {related.map((item,index) => (
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
            }
        </div>

    </div>
  )
}

export default RelatedProducts