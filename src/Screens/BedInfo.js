import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { MedicationInfo, MedicationReport, PatientInfo } from './Info'
import { useDispatch } from 'react-redux'
import { Discharge } from '../Store/actions'

export default function BedInfo() {
    const navigate = useNavigate()
    const { state } = useLocation()
    const [count, setCount] = React.useState(0)
    const dispatch = useDispatch()
    function changeAbout(count,state){
        switch(count){
            case 0 :
                return <PatientInfo item={state}/>
            case 1 :
                return <MedicationInfo item={state}/>
            case 2 :
                return <MedicationReport item={state}/>
        }
    }

    return (
        <div>
            <div className='h-[70px] bg-blue-600 w-[100vw] flex justify-center items-center'>
                <div className='w-[92%] flex justify-between items-center'>
                    <h1 className='text-white font-black text-3xl tracking-widest'>
                        ZoeSYNC .
                    </h1>
                    <h3 className='text-white font-bold text-xl tracking-normal'>
                        Bed No : <span className='text-white text-xl font-bold tracking-normal'>
                            {state?.bed_no}
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
                        className=' font-extrabold text-lg cursor-pointer hover:text-blue-600' >Room&nbsp; </span> / {state?.bed_no}
                </p>
            </div>
            <div className='flex mt-10 bg-white flex-row items-start justify-evenly w-full h-full' >
                <div className=' flex-col flex justify-between items-start space-y-5'>
                    <button
                        onClick={() => {
                            setCount(0)
                        }}
                        className=' border-b-2 font-medium text-lg'>
                        Patient Details
                    </button>
                    <button
                        onClick={() => {
                            setCount(1)
                        }}
                        className=' border-b-2 font-medium text-lg'>
                        Medication
                    </button>
                    <button
                        onClick={() => {
                            setCount(2)
                        }}
                        className=' border-b-2 font-medium text-lg'>
                        Medical Report
                    </button>
                    <button
                        onClick={() => {
                            dispatch(Discharge(navigate))
                        }}
                        className=' border-b-2 text-red-600 font-medium text-lg'>
                        Discharge
                    </button>
                </div>
                <div className='h-[20vh] w-[1px] bg-black' />
                <div className=' h-[50vh] w-[75%]'>
                    {changeAbout(count,state)}
                </div>
            </div>
        </div>
    )
}
