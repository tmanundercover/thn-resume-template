import {lazy, Suspense} from "react";
import "./styles.css";
import ResumeBioSectionData from "./components/templates/my-digital-resume/storybook-data/ResumeBioSectionData";
import HomePageData from "./components/templates/my-digital-resume/storybook-data/HomePageData";
import ResumeSkillSectionData from "./components/templates/my-digital-resume/storybook-data/ResumeSkillSectionData";
import ResumeExperienceSection from "./components/templates/my-digital-resume/sections/resume-experience-section";
import ResumeExperienceSectionData
    from "./components/templates/my-digital-resume/storybook-data/ResumeExperienceSectionData";

const folderName = "templates"
const templateSectionsFolderName = "sections"

const PageData = {
    templateFolderName: "my-digital-resume",
    pageContent: [
        {
            sectionComponentName: "Tab1Section",
            componentProps: {
                tab1DataMember: "tab1DataMember",
            }
        },
        {
            sectionComponentName: "Tab2Section",
            componentProps: {
                tab2DataMember: "tab2DataMember",
            }
        },
        {
            sectionComponentName: "Tab3Section",
            componentProps: {
                tab3DataMember: "tab3DataMember",
            }
        },
        {
            sectionComponentName: "Tab4Section",
            componentProps: {
                tab4DataMember: "tab4DataMember",
            }
        },
        {
            sectionComponentName: "Tab5Section",
            componentProps: {
                tab5DataMember: "tab5DataMember",
            }
        },
        {
            sectionComponentName: "resume-bio-section",
            componentProps: {
                sectionData: ResumeBioSectionData,
                homePage: HomePageData
            }
        },
        {
            sectionComponentName: "resume-skills-section",
            componentProps: {
                sectionData: ResumeSkillSectionData
            }
        },
        {
            sectionComponentName: "resume-skills-section",
            componentProps: {
                sectionData: ResumeSkillSectionData
            }
        },
        {
            sectionComponentName: "resume-experience-section",
            componentProps: {
                sectionData: ResumeExperienceSectionData
            }
        }
    ]
}

// const Tab1 = lazy(() => import(`./${folderName}/${templateFolderName}/${componentName}`));
// const Tab2 = lazy(() => import("./components/tabs/Tab2"));
// const Tab3 = lazy(() => import("./components/tabs/Tab3"));
// const Tab4 = lazy(() => import("./components/tabs/Tab4"));


const lazyLoadedSectionsFromPluginPackage: any[] = PageData.pageContent.map(
    (pageContentSection, index) => {
        return {
            componentProps: pageContentSection.componentProps,
            component: lazy(() => import(`./components/${folderName}/${PageData.templateFolderName}/${templateSectionsFolderName}/${pageContentSection.sectionComponentName}`).catch(e => {
                return import(`./components/${folderName}/${PageData.templateFolderName}/${templateSectionsFolderName}/NoSuchSection`)
            }))
        }
    })

const App = () => {
    const homePage: any = 0;

    const renderSection = (section: any, index: number) => {

        if (!section.component) {
            return <div>No such component</div>
        }
        const Component = section.component;
        return (
            <Suspense
                key={index}
                fallback={<div className="tab-panel-placeholder">Loading...</div>}
            >
                <Component {...section.componentProps}/>
            </Suspense>
        );
    };

    return (
        <div className="app">
            {/*<AppWrapper*/}
            {/*    react_app_api_url = ""*/}
            {/*    react_app_sanity_projectid = {process.env.REACT_APP_SANITY_PROJECTID??""}*/}
            {/*    react_app_sanity_db = {process.env.REACT_APP_SANITY_DB??""}*/}
            {/*    react_app_sanity_apiversion = {process.env.REACT_APP_SANITY_APIVERSION??""}*/}

            {/*    react_app_sanity_projectid_cocktails = {process.env.REACT_APP_SANITY_PROJECTID_COCKTAILS??""}*/}
            {/*    react_app_sanity_db_cocktails = {process.env.REACT_APP_SANITY_DB_COCKTAILS??""}*/}
            {/*    react_app_sanity_apiversion_cocktails = {process.env.REACT_APP_SANITY_APIVERSION_COCKTAILS??""}*/}

            {/*    react_app_api_key = {process.env.REACT_APP_API_KEY??""}*/}
            {/*    react_app_auth_domain = {process.env.REACT_APP_AUTH_DOMAIN??""}*/}
            {/*    react_app_database_url = {process.env.REACT_APP_DATABASE_URL??""}*/}
            {/*    react_app_project_id = {process.env.REACT_APP_PROJECT_ID??""}*/}
            {/*    react_app_storage_bucket = {process.env.REACT_APP_STORAGE_BUCKET??""}*/}
            {/*    react_app_messaging_sender_id = {process.env.REACT_APP_MESSAGING_SENDER_ID??""}*/}
            {/*    react_app_app_id = {process.env.REACT_APP_APP_ID??""}*/}
            {/*    react_app_firebase_analytics_tracking_id = {process.env.REACT_APP_FIREBASE_ANALYTICS_TRACKING_ID??""}*/}
            {/*    react_app_base_route = {process.env.REACT_APP_BASE_ROUTE??""}*/}
            {/*    react_app_googlemaps_embed_api_key  = {process.env.REACT_APP_GOOGLEMAPS_EMBED_API_KEY??""}*/}
            {/*    react_app_bar_inventory_slug = {process.env.REACT_APP_BAR_INVENTORY_SLUG??""}*/}
            {/*/>*/}
            {lazyLoadedSectionsFromPluginPackage.map((section, index) => {
                return (
                    renderSection(section, index)
                    // index
                );
            })}
        </div>
    );
};

export default App;