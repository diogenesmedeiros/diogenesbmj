import { LoadingProps } from "@/app/types/LoadingProps";
import { Center, Spinner, Text, VStack } from "@chakra-ui/react";

export const Loading = ({ message = "Carregando..." }: LoadingProps) => {
  return (
    <Center minH="60vh">
      <VStack gap={4}>
        <Spinner size="xl" color="whiteAlpha.900" />
        <Text color="gray.300" fontSize="lg">
          {message}
        </Text>
      </VStack>
    </Center>
  );
};