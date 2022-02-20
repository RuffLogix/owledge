import { FC } from "react";
import { Tr , Td , Badge , Text } from '@chakra-ui/react';
import lectureData from "../interfaces/lectureData.interface";

const LectureList:FC<{props:lectureData}> = ({props}) => {

    const { author , category , download_link , title , contact} = props;

    return (
        <Tr>
            <Td>
                <a href={download_link} target={"_blank"}>
                    <Text color={"orange.400"}>
                        {title}
                    </Text>
                </a>
            </Td>
            <Td></Td>
            <Td>
                {
                    category.map(element => {
                        return (
                            <Badge colorScheme={"orange"} mr={1}>
                                {element}
                            </Badge>
                        )
                    })
                }
            </Td>
            <Td>
                {
                    contact!="-" ? (
                        <Text>
                            <a href={contact} target="_blank">
                                {author}
                            </a>
                        </Text>
                    ) : (
                        <Text>
                            {author}    
                        </Text>
                    )
                }
            </Td>
        </Tr>
    );
}

export default LectureList;