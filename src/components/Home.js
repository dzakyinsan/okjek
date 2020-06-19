import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default ({navigation}) => {
  return (
    <View style={styles.containerStyle}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
