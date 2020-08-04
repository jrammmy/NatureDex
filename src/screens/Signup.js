import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

function Signup({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Sign up screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Signup;
