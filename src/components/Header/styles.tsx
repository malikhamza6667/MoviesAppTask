import { useAppTheme } from "@contexts"
import { hp, wp } from "@utils"
import { StyleSheet } from "react-native"

export const useStyles=()=>{
const {colors}=useAppTheme()
    const styles=StyleSheet.create({
        wrapper:{
            paddingTop:hp(2),
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            paddingHorizontal: wp(2),
            
        },
        title:{
            fontFamily: 'Poppins-Medium',
            fontSize:hp(4),
            color: colors.secondaryText
        },
        headerContent:{
            flex:1,
            justifyContent:'center',
            alignItems: 'center'
           
        },
        subTitle:{
            fontFamily: 'Poppins-Medium',
            fontSize:hp(3),
            color: colors.primaryButton
        }
    })

    return {
        styles
    }
}