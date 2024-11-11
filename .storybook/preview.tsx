import type {Preview} from "@storybook/react";
import {BrowserRouter} from "react-router-dom";
import {CustomizedThemeProvider, PageProvider, SanityProvider} from "the-handsomestnerd-internal";
import { SanityTransformHwHomePage } from "the-handsomestnerd-internal/dist/esm/src/common/sanityIo/Types";
import HomePageData from "../src/components/templates/my-digital-resume/storybook-data/HomePageData";

const preview: Preview = {
    decorators: [
        (Story, {parameters}) => {
            const homepageData: SanityTransformHwHomePage = HomePageData.getHomePageResumeData(parameters.pageTheme)
            // <FirebaseProvider>

            return <SanityProvider
                fetchSkillExperiences={parameters.fetchSkillExperiences}
                fetchPortfolioItems={parameters.fetchPortfolioItems}>
                <BrowserRouter>
                    {/*<AppSettingsProvider>*/}
                    <PageProvider page={homepageData}>
                        <CustomizedThemeProvider>
                            {/*      <SnackbarProvider>*/}
                            {/*        <ModalProvider>*/}
                            {/*          <AmenityProvider>*/}
                            <Story/>
                            {/*</AmenityProvider>*/}
                            {/*</ModalProvider>*/}
                            {/*</SnackbarProvider>*/}
                        </CustomizedThemeProvider>
                    </PageProvider>
                    {/*</AppSettingsProvider>*/}
                </BrowserRouter>
            </SanityProvider>
            // </FirebaseProvider>
        }
    ],
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
