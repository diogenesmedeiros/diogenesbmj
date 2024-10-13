import {
    Box,
    Heading,
    Container,
    Text,
    Stack
} from '@chakra-ui/react';

const Home = () => {
    return (
        <Box
            minHeight="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <Container maxW={'3xl'}>
                <Stack
                    as={Box}
                    textAlign={'center'}
                    spacing={{ base: 8, md: 14 }}
                    py={{ base: 20, md: 36 }}
                    padding="4"
                >
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                        lineHeight={'110%'}
                    >
                        Site em construção <br />
                    </Heading>
                    <Text fontSize={{ base: 'lg', md: 'xl' }} color={'gray.600'}>
                        Estou trabalhando duro para trazer algo incrível para você. Fique atento!
                    </Text>
                </Stack>
            </Container>
        </Box>
    );
}

export default Home;