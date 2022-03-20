import { Table , Thead , Tbody , Th , Tr , TableCaption, useToast} from '@chakra-ui/react';
import LectureList from '../components/LectureList';
import { FC, useEffect, useState } from "react";
import lectureData from '../interfaces/lectureData.interface';
import routeUrl from '../routeSetting';
import axios from 'axios';
import cookieService from '../services/cookieService';

const LectureNotes:FC = () => {

    const [data , setData] = useState([]);
    const toast = useToast();

    useEffect(()=>{
        (async () => {
            if(cookieService("get", "id", "" , 3)){
                const a = await axios.get(`${routeUrl}/lectures`);
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
        <div className="lecture-note-page">
            <Table variant={"simple"}>
                <TableCaption fontFamily={"Kanit"}>Lecture Notes Table</TableCaption>
                <Thead bg={"rgb(45, 45, 45)"}>
                    <Tr>
                        <Th fontFamily={"Kanit"} color={"rgb(235,235,235)"}>หัวข้อ</Th>
                        <Th fontFamily={"Kanit"}></Th>
                        <Th fontFamily={"Kanit"} color={"rgb(235,235,235)"}>ประเภท</Th>
                        <Th fontFamily={"Kanit"} color={"rgb(235,235,235)"}>ผู้เขียน</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        data.map(element => {
                            let example_data:lectureData = {
                                author : element['author'],
                                title : element['title'],
                                category : JSON.parse((element['tags'] as string).replace(/'\\'/g , '')),
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