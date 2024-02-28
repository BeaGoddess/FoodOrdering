import { useAuth } from "@/provider/AuthProvider";
import { Redirect, Stack } from "expo-router";

export default function AuthScreen() {
  const { session } = useAuth();

  if (session) {
    return <Redirect href={"/"} />;
  }

  return <Stack />;
}
