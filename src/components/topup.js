import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
  TextInput
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import {Input} from 'react-native-elements';
// import NumberFormat from 'react-number-format'

export default ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="tomato" />
      <View style={styles.topUpLayer1}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon
              name="md-arrow-round-back"
              size={20}
              color="white"
              // style={{paddingTop: 10}}
            />
          </TouchableOpacity>

          <Text style={styles.topUpTitle}>Top Up</Text>
        </View>
      </View>
      <View style={styles.topUpLayer2}>
        <Text style={{fontSize: 12, fontWeight: 'bold', color: 'grey'}}>
          ENTER AMOUNT
        </Text>
        <TextInput 
        style={{fontSize:40}}
        placeholder="Rp.0" 
        keyboardType='numeric' 
        />
      </View>
    </>
  );
};

// ======================= css =======================
const styles = StyleSheet.create({
  topUpLayer1: {
    height: '15%',
    backgroundColor: 'tomato',
    // flexDirection: 'row',
    padding: 20,
  },
  topUpTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
    marginLeft: 30,
  },
  topUpLayer2: {
    height: '85%',
    backgroundColor: 'white',
    padding: 18,
  }
});
