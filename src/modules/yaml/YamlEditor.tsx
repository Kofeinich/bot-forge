import React, { useState } from 'react';
// @ts-ignore
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-yaml';
import 'ace-builds/src-noconflict/theme-github';
// @ts-ignore
import YAML from 'js-yaml';

interface YamlEditorProps {
    initialValue?: string;
    onChange?: (value: any) => void;
}

export const YamlEditor: React.FC<YamlEditorProps> = ({ initialValue, onChange }) => {
    const [value, setValue] = useState(initialValue || '');

    const handleEditorChange = (newValue: string) => {
        setValue(newValue);

        try {
            const parsedYaml = YAML.load(newValue);
            onChange?.(parsedYaml);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <AceEditor
            mode="yaml"
            theme="github"
            value={value}
            onChange={handleEditorChange}
            name="yaml-editor"
            editorProps={{ $blockScrolling: true }}
            width="100%"
            height="400px"
            setOptions={{ useWorker: false }}
        />
    );
};
