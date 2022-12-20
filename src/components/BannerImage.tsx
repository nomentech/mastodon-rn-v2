import { Image, View } from 'react-native'

const BannerImage = ({ uri }: any) => (
  <View style={{ flexDirection: 'row' }}>
    <Image
      source={{ uri: uri }}
      style={{ resizeMode: 'cover', flex: 1, aspectRatio: 16 / 9 }}
    />
  </View>
)

export default BannerImage
