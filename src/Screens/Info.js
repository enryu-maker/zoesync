import React from "react"
import { useDispatch } from "react-redux"
import { GetPatient } from "../Store/actions"
import { useLocation } from "react-router-dom"

export const PatientInfo = ({
}) => {
    const {pathname} = useLocation()
    const [data, setData] = React.useState([])
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(GetPatient(pathname.split('/')[2], setData))
    }, [])
    return (
        <div className="h-full w-full">
            <p className=' border-b-2 py-5 text-blue-600 tracking-widest font-bold text-center text-3xl'>
                Patient Details
            </p>
            <div className="flex flex-row justify-between items-start mt-10">
                <div className="w-[25%] flex-col space-y-5 rounded-lg shadow-lg flex justify-evenly items-center py-[20px]">
                    <img class="inline h-[180px] rounded-full"
                        src="https://robohash.org/70e4bce94ce28439fd4fbe2e38a7e5be?set=set4&bgset=&size=400x400" />
                    <p className=' text-blue-600 tracking-widest font-bold text-center text-2xl'>
                        {data?.firstname} {data?.lastname}
                    </p>
                </div>
                <div className="w-[70%]">
                    <div className="w-[100%] rounded-lg shadow-lg h-[10%] p-4 space-y-2">
                        <p className=' text-blue-600 tracking-widest font-bold text-start text-2xl'>
                            About :
                        </p>
                        <div className="flex flex-wrap w-[100%] justify-between items-center space-y-2">
                            <p className=' text-gray-600 w-[40%] tracking-widest font-semibold text-xl '>
                                First Name : {data?.firstname}
                            </p>
                            <p className=' text-gray-600 w-[40%] tracking-widest font-semibold  text-xl '>
                                Last Name : {data?.lastname}
                            </p>
                            <p className=' text-gray-600 w-[40%] tracking-widest font-semibold  text-xl '>
                                Gender : {data?.gender}
                            </p>
                            <p className=' text-gray-600 w-[40%] tracking-widest font-semibold  text-xl '>
                                Contact : {data?.contact_number}
                            </p>
                        </div>
                    </div>
                    <div className="w-[100%] rounded-lg shadow-lg h-[10%] mt-6 p-4 space-y-2">
                        <p className=' text-blue-600 tracking-widest font-bold text-start text-2xl'>
                            Emergency Details :
                        </p>
                        <div className="flex flex-wrap w-[100%] justify-between items-center space-y-2">
                            <p className=' text-gray-600 w-[40%] tracking-widest font-semibold text-xl '>
                                Name : {data?.emergency_contact?.name}
                            </p>
                            <p className=' text-gray-600 w-[40%] tracking-widest font-semibold  text-xl '>
                                Phone : {data?.emergency_contact?.phone}
                            </p>
                            <p className=' text-gray-600 w-[40%] tracking-widest font-semibold  text-xl '>
                                Relation : {data?.emergency_contact?.relationship}
                            </p>
                        </div>
                    </div>
                    <div className="w-[100%] rounded-lg shadow-lg h-[10%] mt-6 p-4 space-y-2">
                        <p className=' text-blue-600 tracking-widest font-bold text-start text-2xl'>
                            Hospital Admission Details :
                        </p>
                        <div className="flex flex-wrap w-[100%] justify-between items-center space-y-2">
                            <p className=' text-gray-600 w-[40%] tracking-widest font-semibold text-xl '>
                                Date : {data?.admission_date}
                            </p>
                            <p className=' text-gray-600 w-[40%] tracking-widest font-semibold  text-xl '>
                                Nurse : {data?.attending_nurse}
                            </p>
                            <p className=' text-gray-600 w-[40%] tracking-widest font-semibold  text-xl '>
                                Doctor : {data?.attending_physician}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const MedicationInfo = ({
}) => {
    const {pathname} = useLocation()
    const [data, setData] = React.useState([])
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(GetPatient(pathname.split('/')[2], setData))
    }, [])
    return (
        <div className="h-full w-full">
            <p className=' border-b-2 py-5 text-blue-600 tracking-widest font-bold text-center text-3xl'>
                Medication Details
            </p>
            <div className="w-[100%] rounded-lg shadow-lg mt-6 p-4 space-y-2">
                {
                    data?.medication?.map((item) => (
                        <div className="flex flex-wrap w-[100%] justify-between items-center space-y-2">
                            <p className=' text-gray-600 w-[40%] tracking-widest font-semibold text-xl '>
                                Medicine Time : {item?.medtime}
                            </p>
                            <p className=' text-gray-600 w-[40%] tracking-widest font-semibold  text-xl '>
                                Medicine Name : {item?.medname}
                            </p>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export const MedicationReport = ({
}) => {
    const {pathname} = useLocation()
    const [data, setData] = React.useState([])
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(GetPatient(pathname.split('/')[2], setData))
    }, [])
    return (
        <div className="h-full w-full">
            <p className=' border-b-2 py-5 text-blue-600 tracking-widest font-bold text-center text-3xl'>
                Medication Report
            </p>
            <div className="w-[100%] rounded-lg shadow-lg mt-6 p-4 space-y-2">
                {
                    data?.medicationHistory?.map((item) => (
                        <div className="flex flex-wrap w-[100%] justify-between items-center space-y-2">
                            <p className=' text-gray-600 w-[40%] tracking-widest font-semibold text-xl '>
                                Disease Date : {item?.date}
                            </p>
                            <p className=' text-gray-600 w-[40%] tracking-widest font-semibold  text-xl '>
                                Disease Name : {item?.disease}
                            </p>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}