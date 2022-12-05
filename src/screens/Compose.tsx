import { useMemo } from 'react'
import { KeyboardAvoidingView, Pressable, Text, Platform } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Editor from './Compose/Editor'
import EditAttachment from './Compose/EditAttachment'

const Stack = createNativeStackNavigator()

export default function Compose({ navigation }: any) {
  const totalTextCount = 0
  const maxTootChars = 500
  const headerContent = useMemo(() => {
    return `${totalTextCount} / ${maxTootChars}`
  }, [totalTextCount, maxTootChars])

  const headerLeft = () => (
    <Pressable onPress={() => navigation.goBack()}>
      <Text>Cancel</Text>
    </Pressable>
  )

  const headerRight = () => (
    <Pressable onPress={() => navigation.navigate('BottomTabNavigator')}>
      <Text style={{ fontWeight: '600' }}>Publish</Text>
    </Pressable>
  )

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Stack.Navigator initialRouteName='Editor'>
        <Stack.Screen
          name='Editor'
          component={Editor}
          options={{
            title: headerContent,
            headerTitleStyle: {
              fontWeight:
                totalTextCount > maxTootChars
                  ? 'bold'
                  : 'light',
              fontSize: 16
            } as any,
            headerTintColor: totalTextCount > maxTootChars ? 'red' : 'black',
            headerLeft,
            headerRight
          }}
        />
        <Stack.Screen
          name='EditAttachment'
          component={EditAttachment}
          options={{ headerShown: false, presentation: 'modal' }}
        />
      </Stack.Navigator>
    </KeyboardAvoidingView>
  )
}