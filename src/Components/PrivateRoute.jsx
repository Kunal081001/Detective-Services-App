import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/TokenUtils";

export function PrivateRouter(props){
   if(isAuthenticated()){
    return props.children;
   }
   else{
    return <Navigate to={"/"}></Navigate>
   }
}