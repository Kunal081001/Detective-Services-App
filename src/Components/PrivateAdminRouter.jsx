import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/TokenUtils";

export function PrivateAdminRouter(props) {
    if (isAuthenticated()) {
        return props.children;
    }
    else {
        return <Navigate to={"/admin"}></Navigate>
    }
}
    
