import { Image } from 'react-native'

const Avatar = ({ uri, size }: any) => {
  return (
    <Image
      style={{ width: size, height: size, borderRadius: size / 10 }}
      source={{ uri: uri }}
    />
  )
}

export default Avatar
