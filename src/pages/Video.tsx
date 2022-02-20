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
  Text,
  Flex,
  Tooltip,
} from "@chakra-ui/react";
import useGetSheet from "../hooks/useGetSheet";
import { InfoOutlineIcon } from "@chakra-ui/icons";

const Video: FC = () => {
  const { data, loading } = useGetSheet(
    "1txtEWEGO4oCEF8tcJctyZriN95fNxHE4VTR-eXi1ks0",
    '* WHERE A="' + localStorage.getItem("course_id") + '"'
  );
  const [videoLink, setVideo] = useState("");
  const [courseName, setCourseName] = useState("");
  const [courseAuthor, setCourseAuthor] = useState("");
  const [courseClips, setCourseClips] = useState([]);

  useEffect(() => {
    if (data.length !== 0) {
      setCourseName(data[0]["c"][1]["v"]);
      setCourseAuthor(data[0]["c"][2]["v"]);
      setCourseClips(JSON.parse(data[0]["c"][3]["v"]));
    }
  }, [data]);

  const updateVideo = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    let newVideoLink = e.currentTarget.value;

    setVideo(newVideoLink);
  };

  return (
    <div className="video-page">
      <Flex m={10}>
        <Heading fontSize={"24px"} fontFamily={"Kanit"}>
          {courseName}
          <Tooltip label={"ผู้สอน : " + courseAuthor}>
            <InfoOutlineIcon color={"blue.500"} ml={3} />
          </Tooltip>
        </Heading>
      </Flex>
      <Grid templateColumns={"repeat(4,1fr)"} gap={6} m={5}>
        <GridItem colSpan={1}>
          <Table>
            <Tbody>
              {courseClips !== [] ? (
                courseClips.map((clip) => {
                  return (
                    <Tr>
                      <Td>
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
        </GridItem>
        <GridItem width={"100%"} colSpan={3}>
          <AspectRatio ratio={16 / 9}>
            {videoLink === "" ? (
              <Text>กรุณาเลือกวิดีโอ</Text>
            ) : (
              <iframe title="display-video" src={videoLink} allowFullScreen />
            )}
          </AspectRatio>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Video;
