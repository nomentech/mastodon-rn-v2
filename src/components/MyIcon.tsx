import { Ionicons as Icon } from '@expo/vector-icons'

const MyIcon = ({ name, color, size = 20 }: any) => (
  <Icon name={name} color={color} size={size} />
)

export default MyIcon
