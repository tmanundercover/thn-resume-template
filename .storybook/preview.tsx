import type {Preview} from "@storybook/react";
import {BrowserRouter} from "react-router-dom";
// @ts-ignore
import {SanityProvider} from "the-handsomestnerd-internal";

const preview: Preview = {
    decorators: [
        (Story) => (
            // <FirebaseProvider>
            <SanityProvider>
                <BrowserRouter>
                    {/*<AppSettingsProvider>*/}
                    {/*  <PageProvider page={HomePageResumeData}>*/}
                    {/*    <CustomizedThemeProvider pageTheme={DigitalResumeThemeData}>*/}
                    {/*      <SnackbarProvider>*/}
                    {/*        <ModalProvider>*/}
                    {/*          <AmenityProvider>*/}
                    <Story/>
                    {/*</AmenityProvider>*/}
                    {/*</ModalProvider>*/}
                    {/*</SnackbarProvider>*/}
                    {/*</CustomizedThemeProvider>*/}
                    {/*</PageProvider>*/}
                    {/*</AppSettingsProvider>*/}
                </BrowserRouter>
            </SanityProvider>
            // </FirebaseProvider>
        )
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
