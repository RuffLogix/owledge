import { Table , Thead , Tbody , Th , Tr , TableCaption} from '@chakra-ui/react';
import LectureList from '../components/LectureList';
import { FC } from "react";
import lectureData from '../interfaces/lectureData.interface';
import useGetSheet from "../hooks/useGetSheet";

const LectureNotes:FC = () => {

    const {data , loading} = useGetSheet('1DAfXTEDKIr7IIgyMe86_XP5BZYBD0DHsbhuZj2JftaI' , '*');

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
                                author : element['c'][3]['v'],
                                title : element['c'][1]['v'],
                                category : JSON.parse(element['c'][2]['v']),
                                download_link : element['c'][5]['v'],
                                contact : element['c'][4]['v']
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