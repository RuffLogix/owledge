import {
  AspectRatio,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import { Link } from "react-router-dom";
import useGetSheet from "../hooks/useGetSheet";

const Home: FC = () => {
  const { data, loading } = useGetSheet(
    "1txtEWEGO4oCEF8tcJctyZriN95fNxHE4VTR-eXi1ks0",
    "*"
  );

  return (
    <div className="home-page">
      <Grid templateColumns={"repeat(2,1fr)"} gap={6}>
        <GridItem width={"100%"} pt={10} pb={10}>
          <Heading fontFamily={"Kanit"} fontSize={"48px"}>
            แหล่งเรียนรู้ที่ใครๆ ก็เรียนได้
          </Heading>
        </GridItem>
        <GridItem width={"100%"}></GridItem>
      </Grid>

      <Grid templateColumns={"repeat(3,1fr)"} gap={6} mt={10}>
        <GridItem width={"100%"}>
          <Heading fontSize={"24px"}>Online Courses</Heading>
          <Text mt={4} fontSize={"18px"} color={"gray.400"}>
            คอร์สเรียนต่างๆ ในเว็บนี้
            ล้วนมาจากผู้ที่มีความชอบและมีความถนัดในสาขานั้นๆ โดยเนื้อหาต่างๆ
            จะถูกจัดแบ่งเป็นหมวดหมู่
            เพื่อให้ง่ายต่อการเรียนและการศึกษาหาความรู้เพิ่มเติมในอนาคต
          </Text>
        </GridItem>
        <GridItem width={"100%"}>
          <Heading fontSize={"24px"}>Lecture Notes</Heading>
          <Text mt={4} fontSize={"18px"} color={"gray.400"}>
            บางครั้งการอ่านสรุปอาจจะทำให้เข้าใจเนื้อหาที่เรียนมากขึ้น และ
            การแบ่งปันสรุปนั้นจะช่วยสร้างแรงบันดาลใจในการอ่านหนังสือให้ตัวเอง
          </Text>
        </GridItem>
        <GridItem width={"100%"}>
          <Heading fontSize={"24px"}>Community</Heading>
          <Text mt={4} fontSize={"18px"} color={"gray.400"}>
            จุดประสงค์หลักของเว็บนี้คือ
            การสร้างสังคมแห่งการเรียนรู้ที่สมาชิกแต่ละคนสามารถเรียนรู้ในเรื่องที่ตนเองชอบและแบ่งปันความรู้ในเรื่องที่ตนถนัดได้
            โดยทางเราเชื่อว่าการแบ่งปันความรู้นั้นเป็นประโยชน์ต่อทั้งผู้ที่ถ่ายทอดความรู้และผู้ที่ได้รับความรู้ไม่ทางใดก็ทางหนึ่ง
          </Text>
        </GridItem>
      </Grid>

      <Grid templateColumns={"repeat(1,1fr)"} gap={6}>
        <GridItem width={"100%"}>
          <AspectRatio ratio={16 / 5}>
            <Flex direction={"column"}>
              <Heading fontFamily={"Kanit"}>สนใจร่วมทีมกับพวกเรา</Heading>
              <Text fontSize={"20px"}>
                มาสร้างการเรียนรู้ในแบบของตัวเองกันเถอะ
              </Text>
              <Button className="btn-box" mt={4}>
                <Text fontSize={"18px"} pr={3} pl={3}>
                  <Link to={"/join"}>Join with us</Link>
                </Text>
              </Button>
            </Flex>
          </AspectRatio>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Home;
