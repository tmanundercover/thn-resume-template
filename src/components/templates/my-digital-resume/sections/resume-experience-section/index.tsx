import {FunctionComponent} from 'react'
import {Grid, Link, Typography, useMediaQuery, useTheme} from '@mui/material'
import useMyDigitalResumeStyles from "../../MyDigitalResumeStyles";
import {
    ResumeExperienceSectionType,
    ResumeExperienceType
} from 'the-handsomestnerd-internal/dist/esm/src/components/BlockContentTypes';
import ResumeExperienceItem from "./resume-experience-item/ResumeExperienceItem";

export interface ResumeExperienceSectionProps {
    sectionData: ResumeExperienceSectionType
}

const ResumeExperienceSection: FunctionComponent<ResumeExperienceSectionProps> = ({sectionData}:ResumeExperienceSectionProps) => {
    const classes = useMyDigitalResumeStyles()
    const theme = useTheme()

    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    const xsOnly = useMediaQuery(theme.breakpoints.only('xs'))
    return (
        <Grid
            container
            item
            style={{padding: theme.spacing(4, smDown ? 1 : 4)}}
            className={classes.resumeSection}
        >
            <Grid container item spacing={3}>
                <Grid item container md={4} alignContent='flex-start' spacing={1}>
                    <Grid item container><Typography variant='h6'>{sectionData.title}</Typography><Typography
                        variant='h6'
                        color='primary'
                        display='inline'>.</Typography></Grid>
                    <Grid item><Typography variant='body1'>{sectionData.introduction}</Typography></Grid>
                </Grid>
                <Grid item container md={8} spacing={2} justifyContent={xsOnly ? 'center' : 'flex-start'}>
                    {
                        sectionData.experiences?.map((experience: ResumeExperienceType, index: number) => {
                            return <Grid item container key={index}>
                                <Link id={experience._id} underline="hover" style={{position: "relative", top: -90}}>
                                    <></>
                                </Link>
                                <ResumeExperienceItem experience={experience} key={index}/>
                            </Grid>
                        })
                    }
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ResumeExperienceSection