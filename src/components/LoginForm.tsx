import { ChangeEvent, FC, useState } from "react";
import {
    Text,
    Box,
    Modal,
    ModalOverlay,
    ModalContent,
    Input,
    ModalBody,
    ModalCloseButton,
    ModalHeader,
    ModalFooter,
    Button,
    useDisclosure,
    useToast,
} from "@chakra-ui/react";
import axios from "axios";
import cookieService from "../services/cookieService";
import routeUrl from "../routeSetting";

const LoginForm: FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const toast = useToast();

    const updateUsername = (event:ChangeEvent<HTMLInputElement>):void => {
        setUsername(event.currentTarget.value);
    };

    const updatePassword = (event:ChangeEvent<HTMLInputElement>):void => {
        setPassword(event.currentTarget.value);
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

        const resData = await axios.post(
            `${routeUrl}/login`,
            { username: userName, password: password }
        );
        const authenData = resData.data;

        if (authenData.length === 0) {
            toast({
                title: "แจ้งเตือน",
                description: "username หรือ password ไม่ถูกต้อง",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        } else {
            cookieService("set", "isLogin", "true", 3);
            cookieService("set", "id", authenData[0].id , 3);
            toast({
                title: "แจ้งเตือน",
                description: "เข้าสู่ระบบสำเร็จ",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
            document.location.href = "/";
        }
    }

    return (
        <div className="login-form">
            <Box className="btn-box">
                <Text fontSize={"18px"} pr={3} pl={3} onClick={onOpen} color={"rgb(235,235,235)"}>
                    Login
                </Text>
            </Box>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>เข้าสู่ระบบ</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Input type={"text"} mb={2} onChange={updateUsername} value={userName} required/>
                        <Input type={"password"} onChange={updatePassword} value={password} required/>
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={verify}>เข้าสู่ระบบ</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default LoginForm;
