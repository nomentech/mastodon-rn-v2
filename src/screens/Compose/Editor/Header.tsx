import { useEffect, useRef, useState } from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import {
  getMaxLength,
  getShowCW,
  updateCharsLeft,
} from '../../../slices/composeSlice'

const Header = () => {
  const { t } = useTranslation('common')
  const dispatch = useDispatch()
  const showCW = useSelector(getShowCW)
  const maxLength = useSelector(getMaxLength)

  const cwInputRef: any = useRef()
  const contentInputRef: any = useRef()

  const [cwLength, setCWLength] = useState(0)
  const [contentLength, setContentLength] = useState(0)

  useEffect(() => {
    if (showCW) cwInputRef.current.focus()
    else contentInputRef.current.focus()
  }, [showCW])

  useEffect(() => {
    dispatch(updateCharsLeft(maxLength - cwLength - contentLength))
  }, [cwLength, contentLength])

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
          onChangeText={(text) => setCWLength(text.length)}
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
        enablesReturnKeyAutomatically
        multiline
        scrollEnabled={false}
        placeholder={t('content_placeholder') || ''}
        onChangeText={(text) => setContentLength(text.length)}
      />
    </>
  )
}

export default Header
