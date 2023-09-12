import { Flex, IconButton, Image, Link } from "@chakra-ui/react";
import HeaderLogo from "@/assets/HeaderLogo.png";
import { useNavigate } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { firebaseAuth } from "@/utils/firebaseConfig";
import { ROUTES } from "@/constants";

type Link = {
  name: string;
  link: string;
};

export const Navbar = () => {
  const navigate = useNavigate();

  const links: Link[] = [
    { name: "Home", link: ROUTES.HOME_PAGE },
    { name: "TV Shows", link: ROUTES.TV_SHOWS_PAGE },
    { name: "Movies", link: ROUTES.MOVIES_PAGE },
    { name: "My List", link: ROUTES.MY_LIST_PAGE },
  ];

  const handleLogOutButton = () => {
    signOut(firebaseAuth);
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate(ROUTES.LOGIN_PAGE);
  });

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      p="0 20px"
      bg="transparent"
    >
      <Flex alignItems="center">
        <Link href={ROUTES.HOME_PAGE}>
          <Image src={HeaderLogo} h="3.5rem" />
        </Link>

        <Flex gap="0 25px" ml="25px" fontWeight={500}>
          {links.map(({ name, link }) => (
            <Link
              key={name}
              href={link}
              fontSize="l"
              color="#fff"
              _hover={{ opacity: "70%" }}
            >
              {name}
            </Link>
          ))}
        </Flex>
      </Flex>

      <Flex>
        <IconButton
          aria-label="Log Out"
          as={FaPowerOff}
          onClick={handleLogOutButton}
          bg="transparent"
          color="#e50914"
          h="1.7rem"
          _hover={{ bg: "transparent", opacity: "70%", cursor: "pointer" }}
        />
      </Flex>
    </Flex>
  );
};
