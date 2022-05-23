import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Welcome from '../screens/Auth/Welcome'
import SignIn from '../screens/Auth/SignIn'
import SignUp from '../screens/Auth/SignUp'
import BackBtn from '../components/Auth/BackBtn'

const Auth = createStackNavigator()

export default () => (
  <Auth.Navigator
    screenOptions={{
      headerBackTitleVisible: false,
      headerTransparent: true,
      presentation: 'modal',
      headerBackImage: () => <BackBtn />,
    }}
  >
    <Auth.Screen
      name="Welcome"
      component={Welcome}
      options={{
        headerTitleStyle: {
          color: 'white',
        },
      }}
    />
    <Auth.Screen
      name="SignIn"
      component={SignIn}
      options={{ title: '로그인' }}
    />
    <Auth.Screen
      name="SignUp"
      component={SignUp}
      options={{ title: '계정 생성' }}
    />
  </Auth.Navigator>
)
