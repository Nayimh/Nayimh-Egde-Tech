import { useContext } from "react"
import { AuthContext } from "../Context/AughProvider/AuthProvider"

const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
}

export default useAuth;