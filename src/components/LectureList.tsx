import { FC } from "react";
import { Tr , Td , Badge , Text } from '@chakra-ui/react';
import lectureData from "../interfaces/lectureData.interface";

const LectureList:FC<{props:lectureData}> = ({props}) => {

    const { author , category , download_link , title , contact} = props;

    return (
        <Tr bg={"white"}>
            <Td>
                <a href={download_link} target={"_blank"}>
                    <Text color={"blue.400"} fontSize={"16px"}>
                        {title}
                    </Text>
                </a>
            </Td>
            <Td></Td>
            <Td>
                {
                    category.map(element => {
                        return (
                            <Badge colorScheme={"blue"} mr={1}>
                                {element}
                            </Badge>
                        )
                    })
                }
            </Td>
            <Td>
                {
                    contact!="-" ? (
                        <Text fontSize={"16px"}>
                            <a href={contact} target="_blank">
                                {author}
                            </a>
                        </Text>
                    ) : (
                        <Text fontSize={"16px"}>
                            {author}    
                        </Text>
                    )
                }
            </Td>
        </Tr>
    );
}

export default LectureList;