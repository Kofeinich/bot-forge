import {create} from "zustand";
import {defaultYaml} from "../consts/default";
import YAML from "js-yaml";

type YamlStoreProps = {
    error: string | null,
    yamlValue: string | undefined,
    parsedYaml: string | null,
    setYamlValue: (newYamlValue: string) => void,
    setParsedYaml: (newParsedYaml: string) => void,
    setError: (err: string) => void,

}
export const useYamlStore = create<YamlStoreProps>((set) => ({
    error: null,
    yamlValue: defaultYaml,
    parsedYaml: YAML.load(defaultYaml),
    setYamlValue: (newYamlValue: string) =>
        set((state) => ({
            ...state,
            yamlValue: newYamlValue,
        })),
    setParsedYaml: (newParsedYaml: string) =>
        set((state) => ({
            ...state,
            parsedYaml: newParsedYaml,
        })),
    setError: (err: string) =>
        set((state) => ({
            ...state,
            error: err,
        })),
}));

