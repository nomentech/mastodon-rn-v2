import { getLocales } from 'expo-localization'
import Root from './src/Root'
import i18n from './src/i18n/i18n'
import { Provider } from 'react-redux'
import { persistor, store } from './src/store'
import { PersistGate } from 'redux-persist/integration/react'
import Loading from './src/components/Loading'

i18n.changeLanguage(getLocales()[0].languageCode)

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <Root />
    </PersistGate>
  </Provider>
)
export default App
