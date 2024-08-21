import { CloseIcon, SearchIcon } from "@assets"
import { useAppTheme } from "@contexts"
import { hp } from "@utils"
import { TextInput, TouchableOpacity, View } from "react-native"
import { useStyles } from "./styles"
import React from "react"
import { SearchInputTypes } from "./types"

export const SearchInput:React.FC<SearchInputTypes>=({value,onChangeValue,onSearch,onCancel})=>{
const {colors}=useAppTheme()
const {styles}=useStyles()
const ICONCOLOR= colors.primaryText
const ICONSIZE= hp(7)
    return(
        <View style={styles.containerView}>
            
            <View style={styles.IconView}>
            <SearchIcon
            height={ICONSIZE}
            width={ICONSIZE}
            color={ICONCOLOR}
            />
            </View>
            <TextInput
            value={value}
            onChangeText={onChangeValue}
            style={styles.textInput}
            onSubmitEditing={onSearch}
            returnKeyType='go'
            placeholderTextColor={colors.textgrey}
            placeholder="TV shows, movies and more"
            />
             <TouchableOpacity
             onPress={onCancel}
             style={styles.IconView}>
            <CloseIcon
             height={ICONSIZE}
             width={ICONSIZE}
             color={ICONCOLOR}
            
            />
            </TouchableOpacity>
           
        </View>
    )
}