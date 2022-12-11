import { TextInput, StyleSheet } from 'react-native'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <TextInput
        style={{
          marginTop: 8,
          paddingBottom: 16,
          marginLeft: 16,
          marginRight: 16,
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
        autoCorrect={false}
        autoFocus
        enablesReturnKeyAutomatically
        multiline
        scrollEnabled={false}
        placeholder={t('cw_placeholder') || ''}
      />
      <TextInput
        style={{
          marginTop: 8,
          paddingBottom: 16,
          marginLeft: 16,
          marginRight: 16,
        }}
        autoFocus
        enablesReturnKeyAutomatically
        multiline
        scrollEnabled={false}
        placeholder={t('content_placeholder') || ''}
      />
    </>
  )
}

export default Header
