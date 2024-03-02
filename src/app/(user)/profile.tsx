import { View, Text } from "react-native";
import React from "react";
import Button from "@/components/Button";
import { supabase } from "@/lib/supabase";

const ProfileScreen = () => {
  return (
    <View>
      <Text>Profile</Text>
      <Button
        text="Sign out"
        onPress={async () => await supabase.auth.signOut()}
      />
    </View>
  );
};

export default ProfileScreen;
