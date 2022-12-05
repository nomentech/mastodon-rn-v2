import { TextInput, StyleSheet } from 'react-native'

export default function Header() {
  return (
    <>
      <TextInput 
        style={{
          marginTop: 8,
          paddingBottom: 16,
          marginLeft: 16,
          marginRight: 16,
          borderBottomWidth: StyleSheet.hairlineWidth
        }}
        autoCorrect={false}
        autoFocus
        enablesReturnKeyAutomatically
        multiline
        scrollEnabled={false}
        placeholder='Spoiler warning' 
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
        placeholder="What's on your mind" 
      />
    </>
  )
}