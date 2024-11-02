import {FunctionComponent, useContext, useEffect, useState} from 'react'
import {CircularProgress, Grid, Link, Typography} from "@mui/material";
import {SanityContext, dateUtils} from "the-handsomestnerd-internal";
import useMyDigitalResumeStyles from "../../MyDigitalResumeStyles";
import {ResumePortfolioItemType, ResumeSkillType} from "../../MyDigitalResumeTypes";

interface IProps {
    resumeSkill: ResumeSkillType
}

const LinkedPortfolioEntries: FunctionComponent<IProps> = (props: IProps) => {
    const classes = useMyDigitalResumeStyles()
    const sanityContext:any = useContext(SanityContext)

    const [portfolioEntries, setPortfolioEntries] = useState<ResumePortfolioItemType[]>()

    const getPortfolioItems = async (resumeSkill: ResumeSkillType) => {
        if (sanityContext.fetchPortfolioItems)
            return sanityContext.fetchPortfolioItems(resumeSkill)
        else
            return undefined
    }
    useEffect(() => {
        getPortfolioItems(props.resumeSkill).then(response => {
            if (response) {
                setPortfolioEntries(response)
            }
        })
    }, [])

    return (<Grid container item paddingBottom={1}>
        {(portfolioEntries?.length ?? 0) > 0 && <Grid container item><Typography color='whitesmoke' variant='caption'>Portfolio</Typography></Grid>}
        {
            portfolioEntries ? portfolioEntries.map((portfolioEntry: ResumePortfolioItemType, index) => {
                return <Grid item container key={index}>
                    <Grid item xs={3}>
                        <Link href={"#" + portfolioEntry._id} className={classes.toolTiplink}>
                            <Typography
                                variant='caption'
                                color='whitesmoke'>{dateUtils.YearNumeric(portfolioEntry.inceptionDate)}</Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={9}>
                        <Link href={"#" + portfolioEntry._id} className={classes.toolTiplink}>
                            <Typography
                                lineHeight={.5}
                                variant='caption'
                                color='whitesmoke'>{portfolioEntry.title}</Typography>
                        </Link>
                    </Grid>
                </Grid>
            }) : <CircularProgress></CircularProgress>
        }
    </Grid>)
}

export default LinkedPortfolioEntries