import BackgroundImage from "@/assets/BackgroundImage.jpeg";
import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";

export const Background = () => {
  return (
    <Box
      h="100%"
      w="100%"
      top={0}
      left={0}
      pos="absolute"
      minH="100vh"
      zIndex={-1}
    >
      <Box pos="relative" overflow="hidden" h="100%" w="100%">
        <Image src={BackgroundImage} h="100%" w="100%" objectFit="cover" />
        <Box
          top="0"
          left="0"
          right="0"
          bottom="0"
          position="absolute"
          background="rgb(0 0 0 / 40%)"
          backgroundImage="linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%)"
        />
      </Box>
    </Box>
  );
};
