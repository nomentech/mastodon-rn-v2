import { Image } from 'react-native'

const Media = ({ attachments }: any) => {
  return attachments.map(
    (attachment: any) =>
      attachment && (
        <Image
          key={attachment.id}
          style={{ width: '100%', height: 180 }}
          source={{ uri: attachment.url }}
        />
      )
  )
}

export default Media
