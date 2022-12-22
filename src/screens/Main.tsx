import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'

import Home from './Main/Home'
import Discover from './Main/Discover'
import Inbox from './Main/Inbox'
import Me from './Main/Me'
import Icon from '../components/Icon'
import Compose from './Compose'

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
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name='home-outline' color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name='Discover'
        component={Discover}
        options={{
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name='search-outline' color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name='Compose'
        component={Compose}
        options={{
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <Icon name='add-circle' color={colors.primary} size={50} />
          ),
        }}
      />
      <BottomTab.Screen
        name='Inbox'
        component={Inbox}
        options={{
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name='notifications-outline' color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name='Me'
        component={Me}
        options={{
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name='person-outline' color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  )
}

export default Main
