import {COLORSTYPE} from '@configs'
import React from 'react'
export type ThemeContextType={
    colors: COLORSTYPE,
    isDarkMode: boolean,
    toggleTheme?: ()=> void
}

export type ThemeContextProviderType={
    children: React.ReactNode
}