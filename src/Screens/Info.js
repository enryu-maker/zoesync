export const PatientInfo = ({
    item
}) => {
    return (
        <div className="h-full w-full">
            <p className=' border-b-2 py-5 text-blue-600 tracking-widest font-bold text-center text-3xl'>
                Patient Details
            </p>
            <div className="flex flex-row justify-between items-start mt-10">
                <div className="w-[25%] flex-col space-y-5 rounded-lg shadow-lg flex justify-evenly items-center py-[20px]">
                    <img class="inline h-[180px] rounded-full"
                        src="https://avatars2.githubusercontent.com/u/24622175?s=60&amp;v=4" />
                    <p className=' text-blue-600 tracking-widest font-bold text-center text-2xl'>
                        {item.patient?.firstname} {item.patient?.lastname}
                    </p>
                </div>
                <div className="w-[70%]">
                    <div className="w-[100%] rounded-lg shadow-lg h-[10%] p-4 space-y-2">
                        <p className=' text-blue-600 tracking-widest font-bold text-start text-2xl'>
                            About :
                        </p>
                        <div className="flex flex-wrap w-[100%] justify-between items-center space-y-2">
                            <p className=' text-gray-600 w-[40%] tracking-widest font-semibold text-xl '>
                                First Name : {item.patient?.firstname}
                            </p>
                            <p className=' text-gray-600 w-[40%] tracking-widest font-semibold  text-xl '>
                                Last Name : {item.patient?.lastname}
                            </p>
                            <p className=' text-gray-600 w-[40%] tracking-widest font-semibold  text-xl '>
                                Gender : {item.patient?.gender}
                            </p>
                            <p className=' text-gray-600 w-[40%] tracking-widest font-semibold  text-xl '>
                                Contact : {item?.patient?.contact_number}
                            </p>
                        </div>
                    </div>
                    <div className="w-[100%] rounded-lg shadow-lg h-[10%] mt-6 p-4 space-y-2">
                        <p className=' text-blue-600 tracking-widest font-bold text-start text-2xl'>
                            Emergency Details :
                        </p>
                        <div className="flex flex-wrap w-[100%] justify-between items-center space-y-2">
                            <p className=' text-gray-600 w-[40%] tracking-widest font-semibold text-xl '>
                                Name : {item?.patient?.emergency_contact?.name}
                            </p>
                            <p className=' text-gray-600 w-[40%] tracking-widest font-semibold  text-xl '>
                                Phone : {item?.patient?.emergency_contact?.phone}
                            </p>
                            <p className=' text-gray-600 w-[40%] tracking-widest font-semibold  text-xl '>
                                Relation : {item?.patient?.emergency_contact?.relationship}
                            </p>
                        </div>
                    </div>
                    <div className="w-[100%] rounded-lg shadow-lg h-[10%] mt-6 p-4 space-y-2">
                        <p className=' text-blue-600 tracking-widest font-bold text-start text-2xl'>
                            Hospital Admission Details :
                        </p>
                        <div className="flex flex-wrap w-[100%] justify-between items-center space-y-2">
                            <p className=' text-gray-600 w-[40%] tracking-widest font-semibold text-xl '>
                                Date : {item?.patient?.admission_date}
                            </p>
                            <p className=' text-gray-600 w-[40%] tracking-widest font-semibold  text-xl '>
                                Nurse : {item?.patient?.attending_nurse}
                            </p>
                            <p className=' text-gray-600 w-[40%] tracking-widest font-semibold  text-xl '>
                                Doctor : {item?.patient?.attending_physician}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const MedicationInfo = () => {
    return (
        <div className="h-full w-full">
            <p className=' border-b-2 py-5 text-blue-600 tracking-widest font-bold text-center text-3xl'>
                Medication Details
            </p>
        </div>
    )
}

export const MedicationReport = () => {
    return (
        <div className="h-full w-full">
            <p className=' border-b-2 py-5 text-blue-600 tracking-widest font-bold text-center text-3xl'>
                Medication Report
            </p>
        </div>
    )
}