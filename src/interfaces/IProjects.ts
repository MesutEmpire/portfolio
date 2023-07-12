export interface IProjects {
    name: string;
    description: string;
    technologies: string[];
    level: string;
    url: {
        img: string;
        live: string;
        github: string;
    };
}
export interface IContact {
    email: string;
    github: string;
    discord: string;
    figma: string;
    dev: string;
    linkedin: string;

}
export interface ISkills {
    languages: ISubSkills;
    database: ISubSkills;
    other: ISubSkills;
    frameworks: ISubSkills;
}
interface ISubSkills {
    category: string;
    technologies: string[];
}

