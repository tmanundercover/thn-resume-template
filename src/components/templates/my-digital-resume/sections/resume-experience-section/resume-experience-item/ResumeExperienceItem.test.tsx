import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {composeStories} from '@storybook/react';
import * as stories from "./ResumeExperienceItem.stories";

const {
    ResumeExperienceItemCompleteStory,
    ResumeExperienceItemSingleYearAndMonthStory,
    ResumeExperienceItemPresentStory,
    ResumeExperienceItemUndefinedDatesStory
} = composeStories(stories);

describe('ResumeExperienceItem', () => {
    it('renders the experience item with all fields', () => {
        render(<ResumeExperienceItemCompleteStory/>);

        expect(screen.getByText('Tech Company')).toBeInTheDocument();
        expect(screen.getByText('Subtitle')).toBeInTheDocument();
        expect(screen.getByText('Title')).toBeInTheDocument();

        expect(screen.queryByRole('date-block')).toBeInTheDocument();
        expect(screen.getByText('Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
            'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer ' +
            'took a galley of type and scrambled it to make a type specimen book. It has survived not only five ' +
            'centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'))
            .toBeInTheDocument();

        expect(screen.getByRole('checkbox')).toBeInTheDocument();

        expect(screen.queryByRole('skills-used-block')).toBeInTheDocument();
        expect(screen.getByText('Skill 1')).toBeInTheDocument();
        expect(screen.getByText('Skill 2')).toBeInTheDocument();
        expect(screen.getByText('Skill 3')).toBeInTheDocument();
        expect(screen.getByText('Skill 4')).toBeInTheDocument();
        expect(screen.getByText('Skill 5')).toBeInTheDocument();
        expect(screen.getByText('Skill 6')).toBeInTheDocument();

        expect(screen.getByText('Jan 2019—Apr 2021')).toBeInTheDocument();
        expect(screen.getByText('2 years 2 months')).toBeInTheDocument();
    });

    it('renders the experience item with bullets when the switch is clicked', async () => {
        render(<ResumeExperienceItemCompleteStory/>);

        expect(screen.getByRole('checkbox')).toBeInTheDocument();

        const checkbox = screen.getByRole('checkbox')
        fireEvent.click(checkbox)

        expect(screen.getByText('Tech Company')).toBeInTheDocument();
        expect(screen.getByText('Subtitle')).toBeInTheDocument();
        expect(screen.getByText('Title')).toBeInTheDocument();

        expect(screen.queryByRole('date-block')).toBeInTheDocument();
        expect(screen.queryByText('Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
            'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer ' +
            'took a galley of type and scrambled it to make a type specimen book. It has survived not only five ' +
            'centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'))
            .not.toBeInTheDocument();
        expect(screen.getByText('Bullet 1')).toBeInTheDocument();
        expect(screen.getByText('Bullet 2')).toBeInTheDocument();

        expect(screen.queryByRole('skills-used-block')).toBeInTheDocument();
        expect(screen.getByText('Skill 1')).toBeInTheDocument();
        expect(screen.getByText('Skill 2')).toBeInTheDocument();
        expect(screen.getByText('Skill 3')).toBeInTheDocument();
        expect(screen.getByText('Skill 4')).toBeInTheDocument();
        expect(screen.getByText('Skill 5')).toBeInTheDocument();
        expect(screen.getByText('Skill 6')).toBeInTheDocument();

        expect(screen.getByText('Jan 2019—Apr 2021')).toBeInTheDocument();
        expect(screen.getByText('2 years 2 months')).toBeInTheDocument();
    });

    it('renders the experience item with dates', () => {
        render(<ResumeExperienceItemCompleteStory/>);

        expect(screen.queryByRole('date-block')).toBeInTheDocument();
        expect(screen.getByText('Jan 2019—Apr 2021')).toBeInTheDocument();
        expect(screen.getByText('2 years 2 months')).toBeInTheDocument();
    });

    it('renders the experience item with single year and single month length of time', () => {
        render(<ResumeExperienceItemSingleYearAndMonthStory/>);

        expect(screen.queryByRole('date-block')).toBeInTheDocument();
        expect(screen.getByText('Jan 2020—Feb 2021')).toBeInTheDocument();
        expect(screen.getByText('1 year 1 month')).toBeInTheDocument();
    });

    it('renders the experience item with present experience', () => {
        render(<ResumeExperienceItemPresentStory/>);

        expect(screen.queryByRole('date-block')).toBeInTheDocument();
        expect(screen.getByText('Jan 2019—present')).toBeInTheDocument();
    });

    it('renders the experience item with undefined dates', () => {
        render(<ResumeExperienceItemUndefinedDatesStory/>);

        expect(screen.queryByRole('date-block')).not.toBeInTheDocument();
        expect(screen.queryByText('Jan 2019—Apr 2021')).not.toBeInTheDocument();
    });
});