import WebView from 'react-native-webview'

export default () => (
  <WebView
    style={{ width: '100%', height: '100%' }}
    mixedContentMode="always"
    source={{
      uri: `https://www.youtube.com/watch?v=rD_RbyHRTAs`,
    }}
    useWebKit={true} // ios 필수
    scrollEnabled={false}
    domStorageEnabled={true}
    javaScriptEnabled={true}
  />
)
