import {renderHook, waitFor,} from '@testing-library/react';
import useSkillExperiences from './useSkillExperiences'; // Update the import path as necessary
import {SanityContext, SanityContextType} from './linked-experiences-combined';
import {PropsWithChildren} from 'react';

describe('useSkillExperiences Hook', () => {
    const mockResumeSkill = {_id: 'skill1'} as any; // Replace with a valid mock ResumeSkillType

    it('should fetch experiences on mount', async () => {
        const mockExperiences = [{_id: 'exp1'}] as any; // Replace with valid mock experiences
        const {result} = renderHook(() => useSkillExperiences(mockResumeSkill), {
            wrapper: ({children}: PropsWithChildren<SanityContextType>) => <SanityContext.Provider
                value={{fetchSkillExperiences: () => Promise.resolve(mockExperiences)}}>{children}</SanityContext.Provider>,
        });

        expect(result.current.loading).toBe(true);
        waitFor(() => {
            expect(result.current.loading).toBe(false);
            expect(result.current.data).toEqual(mockExperiences);
            expect(result.current.error).toBeNull();

        })
    });

});