import { Box, Flex, Text } from "@chakra-ui/react";
import { FC , useState } from "react";
import { Link } from "react-router-dom";

const MenuBar:FC = () => {

    const [currUrl , setUrl] = useState("");

    return (
        <Flex>
            <Box className="btn-box">
                <Text
                fontSize={"18px"}
                pr={3}
                pl={3}
                color={currUrl == "" ? "black" : "gray.400"}
                >
                    <Link to={"/"} onClick={() => {setUrl("")}}>Home</Link>
                </Text>
            </Box>
            <Box className="btn-box">
                <Text
                fontSize={"18px"}
                pr={3}
                pl={3}
                color={currUrl == "courses" ? "black" : "gray.400"}
                >
                    <Link to={"/courses"} onClick={() => {setUrl("courses")}}>Courses</Link>
                </Text>
            </Box>
            <Box className="btn-box">
                <Text
                fontSize={"18px"}
                pr={3}
                pl={3}
                color={currUrl == "lecturenotes" ? "black" : "gray.400"}
                >
                    <Link to={"/lecturenotes"} onClick={() => {setUrl("lecturenotes")}}>Lecture Notes</Link>
                </Text>
            </Box>
            <Box className="btn-box">
                <Text
                fontSize={"18px"}
                pr={3}
                pl={3}
                color={currUrl == "contest" ? "black" : "gray.400"}
                >
                    <Link to={"/contest"} onClick={() => {setUrl("contest")}}>Contest</Link>
                </Text>
            </Box>
            <Box className="btn-box">
                <Text
                fontSize={"18px"}
                pr={3}
                pl={3}
                color={currUrl == "about" ? "black" : "gray.400"}
                >
                    <Link to={"/about"} onClick={() => {setUrl("about")}}>About us</Link>
                </Text>
            </Box>
        </Flex>
    )
}

export default MenuBar;