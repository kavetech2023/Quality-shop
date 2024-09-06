import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/Context'
import { assets } from '../assets/assets'
import Title from '../Components/title'
import ProductItem from '../Components/ProductItem'

const Collection = () => {

  const {products} = useContext(ShopContext)
  const [filter, setFilter] = useState(false)
  const [filteredProducts, setFilteredProducts] = useState([])
  const [category, setCategory] = useState([])
  const [size, setSize] = useState([])


  const toggleFilter = (e) => {
    if (category.includes(e.target.value)){
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }else{
      setCategory(prev => [...prev,e.target.value])
    }
  }

  const toggleSize =(e) =>{
    if (size.includes(e.target.value)){
      setSize(prev=> prev.filter(item => item !== e.target.value))
    }else{
      setSize(prev => [...prev,e.target.value])
    }
  }

  useEffect(() => {
      setFilteredProducts(products)
  },[])

  useEffect(()=>{
      console.log(category)
  },[category])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
        {/*Filter Options*/}
        <div className='min-w-60'>
        <p onClick={()=>setFilter(!filter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden ${filter?"rotate-90":""}`} src={assets.dropdown_icon} alt="" />
        </p>


        {/*Filter by Category*/}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${filter? "": "hidden"} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Men"} onChange={toggleFilter}/> Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"WoMen"} onChange={toggleFilter} /> Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Kids"} onChange={toggleFilter}/> Men
            </p>
          </div>
        </div>
        {/*Filter by Subcategory*/}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${filter? "": "hidden"} sm:block`}>
          <p className='mb-3 text-sm font-medium'>SIZE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Long"} onChange={toggleSize}/> Long
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Medium"} onChange={toggleSize}/> Medium
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Short"} onChange={toggleSize}/> Short
            </p>
          </div>
        </div>
        </div>

        {/*Right Side: Filtered Data*/}

        <div className='flex-1'>
          <div className='flex justify-between text-base sm:text-2xl mb-4'>
            <Title text1={"ALL"} text2={"COLLECTIONS"} />
            {/*Sort by*/}
            <select className='border-2 border-gray-300 px-2 py-1 rounded-sm text-sm'>
              <option value="relevant">Sort by: Relevant</option>
              <option value="low-high">Sort by: Low-High</option>
              <option value="high-low">Sort by: High-Low</option>
            </select>
          </div>

          {/*Map Products*/}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            {filteredProducts.map((item,index) => (
              <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))}
          </div>

        </div>
        
    </div>
  )
}

export default Collection