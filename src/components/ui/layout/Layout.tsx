import React, {ReactNode} from 'react';
import {Box, Container, Flex} from '@chakra-ui/react';
import {Header} from "../header/Header";
import {Footer} from "../footer/Footer";

type LayoutProps = {
    children: ReactNode;
};

export const Layout = ({children}: LayoutProps) => {
    return (
        <Box bg="gray.50" minHeight="100vh">
            <Flex flexDirection="column">
                <Box as="header" bg="white" boxShadow="md">
                    <Container maxW="container.lg" py={4}>
                        <Header/>
                    </Container>
                </Box>
                <Box as="main" flex="1">
                    <Container maxW="container.lg" py={8}>
                        {children}
                    </Container>
                </Box>
                <Box as="footer" bg="gray.200" py={4}>
                    <Container maxW="container.lg">
                        <Footer/>
                    </Container>
                </Box>
            </Flex>
        </Box>
    );
};
