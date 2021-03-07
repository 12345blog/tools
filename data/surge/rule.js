const RULE =
  '[Rule]' +
  '\n' +
  '# 默认直连\n' +
  'PROCESS-NAME,v2ray,Direct\n' +
  'PROCESS-NAME,clash,Direct\n' +
  'PROCESS-NAME,ss-local,Direct\n' +
  'PROCESS-NAME,privoxy,Direct\n' +
  'PROCESS-NAME,trojan,Direct\n' +
  'PROCESS-NAME,trojan-go,Direct\n' +
  'PROCESS-NAME,naive,Direct\n' +
  'PROCESS-NAME,Thunder,Direct\n' +
  'PROCESS-NAME,DownloadService,Direct\n' +
  'PROCESS-NAME,qBittorrent,Direct\n' +
  'PROCESS-NAME,Transmission,Direct\n' +
  'PROCESS-NAME,fdm,Direct\n' +
  'PROCESS-NAME,aria2c,Direct\n' +
  'PROCESS-NAME,Folx,Direct\n' +
  'PROCESS-NAME,NetTransport,Direct\n' +
  'PROCESS-NAME,uTorrent,Direct\n' +
  'PROCESS-NAME,WebTorrent,Direct\n' +
  'DOMAIN-SET,https://cdn.jsdelivr.net/gh/Loyalsoldier/surge-rules@release/private.txt,Direct\n' +

  '\n' +
  '# Ad Block\n' +
  'DOMAIN-SET,https://cdn.jsdelivr.net/gh/Loyalsoldier/surge-rules@release/reject.txt,AdBlock\n' +
  'RULE-SET,https://cdn.jsdelivr.net/gh/lhie1/Rules@master/Surge/Surge%203/Provider/Reject.list,AdBlock\n' +
  // '\n' +
  // '# Special\n' +
  // 'RULE-SET,https://cdn.jsdelivr.net/gh/lhie1/Rules@master/Surge/Surge%203/Provider/Special.list,Direct\n' +
  '\n' +
  '# Local\n' +
  'RULE-SET,LAN,Direct\n' +
  '\n' +
  '# Google\n' +
  'DOMAIN-SET,https://cdn.jsdelivr.net/gh/Loyalsoldier/surge-rules@release/google.txt,Google\n' +
  'DOMAIN-SUFFIX,gstatic.com,Google\n' +
  '\n' +
  '# Apple\n' +
  'DOMAIN-SET,https://cdn.jsdelivr.net/gh/Loyalsoldier/surge-rules@release/icloud.txt,Apple\n' +
  'DOMAIN-SET,https://cdn.jsdelivr.net/gh/Loyalsoldier/surge-rules@release/apple.txt,Apple\n' +
  'RULE-SET,https://cdn.jsdelivr.net/gh/lhie1/Rules@master/Surge/Surge%203/Provider/Apple.list,Apple\n' +
  '\n' +
  '# Telegram\n' +
  'RULE-SET,https://cdn.jsdelivr.net/gh/Loyalsoldier/surge-rules@release/telegramcidr.txt,Telegram\n' +
  'RULE-SET,https://cdn.jsdelivr.net/gh/lhie1/Rules@master/Surge/Surge%203/Provider/Telegram.list,Telegram\n' +
  '\n' +
  '# Microsoft\n' +
  'RULE-SET,https://cdn.jsdelivr.net/gh/lhie1/Rules@master/Surge/Surge%203/Provider/Microsoft.list,Microsoft\n' +
  '\n' +
  '# PayPal\n' +
  'RULE-SET,https://cdn.jsdelivr.net/gh/lhie1/Rules@master/Surge/Surge%203/Provider/PayPal.list,PayPal\n' +
  '\n' +
  '# Steam\n' +
  'RULE-SET,https://cdn.jsdelivr.net/gh/lhie1/Rules@master/Surge/Surge%203/Provider/Steam.list,Steam\n' +
  '\n' +
  '# Speedtest\n' +
  'RULE-SET,https://cdn.jsdelivr.net/gh/lhie1/Rules@master/Surge/Surge%203/Provider/Speedtest.list,SpeedTest\n' +
  '\n' +
  '# Youtube, Netflix, Spotify, Disney\n' +
  'RULE-SET,https://cdn.jsdelivr.net/gh/lhie1/Rules@master/Surge/Surge%203/Provider/Media/YouTube%20Music.list,YouTube\n' +
  'RULE-SET,https://cdn.jsdelivr.net/gh/lhie1/Rules@master/Surge/Surge%203/Provider/Media/YouTube.list,YouTube\n' +
  'RULE-SET,https://cdn.jsdelivr.net/gh/lhie1/Rules@master/Surge/Surge%203/Provider/Media/Netflix.list,Netflix\n' +
  'RULE-SET,https://cdn.jsdelivr.net/gh/lhie1/Rules@master/Surge/Surge%203/Provider/Media/Spotify.list,Spotify\n' +
  'RULE-SET,https://cdn.jsdelivr.net/gh/lhie1/Rules@master/Surge/Surge%203/Provider/Media/Disney%20Plus.list,Disney\n' +
  '\n' +
  '# AsianTV\n' +
  'RULE-SET,https://cdn.jsdelivr.net/gh/lhie1/Rules@master/Surge/Surge%203/Provider/Media/Bilibili.list,AsianTV\n' +
  'RULE-SET,https://cdn.jsdelivr.net/gh/lhie1/Rules@master/Surge/Surge%203/Provider/Media/iQiyi.list,AsianTV\n' +
  'RULE-SET,https://cdn.jsdelivr.net/gh/lhie1/Rules@master/Surge/Surge%203/Provider/Media/Letv.list,AsianTV\n' +
  'RULE-SET,https://cdn.jsdelivr.net/gh/lhie1/Rules@master/Surge/Surge%203/Provider/Media/MOO.list,AsianTV\n' +
  'RULE-SET,https://cdn.jsdelivr.net/gh/lhie1/Rules@master/Surge/Surge%203/Provider/Media/Netease%20Music.list,AsianTV\n' +
  'RULE-SET,https://cdn.jsdelivr.net/gh/lhie1/Rules@master/Surge/Surge%203/Provider/Media/Tencent%20Video.list,AsianTV\n' +
  'RULE-SET,https://cdn.jsdelivr.net/gh/lhie1/Rules@master/Surge/Surge%203/Provider/Media/Youku.list,AsianTV\n' +
  'RULE-SET,https://cdn.jsdelivr.net/gh/lhie1/Rules@master/Surge/Surge%203/Provider/Media/WeTV.list,AsianTV\n' +
  '\n' +
  '# GlobalTV\n' +
  'RULE-SET,https://cdn.jsdelivr.net/gh/lhie1/Rules@master/Surge/Surge%203/Provider/Media/ABC.list,GlobalTV\n' +
  'RULE-SET,https://cdn.jsdelivr.net/gh/lhie1/Rules@master/Surge/Surge%203/Provider/Media/Abema%20TV.list,GlobalTV\n' +
  'RULE-SET,https://cdn.jsdelivr.net/gh/lhie1/Rules@master/Surge/Surge%203/Provider/Media/Amazon.list,GlobalTV\n' +
  'RULE-SET,https://cdn.jsdelivr.net/gh/lhie1/Rules@master/Surge/Surge%203/Provider/Media/Apple%20News.list,GlobalTV\n' +
  'RULE-SET,https://cdn.jsdelivr.net/gh/lhie1/Rules@master/Surge/Surge%203/Provider/Media/Apple%20TV.list,GlobalTV\n' +
  'RULE-SET,https://cdn.jsdelivr.net/gh/lhie1/Rules@master/Surge/Surge%203/Provider/Media/Bahamut.list,GlobalTV\n' +
  'RULE-SET,https://cdn.jsdelivr.net/gh/lhie1/Rules@master/Surge/Surge%203/Provider/Media/BBC%20iPlayer.list,GlobalTV\n' +
  'RULE-SET,https://cdn.jsdelivr.net/gh/lhie1/Rules@master/Surge/Surge%203/Provider/Media/DAZN.list,GlobalTV\n' +
  'RULE-SET,https://cdn.jsdelivr.net/gh/lhie1/Rules@master/Surge/Surge%203/Provider/Media/Discovery%20Plus.list,GlobalTV\n' +
  'RULE-SET,https://cdn.jsdelivr.net/gh/lhie1/Rules@master/Surge/Surge%203/Provider/Media/encoreTVB.list,GlobalTV\n' +
  'RULE-SET,https://cdn.jsdelivr.net/gh/lhie1/Rules@master/Surge/Surge%203/Provider/Media/Fox%20Now.list,GlobalTV\n' +
  'RULE-SET,https://cdn.jsdelivr.net/gh/lhie1/Rules@master/Surge/Surge%203/Provider/Media/Fox%2B.list,GlobalTV\n' +
  'RULE-SET,https://cdn.jsdelivr.net/gh/lhie1/Rules@master/Surge/Surge%203/Provider/Media/HBO.list,GlobalTV\n' +
  'RULE-SET,https://cdn.jsdelivr.net/gh/lhie1/Rules@master/Surge/Surge%203/Provider/Media/Hulu%20Japan.list,GlobalTV\n' +
  'RULE-SET,https://cdn.jsdelivr.net/gh/lhie1/Rules@master/Surge/Surge%203/Provider/Media/Hulu.list,GlobalTV\n' +
  'RULE-SET,https://cdn.jsdelivr.net/gh/lhie1/Rules@master/Surge/Surge%203/Provider/Media/Japonx.list,GlobalTV\n' +
  'RULE-SET,https://cdn.jsdelivr.net/gh/lhie1/Rules@master/Surge/Surge%203/Provider/Media/JOOX.list,GlobalTV\n' +
  'RULE-SET,https://cdn.jsdelivr.net/gh/lhie1/Rules@master/Surge/Surge%203/Provider/Media/KKBOX.list,GlobalTV\n' +
  'RULE-SET,https://cdn.jsdelivr.net/gh/lhie1/Rules@master/Surge/Surge%203/Provider/Media/KKTV.list,GlobalTV\n' +
  'RULE-SET,https://cdn.jsdelivr.net/gh/lhie1/Rules@master/Surge/Surge%203/Provider/Media/Line%20TV.list,GlobalTV\n' +
  'RULE-SET,https://cdn.jsdelivr.net/gh/lhie1/Rules@master/Surge/Surge%203/Provider/Media/myTV%20SUPER.list,GlobalTV\n' +
  'RULE-SET,https://cdn.jsdelivr.net/gh/lhie1/Rules@master/Surge/Surge%203/Provider/Media/Pandora.list,GlobalTV\n' +
  'RULE-SET,https://cdn.jsdelivr.net/gh/lhie1/Rules@master/Surge/Surge%203/Provider/Media/PBS.list,GlobalTV\n' +
  'RULE-SET,https://cdn.jsdelivr.net/gh/lhie1/Rules@master/Surge/Surge%203/Provider/Media/Pornhub.list,GlobalTV\n' +
  'RULE-SET,https://cdn.jsdelivr.net/gh/lhie1/Rules@master/Surge/Surge%203/Provider/Media/Soundcloud.list,GlobalTV\n' +
  'RULE-SET,https://cdn.jsdelivr.net/gh/lhie1/Rules@master/Surge/Surge%203/Provider/Media/ViuTV.list,GlobalTV\n' +
  '\n' +
  '# CN\n' +
  'GEOIP,CN,Domestic\n' +
  'DOMAIN-SET,https://cdn.jsdelivr.net/gh/Loyalsoldier/surge-rules@release/direct.txt,Domestic\n' +
  'RULE-SET,https://cdn.jsdelivr.net/gh/hineosmith/rules@main/surge/cn.list,Domestic\n' +
  'RULE-SET,https://cdn.jsdelivr.net/gh/Loyalsoldier/surge-rules@release/cncidr.txt,Domestic\n' +
  'RULE-SET,https://cdn.jsdelivr.net/gh/lhie1/Rules@master/Surge/Surge%203/Provider/Domestic.list,Domestic\n' +
  'RULE-SET,https://cdn.jsdelivr.net/gh/lhie1/Rules@master/Surge/Surge%203/Provider/Domestic%20IPs.list,Domestic\n' +
  '\n' +
  '# Proxy\n' +
  'DOMAIN-SET,https://cdn.jsdelivr.net/gh/Loyalsoldier/surge-rules@release/proxy.txt,Proxy\n' +
  'DOMAIN-SET,https://cdn.jsdelivr.net/gh/Loyalsoldier/surge-rules@release/gfw.txt,Proxy\n' +
  'DOMAIN-SET,https://cdn.jsdelivr.net/gh/Loyalsoldier/surge-rules@release/greatfire.txt,Proxy\n' +
  'RULE-SET,https://cdn.jsdelivr.net/gh/lhie1/Rules@master/Surge/Surge%203/Provider/Proxy.list,Proxy\n' +
  '\n' +
  '# FINAL\n' +
  'FINAL,Proxy,dns-failed\n' +
  '\n'

export default RULE
