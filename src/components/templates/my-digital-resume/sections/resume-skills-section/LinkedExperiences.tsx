import {FunctionComponent, useContext, useEffect, useState} from 'react'
import {CircularProgress, Grid, Link, Typography} from "@mui/material";
import {SanityContext, dateUtils} from "the-handsomestnerd-internal"
import useMyDigitalResumeStyles from "../../MyDigitalResumeStyles";
import {ResumeExperienceType, ResumeSkillType} from "../../MyDigitalResumeTypes";
interface IProps {
    resumeSkill: ResumeSkillType
}

const LinkedExperiences: FunctionComponent<IProps> = (props: IProps) => {
    const classes = useMyDigitalResumeStyles()
    const sanityContext:any = useContext(SanityContext)

    const [skillExperiences, setSkillExperiences] = useState<ResumeExperienceType[]>()
    const [skillNumYears, setSkillNumYears] = useState<string | undefined>()

    const getSkillExperience = async (skill: ResumeSkillType) => {
        if (sanityContext.fetchSkillExperiences)
            return sanityContext.fetchSkillExperiences(skill)
        else
            return undefined
    }

    useEffect(() => {
        getSkillExperience(props.resumeSkill).then(response => {
            if (response) {
                setSkillExperiences(response)
            }
        })
    }, [])

    useEffect(() => {
        if (
            skillExperiences && skillExperiences[0] &&
            skillExperiences[skillExperiences.length - 1] && skillExperiences[skillExperiences.length - 1].dateStart
            && skillExperiences[0].dateEnd
        )
            setSkillNumYears(dateUtils.getLengthOfTime(skillExperiences[skillExperiences.length - 1].dateStart, skillExperiences[0].dateEnd).result)
    }, [skillExperiences])

    return (<Grid container item paddingBottom={1}>
        {
            skillNumYears ? <Typography
                    variant='caption'
                    color='whitesmoke'>{`${skillNumYears}`} </Typography>
                : <Typography
                    variant='caption'
                    color='whitesmoke'>{skillExperiences?.length !== 0 ? "Loading..." : ""}</Typography>

        }
        {
            skillExperiences ? skillExperiences.map((experience: ResumeExperienceType, index) => {
                return <Grid item container key={index}>
                    <Grid item xs={3}>
                        <Link href={"#" + experience._id}  className={classes.toolTiplink}>
                            <Typography
                                variant='caption'
                                color='whitesmoke'>{dateUtils.YearNumeric(experience.dateStart)}</Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={9}>
                        <Link href={"#" + experience._id} className={classes.toolTiplink}>
                            <Typography
                                lineHeight={.5}
                                variant='caption'
                                color='whitesmoke'>{experience.title}</Typography>
                        </Link>
                    </Grid>
                </Grid>
            }) : <CircularProgress></CircularProgress>
        }
    </Grid>)
}

export default LinkedExperiences