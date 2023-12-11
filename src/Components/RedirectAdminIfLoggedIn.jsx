import { Navigate } from "react-router-dom"
import { isAuthenticated } from "../utils/TokenUtils"

export function RedirectAdminIfLoggedIn(props){
        if(isAuthenticated()){
            return <Navigate to="/admin-panel"></Navigate>
        }
        else{
            return props.children;
        }
}