import { FC } from "react";
import { CheckCircleIcon, WarningTwoIcon } from "@chakra-ui/icons";
import { Tr , Td , Flex , Text , Tooltip , Badge } from '@chakra-ui/react';
import courseData from "../interfaces/courseData.interface";
import { Link } from 'react-router-dom';


const CourseList:FC<{props?:courseData}> = ({props}) => {
    
    const {title , category , courses , done} = props;
    
    const setCourseInfo = () => {
        localStorage.setItem('courseSet_title' , title);
        localStorage.setItem('courseSet_done' , String(done));
        localStorage.setItem('courseSet_courses' , JSON.stringify(courses));
    }
    
    return (
        <Tr>
            <Td>
                <Flex>
                    <Text fontSize={"14px"} mr={3}>
                        <Link to="/course" onClick={setCourseInfo}>{title}</Link>
                    </Text>
                    { 
                        !done ? (
                            <Tooltip label="เนื้อหายังไม่สมบูรณ์"><WarningTwoIcon color={"red.500"} /></Tooltip>
                        ) : (
                            <Tooltip label="เนื้อหาสมบูรณ์"><CheckCircleIcon color={"green.500"} /></Tooltip>
                        )
                    }
                </Flex>
            </Td>
            <Td></Td>
            <Td>
                {
                    category.map(element => {
                        return (
                            <Badge colorScheme={"green"} mr={1}>{element}</Badge>
                        );
                    })
                }
            </Td>
        </Tr>        
    );
}

export default CourseList;
