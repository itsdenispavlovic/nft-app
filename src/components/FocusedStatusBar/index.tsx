import { StatusBar } from 'react-native';
import { useIsFocused } from "@react-navigation/native";
import { FocusedStatusBarProps } from "./types";

const FocusedStatusBar = (props: any) => {
    const isFocused = useIsFocused();

    return isFocused ? <StatusBar animated={true} {...props} /> : null;
}

export {
    FocusedStatusBar
}