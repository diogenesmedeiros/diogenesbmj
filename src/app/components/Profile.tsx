"use client";

import {
  Heading,
  Box,
  Center,
  Text,
  Stack,
  Button,
  AvatarImage,
  AvatarRoot,
  HStack,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaPaperclip } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Snowfall from "react-snowfall";
import { SnowfallPeriod } from "../utils/SnowfallPeriod";
import { ProfileData } from "../interfaces/ProfileData";

const Profile = ({
  profilePicture,
  name,
  description,
  email,
  cv,
  github,
  linkedin,
  skills,
  education,
}: ProfileData) => {
  return (
    <>
      {SnowfallPeriod() && <Snowfall />}
      <Center py={6}>
        <Box
          maxW={"lg"}
          w={"full"}
          bg={"rgba(255, 255, 255, 0.1)"}
          boxShadow={"2xl"}
          rounded={"lg"}
          p={6}
          textAlign={"center"}
          backdropFilter="blur(10px)"
        >
          <AvatarRoot size={"2xl"} mb={4} pos={"relative"}>
            <AvatarImage src={profilePicture} />
          </AvatarRoot>
          <Heading fontSize={"3xl"} fontFamily={"body"}>
            {name}
          </Heading>

          <Box mt={6}>
            <Heading size="md" mb={2}>
              Sobre Mim
            </Heading>
            <Text color={"gray.400"} px={3}>
              {description}
            </Text>
          </Box>
          <Box mt={6}>
            <Heading size="md" mb={2}>
              Habilidades
            </Heading>
            <Stack direction={"row"} wrap={"wrap"} justify={"center"}>
              {skills.map((skill, index) => (
                <HStack key={index} align="center">
                  {skill.icon}
                  <Text color={"gray.400"}>{skill.name}</Text>
                </HStack>
              ))}
            </Stack>
          </Box>
          <Box mt={6}>
            <Heading size="md" mb={2}>
              Formação
            </Heading>
            <Stack direction={"row"} wrap={"wrap"} justify={"center"}>
              {education.map((education, index) => (
                <HStack key={index} align="center">
                  {education.icon}
                  <Text color={"gray.400"}>{education.name}</Text>
                </HStack>
              ))}
            </Stack>
          </Box>

          <Stack mt={8} direction={"row"}>
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              _focus={{
                bg: "gray.200",
              }}
              onClick={() => {
                window.open(`mailto:${email}`, "_blank");
              }}
            >
              <MdEmail /> Email
            </Button>
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              _focus={{
                bg: "gray.200",
              }}
              onClick={() => {
                window.open(cv, "_blank");
              }}
            >
              <FaPaperclip /> Currículo
            </Button>
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              _focus={{
                bg: "gray.200",
              }}
              onClick={() => {
                window.open(github, "_blank");
              }}
            >
              <FaGithub /> Github
            </Button>
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              _focus={{
                bg: "gray.200",
              }}
              onClick={() => {
                window.open(linkedin, "_blank");
              }}
            >
              <FaLinkedin /> Linkedin
            </Button>
          </Stack>
        </Box>
      </Center>
    </>
  );
};

export default Profile;
