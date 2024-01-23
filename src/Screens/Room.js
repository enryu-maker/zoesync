import React from 'react'
import Card from '../Component/Card'
import FlatList from 'flatlist-react';

export default function Room() {
    const [cleaned, setCleaned] = React.useState(false)
    const data = [
        {
            id: 0,
            occupied: false,
            name: "",
            bed_id: 'B1'
        },
        {
            id: 1,
            occupied: true,
            name: "Shreyash",
            bed_id: 'B2'
        },
        {
            id: 2,
            occupied: true,
            name: "Poonam",
            bed_id: 'B3'
        },
        {
            id: 3,
            occupied: true,
            name: "Om",
            bed_id: 'B4'
        },
    ]
    return (
        <div>
            <div className='h-[70px] bg-blue-600 w-[100vw] flex justify-center items-center'>
                <div className='w-[92%] flex justify-between items-center'>
                    <h1 className='text-white font-black text-3xl tracking-widest'>
                        ZoeSYNC .
                    </h1>
                    {/* <h1 className='text-white font-black text-3xl tracking-widest'>
                        R-189
                    </h1> */}
                    <h3 className='text-white font-regular tracking-normal'>
                        Welcome back, <span className='text-white text-lg font-bold tracking-normal'>
                            Doctor
                        </span>
                    </h3>
                </div>
            </div>
            <div className='p-5 space-y-5' >
                <h1 className='text-blue-600 font-black text-3xl tracking-widest'>
                    Room Overview (R-189)
                </h1>
                <h1 className='text-blue-600 font-black text-xl tracking-widest'>
                    Bed Status :
                </h1>
                <div className='flex flex-wrap w-[92%] self-center py-6 overflow-y-scroll justify-evenly items-center'>
                    <FlatList
                        list={data}
                        renderItem={(item, index) => {
                            return <Card key={index} item={item} />
                        }}
                    />
                </div>

                <h1 className='text-blue-600 font-black text-xl tracking-widest'>
                    Cleaning Status :
                </h1>
                <button
                    className='bg-green-600 px-5 py-2 rounded-lg font-bold text-white tracking-widest'>
                    Cleaned
                </button>
            </div>
        </div>
    )
}
