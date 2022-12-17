import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { getAccount } from '../../slices/accountSlice'
import MyLoading from '../../components/MyLoading'

const Me = () => {
  const account = useSelector(getAccount)

  return account ? (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text>{JSON.stringify(account)}</Text>
      <StatusBar style='auto' />
    </View>
  ) : (
    <MyLoading />
  )
}

export default Me
