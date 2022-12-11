import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import Auth from './screens/Auth'
import Main from './screens/Main'
import Compose from './screens/Compose'
import themes from '../src/styles/themes'

const NativeStack = createNativeStackNavigator()

const Root = () => (
  <NavigationContainer theme={themes.default}>
    <NativeStack.Navigator initialRouteName='Auth'>
      <NativeStack.Screen
        name='Auth'
        component={Auth}
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
      <NativeStack.Screen
        name='Main'
        component={Main}
        options={{
          headerShown: false,
        }}
      />
    </NativeStack.Navigator>
  </NavigationContainer>
)

export default Root
