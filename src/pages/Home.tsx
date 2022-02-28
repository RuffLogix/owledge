import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  Wrap,
  WrapItem,
  Center
} from "@chakra-ui/react";
import { FC } from "react";
import { Link } from "react-router-dom";

const Home: FC = () => {

  return (
    <div className="home-page">
      
      <Grid templateColumns={"repeat(2,1fr)"} gap={6}>
        <GridItem width={"100%"} pt={10} pb={10}>
          <Heading fontFamily={"Kanit"} fontSize={"4xl"} color={"rgb(235,235,235)"}>
            แหล่งเรียนรู้ที่ใครๆ ก็เรียนได้
          </Heading>
        </GridItem>
        <GridItem width={"100%"}></GridItem>
      </Grid>
      <Center>
      <Wrap>
        <WrapItem>
          <Box maxWidth={"310px"} mt={5} mb={5}>
            <Heading fontSize={"24px"} color={"rgb(235,235,235)"}>Online Courses</Heading>
            <Text mt={4} fontSize={"18px"} color={"gray.400"}>
              คอร์สเรียนต่างๆ ในเว็บนี้
              ล้วนมาจากผู้ที่มีความชอบและมีความถนัดในสาขานั้นๆ โดยเนื้อหาต่างๆ
              จะถูกจัดแบ่งเป็นหมวดหมู่
              เพื่อให้ง่ายต่อการเรียนและการศึกษาหาความรู้เพิ่มเติมในอนาคต
            </Text>
          </Box>
        </WrapItem>
        <WrapItem>
        <Box maxWidth={"310px"} mt={5} mb={5}>
            <Heading fontSize={"24px"} color={"rgb(235,235,235)"}>Lecture Notes</Heading>
            <Text mt={4} fontSize={"18px"} color={"gray.400"}>
              บางครั้งการอ่านสรุปอาจจะทำให้เข้าใจเนื้อหาที่เรียนมากขึ้น และ
              การแบ่งปันสรุปนั้นจะช่วยสร้างแรงบันดาลใจในการอ่านหนังสือให้ตัวเอง
            </Text>
          </Box>
        </WrapItem>
        <WrapItem>
        <Box maxWidth={"310px"} mt={5} mb={5}>
            <Heading fontSize={"24px"} color={"rgb(235,235,235)"}>Community</Heading>
            <Text mt={4} fontSize={"18px"} color={"gray.400"}>
              จุดประสงค์หลักของเว็บนี้คือ
              การสร้างสังคมแห่งการเรียนรู้ที่สมาชิกแต่ละคนสามารถเรียนรู้ในเรื่องที่ตนเองชอบและแบ่งปันความรู้ในเรื่องที่ตนถนัดได้
              โดยทางเราเชื่อว่าการแบ่งปันความรู้นั้นเป็นประโยชน์ต่อทั้งผู้ที่ถ่ายทอดความรู้และผู้ที่ได้รับความรู้ไม่ทางใดก็ทางหนึ่ง
            </Text>
          </Box>
        </WrapItem>
      </Wrap>
      </Center>

      <AspectRatio ratio={16 / 5} width={"100%"}>
        <Flex direction={"column"}>
          <Heading fontFamily={"Kanit"} color={"rgb(235,235,235)"}>สนใจร่วมทีมกับพวกเรา</Heading>
          <Text fontSize={"20px"} color={"gray.400"}>
            มาสร้างการเรียนรู้ในแบบของตัวเองกันเถอะ
          </Text>
          <Button className="btn-box" mt={4} bg={"blue.300"}>
            <Text fontSize={"18px"} pr={3} pl={3}>
              <Link to={"/join"}>Join with us</Link>
            </Text>
          </Button>
        </Flex>
      </AspectRatio>
    </div>
  );
};

export default Home;
