import { NavigationContainer } from '@react-navigation/native'
import { NativeStackNavigator } from './src/NativeStackNavigator'
import themes from './src/styles/themes'

export default function App() {
  return (
    <NavigationContainer theme={themes.default}>
      <NativeStackNavigator />
    </NavigationContainer>
  )
}