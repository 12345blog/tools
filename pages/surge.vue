<template>
  <div class='mt-3 px-3'>
    <h1>
      Surge
    </h1>

    <b-row class='mt-3'>
      <b-col sm='2'>
        <label for='source'>输入：</label>
      </b-col>
      <b-col sm='10'>
        <b-form-textarea
          rows='3'
          id='source'
          v-model='source'
          placeholder='机场节点列表'
        ></b-form-textarea>
      </b-col>
    </b-row>

    <b-row class='mt-3'>
      <b-col sm='2'>
        <label for='configProxy'>[Proxy]</label>
      </b-col>
      <b-col sm='10'>
        <b-form-textarea
          rows='5'
          id='output'
          :value='configProxy'
          placeholder='[Proxy] 配置'
          readonly
        ></b-form-textarea>
      </b-col>
    </b-row>

    <b-row class='mt-3'>
      <b-col sm='2'>
        <label for='configProxyGroup'>[Proxy Group]</label>
      </b-col>
      <b-col sm='10'>
        <b-form-textarea
          rows='20'
          id='output'
          :value='configProxyGroup'
          placeholder='[Proxy Group] 配置'
          readonly
        ></b-form-textarea>
      </b-col>
    </b-row>

    <b-row class='mt-3'>
      <b-col sm='2'>
        <label for='config'>Config</label>
      </b-col>
      <b-col sm='10'>
        <b-form-textarea
          rows='4'
          id='config'
          v-model='config'
          placeholder='[Proxy] + [Proxy Group]'
          readonly
        ></b-form-textarea>
      </b-col>
    </b-row>

    <div class='mt-3 row'>

      <div class='col'>

        <!-- HK -->
        <b-form-group label='HK_IEPL' v-slot='{ ariaDescribedby }'>
          <b-form-checkbox-group v-model='selectedHkIepl'
                                 :options='optionsHkIepl'
                                 :aria-describedby='ariaDescribedby'
                                 name='selected-hk-iepl'
                                 stacked />
        </b-form-group>

        <b-form-group label='HK_BGP' v-slot='{ ariaDescribedby }'>
          <b-form-checkbox-group v-model='selectedHkBgp'
                                 :options='optionsHkBgp'
                                 :aria-describedby='ariaDescribedby'
                                 name='selected-hk-bgp'
                                 stacked />
        </b-form-group>

        <b-form-group label='HK_Normal' v-slot='{ ariaDescribedby }'>
          <b-form-checkbox-group v-model='selectedHkNormal'
                                 :options='optionsHkNormal'
                                 :aria-describedby='ariaDescribedby'
                                 name='selected-hk-normal'
                                 stacked />
        </b-form-group>

        <b-form-group label='HK_Cheap' v-slot='{ ariaDescribedby }'>
          <b-form-checkbox-group v-model='selectedHkCheap'
                                 :options='optionsHkCheap'
                                 :aria-describedby='ariaDescribedby'
                                 name='selected-hk-cheap'
                                 stacked />
        </b-form-group>

        <!-- US -->
        <b-form-group label='US_IEPL_BGP' v-slot='{ ariaDescribedby }'>
          <b-form-checkbox-group v-model='selectedUsIeplBgp'
                                 :options='optionsUsIeplBgp'
                                 :aria-describedby='ariaDescribedby'
                                 name='selected-us-iepl-bgp'
                                 stacked />
        </b-form-group>

        <b-form-group label='US_Normal' v-slot='{ ariaDescribedby }'>
          <b-form-checkbox-group v-model='selectedUsNormal'
                                 :options='optionsUsNormal'
                                 :aria-describedby='ariaDescribedby'
                                 name='selected-us-normal'
                                 stacked />
        </b-form-group>

        <b-form-group label='US_Cheap' v-slot='{ ariaDescribedby }'>
          <b-form-checkbox-group v-model='selectedUsCheap'
                                 :options='optionsUsCheap'
                                 :aria-describedby='ariaDescribedby'
                                 name='selected-us-cheap'
                                 stacked />
        </b-form-group>
      </div>


      <div class='col'>
        <!-- TW -->
        <b-form-group label='TW_IEPL_BGP' v-slot='{ ariaDescribedby }'>
          <b-form-checkbox-group v-model='selectedTwIeplBgp'
                                 :options='optionsTwIeplBgp'
                                 :aria-describedby='ariaDescribedby'
                                 name='selected-tw-iepl-bgp'
                                 stacked />
        </b-form-group>

        <b-form-group label='TW_Normal' v-slot='{ ariaDescribedby }'>
          <b-form-checkbox-group v-model='selectedTwNormal'
                                 :options='optionsTwNormal'
                                 :aria-describedby='ariaDescribedby'
                                 name='selected-tw-normal'
                                 stacked />
        </b-form-group>

        <!-- SG -->
        <b-form-group label='SG_IEPL_BGP' v-slot='{ ariaDescribedby }'>
          <b-form-checkbox-group v-model='selectedSgIeplBgp'
                                 :options='optionsSgIeplBgp'
                                 :aria-describedby='ariaDescribedby'
                                 name='selected-sg-iepl-bgp'
                                 stacked />
        </b-form-group>

        <b-form-group label='SG_Normal' v-slot='{ ariaDescribedby }'>
          <b-form-checkbox-group v-model='selectedSgNormal'
                                 :options='optionsSgNormal'
                                 :aria-describedby='ariaDescribedby'
                                 name='selected-sg-normal'
                                 stacked />
        </b-form-group>

        <!-- JP -->
        <b-form-group label='JP_IEPL_BGP' v-slot='{ ariaDescribedby }'>
          <b-form-checkbox-group v-model='selectedJpIeplBgp'
                                 :options='optionsJpIeplBgp'
                                 :aria-describedby='ariaDescribedby'
                                 name='selected-jp-iepl-bgp'
                                 stacked />
        </b-form-group>

        <b-form-group label='JP_Normal' v-slot='{ ariaDescribedby }'>
          <b-form-checkbox-group v-model='selectedJpNormal'
                                 :options='optionsJpNormal'
                                 :aria-describedby='ariaDescribedby'
                                 name='selected-jp-normal'
                                 stacked />
        </b-form-group>

        <!-- KR -->
        <b-form-group label='KR' v-slot='{ ariaDescribedby }'>
          <b-form-checkbox-group v-model='selectedKr'
                                 :options='optionsKr'
                                 :aria-describedby='ariaDescribedby'
                                 name='selected-kr'
                                 stacked />
        </b-form-group>

        <!-- EU -->
        <b-form-group label='EU' v-slot='{ ariaDescribedby }'>
          <b-form-checkbox-group v-model='selectedEu'
                                 :options='optionsEu'
                                 :aria-describedby='ariaDescribedby'
                                 name='selected-eu'
                                 stacked />
        </b-form-group>

        <!-- CEN -->
        <b-form-group label='CEN' v-slot='{ ariaDescribedby }'>
          <b-form-checkbox-group v-model='selectedCen'
                                 :options='optionsCen'
                                 :aria-describedby='ariaDescribedby'
                                 name='selected-eu'
                                 stacked />
        </b-form-group>


        <!-- EXPENSIVE -->
        <b-form-group label='EXPENSIVE' v-slot='{ ariaDescribedby }'>
          <b-form-checkbox-group v-model='selectedExpensive'
                                 :options='optionsExpensive'
                                 :aria-describedby='ariaDescribedby'
                                 name='selected-eu'
                                 stacked />
        </b-form-group>

        <!-- SPEC -->
        <b-form-group label='SPEC' v-slot='{ ariaDescribedby }'>
          <b-form-checkbox-group v-model='selectedSpec'
                                 :options='optionsSpec'
                                 :aria-describedby='ariaDescribedby'
                                 name='selected-spec'
                                 stacked
          ></b-form-checkbox-group>
        </b-form-group>

      </div>

      <!-- Normal -->
      <div class='col'>
        <b-form-group label='NORMAL' v-slot='{ ariaDescribedby }'>
          <b-form-checkbox-group v-model='selectedNormal'
                                 :options='optionsNormal'
                                 :aria-describedby='ariaDescribedby'
                                 name='selected-others'
                                 stacked />
        </b-form-group>
      </div>

      <!-- All -->
      <div class='col'>
        <b-form-group label='ALL' v-slot='{ ariaDescribedby }'>
          <b-form-checkbox-group v-model='selectedAll'
                                 :options='optionsAll'
                                 :aria-describedby='ariaDescribedby'
                                 name='selected-others'
                                 stacked />
        </b-form-group>
      </div>


    </div>
  </div>
</template>

<script>


const PATT_EXPENSIVE = /\[[1-9].[0-9]\]/
const PATT_CHEAP = /\[0.[0-9]\]/
const URL_TEST = [
  'url=http://cp.cloudflare.com/generate_204',
  'interval=3600',
  'tolerance=100',
]

const FLAGS = [
  { key: '港', emoji: '🇭🇰 ' },
  { key: '美', emoji: '🇺🇸 ' },
  { key: '台', emoji: '🇨🇳 ' },
  { key: '新', emoji: '🇸🇬 ' },
  { key: '日', emoji: '🇯🇵 ' },
  { key: '韩', emoji: '🇰🇷 ' },
  { key: '德', emoji: '🇩🇪 ' },
  { key: '英', emoji: '🇬🇧 ' },
  { key: '法', emoji: '🇫🇷 ' },
  { key: '印', emoji: '🇮🇳 ' },
  { key: '泰', emoji: '🇹🇭 ' },
  { key: '俄', emoji: '🇷🇺 ' },
  { key: '土澳', emoji: '🇦🇺 ' },
  { key: '澳大利亚', emoji: '🇦🇺 ' },
  { key: '加拿大', emoji: '🇨🇦 ' },
  { key: '土耳其', emoji: '🇹🇷 ' },
  { key: '阿根廷', emoji: '🇦🇷 ' },
  { key: '墨西哥', emoji: '🇲🇽 ' },
  { key: '巴西', emoji: '🇧🇷 ' },
  { key: '马来', emoji: '🇲🇾 ' },
  { key: '迪拜', emoji: '🇦🇪 ' }
]

const HK = ['HK_IEPL', 'HK_BGP', 'HK_Normal', 'HK_Cheap']
const US = ['US_IEPL_BGP', 'US_Normal', 'US_Normal']
const TW = ['TW_IEPL_BGP', 'TW_Normal']
const SG = ['SG_IEPL_BGP', 'SG_Normal']
const JP = ['JP_IEPL_BGP', 'JP_Normal']
const KR = ['KR']
const EU = ['EU']
const CEN = ['CEN']
const EXPENSIVE = ['EXPENSIVE']
const SPEC = ['SPEC']
const NORMAL = ['NORMAL']
const AUTO = ['AUTO']
const ONE = ['ONE']


const formatLine = function(line) {
  line = line.trim()

  if (line) {
    if (line.indexOf('->') < 0) {
      for (let i = 0; i < FLAGS.length; i++) {
        if (line.search(FLAGS[i].key) !== -1 && !line.startsWith(FLAGS[i].emoji)) {
          return FLAGS[i].emoji + line
        }
      }
    }

    return line
  }

  return null
}

export default {
  name: 'surge',
  data() {
    return {
      source: '',

      selectedSpec: [],

      selectedHkIepl: [],
      selectedHkBgp: [],
      selectedHkNormal: [],
      selectedHkCheap: [],

      selectedUsIeplBgp: [],
      selectedUsNormal: [],
      selectedUsCheap: [],

      selectedTwIeplBgp: [],
      selectedTwNormal: [],

      selectedSgIeplBgp: [],
      selectedSgNormal: [],

      selectedJpIeplBgp: [],
      selectedJpNormal: [],

      selectedKr: [],
      selectedEu: [],
      selectedCen: [],
      selectedExpensive: [],

      selectedAll: [],
      selectedNormal: []
    }
  },
  watch: {
    source() {
      let lines = []

      this.source.split('\n').forEach(function(line) {
        line = formatLine(line)
        if (line) {
          lines.push(line)
        }

        console.log(line)
      })

      this.source = lines.join('\n')
    }
  },
  computed: {
    config() {
      return this.configGeneral + '\n\n' + this.configReplica + '\n\n' + this.configProxy + '\n\n' + this.configProxyGroup
    },
    configGeneral() {
      let configGeneral = [
        '[General]',
        'bypass-system = true',
        'loglevel = notify',
        'replica = false',
        'dns-server = 119.29.29.29, 223.5.5.5, 223.6.6.6, system',
        'skip-proxy = 127.0.0.1, 192.168.0.0/16, 10.0.0.0/8, 172.16.0.0/12, 100.64.0.0/10, localhost, *.local, *.crashlytics.com, *.edu.cn',
        'tun-excluded-routes = 192.168.0.0/16, 10.0.0.0/8, 172.16.0.0/12',
        'tun-included-routes = 192.168.1.12/32',
        'always-real-ip = *.srv.nintendo.net, *.stun.playstation.net, xbox.*.microsoft.com, *.xboxlive.com',
        'hijack-dns = 8.8.8.8:53, 8.8.4.4:53',
        'http-listen = 0.0.0.0:8888',
        'socks5-listen = 0.0.0.0:8889',
        'wifi-access-http-port = 8888',
        'wifi-access-socks5-port = 8889',
        'external-controller-access = 24xcLLLiiqv6DCWTWmFtZJRA@0.0.0.0:6170',
        'internet-test-url = http://wifi.vivo.com.cn/generate_204',
        'proxy-test-url = http://cp.cloudflare.com/generate_204',
        'test-timeout = 5',
        'allow-wifi-access = true',
        'exclude-simple-hostnames = true',
        'ipv6 = false',
        'network-framework = false',
        'show-error-page-for-reject = true',
        'tls-provider = default',
        'use-default-policy-if-wifi-not-primary = false',
        '# wifi-assist = true',
        'geoip-maxmind-url = https://cdn.jsdelivr.net/gh/Hackl0us/GeoIP2-CN@release/Country.mmdb',
        'doh-server = https://dns.alidns.com/dns-query',
      ]

      return configGeneral.join('\n')
    },
    configReplica() {
      let configReplica = [
        '[Replica]',
        'hide-apple-request = true',
        'hide-crashlytics-request = true',
        'hide-udp = false',
        'keyword-filter-type = none',
        'hide-crash-reporter-request = 1',
      ]

      return configReplica.join('\n')
    },

    configProxy() {
      let configProxy = [
        '[Proxy]',
        'Direct = direct',
        'Reject = reject',
        'TinyGIF = reject-tinygif'
      ]

      configProxy.push(this.source)

      return configProxy.join('\n')
    },
    configProxyGroup() {
      const proxy = ['select'].concat(HK, US, TW, SG, JP, KR, EU, CEN, EXPENSIVE, SPEC, NORMAL, AUTO, ONE)
      const domestic = ['select', 'Direct', 'Proxy']
      const adBlock = ['select', 'TinyGIF', 'Reject', 'Domestic', 'Proxy', 'HK_Cheap']
      const asianTV = ['select', 'Domestic'].concat(HK, TW, SG, JP, KR)
      const globalTV = ['select'].concat(HK, US, TW, SG, JP, KR, EU, CEN, NORMAL, AUTO, ONE, ['Domestic'])
      const apple = ['select', 'Domestic'].concat(HK, US, TW, SG, JP, KR, EU, NORMAL, AUTO, ONE)
      const microsoft = ['select', 'Domestic'].concat(HK, US, TW, SG, JP, KR, EU, NORMAL, AUTO, ONE)
      const google = ['select'].concat(HK, US, TW, SG, JP, KR, EU, NORMAL, AUTO, ONE, ['Domestic'])
      const telegram = ['select'].concat(EU, HK, US, TW, SG, JP, KR, NORMAL, AUTO, ONE, ['Domestic'])
      const payPal = ['select'].concat(HK, US, TW, SG, JP, KR, EU, NORMAL, AUTO, ONE, ['Domestic'])
      const steam = ['select'].concat(HK, US, TW, SG, JP, KR, EU, NORMAL, AUTO, ONE, ['Domestic'])
      const netflix = ['select'].concat(HK, US, TW, SG, JP, KR, EU, NORMAL, AUTO, ONE, ['Domestic'])
      const youTube = ['select'].concat(US, HK, TW, SG, JP, KR, EU, NORMAL, AUTO, ONE, ['Domestic'])
      const spotify = ['select'].concat(US, HK, TW, SG, JP, KR, EU, NORMAL, AUTO, ONE, ['Domestic'])
      const disney = ['select'].concat(US, HK, TW, SG, JP, KR, EU, NORMAL, AUTO, ONE, ['Domestic'])
      const speedTest = ['select', 'Direct'].concat(this.selectedAll)
      const hkIepl = ['url-test'].concat(this.selectedHkIepl, URL_TEST)
      const hkBgp = ['url-test'].concat(this.selectedHkBgp, URL_TEST)
      const hkNormal = ['url-test'].concat(this.selectedHkNormal, URL_TEST)
      const hkCheap = ['url-test'].concat(this.selectedHkCheap, URL_TEST)
      const usIeplBgp = ['url-test'].concat(this.selectedUsIeplBgp, URL_TEST)
      const usNormal = ['url-test'].concat(this.selectedUsNormal, URL_TEST)
      const usCheap = ['url-test'].concat(this.selectedUsCheap, URL_TEST)
      const twIeplBgp = ['url-test'].concat(this.selectedTwIeplBgp, URL_TEST)
      const twNormal = ['url-test'].concat(this.selectedTwNormal, URL_TEST)
      const sgIeplBgp = ['url-test'].concat(this.selectedSgIeplBgp, URL_TEST)
      const sgNormal = ['url-test'].concat(this.selectedSgNormal, URL_TEST)
      const jpIeplBgp = ['url-test'].concat(this.selectedJpIeplBgp, URL_TEST)
      const jpNormal = ['url-test'].concat(this.selectedJpNormal, URL_TEST)
      const kr = ['url-test'].concat(this.selectedKr, URL_TEST)
      const eu = ['url-test'].concat(this.selectedEu, URL_TEST)
      const cen = ['select'].concat(this.selectedCen)
      const expensive = ['select'].concat(this.selectedExpensive)
      const spec = ['url-test'].concat(this.selectedSpec, URL_TEST)
      const normal = ['url-test'].concat(this.selectedNormal, URL_TEST)
      const auto = ['url-test'].concat(this.selectedAll, URL_TEST)
      const one = ['select'].concat(this.selectedAll)

      return [
        '[Proxy Group]',
        'Proxy = ' + proxy.join(', '),
        'Domestic = ' + domestic.join(', '),
        'AdBlock = ' + adBlock.join(', '),
        'AsianTV = ' + asianTV.join(', '),
        'GlobalTV = ' + globalTV.join(', '),
        'Apple = ' + apple.join(', '),
        'Microsoft = ' + microsoft.join(', '),
        'Google = ' + google.join(', '),
        'Telegram = ' + telegram.join(', '),
        'PayPal = ' + payPal.join(', '),
        'Steam = ' + steam.join(', '),
        'Netflix = ' + netflix.join(', '),
        'YouTube = ' + youTube.join(', '),
        'Spotify = ' + spotify.join(', '),
        'Disney = ' + disney.join(', '),
        'SpeedTest = ' + speedTest.join(', '),
        //
        'HK_IEPL = ' + hkIepl.join(', '),
        'HK_BGP = ' + hkBgp.join(', '),
        'HK_Normal = ' + hkNormal.join(', '),
        'HK_Cheap = ' + hkCheap.join(', '),
        'US_IEPL_BGP = ' + usIeplBgp.join(', '),
        'US_Normal = ' + usNormal.join(', '),
        'US_Cheap = ' + usCheap.join(', '),
        'TW_IEPL_BGP = ' + twIeplBgp.join(', '),
        'TW_Normal = ' + twNormal.join(', '),
        'SG_IEPL_BGP = ' + sgIeplBgp.join(', '),
        'SG_Normal = ' + sgNormal.join(', '),
        'JP_IEPL_BGP = ' + jpIeplBgp.join(', '),
        'JP_Normal = ' + jpNormal.join(', '),
        'KR = ' + kr.join(', '),
        'EU = ' + eu.join(', '),
        'CEN = ' + cen.join(', '),
        'EXPENSIVE = ' + expensive.join(', '),
        'SPEC = ' + spec.join(', '),
        'NORMAL = ' + normal.join(', '),
        'AUTO = ' + auto.join(', '),
        'ONE = ' + one.join(', '),
      ].join('\n')
    },
    options() {
      let sourceList = []

      this.source.split('\n').forEach(function(line) {
        line = line.trim()
        if (line) {
          const title = line.split(',')[0].split('=')[0].trim()

          sourceList.push({
            text: title,
            value: title
          })
        }
      })

      return sourceList
    },

    // HK
    optionsHkIepl() {
      this.selectedHkIepl = []

      let options = []
      for (let i = 0; i < this.options.length; i++) {
        if (
          this.options[i].text.indexOf('港') !== -1
          &&
          this.options[i].text.indexOf('IEPL') !== -1
          &&
          this.options[i].text.indexOf('->') < 0
          &&
          this.options[i].text.search(PATT_EXPENSIVE) < 0
        ) {
          options.push(this.options[i])
          this.selectedHkIepl.push(this.options[i].text)
        }
      }

      return options
    },
    optionsHkBgp() {
      this.selectedHkBgp = []

      let options = []
      for (let i = 0; i < this.options.length; i++) {
        if (
          this.options[i].text.indexOf('港') !== -1
          &&
          this.options[i].text.indexOf('BGP') !== -1
          &&
          this.options[i].text.indexOf('->') < 0
          &&
          this.options[i].text.search(PATT_EXPENSIVE) < 0
        ) {
          options.push(this.options[i])
          this.selectedHkBgp.push(this.options[i].text)
        }
      }

      return options
    },
    optionsHkNormal() {
      this.selectedHkNormal = []

      let options = []
      for (let i = 0; i < this.options.length; i++) {
        if (
          this.options[i].text.indexOf('港') !== -1
          &&
          this.options[i].text.indexOf('IEPL') < 0
          &&
          this.options[i].text.indexOf('BGP') < 0
          &&
          this.options[i].text.indexOf('CEN') < 0
          &&
          this.options[i].text.indexOf('->') < 0
          &&
          this.options[i].text.search(PATT_EXPENSIVE) < 0
        ) {
          options.push(this.options[i])
          this.selectedHkNormal.push(this.options[i].text)
        }
      }

      return options
    },
    optionsHkCheap() {
      this.selectedHkCheap = []

      let options = []
      for (let i = 0; i < this.options.length; i++) {
        if (
          this.options[i].text.indexOf('港') !== -1
          &&
          this.options[i].text.indexOf('->') < 0
          &&
          this.options[i].text.search(PATT_CHEAP) !== -1
        ) {
          options.push(this.options[i])
          this.selectedHkCheap.push(this.options[i].text)
        }
      }

      return options
    },

    // US
    optionsUsIeplBgp() {
      this.selectedUsIeplBgp = []

      let options = []
      for (let i = 0; i < this.options.length; i++) {
        if (
          this.options[i].text.indexOf('美') !== -1
          &&
          (
            this.options[i].text.indexOf('IEPL') !== -1
            ||
            this.options[i].text.indexOf('BGP') !== -1
          )
          &&
          this.options[i].text.indexOf('->') < 0
          &&
          this.options[i].text.search(PATT_EXPENSIVE) < 0
        ) {
          options.push(this.options[i])
          this.selectedUsIeplBgp.push(this.options[i].text)
        }
      }

      return options
    },
    optionsUsNormal() {
      this.selectedUsNormal = []

      let options = []
      for (let i = 0; i < this.options.length; i++) {
        if (
          this.options[i].text.indexOf('美') !== -1
          &&
          this.options[i].text.indexOf('IEPL') < 0
          &&
          this.options[i].text.indexOf('BGP') < 0
          &&
          this.options[i].text.indexOf('CEN') < 0
          &&
          this.options[i].text.indexOf('->') < 0
          &&
          this.options[i].text.search(PATT_EXPENSIVE) < 0
        ) {
          options.push(this.options[i])
          this.selectedUsNormal.push(this.options[i].text)
        }
      }

      return options
    },
    optionsUsCheap() {
      this.selectedUsCheap = []

      let options = []
      for (let i = 0; i < this.options.length; i++) {
        if (
          this.options[i].text.indexOf('美') !== -1
          &&
          this.options[i].text.indexOf('->') < 0
          &&
          this.options[i].text.search(PATT_CHEAP) !== -1
        ) {
          options.push(this.options[i])
          this.selectedUsCheap.push(this.options[i].text)
        }
      }

      return options
    },

    // TW
    optionsTwIeplBgp() {
      this.selectedTwIeplBgp = []

      let options = []
      for (let i = 0; i < this.options.length; i++) {
        if (
          this.options[i].text.indexOf('台') !== -1
          &&
          (
            this.options[i].text.indexOf('IEPL') !== -1
            ||
            this.options[i].text.indexOf('BGP') !== -1
          )
          &&
          this.options[i].text.indexOf('->') < 0
          &&
          this.options[i].text.search(PATT_EXPENSIVE) < 0
        ) {
          options.push(this.options[i])
          this.selectedTwIeplBgp.push(this.options[i].text)
        }
      }

      return options
    },
    optionsTwNormal() {
      this.selectedTwNormal = []

      let options = []
      for (let i = 0; i < this.options.length; i++) {
        if (
          this.options[i].text.indexOf('台') !== -1
          &&
          this.options[i].text.indexOf('IEPL') < 0
          &&
          this.options[i].text.indexOf('BGP') < 0
          &&
          this.options[i].text.indexOf('CEN') < 0
          &&
          this.options[i].text.indexOf('->') < 0
          &&
          this.options[i].text.search(PATT_EXPENSIVE) < 0
        ) {
          options.push(this.options[i])
          this.selectedTwNormal.push(this.options[i].text)
        }
      }

      return options
    },

    // SG
    optionsSgIeplBgp() {
      this.selectedSgIeplBgp = []

      let options = []
      for (let i = 0; i < this.options.length; i++) {
        if (
          this.options[i].text.indexOf('新') !== -1
          &&
          (
            this.options[i].text.indexOf('IEPL') !== -1
            ||
            this.options[i].text.indexOf('BGP') !== -1
          )
          &&
          this.options[i].text.indexOf('->') < 0
          &&
          this.options[i].text.search(PATT_EXPENSIVE) < 0
        ) {
          options.push(this.options[i])
          this.selectedSgIeplBgp.push(this.options[i].text)
        }
      }

      return options
    },
    optionsSgNormal() {
      this.selectedSgNormal = []

      let options = []
      for (let i = 0; i < this.options.length; i++) {
        if (
          this.options[i].text.indexOf('新') !== -1
          &&
          this.options[i].text.indexOf('IEPL') < 0
          &&
          this.options[i].text.indexOf('BGP') < 0
          &&
          this.options[i].text.indexOf('CEN') < 0
          &&
          this.options[i].text.indexOf('->') < 0
          &&
          this.options[i].text.search(PATT_EXPENSIVE) < 0
        ) {
          options.push(this.options[i])
          this.selectedSgNormal.push(this.options[i].text)
        }
      }

      return options
    },

    // JP
    optionsJpIeplBgp() {
      this.selectedJpIeplBgp = []

      let options = []
      for (let i = 0; i < this.options.length; i++) {
        if (
          this.options[i].text.indexOf('日') !== -1
          &&
          (
            this.options[i].text.indexOf('IEPL') !== -1
            ||
            this.options[i].text.indexOf('BGP') !== -1
          )
          &&
          this.options[i].text.indexOf('->') < 0
          &&
          this.options[i].text.search(PATT_EXPENSIVE) < 0
        ) {
          options.push(this.options[i])
          this.selectedJpIeplBgp.push(this.options[i].text)
        }
      }

      return options
    },
    optionsJpNormal() {
      this.selectedJpNormal = []

      let options = []
      for (let i = 0; i < this.options.length; i++) {
        if (
          this.options[i].text.indexOf('日') !== -1
          &&
          this.options[i].text.indexOf('IEPL') < 0
          &&
          this.options[i].text.indexOf('BGP') < 0
          &&
          this.options[i].text.indexOf('CEN') < 0
          &&
          this.options[i].text.indexOf('->') < 0
          &&
          this.options[i].text.search(PATT_EXPENSIVE) < 0
        ) {
          options.push(this.options[i])
          this.selectedJpNormal.push(this.options[i].text)
        }
      }

      return options
    },

    // KR
    optionsKr() {
      this.selectedKr = []

      let options = []
      for (let i = 0; i < this.options.length; i++) {
        if (
          this.options[i].text.indexOf('韩') !== -1
          &&
          this.options[i].text.indexOf('CEN') < 0
          &&
          this.options[i].text.indexOf('->') < 0
          &&
          this.options[i].text.search(PATT_EXPENSIVE) < 0
        ) {
          options.push(this.options[i])
          this.selectedKr.push(this.options[i].text)
        }
      }

      return options
    },

    // EU
    optionsEu() {
      this.selectedEu = []

      let options = []
      for (let i = 0; i < this.options.length; i++) {
        if (
          (
            this.options[i].text.indexOf('德') !== -1
            ||
            this.options[i].text.indexOf('英') !== -1
            ||
            this.options[i].text.indexOf('法') !== -1
          )
          &&
          this.options[i].text.indexOf('CEN') < 0
          &&
          this.options[i].text.indexOf('->') < 0
          &&
          this.options[i].text.search(PATT_EXPENSIVE) < 0

        ) {
          options.push(this.options[i])
          this.selectedEu.push(this.options[i].text)
        }
      }

      return options
    },

    // Cen
    optionsCen() {
      this.selectedCen = []

      let options = []
      for (let i = 0; i < this.options.length; i++) {
        if (
          this.options[i].text.indexOf('CEN') !== -1
        ) {
          options.push(this.options[i])
          this.selectedCen.push(this.options[i].text)
        }
      }

      return options
    },

    // Expensive
    optionsExpensive() {
      this.selectedExpensive = []

      let options = []
      for (let i = 0; i < this.options.length; i++) {
        if (
          this.options[i].text.search(PATT_EXPENSIVE) !== -1
        ) {
          options.push(this.options[i])
          this.selectedExpensive.push(this.options[i].text)
        }
      }

      return options
    },

    // Normal
    optionsNormal() {
      this.selectedNormal = []

      let options = []
      for (let i = 0; i < this.options.length; i++) {
        if (
          this.options[i].text.indexOf('IEPL') < 0
          &&
          this.options[i].text.indexOf('BGP') < 0
          &&
          this.options[i].text.indexOf('CEN') < 0
          &&
          this.options[i].text.indexOf('->') < 0
          &&
          this.options[i].text.indexOf('俄') < 0
          &&
          this.options[i].text.indexOf('印') < 0
          &&
          this.options[i].text.indexOf('菲') < 0
          &&
          this.options[i].text.indexOf('澳大利亚') < 0
          &&
          this.options[i].text.search(PATT_EXPENSIVE) < 0
        ) {
          options.push(this.options[i])
          this.selectedNormal.push(this.options[i].text)
        }
      }

      return options
    },

    // All
    optionsAll() {
      this.selectedAll = []

      let a = []
      let b = []
      let c = []
      let selectedA = []
      let selectedB = []
      let selectedC = []
      for (let i = 0; i < this.options.length; i++) {
        if (
          this.options[i].text.indexOf('->') < 0
          &&
          this.options[i].text.indexOf('俄') < 0
          &&
          this.options[i].text.indexOf('印') < 0
          &&
          this.options[i].text.indexOf('菲') < 0
          &&
          this.options[i].text.indexOf('澳大利亚') < 0
          &&
          this.options[i].text.search(PATT_EXPENSIVE) < 0
        ) {
          if (this.options[i].text.indexOf('IEPL') !== -1) {
            a.push(this.options[i])
            selectedA.push(this.options[i].text)
          } else if (this.options[i].text.indexOf('BGP') !== -1) {
            b.push(this.options[i])
            selectedB.push(this.options[i].text)
          } else {
            c.push(this.options[i])
            selectedC.push(this.options[i].text)
          }
        }
      }

      this.selectedAll = selectedA.concat(selectedB, selectedC)

      return a.concat(b, c)
    },

    // SPEC
    optionsSpec() {
      this.selectedSpec = []

      let options = []
      for (let i = 0; i < this.options.length; i++) {
        if (this.options[i].text.indexOf('->') !== -1) {
          options.push(this.options[i])
          this.selectedSpec.push(this.options[i].text)
        }
      }

      return options
    },


  }
}
</script>
