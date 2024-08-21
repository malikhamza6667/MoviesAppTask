import { useAppTheme } from "@contexts"
import { hp } from "@utils"
import { StyleSheet } from "react-native"
hp
export const useStyles=()=>{
const {colors}=useAppTheme()
 const styles= StyleSheet.create({
    screenWrapper:{
        backgroundColor: colors.primaryBackground
    },
    contentContainer:{
        top: hp(6),
        paddingBottom: hp(8),
        alignItems: 'center',
    }
 })
 return {
    styles
 }   
}