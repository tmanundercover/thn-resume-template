import { render, waitFor } from "@testing-library/react";
import { SanityContext, SanityProvider } from './index';
import LinkedExperiences from "../LinkedExperiences";

describe('SanityProvider fetchSkillExperiences', () => {
    const mockResumeSkill = { _id: 'skill1' } as any; // Replace with a valid mock ResumeSkillType
    const mockExperiences = [{ _id: 'exp1' }] as any; // Replace with valid mock experiences

    it('should fetch experiences using provided prop', async () => {
        const mockFetchFn = jest.fn().mockResolvedValue(mockExperiences);

        // Render SanityProvider with mocked fetch function
        render(
            <SanityContext.Provider value={{}}>
                <SanityProvider fetchSkillExperiences={mockFetchFn}>
                    <LinkedExperiences resumeSkill={mockResumeSkill} />
                </SanityProvider>
            </SanityContext.Provider>
        );

        // Assert that the mocked fetch function was called
        waitFor(()=>{

         expect(mockFetchFn).toHaveBeenCalledWith(mockResumeSkill);
        })
    });

    // Add more tests for Sanity Client interaction (if applicable)
});