const SCRIPT = '[Script]\n' +
  '# > Bilibili\n' +
  'http-response ^https?://app\\.bilibili\\.com/x/v\\d/splash/list script-path=https://cdn.jsdelivr.net/gh/srk24/profile@master/bilibili_splash.js\n' +
  '\n' +
  '# > TestFlight\n' +
  'http-request ^https?:\\/\\/testflight\\.apple\\.com\\/v\\d\\/accounts\\/.+?\\/install$ script-path=https://gist.githubusercontent.com/NobyDa/9be418b93afc5e9c8a8f4d28ae403cf2/raw/TF_Download.js'

export default SCRIPT
