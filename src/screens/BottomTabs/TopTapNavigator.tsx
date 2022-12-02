import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import TopTabBar from '../../components/TopTapBar'
import Home from './TopTabs/Home'
import Local from './TopTabs/Local'

const TopTab = createMaterialTopTabNavigator()

export default function TopTabNavigator () {
  return (
    <TopTab.Navigator tabBar={(props) => <TopTabBar {...props} />}>
      <TopTab.Screen name='Home' component={Home} options={{tabBarLabel: 'Home',}}/>
      <TopTab.Screen name='Local' component={Local} options={{tabBarLabel: 'Local',}} />
    </TopTab.Navigator>
  )
}
