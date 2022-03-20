import { FC, useEffect, useState } from "react";
import { Tooltip , Table , Thead , Tbody , Th , Tr , TableCaption , Heading , Flex, useToast } from '@chakra-ui/react';
import { CheckCircleIcon, WarningTwoIcon } from "@chakra-ui/icons";
import ContentList from "../components/ContentList";
import contentData from "../interfaces/contentData.interface";
import cookieService from "../services/cookieService";
import routeUrl from "../routeSetting";
import axios from "axios";

const Course:FC = () => {
    
    const [data , setData] = useState([]);

    let title = cookieService("get" , "courseSet_title","",0);
    let done = cookieService("get" , "courseSet_done","",0);
    let courses = JSON.parse(cookieService("get" , "courseSet_courses","",0));

    useEffect(()=>{
        (async () => {
            const a = await axios.get(`${routeUrl}/course`);
            setData(a.data);
        })()
    } , []);

    return (
        <div className="course-page">
            <Flex>
                <Heading fontFamily={"Kanit"} fontSize={"24px"} mb={5} color={"rgb(235,235,235)"}>{title}</Heading>
                {
                    done==="false" ? (
                        <Tooltip label="เนื้อหายังไม่สมบูรณ์"><WarningTwoIcon color={"red.500"} w={"24px"} h={"24px"} ml={3}/></Tooltip>
                    ) : (
                        <Tooltip label="เนื้อหาสมบูรณ์"><CheckCircleIcon color={"green.500"} w={"24px"} h={"24px"} ml={3}/></Tooltip>
                    )
                }
            </Flex>
            <Table variant={"simple"}>
                <TableCaption fontFamily={"Kanit"}>Table of Contents</TableCaption>
                <Thead bg={"rgb(45, 45, 45)"}>
                    <Tr>
                        <Th fontFamily={"Kanit"} color={"rgb(235,235,235)"}>เนื้อหา</Th>
                        <Th fontFamily={"Kanit"}></Th>
                        <Th fontFamily={"Kanit"} color={"rgb(235,235,235)"}>ผู้สอน</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        data.map(element => {
                            let found = false;
                            console.log(courses);
                            let tmp = JSON.parse(courses);
                            for(let i=0 ; i<tmp.length && !found ; i++){

                                if(element['id'] === tmp[i]){
                                    found = true;
                                }
                            }
                            
                            if(found){
                                const CourseData:contentData = {
                                    title : element['title'] ,
                                    author : element['author'] ,
                                    course : element['id'] ,
                                    authorLink : element['authorLink'] 
                                }

                                return (
                                <ContentList props={CourseData}/>
                                )
                            }
                        })
                    }
                </Tbody>
            </Table>
        </div>
    );
}

export default Course;