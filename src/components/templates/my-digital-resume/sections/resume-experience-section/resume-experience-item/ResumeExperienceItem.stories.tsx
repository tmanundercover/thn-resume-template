import type {Meta, StoryObj} from '@storybook/react';
import ResumeExperienceItem from "./ResumeExperienceItem";
import ResumeExperienceItemData from "../../../storybook-data/ResumeExperienceItemData";
import DigitalResumeThemeData from "../../../storybook-data/DigitalResumeThemeData";

const meta: Meta<typeof ResumeExperienceItem> = {
    title: "Resume/Page Components/Experience Item",
    component: ResumeExperienceItem,
};

export default meta;
type Story = StoryObj<typeof ResumeExperienceItem>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const ResumeExperienceItemCompleteStory: Story = {
    args: {
        experience: ResumeExperienceItemData,
    },
    parameters: {
        pageTheme: DigitalResumeThemeData
    },
    render: ({experience}) =>
        <ResumeExperienceItem experience={experience}></ResumeExperienceItem>,
};

export const ResumeExperienceItemUndefinedDatesStory: Story = {
    args: {
        experience: {...ResumeExperienceItemData, dateStart: undefined, dateEnd: undefined},
    },
    parameters: {
        pageTheme: DigitalResumeThemeData
    },
    render: ({experience}) =>
        <ResumeExperienceItem experience={experience}></ResumeExperienceItem>,
};

export const ResumeExperienceItemPresentStory: Story = {
    args: {
        experience: {...ResumeExperienceItemData, isPresentPosition:true},
    },
    parameters: {
        pageTheme: DigitalResumeThemeData
    },
    render: ({experience}) =>
        <ResumeExperienceItem experience={experience}></ResumeExperienceItem>,
};

export const ResumeExperienceItemSingleYearAndMonthStory: Story = {
    args: {
        experience: {...ResumeExperienceItemData, dateStart: '2020-01-01', dateEnd: '2021-02-01'},
    },
    parameters: {
        pageTheme: DigitalResumeThemeData
    },
    render: ({experience}) =>
        <ResumeExperienceItem experience={experience}></ResumeExperienceItem>,
};