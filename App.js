import React from 'react'
import { WebView } from 'react-native-webview'
import { KeyboardAvoidingView } from 'react-native'

const App = () => {
  return (
    <KeyboardAvoidingView 
    behavior="padding" enabled>
      <WebView
        source={{ uri: 'https://viladalila.site' }}
        style={{ marginTop: 45 }}
      />
    </KeyboardAvoidingView>
  )
}

export default App
