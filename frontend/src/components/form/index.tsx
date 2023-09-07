import { Input } from "@/components";
import { firebaseAuth } from "@/utils/firebaseConfig";
import { Button, Flex } from "@chakra-ui/react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { SubmitHandler, useForm } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
};

interface FormProps {
  isLogin?: boolean;
}

export const Form: React.FC<FormProps> = ({ isLogin = false }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async ({ email, password }) => {
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(firebaseAuth, email, password);
        return;
      }

      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex
        gap="10px"
        flexDir={isLogin ? "column" : "row"}
        mt="2rem"
        alignItems="center"
        pos="relative"
      >
        <Input
          id="email"
          placeholder="Email"
          type="email"
          register={register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid Email",
            },
          })}
          errors={errors.email}
        />

        <Input
          id="password"
          placeholder="Password"
          type="password"
          register={register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password length must be of 8-15 characters",
            },
            maxLength: {
              value: 15,
              message: "Password length must be of 8-15 characters",
            },
          })}
          errors={errors.password}
        />
      </Flex>

      <Button
        mt="1rem"
        w="100%"
        type="submit"
        bg="#e50914"
        color="#fff"
        p="30px"
        fontSize="25px"
      >
        Get Started
      </Button>
    </form>
  );
};
