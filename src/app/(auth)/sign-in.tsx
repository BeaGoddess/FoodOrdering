import { View, StyleSheet, Text, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import { Link, Stack } from "expo-router";
import Colors from "@/constants/Colors";
import Button from "@/components/Button";
import { supabase } from "@/lib/supabase";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Sign in" }} />

      <Text style={styles.label}> Email </Text>
      <TextInput
        placeholder="jon@gmail.com"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}> Password </Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button
        onPress={signInWithEmail}
        disabled={loading}
        text={loading ? "Signing in..." : "Sign in"}
      />
      
      <Link href={"/sign-up"} style={styles.textButton}>
        Create an account
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  textButton: {
    alignSelf: "center",
    fontWeight: "bold",
    color: Colors.light.tint,
    marginVertical: 10,
  },
  input: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 20,
    borderColor: "gray",
    borderStyle: "solid",
    borderWidth: 1,
  },
  label: {
    color: "gray",
  },
});

export default SignInScreen;
