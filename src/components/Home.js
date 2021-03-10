import React, {useState} from 'react';
import {
  View,
  RefreshControl,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {SearchBar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/AntDesign';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon5 from 'react-native-vector-icons/FontAwesome5';

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

export default ({navigation}) => {
  const userRedux = useSelector(({Auth}) => Auth.username);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  };

  return (
    <View style={styles.containerStyle}>
      <SearchBar
        placeholder="Find Something?"
        platform="android"
      />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.container1}>
          <View style={styles.okpay1}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                // borderColor: 'black',
                // borderWidth: 1,
              }}>
              <Icon
                name="wallet"
                size={20}
                color="white"
                style={{paddingTop: 3}}
              />
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginLeft: 5,
                }}>
                okpay
              </Text>
            </View>

            <Text
              style={{
                color: 'white',
                fontSize: 14,
                fontWeight: 'bold',
                paddingTop: 5,
                // borderColor: 'black',
                // borderWidth: 1,
              }}>
              Rp 8.748.900
            </Text>
          </View>

          <View style={styles.okpay2}>
            <TouchableOpacity>
              <View style={styles.Okpay2Child}>
                <Icon2 name="ios-log-in" size={32} color="white" />
                <Text style={styles.okpay2Text}>Pay</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.Okpay2Child}>
                <Icon3 name="wallet" size={30} color="white" />
                <Text style={styles.okpay2Text}>PayLatter</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.Okpay2Child}>
                <Icon3
                  name="plussquareo"
                  size={32}
                  color="white"
                  onPress={() => navigation.navigate('Topup')}
                />
                <Text style={styles.okpay2Text}>Top Up</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.Okpay2Child}>
                <Icon2 name="md-menu" size={32} color="white" />
                <Text style={styles.okpay2Text}>Other</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.container2}>
          <View style={styles.menu1}>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity>
                <View style={styles.viewMenuIcon}>
                  <Icon5
                    name="motorcycle"
                    size={22}
                    color="white"
                    style={{paddingTop: 2}}
                  />
                </View>
              </TouchableOpacity>
              <Text style={styles.textMenu}>OkRide</Text>
            </View>

            <View style={{alignItems: 'center'}}>
              <TouchableOpacity>
                <View style={styles.viewMenuIcon}>
                  <Icon5
                    name="car-side"
                    size={22}
                    color="white"
                    style={{paddingTop: 2}}
                  />
                </View>
              </TouchableOpacity>
              <Text style={styles.textMenu}>OkCar</Text>
            </View>

            <View style={{alignItems: 'center'}}>
              <TouchableOpacity>
                <View style={styles.viewMenuIconRed}>
                  <Icon4 name="food-fork-drink" size={22} color="white" />
                </View>
              </TouchableOpacity>
              <Text style={styles.textMenu}>OkFood</Text>
            </View>

            <View style={{alignItems: 'center'}}>
              <TouchableOpacity>
                <View style={styles.viewMenuIcon}>
                  <Icon5
                    name="box-open"
                    size={22}
                    color="white"
                    style={{paddingTop: 3}}
                  />
                </View>
              </TouchableOpacity>
              <Text style={styles.textMenu}>OkSend</Text>
            </View>
          </View>

          <View style={styles.menu2}>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity>
                <View style={styles.viewMenuIconRed}>
                  <Icon5 name="shopping-bag" size={22} color="white" />
                </View>
              </TouchableOpacity>
              <Text style={styles.textMenu}>OkShop</Text>
            </View>

            <View style={{alignItems: 'center'}}>
              <TouchableOpacity>
                <View style={styles.viewMenuIconRed}>
                  <Icon name="shop" size={22} color="white" />
                </View>
              </TouchableOpacity>
              <Text style={styles.textMenu}>OkMart</Text>
            </View>

            <View style={{alignItems: 'center'}}>
              <TouchableOpacity>
                <View style={styles.viewMenuIconBlue}>
                  <Icon4 name="tablet-cellphone" size={22} color="white" />
                </View>
              </TouchableOpacity>
              <Text style={styles.textMenu}>OkPulsa</Text>
            </View>

            <View style={{alignItems: 'center'}}>
              <TouchableOpacity>
                <View style={styles.viewMenuIconMore}>
                  <Icon2 name="ios-more" size={25} color="grey" />
                </View>
              </TouchableOpacity>
              <Text style={styles.textMenu}>More</Text>
            </View>
          </View>
        </View>

        <View style={styles.container3}>
          <Text style={styles.topPicks}>
            Hai {userRedux}, Here are top picks for you
          </Text>
        </View>

        <TouchableOpacity>
          <View style={styles.container4}>
            <View>
              <Image
                source={require('./../../assets/voucher1.png')}
                style={{
                  width: 390,
                  height: 200,
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
              />
            </View>
            <View style={{padding: 15}}>
              <Text style={{fontWeight: 'bold'}}>
                OkFood vouchers only for you!
              </Text>
              <Text style={{fontSize: 12, marginTop: 5, color: '#606060'}}>
                stay safe, #stayathome with good food. Use these OkFood vouchers
                with Rp. 1.000.000.
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.container4}>
            <View>
              <Image
                source={require('./../../assets/voucher2.png')}
                style={{
                  width: 390,
                  height: 200,
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
              />
            </View>
            <View style={{padding: 15}}>
              <Text style={{fontWeight: 'bold'}}>
                OkRide cashback comeback!
              </Text>
              <Text style={{fontSize: 12, marginTop: 5, color: '#606060'}}>
                stay safe, #stayathome with good food. Use these OkFood vouchers
                with Rp. 1.000.000.
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: 'white',
  },
  container1: {
    // borderColor: 'black',
    // borderWidth: 2,
    // borderRadius: 10,
  },
  okpay1: {
    backgroundColor: '#2e61ba',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingHorizontal: 15,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  okpay2: {
    backgroundColor: '#2c5fb8',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingHorizontal: 30,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  Okpay2Child: {
    // borderWidth: 1,
    // borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  okpay2Text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
    marginTop: 8,
  },
  container2: {
    // borderColor: 'black',
    // borderWidth: 2,
    padding: 15,
  },
  menu1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  menu2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  viewMenuIcon: {
    backgroundColor: '#00aa13',
    borderRadius: 30,
    padding: 8,
    marginBottom: 8,
    width: 43,
    height: 43,
    alignItems: 'center',
  },
  viewMenuIconRed: {
    backgroundColor: 'red',
    borderRadius: 30,
    padding: 8,
    marginBottom: 8,
    width: 43,
    height: 43,
    alignItems: 'center',
  },
  viewMenuIconBlue: {
    backgroundColor: '#00aed6',
    borderRadius: 30,
    padding: 8,
    marginBottom: 8,
    width: 43,
    height: 43,
    alignItems: 'center',
  },
  viewMenuIconMore: {
    // backgroundColor: 'grey',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 30,
    padding: 8,
    marginBottom: 8,
    width: 43,
    height: 43,
    alignItems: 'center',
  },
  textMenu: {
    color: '#606060',
    fontWeight: 'bold',
    fontSize: 12,
  },
  topPicks: {
    marginTop: 20,
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  container3: {
    marginBottom: 20,
  },
  container4: {
    marginVertical: 10,
    borderRadius: 10,
    elevation: 3,
  },
});
