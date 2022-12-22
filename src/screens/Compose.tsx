import { useMemo } from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useTranslation } from 'react-i18next'

import Editor from './Compose/Editor'
import EditAttachment from './Compose/EditAttachment'
import Button from '../components/Button'

const Stack = createNativeStackNavigator()

const Compose = ({ navigation }: any) => {
  const { t } = useTranslation('common')

  const headerLeft = () => (
    <Button
      name={t('cancel')}
      borderWidth={0}
      onPress={() => navigation.goBack()}
    />
  )

  const headerRight = () => (
    <Button name={t('publish')} onPress={() => navigation.navigate('Main')} />
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
            title: t('new_post') || '',
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
