import React from "react"
import { TouchableOpacity, View } from "react-native"
import { CardType } from "./types"
import { useStyles } from "./styles"

export const Card:React.FC<CardType>=({children,style,onPress})=>{
const {styles}=useStyles()
    return(
        <TouchableOpacity onPress={onPress} style={[styles.cardStyles,style]}>
            {children}
        </TouchableOpacity>
    )
}