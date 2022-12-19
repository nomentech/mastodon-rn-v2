import { useMemo } from 'react'
import { Pressable, Text } from 'react-native'
import { useTheme } from '@react-navigation/native'
import Icon from './Icon'
import Loading from './Loading'

const Button = ({
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
        <Loading />
      ) : (
        <Text style={{ color: disabled ? colors.border : colors.primary }}>
          {name}
        </Text>
      )
    }

    if (type === 'icon') {
      return loading ? (
        <Loading />
      ) : (
        <Icon name={name} size={30} color={colors.primary} />
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

export default Button
