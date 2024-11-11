import {FunctionComponent} from 'react'
import {CircularProgress, Grid, Link, Typography, useTheme} from "@mui/material";
import dateUtils from 'the-handsomestnerd-internal/dist/esm/src/utils/dateUtils';
import {
    ResumeExperienceType,
    ResumeSkillType
} from 'the-handsomestnerd-internal/dist/esm/src/components/BlockContentTypes';
import useSkillExperiences from './useSkillExperiences';
import useMyDigitalResumeStyles from "../../../MyDigitalResumeStyles";

interface LinkedExperiencesProps {
    resumeSkill: ResumeSkillType
}

const LinkedExperiences: FunctionComponent<LinkedExperiencesProps> = ({resumeSkill}: LinkedExperiencesProps) => {
    const classes = useMyDigitalResumeStyles()
    const theme = useTheme()
    const {data: skillExperiences, loading, error} = useSkillExperiences(resumeSkill);

    if (error) return <Typography color="pink">Error: {error.message}</Typography>;
    if (!skillExperiences || loading) return <CircularProgress
        style={{color: theme.palette.getContrastText(theme.palette.primary.main)}}/>;
    return (<Grid container item paddingBottom={1}>
        {skillExperiences && skillExperiences.length > 0
            && <Typography variant='caption' color='whitesmoke'
                           gutterBottom>{dateUtils.getLengthOfTime(skillExperiences[skillExperiences.length - 1].dateStart, skillExperiences[0].dateEnd)} of <b>{resumeSkill.title}</b> experience</Typography>}
        {
            skillExperiences?.map((experience: ResumeExperienceType) => {
                return <Grid item container key={experience._id}>
                    <Grid item xs={3}>
                        <Link href={`#${experience._id}`} className={classes.toolTiplink}>
                            <Typography
                                variant='caption'
                                color='whitesmoke'>{dateUtils.yearNumeric(experience.dateStart)}</Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={9}>
                        <Link href={`#${experience._id}`} className={classes.toolTiplink}>
                            <Typography
                                lineHeight={.5}
                                variant='caption'
                                color='whitesmoke'>{experience.title}</Typography>
                        </Link>
                    </Grid>
                </Grid>
            })}
    </Grid>)
}

export default LinkedExperiences