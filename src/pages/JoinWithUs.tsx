import { FC } from "react";
import cookieService from "../services/cookieService";

const JoinWithUs:FC = () => {
    if (!cookieService("get", "isLogin") && window.location.pathname !== "/") {
        document.location.href = "/";
    }    

    return (
        <div className="join-page">

        </div>
    )
}

export default JoinWithUs;