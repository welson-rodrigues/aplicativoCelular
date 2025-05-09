import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native";

export default function Index() {
  const [text, onChangeText] = useState("");
  const [number, onChangeNumber] = useState("");

  return (
    <View style={styles.container}>
      <Image
        style={styles.careca}
        source={require('../assets/images/pao_careca.jpg')}
      />
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
  container: {
    //flex: 1,
    //alignItems: 'center', 
    //justifyContent: 'center',
    padding: 16,
  },
  baseText: {
    fontFamily: 'Cochin',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  careca: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
  },
});