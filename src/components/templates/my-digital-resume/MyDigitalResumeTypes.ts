import {FileAsset, ImageAsset, Slug} from "@sanity/types";

export type ResumeBioSectionType = {
    name?: string
    title?: string
    careerTitle?: string
    introduction?: string
    contactMeButtonTitle?: string
    resumeFileDownloadText?: string
    resumeFile?: FileAsset
    cvFileDownloadText?: string,
    cvFile?: FileAsset
    mainImage?: ImageAsset
}

export type ResumeSkillSectionType = {
    name?: string
    title?: string
    introduction?: string
    skillsets?: ResumeSkillSet[]
}

export type ResumeSkillSet = {
    _type?: "ResumeSkillset"
    name?: string
    title?: string
    skills?: ResumeSkillType[]
}

export type ResumeSkillType = {
    _id?: string
    _createdAt?: string
    _updatedAt?: string
    _rev?: string
    _type?: "ResumeSkill"
    name?: string
    title?: string

    description?:string
    versions?: string[]
    proficiency?: number
    iconPngSrc?: ImageAsset
}

export type ResumeExperienceType = {
    name?: string
    _id?: string
    _rev?: string
    "_type": "ResumeExperience"
    title?: string
    companySubtitle?: string
    companyName?: string
    locationCity?: string
    locationState?: string
    dateStart?: Date | string
    dateEnd?: Date | string
    description?: string
    bulletedDescription?:string[]
    _createdAt?: string
    _updatedAt?: string
    skillsUsed?: ResumeSkillType[]
    isPresentPosition?: boolean
}

export type ResumePortfolioItemType = {
    _type?: "ResumePortfolioItem"
    _id?: string
    name?: string
    title?: string
    coverImage?: ImageAsset
    inceptionDate?: Date | string
    slug?: Slug
    skillsHighlighted?: ResumeSkillType[]
    detailTitle?: string
    detailDescription?: string
    linkToProd?: string
    linkToDev?: string
    imageGallery?: ImageAsset[]
}

export type ResumePortfolioSectionType = {
    name?: string
    _type?: "ResumePortfolioSection"
    preTitle?: string
    title?: string
    introduction?: string
    portfolioEntries?: ResumePortfolioItemType[]
}