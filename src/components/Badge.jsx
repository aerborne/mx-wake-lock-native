import { createElement } from "react";
import { Text, View } from "react-native";

import { mergeNativeStyles } from "@mendix/pluggable-widgets-tools";

import { defaultBadgeStyle } from "../ui/styles";
import KeepAwake from "@sayem314/react-native-keep-awake";

export function Badge({ value, style, onClick }) {
    return (
        <View>
            <KeepAwake />
            <Text>{"Staying Alive a a a a"}</Text>
        </View>
    );
}
