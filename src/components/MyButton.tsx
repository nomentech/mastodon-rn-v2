import { useMemo } from 'react'
import { Pressable, Text } from 'react-native'
import { useTheme } from '@react-navigation/native'
import MyIcon from './MyIcon'
import MyLoading from './MyLoading'

const MyButton = ({
  name,
  type = 'text',
  loading = false,
  disabled = false,
  onPress = () => {},
  borderWidth = 1,
}: any) => {
  const { colors } = useTheme()
  const children = useMemo(() => {
    if (type === 'text') {
      return loading ? (
        <MyLoading />
      ) : (
        <Text style={{ color: disabled ? colors.border : colors.primary }}>
          {name}
        </Text>
      )
    }

    if (type === 'icon') {
      return loading ? (
        <MyLoading />
      ) : (
        <MyIcon name={name} size={30} color={colors.primary} />
      )
    }
  }, [loading, name, type])

  return (
    <Pressable
      style={{
        borderColor: colors.border,
        borderWidth: loading ? 0 : borderWidth,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 4,
        paddingHorizontal: 8,
      }}
      disabled={disabled}
      children={children}
      onPress={onPress}
    />
  )
}

export default MyButton
