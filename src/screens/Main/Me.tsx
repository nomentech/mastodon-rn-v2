import { Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { getAppData, getAppToken, updateAppToken } from '../../slices/appSlice'
import { getAccount, updateAccount } from '../../slices/accountSlice'
import { updateInstance } from '../../slices/instanceSlice'
import { useTokenMutation } from '../../slices/apiSlice'
import Loading from '../../components/Loading'
import BannerImage from '../../components/BannerImage'
import Avatar from '../../components/Avatar'
import Button from '../../components/Button'

const Me = () => {
  const { t } = useTranslation('common')
  const dispatch = useDispatch()
  const account = useSelector(getAccount)
  const appData = useSelector(getAppData)
  const appToken = useSelector(getAppToken)
  const [token] = useTokenMutation()

  const logout = async () => {
    try {
      await token({
        endpoint: 'revoke',
        data: {
          client_id: appData?.client_id,
          client_secret: appData?.client_secret,
          token: appToken,
        },
      })
      dispatch(updateAppToken(null))
      dispatch(updateAccount(null))
      dispatch(updateInstance(null))
    } catch (error) {
      console.log('Revoke token', error)
    }
  }

  return account ? (
    <View style={{ flex: 1 }}>
      <BannerImage uri={account.header} />
      <View style={{ marginHorizontal: 8, marginTop: -32 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'baseline',
          }}
        >
          <Avatar uri={account.avatar} size={80} />
          <Button name={t('edit_profile')} />
        </View>
        <Text>{account.display_name}</Text>
        <Text>@{account.username}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 8,
          }}
        >
          <Text>
            {account.followers_count} {t('followers_count')}
          </Text>
          <Text>
            {account.following_count} {t('following_count')}
          </Text>
          <Text>
            {account.statuses_count} {t('statuses_count')}
          </Text>
        </View>
        <View style={{ marginVertical: 8 }}>
          <Button name={t('logout')} onPress={logout} />
        </View>
      </View>
    </View>
  ) : (
    <Loading />
  )
}

export default Me
