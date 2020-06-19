import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, Button, TouchableOpacity} from 'react-native';
import {StatusBar} from 'react-native';
import {Text, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Fontisto';

export default WelcomePage = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1500);
  });

  if (loading) {
    return (
      <View style={styles.containerSplashStyle}>
        <View style={styles.logoLogin}>
          <Image
            source={{
              uri:
                'https://ecs7.tokopedia.net/img/cache/300/product-1/2016/10/6/72986700/72986700_6e8399ee-c9c5-498f-84b1-232384f79776.jpg',
            }}
            style={{height: 50, width: 150}}
          />
        </View>

        <View style={styles.loginImage}>
          <Image
            source={require('./../../assets/Take-Away-pana-1.png')}
            style={{width: 350, height: 350}}
          />
        </View>

        <View style={styles.containerLayer2}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Welcome to Okjek !
          </Text>
          <Text style={{fontSize: 12, marginTop: 6, color: 'grey'}}>
            Are you ready to enjoy a whole new life without limits? Lest's go!!
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('loginForm')}>
              <Text style={styles.buttonText}>LOG IN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('registerForm')}>
              <Text style={styles.buttonText}>REGISTER</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.viewFbBtn}>
            <TouchableOpacity style={styles.button2}>
              <Icon
                name="facebook-f"
                size={30}
                color="white"
                style={styles.IconFB}
              />
              <Text style={styles.buttonTextFB}>CONTINUE WITH FACEBOOK</Text>
            </TouchableOpacity>
          </View>
          <Text style={{fontSize: 10, marginTop: 25, color: 'black'}}>
            By logging in or registering, I agree to our{' '}
            <Text style={{color: 'green'}}>Terms of Service</Text> and{' '}
            <Text style={{color: 'green'}}>Privacy Policy.</Text>
          </Text>
        </View>
      </View>
    );
  } else {
    return (
      <>
        <StatusBar barStyle="dark-content" backgroundColor="#ee4d2d" />
        <View style={styles.beforeLogin}>
          {/* <Image
            source={require('./../../assets/okjekLogo.png')}
            style={{width: 300, height: 200}}
          /> */}
          <Icon2
            name="motorcycle"
            size={100}
            color="white"
            style={{marginHorizontal: 10}}
            // style={styles.IconFB}
          />
          <Text style={{fontSize: 50, fontWeight: 'bold'}}>OK JEK</Text>
        </View>
      </>
    );
  }
};

// =================================================== CSS ========

const styles = StyleSheet.create({
  containerSplashStyle: {
    flex: 1,
    backgroundColor: 'white',
  },
  logoLogin: {
    width: 200,
    marginTop: 20,
    // borderWidth:2,
    // borderColor:'black',
  },
  loginImage: {
    // flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    marginTop: 130,
  },
  containerLayer2: {
    marginLeft: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginRight: 30,
    marginTop: 20,
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#fd5f32',
    paddingTop: 14,
    paddingBottom: 14,
    paddingHorizontal: 55,
    borderRadius: 7,
    elevation: 2,
  },
  button2: {
    backgroundColor: '#4e6daf',
    borderRadius: 7,
    flexDirection: 'row',
  },
  viewFbBtn: {
    marginTop: 20,
    marginRight: 30,
  },
  IconFB: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingHorizontal: 15,
    backgroundColor: '#48649f',
  },
  buttonText: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
  },
  buttonTextFB: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
    paddingTop: 12,
    paddingLeft: 50,
  },
  inputContainerStyle: {
    marginTop: 50,
    marginBottom: 20,
    width: '85%',
  },
  beforeLogin: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ee4d2d',
  },
});
