import {View, Text, StyleSheet, useWindowDimensions} from 'react-native';
import React from 'react';
import {TabBar, TabView} from 'react-native-tab-view';
import ProfileSetting from './ProfileSetting';
import Settings from './Settings';
import DataSharing from './DataSharing';
import {Routes} from '../types/type';

const Profile = () => {
  const [index, setIndex] = React.useState(0);
  const layout = useWindowDimensions();
  const [routes] = React.useState([
    {key: 'first', title: 'Profile'},
    {key: 'second', title: 'Settings'},
    {key: 'third', title: 'Data Sharing'},
  ]);

  const renderScene: React.FC<Routes> = ({route}) => {
    switch (route.key) {
      case 'first':
        return <ProfileSetting />;
      case 'second':
        return <Settings />;
      case 'third':
        return <DataSharing />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Text className=" text-primary text-3xl font-semibold  p-10">
        Account
      </Text>
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

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 2,
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
