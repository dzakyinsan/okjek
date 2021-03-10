import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {onUserLogout} from './../redux/actions/authAction';
import {CommonActions} from '@react-navigation/native';

export const Account = ({navigation}) => {
  const dispatch = useDispatch();
  const userRedux = useSelector((state) => state.Auth.username);

  useEffect(() => {
    if (userRedux === '') {
      const resetAction = CommonActions.reset({
        index: 0,
        routes: [{name: 'welcomeForm'}],
      });
      navigation.dispatch(resetAction);
    }
  });

  const onBtnLogout = () => {
    Alert.alert(
      '',
      'Are you sure to logout?',
      [
        {text: 'cancel', onPress: () => console.log('cancel pressed')},
        {text: 'ok', onPress: () => dispatch(onUserLogout())},
      ],
      {cancelable: false},
    );
  };

  return (
    <View style={styles.containerStyle}>
      <TouchableOpacity style={styles.button} onPress={onBtnLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  button: {
    borderWidth: 1,
    borderColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 100,
  },
});
