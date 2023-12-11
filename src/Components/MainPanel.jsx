import { FrontNavigation } from "./FrontNavigation";
import { UserLogin } from "./UserLogin";

export function MainPanel(){
    return (
        <>
        <FrontNavigation/>
        <UserLogin/>
        </>
    );
}