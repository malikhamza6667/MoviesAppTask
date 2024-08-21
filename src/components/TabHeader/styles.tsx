import { useAppTheme } from "@contexts"
import { hp, wp } from "@utils"
import { StyleSheet } from "react-native"

export const useStyles=()=>{
const {colors}=useAppTheme()
    const styles=StyleSheet.create({
        wrapper:{
            paddingTop:hp(2),
           
            flexDirection:'row',
            justifyContent:"space-between",
            paddingHorizontal: wp(2),
            alignItems:"center",
            paddingBottom:hp(3),
            borderBottomWidth: hp(0.1),
            borderColor:colors.secondaryBackground
            
        },
        title:{
            fontFamily: 'Poppins-Medium',
            fontSize:hp(4),
            color: colors.primaryText
        }
    })

    return {
        styles
    }
}