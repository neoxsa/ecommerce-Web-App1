import authService from "../../appwrite/auth"
import { logOut } from "../../features/authSlice"
import { useDispatch } from "react-redux"

function LogoutBtn() {
    const dispatch = useDispatch()

    const logOutHandler = () => {
        authService.logOut()
            .then(() => {
                dispatch(logOut())
            })
    }

    return (
        <button
            className="inline-block bg-red-400 text-lg w-auto p-4"
            // onClick={() => logOutHandler()}
        >
            Logout
        </button>
    )
}

export default LogoutBtn
