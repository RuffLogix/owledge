import { FC } from "react";
import { Table , Thead , Tbody , Th , Tr , TableCaption } from '@chakra-ui/react';
import CourseList from '../components/CourseList';
import useGetSheet from "../hooks/useGetSheet";
import courseData from "../interfaces/courseData.interface";

const Courses:FC = () => {

    const {data , loading} = useGetSheet('1m_X3GL0ctuqxpkVkmjsgunlAWgrB6mVuds8WvbA1wUA' , '*');

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
                                title : element['c'][1]['v'] ,
                                done : element['c'][2]['v'] ,
                                category : JSON.parse(element['c'][3]['v']) ,
                                courses : JSON.parse(element['c'][4]['v'])
                            } 
                            // console.log(courseDetails);
                            return (
                                <CourseList props={courseDetails}/>
                            );
                        })
                    }
                    {/* <CourseList/> */}
                </Tbody>
            </Table>
        </div>
    )
}

export default Courses;