import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import * as serviceWorker from './serviceWorker';
import 'react-dropdown/style.css';
import './style.css';
import "bootstrap/dist/css/bootstrap.css";
import '@fortawesome/fontawesome-free/css/all.css';
// import Countup from './components/Countup';


ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
// import * as React from 'react';
// import { Text, View } from 'react-native';
// import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// function FeedScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Feed!</Text>
//     </View>
//   );
// }

// function NotificationsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Notifications!</Text>
//     </View>
//   );
// }

// function ProfileScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Profile!</Text>
//     </View>
//   );
// }

// const Tab = createMaterialTopTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator
//       initialRouteName="Feed"
//       tabBarOptions={{
//         activeTintColor: '#e91e63',
//         labelStyle: { fontSize: 12 },
//         style: { backgroundColor: 'powderblue' },
//       }}
//     >
//       <Tab.Screen
//         name="Feed"
//         component={FeedScreen}
//         options={{ tabBarLabel: 'Home' }}
//       />
//       <Tab.Screen
//         name="Notifications"
//         component={NotificationsScreen}
//         options={{ tabBarLabel: 'Updates' }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{ tabBarLabel: 'Profile' }}
//       />
//     </Tab.Navigator>
//   );
// }
// export default function App() {
//   return (
//     <NavigationContainer>
//       <MyTabs />
//     </NavigationContainer>
//   );
// }
