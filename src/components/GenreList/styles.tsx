import { useAppTheme } from "@contexts"
import { hp, wp } from "@utils"
import { StyleSheet } from "react-native"

export const useStyles=()=>{
const {colors}=useAppTheme()
    const styles=({itemColor}:{itemColor?:string})=>StyleSheet.create({
        mainWrapper:{
           
            height: hp(8),
           
            justifyContent:'center',
            padding:hp(1)
        },
        item:{
            padding:hp(1),
            paddingHorizontal:wp(1.5),
            borderRadius: 20,
            flexWrap:'wrap',
            marginRight:wp(0.4),
            backgroundColor: itemColor,
            alignItems:'center',
    
            
        },
        title:{
            fontFamily: 'Poppins-Medium',
            fontSize:hp(3),
            color: colors.secondaryText
        },
      
    })

    return {
        styles
    }
}