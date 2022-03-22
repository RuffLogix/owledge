import { FC, useState, MouseEvent, useEffect } from "react";
import {
  Heading,
  Grid,
  GridItem,
  AspectRatio,
  Table,
  Tr,
  Td,
  Tbody,
  Skeleton,
  Flex,
  Tooltip,
  Thead,
  Th,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
} from "@chakra-ui/react";
import { ChevronDownIcon, InfoOutlineIcon, Search2Icon } from "@chakra-ui/icons";
import cookieService from "../services/cookieService";
import routeUrl from "../routeSetting";
import axios from "axios";

const Video: FC = () => {
  const [data, setData] = useState([]);
  const [videoLink, setVideo] = useState("");
  const [courseName, setCourseName] = useState("");
  const [courseAuthor, setCourseAuthor] = useState("");
  // const [courseClips, setCourseClips] = useState([]);

  useEffect(() => {
    (async () => {
      const a = await axios.post(`${routeUrl}/video`, {
        courseId: cookieService("get", "course_id", "", 0),
      });
      console.log(a.data);
      setData(JSON.parse(a.data[0]["videos"].replace(/'\\'/g, "")));
      setCourseName(a.data[0]["title"]);
      setCourseAuthor(a.data[0]["author"]);
    })();
  }, []);

  const updateVideo = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    let newVideoLink = e.currentTarget.value;

    setVideo(newVideoLink);
  };

  let video_number = 0;

  return (
    <div className="video-page">
      <Flex m={[5,5,10,10]} align={"center"}>
        <Heading
          fontSize={["16px","16px","24px","24px"]}
          fontFamily={"Kanit"}
          color={"rgb(235,235,235)"}
        >
          {courseName}
          <Tooltip label={"ผู้สอน : " + courseAuthor}>
            <InfoOutlineIcon color={"blue.500"} ml={3} />
          </Tooltip>
          <Menu size={"xs"}> 
            <MenuButton
              as={Button}
              // rightIcon={<ChevronDownIcon />}
              color={"rgb(32,32,35)"}
              ml={[3,3,5,5]}
            >
              <Search2Icon w={[3,3,4,4]}/>
            </MenuButton>
            <MenuList>
              {data.map((clip) => {
                video_number += 1;
                return (
                  <MenuItem
                    onClick={updateVideo}
                    value={"https://www.youtube.com/embed/" + clip["link"]}
                    color={"rgb(65,65,65)"}
                    fontSize={"md"}
                  >
                    {clip["title"]}
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>
        </Heading>
      </Flex>
      <Grid templateColumns={"repeat(1,1fr)"} gap={6} m={[3,3,10,10]}>
        {/* <GridItem colSpan={1}>
          <Table>
            <Thead>
              <Tr bg={"rgb(45, 45, 45)"}>
                <Th color={"rgb(235,235,235)"}>#</Th>
                <Th color={"rgb(235,235,235)"}>ชื่อคลิป</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data !== [] ? (
                data.map((clip) => {
                  video_number += 1;
                  return (
                    <Tr bg={"white"}>
                      <Td>{video_number}</Td>
                      <Td color={"rgb(32,32,35)"}>
                        <button
                          onClick={updateVideo}
                          value={
                            "https://www.youtube.com/embed/" + clip["link"]
                          }
                        >
                          {clip["title"]}
                        </button>
                      </Td>
                    </Tr>
                  );
                })
              ) : (
                <Skeleton height={"250px"}></Skeleton>
              )}
            </Tbody>
          </Table>
        </GridItem> */}
        <GridItem width={"100%"}>
          <AspectRatio ratio={16 / 9} width={"100%"}>
            {videoLink === "" ? (
              <Heading
                color={"rgb(32,32,35)"}
                fontFamily={"Kanit"}
                fontSize={"xl"}
                borderRadius={"md"}
                bg={"rgb(235,235,235)"}
              >
                กรุณาเลือกวิดีโอ
              </Heading>
            ) : (
              <iframe title="display-video" src={videoLink} allowFullScreen/>
            )}
          </AspectRatio>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Video;
