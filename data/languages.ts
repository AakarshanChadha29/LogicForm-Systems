export type LanguageCapability = {
  id: string;
  language: string;
  proficiency: string;
};

export const languageCapabilities: LanguageCapability[] = [
  {
    id: "english",
    language: "English",
    proficiency: "Professional working proficiency",
  },
  {
    id: "german",
    language: "German",
    proficiency: "Working proficiency · study and professional environment",
  },
  {
    id: "hindi",
    language: "Hindi",
    proficiency: "Native / fluent",
  },
];
