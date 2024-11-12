import {render, screen, waitFor} from '@testing-library/react';
import {composeStories} from '@storybook/react';
import * as stories from "./ResumeBio.stories";
import {describe, expect, test} from '@jest/globals'
import {pdfClient} from 'the-handsomestnerd-internal'

const {ResumeBioSectionComplete, ResumeBioSectionSearchResult} = composeStories(stories);

describe('Resume Bio Section', () => {
    describe('Checking for All parts of Bio', () => {
        test('Renders bio image', async () => {
            const mock = jest.spyOn(pdfClient, 'getPDFLink');  // spy on foo
            mock.mockImplementation(async () => "https://link.to.pdf");
            render(<ResumeBioSectionComplete/>)

            waitFor(() => {
                expect(screen.getByTestId('bio-image')).toBeInTheDocument()
            })
        });
        test('Renders all social media buttons', async () => {

            const mock = jest.spyOn(pdfClient, 'getPDFLink');  // spy on foo
            mock.mockImplementation(async () => "https://link.to.pdf");
            render(<ResumeBioSectionComplete/>)

            expect(screen.getByTestId('social-media-block')).toBeInTheDocument()
            expect(screen.getByTestId('FacebookIcon')).toBeInTheDocument()
            expect(screen.getByTestId('LinkedInIcon')).toBeInTheDocument()
            expect(screen.getByTestId('GitHubIcon')).toBeInTheDocument()
            expect(screen.getByTestId('TwitterIcon')).toBeInTheDocument()
            expect(screen.getByTestId('InstagramIcon')).toBeInTheDocument()
        });
        test('Renders contact me button', async () => {
            const mock = jest.spyOn(pdfClient, 'getPDFLink');  // spy on foo
            mock.mockImplementation(async () => "https://link.to.pdf");
            render(<ResumeBioSectionComplete/>)

            expect(await screen.findByText('Contact Me')).toBeInTheDocument()
        });
        test('Renders meet with me button', async () => {

            const mock = jest.spyOn(pdfClient, 'getPDFLink');  // spy on foo
            mock.mockImplementation(async () => "https://link.to.pdf");
            render(<ResumeBioSectionComplete/>)

            expect((await screen.findByText('Meet with Me'))).toBeInTheDocument()
        });

        test('Renders resume owner\'s name', async () => {
            const mock = jest.spyOn(pdfClient, 'getPDFLink');  // spy on foo
            mock.mockImplementation(async () => "https://link.to.pdf");

            render(<ResumeBioSectionComplete/>)
            expect(await screen.findByText('James Terrell Singleton')).toBeInTheDocument()
        });
        test('Renders resume owners\'s description', async () => {
            const mock = jest.spyOn(pdfClient, 'getPDFLink');  // spy on foo
            mock.mockImplementation(async () => "https://link.to.pdf");

            render(<ResumeBioSectionComplete/>)
            expect(await screen.findByText('I am a Web Developer located in the Maryand, District of Columbia, and Virginia Metropolitan area. I currently work as a remote fullstack software engineer for Assembled Financial, located in Los Angeles, CA. I am looking to take on more work, to increase my skills as a Web Developer, and to make things that are great. I am open to relocation.')).toBeInTheDocument()
        });
        test('Renders resume owner\s phone number', async () => {
            const mock = jest.spyOn(pdfClient, 'getPDFLink');  // spy on foo
            mock.mockImplementation(async () => "https://link.to.pdf");

            render(<ResumeBioSectionComplete/>)
            expect(await screen.findByText('443.992.2191')).toBeInTheDocument()
        });
        test('Renders resume owner\'s email address', async () => {
            const mock = jest.spyOn(pdfClient, 'getPDFLink');  // spy on foo
            mock.mockImplementation(async () => "https://link.to.pdf");

            render(<ResumeBioSectionComplete/>)
            expect(await screen.findByText('terrell.singleton@gmail.com')).toBeInTheDocument()
        });
        test('Renders download PDF button after link is enabled', async () => {
            const mock = jest.spyOn(pdfClient, 'getPDFLink');  // spy on foo
            mock.mockImplementation(async () => Promise.resolve("https://link.to.pdf"));

            render(<ResumeBioSectionComplete/>)
            const container = await screen.findAllByText('Download PDF')


            expect(container).toHaveLength(2)
        });
    })
})
