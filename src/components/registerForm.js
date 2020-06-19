import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
} from 'react-native';
import {Input} from 'react-native-elements';

import Icon from 'react-native-vector-icons/Ionicons';

export default Register = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');

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

        <View style={{marginTop: 30}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Please fill in a few details below
          </Text>
        </View>

        <View style={{marginTop: 30}}>
          <Text style={styles.textLogin}>Username</Text>
          <Input
            placeholder="e.g Name"
            onChangeText={(val) => setUsername(val)}
          />
          {/* <Text style={styles.textLogin}>Password</Text>
          <Input placeholder="e.g LoremIpsum123" /> */}
          <Text style={styles.textLogin}>Phone Number</Text>
          <Input
            keyboardType="numeric"
            placeholder="e.g 0822123344"
            onChangeText={(val) => setPhone(val)}
          />
        </View>
      </ScrollView>
      <View>
        {username && phone ? (
          <TouchableOpacity>
            <Text style={styles.buttonFinish}>CONTINUE</Text>
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
