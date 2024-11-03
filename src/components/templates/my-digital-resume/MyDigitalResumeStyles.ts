// block renderers can return JSX Elements that are block or inline elements since they will be the top level element
import makeStyles from '@mui/styles/makeStyles';
import {COLORS} from "the-handsomestnerd-internal/dist/esm/theme/common/ColorPalette";

const useMyDigitalResumeStyles = makeStyles(() => ({
    resumeSection: {
        borderBottom: `1px solid ${COLORS.LIGHTGRAY}`
    },
    toolTiplink: {
        width: "100%",
        "&:hover": {
            color: "#FFFFFF",
            textDecoration: "underline #FFFFFF"
        }
    },
}))

export default useMyDigitalResumeStyles
