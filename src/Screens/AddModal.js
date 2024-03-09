import React from 'react'
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { AddMeds, GetMeds } from '../Store/actions';
export default function AddModal({
    modalIsOpen,
    setIsOpen,
    medicine,
    patient,
    setMed
}) {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    const [data,setData] = React.useState({
        "timing": "",
        "take":""
    })
    const dispatch = useDispatch()
    return (
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div className='flex w-[500px] justify-between items-center'>
                <h2
                className='text-xl text-gray-700 font-semibold'
                >Add Medication</h2>
                <button onClick={closeModal}>close</button>
            </div>
            <h2
                className='text-xl mt-4 text-gray-700 font-semibold'
            >{medicine?.medicine_name}</h2>
            <div className='flex w-[500px] justify-start space-x-5 items-center'>
                <select
                    className='border-2 my-2 outline-none'
                    value={data.timing} 
                    onChange={e => setData({...data, timing: e.target.value})}
                >
                    <option
                    value="Morning"
                    >
                        Morning
                    </option>
                    <option
                    value="Afternoon"
                    >
                        Afternoon
                    </option>
                    <option
                    value="Evening"
                    >
                        Evening
                    </option>
                </select>
                <select
                    className='border-2 my-2 outline-none'
                    value={data.take} 
                    onChange={e => setData({...data, take: e.target.value})}
                >
                    <option
                    value="After Meal"
                    >
                        After Meal
                    </option>
                    <option
                    value="Before Meal"
                    >
                        Before Meal
                    </option>
                </select>
            </div>
            <button
            className=' bg-blue-600 px-3 text-white my-2'
            onClick={()=>{
                dispatch(AddMeds(patient,medicine?.id,data?.timing,data?.take));
                dispatch(GetMeds(setMed))
            }}
            >
                Submit
            </button>
        </Modal>
    )
}
