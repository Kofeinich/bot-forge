import React, { useState } from 'react';
import {YamlEditor} from "./YamlEditor";

export const Yaml: React.FC = () => {
    const [parsedYaml, setParsedYaml] = useState(null);

    const handleYamlChange = (yaml: any) => {
        setParsedYaml(yaml);
    };

    return (
        <div>
            <h1>YAML Editor</h1>
            <YamlEditor onChange={handleYamlChange} />
            {parsedYaml && (
                <div>
                    <h2>Parsed YAML:</h2>
                    <pre>{JSON.stringify(parsedYaml, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};
