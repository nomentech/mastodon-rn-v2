import { NavigationContainer } from '@react-navigation/native'
import { NativeStackNavigator } from './src/NativeStackNavigator'
import themes from './src/styles/themes'
import i18n from './src/i18n/i18n'
import { getLocales } from 'expo-localization'

i18n.changeLanguage(getLocales()[0].languageCode)

export default function App() {
  return (
    <NavigationContainer theme={themes.default}>
      <NativeStackNavigator />
    </NavigationContainer>
  )
}