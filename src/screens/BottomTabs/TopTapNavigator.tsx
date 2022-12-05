import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { useTranslation } from 'react-i18next'
import TopTabBar from '../../components/TopTapBar'
import Home from './TopTabs/Home'
import Local from './TopTabs/Local'

const TopTab = createMaterialTopTabNavigator()

export default function TopTabNavigator () {
  const { t } = useTranslation('common')

  return (
    <TopTab.Navigator tabBar={(props) => <TopTabBar {...props} />}>
      <TopTab.Screen 
        name='Home' 
        component={Home} 
        options={{
          tabBarLabel: t('home') as any
        }}/>
      <TopTab.Screen 
        name='Local' 
        component={Local} 
        options={{
          tabBarLabel: t('local') as any
        }} />
    </TopTab.Navigator>
  )
}
