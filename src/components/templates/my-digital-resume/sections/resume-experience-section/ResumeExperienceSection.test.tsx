import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {ResumeExperienceType} from 'the-handsomestnerd-internal/dist/esm/src/components/BlockContentTypes';
import {composeStories} from '@storybook/react';
import * as stories from "./ResumeExperienceSection.stories";

const {ResumeExperienceSectionCompleteStory} = composeStories(stories);
const mockExperience: ResumeExperienceType = {
    _id: "experience-id1",
    _type: "ResumeExperience",
    companyName: 'Tech Company',
    companySubtitle: 'Subtitle',
    title: 'Title',
    dateStart: '2020-01-01',
    dateEnd: '2021-03-01',
    description: 'Description',
    bulletedDescription: ['Bullet 1', 'Bullet 2'],
    skillsUsed: [
        {
            _id: "skill-id1",
            _type: "ResumeSkill",
            title: 'Skill 1'
        },
        {
            _id: "skill-id1",
            _type: "ResumeSkill",
            title: 'Skill 2'
        }],
};

describe('ResumeExperienceItem', () => {
    it('renders the experience item with all fields', () => {
        render(<ResumeExperienceSectionCompleteStory sectionData={{experiences: [mockExperience]}}/>);

        expect(screen.getByText('Tech Company')).toBeInTheDocument();
        expect(screen.getByText('Subtitle')).toBeInTheDocument();
        expect(screen.getByText('Title')).toBeInTheDocument();

        expect(screen.queryByRole('date-block')).toBeInTheDocument();
        expect(screen.getByText('Jan 2020—Mar 2021')).toBeInTheDocument();
        expect(screen.getByText('Description')).toBeInTheDocument();

        expect(screen.queryByRole('skills-used-block')).toBeInTheDocument();
        expect(screen.getByText('Skill 1')).toBeInTheDocument();
        expect(screen.getByText('Skill 2')).toBeInTheDocument();
        expect(screen.getByText('1 year 1 month')).toBeInTheDocument();
    });

    it('renders the experience item without skills used', () => {
        render(<ResumeExperienceSectionCompleteStory sectionData={{experiences: [{...mockExperience, skillsUsed:undefined}]}}/>);
        expect(screen.queryByRole('skills-used-block')).not.toBeInTheDocument();

    });

    it('renders the experience item with zero length skills used', () => {
        render(<ResumeExperienceSectionCompleteStory sectionData={{experiences: [{...mockExperience, skillsUsed:[]}]}}/>);
        expect(screen.queryByRole('skills-used-block')).not.toBeInTheDocument();

    });

    it('renders the experience item with undefined dates', () => {
        render(<ResumeExperienceSectionCompleteStory sectionData={{experiences: [{...mockExperience, dateStart:undefined, dateEnd:undefined}]}}/>);
        expect(screen.queryByRole('date-block')).not.toBeInTheDocument();
    });
});