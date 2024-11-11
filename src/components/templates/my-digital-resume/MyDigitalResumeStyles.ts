import makeStyles from '@mui/styles/makeStyles';
import {COLORS} from "the-handsomestnerd-internal/dist/esm/src/theme/common/ColorPalette";

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
