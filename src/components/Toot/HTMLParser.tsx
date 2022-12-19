import { useWindowDimensions } from 'react-native'
import RenderHTML from 'react-native-render-html'

const HTMLParser = ({ content }: any) => {
  const { width } = useWindowDimensions()

  return <RenderHTML source={{ html: content }} contentWidth={width} />
}

export default HTMLParser
