import {Layout} from "../../components/ui/layout/Layout";
import {YamlEditor} from "../../modules/yaml/YamlEditor";
import React from "react";
import {Yaml} from "../../modules/yaml/Yaml";


export const EditorPage = () => {
    return (
        <Layout>
            <Yaml/>
        </Layout>
    )
}
