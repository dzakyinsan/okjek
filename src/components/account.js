import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Account = ({navigation}) => {
  return (
    <View style={styles.containerStyle}>
      <Text>Logout</Text>
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
