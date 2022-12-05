import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import { useTranslation } from 'react-i18next'

import TopTapNavigator from './BottomTabs/TopTapNavigator'
import Discover from './BottomTabs/Discover'
import Inbox from './BottomTabs/Inbox'
import Me from './BottomTabs/Me'

const BottomTab = createBottomTabNavigator()

export default function BottomTabNavigator() {
  const { colors } = useTheme()
  const { t } = useTranslation('common')

  return (
    <BottomTab.Navigator initialRouteName='TopTapNavigator'>
      <BottomTab.Screen 
        name='TopTapNavigator' 
        component={TopTapNavigator}
        options={{
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
          tabBarLabel: t('home') as any,
          tabBarIcon: ({ color, size }) => 
            <Ionicons name='home-outline' color={color} size={size} />
        }}/>
      <BottomTab.Screen 
        name='Discover' 
        component={Discover} 
        options={{
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
          tabBarLabel: t('discover') as any,
          tabBarIcon: ({ color, size }) => 
            <Ionicons name='search-outline' color={color} size={size} />
        }}/>
      <BottomTab.Screen 
        name='Inbox' 
        component={Inbox} 
        options={{
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
          tabBarLabel: t('inbox') as any,
          tabBarIcon: ({ color, size }) => 
            <Ionicons name='chatbox-outline' color={color} size={size} />
        }}/>
      <BottomTab.Screen 
        name='Me' 
        component={Me} 
        options={{
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
          tabBarLabel: t('me') as any,
          tabBarIcon: ({ color, size }) => 
            <Ionicons name='person-outline' color={color} size={size} />
        }}/>
    </BottomTab.Navigator>
  )
}