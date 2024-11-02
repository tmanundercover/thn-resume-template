import type {Meta, StoryObj} from '@storybook/react';
import {ThemeProvider} from "@mui/material/styles";
import {getThemeFromSanity} from "the-handsomestnerd-internal";
import ResumeBioSection from "./index";
import ResumeBioSectionData from "../../storybook-data/ResumeBioSectionData";
import DigitalResumeThemeData from "../../storybook-data/DigitalResumeThemeData";
import homePageResumeData from "../../storybook-data/HomePageData";

const meta: Meta<typeof ResumeBioSection> = {
    title:"Resume/Section/Resume Bio Section",
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
    args :{
      sectionData: ResumeBioSectionData,
        homePage: homePageResumeData,
    },
    render: ({sectionData, isHideEmail, isHideButtons, homePage}) =>
        <ThemeProvider theme={getThemeFromSanity(DigitalResumeThemeData)}>
            <ResumeBioSection isHideButtons={isHideButtons} isHideEmail={isHideEmail} sectionData={sectionData} homePage={homePage}></ResumeBioSection>
        </ThemeProvider> ,
};

export const ResumeBioSectionSearchResult: Story = {
    args :{
        sectionData: ResumeBioSectionData,
        homePage: homePageResumeData,
    },
    render: ({sectionData, isHideEmail, isHideButtons, homePage}) =>
        <ThemeProvider theme={getThemeFromSanity(DigitalResumeThemeData)}>
            <ResumeBioSection isHideButtons={true} isHideEmail={true} sectionData={sectionData} homePage={homePage}></ResumeBioSection>
        </ThemeProvider> ,
};