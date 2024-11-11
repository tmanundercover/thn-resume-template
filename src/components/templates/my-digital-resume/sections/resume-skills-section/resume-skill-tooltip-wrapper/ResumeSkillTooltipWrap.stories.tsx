import type {Meta, StoryObj} from '@storybook/react';
import {Grid, Typography} from "@mui/material";
import ResumeSkillTooltipWrapper from "./ResumeSkillTooltipWrapper";
import {ResumeSkillType} from "the-handsomestnerd-internal/dist/esm/src/components/BlockContentTypes";
import ResumeSkillData from "../../../storybook-data/ResumeSkillData";
import ResumeExperiencesArrayData from "../../../storybook-data/ResumeExperiencesArrayData";
import ResumePortfolioItemsArrayData from "../../../storybook-data/ResumePortfolioItemsArrayData";
import DigitalResumeThemeData from "../../../storybook-data/DigitalResumeThemeData";

const meta: Meta<typeof ResumeSkillTooltipWrapper> = {
    title: "Resume/Page Components/Skill Tooltip Wrapper",
    component: ResumeSkillTooltipWrapper,
};

export default meta;
type Story = StoryObj<typeof ResumeSkillTooltipWrapper>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const ResumeSkillTooltipWrapperCompleteStory: Story = {
    args: {
        resumeSkill: ResumeSkillData,
    },
    parameters: {
        fetchSkillExperiences: (ResumeSkillData: ResumeSkillType) => {
            return Promise.resolve(ResumeExperiencesArrayData)
        },
        fetchPortfolioItems: (ResumeSkillData: ResumeSkillType) => {
            return Promise.resolve(ResumePortfolioItemsArrayData)
        },
        pageTheme: DigitalResumeThemeData
    },
    render: ({resumeSkill, isOpenTooltip}) =>
        <Grid container justifyContent='center' alignContent='center' style={{height: "100vh"}}>
            <Grid item>
                <ResumeSkillTooltipWrapper isOpenTooltip={isOpenTooltip} resumeSkill={resumeSkill}>
                    <Typography>I have a
                        tooltip</Typography>
                </ResumeSkillTooltipWrapper>
            </Grid>
        </Grid>
};

export const ResumeSkillTooltipWrapperTooltipOpenStory: Story = {
    args: {
        resumeSkill: ResumeSkillData,
        isOpenTooltip: true
    },
    parameters: {
        fetchSkillExperiences: (ResumeSkillData: ResumeSkillType) => {
            return Promise.resolve(ResumeExperiencesArrayData)
        },
        fetchPortfolioItems: (ResumeSkillData: ResumeSkillType) => {
            return Promise.resolve(ResumePortfolioItemsArrayData)
        },
        pageTheme: DigitalResumeThemeData
    },
    render: ({resumeSkill, isOpenTooltip}) =>
        <Grid container justifyContent='center' alignContent='center' style={{height: "100vh"}}>
            <Grid item>
                <ResumeSkillTooltipWrapper isOpenTooltip={isOpenTooltip} resumeSkill={resumeSkill}>
                    <Typography>I have a
                        tooltip</Typography>
                </ResumeSkillTooltipWrapper>
            </Grid>
        </Grid>
};

export const ResumeSkillTooltipOpenEmptyVersionSpaceStory: Story = {
    args: {
        resumeSkill: {...ResumeSkillData, versions: ["16","","18"]},
        isOpenTooltip: true
    },
    parameters: {
        fetchSkillExperiences: (ResumeSkillData: ResumeSkillType) => {
            return Promise.resolve(ResumeExperiencesArrayData)
        },
        fetchPortfolioItems: (ResumeSkillData: ResumeSkillType) => {
            return Promise.resolve(ResumePortfolioItemsArrayData)
        },
        pageTheme: DigitalResumeThemeData
    },
    render: ({resumeSkill, isOpenTooltip}) =>
        <Grid container justifyContent='center' alignContent='center' style={{height: "100vh"}}>
            <Grid item>
                <ResumeSkillTooltipWrapper isOpenTooltip={isOpenTooltip} resumeSkill={resumeSkill}>
                    <Typography>I have a
                        tooltip</Typography>
                </ResumeSkillTooltipWrapper>
            </Grid>
        </Grid>
};
