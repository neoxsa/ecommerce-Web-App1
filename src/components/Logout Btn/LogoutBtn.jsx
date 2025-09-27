import { LogOutIcon } from "lucide-react"
import authService from "../../appwrite/auth"
import { useNavigate } from "react-router-dom"
import { logOut } from "../../features/authSlice"
import { useDispatch } from "react-redux"

function LogoutBtn({
    className = "",
    closeLinkClick,
    ...props
}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logOutHandler = () => {
        authService.logOut()
            .then(() => {
                dispatch(logOut())
            })
    }

    return (
        <button
            className={`inline-block bg-red-400 text-lg w-auto p-4 ${className}`}
            {...props}
            onClick={() => logOutHandler() && navigate('/')}
        >
            <div className=" flex justify-center items-center gap-2 text-white font-semibold">
                <LogOutIcon />
                <span>Logout</span>
            </div>
        </button>
    )
}

export default LogoutBtn
