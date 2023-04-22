import React from "react";
import { useYamlStore } from "./store/editorStore";
import YAML from "js-yaml";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-yaml";
import "ace-builds/src-noconflict/theme-github";

export const YamlEditor: React.FC = () => {
    const { yamlValue, setYamlValue, setParsedYaml, setError } = useYamlStore();

    const handleEditorChange = (newValue: string) => {
        setYamlValue(newValue);
        setError(null);

        try {
            const parsedYaml = YAML.load(newValue);
            setParsedYaml(parsedYaml);
        } catch (error) {
            setError(`Некорректный YAML документ ${error}`);
        }
    };

    return (
        <>
            <AceEditor
                mode="yaml"
                theme="github"
                value={yamlValue}
                onChange={handleEditorChange}
                name="yaml-editor"
                editorProps={{ $blockScrolling: true }}
                width="100%"
                height="400px"
                setOptions={{ useWorker: false }}
            />
        </>
    );
};
