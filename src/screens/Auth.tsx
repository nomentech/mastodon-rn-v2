import { View } from 'react-native'
import { WebView } from 'react-native-webview'
import { useDispatch, useSelector } from 'react-redux'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { getAppConfig, getAppData, getAppDomain } from '../slices/appSlice'
import { useLazyAccountQuery, useTokenMutation } from '../slices/apiSlice'
import { updateAppToken } from '../slices/appSlice'
import { updateAccount } from '../slices/accountSlice'
import { updateInstance } from '../slices/instanceSlice'

const Auth = () => {
  const insets = useSafeAreaInsets()
  const dispatch = useDispatch()
  const domain = useSelector(getAppDomain)
  const appConfig = useSelector(getAppConfig)
  const appData = useSelector(getAppData)
  const [token] = useTokenMutation()
  const [trigger] = useLazyAccountQuery()

  const getToken = async (code: string) => {
    try {
      const { data }: any = await token({
        client_id: appData?.client_id,
        client_secret: appData?.client_secret,
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: appData?.redirect_uri,
      })
      dispatch(updateAppToken(data.access_token))

      const { data: account } = await trigger()
      dispatch(updateAccount(account))
    } catch (error) {
      console.log('Auth Screen', error)
    }
  }

  const navigationChangeHandler = ({ url, loading }: any) => {
    if (loading || !/native\?code/.test(url)) {
      return
    }
    const code = url.match(/\?code=(.*)/)[1]
    getToken(code)
  }

  const errorHandler = () => {
    // if denied by user, clear instance and start over
    dispatch(updateInstance(null))
  }

  return (
    <View style={{ flex: 1, paddingTop: insets.top }}>
      <WebView
        source={{
          uri: `https://${domain}/oauth/authorize?scope=${appConfig.scopes}&response_type=code&redirect_uri=${appData?.redirect_uri}&client_id=${appData?.client_id}`,
        }}
        onNavigationStateChange={navigationChangeHandler}
        onHttpError={errorHandler}
      />
    </View>
  )
}

export default Auth
