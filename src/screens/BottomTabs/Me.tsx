import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function Me({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text>Me Screen</Text>
      <StatusBar style="auto" />
      <Button 
        onPress={() => navigation.navigate('Auth')} 
        title='Logout'
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