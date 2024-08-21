import { Dimensions } from "react-native";

const {height,width} = Dimensions.get('window')


const hp = (value: number) => {
    let decimal = value / 100;
    let newWidth = width * decimal;
    return newWidth;
};

const wp = (value: number) => {
    let decimal = value / 100;
    let newHeight = height * decimal;
    return newHeight;
};

export { hp, wp };