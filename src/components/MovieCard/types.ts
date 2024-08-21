import { TextStyle, ViewStyle } from "react-native"

export type MovieCardType={
    uri?: string,
    title?: string,
    onPress: ()=>void,
    cardStyles?: ViewStyle,
    textStyles?:TextStyle

}