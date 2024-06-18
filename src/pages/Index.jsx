import { Container, Text, VStack, Heading, Button } from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Get Hot Leads from ChatGPT!</Heading>
        <Text fontSize="lg">Many SEOs still don't do this - take advantage by optimizing today. We'll show you the whole magic.</Text>
        <Button leftIcon={<FaEdit />} colorScheme="teal" size="lg">
          Get Started
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;