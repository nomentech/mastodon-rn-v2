import { Image } from 'react-native'

const Avatar = ({ uri }: any) => {
  return (
    <Image
      style={{ width: 40, height: 40, marginRight: 8 }}
      source={{ uri: uri }}
    />
  )
}

export default Avatar
