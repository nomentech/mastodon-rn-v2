import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { getAccount } from '../../slices/accountSlice'
import Loading from '../../components/Loading'

const Me = () => {
  const account = useSelector(getAccount)

  return account ? (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text>{JSON.stringify(account)}</Text>
      <StatusBar style='auto' />
    </View>
  ) : (
    <Loading />
  )
}

export default Me
