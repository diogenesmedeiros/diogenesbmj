import { Education } from "./Education";
import { Skill } from "./Skill";

export interface ProfileData {
  profilePicture: string;
  name: string;
  description: string;
  email: string;
  github: string;
  linkedin: string;
  cv: string;
  skills: Skill[];
  education: Education[];
}
