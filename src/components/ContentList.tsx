import { FC } from "react";
import { Tr , Td , Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import contentData from "../interfaces/contentData.interface";
import cookieService from "../services/cookieService";

const ContentList:FC<{props:contentData}> = ({props}) => {

    const {title , author , course} = props;

    const setCourse = () => {
        cookieService("set" , "course_id" , course , 3);
        // localStorage.setItem('course_id' , course);
    }

    return (
        <Tr>
            <Td>
                <Text>
                    <Link to="/video" onClick={setCourse}>{title}</Link>
                </Text>
            </Td>
            <Td></Td>
            <Td>
                {author}
            </Td>
        </Tr>
    );
}

export default ContentList;