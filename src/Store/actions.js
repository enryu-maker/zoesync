import axios from "axios"

export const AuthAction = (setLoading, navigate) => {
    setLoading(true)
    return async dispatch => {
        await axios.get("http://127.0.01:8000/auth/").then((res) => {
            console.log(res.data)
            dispatch({
                type: 'LOGIN',
                payload: res?.data?.id
            })
            const user = JSON.parse(res.data.user.replace(/'/g, '"'))
            if (user?.id === 4) {
                console.log("true")
                navigate(`/info/${user?.Name}`)
            }
            else {
                navigate('/room', {
                    state: res.data.user
                })
            }

            setLoading(false)
        })
            .catch((err) => {
                console.log(err)
                setLoading(false)
            })
    }
}

export const GetRoom = (setData, setLoading) => {
    setLoading(true)
    return async dispatch => {
        await axios.get("http://127.0.0.1:8000/room-details/200/").then((res) => {
            setData(res.data)
            setLoading(false)
        })
            .catch((err) => {
                console.log(err)
                setLoading(false)
            })
    }
}

export const GetClean = () => {
    return async dispatch => {
        await axios.post("http://127.0.0.1:8000/change-room-clean-status/200/", {
            room_number: "R189"
        }).then((res) => {
            dispatch({
                type: 'ROOM',
                payload: res?.data
            })
        })
            .catch((err) => {
                console.log(err)
            })
    }
}

export const GetPatient = (id, setData) => {
    return async dispatch => {
        await axios.get(`http://127.0.0.1:8000/patients/${id}/`).then((res) => {
            console.log("data", res.data)
            setData(res.data)
        })
            .catch((err) => {
                console.log(err)
            })
    }
}

export const UpdateMeds = (id,patientID,setData) => {
    return async dispatch => {
        await axios.patch(`http://127.0.0.1:8000/change-medication-status/${id}/`)
        .then((res) => {
            dispatch(GetPatient(patientID,setData))
            alert("Status Update Sucessfully")
        })
            .catch((err) => {
                console.log(err)

            })
    }
}