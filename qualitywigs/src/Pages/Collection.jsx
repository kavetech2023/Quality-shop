import React, { useContext, useState } from 'react'
import { ShopContext } from '../Context/Context'
import { assets } from '../assets/assets'
import Title from '../Components/title'

const Collection = () => {

  const {products} = useContext(ShopContext)
  const [filter, setFilter] = useState(false)

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
              <input className='w-3' type="checkbox" value={"Men"} /> Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"WoMen"} /> Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Kids"} /> Men
            </p>
          </div>
        </div>
        {/*Filter by Subcategory*/}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${filter? "": "hidden"} sm:block`}>
          <p className='mb-3 text-sm font-medium'>SIZE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Long"} /> Long
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Medium"} /> Medium
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Short"} /> Short
            </p>
          </div>
        </div>
        </div>

        {/*Right Side: Filtered Data*/}

        <div className='flex-1'>
          <div className='flex justify-between text-base sm:text-2xl mb-4'>
            <Title text1={"ALL"} text2={"COLLECTIONS"} />

          </div>

        </div>
        
    </div>
  )
}

export default Collection