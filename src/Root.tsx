import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { useSelector } from 'react-redux'

import Auth from './screens/Auth'
import Compose from './screens/Compose'
import Instance from './screens/Instance'
import Main from './screens/Main'
import themes from '../src/styles/themes'
import { getInstance } from './slices/instanceSlice'
import { getAccount } from './slices/accountSlice'

const NativeStack = createNativeStackNavigator()

const Root = () => {
  const instance = useSelector(getInstance)
  const account = useSelector(getAccount)

  return (
    <NavigationContainer theme={themes.default}>
      <NativeStack.Navigator>
        {!instance ? (
          <NativeStack.Screen
            name='Instance'
            component={Instance}
            options={{
              headerShown: false,
            }}
          />
        ) : !account ? (
          <NativeStack.Screen
            name='Auth'
            component={Auth}
            options={{
              headerShown: false,
            }}
          />
        ) : (
          <>
            <NativeStack.Screen
              name='Main'
              component={Main}
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
          </>
        )}
      </NativeStack.Navigator>
    </NavigationContainer>
  )
}

export default Root
