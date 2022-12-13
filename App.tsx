import { getLocales } from 'expo-localization'
import Root from './src/Root'
import i18n from './src/i18n/i18n'
import { Provider } from 'react-redux'
import { store } from './src/store'

i18n.changeLanguage(getLocales()[0].languageCode)

const App = () => (
  <Provider store={store}>
    <Root />
  </Provider>
)
export default App
