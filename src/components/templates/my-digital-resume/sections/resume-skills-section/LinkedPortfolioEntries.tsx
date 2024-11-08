import {FunctionComponent} from 'react'
import {CircularProgress, Grid, Link, Typography} from "@mui/material";
import {dateUtils} from "the-handsomestnerd-internal";
import useMyDigitalResumeStyles from "../../MyDigitalResumeStyles";
import {
    ResumePortfolioItemType,
    ResumeSkillType
} from 'the-handsomestnerd-internal/dist/esm/src/components/BlockContentTypes';
import useSkillPortfolioItems from './useSkillPortfolioItems';
import LinkIcon from '@mui/icons-material/Link';

interface IProps {
    resumeSkill: ResumeSkillType
}

const LinkedPortfolioEntries: FunctionComponent<IProps> = ({resumeSkill}: IProps) => {
    const classes = useMyDigitalResumeStyles()
    const {data: portfolioItems, loading, error} = useSkillPortfolioItems(resumeSkill);

    if (loading) return <CircularProgress/>;
    if (error) return <Typography color="error">Error loading experiences.</Typography>;

    return (<Grid container item paddingBottom={1}>
        {<Grid container item><Typography color='whitesmoke' variant='caption'>Portfolio</Typography></Grid>}
        {
            portfolioItems?.map((portfolioEntry: ResumePortfolioItemType, index) => {
                return <Grid item container key={index}>
                    <Grid item xs={3}>
                        <Link href={"#" + portfolioEntry._id} className={classes.toolTiplink}>
                            <Typography
                                variant='caption'
                                color='whitesmoke'>{dateUtils.YearNumeric(portfolioEntry.inceptionDate)}</Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={8}>
                        <Link href={"#" + portfolioEntry._id} className={classes.toolTiplink}>
                            <Typography
                                lineHeight={.5}
                                variant='caption'
                                color='whitesmoke'>{portfolioEntry.title}</Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={1}>
                        <Link  href={portfolioEntry.linkToProd}
                              style={{color: "whitesmoke"}}>

                            <LinkIcon/>
                        </Link>
                    </Grid>
                </Grid>
            })
        }
    </Grid>)
}

export default LinkedPortfolioEntries