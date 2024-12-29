import axios from 'axios'
import React, { useState } from 'react'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Add = ({token}) => {

     const [image1,setImage1]= useState(false)
     const [image2,setImage2]= useState(false)
     const [image3,setImage3]= useState(false)
     const [image4,setImage4]= useState(false)


     const [name, setName] =useState('')
     const [description, setDescription] = useState('')
     const [price, setPrice] = useState('')
     const [category, setCategory] = useState('Men')
     const [subCategory, setSubCategory] = useState('Topwear')
     const [bestseller, setBestSeller] = useState(false)
     const [sizes,setSizes] = useState([])
     
     const onSubmitHandler = async(e) =>{
        e.preventDefault()
        try {
            const formData = new FormData()
            formData.append("name",name)
            formData.append("description",description)
            formData.append("price",price)
            formData.append("category",category)
            formData.append("subCategory",subCategory)
            formData.append("bestseller",bestseller)
            formData.append("sizes",JSON.stringify(sizes))

           image1 &&  formData.append('image1', image1)
           image2 &&  formData.append('image2', image2)
           image3 &&  formData.append('image3', image3)
           image4 &&  formData.append('image4', image4)


           const response = await axios.post(backendUrl + "/api/product/add", formData,{headers:{token}})
           if(response.data.success){
            toast.success(response.data.message)
            setName('')
            setDescription('')
            setImage1(false)
            setImage2(false)
            setImage3(false)
            setImage4(false)
            setPrice('')
           }
           else{
            toast.error(response.data.message)
           }
            
        } catch (error) {
            
        }


     }
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'> 
        <div>
            <p className='mb-2 '>Upload Image</p>


            <div className='flex gap-2'>
                <label htmlFor="image1">
                    <img className='w-24 cursor-pointer'  src={!image1 ? "https://png.pngtree.com/png-vector/20221016/ourmid/pngtree-upload-file-vector-single-icon-clipart-transparent-background-png-image_6318311.png":URL.createObjectURL(image1)} alt="" />
                    <input onChange={(e)=>setImage1(e.target.files[0]) } type="file"  id='image1' hidden/>
                </label>
                <label htmlFor="image2">
                    <img className='w-24 cursor-pointer' src={!image2 ? "https://png.pngtree.com/png-vector/20221016/ourmid/pngtree-upload-file-vector-single-icon-clipart-transparent-background-png-image_6318311.png":URL.createObjectURL(image2)} alt="" />
                    <input onChange={(e)=>setImage2(e.target.files[0]) } type="file"  id='image2' hidden/>
                </label>
                <label htmlFor="image3">
                    <img className='w-24 cursor-pointer'src={!image3 ? "https://png.pngtree.com/png-vector/20221016/ourmid/pngtree-upload-file-vector-single-icon-clipart-transparent-background-png-image_6318311.png":URL.createObjectURL(image3)} alt="" />
                    <input onChange={(e)=>setImage3(e.target.files[0]) } type="file"  id='image3' hidden/>
                </label>
                <label htmlFor="image4">
                    <img className='w-24 cursor-pointer' src={!image4 ? "https://png.pngtree.com/png-vector/20221016/ourmid/pngtree-upload-file-vector-single-icon-clipart-transparent-background-png-image_6318311.png":URL.createObjectURL(image4)} alt="" />
                    <input onChange={(e)=>setImage4(e.target.files[0]) } type="file"  id='image4' hidden/>
                </label>
            </div>
        </div>
        <div className='w-full '>
            <p className='mb-2'>Product Name</p>
            <input value={name} onChange={(e)=> setName(e.target.value)} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Product Name' required/>
        </div>
        <div className='w-full '>
            <p className='mb-2'>Product Decription</p>
            <textarea value={description} onChange={(e)=> setDescription(e.target.value)}  className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Add description' required/>
        </div>

        <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
            <div>
                <p className='mb-2'>Product category</p>
                <select onChange={(e)=> setCategory(e.target.value)}  className='w-full px-3 py-2 '>
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                    <option value="Kids">Kids</option>
                </select>
            </div>
            <div>
                <p className='mb-2'>Sub category</p>
                <select onChange={(e)=> setSubCategory(e.target.value)}  className='w-full px-3 py-2 '>
                    <option value="Topwear">Topwear</option>
                    <option value="Bottomwear">Bottomwear</option>
                    <option value="Winterwear">Winterwear</option>
                </select>
            </div>

            <div>
                <p className='mb-2'>Product Price</p>
                <input value={price} onChange={(e)=> setPrice(e.target.value)} className='w-full px-3 py-2 sm:w-[120px]' type="Number" placeholder='25'/>
            </div>
        </div>

        <div>
            <p className='mb-2'>Product Sizes</p>
            <div className='flex gap-3'>
                <div onClick={()=> setSizes(prev => prev.includes("S") ? prev.filter(item=> item!=="S") : [...prev,"S"])}>
                    <p className={`${sizes.includes("S") ? "bg-gray-700 text-white" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>S</p>
                </div>
                <div onClick={()=> setSizes(prev => prev.includes("M") ? prev.filter(item=> item!=="M") : [...prev,"M"])}>
                    <p className={`${sizes.includes("M") ? "bg-gray-700 text-white" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>M</p>
                </div>
                <div onClick={()=> setSizes(prev => prev.includes("L") ? prev.filter(item=> item!=="L") : [...prev,"L"])}>
                    <p className={`${sizes.includes("L") ? "bg-gray-700 text-white" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>L</p>
                </div>
                <div onClick={()=> setSizes(prev => prev.includes("XL") ? prev.filter(item=> item!=="XL") : [...prev,"XL"])}>
                    <p className={`${sizes.includes("XL") ? "bg-gray-700 text-white" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>XL</p>
                </div>
                <div onClick={()=> setSizes(prev => prev.includes("XLL") ? prev.filter(item=> item!=="XLL") : [...prev,"XLL"])}>
                    <p className={`${sizes.includes("XLL") ? "bg-gray-700 text-white" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>XXL</p>
                </div>

            </div>
        </div>

        <div className='flex gap-2 mt-2'>
            <input checked={bestseller} onChange={()=> setBestSeller(prev => !prev)} type="checkbox" id='bestseller' />
            <label className='cursor-pointer ' htmlFor="bestsellter">Add to bestseller</label>
        </div>

        <button className='w-28 py-3 mt-4 bg-gray-900 text-white' type='submit'>Add</button>
    </form>
  )
}

export default Add