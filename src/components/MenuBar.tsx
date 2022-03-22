import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { FC , useState } from "react";
import { Link } from "react-router-dom";

const MenuBar:FC = () => {

    const [currUrl , setUrl] = useState("");

    return (
        <div className={"menubar-component"}>
        <Flex display={['none','none','flex','flex']}>
            <Box className="btn-box">
                <Text
                fontSize={"18px"}
                pr={3}
                pl={3}
                color={currUrl == "" ? "rgb(235,235,235)" : "gray.400"}
                >
                    <Link to={"/"} onClick={() => {setUrl("")}}>Home</Link>
                </Text>
            </Box>
            <Box className="btn-box">
                <Text
                fontSize={"18px"}
                pr={3}
                pl={3}
                color={currUrl == "courses" ? "rgb(235,235,235)" : "gray.400"}
                >
                    <Link to={"/courses"} onClick={() => {setUrl("courses")}}>Courses</Link>
                </Text>
            </Box>
            <Box className="btn-box">
                <Text
                fontSize={"18px"}
                pr={3}
                pl={3}
                color={currUrl == "lecturenotes" ? "rgb(235,235,235)" : "gray.400"}
                >
                    <Link to={"/lecturenotes"} onClick={() => {setUrl("lecturenotes")}}>Lecture Notes</Link>
                </Text>
            </Box>
            <Box className="btn-box">
                <Text
                fontSize={"18px"}
                pr={3}
                pl={3}
                color={currUrl == "contest" ? "rgb(235,235,235)" : "gray.400"}
                >
                    <Link to={"/contest"} onClick={() => {setUrl("contest")}}>Contest</Link>
                </Text>
            </Box>
            <Box className="btn-box">
                <Text
                fontSize={"18px"}
                pr={3}
                pl={3}
                color={currUrl == "about" ? "rgb(235,235,235)" : "gray.400"}
                >
                    <Link to={"/about"} onClick={() => {setUrl("about")}}>About us</Link>
                </Text>
            </Box>
        </Flex>
        <Flex display={["flex","flex","none","none"]}>
            <Menu>
                <MenuButton 
                    as={Button} 
                    bg={"rgb(32,32,35)"}
                    _expanded={{bg:"rgb(32,32,35)"}}
                    _hover={{bg:"rgb(32,32,35)"}}
                >
                    <HamburgerIcon color={"rgb(235,235,235)"}/>
                </MenuButton>
                <MenuList>
                    <Link to={"/"} onClick={() => {setUrl("")}}>
                        <MenuItem>
                            <Text
                            fontSize={"md"}
                            color= "rgb(32,32,35)"
                            >
                                Home
                            </Text>
                        </MenuItem>
                    </Link>
                    <Link to={"/courses"} onClick={() => {setUrl("courses")}}>
                        <MenuItem>
                            <Text
                            fontSize={"md"}
                            color= "rgb(32,32,35)"
                            >
                                Courses
                            </Text>
                        </MenuItem>
                    </Link>
                    <Link to={"/lecturenotes"} onClick={() => {setUrl("lecturenotes")}}>
                        <MenuItem>
                            <Text
                            fontSize={"md"}
                            color= "rgb(32,32,35)"
                            >
                                Lecture Notes
                            </Text>
                        </MenuItem>
                    </Link>
                    <Link to={"/contest"} onClick={() => {setUrl("contest")}}>
                        <MenuItem>
                            <Text
                            fontSize={"md"}
                            color= "rgb(32,32,35)"
                            >
                                Contest
                            </Text>
                        </MenuItem>
                    </Link>
                    <Link to={"/about"} onClick={() => {setUrl("about")}}>
                        <MenuItem>
                            <Text
                            fontSize={"md"}
                            color= "rgb(32,32,35)"
                            >
                                About us
                            </Text>
                        </MenuItem>
                    </Link>
                </MenuList>
            </Menu>
        </Flex>
        </div>
    )
}

export default MenuBar;