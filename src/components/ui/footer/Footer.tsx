import React from 'react';
import {Box, Flex, IconButton, Link, Stack, StackDirection, useBreakpointValue} from '@chakra-ui/react';
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

export const Footer: React.FC = () => {
    const links: StackDirection | undefined = useBreakpointValue({ base: 'column', md: 'row' });

    return (
        <Box bg="gray.50" p={4}
             border={'2px solid orange'}
             borderRadius={'8px'}
        >
            <Stack
                direction={['column', null, 'row']}
                alignItems={['center', null, 'flex-start']}
                spacing={4}
            >
                <Box flex="1" textColor={'orange'}>Keep in touch</Box>
                <Flex flex="1" justifyContent="flex-end">
                    <Stack direction={links} spacing={4} justify={['center', null, 'flex-end']}>
                        <Link href="">
                            <IconButton aria-label="twitter" icon={<FaTwitter />} variant="ghost" />
                        </Link>
                        <Link href="">
                            <IconButton aria-label="facebook" icon={<FaFacebook />} variant="ghost" />
                        </Link>
                        <Link href="">
                            <IconButton aria-label="instagram" icon={<FaInstagram />} variant="ghost" />
                        </Link>
                    </Stack>
                </Flex>
            </Stack>
        </Box>
    );
};

