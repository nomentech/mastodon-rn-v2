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
import { MenuProvider } from 'react-native-popup-menu'

const NativeStack = createNativeStackNavigator()

const Root = () => {
  const instance = useSelector(getInstance)
  const account = useSelector(getAccount)

  return (
    <MenuProvider>
      <NavigationContainer theme={themes.default}>
        <NativeStack.Navigator>
          {/* persist object has a default property {"_persist": {"rehydrated": true, "version": -1}} 
          consider it as empty with only this one property
        */}
          {Object.keys(instance).length === 1 ? (
            <NativeStack.Screen
              name='Instance'
              component={Instance}
              options={{
                headerShown: false,
              }}
            />
          ) : Object.keys(account).length === 1 ? (
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
    </MenuProvider>
  )
}

export default Root
