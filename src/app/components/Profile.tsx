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
} from '@chakra-ui/react';
import Link from 'next/link';
import { JSX } from 'react';

interface Skill {
    name: string;
    icon: JSX.Element;
}

interface Education {
    name: String;
    icon: JSX.Element;
}

interface ProfileData {
    profilePicture: string;
    name: string;
    description: string;
    email: string,
    cv: string
    skills: Skill[];
    education: Education[];
}

const Profile = (
    {
        profilePicture,
        name,
        description,
        email,
        cv,
        skills,
        education
    }: ProfileData
) => {
    return (
        <Center py={6}>
            <Box
                maxW={'lg'}
                w={'full'}
                bg={'gray.900'}
                boxShadow={'2xl'}
                rounded={'lg'}
                p={6}
                textAlign={'center'}
            >
                <AvatarRoot size={'2xl'} mb={4} pos={'relative'}>
                    <AvatarImage
                        src={profilePicture}
                    />
                </AvatarRoot>
                <Heading fontSize={'3xl'} fontFamily={'body'}>
                    {name}
                </Heading>

                <Box mt={6}>
                    <Heading size="md" mb={2}>
                        Sobre Mim
                    </Heading>
                    <Text color={'gray.400'} px={3}>
                        {description}
                    </Text>
                </Box>
                <Box mt={6}>
                    <Heading size="md" mb={2}>
                        Habilidades
                    </Heading>
                    <Stack direction={'row'} wrap={'wrap'} justify={'center'}>
                        {skills.map((skill, index) => (
                            <HStack key={index} align="center">
                                {skill.icon}
                                <Text color={'gray.400'}>{skill.name}</Text>
                            </HStack>
                        ))}
                    </Stack>
                </Box>
                <Box mt={6}>
                    <Heading size="md" mb={2}>
                        Formação
                    </Heading>
                    <Stack direction={'row'} wrap={'wrap'} justify={'center'}>
                        {education.map((education, index) => (
                            <HStack key={index} align="center">
                                {education.icon}
                                <Text color={'gray.400'}>{education.name}</Text>
                            </HStack>
                        ))}
                    </Stack>
                </Box>

                <Stack mt={8} direction={'row'}>
                    <Button
                        flex={1}
                        fontSize={'sm'}
                        rounded={'full'}
                        _focus={{
                            bg: 'gray.200',
                        }}
                        onClick={() => {
                            window.open(`mailto:${email}`, '_blank');
                          }}
                    >
                        Mandar email
                    </Button>
                    <Button
                        flex={1}
                        fontSize={'sm'}
                        rounded={'full'}
                        bg={'blue.400'}
                        color={'white'}
                        boxShadow={
                            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                        }
                        _hover={{
                            bg: 'blue.500',
                        }}
                        _focus={{
                            bg: 'blue.500',
                        }}
                        onClick={() => {
                            window.open(cv, '_blank');
                        }}
                    >
                        Currículo
                    </Button>
                </Stack>
            </Box>
        </Center>
    );
};

export default Profile;
