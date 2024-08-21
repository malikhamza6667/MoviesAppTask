
import { hp, wp } from "@utils"
import { StyleSheet } from "react-native"

export const useStyles=()=>{

    const styles=StyleSheet.create({
        cardStyles:{
            padding:hp(2),
         borderRadius: hp(3)
            
        },
        
    })

    return {
        styles
    }
}