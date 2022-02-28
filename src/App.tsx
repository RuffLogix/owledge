import "./App.css";
import { FC } from "react";
import { Text, Flex, Box, Heading, Container } from "@chakra-ui/react";
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
import LoginForm from "./components/LoginForm";

const App: FC = () => {
  if (!cookieService("get", "isLogin") && window.location.pathname !== "/") {
    document.location.href = "/";
  }

  return (
    <div className="App"> 
      <Box bg={"rgb(32,32,35)"}>
      <Container maxW={"container.lg"} pt={3} pb={3}>
        <Flex>
          <Box>
            <Heading fontSize={"20px"} pr={3} color={"rgb(235,235,235)"}>
              Owledge
            </Heading>
          </Box>
          {cookieService("get", "isLogin") ? <MenuBar /> : <LoginForm />}
        </Flex>
      </Container>

      <Routes>
        <Route path="/video" element={<Video />} />
      </Routes>

      <Container maxW="container.lg" mt={3} p={2}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course" element={<Course />} />
          <Route path="/lecturenotes" element={<LectureNotes />} />
          <Route path="/contest" element={<Contest />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/join" element={<JoinWithUs />} />
        </Routes>

        <Box className="Footer" p={5}>
          <Text color={"gray"}>Made by Owledge Team : We are Night Owls!</Text>
        </Box>
      </Container>
     </Box> 
    </div>
  );
};

export default App;
