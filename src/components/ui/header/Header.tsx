import { FaRobot } from 'react-icons/fa';
import { MdDescription } from 'react-icons/md';
import { Link } from 'react-router-dom';
import {IconButton, Flex, Icon, StackDirection, useBreakpointValue, Text} from '@chakra-ui/react';
import React from "react";
import { BsCodeSlash } from "react-icons/bs";
import {Paths} from "../../../core/paths/paths";

export const Header = () => {
    const onProfileClick = () => {
        // handle profile icon click
    };

    const links: StackDirection | undefined = useBreakpointValue({ base: 'column', md: 'row' });

    return (
        <Flex justifyContent="space-between" alignItems="center" p={2}>
            <Link to={Paths.MAIN}>
                <Text variant="ghost" color={'orange'}>Главная</Text>
            </Link>
            <Flex alignItems="center" justifyContent="center">
                <Link to={Paths.EDITOR}>
                    <IconButton
                        aria-label={Paths.EDITOR}
                        icon={<BsCodeSlash/>}
                        variant="ghost"
                        fontSize="xl"
                        mr={4}
                    />
                </Link>
                <Link to="/docs">
                    <IconButton
                        aria-label="docs"
                        icon={<MdDescription />}
                        variant="ghost"
                        fontSize="xl"
                        mr={4}
                    />
                </Link>
                <Link to={Paths.PROFILE}>
                    <IconButton
                        aria-label={Paths.PROFILE}
                        icon={<FaRobot />}
                        variant="ghost"
                        fontSize="xl"
                    />
                </Link>
            </Flex>
        </Flex>
    );
};
