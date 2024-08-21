import React from "react";

export type ButtonTypes={

    isHollow?:boolean,
    onPress: ()=>void,
    fullWidth?:boolean
    title:string,
    hasIcon?:boolean,
    Icon?:  React.FC<{ width?: number; height?: number; color?: string }>;
    loading?:boolean

}