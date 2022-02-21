import "./App.css";
import { FC, useState } from "react";
import {
  Text,
  Flex,
  Box,
  Heading,
  Container,
  Divider,
  Input,
  Button,
  ModalOverlay,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import LectureNotes from "./pages/LectureNotes";
import AboutUs from "./pages/AboutUs";
import JoinWithUs from "./pages/JoinWithUs";
import Course from "./pages/Course";
import Video from "./pages/Video";
import Contest from "./pages/Contest";
import MenuBar from "./components/MenuBar";
import cookieService from "./services/cookieService";
import axios from "axios";

const App: FC = () => {
  const [loginState, setLoginState] = useState(false);
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  if (
    !loginState &&
    !cookieService("get", "isLogin") &&
    window.location.pathname !== "/"
  ) {
    document.location.href = "/";
  }

  const updateUsername = (e) => {
    setUsername(e.currentTarget.value);
  };

  const updatePassword = (e) => {
    setPassword(e.currentTarget.value);
  };

  async function verify() {
    if (userName.length === 0 || password.length === 0) {
      toast({
        title: "แจ้งเตือน",
        description: "กรุณากรอก username หรือ password ให้ครบถ้วน",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    const resData = await axios.post('http://localhost:5000/login' , {"username" : userName , "password" : password});
    const authenData = resData.data;

    if(authenData.length===0){
      toast({
        title: "แจ้งเตือน",
        description: "username หรือ password ไม่ถูกต้อง",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }else{
      setLoginState(true);
      cookieService("set", "isLogin", "true", 3);
      toast({
        title: "แจ้งเตือน",
        description: "เข้าสู่ระบบสำเร็จ",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }

  }

  return (
    <div className="App">
      <Container maxW={"container.lg"} pt={3} pb={3}>
        <Flex>
          <Box>
            <Heading fontSize={"20px"} pr={3}>
              Owledge
            </Heading>
          </Box>
          {loginState || cookieService("get", "isLogin") ? (
            <MenuBar />
          ) : (
            <div className="login-form">
              <Box className="btn-box">
                <Text fontSize={"18px"} pr={3} pl={3} onClick={onOpen}>
                  Login
                </Text>
              </Box>

              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>เข้าสู่ระบบ</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Input
                      type={"text"}
                      mb={2}
                      onChange={updateUsername}
                      required
                    />
                    <Input
                      type={"password"}
                      onChange={updatePassword}
                      required
                    />
                  </ModalBody>

                  <ModalFooter>
                    <Button onClick={verify}>เข้าสู่ระบบ</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </div>
          )}
        </Flex>
      </Container>

      <Divider />

      <Routes>
        <Route path="/video" element={<Video />} />
      </Routes>

      <Container maxW="container.lg" mt={3} p={2} mb={10}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course" element={<Course />} />
          <Route path="/lecturenotes" element={<LectureNotes />} />
          <Route path="/contest" element={<Contest />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/join" element={<JoinWithUs />} />
        </Routes>
      </Container>

      <Divider />

      <Box className="Footer" p={5}>
        <Text color={"gray"}>Made by RuffLogix</Text>
      </Box>
    </div>
  );
};

export default App;
