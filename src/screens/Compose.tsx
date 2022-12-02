import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function Compose({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text>Compose Screen</Text>
      <StatusBar style="auto" />
      <Button 
        onPress={() => navigation.navigate('BottomTabNavigator')} 
        title='Done'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})