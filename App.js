import React from 'react'
import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/Login'
import Sign_up from './screens/Sign_up'
import ResetPassword from './screens/ResetPassword';
import VerifyEmail from './screens/VerifyEmail'
import FillInformation from './screens/FillInformation';
import NewContent from './screens/NewContent';
import Profile from './screens/Profile';
import EditProfile from './screens/EditProfile';
import OutfitsRec from './screens/OutfitsRec';
import Questions from './screens/Questions';
import ProfilePremium from './screens/ProfilePremium';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name = "Login"
    //       component = {Login}
    //       options = {{headerShown: false}}
    //     />
    //     <Stack.Screen
    //       name="Sign_up"
    //       component={Sign_up}
    //       options={{headerShown: false}}
    //     />
    //     <Stack.Screen
    //       name="ResetPassword"
    //       component={ResetPassword}
    //       options={{headerShown: false}}
    //     />
    //     <Stack.Screen
    //       name="FillInformation"
    //       component={FillInformation}
    //       options={{headerShown: false}}
    //     />
    //     <Stack.Screen
    //       name="VerifyEmail"
    //       component={VerifyEmail}
    //       options={{headerShown: false}}
    //     />
    //     <Stack.Screen
    //       name="NewContent"
    //       component={NewContent}
    //       options={{headerShown: false}}
    //     />
    //     <Stack.Screen
    //       name="Profile"
    //       component={Profile}
    //       options={{headerShown: false}}
    //     />
    //     <Stack.Screen
    //       name="ProfilePremium"
    //       component={ProfilePremium}
    //       options={{headerShown: false}}
    //     />
    //     <Stack.Screen
    //       name="EditProfile"
    //       component={EditProfile}
    //       options={{headerShown: false}}
    //     />
    //     {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
    //   </Stack.Navigator>
    // </NavigationContainer>
    <View>
      <OutfitsRec/>
    </View>
  )
}




export default App

