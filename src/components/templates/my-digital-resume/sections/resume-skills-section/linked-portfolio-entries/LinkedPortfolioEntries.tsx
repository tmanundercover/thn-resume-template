import {FunctionComponent} from 'react'
import {CircularProgress, Grid, Typography} from "@mui/material";
import {
    ResumeSkillType
} from 'the-handsomestnerd-internal/dist/esm/src/components/BlockContentTypes';
import useSkillPortfolioItems from './useSkillPortfolioItems';
import LinkedPortfolioEntry from "./LinkedPortfolioEntry";

interface LinkedPortfolioEntriesProps {
    resumeSkill: ResumeSkillType
}

const LinkedPortfolioEntries: FunctionComponent<LinkedPortfolioEntriesProps> = ({ resumeSkill }) => {
    const { data: portfolioItems, loading, error } = useSkillPortfolioItems(resumeSkill);

    if (error) return <Typography color="error">Error loading experiences.</Typography>;
    if (!portfolioItems || loading) return <CircularProgress />;

    return (
        <Grid container item paddingBottom={1}>
            <Grid container item><Typography color='whitesmoke' variant='caption'>Portfolio</Typography></Grid>
            {portfolioItems?.map((portfolioEntry) => (
                <Grid container item key={portfolioEntry._id}><LinkedPortfolioEntry portfolioEntry={portfolioEntry} /></Grid>
            ))}
        </Grid>
    );
};

export default LinkedPortfolioEntries