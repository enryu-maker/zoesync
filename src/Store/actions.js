import axios from "axios"

export const AuthAction = (setLoading, navigate) => {
    setLoading(true)
    return async dispatch => {
        await axios.get("http://localhost:8080/auth").then((res) => {
            dispatch({
                type: 'LOGIN',
                payload: res?.data?.id
            })
            navigate('/room', {
                state: res.data.user
            })
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