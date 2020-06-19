import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  TextInput,
  ScrollView,
} from 'react-native';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {onUserLogin} from './../redux/actions/authAction';
import {CommonActions} from '@react-navigation/native';

export default Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const loading = useSelector(({Auth}) => Auth.loading);
  const userRedux = useSelector(({Auth}) => Auth.username);

  useEffect(() => {
    if (userRedux !== '') {
      const resetAction = CommonActions.reset({
        index: 0,
        routes: [{name: 'TabNav'}],
      });
      navigation.dispatch(resetAction);
    }
  });

  const onLoginBtn = () => {
    dispatch(onUserLogin(username));
  };

  // console.log('loading', loading);
  // console.log('!username', username);
  console.log('userRedux', userRedux !== '');
  return (
    <View style={styles.containerSplashStyle}>
      <ScrollView style={styles.containerLayer1}>
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon
              name="md-arrow-round-back"
              size={20}
              color="black"
              style={{paddingTop: 10}}
            />
          </TouchableOpacity>
        </View>

        <View style={{marginTop: 20}}>
          <Image
            source={require('./../../assets/login-ok.png')}
            style={{height: 150, width: 150}}
          />
        </View>

        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 10}}>
            Enter your username and password to Log In
          </Text>
        </View>

        <View style={{marginTop: 30}}>
          <Text style={styles.textLogin}>Username</Text>
          <Input
            placeholder="e.g Name"
            onChangeText={(val) => setUsername(val)}
          />
          {/* <Text style={styles.textLogin}>Password</Text>
          <Input placeholder="e.g LoremIpsum123" secureTextEntry /> */}
        </View>
      </ScrollView>
      <View>
        {username ? (
          <TouchableOpacity onPress={onLoginBtn}>
            {loading ? (
              <ActivityIndicator
                size="small"
                color="black"
                style={{backgroundColor: '#ff7d01', paddingVertical: 13}}
              />
            ) : (
              <Text style={styles.buttonFinish}>CONTINUE</Text>
            )}
          </TouchableOpacity>
        ) : (
          <TouchableOpacity disabled={true}>
            <Text style={styles.buttonFinish2}>CONTINUE</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

// =============================== CSS ==============
const styles = StyleSheet.create({
  containerSplashStyle: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerLayer1: {
    paddingHorizontal: 20,
  },
  textLogin: {
    fontWeight: 'bold',
    fontSize: 12,
    paddingLeft: 13,
  },
  buttonFinish: {
    textAlign: 'center',
    fontSize: 13,
    fontWeight: 'bold',
    paddingVertical: 15,
    backgroundColor: '#ff7d01',
    color: 'white',
  },
  buttonFinish2: {
    textAlign: 'center',
    fontSize: 13,
    fontWeight: 'bold',
    paddingVertical: 15,
    backgroundColor: 'grey',
    color: 'white',
  },
});
