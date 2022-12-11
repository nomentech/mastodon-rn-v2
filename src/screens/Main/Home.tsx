import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { useTranslation } from 'react-i18next'
import TopTabBar from '../../components/TopTapBar'
import Following from './Home/Following'
import Local from './Home/Local'

const TopTab = createMaterialTopTabNavigator()

const Home = () => {
  const { t } = useTranslation('common')

  return (
    <TopTab.Navigator tabBar={(props) => <TopTabBar {...props} />}>
      <TopTab.Screen
        name='Following'
        component={Following}
        options={{
          tabBarLabel: t('following') || '',
        }}
      />
      <TopTab.Screen
        name='Local'
        component={Local}
        options={{
          tabBarLabel: t('local') || '',
        }}
      />
    </TopTab.Navigator>
  )
}

export default Home
