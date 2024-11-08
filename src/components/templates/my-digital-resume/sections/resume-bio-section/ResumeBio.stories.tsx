import type {Meta, StoryObj} from '@storybook/react';
import ResumeBioSectionData from "../../storybook-data/ResumeBioSectionData";
import ResumeBioSection from "./index";
import HomePageData from "../../storybook-data/HomePageData";
import DigitalResumeThemeData from "../../storybook-data/DigitalResumeThemeData";

const meta: Meta<typeof ResumeBioSection> = {
    title: "Resume/Section/Resume Bio Section",
    component: ResumeBioSection,
};

export default meta;
type Story = StoryObj<typeof ResumeBioSection>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const ResumeBioSectionComplete: Story = {
    args: {
        sectionData: ResumeBioSectionData,
        homePage: HomePageData.homePageResumeData,
    },
    parameters: {
        pageTheme: DigitalResumeThemeData
    },
    render: ({sectionData, isHideEmail, isHideButtons, homePage}) =>
        <ResumeBioSection isHideButtons={isHideButtons} isHideEmail={isHideEmail} sectionData={sectionData}
                          homePage={homePage}></ResumeBioSection>
};

export const ResumeBioSectionSearchResult: Story = {
    args: {
        sectionData: ResumeBioSectionData,
        homePage: HomePageData.homePageResumeData,
        isHideButtons: true
    },
    parameters: {
        pageTheme: DigitalResumeThemeData
    },
    render: ({sectionData, isHideEmail, isHideButtons, homePage}) =>
        <ResumeBioSection isHideButtons={isHideButtons} isHideEmail={isHideEmail} sectionData={sectionData}
                          homePage={homePage}></ResumeBioSection>
};