import { FC } from "react";
import ComingSoon from "../components/ComingSoon";
import cookieService from "../services/cookieService";

const JoinWithUs:FC = () => {
    if (!cookieService("get", "isLogin","",0) && window.location.pathname !== "/") {
        document.location.href = "/";
    }    

    return (
        <div className="join-page">
            <ComingSoon/>
        </div>
    )
}

export default JoinWithUs;