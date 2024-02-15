import React from "react"
import { useDispatch } from "react-redux"
import { GetPatient } from "../Store/actions"
import { useLocation } from "react-router-dom"
import { FaRegUser } from "react-icons/fa";
export const PatientInfo = ({
}) => {
    const { state } = useLocation()
    const [data, setData] = React.useState([])
    const dispatch = useDispatch()
    // React.useEffect(() => {
    //     dispatch(GetPatient(pathname.split('/')[2], setData))
    // }, [])
    return (
        <div className="h-full w-full">
            <p className=' border-b-2 py-5 text-blue-600 tracking-widest font-bold text-center text-3xl'>
                Patient Details
            </p>
            <div className="flex flex-row justify-between items-start mt-10">
                <div className="w-[25%] flex-col space-y-5 rounded-lg shadow-lg flex justify-evenly items-center py-[20px]">
                    <FaRegUser size={100} />
                    <p className=' text-blue-600 tracking-widest font-bold text-center text-2xl'>
                        {state?.patient?.first_name} {state?.patient?.last_name}
                    </p>
                </div>
                <div className="w-[70%]">
                    <div className="w-[100%] rounded-lg shadow-lg h-[10%] p-4 space-y-2">
                        <p className=' text-blue-600 tracking-widest font-bold text-start text-2xl'>
                            About :
                        </p>
                        <div className="flex flex-wrap w-[100%] justify-between items-center space-y-2">
                            <p className=' text-gray-600 w-[40%] tracking-widest font-semibold text-xl '>
                                First Name : {state?.patient?.first_name}
                            </p>
                            <p className=' text-gray-600 w-[40%] tracking-widest font-semibold  text-xl '>
                                Last Name : {state?.patient?.last_name}
                            </p>
                            <p className=' text-gray-600 w-[40%] tracking-widest font-semibold  text-xl '>
                                Gender : {state?.patient?.gender}
                            </p>
                            <p className=' text-gray-600 w-[40%] tracking-widest font-semibold  text-xl '>
                                Blood Group : {state?.patient?.blood_group}
                            </p>
                            <p className=' text-gray-600 w-[40%] tracking-widest font-semibold  text-xl '>
                                Age : {state?.patient?.age}
                            </p>
                        </div>
                    </div>
                    <div className="w-[100%] rounded-lg shadow-lg h-[10%] mt-6 p-4 space-y-2">
                        <p className=' text-blue-600 tracking-widest font-bold text-start text-2xl'>
                            Emergency Details :
                        </p>
                        <div className="flex flex-wrap w-[100%] justify-between items-center space-y-2">
                            <p className=' text-gray-600 w-[40%] tracking-widest font-semibold text-xl '>
                                Name : {state?.patient?.emergency_contact?.name}
                            </p>
                            <p className=' text-gray-600 w-[40%] tracking-widest font-semibold  text-xl '>
                                Phone : {state?.patient?.emergency_contact?.phonenumber}
                            </p>
                            <p className=' text-gray-600 w-[40%] tracking-widest font-semibold  text-xl '>
                                Relation : {state?.patient?.emergency_contact?.relation}
                            </p>
                        </div>
                    </div>
                    <div className="w-[100%] rounded-lg shadow-lg h-[10%] mt-6 p-4 space-y-2">
                        <p className=' text-blue-600 tracking-widest font-bold text-start text-2xl'>
                            Hospital Admission Details :
                        </p>
                        <div className="flex flex-wrap w-[100%] justify-between items-center space-y-2">
                            <p className=' text-gray-600 w-[40%] tracking-widest font-semibold text-xl '>
                                Date : {state?.patient?.admission_date}
                            </p>
                            <p className=' text-gray-600 w-[40%] tracking-widest font-semibold  text-xl '>
                                Nurse : {state?.patient?.attending_nurse}
                            </p>
                            <p className=' text-gray-600 w-[40%] tracking-widest font-semibold  text-xl '>
                                Doctor : {state?.patient?.attending_physician}
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
    const { state } = useLocation()
    console.log(state)
    return (
        <div className="h-full w-full">
            <p className=' border-b-2 py-5 text-blue-600 tracking-widest font-bold text-center text-3xl'>
                Medication Details
            </p>
            {
                state?.patient?.medication?.map((item) => (
                    <div className="w-[100%] rounded-lg flex flex-wrap justify-evenly items-center shadow-lg mt-6 py-4">
                            <p className=' text-gray-600 w-[40%] capitalize text-base '>
                                Medicine Time : {item?.take} {item?.timing} Food
                            </p>
                            <p className=' text-gray-600 w-[40%]  text-base '>
                                Medicine Name : {item?.medicine?.medicine_name}
                            </p>
                            <button className={`${item?.medicine?.status?"bg-green-600":"bg-red-600"} py-1 px-4 rounded-lg text-white`}>
                                Feed : {item?.medicine?.status?"Yes":"No"}
                            </button>
                    </div>

                ))
            }

        </div>
    )
}

export const MedicationReport = ({
}) => {
    const { state } = useLocation()
    return (
        <div className="h-full w-full">
            <p className=' border-b-2 py-5 text-blue-600 tracking-widest font-bold text-center text-3xl'>
                Medication Report
            </p>
            <div className="w-[100%] rounded-lg shadow-lg mt-6 p-4 space-y-2">
                {
                    state?.patient?.medicationHistory?.map((item) => (
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