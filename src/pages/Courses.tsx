import { FC, useEffect, useState } from "react";
import { Table , Thead , Tbody , Th , Tr , TableCaption, useToast } from '@chakra-ui/react';
import CourseList from '../components/CourseList';
import axios from "axios";
import routeUrl from "../routeSetting";
import courseData from "../interfaces/courseData.interface";
import cookieService from "../services/cookieService";

const Courses:FC = () => {

    const [data , setData] = useState([]);
    const toast = useToast();

    useEffect(()=>{
        (async () => {
            if(cookieService("get", "id", "" , 3)){
                const a = await axios.get(`${routeUrl}/courses/${cookieService("get", "id", "" , 3)}`);
                setData(a.data);
            }else{
                toast({
                    title: "แจ้งเตือน",
                    description: "คุณไม่มีสิทธิ์เข้าถึงคอร์สเรียน",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
            }
        })()
    } , []);

    return (
        <div className="courses-page">
            <Table variant={"simple"} rounded={"3xl"}>
                <TableCaption fontFamily={"Kanit"}>Courses Table</TableCaption>
                <Thead bg={"rgb(45, 45, 45)"}>
                    <Tr>
                        <Th fontFamily={"Kanit"} color={"rgb(235,235,235)"}>หัวข้อ</Th>
                        <Th fontFamily={"Kanit"}></Th>
                        <Th fontFamily={"Kanit"} color={"rgb(235,235,235)"}>ประเภท</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        data.map(element => {
                            let courseDetails:courseData = {
                                title : element['title'] ,
                                done : element['status'] ,
                                category : JSON.parse((element['tags'] as string).replace(/'\\'/g , '')) ,
                                courses : element['courses']
                            } 
                            
                            console.log(courseDetails);

                            return (
                                <CourseList props={courseDetails}/>
                            );
                        }) 
                    }
                </Tbody>
            </Table>
        </div>
    )
}

export default Courses;