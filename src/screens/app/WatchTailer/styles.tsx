import { hp, wp } from "@utils";
import { StyleSheet } from "react-native";

export const useStyles=()=>{
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor:"black",
        
        },
        doneButton: {
          position: 'absolute',
          overflow: 'visible',
      
          top: hp(20),
          right: wp(2),
          alignSelf: 'center',
          zIndex: 2,
          padding: hp(5),
          backgroundColor: 'white',
          borderRadius: 5,
        },
        doneButtonText: {
          color: 'black',
          fontSize: 16,
        },
        videoContainer: {
          flex: 1,
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        },
      });

      return {styles}
      
}