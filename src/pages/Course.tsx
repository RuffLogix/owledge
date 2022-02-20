import { FC } from "react";
import { Tooltip , Table , Thead , Tbody , Th , Tr , TableCaption , Td , Heading , Flex } from '@chakra-ui/react';
import { CheckCircleIcon, WarningTwoIcon } from "@chakra-ui/icons";
import ContentList from "../components/ContentList";
import useGetSheet from "../hooks/useGetSheet";
import contentData from "../interfaces/contentData.interface";

const Course:FC = () => {

    const {data , loading} = useGetSheet('1txtEWEGO4oCEF8tcJctyZriN95fNxHE4VTR-eXi1ks0' , '*');

    let title = localStorage.getItem('courseSet_title');
    let done = localStorage.getItem('courseSet_done');
    let courses = JSON.parse(localStorage.getItem('courseSet_courses'));

    return (
        <div className="course-page">
            <Flex>
                <Heading fontFamily={"Kanit"} fontSize={"24px"} mb={5}>{title}</Heading>
                {
                    done=="false" ? (
                        <Tooltip label="เนื้อหายังไม่สมบูรณ์"><WarningTwoIcon color={"red.500"} w={"24px"} h={"24px"} ml={3}/></Tooltip>
                    ) : (
                        <Tooltip label="เนื้อหาสมบูรณ์"><CheckCircleIcon color={"green.500"} w={"24px"} h={"24px"} ml={3}/></Tooltip>
                    )
                }
            </Flex>
            <Table variant={"simple"}>
                <TableCaption fontFamily={"Kanit"}>Table of Contents</TableCaption>
                <Thead bg={"gray.100"}>
                    <Tr>
                        <Th fontFamily={"Kanit"}>เนื้อหา</Th>
                        <Th fontFamily={"Kanit"}></Th>
                        <Th fontFamily={"Kanit"}>ผู้สอน</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        data.map(element => {
                            let found = false;
                            for(let i=0 ; i<courses.length && !found ; i++){
                                if(element['c'][0]['v'] == courses[i]){
                                    found = true;
                                }
                            }
                            
                            if(found){
                                const CourseData:contentData = {
                                    title : element['c'][1]['v'] ,
                                    author : element['c'][2]['v'] , 
                                    course : element['c'][0]['v']
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