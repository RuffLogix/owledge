import { Table , Thead , Tbody , Th , Tr , TableCaption} from '@chakra-ui/react';
import LectureList from '../components/LectureList';
import { FC, useEffect, useState } from "react";
import lectureData from '../interfaces/lectureData.interface';
import axios from 'axios';
// import useGetSheet from "../hooks/useGetSheet";

const LectureNotes:FC = () => {

    // const {data , loading} = useGetSheet('1DAfXTEDKIr7IIgyMe86_XP5BZYBD0DHsbhuZj2JftaI' , '*');
    const [data , setData] = useState([]);
    useEffect(()=>{
        (async () => {
            const a = await axios.get('https://owledge-backend.herokuapp.com/lectures');
            setData(a.data);
        })()
    } , []);

    return (
        <div className="lecture-note-page">
            <Table variant={"simple"}>
                <TableCaption fontFamily={"Kanit"}>Lecture Notes Table</TableCaption>
                <Thead bg={"gray.100"}>
                    <Tr>
                        <Th fontFamily={"Kanit"}>หัวข้อ</Th>
                        <Th fontFamily={"Kanit"}></Th>
                        <Th fontFamily={"Kanit"}>ประเภท</Th>
                        <Th fontFamily={"Kanit"}>ผู้เขียน</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        data.map(element => {
                            let example_data:lectureData = {
                                author : element['author'],
                                title : element['title'],
                                category : JSON.parse((element['tags']).replace(/'\\'/g , '')),
                                download_link : element['lectureLink'],
                                contact : element['authorLink']
                            }
                            return (
                                <LectureList props={example_data}/>
                            );
                        })
                    }
                </Tbody>
            </Table>
        </div>
    )
}

export default LectureNotes;