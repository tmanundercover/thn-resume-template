import type {Meta, StoryObj} from '@storybook/react';
import DigitalResumeThemeData from "../../storybook-data/DigitalResumeThemeData";
import ResumeEducationSection from "./ResumeEducationSection";
import ResumeEducationSectionData from "../../storybook-data/ResumeEducationSectionData";

const meta: Meta<typeof ResumeEducationSection> = {
    title: "Resume/Section/Resume Education Section",
    component: ResumeEducationSection,
};

export default meta;
type Story = StoryObj<typeof ResumeEducationSection>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const ResumeEducationSectionStory: Story = {
    args: {
        sectionData: ResumeEducationSectionData
    },
    parameters: {
        pageTheme: DigitalResumeThemeData
    },
    render: ({sectionData}) =>
        <ResumeEducationSection sectionData={sectionData}></ResumeEducationSection>,
};
