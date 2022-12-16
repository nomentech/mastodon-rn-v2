import { useCallback, useEffect } from 'react'
import {
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  Image,
  View,
  TextInput,
  Text,
} from 'react-native'
import { useTheme } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { debounce } from 'lodash'
import { useAppsMutation, useLazyInstanceQuery } from '../slices/apiSlice'
import { updateInstance } from '../slices/instanceSlice'
import {
  getAppConfig,
  updateAppData,
  updateAppDomain,
} from '../slices/appSlice'
import MyButton from '../components/MyButton'

const Instance = () => {
  const { colors } = useTheme()
  const { t } = useTranslation('common')
  const dispatch = useDispatch()
  const [apps, { data: appData, isError, isLoading }] = useAppsMutation()
  const [trigger, result] = useLazyInstanceQuery()
  const appConfig = useSelector(getAppConfig)

  const onChangeText = useCallback(
    debounce(
      (text) => {
        const d = text.replace(/^http(s)?\:\/\//i, '')
        dispatch(updateAppDomain(d))
        apps({ ...appConfig, website: `https://${d}` })
      },
      1000,
      { trailing: true }
    ),
    []
  )

  useEffect(() => {
    trigger()
  }, [appData])

  const onSubmit = () => {
    if (appData && result.data) {
      dispatch(updateInstance(result.data))
      dispatch(updateAppData(appData))
    }
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={{
            uri:
              result.data?.thumbnail ||
              'https://wallpaperaccess.com/full/3214390.jpg',
          }}
          style={{ resizeMode: 'contain', flex: 1, aspectRatio: 16 / 9 }}
        />
      </View>
      <View
        style={{
          margin: 16,
          flexDirection: 'row',
        }}
      >
        <TextInput
          style={{
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomColor: isError ? colors.notification : colors.border,
          }}
          editable={false}
          defaultValue='https://'
        />
        <TextInput
          style={{
            flex: 1,
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomColor: isError ? colors.notification : colors.border,
          }}
          autoCapitalize='none'
          autoCorrect={false}
          spellCheck={false}
          clearButtonMode='never'
          keyboardType='url'
          textContentType='URL'
          placeholder={' ' + t('instance_domain')}
          onChangeText={onChangeText}
        />
        <MyButton
          name={t('login')}
          loading={isLoading}
          disabled={!appData}
          onPress={onSubmit}
        />
      </View>
      {result.data && (
        <View style={{ margin: 16 }}>
          <Info name={t('name')} content={result.data.title} />
          <Info name={t('users')} content={result.data.stats?.user_count} />
          <Info name={t('toots')} content={result.data.stats?.status_count} />
        </View>
      )}
    </KeyboardAvoidingView>
  )
}

const Info = ({ name, content }: any) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 4,
    }}
  >
    <Text style={{ fontWeight: 'bold' }}>{name}</Text>
    <Text>{content}</Text>
  </View>
)

export default Instance
