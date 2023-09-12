import { Background, Form, Header } from "@/components";
import { ROUTES } from "@/constants";
import { firebaseAuth } from "@/utils/firebaseConfig";
import { Box, Flex, Text } from "@chakra-ui/react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const navigate = useNavigate();

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate(ROUTES.HOME_PAGE);
  });

  return (
    <Box textAlign="center">
      <Background />
      <Header />

      <Flex
        flexDir="column"
        m="auto"
        mt="10%"
        maxW={"calc(83.33333333333334% - 6rem)"}
      >
        <Flex mt="1.5rem" flexDirection="column" alignItems="center">
          <Box bg="rgba(0,0,0, 0.5)" p="100px 70px 150px ">
            <Text color="#fff" fontSize="4xl" fontWeight="bold">
              Login
            </Text>
            <Form isLogin />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
