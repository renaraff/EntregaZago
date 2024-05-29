import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';


export default function Inserir() {
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  async function postUser() {
    fetch('http://10.139.75.47:5251/api/Users/CreateUser', {
      method: 'POST',
      body: JSON.stringify({
        userEmail: email,
        userPassword: senha,
        userName: nome,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  return (
    <View style={css.container}>
      <TextInput
        inputMode="text"
        placeholder="Nome Completo"
        style={css.input}
        value={nome}
        onChangeText={(digitado) => setNome(digitado)}

      />
      <TextInput
        inputMode="email"
        placeholder="Email"
        style={css.input}
        value={email}
        onChangeText={(digitado) => setEmail(digitado)}

      />
      <TextInput
        inputMode="text"
        placeholder="Senha"
        secureTextEntry={true}
        style={css.input}
        value={senha}
        onChangeText={(digitado) => setSenha(digitado)}

      />
      <TouchableOpacity style={css.btnCreate} onPress={postUser}>
        <Text style={css.btnLoginText}>CADASTRAR USUÁRIO</Text>
      </TouchableOpacity>
    </View>
  )
}
const css = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexGrow: 1,
    color: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "white"
  },
  btnCreate: {
    width: "90%",
    height: 50,
    borderRadius: 10,
    marginTop: 30,
    backgroundColor: "#A020F0"
  },
  btnLoginText: {
    color: "white",
    lineHeight: 45,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold"
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '80%',
    color: "black"
  },
  forgot: {
    width: "90%",
    marginTop: 10,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  }
})