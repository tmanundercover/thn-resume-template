import {useContext, useEffect, useState} from "react";
import {SanityContext} from "the-handsomestnerd-internal";
import {
    ResumePortfolioItemType,
    ResumeSkillType
} from "the-handsomestnerd-internal/dist/esm/src/components/BlockContentTypes";

const useSkillPortfolioItems = (skill: ResumeSkillType) => {
    const {fetchPortfolioItems} = useContext(SanityContext);
    const [data, setData] = useState<ResumePortfolioItemType[] | undefined>(undefined);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        if (!skill || !fetchPortfolioItems) return;

        setLoading(true);
        fetchPortfolioItems(skill)
            .then(setData)
            .catch(setError)
            .finally(() => setLoading(false));

    }, [skill, fetchPortfolioItems]);

    return {data, loading, error};
};

export default useSkillPortfolioItems;