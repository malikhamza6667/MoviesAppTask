import { useAppTheme } from "@contexts"
import { hp, wp } from "@utils"
import { StyleSheet } from "react-native"

export const useStyles=()=>{
const {colors}=useAppTheme()
    const styles=StyleSheet.create({
        cardContainer:{marginRight:wp(1)},

        itemTime:{
            fontFamily: 'Poppins-Medium',
            fontSize: hp(3),
            color: colors.primaryText,
            marginRight:hp(3)
        },
        itemHall:{
            fontFamily: 'Poppins-Regular',
            fontSize:hp(3),
            color: colors.textgrey
        },
        card:{
            elevation:2,
            backgroundColor:colors.secondaryText,
            borderRadius:hp(4),
            width:wp(33),
            alignItems:'center',
            justifyContent:'center',
            height:hp(45),
            marginVertical:hp(2)
        },
        boldText:{
            fontFamily: 'Poppins-Medium',
            fontSize: hp(3),
            color:colors.primaryText
        },
    })

    return {
        styles
    }
}