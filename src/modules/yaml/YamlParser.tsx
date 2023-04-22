import React from 'react';
import {useYamlStore} from "./store/editorStore";
import {Flex, Text, Textarea} from "@chakra-ui/react";

export const YamlParser: React.FC = () => {
    const {parsedYaml} = useYamlStore()
    return (
        <>
            {parsedYaml && (
                <Flex bg={'white'}>
                    <Text overflow={'scroll'} maxW={'500px'} maxH={'500px'} fontSize={'8px'}>
                        <pre>
                             {JSON.stringify(parsedYaml, null, 2)}
                        </pre>
                    </Text>
                </Flex>
            )}
        </>
    );
};
