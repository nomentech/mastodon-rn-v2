import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Auth from './screens/Auth'
import BottomTabNavigator from './screens/BottomTabNavigator'
import Compose from './screens/Compose'

const NativeStack = createNativeStackNavigator()

export const NativeStackNavigator = () => {
	return (
		<NativeStack.Navigator initialRouteName='Auth'>
			<NativeStack.Screen
				name='Auth'
				component={Auth}
				options={{
					headerShown: false,
				}}
			/>
			<NativeStack.Screen
				name='BottomTabNavigator'
				component={BottomTabNavigator}
				options={{
					headerShown: false,
				}}
			/>
      <NativeStack.Screen
				name='Compose'
				component={Compose}
				options={{
					headerShown: false,
				}}
			/>
    </NativeStack.Navigator>
  )
}