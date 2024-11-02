import type {Meta, StoryObj} from '@storybook/react';
import {getThemeFromSanity} from "the-handsomestnerd-internal";
import {ThemeProvider} from '@mui/material/styles';
import {Typography} from "@mui/material";
import ResumeSkillTooltipWrapper from "./ResumeSkillTooltipWrapper";
import ResumeSkillData from "../../storybook-data/ResumeSkillData";
import DigitalResumeThemeData from "../../storybook-data/DigitalResumeThemeData";
import ResumeExperiencesArrayData from "../../storybook-data/ResumeExperiencesArrayData";
import {ResumeSkillType} from "../../MyDigitalResumeTypes";
import ResumePortfolioItemsArrayData from "../../storybook-data/ResumePortfolioItemsArrayData";

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
    parameters:{
        fetchSkillExperiences: (ResumeSkillData:ResumeSkillType)=>{
            return Promise.resolve(ResumeExperiencesArrayData)
        },
        fetchPortfolioItems: (ResumeSkillData:ResumeSkillType)=>{
            return Promise.resolve(ResumePortfolioItemsArrayData)
        }
    },
    render: ({resumeSkill}) =>
        <ThemeProvider
            theme={getThemeFromSanity(DigitalResumeThemeData)}>
            <ResumeSkillTooltipWrapper resumeSkill={resumeSkill}>
                <Typography>I have a
                tooltip</Typography>
            </ResumeSkillTooltipWrapper></ThemeProvider>,
};
