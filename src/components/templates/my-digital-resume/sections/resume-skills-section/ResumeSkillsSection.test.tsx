import {render, screen, waitFor} from '@testing-library/react';
import {describe, expect, test} from '@jest/globals'
import {composeStories} from '@storybook/react';
import * as stories from "./ResumeSkillsSection.stories";

const {ResumeSkillsSectionCompleteStory} = composeStories(stories);

describe('Resume Skill Section', () => {
    test('renders all components of skills section', async () => {
        render(<ResumeSkillsSectionCompleteStory/>)

        expect((await screen.findByText('Skills'))).toBeInTheDocument()
        expect((await screen.findByText('I am inspired to create great work with people who are as passionate as I am about building something awesome.'))).toBeInTheDocument()
        expect(await screen.findAllByRole('skillheader')).toHaveLength(10)
        expect(await screen.findAllByRole('subskill')).toHaveLength(65)
        expect(await screen.findAllByRole('skillTooltip')).toHaveLength(65)
    });

    test('renders all skillset headers', async () => {
        render(<ResumeSkillsSectionCompleteStory/>)

        expect(await screen.findByText('Javascript')).toBeInTheDocument()
        expect(await screen.findByText('Programming Languages')).toBeInTheDocument()
        expect(await screen.findByText('Web Development')).toBeInTheDocument()
        expect(await screen.findByText('Databases')).toBeInTheDocument()
        expect(await screen.findByText('Cloud/Web Servers')).toBeInTheDocument()
        expect(await screen.findByText('IDE')).toBeInTheDocument()
        expect(await screen.findByText('Version Control')).toBeInTheDocument()
        expect(await screen.findByText('Operating Systems')).toBeInTheDocument()
        expect(await screen.findByText('Browsers')).toBeInTheDocument()
        expect(await screen.findByText('Utilities & Tools')).toBeInTheDocument()
    });

    test('renders all skillset skills first and last with appropriate separator if not last skill', async () => {
        render(<ResumeSkillsSectionCompleteStory/>)

        await waitFor(() => {
            expect(screen.getByText('React.js,')).toBeInTheDocument()
            expect(screen.getByText('Figma,')).toBeInTheDocument()
            expect(screen.getByText('Storybook Component Library')).toBeInTheDocument()
            expect(screen.getByText('Jest')).toBeInTheDocument()
        })
    })
})
