import { Box, Button, Heading, Stack, Text, Badge } from "@chakra-ui/react";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { LuExternalLink } from "react-icons/lu";
import { projects } from "./data/projects";

export const Projects = () => {
  return (
    <DialogRoot size="cover" placement="center" motionPreset="slide-in-bottom">
      <DialogTrigger asChild>
        <Button size="sm" borderRadius={"2xl"}>
          Ver todos os projetos
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Meus Projetos</DialogTitle>
          <DialogCloseTrigger />
        </DialogHeader>
        <DialogBody overflow="auto">
          <Text paddingBottom={6} fontSize="lg" color="gray.200">
            Abaixo estão todos os projetos que desenvolvi, aplicando meu
            conhecimento e habilidades adquiridas ao longo da minha jornada
            profissional. Clique em Ver Projeto para saber mais.
          </Text>
          <Stack direction={"row"} wrap={"wrap"}>
            {projects.map((project, index) => (
              <Box
                key={index}
                maxW={"sm"}
                borderWidth={1}
                borderRadius={"lg"}
                boxShadow="md"
                mb={6}
                p={4}
                transition="all 0.3s ease"
                _hover={{
                  boxShadow: "lg",
                  transform: "scale(1.05)",
                }}
              >
                <Heading size="md" mb={3} textAlign="center" color="teal.600">
                  {project.name}
                </Heading>
                <Text color={"gray.200"} textAlign="center" mb={3}>
                  {project.description}
                </Text>
                <Stack direction="row" wrap="wrap" justify="center" mb={4}>
                  {project.habilities.map((hability, index) => (
                    <Badge key={index} colorScheme="teal" fontSize="sm">
                      {hability}
                    </Badge>
                  ))}
                </Stack>
                <Button
                  size="sm"
                  colorScheme="teal"
                  variant="outline"
                  width="full"
                  onClick={() => window.open(project.link, "_blank")}
                >
                  <LuExternalLink /> Ver Projeto
                </Button>
              </Box>
            ))}
          </Stack>
        </DialogBody>
      </DialogContent>
    </DialogRoot>
  );
};
