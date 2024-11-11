import React, {act} from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import {ResumePortfolioItemType} from 'the-handsomestnerd-internal/dist/esm/src/components/BlockContentTypes';
import {composeStories} from '@storybook/react';
import * as stories from "./LinkedPortfolioEntries.stories";
import ResumePortfolioItemsArrayData from "../../../storybook-data/ResumePortfolioItemsArrayData";

const {LinkedPortfolioEntriesCompleteStory} = composeStories(stories);


describe('LinkedPortfolioEntries', () => {
    const renderComponent = (loading = false, error: Error | null = null, data: ResumePortfolioItemType[] = []) => {
        render(
            <LinkedPortfolioEntriesCompleteStory/>
        );

        jest.spyOn(require('./useSkillPortfolioItems'), 'default').mockReturnValue({
            data,
            loading,
            error,
        });
    };

    it('renders loading state', () => {
        act(() => {
            renderComponent(true, null, []);
        })

        expect(screen.getByRole('progressbar')).toBeInTheDocument();
    });

    it('renders error state', async () => {
        act(() => {
            renderComponent(false, new Error('Test Error'));
        })

        await waitFor(() => {
            expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();

            expect(screen.getByText('Error loading experiences.')).toBeInTheDocument();
        })
    });

    it('renders portfolio items when data is available', async () => {
        act(() => {
            renderComponent(false, undefined, ResumePortfolioItemsArrayData);
        })

        await waitFor(() => {
            expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();

            expect(screen.getByText('2019')).toBeInTheDocument();
            expect(screen.getAllByText('2020')).toHaveLength(2);
            expect(screen.getAllByText('2022')).toHaveLength(4);
            expect(screen.getAllByText('2023')).toHaveLength(1);
            expect(screen.getByText('Fintech Company Website')).toBeInTheDocument();
            expect(screen.getByText('Fintech Blog')).toBeInTheDocument();
            expect(screen.getByText('Sanity Open Source CMS')).toBeInTheDocument();
            expect(screen.getByText('Black Themed Question Game')).toBeInTheDocument();
            expect(screen.getByText('JamWorks 24/7 Shopify Store')).toBeInTheDocument();
            expect(screen.getByText('Bartender Flash Cards')).toBeInTheDocument();
            expect(screen.getByText('Healing & Wellness Business Website')).toBeInTheDocument();
            expect(screen.getByText('Digital Resume')).toBeInTheDocument();
        })
    });

    it('renders link that goes to portfolio id', async () => {

        act(() => {
            renderComponent(false, undefined, ResumePortfolioItemsArrayData);
        })

        await waitFor(() => {
            expect(screen.getByRole('link', {name: '2019'})).toHaveAttribute('href', '#aba4e7c5-6109-4538-9851-cca583af9e9f')
            expect(screen.getByRole('link', {name: 'Fintech Company Website'})).toHaveAttribute('href', '#aba4e7c5-6109-4538-9851-cca583af9e9f')
            expect(screen.getByRole('link', {name: `Link to Fintech Company Website`})).toHaveAttribute('href', 'https://assembledbrands.com')
            expect(screen.getByRole('link', {name: '2023'})).toHaveAttribute('href', '#0847255b-3899-4ec2-bebb-c1df0ecf6f04')
            expect(screen.getByRole('link', {name: 'Digital Resume'})).toHaveAttribute('href', '#0847255b-3899-4ec2-bebb-c1df0ecf6f04')
            expect(screen.getByRole('link', {name: `Link to Digital Resume`})).toHaveAttribute('href', 'http://terrellSingleton.com')
        })
    });


});