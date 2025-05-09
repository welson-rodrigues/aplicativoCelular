import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function Index() {
  const [text, onChangeText] = useState("Digite sua senha:");
  //const [number, onChangeNumber] = useState("");

  return (
    <View>
      <Text style={styles.baseText}>Login</Text>

      <TextInput
          style={styles.input}
          placeholder= "teste"
          value={text}
          onChangeText={onChangeText}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});