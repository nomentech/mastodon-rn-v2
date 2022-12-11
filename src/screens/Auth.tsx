import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, View } from 'react-native'

const Auth = ({ navigation }: any) => (
  <View style={styles.container}>
    <Text>Auth Screen</Text>
    <StatusBar style='auto' />
    <Button onPress={() => navigation.navigate('Main')} title='Login' />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Auth
