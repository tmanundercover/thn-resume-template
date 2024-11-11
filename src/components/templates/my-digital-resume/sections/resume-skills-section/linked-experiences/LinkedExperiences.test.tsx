import React, {act} from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import LinkedExperiences from './LinkedExperiences'; // Update the import path as necessary
import {ResumeSkillType} from 'the-handsomestnerd-internal/dist/esm/src/components/BlockContentTypes';
import {SanityProvider} from "the-handsomestnerd-internal";
import {composeStories} from '@storybook/react';
import * as stories from "./LinkedExperiences.stories";
import ResumeSkillData from "../../../storybook-data/ResumeSkillData";
import ResumeExperiencesArrayData from "../../../storybook-data/ResumeExperiencesArrayData";

const {LinkedExperiencesLoadingStory, LinkedExperiencesErrorStory} = composeStories(stories);

describe('LinkedExperiences Component', () => {
    const mockResumeSkill: ResumeSkillType = ResumeSkillData; // Replace with a valid mock ResumeSkillType

    it('should render CircularProgress while loading', async () => {
        act(() => {
            render(
                <SanityProvider>
                    <LinkedExperiencesLoadingStory resumeSkill={mockResumeSkill}/>
                </SanityProvider>
            );
        })
        await waitFor(() => {

            expect(screen.getByRole('progressbar')).toBeInTheDocument();
        })
    });

    it('should render error message on fetch error', async () => {
        act(() => {
            render(
                <SanityProvider fetchSkillExperiences={() => Promise.reject(new Error('error in test'))}>
                    <LinkedExperiencesErrorStory resumeSkill={mockResumeSkill}/>
                </SanityProvider>
            );
        })
         await waitFor(() => {
            expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();

            expect(screen.getByText('Error: error in test')).toBeInTheDocument();
        })

        // expect(screen.getByRole('progressbar')).not.toBeInTheDocument();

    });

    it('should render the experiences after the function has finished loading', async () => {
        act(() => {

            render(
                <SanityProvider
                    fetchSkillExperiences={() => Promise.resolve(ResumeExperiencesArrayData)}>
                    <LinkedExperiences resumeSkill={mockResumeSkill}/>
                </SanityProvider>
            );
        })

        await waitFor(() => {
            expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();

            expect(screen.getByText('2021')).toBeInTheDocument();
            expect(screen.getAllByText('Fullstack Software Engineer')).toHaveLength(2);
            expect(screen.getAllByText('Frontend Software Engineer')).toHaveLength(2);
            expect(screen.getAllByText('Software Engineer')).toHaveLength(6);
        })
    });
});