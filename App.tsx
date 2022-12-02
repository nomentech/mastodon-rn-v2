import { NavigationContainer } from '@react-navigation/native'
import { NativeStackNavigator } from './src/NativeStackNavigator'

export default function App() {
  return (
    <NavigationContainer>
      <NativeStackNavigator />
    </NavigationContainer>
  )
}