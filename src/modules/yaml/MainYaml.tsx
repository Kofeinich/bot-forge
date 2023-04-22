import { Flex, Heading, useBreakpointValue } from "@chakra-ui/react";
import { YamlEditor } from "./YamlEditor";
import { YamlParser } from "./YamlParser";
import React from "react";
import {useYamlStore} from "./store/editorStore";

export const MainYaml: React.FC = () => {
    const { error } = useYamlStore();
    const display = useBreakpointValue({ base: "block", md: "flex" });

    return (
        <Flex flexDirection="column" px={[4, 8, 16]} py={4}>
            <Heading fontSize="24px" color="orange" mb={4}>
                YAML Editor
            </Heading>
            {error && <div style={{ color: "red", marginBottom: "16px" }}>{error}</div>}
            <Flex flexWrap="wrap" justifyContent="space-between">
                <Flex direction="column" flex={1} mr={[0, 0, 8]}>
                    <YamlEditor />
                </Flex>
                <Flex direction="column" flex={1} display={display}>
                    <YamlParser />
                </Flex>
            </Flex>
        </Flex>
    );
};


