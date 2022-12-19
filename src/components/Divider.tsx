import { useTheme } from '@react-navigation/native'
import { View } from 'react-native'

const Divider = () => {
  const { colors } = useTheme()

  return (
    <View
      style={{
        borderBottomColor: colors.border,
        borderBottomWidth: 1,
      }}
    />
  )
}

export default Divider
