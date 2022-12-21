import { TextInput, StyleSheet } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getShowCW } from '../../../slices/composeSlice'
import { useEffect, useRef } from 'react'

const Header = () => {
  const { t } = useTranslation('common')
  const showCW = useSelector(getShowCW)

  const cwInputRef: any = useRef()
  const contentInputRef: any = useRef()

  useEffect(() => {
    if (showCW) cwInputRef.current.focus()
    else contentInputRef.current.focus()
  }, [showCW])

  return (
    <>
      {showCW && (
        <TextInput
          ref={cwInputRef}
          style={{
            marginTop: 8,
            paddingBottom: 16,
            marginLeft: 16,
            marginRight: 16,
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
          autoCorrect={false}
          enablesReturnKeyAutomatically
          multiline
          scrollEnabled={false}
          placeholder={t('cw_placeholder') || ''}
        />
      )}
      <TextInput
        ref={contentInputRef}
        style={{
          marginTop: 8,
          paddingBottom: 16,
          marginLeft: 16,
          marginRight: 16,
        }}
        // autoFocus
        enablesReturnKeyAutomatically
        multiline
        scrollEnabled={false}
        placeholder={t('content_placeholder') || ''}
      />
    </>
  )
}

export default Header
