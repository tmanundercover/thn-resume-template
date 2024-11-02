// block renderers can return JSX Elements that are block or inline elements since they will be the top level element
import makeStyles from '@mui/styles/makeStyles';
// import {COLORS} from "../../theme/common/ColorPalette";
export enum COLORS {
    TRANSPARENT_DARKBLUE = 'rgba(0,0,53,.85)',
    TRANSPARENTWHITE = 'rgba(255,255,255,0.75)',
    TRANSPARENTERWHITE = 'rgba(255,255,255,0.55)',
    TRANSPARENTLIGHTGRAY = "rgba(244,243,245,0.87)",
    TRANSPARENTDARKGRAY = "rgba(67,66,74,0.78)",
    DARKBLUE = '#000035',
    BLUE = '#102B88',
    // DARK_GRAY = '#A8A9AC',
    GRAY = '#CFCFCF',
    LIGHT_GRAY = '#949495',
    LIGHTBLUE = '#2CC4D7',
    ALMOSTPURPLE = "#331BAD",
    LIGHTGRAY = "#F4F3F5",
    MEDIUMGRAY = "#BCB9B0",
    DARKGRAY = "#43424A",
    AQUA = "#12b3be",
    WHITESMOKE = '#f6f6f6',
    WHITE = '#ffffff',
    RED = "#d20027",
    ALMOSTWHITE="#dfd8d9",
    DARKERGRAY = "#383838",
    DARK_GRAY = '#A8A9AC',
    LIGHTER_GRAY = '#E3E3E3',
    PINK = '#FFA9E7',
    DARKORANGE = '#462600',
    LIGHT_GRAY2 = '#E3E3E3',
    ALMOST_BLACK='#131313',
    SIGMA_BLUE='#19468D',
    PURPLE='#333784',
    LUXURY_PURPLE='#4B0082',
    LIGHT_WHITE='#404040',
    DISABLED_GRAY='#949495'
}

const useMyDigitalResumeStyles = makeStyles(() => ({
    resumeSection: {
        borderBottom: `1px solid ${COLORS.LIGHTGRAY}`
    },
}))

export default useMyDigitalResumeStyles
