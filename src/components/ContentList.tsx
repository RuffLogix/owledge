import { FC } from "react";
import { Tr , Td , Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import contentData from "../interfaces/contentData.interface";

const ContentList:FC<{props:contentData}> = ({props}) => {

    const {title , author , course} = props;

    const setCourse = () => {
        localStorage.setItem('course_id' , course);
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