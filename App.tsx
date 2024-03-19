import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, Button, StyleSheet } from 'react-native';
import getWalletBalance from './src/EthereumService';

const App = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [balance, setBalance] = useState('');

  const handleCheckBalance = async () => {
    try {
      const walletBalance = await getWalletBalance(walletAddress.trim());
      setBalance(walletBalance);
    } catch (error) {
      console.error(error);
      setBalance('Error fetching balance');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Wallet Address"
        value={walletAddress}
        onChangeText={setWalletAddress}
      />
      <Button title="Check Balance" onPress={handleCheckBalance} />
      <Text>Balance: {balance} ETH</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
});

export default App;