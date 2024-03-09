import React from "react"
import { useDispatch } from "react-redux"
import { GetMeds, GetPatient, UpdateMeds, getMeds } from "../Store/actions"
import { useLocation } from "react-router-dom"
import { FaRegUser } from "react-icons/fa";
import AddModal from "./AddModal";
export const PatientInfo = ({
}) => {
    const { state } = useLocation()
    const [data, setData] = React.useState([])
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(GetPatient(state?.patient?.id, setData))
    }, [])
    return (
        <div className="h-full w-full">
            <p className=' border-b-2 py-5 text-blue-600 tracking-widest font-bold text-center text-3xl'>
                Patient Details
            </p>
            <div className="flex flex-row justify-between items-start mt-10">
                <div className="w-[25%] flex-col space-y-5 rounded-lg shadow-lg flex justify-evenly items-center py-[20px]">
                    <FaRegUser size={100} />
                    <p className=' text-blue-600 tracking-widest font-bold text-center text-2xl'>
                        {data?.first_name} {data?.last_name}
                    </p>
                </div>
                <div className="w-[70%]">
                    <div className="w-[100%] rounded-lg shadow-lg h-[10%] p-4 space-y-2">
                        <p className=' text-blue-600 tracking-widest font-bold text-start text-2xl'>
                            About :
                        </p>
                        <div className="flex flex-wrap w-[100%] justify-between items-center space-y-2">
                            <p className=' text-gray-600 w-[40%] tracking-widest font-semibold text-xl '>
                                First Name : {data?.first_name}
                            </p>
                            <p className=' text-gray-600 w-[40%] tracking-widest font-semibold  text-xl '>
                                Last Name : {data?.last_name}
                            </p>
                            <p className=' text-gray-600 w-[40%] tracking-widest font-semibold  text-xl '>
                                Gender : {data?.gender}
                            </p>
                            <p className=' text-gray-600 w-[40%] tracking-widest font-semibold  text-xl '>
                                Blood Group : {data?.blood_group}
                            </p>
                            <p className=' text-gray-600 w-[40%] tracking-widest font-semibold  text-xl '>
                                Age : {data?.age}
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
                                Phone : {data?.emergency_contact?.phonenumber}
                            </p>
                            <p className=' text-gray-600 w-[40%] tracking-widest font-semibold  text-xl '>
                                Relation : {data?.emergency_contact?.relation}
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
    const { state } = useLocation()
    const [data, setData] = React.useState([])
    const [meds, setMeds] = React.useState([])
    const [show, setShow] = React.useState(false)
    const [name, setName] = React.useState("")
    const [id, setId] = React.useState("")

    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(GetPatient(state?.patient?.id, setData))
        dispatch(GetMeds(setMeds))
        setId(state?.patient?.id)
    }, [])
    return (
        <div className="h-full w-full">
            <AddModal setIsOpen={setShow} modalIsOpen={show} medicine={name} patient={id} setMeds={setMeds} />
            <p className=' border-b-2 py-5 text-blue-600 tracking-widest font-bold text-center text-3xl'>
                Medication Details
            </p>
            <div className="w-[100%] flex flex-row justify-between ">
                <div className="w-[60%] ">
                    {
                        data?.medication?.map((item, index) => (
                            <div
                                key={index}
                                className="rounded-lg flex flex-wrap justify-center items-start border-2 py-1 mt-6 ">
                                <p className=' text-gray-600 w-[40%]  capitalize text-base '>
                                    Medicine Time : {item?.take} {item?.timing} Food
                                </p>
                                <p className=' text-gray-600 w-[40%]  text-base '>
                                    Medicine Name : {item?.medicine?.medicine_name}
                                </p>
                                <button
                                    onClick={() => {
                                        dispatch(UpdateMeds(item?.id, state?.patient?.id, setData))
                                    }}
                                    className={`${item?.status ? "bg-green-600" : "bg-red-600"} py-1 px-4 rounded-lg text-white`}>
                                    Taken : {item?.status ? "Yes" : "No"}
                                </button>
                            </div>

                        ))
                    }
                </div>
                <div className="w-[30%] py-2 flex flex-col justify-center items-start ">
                    <p
                        className=" text-xl font-medium self-center"
                    >
                        Available Medicine
                    </p>
                    <div className="w-[100%] h-[50vh] overflow-y-scroll ">
                        {
                            meds?.map((item, index) => (
                                <button
                                    key={index}
                                    className="px-2 py-1 w-[100%] flex flex-row justify-between  border-2 mt-6">
                                    <p
                                        onClick={() => {
                                            setShow(!show)
                                            setName(item)
                                        }}
                                    >
                                        {item?.medicine_name}
                                    </p>
                                    <p
                                    >
                                        +
                                    </p>
                                </button>
                            ))
                        }
                    </div>
                </div>
            </div>


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
            <div className="w-[100%] border-2 mt-6 p-4 space-y-2">
                <p className=" text-justify">
                    {`${state?.patient?.medical_history}`}
                </p>
            </div>
        </div>
    )
}