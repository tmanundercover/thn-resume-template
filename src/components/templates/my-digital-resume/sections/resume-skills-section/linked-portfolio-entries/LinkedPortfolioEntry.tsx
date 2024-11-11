import LinkIcon from '@mui/icons-material/Link';
import useMyDigitalResumeStyles from "../../../MyDigitalResumeStyles";
import {
    ResumePortfolioItemType,
} from 'the-handsomestnerd-internal/dist/esm/src/components/BlockContentTypes';
import { FunctionComponent } from 'react';
import {Grid, Link, Typography} from "@mui/material";
import {dateUtils} from 'the-handsomestnerd-internal';


interface PortfolioItemProps {
    portfolioEntry: ResumePortfolioItemType;
}
const LinkedPortfolioEntry: FunctionComponent<PortfolioItemProps> = ({ portfolioEntry }) => {
    const classes = useMyDigitalResumeStyles();

    return (
        <Grid item container>
            <Grid item xs={3}>
                <Link href={"#" + portfolioEntry._id} className={classes.toolTiplink}>
                    <Typography variant='caption' color='whitesmoke'>{dateUtils.yearNumeric(portfolioEntry.inceptionDate)}</Typography>
                </Link>
            </Grid>
            <Grid item xs={8}>
                <Link href={"#" + portfolioEntry._id} className={classes.toolTiplink}>
                    <Typography lineHeight={.5} variant='caption' color='whitesmoke'>{portfolioEntry.title}</Typography>
                </Link>
            </Grid>
            <Grid item xs={1}>
                <Link href={portfolioEntry.linkToProd} style={{ color: "whitesmoke" }} aria-label={`Link to ${portfolioEntry.title}`}>
                    <LinkIcon  />
                </Link>
            </Grid>
        </Grid>
    );
};

export default LinkedPortfolioEntry;