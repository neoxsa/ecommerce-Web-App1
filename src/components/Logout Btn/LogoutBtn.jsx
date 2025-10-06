import { LogOutIcon } from "lucide-react"
import authService from "../../appwrite/auth"
import { useNavigate } from "react-router-dom"
import { logOut } from "../../features/authSlice"
import { useDispatch } from "react-redux"

function LogoutBtn({
    className = "",
    closeLinkClick,
    buttonText,
    type,
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
            type={type}
            className={`px-4 py-2 rounded-md border border-gray-300 hover:bg-red-400 text-sm ${className}`}
            {...props}
            onClick={() => {
                logOutHandler();
                navigate('/login')
            }}
        >
            <div className=" flex justify-center items-center gap-2 font-semibold">
                <LogOutIcon />
                <span>{buttonText}</span>
            </div>
        </button>
    )
}

export default LogoutBtn
