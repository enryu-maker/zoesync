import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function BedInfo() {
    const navigate = useNavigate()
    const { state } = useLocation()
    return (
        <div>
            <div className='h-[70px] bg-blue-600 w-[100vw] flex justify-center items-center'>
                <div className='w-[92%] flex justify-between items-center'>
                    <h1 className='text-white font-black text-3xl tracking-widest'>
                        ZoeSYNC .
                    </h1>
                    <h3 className='text-white font-bold text-xl tracking-normal'>
                        Bed No : <span className='text-white text-xl font-bold tracking-normal'>
                            {state?.bed_id}
                        </span>
                    </h3>
                </div>
            </div>
            <div className='flex w-full items-center justify-center py-5 h-full font-extrabold text-lg' >
                <p className='w-[92%] self-center'>
                    <span
                        onClick={() => {
                            navigate(-1)
                        }}
                        className=' font-extrabold text-lg cursor-pointer hover:text-blue-600' >Room&nbsp; </span> / {state?.bed_id}
                </p>
            </div>
            <div className='flex bg-white items-start justify-evenly w-full h-full' >
                <div className=' h-[250px] w-[30%] flex-col flex justify-evenly items-start'>
                    <p className=' border-b-2 font-medium text-lg'>
                        Patient Details
                    </p>
                    <p className=' border-b-2 font-medium text-lg'>
                        Medication
                    </p>
                    <p className=' border-b-2 font-medium text-lg'>
                        Medical Report
                    </p>
                </div>
                <div className=' h-[50vh] w-[70%] bg-black'>
                    hi
                </div>
            </div>
        </div>
    )
}
