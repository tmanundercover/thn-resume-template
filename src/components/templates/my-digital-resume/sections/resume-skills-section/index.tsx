import{FunctionComponent} from 'react'
import {useTheme} from "@mui/material/styles";
import {Grid, Typography, useMediaQuery} from '@mui/material'
import useMyDigitalResumeStyles from "../../MyDigitalResumeStyles";
import ResumeSkillSetItem from "./ResumeSkillSetItem";
import { ResumeSkillSectionType, ResumeSkillSet } from 'the-handsomestnerd-internal/dist/esm/components/BlockContentTypes';

interface ResumeSkillsSectionProps {
    sectionData: ResumeSkillSectionType
}

const ResumeSkillsSection: FunctionComponent<ResumeSkillsSectionProps> = (props: ResumeSkillsSectionProps) => {
    const globalClasses = useMyDigitalResumeStyles()
    const theme = useTheme()

    const smDown = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Grid
            container
            item
            style={{padding: theme.spacing(4, smDown ? 1 : 4)}}
            className={globalClasses.resumeSection}
        >
            <Grid container item spacing={3}>
                <Grid item container md={4} alignContent='flex-start' spacing={1}>
                    <Grid item container><Typography component='div'
                                                     variant='h6'>{props.sectionData?.title}</Typography><Typography
                        variant='h6'
                        color='primary'
                        display='inline'>.</Typography></Grid>
                    <Grid item><Typography variant='body1'>{props.sectionData?.introduction}</Typography></Grid>
                </Grid>
                <Grid item container md={8} spacing={2} justifyContent='space-between'>
                    {
                        props.sectionData?.skillsets?.map((skillSet: ResumeSkillSet, skillSetsIndex: number) => {
                            return <ResumeSkillSetItem skillset={skillSet} key={skillSetsIndex}/>
                        })
                    }
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ResumeSkillsSection