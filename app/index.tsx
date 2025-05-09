import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function Index() {
  const [text, onChangeText] = useState("");
  const [number, onChangeNumber] = useState("");

  return (
    <View>
      <Text style={styles.baseText}>Login</Text>

      <TextInput
          style={styles.input}
          placeholder= "Digite sua matrícula:"
          value={text}
          onChangeText={onChangeText}
        />

        <Text style={styles.baseText}>Senha</Text>

        <TextInput
          style={styles.input}
          placeholder= "Digite sua senha:"
          value={number}
          onChangeNumber={onChangeNumber}
        />
        <Button
          title="ENTRAR"
          //disabled
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