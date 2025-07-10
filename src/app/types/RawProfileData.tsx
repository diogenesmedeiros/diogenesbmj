import { RawEducation } from "./RawEducation";
import { RawSkill } from "./RawSkill";

export interface RawProfileData {
  profilePicture: string;
  name: string;
  description: string;
  skills: RawSkill[];
  education: RawEducation[];
  cv: string;
  email: string;
  github: string;
  linkedin: string;
}