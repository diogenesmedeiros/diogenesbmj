"use client";

import Profile from "./components/Profile";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "@/lib/firebase";
import { iconMap } from "./utils/iconMap";
import { ProfileData } from "./types/ProfileData";
import { RawProfileData } from "./types/RawProfileData";
import { Loading } from "./components/Loading";


export default function Home() {
  const [data, setData] = useState<ProfileData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(firestore, "profile", "homeData");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const firestoreData = docSnap.data() as RawProfileData;

        const skills = firestoreData.skills.map((skill) => ({
          name: skill.name,
          icon: iconMap[skill.icon],
        }));

        const education = firestoreData.education.map((edu) => ({
          name: edu.name,
          icon: iconMap[edu.icon],
        }));

        setData({
          ...firestoreData,
          skills,
          education,
        });
      }
    };

    fetchData();
  }, []);

  if (!data) return <Loading />;

  return (
    <Profile
      profilePicture={data.profilePicture}
      name={data.name}
      description={data.description}
      skills={data.skills}
      education={data.education}
      cv={data.cv}
      email={data.email}
      github={data.github}
      linkedin={data.linkedin}
    />
  );
}