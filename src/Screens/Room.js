import React from 'react'
import Card from '../Component/Card'
import FlatList from 'flatlist-react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetClean, GetRoom, UpdateClean } from '../Store/actions';

export default function Room() {
    const [cleaned, setCleaned] = React.useState(false)
    const {state} = useLocation()
    const [data,setData] = React.useState(JSON.parse(state.replace(/'/g, '"')))
    const [bed,setBed] = React.useState([])
    const [loading,setLoading] = React.useState(false)
    const room = useSelector(state=>state.Reducers.room)
    const dispatch = useDispatch()
    React.useEffect(()=>{
        dispatch(GetRoom(setBed,setLoading))
        dispatch(GetClean(setLoading))
        console.log(room)
    },[])
    return (
        <div>
            <div className='h-[70px] bg-blue-600 w-[100vw] flex justify-center items-center'>
                <div className='w-[92%] flex justify-between items-center'>
                    <h1 className='text-white font-black text-3xl tracking-widest'>
                        ZoeSYNC .
                    </h1>
                    <h3 className='text-white font-regular tracking-normal'>
                        Welcome back, <span className='text-white text-lg font-bold tracking-normal'>
                            {data?.title} {data?.Name}
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
                <div className='flex flex-wrap w-[100%] self-center py-6 overflow-y-scroll justify-evenly items-center'>
                    <FlatList
                        list={bed.data}
                        renderItem={(item, index) => {
                            return <Card disable={data?.id==0} key={index} item={item} />
                        }}
                    />
                </div>

                <h1 className='text-blue-600 font-black text-xl tracking-widest'>
                    Cleaning Status :
                </h1>
                <button
                    disabled={data?.id != 0}
                    onClick={()=>{
                        dispatch(UpdateClean())
                    }}
                    className={room?.room?.clean?'bg-green-600 px-5 py-2 rounded-lg font-bold text-white tracking-widest':'bg-red-600 px-5 py-2 rounded-lg font-bold text-white tracking-widest'}>
                    {
                        room?.room?.clean? "Clean" : "Dirty"
                    }
                </button>
            </div>
        </div>
    )
}
