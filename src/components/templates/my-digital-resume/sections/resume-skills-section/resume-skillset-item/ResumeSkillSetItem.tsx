import {FunctionComponent, useState} from 'react'
import {Grid, Typography} from "@mui/material";
import {v4 as uuidv4} from 'uuid'
import ResumeSkillTooltipWrapper from "../resume-skill-tooltip-wrapper/ResumeSkillTooltipWrapper";
import {ResumeSkillSet, ResumeSkillType} from 'the-handsomestnerd-internal/dist/esm/src/components/BlockContentTypes';

interface IProps {
    skillset: ResumeSkillSet
}

const ResumeSkillSetItem: FunctionComponent<IProps> = (props: IProps) => {
    const [isToolTipOpen, setIsToolTipOpen] = useState<number>()
    return (
        <Grid key={uuidv4()} item container xs={11} sm={6} md={6}
              alignContent='flex-start'
        >
            <Grid container item>
                <Typography display='inline'
                            role='skillheader'
                            variant='body2'>
                    {props.skillset.title}
                </Typography>
            </Grid>
            <Grid container item>
                {
                    props.skillset.skills?.map((skill: ResumeSkillType, index: number) => {

                        return <Grid item display='inline' key={index} onClick={() => {
                            setIsToolTipOpen(index)
                        }}>
                            <ResumeSkillTooltipWrapper isOpenTooltip={index === isToolTipOpen} resumeSkill={skill}>
                                <Typography role='subskill'
                                            key={index}
                                            display='inline'
                                            variant='body1'>
                                    {skill.title}
                                    {index !== (props.skillset.skills?.length ?? 0) - 1 ? ',' : ''}&nbsp;
                                </Typography>
                            </ResumeSkillTooltipWrapper>
                        </Grid>
                    })
                }
            </Grid>
        </Grid>)
}

export default ResumeSkillSetItem