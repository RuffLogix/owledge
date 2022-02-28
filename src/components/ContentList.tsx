import { FC } from "react";
import { Tr , Td , Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import contentData from "../interfaces/contentData.interface";
import cookieService from "../services/cookieService";

const ContentList:FC<{props:contentData}> = ({props}) => {

    const {title , author , course , authorLink} = props;

    return (
        <Tr bg={"gray.100"}>
            <Td>
                <Text onClick={()=>{cookieService("set" , "course_id" , course , 3)}}>
                    <Link to="/video">{title}</Link>
                </Text>
            </Td>
            <Td></Td>
            <Td>
                <Text>
                    <a href={authorLink} target={"_blank"}>{author}</a>
                </Text>
            </Td>
        </Tr>
    );
}

export default ContentList;