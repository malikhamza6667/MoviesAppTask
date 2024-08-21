import { COLORSTYPE } from "@configs";

export type TabHeaderType={
    title?: string,
    Icon?: React.FC<{ width?: number; height?: number; color?: string }>;
    onPress?:()=>void,
    isAlignedStart?:boolean
    backgroundColor?:string
    subtitle?:string
}