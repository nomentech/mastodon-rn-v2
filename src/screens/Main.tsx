import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'

import Home from './Main/Home'
import Discover from './Main/Discover'
import Inbox from './Main/Inbox'
import Me from './Main/Me'
import MyIcon from '../components/MyIcon'

const BottomTab = createBottomTabNavigator()

const Main = () => {
  const { colors } = useTheme()
  const { t } = useTranslation('common')

  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name='Home'
        component={Home}
        options={{
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
          tabBarLabel: t('home') || '',
          tabBarIcon: ({ color, size }) => (
            <MyIcon name='home-outline' color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name='Discover'
        component={Discover}
        options={{
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
          tabBarLabel: t('discover') || '',
          tabBarIcon: ({ color, size }) => (
            <MyIcon name='search-outline' color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name='Inbox'
        component={Inbox}
        options={{
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
          tabBarLabel: t('inbox') || '',
          tabBarIcon: ({ color, size }) => (
            <MyIcon name='chatbox-outline' color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name='Me'
        component={Me}
        options={{
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
          tabBarLabel: t('me') || '',
          tabBarIcon: ({ color, size }) => (
            <MyIcon name='person-outline' color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  )
}

export default Main
