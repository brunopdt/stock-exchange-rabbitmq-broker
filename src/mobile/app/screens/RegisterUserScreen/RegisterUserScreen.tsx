import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RegisterBrokerRequest from '@/app/requests/RegisterBrokerRequest';
import BrokerService from '@/app/services/BrokerService';

const RegisterUserScreen: React.FC<RegisterBrokerRequest> = () => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigation = useNavigation<any>();

  const handleRegister = async () => {
    if (!email || !name || !password) {   
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
    }

    const registerRequest: RegisterBrokerRequest = {
      email,
      name,
      password
    }

    try {
        const response = await BrokerService.register(registerRequest);
        if (response.status === 201) {
            Alert.alert('Sucesso', 'Usuario cadastrado');
            navigation.navigate('LoginScreen');
        } else {
            Alert.alert('Erro', 'Erro ao cadastrar usuarioooo.');
        }
    } catch (error) {
        Alert.alert('Erro', 'Erro ao cadastrar usuario!.');
    }

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Realize seu cadastro!</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
        autoCapitalize="words"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.loginText}>
          Já possui conta?{' '}
          <Text style={styles.loginLink}>Login</Text>
        </Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#7C78B8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    height: 48,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    height: 48,
    backgroundColor: '#5C5696',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginText: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 16,
    color: '#333',
  },
  loginLink: {
    color: '#5C5696',
    fontWeight: 'bold',
  },
});

export default RegisterUserScreen;
