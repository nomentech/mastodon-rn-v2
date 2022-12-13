import { useMemo } from 'react'
import { KeyboardAvoidingView, Pressable, Text, Platform } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useTranslation } from 'react-i18next'

import Editor from './Compose/Editor'
import EditAttachment from './Compose/EditAttachment'
import MyButton from '../components/MyButton'

const Stack = createNativeStackNavigator()

const Compose = ({ navigation }: any) => {
  const { t } = useTranslation('common')

  const totalTextCount = 0
  const maxTootChars = 500
  const headerContent = useMemo(() => {
    return `${totalTextCount} / ${maxTootChars}`
  }, [totalTextCount, maxTootChars])

  const headerLeft = () => (
    <MyButton
      name={t('cancel')}
      borderWidth={0}
      onPress={() => navigation.goBack()}
    />
  )

  const headerRight = () => (
    <MyButton name={t('publish')} onPress={() => navigation.navigate('Main')} />
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
              fontWeight: totalTextCount > maxTootChars ? 'bold' : 'light',
              fontSize: 16,
            } as any,
            headerTintColor: totalTextCount > maxTootChars ? 'red' : 'black',
            headerLeft,
            headerRight,
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

export default Compose
