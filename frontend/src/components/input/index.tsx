import { Input as CustomInput, Flex, IconButton, Text } from "@chakra-ui/react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";

export interface InputProps {
  id: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  errors?: FieldError;
  type: string;
}

export const Input: React.FC<InputProps> = ({
  id,
  placeholder,
  register,
  errors,
  type,
}) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  return (
    <Flex flexDir="column" pos="relative">
      {errors && (
        <Text color="red" pos="absolute" top="-30" fontWeight={600}>
          {errors.message}
        </Text>
      )}

      <CustomInput
        id={id}
        {...register}
        color="#fff"
        placeholder={placeholder}
        _placeholder={{ color: "#fff" }}
        type={isPasswordShown ? "text" : type}
        w="400px"
        bg="rgba(22, 22, 22, 0.7)"
        borderColor="rgba(128, 128, 128, 0.7)"
        p="1.5rem 1rem"
      />
      {type === "password" && (
        <IconButton
          aria-label="View Icon"
          onClick={() => setIsPasswordShown(!isPasswordShown)}
          icon={isPasswordShown ? <ViewIcon /> : <ViewOffIcon />}
          pos="absolute"
          right="2"
          top="1"
          bg="transparent"
          color="#fff"
          _hover={{ bg: "transparent" }}
        />
      )}
    </Flex>
  );
};
