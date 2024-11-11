import {
    ResumeExperienceType
} from 'the-handsomestnerd-internal/dist/esm/src/components/BlockContentTypes';

const ResumeExperienceItemData:ResumeExperienceType = {
    _id: "experience-id1",
    _type: "ResumeExperience",
    companyName: 'Tech Company',
    companySubtitle: 'Subtitle',
    title: 'Title',
    dateStart: '2019-01-01',
    dateEnd: '2021-04-01',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    bulletedDescription: ['Bullet 1', 'Bullet 2', 'Bullet 3', 'Bullet 4'],
    skillsUsed: [
        {
            _id: "skill-id1",
            _type: "ResumeSkill",
            title: 'Skill 1'
        },
        {
            _id: "skill-id2",
            _type: "ResumeSkill",
            title: 'Skill 2'
        },{
            _id: "skill-id3",
            _type: "ResumeSkill",
            title: 'Skill 3'
        },
        {
            _id: "skill-id4",
            _type: "ResumeSkill",
            title: 'Skill 4'
        },{
            _id: "skill-id5",
            _type: "ResumeSkill",
            title: 'Skill 5'
        },
        {
            _id: "skill-id6",
            _type: "ResumeSkill",
            title: 'Skill 6'
        },


    ],
}

export default ResumeExperienceItemData