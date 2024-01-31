import axios from "axios"

export const AuthAction = (setLoading, navigate) => {
    setLoading(true)
    return async dispatch => {
        await axios.get("http://localhost:8080/auth").then((res) => {
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
        await axios.get("http://localhost:8080/getroom/").then((res) => {
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
        await axios.post("http://localhost:8080/getcleaning/", {
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
        await axios.post(`http://localhost:8080/getpatient/`, {
            id: id
        }).then((res) => {
            console.log("data", res.data.patient)
            setData(res.data?.patient)
        })
            .catch((err) => {
                console.log(err)
            })
    }
}

export const UpdateClean = () => {
    return async dispatch => {
        await axios.post("http://localhost:8080/updatecleaning/", {
            room_number: "R189",
            status: true
        }).then((res) => {
            dispatch(GetClean())
            alert(res.data.msg)
        })
            .catch((err) => {
                console.log(err)

            })
    }
}