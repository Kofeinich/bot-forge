import React from "react";
import {
    Box,
    Flex,
    Heading,
    Text,
    Button,
    useBreakpointValue,
} from "@chakra-ui/react";
import {Animation} from "../../../components/ui/animation/Animation";
import animationData from "../../../assets/robot.json";

export const MainPageUI = () => {
    const headingSize = useBreakpointValue({ base: "2xl", md: "3xl" });
    const textSize = useBreakpointValue({ base: "lg", md: "xl" });

    return (
        <Box
            backgroundImage="url('/background.jpg')"
            backgroundSize="cover"
            backgroundPosition="center"
            minH="70vh"
        >
            <Flex
                direction="column"
                justify="center"
                align="center"
                px={8}
                py={[16, 24]}
                bg="rgba(255, 255, 255, 0.9)"
                minH="70vh"
            >
                <Heading size={headingSize} mb={6} color={'orange'} textAlign="center">
                    Создавайте ботов для Телеграмма прямо сейчас!
                </Heading>
                <Text fontSize={textSize} mb={10} textAlign="center" >
                    Мы предлагаем простой и удобный инструмент для создания ботов без
                    необходимости программирования
                </Text>
                <Button colorScheme="telegram" size="lg">
                    Начать бесплатно
                </Button>
                <Animation animationData={animationData} w={400} h={400}/>
            </Flex>
        </Box>
    );
};
