import HeaderLogo from "@/assets/HeaderLogo.png";
import { ROUTES } from "@/constants";
import { Box, Button, Flex, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export interface HeaderProps {
  isLogin?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isLogin }) => {
  const navigate = useNavigate();

  const handleAuthButton = () => {
    navigate(isLogin ? ROUTES.LOGIN_PAGE : ROUTES.REGISTER_PAGE);
  };

  return (
    <Flex p="0 8rem" alignItems="center" justifyContent="space-between">
      <Box>
        <Image src={HeaderLogo} h="5rem" />
      </Box>

      <Button
        onClick={handleAuthButton}
        p="0.5rem 1rem"
        bg="#e50914"
        color="#fff"
        border="none"
        borderRadius="0.2rem"
      >
        {isLogin ? "Log In" : "Sign In"}
      </Button>
    </Flex>
  );
};
