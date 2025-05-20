import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Pressable,
} from 'react-native';
import {TabBar, TabView} from 'react-native-tab-view';
import React from 'react';
import Input from '../components/Input';
import {initState, initAction, NavigationProp, Routes} from '../types/type';
import PrimaryButton from '../components/PrimaryButton';
import {useNavigation} from '@react-navigation/native';

const initialState: initState = {
  phoneNumber: '',
  countryCode: '+233',
  password: '',
  email: '',
  membershipId: '',
};

const reducer = (state: initState, action: initAction): initState => {
  switch (action.type) {
    case 'UPDATE_PHONE_NUMBER':
      return {...state, phoneNumber: action.payload};
    case 'UPDATE_COUNTRY_CODE':
      return {...state, countryCode: action.payload};
    case 'UPDATE_PASSWORD':
      return {...state, password: action.payload};
    case 'UPDATE_EMAIL':
      return {...state, email: action.payload};
    case 'UPDATE_MEMBERSHIPID':
      return {...state, membershipId: action.payload};
    default:
      return state;
  }
};

const Login = () => {
  const navigation = useNavigation<NavigationProp>();
  const [index, setIndex] = React.useState(0);
  const layout = useWindowDimensions();
  const [routes] = React.useState([
    {key: 'first', title: 'Phone'},
    {key: 'second', title: 'Email'},
    {key: 'third', title: 'Membership ID'},
  ]);
  const Email = () => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
      <View className="mt-10 ">
        <Text className="font-semibold mb-5">Email</Text>
        <Input
          isEmail
          hasIcon
          placeholder="Enter your Email"
          value={state.phoneNumber}
          onChangeText={text =>
            dispatch({type: 'UPDATE_PHONE_NUMBER', payload: text})
          }
          onCountryCodeChange={code =>
            dispatch({type: 'UPDATE_COUNTRY_CODE', payload: code})
          }
        />
        <Text className="font-semibold mt-5 mb-5">Password</Text>
        <Input
          hasIcon
          isPassword
          placeholder="Enter your password"
          value={state.password}
          onChangeText={text =>
            dispatch({type: 'UPDATE_PASSWORD', payload: text})
          }
        />
        <Pressable
          className="mt-5"
          //@ts-ignore
          onPress={() => navigation.navigate('forgot password')}>
          <Text className="text-primary">Forgot Password</Text>
        </Pressable>
        <View className="mt-14" />
        <PrimaryButton
          hasBg
          title={'Sign In'}
          disabled={
            !(
              (state.password?.length ?? 0) > 1 &&
              (state.phoneNumber?.length ?? 0) > 1
            )
          }
          onPress={() => {
            console.log('pressed'), navigation.navigate('password reset');
          }}
          isActive={
            (state.password?.length ?? 0) > 1 &&
            (state.phoneNumber?.length ?? 0) > 1
          }
        />
      </View>
    );
  };

  const Phone = () => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
      <View className="mt-10 ">
        <Text className="font-semibold mb-5">Phone Number</Text>
        <Input
          isPhone
          hasIcon
          placeholder="Enter phone number"
          value={state.phoneNumber}
          onChangeText={text =>
            dispatch({type: 'UPDATE_PHONE_NUMBER', payload: text})
          }
          onCountryCodeChange={code =>
            dispatch({type: 'UPDATE_COUNTRY_CODE', payload: code})
          }
        />
        <Text className="font-semibold mt-5 mb-5">Password</Text>
        <Input
          hasIcon
          isPassword
          placeholder="Enter your password"
          value={state.password}
          onChangeText={text =>
            dispatch({type: 'UPDATE_PASSWORD', payload: text})
          }
        />
        <Pressable
          className="mt-5"
          onPress={() => navigation.navigate('forgot password')}>
          <Text className="text-primary">Forgot Password</Text>
        </Pressable>
        <View className="mt-14" />
        <PrimaryButton
          hasBg
          disabled={
            !(
              (state.password?.length ?? 0) > 1 &&
              (state.phoneNumber?.length ?? 0) > 1
            )
          }
          title={'Sign In'}
          onPress={() => {
            console.log('pressed'), navigation.navigate('home run');
          }}
          isActive={
            (state.password?.length ?? 0) > 1 &&
            (state.phoneNumber?.length ?? 0) > 1
          }
        />
      </View>
    );
  };

  const MembershipID = () => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
      <View className="mt-10 ">
        <Text className="font-semibold mb-5">Membership Id</Text>
        <Input
          placeholder="Enter your Membership ID"
          value={state.phoneNumber}
          onChangeText={text =>
            dispatch({type: 'UPDATE_PHONE_NUMBER', payload: text})
          }
          onCountryCodeChange={code =>
            dispatch({type: 'UPDATE_COUNTRY_CODE', payload: code})
          }
        />
        <Text className="font-semibold mt-5 mb-5">Password</Text>
        <Input
          hasIcon
          isPassword
          placeholder="Enter your password"
          value={state.password}
          onChangeText={text =>
            dispatch({type: 'UPDATE_PASSWORD', payload: text})
          }
        />
        <Pressable
          className="mt-5"
          onPress={() => navigation.navigate('forgot password')}>
          <Text className="text-primary">Forgot Password</Text>
        </Pressable>
        <View className="mt-14" />
        <PrimaryButton
          hasBg
          disabled={
            !(
              (state.password?.length ?? 0) > 1 &&
              (state.phoneNumber?.length ?? 0) > 1
            )
          }
          title={'Sign In'}
          onPress={() => {
            console.log('pressed'), navigation.navigate('password reset');
          }}
          isActive={
            (state.password?.length ?? 0) > 1 &&
            (state.phoneNumber?.length ?? 0) > 1
          }
        />
      </View>
    );
  };

  const renderScene: React.FC<Routes> = ({route}) => {
    switch (route.key) {
      case 'first':
        return <Phone />;
      case 'second':
        return <Email />;
      case 'third':
        return <MembershipID />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        lazy
        renderTabBar={props => (
          <TabBar
            {...props}
            style={styles.tabBar}
            activeColor="#6200E0"
            inactiveColor="#000"
            indicatorStyle={styles.indicatorStyle}
          />
        )}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sceneContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  tabBar: {
    backgroundColor: '#fff',
    elevation: 1,
  },
  indicatorStyle: {
    backgroundColor: '#598DB2',
    borderRadius: 22,
    height: 1,
  },
});
