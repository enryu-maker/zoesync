import React from 'react'
import { Image } from '../Assets/image'
import { Discuss } from 'react-loader-spinner'
import { useDispatch } from 'react-redux'
import { AuthAction } from '../Store/actions'
import { useNavigate } from 'react-router-dom'
export default function Home() {
    const [loading, setLoading] = React.useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <div className='flex h-[100vh] w-[100vw] bg-slate-50 justify-center'>
            <div className='w-[70%]'
                style={{
                    backgroundImage: `url(${Image.home})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <h1 className='text-white font-black text-4xl p-5 tracking-widest'>
                    ZoeSYNC .
                </h1>
                <h3 className='text-blue-500 flex ml-20 self-center justify-center items-center h-[65vh] text-center font-semibold text-5xl p-5 tracking-wider'>
                    India's no 1 Hospital Room <br></br> managment System
                </h3>
            </div>
            <div className='w-[30%] bg-blue-600 flex flex-col justify-center items-center space-y-5'>
                <h1 className='text-white font-black text-4xl tracking-normal'>
                    Lets SYNC you to R-189
                </h1>
                <p className='text-white font-light'>
                    Place your Access Card on System and press start
                </p>
                <img src={Image.contactless} className='h-[120px] w-[120px]' />
                <button 
                onClick={()=>{
                    dispatch(AuthAction(setLoading,navigate))
                }}
                className='bg-white tracking-widest text-blue-600 py-2 px-5 rounded-lg font-bold'>
                    {
                        loading ?
                            <Discuss
                                visible={true}
                                height={40}
                                width={40}
                                ariaLabel="discuss-loading"
                                wrapperStyle={{}}
                                wrapperClass="discuss-wrapper"
                                color="#fff"
                                backgroundColor="#F4442E"
                            />
                            :
                            "Start Syncing"
                    }

                </button>
            </div>

        </div>
    )
}
