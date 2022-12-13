import { useCallback } from 'react'
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
import { useAppsMutation } from '../../../slices/apiSlice'
import { getAppDomain, updateAppDomain } from '../../../slices/appSlice'
import { appConfig } from '../../../config'
import MyButton from '../../../components/MyButton'

const Instance = () => {
  const { colors } = useTheme()
  const { t } = useTranslation('common')
  const domain = useSelector(getAppDomain)
  const dispatch = useDispatch()
  const [apps, { data: appData, error, isError, isLoading }] = useAppsMutation()

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

  const processUpdate = () => {
    console.log(domain)
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={{
            uri: 'https://wallpaperaccess.com/full/3214390.jpg',
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
          onPress={processUpdate}
        />
      </View>
      <Text>{JSON.stringify(appData)}</Text>
      <Text>{JSON.stringify(error)}</Text>
    </KeyboardAvoidingView>
  )
}
export default Instance
