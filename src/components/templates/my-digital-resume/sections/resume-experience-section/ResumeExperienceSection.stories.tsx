import type {Meta, StoryObj} from '@storybook/react';
import ResumeExperienceSectionData from "../../storybook-data/ResumeExperienceSectionData";
import DigitalResumeThemeData from "../../storybook-data/DigitalResumeThemeData";
import ResumeExperienceSection from "./index";

const meta: Meta<typeof ResumeExperienceSection> = {
    title: "Resume/Section/Resume Experience Section",
    component: ResumeExperienceSection,
};

export default meta;
type Story = StoryObj<typeof ResumeExperienceSection>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const ResumeExperienceSectionCompleteStory: Story = {
    args: {
        sectionData: ResumeExperienceSectionData,
    },
    parameters: {
        pageTheme: DigitalResumeThemeData
    },
    render: ({sectionData}) =>
        <ResumeExperienceSection sectionData={sectionData}></ResumeExperienceSection>,
};