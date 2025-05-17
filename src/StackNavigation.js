import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  DrawerContentScrollView,
  DrawerItem,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import Screen4 from '../screens/Screen4';
import Screen5 from '../screens/Screen5';
import Screen6 from '../screens/Screen6';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// Theme colors
const COLORS = {
  primary: '#2196F3', // Material Blue
  secondary: '#757575', // Material Grey
  background: '#FFFFFF',
  text: '#212121',
  lightText: '#757575',
  border: '#E0E0E0',
  success: '#4CAF50',
  error: '#F44336',
};

const StackNavigation = () => {
  return (
    <Stack.Navigator 
      initialRouteName="Splash"
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.background,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Splash"
        options={{headerShown: false}}
        component={SplashScreen}
      />
      <Stack.Screen
        name="Login"
        options={{headerShown: false}}
        component={LoginScreen}
      />
      <Stack.Screen
        name="TabNavigator"
        options={{headerShown: false}}
        component={TabNavigator}
      />
    </Stack.Navigator>
  );
};

const ProfileScreenWithDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Screen4"
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.background,
        drawerStyle: {
          backgroundColor: COLORS.background,
        },
      }}
      drawerContent={props => {
        const {routeNames, index} = props.state;
        const focused = routeNames[index];

        return (
          <DrawerContentScrollView {...props}>
            <View style={{alignItems: 'center', marginVertical: 20}}>
              <Icon name="account-circle" size={80} color={COLORS.primary} />
              <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: COLORS.text, marginTop: 10}}>
                Code With Abdul
              </Text>
            </View>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home" color={color} size={size} />
              )}
              label={'Screen4'}
              onPress={() => {
                props.navigation.navigate('Screen4');
              }}
              focused={focused === 'Screen4'}
              activeBackgroundColor={COLORS.primary}
              inactiveBackgroundColor={COLORS.background}
              inactiveTintColor={COLORS.text}
              activeTintColor={COLORS.background}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="cog" color={color} size={size} />
              )}
              label={'Settings'}
              onPress={() => {
                props.navigation.navigate('Screen5');
              }}
              focused={focused === 'Screen5'}
              activeBackgroundColor={COLORS.primary}
              inactiveBackgroundColor={COLORS.background}
              inactiveTintColor={COLORS.text}
              activeTintColor={COLORS.background}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="information" color={color} size={size} />
              )}
              label={'Screen6'}
              onPress={() => {
                props.navigation.navigate('Screen6');
              }}
              focused={focused === 'Screen6'}
              activeBackgroundColor={COLORS.primary}
              inactiveBackgroundColor={COLORS.background}
              inactiveTintColor={COLORS.text}
              activeTintColor={COLORS.background}
            />
          </DrawerContentScrollView>
        );
      }}>
      <Drawer.Screen
        options={{
          headerShown: true,
          title: 'Screen4',
        }}
        name="Screen4"
        component={Screen4}
      />
      <Drawer.Screen
        options={{
          headerShown: true,
          title: 'Screen5',
        }}
        name="Screen5"
        component={Screen5}
      />
      <Drawer.Screen
        options={{
          headerShown: true,
          title: 'Screen6',
        }}
        name="Screen6"
        component={Screen6}
      />
    </Drawer.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Screen1"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: COLORS.background,
          borderTopColor: COLORS.border,
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.secondary,
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.background,
      }}>
      <Tab.Screen
        name="Screen1"
        component={Screen1}
        options={{
          title: 'Screen1',
          tabBarIcon: ({color, size}) => (
            <Icon name="view-dashboard" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Screen2"
        component={Screen2}
        options={{
          title: 'Screen2',
          tabBarIcon: ({color, size}) => (
            <Icon name="chart-bar" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Screen3"
        component={Screen3}
        options={{
          title: 'Screen3',
          tabBarIcon: ({color, size}) => (
            <Icon name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreenWithDrawer}
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default StackNavigation;
