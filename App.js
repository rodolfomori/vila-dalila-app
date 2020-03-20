import React from 'react'
import { WebView } from 'react-native-webview'
import { StatusBar } from 'react-native'

// import { KeyboardAvoidingView } from 'react-native'

const App = () => {
  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="#E0E0E0"/>
      <WebView
        source={{ uri: 'https://campanha.viladalila.site' }}
        style={{ marginTop: 45 }}
      />
    </>
  )
}

export default App