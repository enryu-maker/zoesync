import React from 'react'
import { Image } from '../Assets/image'
import { useNavigate } from 'react-router-dom'
export default function Card({
    item
}) {
    const navigate = useNavigate()
    return (
        <button 
        onClick={()=>{
            navigate('/info',{
                state:item
            })
        }}
        className='h-[300px] flex flex-col justify-evenly items-center w-[280px] shadow-lg bg-white rounded-md'>
            <img src={Image.bed}
                className='h-[120px] w-auto'
            />
            <div className='flex flex-col justify-center items-start w-[92%] space-y-5'>
                {
                    item.occupied ?
                        <>
                            <p className='font-regular'>
                                Bed No :  <span
                                    className='font-semibold'
                                >
                                    {item.bed_id}
                                </span>
                            </p>
                            <p className='font-regular'>
                                Patient Name : <span
                                    className='font-semibold'
                                >
                                    {item.name}
                                </span>
                            </p>
                        </>
                        :
                        <>
                            <p className='font-regular'>
                                Bed No :  <span
                                    className='font-semibold'
                                >
                                    {item.bed_id}
                                </span>
                            </p>
                            <h3 className='text-green-600 font-bold text-lg tracking-widest text-center self-center '>
                                Bed Available
                            </h3>
                        </>
                }
            </div>
        </button>
    )
}
