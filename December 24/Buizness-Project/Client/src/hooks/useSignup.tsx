import { useMutation } from "@tanstack/react-query";
import { signUp } from "../services/userSercive.tsx";
import { SignUpData } from "../types/userType.tsx";

export function useSignup() {
  return useMutation({
    mutationFn: (data: SignUpData) => signUp(data),
    onSuccess: (response) => {
      console.log("User signed up successfully:", response);
    },
    onError: (error) => {
      console.error("Error signing up user:", error);
    },
  });
}
