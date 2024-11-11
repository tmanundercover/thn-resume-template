import type {Meta, StoryObj} from '@storybook/react';
import ResumeSkillsSection from "./index";
import ResumeSkillSectionData from "../../storybook-data/ResumeSkillSectionData";
import DigitalResumeThemeData from "../../storybook-data/DigitalResumeThemeData";
import ResumeExperiencesArrayData from "../../storybook-data/ResumeExperiencesArrayData";
import ResumePortfolioItemsArrayData from "../../storybook-data/ResumePortfolioItemsArrayData";

const meta: Meta<typeof ResumeSkillsSection> = {
    title: "Resume/Section/Resume Skills Section",
    component: ResumeSkillsSection,
};

export default meta;
type Story = StoryObj<typeof ResumeSkillsSection>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const ResumeSkillsSectionCompleteStory: Story = {
    args: {
        sectionData: ResumeSkillSectionData,
    },
    parameters: {
        fetchSkillExperiences: () => {
            return Promise.resolve(ResumeExperiencesArrayData)
        },
        fetchPortfolioItems: () => {
            return Promise.resolve(ResumePortfolioItemsArrayData)
        },
        pageTheme: DigitalResumeThemeData
    },
    render: ({sectionData}) =>
        <ResumeSkillsSection sectionData={sectionData}></ResumeSkillsSection>,
};
