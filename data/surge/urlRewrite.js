const URL_REWRITE =
  '[URL Rewrite]\n' +
  '# > Redirect Google Service\n' +
  '^https?:\\/\\/(www.)?g\\.cn https:\\/\\/www.google.com 302\n' +
  '^https?:\\/\\/(www.)?google\\.cn https:\\/\\/www.google.com 302\n' +
  '\n' +
  '# > Redirect HTTP to HTTPS\n' +
  '^https?:\\/\\/(www.)?taobao\\.com\\/ https:\\/\\/www.taobao.com\\/ 302\n' +
  '^https?:\\/\\/(www.)?jd\\.com\\/ https:\\/\\/www.jd.com\\/ 302\n' +
  '^https?:\\/\\/(www.)?mi\\.com\\/ https:\\/\\/www.mi.com\\/ 302\n' +
  '^https?:\\/\\/you\\.163\\.com\\/ https:\\/\\/you.163.com\\/ 302\n' +
  '^https?:\\/\\/(www.)?suning\\.com\\/ https:\\/\\/suning.com\\/ 302\n' +
  '^https?:\\/\\/(www.)?yhd\\.com https:\\/\\/yhd.com\\/ 302\n' +
  '\n' +
  '# Redirect False to True\n' +
  '# > IGN China to IGN Global\n' +
  '^https?:\\/\\/(www.)?ign\\.xn--fiqs8s\\/ http:\\/\\/cn.ign.com\\/ccpref\\/us 302\n' +
  '\n' +
  '# > Fake Website Made By Makeding\n' +
  '^https?:\\/\\/(www.)?abbyychina\\.com\\/ http:\\/\\/www.abbyy.cn\\/ 302\n' +
  '^https?:\\/\\/(www.)?bartender\\.cc\\/ https:\\/\\/cn.seagullscientific.com 302\n' +
  '^https?:\\/\\/(www.)?betterzip\\.net\\/ https:\\/\\/macitbetter.com\\/ 302\n' +
  '^https?:\\/\\/(www.)?beyondcompare\\.cc\\/ https:\\/\\/www.scootersoftware.com\\/ 302\n' +
  '^https?:\\/\\/(www.)?bingdianhuanyuan\\.cn\\/ http:\\/\\/www.faronics.com\\/zh-hans\\/ 302\n' +
  '^https?:\\/\\/(www.)?chemdraw\\.com\\.cn\\/ http:\\/\\/www.cambridgesoft.com\\/ 302\n' +
  '^https?:\\/\\/(www.)?codesoftchina\\.com\\/ https:\\/\\/www.teklynx.com\\/ 302\n' +
  '^https?:\\/\\/(www.)?coreldrawchina\\.com\\/ https:\\/\\/www.coreldraw.com\\/cn\\/ 302\n' +
  '^https?:\\/\\/(www.)?crossoverchina\\.com\\/ https:\\/\\/www.codeweavers.com\\/ 302\n' +
  '^https?:\\/\\/(www.)?easyrecoverychina\\.com\\/ https:\\/\\/www.ontrack.com\\/ 302\n' +
  '^https?:\\/\\/(www.)?ediuschina\\.com\\/ https:\\/\\/www.grassvalley.com\\/ 302\n' +
  '^https?:\\/\\/(www.)?flstudiochina\\.com\\/ https:\\/\\/www.image-line.com\\/flstudio\\/ 302\n' +
  '^https?:\\/\\/(www.)?formysql\\.com\\/ https:\\/\\/www.navicat.com.cn 302\n' +
  '^https?:\\/\\/(www.)?guitarpro\\.cc\\/ https:\\/\\/www.guitar-pro.com\\/ 302\n' +
  '^https?:\\/\\/(www.)?huishenghuiying\\.com\\.cn\\/ https:\\/\\/www.corel.com\\/cn\\/ 302\n' +
  '^https?:\\/\\/(www.)?iconworkshop\\.cn\\/ https:\\/\\/www.axialis.com\\/iconworkshop\\/ 302\n' +
  '^https?:\\/\\/(www.)?imindmap\\.cc\\/ https:\\/\\/imindmap.com\\/zh-cn\\/ 302\n' +
  '^https?:\\/\\/(www.)?jihehuaban\\.com\\.cn\\/ https:\\/\\/sketch.io\\/ 302\n' +
  '^https?:\\/\\/(www.)?keyshot\\.cc\\/ https:\\/\\/www.keyshot.com\\/ 302\n' +
  '^https?:\\/\\/(www.)?mathtype\\.cn\\/ http:\\/\\/www.dessci.com\\/en\\/products\\/mathtype\\/ 302\n' +
  '^https?:\\/\\/(www.)?mindmanager\\.cc\\/ https:\\/\\/www.mindjet.com\\/ 302\n' +
  '^https?:\\/\\/(www.)?mindmapper\\.cc\\/ https:\\/\\/mindmapper.com 302\n' +
  '^https?:\\/\\/(www.)?mycleanmymac\\.com\\/ https:\\/\\/macpaw.com\\/cleanmymac 302\n' +
  '^https?:\\/\\/(www.)?nicelabel\\.cc\\/ https:\\/\\/www.nicelabel.com\\/ 302\n' +
  '^https?:\\/\\/(www.)?ntfsformac\\.cc\\/ https:\\/\\/www.tuxera.com\\/products\\/tuxera-ntfs-for-mac-cn\\/ 302\n' +
  '^https?:\\/\\/(www.)?ntfsformac\\.cn\\/ https:\\/\\/www.paragon-software.com\\/ufsdhome\\/zh\\/ntfs-mac\\/ 302\n' +
  '^https?:\\/\\/(www.)?overturechina\\.com\\/ https:\\/\\/sonicscores.com\\/overture\\/ 302\n' +
  '^https?:\\/\\/(www.)?passwordrecovery\\.cn\\/ https:\\/\\/cn.elcomsoft.com\\/aopr.html 302\n' +
  '^https?:\\/\\/(www.)?pdfexpert\\.cc\\/ https:\\/\\/pdfexpert.com\\/zh 302\n' +
  '^https?:\\/\\/(www.)?ultraiso\\.net\\/ https:\\/\\/cn.ezbsystems.com\\/ultraiso\\/ 302\n' +
  '^https?:\\/\\/(www.)?vegaschina\\.cn\\/ https:\\/\\/www.vegas.com\\/ 302\n' +
  '^https?:\\/\\/(www.)?xmindchina\\.net\\/ https:\\/\\/www.xmind.cn\\/ 302\n' +
  '^https?:\\/\\/(www.)?xshellcn\\.com\\/ https:\\/\\/www.netsarang.com\\/products\\/xsh_overview.html 302\n' +
  '^https?:\\/\\/(www.)?yuanchengxiezuo\\.com\\/ https:\\/\\/www.teamviewer.com\\/zhcn\\/ 302\n' +
  '^https?:\\/\\/(www.)?zbrushcn\\.com\\/ http:\\/\\/pixologic.com\\/ 302\n' +
  '^https?:\\/\\/aweme-eagle(.*)\\.snssdk\\.com\\/aweme\\/v2\\/ https:\\/\\/aweme-eagle$1.snssdk.com\\/aweme\\/v1\\/ 302\n' +
  '\n' +
  '# JD Protection\n' +
  '^https?:\\/\\/coupon\\.m\\.jd\\.com\\/ https:\\/\\/coupon.m.jd.com\\/ 302\n' +
  '^https?:\\/\\/h5\\.m\\.jd\\.com\\/ https:\\/\\/h5.m.jd.com\\/ 302\n' +
  '^https?:\\/\\/item\\.m\\.jd\\.com\\/ https:\\/\\/item.m.jd.com\\/ 302\n' +
  '^https?:\\/\\/m\\.jd\\.com\\/ https:\\/\\/m.jd.com\\/ 302\n' +
  '^https?:\\/\\/newcz\\.m\\.jd\\.com\\/ https:\\/\\/newcz.m.jd.com\\/ 302\n' +
  '^https?:\\/\\/p\\.m\\.jd\\.com\\/ https:\\/\\/p.m.jd.com\\/ 302\n' +
  '^https?:\\/\\/so\\.m\\.jd\\.com\\/ https:\\/\\/so.m.jd.com\\/ 302\n' +
  '^https?:\\/\\/union\\.click\\.jd\\.com\\/jda? http:\\/\\/union.click.jd.com\\/jda?adblock= header\n' +
  '^https?:\\/\\/union\\.click\\.jd\\.com\\/sem.php? http:\\/\\/union.click.jd.com\\/sem.php?adblock= header\n' +
  '^https?:\\/\\/www.jd.com\\/ https:\\/\\/www.jd.com\\/ 302\n' +
  '\n' +
  '# > Wiki\n' +
  '# ^https:\\/\\/zh.(m.)?wikipedia.org\\/zh(-\\w*)?(?=\\/) https:\\/\\/www.wikiwand.com\\/zh$2 302\n' +
  '# ^https:\\/\\/(\\w*).(m.)?wikipedia.org\\/wiki https:\\/\\/www.wikiwand.com\\/$1 302\n' +
  '\n' +
  '\n' +
  '\n' +
  '# Advertising Block\n' +
  '# > NOMO\n' +
  '^https:\\/\\/nomo.dafork.com\\/api\\/v3\\/iap\\/ios_product_list https:\\/\\/files.catbox.moe\\/fgmkpy.json 302\n' +
  '\n' +
  '# > Other\n' +
  '^https?:\\/\\/cfg.m.ttkvod.com\\/mobile\\/ttk_mobile_1.8.txt http:\\/\\/ogtre5vp0.bkt.clouddn.com\\/Static\\/TXT\\/ttk_mobile_1.8.txt header\n' +
  '^https?:\\/\\/cnzz.com\\/ http:\\/\\/ogtre5vp0.bkt.clouddn.com\\/background.png? header\n' +
  '^https?:\\/\\/m.qu.la\\/stylewap\\/js\\/wap.js http:\\/\\/ogtre5vp0.bkt.clouddn.com\\/qu_la_wap.js 302\n' +
  '^https?:\\/\\/m.yhd.com\\/1\\/\\? http:\\/\\/m.yhd.com\\/1\\/?adbock= 302\n' +
  '^https?:\\/\\/n.mark.letv.com\\/m3u8api\\/ http:\\/\\/burpsuite.applinzi.com\\/Interface header\n' +
  '^https?:\\/\\/sqimg.qq.com\\/ http:\\/\\/sqimg.qq.com\\/ 302\n' +
  '^https?:\\/\\/static.m.ttkvod.com\\/static_cahce\\/index\\/index.txt http:\\/\\/ogtre5vp0.bkt.clouddn.com\\/Static\\/TXT\\/index.txt header\n' +
  '^https?:\\/\\/www.iqshw.com\\/d\\/js\\/m http:\\/\\/burpsuite.applinzi.com\\/Interface header\n' +
  '^https?:\\/\\/www.iqshw.com\\/d\\/js\\/m http:\\/\\/rewrite.websocket.site:10\\/Other\\/Static\\/JS\\/Package.js? header\n' +
  '\n' +
  '# > TikTok Internation\n' +
  '# (.*video_id=\\w{32})(.*watermark=)(.*) url 302 $1\n' +
  '# (?<=(carrier|sys)_region=)CN url 307 JP\n' +
  '# (?<=version_code=)\\d{1,}.\\d{1}\\.\\d{1} url 307 8.0.0\n' +
  '\n' +
  '# > Anti_ISP_JavaScript_Injection\n' +
  '^https?:\\/\\/c.minisplat.cn - reject\n' +
  '^https?:\\/\\/c1.minisplat.cn - reject\n' +
  '^https?:\\/\\/cache.changjingyi.cn - reject\n' +
  '^https?:\\/\\/cache.gclick.cn - reject\n' +
  '\n' +
  '# > Anti_ISP_Safari_Baidu_CPM_Hijack\n' +
  '^https?:\\/\\/m.coolaiy.com\\/b.php - reject\n' +
  '^https?:\\/\\/www.babyye.com\\/b.php - reject\n' +
  '^https?:\\/\\/www.gwv7.com\\/b.php - reject\n' +
  '^https?:\\/\\/www.likeji.net\\/b.php - reject\n' +
  '\n' +
  '# > ChinaRailcom\n' +
  '^https?:\\/\\/211.98.70.226:8080\\/ - reject\n' +
  '^https?:\\/\\/211.98.71.195:8080\\/ - reject\n' +
  '^https?:\\/\\/211.98.71.196:8080\\/ - reject\n' +
  '\n' +
  '# > 腾讯\n' +
  '^https?:\\/\\/.+.mp4\\?cdncode=.+&sdtfrom=v3004 - reject\n' +
  '^https?:\\/\\/.+\\/hls.cache.p4p\\/ - reject\n' +
  '^https?:\\/\\/.+\\/music\\/common\\/upload\\/t_splash_info - reject\n' +
  '^https?:\\/\\/.+\\/omts.tc.qq.com\\/ - reject\n' +
  '^https?:\\/\\/.+\\/tips\\/fcgi-bin\\/fcg_get_advert - reject\n' +
  '^https?:\\/\\/.+\\/variety.tc.qq.com\\/ - reject\n' +
  '^https?:\\/\\/.+\\/vlive.qqvideo.tc.qq.com\\/ - reject\n' +
  '^https?:\\/\\/3gimg.qq.com\\/tencentMapTouch\\/app\\/activity\\/ - reject\n' +
  '^https?:\\/\\/api5.futunn.com\\/ad\\/ - reject\n' +
  '^https?:\\/\\/bla.gtimg.com\\/qqlive\\/\\d{6}.+.png - reject\n' +
  '^https?:\\/\\/imgcache.qq.com\\/qqlive\\/ - reject\n' +
  '^https?:\\/\\/lives.l.qq.com\\/livemsg\\?sdtfrom= - reject\n' +
  '^https?:\\/\\/mmgr.gtimg.com\\/gjsmall\\/qiantu\\/upload\\/ - reject\n' +
  '^https?:\\/\\/mp.weixin.qq.com\\/mp\\/(ad_complaint|ad_video|advertisement_report|getappmsgad|report) - reject\n' +
  '^https?:\\/\\/mtteve.beacon.qq.com\\/analytics - reject\n' +
  '^https?:\\/\\/qt.qq.com\\/lua\\/mengyou\\/get_splash_screen_info - reject\n' +
  '^https?:\\/\\/r.inews.qq.com\\/(adsBlacklist|getBannerAds|getFullScreenPic|getNewsRemoteConfig|getQQNewsRemoteConfig|searchHotCatList|upLoadLoc) - reject\n' +
  '^https?:\\/\\/r.inews.qq.com\\/getSplash\\?apptype=ios&startarticleid=&__qnr= - reject\n' +
  '^https?:\\/\\/splashqqlive.gtimg.com\\/website\\/\\d{6} - reject\n' +
  '^https?:\\/\\/ssl.kohsocialapp.qq.com:10001\\/game\\/buttons - reject\n' +
  '^https?:\\/\\/szextshort.weixin.qq.com\\/cgi-bin\\/mmoc-bin\\/ad\\/ - reject\n' +
  '^https?:\\/\\/vv.video.qq.com\\/getvmind\\? - reject\n' +
  '^https?:\\/\\/y.gtimg.cn\\/music\\/common\\/upload\\/targeted_ads - reject\n' +
  '\n' +
  '# > 新浪\n' +
  '^https?:\\/\\/api.weibo.cn\\/2\\/statuses\\/extend\\?gsid= - reject\n' +
  '^https?:\\/\\/edit.sinaapp.com\\/ua\\?t=adv - reject\n' +
  '^https?:\\/\\/free.sinaimg.cn\\/u1.img.mobile.sina.cn - reject\n' +
  '^https?:\\/\\/simg.s.weibo.com\\/.+_ios\\d{2}.gif - reject\n' +
  '^https?:\\/\\/storage.wax.weibo.com\\/\\w+.(png|jpg|mp4) - reject\n' +
  '^https?:\\/\\/u1.img.mobile.sina.cn\\/public\\/files\\/image\\/\\d{3}x\\d{2,4}.+(png|jpg|mp4) - reject\n' +
  '\n' +
  '# > 优酷\n' +
  '^https?:\\/\\/(iyes|(api|hd).mobile).youku.com\\/(adv|common\\/v3\\/hudong\\/new) - reject\n' +
  '^https?:\\/\\/.+.mp4\\?ccode=0902 - reject\n' +
  '^https?:\\/\\/.+.mp4\\?sid= - reject\n' +
  '^https?:\\/\\/ad.api.3g.youku.com - reject\n' +
  '^https?:\\/\\/api.appsdk.soku.com\\/(bg|tag)\\/r - reject\n' +
  '^https?:\\/\\/api.k.sohu.com\\/api\\/channel\\/ad\\/ - reject\n' +
  '^https?:\\/\\/api.mobile.youku.com\\/layout\\/search\\/hot\\/word - reject\n' +
  '^https?:\\/\\/m.youku.com\\/video\\/libs\\/iwt.js - reject\n' +
  '^https?:\\/\\/pic.k.sohu.com\\/img8\\/wb\\/tj\\/ - reject\n' +
  '^https?:\\/\\/r.l.youku.com\\/rec_at_click - reject\n' +
  '^https?:\\/\\/r1.ykimg.com\\/\\w{30,35}.jpg - reject\n' +
  '^https?:\\/\\/r1.ykimg.com\\/material\\/.+\\/\\d{3,4}-\\d{4} - reject\n' +
  '^https?:\\/\\/r1.ykimg.com\\/material\\/.+\\/\\d{6}\\/\\d{4}\\/ - reject\n' +
  '^https?:\\/\\/ups.youku.com\\/(.*)needad=1& ^https?:\\/\\/ups.youku.com\\/$1needad=0& 302\n' +
  '^https?:\\/\\/vali.cp31.ott.cibntv.net\\/youku - reject\n' +
  '\n' +
  '# > 网易\n' +
  '^https?:\\/\\/.+.127.net\\/ad - reject\n' +
  '^https?:\\/\\/.+\\/eapi\\/(ad|evenet|log)\\/ - reject\n' +
  '^https?:\\/\\/c.m.163.com\\/nc\\/gl\\/ - reject\n' +
  '^https?:\\/\\/client.mail.163.com\\/apptrack\\/confinfo\\/searchMultiAds - reject\n' +
  '^https?:\\/\\/dsp-impr2.youdao.com\\/adload.s\\? - reject\n' +
  '^https?:\\/\\/g1.163.com\\/madfeedback - reject\n' +
  '^https?:\\/\\/img1.126.net\\/.+dpi=\\w{7,8} - reject\n' +
  '^https?:\\/\\/img1.126.net\\/channel14\\/ - reject\n' +
  '^https?:\\/\\/interface.music.163.com\\/eapi\\/ad\\/ - reject\n' +
  '^https?:\\/\\/mimg.127.net\\/external\\/smartpop-manger.min.js - reject\n' +
  '^https?:\\/\\/nex.163.com\\/q - reject\n' +
  '^https?:\\/\\/oimage([a-z])([0-9]).ydstatic.com\\/.+?&product=adpublish - reject\n' +
  '^https?:\\/\\/p[4](c)?.music.126.net\\/\\w+==\\/10995\\d{13}.jpg$ - reject\n' +
  '^https?:\\/\\/sp.kaola.com\\/api\\/openad - reject\n' +
  '^https?:\\/\\/support.you.163.com\\/xhr\\/boot\\/getBootMedia.json - reject\n' +
  '\n' +
  '# > 知乎\n' +
  '^https?:\\/\\/api.zhihu.com\\/ab\\/api - reject\n' +
  '^https?:\\/\\/api.zhihu.com\\/ad-style-service - reject\n' +
  '^https?:\\/\\/api.zhihu.com\\/app_config - reject\n' +
  '^https?:\\/\\/api.zhihu.com\\/appview\\/api\\/v4\\/answers.+recommendations - reject\n' +
  '^https?:\\/\\/api.zhihu.com\\/banner - reject\n' +
  '^https?:\\/\\/api.zhihu.com\\/launch - reject\n' +
  '^https?:\\/\\/api.zhihu.com\\/market\\/popover - reject\n' +
  '^https?:\\/\\/api.zhihu.com\\/real_time - reject\n' +
  '^https?:\\/\\/api.zhihu.com\\/search\\/preset_words - reject\n' +
  '^https?:\\/\\/api.zhihu.com\\/search\\/top_search - reject\n' +
  '^https?:\\/\\/api.zhihu.com\\/zst\\/events - reject\n' +
  '^https?:\\/\\/www.zhihu.com\\/api\\/v4\\/community-ad\\/ - reject\n' +
  '^https?:\\/\\/www.zhihu.com\\/terms\\/privacy\\/confirm - reject\n' +
  '\n' +
  '# > 追书神器\n' +
  '^https?:\\/\\/(api|b).zhuishushenqi.com\\/advert - reject\n' +
  '^https?:\\/\\/api.zhuishushenqi.com\\/notification\\/shelfMessage - reject\n' +
  '^https?:\\/\\/api.zhuishushenqi.com\\/recommend - reject\n' +
  '^https?:\\/\\/api.zhuishushenqi.com\\/splashes\\/ios - reject\n' +
  '^https?:\\/\\/api01pbmp.zhuishushenqi.com\\/gameAdvert - reject\n' +
  '# > Upgrade\n' +
  '^https?:\\/\\/api.zhuishushenqi.com\\/user\\/bookshelf-updated - reject\n' +
  '^https?:\\/\\/itunes.apple.com\\/lookup\\?id=575826903 - reject\n' +
  '\n' +
  '# > 爱奇艺\n' +
  '^https?:\\/\\/.+\\/cdn\\/qiyiapp\\/\\d{8}\\/.+&dis_dz= - reject\n' +
  '^https?:\\/\\/.+\\/cdn\\/qiyiapp\\/\\d{8}\\/.+&z=\\w - reject\n' +
  '^https?:\\/\\/.+\\/videos\\/other\\/ - reject\n' +
  '^https?:\\/\\/iface2.iqiyi.com\\/fusion\\/3.0\\/fusion_switch - reject\n' +
  '\n' +
  '# > 搜狐\n' +
  '^https?:\\/\\/agn.aty.sohu.com\\/m? - reject\n' +
  '^https?:\\/\\/api.k.sohu.com\\/api\\/news\\/adsense - reject\n' +
  '^https?:\\/\\/hui.sohu.com\\/predownload2\\/? - reject\n' +
  '^https?:\\/\\/m.aty.sohu.com\\/openload? - reject\n' +
  '^https?:\\/\\/mbl.56.com\\/config\\/v1\\/common\\/config.union.ios.do? - reject\n' +
  '^https?:\\/\\/mmg.aty.sohu.com\\/mqs? - reject\n' +
  '^https?:\\/\\/mmg.aty.sohu.com\\/pvlog? - reject\n' +
  '^https?:\\/\\/photocdn.sohu.com\\/tvmobilemvms - reject\n' +
  '^https?:\\/\\/pic.k.sohu.com\\/img8\\/wb\\/tj\\/ - reject\n' +
  '^https?:\\/\\/s.go.sohu.com\\/adgtr\\/\\?gbcode= - reject\n' +
  '\n' +
  '# > 百度\n' +
  '(ps|sv|offnavi|newvector|ulog.imap|newloc)(.map)?.(baidu|n.shifen).com - reject\n' +
  '^https?:\\/\\/afd.baidu.com\\/afd\\/entry - reject\n' +
  '^https?:\\/\\/als.baidu.com\\/clog\\/clog - reject\n' +
  '^https?:\\/\\/baichuan.baidu.com\\/rs\\/adpmobile\\/launch - reject\n' +
  '^https?:\\/\\/bj.bcebos.com\\/fc-feed\\/0\\/pic\\/ - reject\n' +
  '^https?:\\/\\/c.tieba.baidu.com\\/\\w+\\/\\w+\\/(sync|newRnSync|newlog|mlog) - reject\n' +
  '^https?:\\/\\/c.tieba.baidu.com\\/c\\/p\\/img\\?src= - reject\n' +
  '^https?:\\/\\/c.tieba.baidu.com\\/c\\/s\\/logtogether\\?cmd= - reject\n' +
  '^https?:\\/\\/fcvbjbcebos.baidu.com\\/.+.mp4 - reject\n' +
  '^https?:\\/\\/gss0.bdstatic.com\\/.+\\/static\\/wiseindex\\/img\\/bd_red_packet.png - reject\n' +
  '^https?:\\/\\/issuecdn.baidupcs.com\\/issue\\/netdisk\\/guanggao\\/ - reject\n' +
  '^https?:\\/\\/sm.domobcdn.com\\/ugc\\/\\w\\/ - reject\n' +
  '^https?:\\/\\/tb1.bdstatic.com\\/tb\\/cms\\/ngmis\\/adsense\\/*.jpg - reject\n' +
  '^https?:\\/\\/tb2.bdstatic.com\\/tb\\/mobile\\/spb\\/widget\\/jump - reject\n' +
  '^https?:\\/\\/update.pan.baidu.com\\/statistics - reject\n' +
  '^https?:\\/\\/wapwenku.baidu.com\\/view\\/fengchao\\/ - reject\n' +
  '^https?:\\/\\/wapwenku.baidu.com\\/view\\/fengchaoTwojump\\/ - reject\n' +
  '^https?:\\/\\/wenku.baidu.com\\/shifen\\/ - reject\n' +
  '\n' +
  '# > 百度地图\n' +
  '^https?:\\/\\/.+\\/client\\/phpui2\\/ - reject\n' +
  '\n' +
  '# > 百度贴吧\n' +
  '^https?:\\/\\/c.tieba.baidu.com\\/c\\/s\\/splashSchedule - reject\n' +
  '^https?:\\/\\/cover.baidu.com\\/cover\\/page\\/dspSwitchAds\\/ - reject\n' +
  '\n' +
  '# > 墨迹天气\n' +
  '^https?:\\/\\/ad.api.moji.com\\/ad\\/log\\/stat - reject\n' +
  '^https?:\\/\\/ast.api.moji.com\\/assist\\/ad\\/moji\\/stat - reject\n' +
  '^https?:\\/\\/cdn.moji.com\\/adlink\\/avatarcard - reject\n' +
  '^https?:\\/\\/cdn.moji.com\\/adlink\\/common - reject\n' +
  '^https?:\\/\\/cdn.moji.com\\/adlink\\/splash\\/ - reject\n' +
  '^https?:\\/\\/cdn.moji.com\\/advert\\/ - reject\n' +
  '^https?:\\/\\/cdn2.moji002.com\\/webpush\\/ad2\\/ - reject\n' +
  '^https?:\\/\\/fds.api.moji.com\\/card\\/recommend - reject\n' +
  '^https?:\\/\\/show.api.moji.com\\/json\\/showcase\\/getAll - reject\n' +
  '^https?:\\/\\/stat.moji.com - reject\n' +
  '^https?:\\/\\/storage.360buyimg.com\\/kepler-app - reject\n' +
  '^https?:\\/\\/ugc.moji001.com\\/sns\\/json\\/profile\\/get_unread - reject\n' +
  '\n' +
  '# > 小米\n' +
  '^https?:\\/\\/api.m.mi.com\\/v1\\/app\\/start - reject\n' +
  '^https?:\\/\\/api.jr.mi.com\\/v1\\/adv\\/ - reject\n' +
  '\n' +
  '# > 中国电信\n' +
  '^https?:\\/\\/image1.chinatelecom-ec.com\\/images\\/.+\\/\\d{13}.jpg - reject\n' +
  '\n' +
  '# > 中国联通\n' +
  '^https?:\\/\\/m.client.10010.com\\/mobileService\\/(activity|customer)\\/(accountListData|get_client_adv|get_startadv) - reject\n' +
  '^https?:\\/\\/m.client.10010.com\\/uniAdmsInterface\\/(getHomePageAd|getWelcomeAd) - reject\n' +
  '^https?:\\/\\/m1.ad.10010.com\\/noticeMag\\/images\\/imageUpload\\/2\\d{3} - reject\n' +
  '^https?:\\/\\/res.mall.10010.cn\\/mall\\/common\\/js\\/fa.js?referer= - reject\n' +
  '\n' +
  '# > 凤凰网\n' +
  '^https?:\\/\\/api.newad.ifeng.com\\/ClientAdversApi1508\\?adids= - reject\n' +
  '^https?:\\/\\/c1.ifengimg.com\\/.+_w1080_h1410.jpg - reject\n' +
  '^https?:\\/\\/exp.3g.ifeng.com\\/coverAdversApi\\?gv=. - reject\n' +
  '^https?:\\/\\/ifengad.3g.ifeng.com\\/ad\\/pv.php\\?stat= - reject\n' +
  '^https?:\\/\\/iis1.deliver.ifeng.com\\/getmcode\\?adid= - reject\n' +
  '\n' +
  '# > 京东\n' +
  '^https?:\\/\\/.+\\/client?functionId=lauch\\/lauchConfig&appName=paidaojia - reject\n' +
  '^https?:\\/\\/bdsp-x.jd.com\\/adx\\/ - reject\n' +
  '^https?:\\/\\/m.360buyimg.com\\/mobilecms\\/s640x1136_jfs\\/ - reject\n' +
  '^https?:\\/\\/ms.jr.jd.com\\/gw\\/generic\\/base\\/na\\/m\\/adInfo - reject\n' +
  '^https?:\\/\\/img12.360buyimg.com.+width=\\d{4}&height=\\d{4} - reject\n' +
  '\n' +
  '# > 淘宝\n' +
  '^https?:\\/\\/gw.alicdn.com\\/tfs\\/.+-1125-1602 - reject\n' +
  '\n' +
  '# > 豆瓣\n' +
  '^https?:\\/\\/(\\d{1,3}.){1,3}\\d{1,3}\\/view\\/dale-online\\/dale_ad\\/ - reject\n' +
  '^https?:\\/\\/api.douban.com\\/v2\\/app_ads\\/common_ads - reject\n' +
  '^https?:\\/\\/frodo.douban.com\\/api\\/v2\\/movie\\/banner - reject\n' +
  '^https?:\\/\\/img\\d.doubanio.com\\/view\\/dale-online\\/dale_ad\\/ - reject\n' +
  '\n' +
  '# > 斗鱼\n' +
  '^https?:\\/\\/capi.douyucdn.cn\\/lapi\\/sign\\/app(api)?\\/getinfo\\?client_sys=ios - reject\n' +
  '^https?:\\/\\/capi.douyucdn.cn\\/api\\/ios_app\\/check_update - reject\n' +
  '^https?:\\/\\/capi.douyucdn.cn\\/api\\/v1\\/getStartSend?client_sys=ios - reject\n' +
  '^https?:\\/\\/douyucdn.cn\\/.+\\/appapi\\/getinfo - reject\n' +
  '^https?:\\/\\/rtbapi.douyucdn.cn\\/japi\\/sign\\/app\\/getinfo - reject\n' +
  '^https?:\\/\\/staticlive.douyucdn.cn\\/.+\\/getStartSend - reject\n' +
  '^https?:\\/\\/staticlive.douyucdn.cn\\/upload\\/signs\\/ - reject\n' +
  '\n' +
  '# > 饿了么\n' +
  '^https?:\\/\\/elemecdn.com\\/.+\\/sitemap - reject\n' +
  '^https?:\\/\\/fuss10.elemecdn.com\\/.+\\/w\\/640\\/h\\/\\d{3,4} - reject\n' +
  '^https?:\\/\\/fuss10.elemecdn.com\\/.+\\/w\\/750\\/h\\/\\d{3,4} - reject\n' +
  '^https?:\\/\\/fuss10.elemecdn.com\\/.+.mp4 - reject\n' +
  '^https?:\\/\\/m.elecfans.com\\/static\\/js\\/ad.js - reject\n' +
  '^https?:\\/\\/www1.elecfans.com\\/www\\/delivery\\/ - reject\n' +
  '\n' +
  '# > 头条\n' +
  '^https?:\\/\\/p\\d.pstatp.com\\/origin - reject\n' +
  '^https?:\\/\\/pb\\d.pstatp.com\\/origin - reject\n' +
  '\n' +
  '# > 咸鱼\n' +
  '^https?:\\/\\/gw.alicdn.com\\/mt\\/ - reject\n' +
  '^https?:\\/\\/gw.alicdn.com\\/tfs\\/.+\\d{3,4}-\\d{4} - reject\n' +
  '^https?:\\/\\/gw.alicdn.com\\/tps\\/.+\\d{3,4}-\\d{4} - reject\n' +
  '\n' +
  '# > 喜马拉雅\n' +
  '^https?:\\/\\/adse.+.com\\/[a-z]{4}\\/loading\\?appid= - reject\n' +
  '^https?:\\/\\/adse.ximalaya.com\\/ting\\/feed\\?appid= - reject\n' +
  '^https?:\\/\\/adse.ximalaya.com\\/ting\\/loading\\?appid= - reject\n' +
  '^https?:\\/\\/adse.ximalaya.com\\/ting\\?appid= - reject\n' +
  '^https?:\\/\\/fdfs.xmcdn.com\\/group21\\/M03\\/E7\\/3F\\/ - reject\n' +
  '^https?:\\/\\/fdfs.xmcdn.com\\/group21\\/M0A\\/95\\/3B\\/ - reject\n' +
  '^https?:\\/\\/fdfs.xmcdn.com\\/group22\\/M00\\/92\\/FF\\/ - reject\n' +
  '^https?:\\/\\/fdfs.xmcdn.com\\/group22\\/M05\\/66\\/67\\/ - reject\n' +
  '^https?:\\/\\/fdfs.xmcdn.com\\/group22\\/M07\\/76\\/54\\/ - reject\n' +
  '^https?:\\/\\/fdfs.xmcdn.com\\/group23\\/M01\\/63\\/F1\\/ - reject\n' +
  '^https?:\\/\\/fdfs.xmcdn.com\\/group23\\/M04\\/E5\\/F6\\/ - reject\n' +
  '^https?:\\/\\/fdfs.xmcdn.com\\/group23\\/M07\\/81\\/F6\\/ - reject\n' +
  '^https?:\\/\\/fdfs.xmcdn.com\\/group23\\/M0A\\/75\\/AA\\/ - reject\n' +
  '^https?:\\/\\/fdfs.xmcdn.com\\/group24\\/M03\\/E6\\/09\\/ - reject\n' +
  '^https?:\\/\\/fdfs.xmcdn.com\\/group24\\/M07\\/C4\\/3D\\/ - reject\n' +
  '^https?:\\/\\/fdfs.xmcdn.com\\/group25\\/M05\\/92\\/D1\\/ - reject\n' +
  '\n' +
  '# > 掌阅\n' +
  '^https?:\\/\\/book.img.ireader.com\\/group6\\/M00 - reject\n' +
  '\n' +
  '# > 易车\n' +
  '^https?:\\/\\/api.ycapp.yiche.com\\/appnews\\/getadlist - reject\n' +
  '^https?:\\/\\/api.ycapp.yiche.com\\/yicheapp\\/getadlist - reject\n' +
  '^https?:\\/\\/api.ycapp.yiche.com\\/yicheapp\\/getappads\\/ - reject\n' +
  '^https?:\\/\\/cheyouapi.ycapp.yiche.com\\/appforum\\/getusermessagecount - reject\n' +
  '\n' +
  '# > Youtube++\n' +
  '^https?:\\/\\/api.catch.gift\\/api\\/v3\\/pagead\\/ - reject\n' +
  '\n' +
  '# > 网喵\n' +
  '^https?:\\/\\/.+0013.+\\/upload\\/activity\\/app_flash_screen_ - reject\n' +
  '\n' +
  '# > 天山直播\n' +
  'http?:\\/\\/www.tsytv.com.cn\\/api\\/app\\/ios\\/ads - reject\n' +
  '\n' +
  '# > 肯德基\n' +
  '^https?:\\/\\/res.kfc.com.cn\\/advertisement\\/ - reject\n' +
  '\n' +
  '# > 首约汽车\n' +
  '^https?:\\/\\/img.yun.01zhuanche.com\\/statics\\/app\\/advertisement\\/.+-750-1334 - reject\n' +
  '\n' +
  '# > 神舟汽车\n' +
  '^https?:\\/\\/img01.10101111cdn.com\\/adpos\\/share\\/ - reject\n' +
  '\n' +
  '# > 流量银行\n' +
  '^https?:\\/\\/bank.wo.cn\\/v9\\/getstartpage - reject\n' +
  '\n' +
  '# > 海盐\n' +
  '^https?:\\/\\/img.ihytv.com\\/material\\/adv\\/img\\/ - reject\n' +
  '\n' +
  '# > 美团\n' +
  '^https?:\\/\\/img.meituan.net\\/midas\\/ - reject\n' +
  '^https?:\\/\\/p\\d.meituan.net\\/(mmc|wmbanner)\\/ - reject\n' +
  '\n' +
  '# > QQ Pim\n' +
  '^https?:\\/\\/mmgr.gtimg.com\\/gjsmall\\/qqpim\\/public\\/ios\\/splash\\/.+\\/\\d{4}_\\d{4} - reject\n' +
  '\n' +
  '# > 界面新闻\n' +
  '^https?:\\/\\/img.jiemian.com\\/ads\\/ - reject\n' +
  '\n' +
  '# > 汽车之家\n' +
  '^https?:\\/\\/adproxy.autohome.com.cn\\/AdvertiseService\\/ - reject\n' +
  '^https?:\\/\\/app2.autoimg.cn\\/appdfs\\/ - reject\n' +
  '\n' +
  '# > 起点读书\n' +
  '^https?:\\/\\/mage.if.qidian.com\\/Atom.axd\\/Api\\/Client\\/GetConfIOS - reject\n' +
  '\n' +
  '# > 当当\n' +
  '^https?:\\/\\/img\\d{2}.ddimg.cn\\/upload_img\\/.+\\/670x900 - reject\n' +
  '^https?:\\/\\/img\\d{2}.ddimg.cn\\/upload_img\\/.+\\/750x1064 - reject\n' +
  '^https?:\\/\\/mapi.dangdang.com\\/index.php\\?action=init&user_client=iphone - reject\n' +
  '\n' +
  '# > 国泰君安证券\n' +
  '^https?:\\/\\/dl.app.gtja.com\\/dzswem\\/kvController\\/ - reject\n' +
  '^https?:\\/\\/dl.app.gtja.com\\/operation\\/config\\/startupConfig.json - reject\n' +
  '\n' +
  '# > 来疯直播\n' +
  '^https?:\\/\\/api.laifeng.com\\/v1\\/start\\/ads - reject\n' +
  '\n' +
  '# > 抖音\n' +
  '^https?:\\/\\/.+.pstatp.com\\/img\\/ad - reject\n' +
  '^https?:\\/\\/.+.snssdk.com\\/api\\/ad\\/ - reject\n' +
  '^https?:\\/\\/aweme.snssdk.com\\/aweme\\/v1\\/aweme\\/stats\\/ - reject\n' +
  '^https?:\\/\\/aweme.snssdk.com\\/aweme\\/v1\\/device\\/update\\/ - reject\n' +
  '^https?:\\/\\/aweme.snssdk.com\\/aweme\\/v1\\/screen\\/ad\\/ - reject\n' +
  '^https?:\\/\\/aweme.snssdk.com\\/service\\/1\\/app_logout\\/ - reject\n' +
  '^https?:\\/\\/aweme.snssdk.com\\/service\\/2\\/app_log - reject\n' +
  '^https?:\\/\\/frontier.snssdk.com\\/ - reject\n' +
  '^https?:\\/\\/sf\\w-ttcdn-tos.pstatp.com\\/obj\\/web.business.image - reject\n' +
  '\n' +
  '# > 下厨房\n' +
  '^https?:\\/\\/api.xiachufang.com\\/v2\\/ad\\/ - reject\n' +
  '\n' +
  '# > Facebook\n' +
  '^https?:\\/\\/connect.facebook.net\\/en_US\\/fbadnw.js - reject\n' +
  '\n' +
  '# > 快递100\n' +
  '^https?:\\/\\/qzonestyle.gtimg.cn\\/qzone\\/biz\\/gdt\\/mob\\/sdk\\/ios\\/v2\\/ - reject\n' +
  '^https?:\\/\\/cdn.kuaidi100.com\\/images\\/open\\/appads - reject\n' +
  '^https?:\\/\\/p.kuaidi100.com\\/mobile\\/mainapi.do - reject\n' +
  '\n' +
  '# > Mi\n' +
  '^https?:\\/\\/api.m.mi.com\\/.+\\/app\\/start - reject\n' +
  '^https?:\\/\\/api-mifit.huami.com\\/discovery\\/mi\\/discovery\\/homepage_ad\\? - reject\n' +
  '^https?:\\/\\/api-mifit.huami.com\\/discovery\\/mi\\/discovery\\/sleep_ad\\? - reject\n' +
  '^https?:\\/\\/api-mifit.huami.com\\/discovery\\/mi\\/discovery\\/sport_ad\\? - reject\n' +
  '^https?:\\/\\/api-mifit.huami.com\\/discovery\\/mi\\/discovery\\/sport_summary_ad\\? - reject\n' +
  '^https?:\\/\\/api-mifit.huami.com\\/discovery\\/mi\\/discovery\\/sport_training_ad\\? - reject\n' +
  '^https?:\\/\\/api-mifit.huami.com\\/discovery\\/mi\\/discovery\\/step_detail_ad\\? - reject\n' +
  '^https?:\\/\\/api-mifit.huami.com\\/discovery\\/mi\\/discovery\\/training_video_ad\\? - reject\n' +
  '\n' +
  '# > Weico\n' +
  '^https?:\\/\\/overseas.weico.cc\\/portal.php\\?a=get_coopen_ads - reject\n' +
  '\n' +
  '# > StarFans\n' +
  '^https?:\\/\\/g.cdn.pengpengla.com\\/starfantuan\\/boot-screen-info\\/ - reject\n' +
  '\n' +
  '# > Discuz\n' +
  '^https?:\\/\\/discuz.gtimg.cn\\/cloud\\/scripts\\/discuz_tips.js - reject\n' +
  '\n' +
  '# > 果盘游戏\n' +
  '^https?:\\/\\/sapi.guopan.cn\\/get_buildin_ad - reject\n' +
  '\n' +
  '# > 驾考宝典\n' +
  '^https?:\\/\\/789.kakamobi.cn\\/.+adver - reject\n' +
  '^https?:\\/\\/smart.789.image.mucang.cn\\/advert - reject\n' +
  '\n' +
  '# > 招商银行\n' +
  '^https?:\\/\\/pic1cdn.cmbchina.com\\/appinitads\\/ - reject\n' +
  '\n' +
  '# > Cmblife\n' +
  '^https?:\\/\\/mlife.cmbchina.com\\/ClientFace(Service)?\\/getAdvertisement.json - reject\n' +
  '^https?:\\/\\/mlife.cmbchina.com\\/ClientFace(Service)?\\/preCacheAdvertise.json - reject\n' +
  '^https?:\\/\\/resource.cmbchina.com\\/fsp\\/File\\/ClientFacePublic\\/.+.gif - reject\n' +
  '\n' +
  '# > ElongClient\n' +
  'http?:\\/\\/123.59.30.10\\/adv\\/advInfos - reject\n' +
  '\n' +
  '# > AiRav\n' +
  '^https?:\\/\\/bbs.airav.cc\\/data\\/.+.jpg - reject\n' +
  '^https?:\\/\\/image.airav.cc\\/AirADPic\\/.+.gif - reject\n' +
  '^https?:\\/\\/m.airav.cc\\/images\\/Mobile_popout_cn.gif - reject\n' +
  '\n' +
  '# > 花生地铁\n' +
  '^https?:\\/\\/cmsapi.wifi8.com\\/v1\\/emptyAd\\/info - reject\n' +
  '^https?:\\/\\/cmsapi.wifi8.com\\/v2\\/adNew\\/config - reject\n' +
  '^https?:\\/\\/cmsfile.wifi8.com\\/uploads\\/png\\/ - reject\n' +
  '\n' +
  '# > AppSo\n' +
  '^https?:\\/\\/sso.ifanr.com\\/jiong\\/IOS\\/appso\\/splash\\/ - reject\n' +
  '\n' +
  '# > 懒人听书\n' +
  '^https?:\\/\\/118.178.214.118\\/yyting\\/advertclient\\/ClientAdvertList.action - reject\n' +
  '^https?:\\/\\/dapis.mting.info\\/yyting\\/advertclient\\/ClientAdvertList.action - reject\n' +
  '\n' +
  '# > 91Porn\n' +
  '^https?:\\/\\/192.133.+.mp4$ - reject\n' +
  '\n' +
  '# > 熊猫直播\n' +
  '^https?:\\/\\/static.api.m.panda.tv\\/index.php\\?method=clientconf.firstscreen&__version=(play_cnmb|(\\d+.){0,3}\\d+)&__plat=ios&__channel=appstore - reject\n' +
  '\n' +
  '# > 微吼\n' +
  '^https?:\\/\\/api.app.vhall.com\\/v5\\/000\\/webinar\\/launch - reject\n' +
  '\n' +
  '# > 天天狼人杀\n' +
  '^https?:\\/\\/img.53site.com\\/Werewolf\\/AD\\/ - reject\n' +
  '^https?:\\/\\/werewolf.53site.com\\/Werewolf\\/.+\\/getAdvertise.php - reject\n' +
  '^https?:\\/\\/werewolf.53site.com\\/Werewolf\\/.+\\/getShareVideodb.php - reject\n' +
  '\n' +
  '# > Apple\n' +
  '^https?:\\/\\/a.applovin.com\\/.+\\/ad - reject\n' +
  '\n' +
  '# > 微医\n' +
  '^https?:\\/\\/app.wy.guahao.com\\/json\\/white\\/dayquestion\\/getpopad - reject\n' +
  '^https?:\\/\\/kano.guahao.cn\\/.+\\?resize=\\d{3}-\\d{4} - reject\n' +
  '\n' +
  '# > 车来了\n' +
  '^https?:\\/\\/api.chelaile.net.cn\\/adpub\\/ - reject\n' +
  '^https?:\\/\\/api.chelaile.net.cn\\/goocity\\/advert\\/ - reject\n' +
  '^https?:\\/\\/atrace.chelaile.net.cn\\/adpub\\/ - reject\n' +
  '^https?:\\/\\/atrace.chelaile.net.cn\\/exhibit\\?&adv_image - reject\n' +
  '^https?:\\/\\/pic1.chelaile.net.cn\\/adv\\/ - reject\n' +
  '\n' +
  '# > 健康160\n' +
  '^https?:\\/\\/images.91160.com\\/primary\\/ - reject\n' +
  '\n' +
  '# > 1钱包\n' +
  '^https?:\\/\\/d.1qianbao.com\\/youqian\\/ads\\/ - reject\n' +
  '\n' +
  '# > 火猫直播\n' +
  '^https?:\\/\\/api.huomao.com\\/channels\\/loginAd - reject\n' +
  '\n' +
  '# > 快看漫画\n' +
  '^https?:\\/\\/api.kkmh.com\\/v\\d\\/(ad|advertisement)\\/ - reject\n' +
  '\n' +
  '# > 虎扑\n' +
  '^https?:\\/\\/i1.hoopchina.com.cn\\/blogfile\\/.+_\\d{3}x\\d{4} - reject\n' +
  '\n' +
  '# > 乐视TV\n' +
  '^https?:\\/\\/.+\\/letv-gug\\/ - reject\n' +
  '\n' +
  '# > 芒果TV\n' +
  '^https?:\\/\\/pcvideoyd.titan.mgtv.com\\/pb\\/ - reject\n' +
  '\n' +
  '# > Kecheng Gezi\n' +
  '^https?:\\/\\/classbox2.kechenggezi.com\\/api\\/v1\\/sponge\\/pull\\?request_time= - reject\n' +
  '\n' +
  '# > 当当阅读\n' +
  '^https?:\\/\\/e.dangdang.com\\/media\\/api.+\\?action=getDeviceStartPage - reject\n' +
  '\n' +
  '# > 什么值得买\n' +
  '^https?:\\/\\/api.smzdm.com\\/v1\\/util\\/loading - reject\n' +
  '^https?:\\/\\/api.smzdm.com\\/v2\\/util\\/banner - reject\n' +
  '\n' +
  '# > 飞常准\n' +
  '^https?:\\/\\/app.veryzhun.com\\/ad\\/admob - reject\n' +
  '\n' +
  '# > 凤凰秀\n' +
  '^https?:\\/\\/api.fengshows.com\\/api\\/launchAD - reject\n' +
  '\n' +
  '# > 人人视频\n' +
  '^https?:\\/\\/img.rr.tv\\/banner\\/.+.jpg - reject\n' +
  '\n' +
  '# > 人人影视\n' +
  '^https?:\\/\\/ctrl.(playcvn|zmzapi).net\\/app\\/(ads|init) - reject\n' +
  '\n' +
  '# > 老司机\n' +
  '^https?:\\/\\/api.laosiji.com\\/user\\/startpage\\/ - reject\n' +
  '\n' +
  '# > 同花顺 Pro\n' +
  '^https?:\\/\\/adm.10jqka.com.cn\\/interface\\/getads.php - reject\n' +
  '\n' +
  '# > 杭州市民卡\n' +
  '^https?:\\/\\/smkmp.96225.com\\/smkcenter\\/ad\\/.+\\/adBanner - reject\n' +
  '\n' +
  '# > 杭州公交\n' +
  '^https?:\\/\\/m.ibuscloud.com\\/v2\\/app\\/getStartPage - reject\n' +
  '\n' +
  '# > 埋堆堆\n' +
  '^https?:\\/\\/api.mddcloud.com.cn\\/api\\/ad\\/getClassAd.action - reject\n' +
  '^https?:\\/\\/api.mddcloud.com.cn\\/api\\/advert\\/getHomepage.action - reject\n' +
  '\n' +
  '# > 叨鱼\n' +
  '^https?:\\/\\/daoyu.sdo.com\\/api\\/userCommon\\/getAppStartAd - reject\n' +
  '\n' +
  '# > Keep\n' +
  '^https?:\\/\\/api.gotokeep.com\\/ads - reject\n' +
  '^https?:\\/\\/static1.keepcdn.com\\/.+\\d{3}x\\d{4} - reject\n' +
  '\n' +
  '# > iSafePlay\n' +
  '^https?:\\/\\/aarkissltrial.secure2.footprint.net\\/v1\\/ads - reject\n' +
  '^https?:\\/\\/rm.aarki.net\\/v1\\/ads - reject\n' +
  '\n' +
  '# > 超级课程表\n' +
  '^https?:\\/\\/182.92.244.70\\/d\\/json\\/ - reject\n' +
  '\n' +
  '# > 飞猪\n' +
  '^https?:\\/\\/acs.m.taobao.com\\/gw\\/mtop.trip.activity.querytmsresources\\/1.0\\?type=originaljson - reject\n' +
  '\n' +
  '# > Finger Driver\n' +
  '^https?:\\/\\/.+\\/videos\\/KnifeHit_4\\/gear3\\/ - reject\n' +
  '\n' +
  '# > 驾图\n' +
  '^https?:\\/\\/images.kartor.cn\\/.+.html - reject\n' +
  '\n' +
  '# > 动卡空间\n' +
  '^https?:\\/\\/m.creditcard.ecitic.com\\/citiccard\\/mbk\\/.+.\\/appStartAdv - reject\n' +
  '\n' +
  '# > 好奇心日报\n' +
  '^https?:\\/\\/app3.qdaily.com\\/app3\\/boot_advertisements.json - reject\n' +
  '\n' +
  '# > 分期乐\n' +
  '^https?:\\/\\/fm.fenqile.com\\/routev2\\/other\\/getfloatAd.json - reject\n' +
  '^https?:\\/\\/fm.fenqile.com\\/routev2\\/other\\/startImg.json - reject\n' +
  '\n' +
  '# > Vip mobile\n' +
  '^https?:\\/\\/.+\\/vips-mobile\\/router.do\\?api_key= - reject\n' +
  '\n' +
  '# > 顺丰蜂巢\n' +
  '^https?:\\/\\/consumer.fcbox.com\\/v1\\/ad\\/OpeningAdInfo\\/ - reject\n' +
  '\n' +
  '# > 威锋\n' +
  '^https?:\\/\\/api.feng.com[\\s\\S]*?Claunch_screen - reject\n' +
  '^https?:\\/\\/fengplus.feng.com\\/index.php\\?r=api\\/slide\\/.+Ads - reject\n' +
  '\n' +
  '# > 咪咕\n' +
  '^https?:\\/\\/.+\\/img\\/ad.union.api\\/ - reject\n' +
  '^https?:\\/\\/.+\\/v1\\/iflyad\\/ - reject\n' +
  '^https?:\\/\\/ggic.cmvideo.cn\\/ad\\/ - reject\n' +
  '^https?:\\/\\/ggic2.cmvideo.cn\\/ad\\/ - reject\n' +
  '^https?:\\/\\/ggv.cmvideo.cn\\/v1\\/iflyad\\/ - reject\n' +
  '\n' +
  '# > 太平洋电脑网\n' +
  '^https?:\\/\\/agent-count.pconline.com.cn\\/counter\\/adAnalyse\\/ - reject\n' +
  '^https?:\\/\\/ivy.pchouse.com.cn\\/adpuba\\/ - reject\n' +
  '\n' +
  '# > 开源中国\n' +
  '^https?:\\/\\/www.oschina.net\\/action\\/apiv2\\/get_launcher - reject\n' +
  '\n' +
  '# > ofo\n' +
  '^https?:\\/\\/activity2.api.ofo.com\\/ofo\\/Api\\/v2\\/ads - reject\n' +
  '^https?:\\/\\/ma.ofo.com\\/ads - reject\n' +
  '^https?:\\/\\/supportda.ofo.com\\/adaction\\? - reject\n' +
  '\n' +
  '# > 四季线上影视\n' +
  '^https?:\\/\\/service.4gtv.tv\\/4gtv\\/Data\\/ADLog - reject\n' +
  '^https?:\\/\\/service.4gtv.tv\\/4gtv\\/Data\\/GetAD - reject\n' +
  '\n' +
  '# > 爱回收\n' +
  '^https?:\\/\\/gw.aihuishou.com\\/app-portal\\/home\\/getadvertisement - reject\n' +
  '\n' +
  '# > 58同城\n' +
  '^https?:\\/\\/.+\\.58cdn\\.com\\.cn\\/brandads\\/ - reject\n' +
  '^https?:\\/\\/app\\.58\\.com\\/api\\/home\\/advertising\\/ - reject\n' +
  '^https?:\\/\\/app\\.58\\.com\\/api\\/home\\/appadv\\/ - reject\n' +
  '^https?:\\/\\/app\\.58\\.com\\/api\\/home\\/invite\\/popupAdv - reject\n' +
  '^https?:\\/\\/app\\.58\\.com\\/api\\/log\\/ - reject\n' +
  '\n' +
  '# > 多看\n' +
  '^https?:\\/\\/www.duokan.com\\/pictures? - reject\n' +
  '^https?:\\/\\/www.duokan.com\\/promotion_day - reject\n' +
  '\n' +
  '# > TikTok\n' +
  '^https?:\\/\\/api\\d?.tiktokv.com\\/api\\/ad\\/ - reject\n' +
  '^https?:\\/\\/api\\d?.musical.ly\\/api\\/ad\\/ - reject\n' +
  '\n' +
  '# > 漫画人\n' +
  '^https?:\\/\\/mangaapi.manhuaren.com\\/v1\\/public\\/getStartPageAds - reject\n' +
  '\n' +
  '# > 秒拍\n' +
  '^https?:\\/\\/b-api.ins.miaopai.com\\/1\\/ad\\/ - reject\n' +
  '\n' +
  '# > 迅雷\n' +
  '^https?:\\/\\/images.client.vip.xunlei.com\\/.+\\/advert\\/ - reject\n' +
  '\n' +
  '# > 天气通\n' +
  '^https?:\\/\\/tqt.weibo.cn\\/.+advert.index - reject\n' +
  '^https?:\\/\\/tqt.weibo.cn\\/overall\\/redirect.php\\?r=tqt_sdkad - reject\n' +
  '^https?:\\/\\/tqt.weibo.cn\\/overall\\/redirect.php\\?r=tqtad - reject\n' +
  '\n' +
  '# > 运动世界\n' +
  '^https?:\\/\\/.+.iydsj.com\\/api\\/.+\\/ad - reject\n' +
  '\n' +
  '# > 雅思\n' +
  '^https?:\\/\\/cdn.tiku.zhan.com\\/banner - reject\n' +
  '\n' +
  '# > 美味不用等\n' +
  '^https?:\\/\\/capi.mwee.cn\\/app-api\\/V12\\/app\\/getstartad - reject\n' +
  '\n' +
  '# > AcFun\n' +
  '^https?:\\/\\/aes.acfun.cn\\/s\\?adzones - reject\n' +
  '\n' +
  '# > 讯飞\n' +
  '^https?:\\/\\/imeclient.openspeech.cn\\/adservice\\/ - reject\n' +
  '\n' +
  '# > Yahoo\n' +
  '^https?:\\/\\/m.yap.yahoo.com\\/v18\\/getAds.do - reject\n' +
  '\n' +
  '# > 抱抱\n' +
  '^https?:\\/\\/www.myhug.cn\\/ad\\/ - reject\n' +
  '\n' +
  '# > 麻花影视\n' +
  '^https?:\\/\\/.+\\/api\\/app\\/member\\/ver2\\/user\\/login\\/ - reject\n' +
  '\n' +
  '# > 直播吧\n' +
  '^https?:\\/\\/a.qiumibao.com\\/activities\\/config.php - reject\n' +
  '^https?:\\/\\/.+\\/allOne.php\\?ad_name - reject\n' +
  '\n' +
  '# > 穷游\n' +
  '^https?:\\/\\/open.qyer.com\\/qyer\\/startpage\\/ - reject\n' +
  '^https?:\\/\\/open.qyer.com\\/qyer\\/config\\/get - reject\n' +
  '^https?:\\/\\/media.qyer.com\\/ad\\/ - reject\n' +
  '\n' +
  '# > 肆客足球\n' +
  '^https?:\\/\\/api.qiuduoduo.cn\\/guideimage - reject\n' +
  '\n' +
  '# > 萤石云视频\n' +
  '^https?:\\/\\/i.ys7.com\\/api\\/ads - reject\n' +
  '\n' +
  '# > 电视家\n' +
  '^https?:\\/\\/api.gaoqingdianshi.com\\/api\\/v2\\/ad - reject\n' +
  '\n' +
  '# > 虎扑\n' +
  '^https?:\\/\\/i\\d.hoopchina.com.cn\\/blogfile\\/\\/d+\\/\\/d+\\/BbsImg.(?<=(big.(png|jpg)))$ - reject\n' +
  '^https?:\\/\\/games.mobileapi.hupu.com\\/.+\\/(search|interfaceAdMonitor|status|hupuBbsPm)\\/(hotkey|init|hupuBbsPm). - reject\n' +
  '^https?:\\/\\/games.mobileapi.hupu.com\\/interfaceAdMonitor - reject\n' +
  '\n' +
  '# > 高德\n' +
  '^https?:\\/\\/m5.amap.com\\/ws\\/valueadded\\/ - reject\n' +
  '\n' +
  '# > 虾米音乐\n' +
  '^https?:\\/\\/pic.xiami.net\\/images\\/common\\/uploadpic[\\s\\S]*?.jpg$ - reject\n' +
  '\n' +
  '# > 作业帮\n' +
  '^https?:\\/\\/img.zuoyebang.cc\\/zyb-image[\\s\\S]*?.jpg - reject\n' +
  '\n' +
  '# > bilibili\n' +
  '^https?:\\/\\/api.bilibili.com\\/pgc\\/season\\/rank\\/cn - reject\n' +
  '^https?:\\/\\/app.bilibili.com\\/x\\/v2\\/rank.*rid=168 - reject\n' +
  '^https?:\\/\\/app.bilibili.com\\/x\\/v2\\/rank.*rid=5 - reject\n' +
  '^https?:\\/\\/app.bilibili.com\\/x\\/v2\\/search\\/defaultword - reject\n' +
  '^https?:\\/\\/app.bilibili.com\\/x\\/v2\\/search\\/hot - reject\n' +
  '^https?:\\/\\/app.bilibili.com\\/x\\/v2\\/search\\/recommend - reject\n' +
  '\n' +
  '# > 一点万象\n' +
  '^https?:\\/\\/app.mixcapp.com\\/mixc\\/api\\/v2\\/ad - reject\n' +
  '\n' +
  '# > WiFi共享大师\n' +
  '^https?:\\/\\/nochange.ggsafe.com\\/ad\\/ - reject\n' +
  '\n' +
  '# > 蜗牛睡眠\n' +
  '^https?:\\/\\/snailsleep.net\\/snail\\/v1\\/adTask\\/ - reject\n' +
  '^https?:\\/\\/snailsleep.net\\/snail\\/v1\\/screen\\/qn\\/get\\? - reject\n' +
  '\n' +
  '# > 小睡眠\n' +
  '^https?:\\/\\/api.psy-1.com\\/cosleep\\/startup - reject\n' +
  '\n' +
  '# > Yahoo!\n' +
  '^https?:\\/\\/m.yap.yahoo.com\\/v18\\/getAds.do - reject\n' +
  '\n' +
  '# > WeDoctor\n' +
  '^https?:\\/\\/app.wy.guahao.com\\/json\\/white\\/dayquestion\\/getpopad - reject\n' +
  '\n' +
  '# > 无他\n' +
  '^https?:\\/\\/api-release.wuta-cam.com\\/ad_tree - reject\n' +
  '^https?:\\/\\/res-release.wuta-cam.com\\/json\\/ads_component_cache.json - reject\n' +
  '\n' +
  '# > 向日葵\n' +
  '^https?:\\/\\/slapi.oray.net\\/client\\/ad - reject\n' +
  '\n' +
  '# > 识货\n' +
  '^https?:\\/\\/www.shihuo.cn\\/app3\\/saveAppInfo - reject\n' +
  '\n' +
  '# > AbemaTV Unlock\n' +
  '^https?:\\/\\/api.abema.io\\/v\\d\\/ip\\/check - reject\n' +
  '\n' +
  '# > Other\n' +
  '^https?:\\/\\/.+allOne.php\\?ad_name=main_splash_ios - reject\n' +
  '^https?:\\/\\/.+nga.cn.+\\bhome.+\\b=ad - reject\n' +
  '^https?:\\/\\/.+resource=article\\/recommend\\&accessToken= - reject\n' +
  '^https?:\\/\\/113.200.76.*:16420\\/sxtd.bike2.01\\/getkey.do - reject\n' +
  '^https?:\\/\\/cdn.api.fotoable.com\\/Advertise\\/ - reject\n' +
  '^https?:\\/\\/counter.ksosoft.com\\/ad.php - reject\n' +
  '^https?:\\/\\/creatives.ftimg.net\\/ads - reject\n' +
  '^https?:\\/\\/dd.iask.cn\\/ddd\\/adAudit - reject\n' +
  '^https?:\\/\\/g.tbcdn.cn\\/mtb\\/ - reject\n' +
  '^https?:\\/\\/huichuan.sm.cn\\/jsad - reject\n' +
  '^https?:\\/\\/iflow.uczzd.cn\\/log\\/ - reject\n' +
  '^https?:\\/\\/iphone265g.com\\/templates\\/iphone\\/bottomAd.js - reject\n' +
  '^https?:\\/\\/m.+.china.com.cn\\/statics\\/sdmobile\\/js\\/ad - reject\n' +
  '^https?:\\/\\/m.+.china.com.cn\\/statics\\/sdmobile\\/js\\/mobile.advert.js - reject\n' +
  '^https?:\\/\\/m.+.china.com.cn\\/statics\\/sdmobile\\/js\\/mobileshare.js - reject\n' +
  '^https?:\\/\\/m.elecfans.com\\/static\\/js\\/ad.js - reject\n' +
  '^https?:\\/\\/mobile-pic.cache.iciba.com\\/feeds_ad\\/ - reject\n' +
  '^https?:\\/\\/nga.cn.+\\bhome.+\\b=ad - reject\n' +
  '^https?:\\/\\/overseas.weico.cc\\/portal.php\\?a=get_coopen_ads - reject\n' +
  '^https?:\\/\\/player.hoge.cn\\/advertisement.swf - reject\n' +
  '^https?:\\/\\/ress.dxpmedia.com\\/appicast\\/ - reject\n' +
  '^https?:\\/\\/s3.pstatp.com\\/inapp\\/TTAdblock.css - reject\n' +
  '^https?:\\/\\/sdk.99shiji.com\\/ad\\/ - reject\n' +
  '^https?:\\/\\/statc.mytuner.mobi\\/media\\/banners\\/ - reject\n' +
  '^https?:\\/\\/static.cnbetacdn.com\\/assets\\/adv - reject\n' +
  '^https?:\\/\\/static.iask.cn\\/m-v20161228\\/js\\/common\\/adAudit.min.js - reject\n' +
  '^https?:\\/\\/v.17173.com\\/api\\/Allyes\\/ - reject\n' +
  '^https?:\\/\\/wmedia-track.uc.cn - reject\n' +
  '^https?:\\/\\/www.ft.com\\/__origami\\/service\\/image\\/v2\\/images\\/raw\\/https%3A%2F%2Fcreatives.ftimg.net%2Fads* - reject\n' +
  '^https?:\\/\\/www.lianbijr.com\\/adPage\\/ - reject'

export default URL_REWRITE
