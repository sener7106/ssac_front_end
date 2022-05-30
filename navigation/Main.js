import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Profile from '../screens/Main/Profile/Profile'
import Saved from '../screens/Main/Saved/Saved'
import Chats from '../screens/Main/Chats'
import Graph from '../screens/Main/Graph/Graph'
import colors from '../colors'
import { Ionicons } from '@expo/vector-icons'
import Room from '../screens/Main/Room'
import StreamChatPresenter from '../screens/StreamChat/StreamChatPresenter'
import Explain from './Explain'
import { NavigationContainer } from '@react-navigation/native'
const TabsNavigator = createBottomTabNavigator()
const MainNavigator = createStackNavigator()

const Tabs = () => (
  <TabsNavigator.Navigator
    screenOptions={{
      tabBarStyle: {
        backgroundColor: 'white',
      },
      tabBarActiveTintColor: colors.green,
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTitleStyle: {
        color: 'black',
      },
      tabBarLabelStyle: {
        marginTop: -5,
        fontSize: 10,
        fontWeight: '600',
      },
    }}
  >
    <TabsNavigator.Screen
      name="대화하기"
      component={Chats}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons
            name={'chatbubble-ellipses-outline'}
            color={color}
            size={size}
          />
        ),
      }}
    ></TabsNavigator.Screen>
    <TabsNavigator.Screen
      name="유튜브"
      component={Saved}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name={'logo-youtube'} color={color} size={size} />
        ),
      }}
    ></TabsNavigator.Screen>
    <TabsNavigator.Screen
      name="학습 그래프"
      component={Graph}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name={'stats-chart'} color={color} size={size} />
        ),
      }}
    ></TabsNavigator.Screen>
    <TabsNavigator.Screen
      name="내 프로필"
      component={Profile}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name={'person-outline'} color={color} size={size} />
        ),
      }}
    ></TabsNavigator.Screen>
  </TabsNavigator.Navigator>
)

export default () => (
  <MainNavigator.Navigator>
    <MainNavigator.Screen
      name="Explain"
      component={Explain}
      options={{ headerShown: false }}
    ></MainNavigator.Screen>
    <MainNavigator.Screen
      name="tabs"
      component={Tabs}
      options={{ headerShown: false }}
    ></MainNavigator.Screen>
    <MainNavigator.Screen
      name="Room"
      component={Room}
      options={{
        headerTitle: '대화하기',
        headerBackTitle: '',
        headerShown: false,
      }}
    ></MainNavigator.Screen>
  </MainNavigator.Navigator>
)
