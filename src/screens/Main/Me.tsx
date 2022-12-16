import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { getAccount } from '../../slices/accountSlice'

const Me = () => {
  const account = useSelector(getAccount)

  return account ? (
    <View style={styles.container}>
      <Text>{JSON.stringify(account)}</Text>
      <StatusBar style='auto' />
    </View>
  ) : (
    <></>
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

export default Me
