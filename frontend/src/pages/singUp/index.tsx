import { Background, Form, Header } from "@/components";
import { firebaseAuth } from "@/utils/firebaseConfig";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const navigate = useNavigate();

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <Box textAlign="center">
      <Background />
      <Header isLogin />

      <Flex
        flexDir="column"
        m="auto"
        mt="10%"
        maxW={"calc(83.33333333333334% - 6rem)"}
      >
        <Heading size="2xl" color="#fff" fontWeight={900}>
          Unlimited movies, TV shows, and more
        </Heading>
        <Heading size="lg" color="#fff" mt="1rem" fontSize="1.5rem">
          Watch anywhere. Cancel anytime.
        </Heading>

        <Flex mt="1.5rem" flexDirection="column" alignItems="center">
          <Text color="#fff" fontSize="1.25rem">
            Ready to watch? Enter your email to create or restart your
            membership.
          </Text>

          <Form />
        </Flex>
      </Flex>
    </Box>
  );
};
