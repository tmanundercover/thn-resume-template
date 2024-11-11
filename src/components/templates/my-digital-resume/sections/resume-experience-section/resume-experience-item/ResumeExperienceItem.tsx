import {FunctionComponent, useState} from 'react'
import {IconButton, Chip, Grid, List, ListItem, Switch, Typography, useTheme} from "@mui/material";
import {FormatListBulleted, Notes} from "@mui/icons-material";
import {
    ResumeExperienceType,
    ResumeSkillType
} from 'the-handsomestnerd-internal/dist/esm/src/components/BlockContentTypes';
import sortBy from 'lodash/sortBy';
import ResumeSkillTooltipWrapper
    from "../../resume-skills-section/resume-skill-tooltip-wrapper/ResumeSkillTooltipWrapper";
import {dateUtils} from 'the-handsomestnerd-internal'

interface ResumeExperienceItemProps {
    experience: ResumeExperienceType
}

const ResumeExperienceItem: FunctionComponent<ResumeExperienceItemProps> = ({experience}: ResumeExperienceItemProps) => {
    const theme = useTheme()
    const [isTooltipOpen, setIsToolTipOpen] = useState<number>()

    const [checked, setChecked] = useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    return (<Grid
        item
        container
        alignContent='flex-start'
        role={'experiencedivider'}
        xs={12}
    >
        <Grid container item role={'experienceheader'} alignContent='center' alignItems='center'>
            <Grid item xs={12} md={4}>
                <Typography display='inline'
                            variant='body2'>{experience.companyName}</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} container sx={{paddingTop: "4px", paddingBottom: "4px"}}>
                <Typography variant='subtitle1'>{experience.companySubtitle}</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Typography
                    variant='body1'>{experience.title}</Typography>
            </Grid>
        </Grid>
        <Grid container item>
            {
                (experience.isPresentPosition || experience.dateEnd) && experience.dateStart &&
                <Grid container item xs={6} role='date-block'>
                    <Grid container item>
                        <Typography variant='body1'
                                    fontWeight={'bold'}>{`${dateUtils.monthYear(experience.dateStart)}—${experience.isPresentPosition ? 'present' : dateUtils.monthYear(experience.dateEnd)}`}</Typography>
                    </Grid>
                    <Grid container item xs={6}>
                        <Typography
                            variant='body1'
                            fontStyle={'italic'}>
                            {dateUtils.getLengthOfTime(experience.dateStart, experience.dateEnd)}
                        </Typography>
                    </Grid>
                </Grid>
            }
            <Grid container item xs={experience.dateEnd && experience.dateStart ? 6 : 12} justifyContent={experience.dateEnd && experience.dateStart ? 'flex-end' : 'flex-start'}
                  alignContent='flex-end'>
                <IconButton>
                    <FormatListBulleted
                        fontSize={'small'}
                        color={!checked ? "primary" : "secondary"}/>
                    <Switch checked={checked}
                            onChange={handleChange} size='small'/>
                    <Notes color={checked ? "primary" : "secondary"}
                           fontSize={'small'}/>
                </IconButton>
            </Grid>
        </Grid>
        {
            checked ? <Grid container item>
                    <Typography
                        variant='body1' gutterBottom>{experience.description}</Typography>
                </Grid>
                : <Grid container item paddingLeft="16px">
                    <List sx={{listStyleType: 'disc'}}>
                        {
                            experience.bulletedDescription?.map((aBullet: string, index: number) => {
                                return <ListItem key={"bulleted-description" + index}
                                                 sx={{display: 'list-item'}}>{aBullet}</ListItem>
                            })
                        }
                    </List>
                </Grid>
        }
        {
            experience.skillsUsed && experience.skillsUsed.length !== 0
            && <Grid container
                     role='skills-used-block'
                     item
                     spacing={1}
                     style={{
                         overflowX: "scroll",
                         paddingBottom: theme.spacing(1)
                     }} wrap='nowrap'>
                {
                    sortBy(experience.skillsUsed, ['title']).map((skill: ResumeSkillType, index: number) => {
                        return <Grid item key={index} onClick={() => {
                            setIsToolTipOpen(index)
                        }}
                        >
                            <ResumeSkillTooltipWrapper resumeSkill={skill} isOpenTooltip={index === isTooltipOpen}>
                                <Chip role='experienceskill' size='small'
                                      color='primary'
                                      label={skill.title}/>
                            </ResumeSkillTooltipWrapper>
                        </Grid>
                    })
                }
            </Grid>
        }
    </Grid>)
}

export default ResumeExperienceItem