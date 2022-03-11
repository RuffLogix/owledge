import { FC, useEffect, useState } from "react";
import { Table , Thead , Tbody , Th , Tr , TableCaption } from '@chakra-ui/react';
import CourseList from '../components/CourseList';
import axios from "axios";
import courseData from "../interfaces/courseData.interface";

const Courses:FC = () => {

    const [data , setData] = useState([]);

    useEffect(()=>{
        (async () => {
            const a = await axios.get('https://owledge-backend.herokuapp.com/courses');
            setData(a.data);
        })()
    } , []);

    return (
        <div className="courses-page">
            <Table variant={"simple"}>
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