import { FC, useEffect, useState } from "react";
import { Table , Thead , Tbody , Th , Tr , TableCaption } from '@chakra-ui/react';
import CourseList from '../components/CourseList';
import axios from "axios";
import courseData from "../interfaces/courseData.interface";
// import useGetSheet from "../hooks/useGetSheet";

const Courses:FC = () => {

    // const {data , loading} = useGetSheet('1m_X3GL0ctuqxpkVkmjsgunlAWgrB6mVuds8WvbA1wUA' , '*');
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
                <Thead bg={"gray.100"}>
                    <Tr>
                        <Th fontFamily={"Kanit"}>หัวข้อ</Th>
                        <Th fontFamily={"Kanit"}></Th>
                        <Th fontFamily={"Kanit"}>ประเภท</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        data.map(element => {
                            let courseDetails:courseData = {
                                title : element['title'] ,
                                done : element['status'] ,
                                category : JSON.parse(element['tags'].replace(/'\\'/g , '')) ,
                                courses : element['courses']
                            } 
                            
                            // console.log(element);
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