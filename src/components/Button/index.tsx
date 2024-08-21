import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native"
import { useStyles } from "./styles"
import React from "react"
import { ButtonTypes } from "./types"
import { hp } from "@utils"
import { useAppTheme } from "@contexts"

export const Button:React.FC<ButtonTypes>=({onPress,title,isHollow,Icon,hasIcon,loading,fullWidth})=>{
const {styles}=useStyles()
const ICONSIZE= hp(10)
const {colors}=useAppTheme()
    return(
        <TouchableOpacity
        onPress={onPress}
        disabled={loading}
        style={styles({isHollow,fullWidth}).wrapper}>
            {
                loading ? <ActivityIndicator/>
                :
<>
{
    hasIcon && Icon && 
                <View style={styles({}).iconView}>
                    <Icon
                height={ICONSIZE}
                width={ICONSIZE}
                />
                    </View>
                
            }
            <Text style={styles({}).title}>{title}</Text>
</>
}
           
            
        </TouchableOpacity>
    )
}