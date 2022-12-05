import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

import TopTapNavigator from './BottomTabs/TopTapNavigator'
import Discover from './BottomTabs/Discover'
import Inbox from './BottomTabs/Inbox'
import Me from './BottomTabs/Me'

const BottomTab = createBottomTabNavigator()

export default function BottomTabNavigator() {
  const { colors } = useTheme()

  return (
    <BottomTab.Navigator initialRouteName='TopTapNavigator'>
      <BottomTab.Screen 
        name='TopTapNavigator' 
        component={TopTapNavigator}
        options={{
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
          tabBarLabel: () => null, // '首页',
          tabBarIcon: ({ color, size }) => 
            <Ionicons name='home-outline' color={color} size={size} />
        }}/>
      <BottomTab.Screen 
        name='Discover' 
        component={Discover} 
        options={{
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
          tabBarLabel: () => null, // '发现',
          tabBarIcon: ({ color, size }) => 
            <Ionicons name='search-outline' color={color} size={size} />
        }}/>
      <BottomTab.Screen 
        name='Inbox' 
        component={Inbox} 
        options={{
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
          tabBarLabel: () => null, // '消息',
          tabBarIcon: ({ color, size }) => 
            <Ionicons name='chatbox-outline' color={color} size={size} />
        }}/>
      <BottomTab.Screen 
        name='Me' 
        component={Me} 
        options={{
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
          tabBarLabel: () => null, // '我',
          tabBarIcon: ({ color, size }) => 
            <Ionicons name='person-outline' color={color} size={size} />
        }}/>
    </BottomTab.Navigator>
  )
}