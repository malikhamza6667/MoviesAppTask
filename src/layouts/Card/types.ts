import React from "react"
import { ViewStyle } from "react-native"

export type CardType={
    style?: ViewStyle| ViewStyle[],
    onPress?:()=>void,
    children: React.ReactNode
}