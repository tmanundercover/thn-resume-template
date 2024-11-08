import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import LinkedExperiences from './LinkedExperiences'; // Update the import path as necessary
import { SanityContext } from './linked-experiences-combined';
import ResumeExperiencesArrayData from "../../storybook-data/ResumeExperiencesArrayData";

describe('LinkedExperiences Component', () => {
    const mockResumeSkill = { _id: 'skill1' } as any; // Replace with a valid mock ResumeSkillType

    it('should render CircularProgress while loading', () => {
        render(
            <SanityContext.Provider value={{ fetchSkillExperiences: () => new Promise(() => {}) }}>
                <LinkedExperiences resumeSkill={mockResumeSkill} />
            </SanityContext.Provider>
        );
        expect(screen.getByRole('progressbar')).toBeInTheDocument();
    });

    it('should render error message on fetch error', () => {
        render(
            <SanityContext.Provider value={{ fetchSkillExperiences: () => Promise.reject(new Error('Fetch Error')) }}>
                <LinkedExperiences resumeSkill={mockResumeSkill} />
            </SanityContext.Provider>
        );
        waitFor(()=>{

        expect(screen.getByText('Error loading experiences.')).toBeInTheDocument();
        })

    });

    it('should render the experiences after the function has finished loading', () => {
        render(
            <SanityContext.Provider value={{ fetchSkillExperiences: () => new Promise(() => ResumeExperiencesArrayData) }}>
                <LinkedExperiences resumeSkill={mockResumeSkill} />
            </SanityContext.Provider>
        );
        expect(screen.getByRole('progressbar')).toBeInTheDocument();

        waitFor(()=>{
            expect(screen.getByRole('progressbar')).not.toBeInTheDocument();

            expect(screen.getByText('2021')).toBeInTheDocument();
            expect(screen.getAllByText('Fullstack Software Engineer')).toHaveLength(2);
            expect(screen.getAllByText('Frontend Software Engineer')).toHaveLength(2);
            expect(screen.getAllByText('Software Engineer')).toHaveLength(6);
            expect(screen.getByText('Software Engineer')).toBeInTheDocument();
        })
            // screen.debug(undefined,10000000)
    });

    // Add more tests for rendering experience data once available
});