<template>
  <div class="mt-3 px-3">
    <h1>纯前端的 Surge 配置生成工具</h1>

    <p class="mt-3">
      已在
      <a target="_blank" href="https://github.com/12345blog/tools">GitHub</a>
      开源，<a
        target="_blank"
        href="https://github.com/12345blog/tools#1-%E7%BA%AF%E5%89%8D%E7%AB%AF%E7%9A%84-surge-%E9%85%8D%E7%BD%AE%E7%94%9F%E6%88%90%E5%B7%A5%E5%85%B7"
        >查看说明？点此</a
      >
    </p>

    <b-row class="mt-5">
      <b-col sm="2">
        <label for="source">粘入机场节点列表内容</label>
      </b-col>
      <b-col sm="10">
        <b-form-textarea
          rows="3"
          id="source"
          v-model="source"
          placeholder="机场节点列表。文本，逐行"
        ></b-form-textarea>
      </b-col>
    </b-row>

    <b-row class="mt-3">
      <b-col sm="2">
        <label for="configProxy">[Proxy]</label>
      </b-col>
      <b-col sm="10">
        <b-form-textarea
          rows="5"
          id="output"
          :value="configProxy"
          readonly
        ></b-form-textarea>
      </b-col>
    </b-row>

    <b-row class="mt-3">
      <b-col sm="2">
        <label for="configProxyGroup">[Proxy Group]</label>
      </b-col>
      <b-col sm="10">
        <b-form-textarea
          rows="25"
          id="output"
          :value="configProxyGroup"
          readonly
        ></b-form-textarea>
      </b-col>
    </b-row>

    <b-row class="mt-3">
      <b-col sm="2">
        <label for="config"
          >已生成配置文本：General, Replica, Proxy, Proxy Group, Rule, Host, URL
          Rewrite, Script, MITM</label
        >
      </b-col>
      <b-col sm="10">
        <b-form-textarea
          rows="4"
          id="config"
          v-model="config"
          readonly
        ></b-form-textarea>
      </b-col>
    </b-row>

    <div class="mt-3 row">
      <div class="col">
        <!-- HK_IEPL -->
        <b-form-group v-show="optionsHkIepl.length">
          <template #label>
            <b-form-checkbox
              v-model="selectedHkIeplAll"
              aria-describedby="selected-hk-iepl"
              aria-controls="selected-hk-iepl"
              @change="toggleSelectedHkIeplAll"
            >
              <b>HK_IEPL</b>
            </b-form-checkbox>
          </template>

          <template v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group
              id="selected-hk-iepl"
              v-model="selectedHkIepl"
              :options="optionsHkIepl"
              :aria-describedby="ariaDescribedby"
              name="selected-hk-iepl"
              class="ml-2"
              stacked
            />
          </template>
        </b-form-group>

        <!-- HK_BGP -->
        <b-form-group v-show="optionsHkBgp.length">
          <template #label>
            <b-form-checkbox
              v-model="selectedHkBgpAll"
              aria-describedby="selected-hk-bgp"
              aria-controls="selected-hk-bgp"
              @change="toggleSelectedHkBgpAll"
            >
              <b>HK_BGP</b>
            </b-form-checkbox>
          </template>

          <template v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group
              id="selected-hk-bgp"
              v-model="selectedHkBgp"
              :options="optionsHkBgp"
              :aria-describedby="ariaDescribedby"
              name="selected-hk-bgp"
              class="ml-2"
              stacked
            />
          </template>
        </b-form-group>

        <!-- HK_Normal -->
        <b-form-group v-show="optionsHkNormal.length">
          <template #label>
            <b-form-checkbox
              v-model="selectedHkNormalAll"
              aria-describedby="selected-hk-normal"
              aria-controls="selected-hk-normal"
              @change="toggleSelectedHkNormalAll"
            >
              <b>HK_Normal</b>
            </b-form-checkbox>
          </template>

          <template v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group
              id="selected-hk-normal"
              v-model="selectedHkNormal"
              :options="optionsHkNormal"
              :aria-describedby="ariaDescribedby"
              name="selected-hk-normal"
              class="ml-2"
              stacked
            />
          </template>
        </b-form-group>

        <!-- HK_Cheap -->
        <b-form-group v-show="optionsHkCheap.length">
          <template #label>
            <b-form-checkbox
              v-model="selectedHkCheapAll"
              aria-describedby="selected-hk-cheap"
              aria-controls="selected-hk-cheap"
              @change="toggleSelectedHkCheapAll"
            >
              <b>HK_Cheap</b>
            </b-form-checkbox>
          </template>

          <template v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group
              id="selected-hk-cheap"
              v-model="selectedHkCheap"
              :options="optionsHkCheap"
              :aria-describedby="ariaDescribedby"
              name="selected-hk-cheap"
              class="ml-2"
              stacked
            />
          </template>
        </b-form-group>

        <!-- TW_IEPL_BGP -->
        <b-form-group v-show="optionsTwIeplBgp.length">
          <template #label>
            <b-form-checkbox
              v-model="selectedTwIeplBgpAll"
              aria-describedby="selected-tw-iepl-bgp"
              aria-controls="selected-tw-iepl-bgp"
              @change="toggleSelectedTwIeplBgpAll"
            >
              <b>TW_IEPL_BGP</b>
            </b-form-checkbox>
          </template>

          <template v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group
              id="selected-tw-iepl-bgp"
              v-model="selectedTwIeplBgp"
              :options="optionsTwIeplBgp"
              :aria-describedby="ariaDescribedby"
              name="selected-tw-iepl-bgp"
              class="ml-2"
              stacked
            />
          </template>
        </b-form-group>

        <!-- TW_Normal -->
        <b-form-group v-show="optionsTwNormal.length">
          <template #label>
            <b-form-checkbox
              v-model="selectedTwNormalAll"
              aria-describedby="selected-tw-normal"
              aria-controls="selected-tw-normal"
              @change="toggleSelectedTwNormalAll"
            >
              <b>TW_Normal</b>
            </b-form-checkbox>
          </template>

          <template v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group
              id="selected-tw-normal"
              v-model="selectedTwNormal"
              :options="optionsTwNormal"
              :aria-describedby="ariaDescribedby"
              name="selected-tw-normal"
              class="ml-2"
              stacked
            />
          </template>
        </b-form-group>

        <!-- TW_Cheap -->
        <b-form-group v-show="optionsTwCheap.length">
          <template #label>
            <b-form-checkbox
              v-model="selectedTwCheapAll"
              aria-describedby="selected-tw-cheap"
              aria-controls="selected-tw-cheap"
              @change="toggleSelectedTwCheapAll"
            >
              <b>TW_Cheap</b>
            </b-form-checkbox>
          </template>

          <template v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group
              id="selected-tw-cheap"
              v-model="selectedTwCheap"
              :options="optionsTwCheap"
              :aria-describedby="ariaDescribedby"
              name="selected-tw-cheap"
              class="ml-2"
              stacked
            />
          </template>
        </b-form-group>
      </div>

      <div class="col">
        <!-- US_IEPL_BGP -->
        <b-form-group v-show="optionsUsIeplBgp.length">
          <template #label>
            <b-form-checkbox
              v-model="selectedUsIeplBgpAll"
              aria-describedby="selected-us-iepl-bgp"
              aria-controls="selected-us-iepl-bgp"
              @change="toggleSelectedUsIeplBgpAll"
            >
              <b>US_IEPL_BGP</b>
            </b-form-checkbox>
          </template>

          <template v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group
              id="selected-us-iepl-bgp"
              v-model="selectedUsIeplBgp"
              :options="optionsUsIeplBgp"
              :aria-describedby="ariaDescribedby"
              name="selected-us-iepl-bgp"
              class="ml-2"
              stacked
            />
          </template>
        </b-form-group>

        <!-- US_Normal -->
        <b-form-group v-show="optionsUsNormal.length">
          <template #label>
            <b-form-checkbox
              v-model="selectedUsNormalAll"
              aria-describedby="selected-us-normal"
              aria-controls="selected-us-normal"
              @change="toggleSelectedUsNormalAll"
            >
              <b>US_Normal</b>
            </b-form-checkbox>
          </template>

          <template v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group
              id="selected-us-normal"
              v-model="selectedUsNormal"
              :options="optionsUsNormal"
              :aria-describedby="ariaDescribedby"
              name="selected-us-normal"
              class="ml-2"
              stacked
            />
          </template>
        </b-form-group>

        <!-- US_Cheap -->
        <b-form-group v-show="optionsUsCheap.length">
          <template #label>
            <b-form-checkbox
              v-model="selectedUsCheapAll"
              aria-describedby="selected-us-cheap"
              aria-controls="selected-us-cheap"
              @change="toggleSelectedUsCheapAll"
            >
              <b>US_Cheap</b>
            </b-form-checkbox>
          </template>

          <template v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group
              id="selected-us-cheap"
              v-model="selectedUsCheap"
              :options="optionsUsCheap"
              :aria-describedby="ariaDescribedby"
              name="selected-us-cheap"
              class="ml-2"
              stacked
            />
          </template>
        </b-form-group>

        <!-- SG_IEPL_BGP -->
        <b-form-group v-show="optionsSgIeplBgp.length">
          <template #label>
            <b-form-checkbox
              v-model="selectedSgIeplBgpAll"
              aria-describedby="selected-sg-iepl-bgp"
              aria-controls="selected-sg-iepl-bgp"
              @change="toggleSelectedSgIeplBgpAll"
            >
              <b>SG_IEPL_BGP</b>
            </b-form-checkbox>
          </template>

          <template v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group
              id="selected-sg-iepl-bgp"
              v-model="selectedSgIeplBgp"
              :options="optionsSgIeplBgp"
              :aria-describedby="ariaDescribedby"
              name="selected-sg-iepl-bgp"
              class="ml-2"
              stacked
            />
          </template>
        </b-form-group>

        <!-- SG_Normal -->
        <b-form-group v-show="optionsSgNormal.length">
          <template #label>
            <b-form-checkbox
              v-model="selectedSgNormalAll"
              aria-describedby="selected-sg-normal"
              aria-controls="selected-sg-normal"
              @change="toggleSelectedSgNormalAll"
            >
              <b>SG_Normal</b>
            </b-form-checkbox>
          </template>

          <template v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group
              id="selected-sg-normal"
              v-model="selectedSgNormal"
              :options="optionsSgNormal"
              :aria-describedby="ariaDescribedby"
              name="selected-sg-normal"
              class="ml-2"
              stacked
            />
          </template>
        </b-form-group>

        <!-- SG_Cheap -->
        <b-form-group v-show="optionsSgCheap.length">
          <template #label>
            <b-form-checkbox
              v-model="selectedSgCheapAll"
              aria-describedby="selected-sg-cheap"
              aria-controls="selected-sg-cheap"
              @change="toggleSelectedSgCheapAll"
            >
              <b>SG_Cheap</b>
            </b-form-checkbox>
          </template>

          <template v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group
              id="selected-sg-cheap"
              v-model="selectedSgCheap"
              :options="optionsSgCheap"
              :aria-describedby="ariaDescribedby"
              name="selected-sg-cheap"
              class="ml-2"
              stacked
            />
          </template>
        </b-form-group>

        <!-- JP_IEPL_BGP -->
        <b-form-group v-show="optionsJpIeplBgp.length">
          <template #label>
            <b-form-checkbox
              v-model="selectedJpIeplBgpAll"
              aria-describedby="selected-jp-iepl-bgp"
              aria-controls="selected-jp-iepl-bgp"
              @change="toggleSelectedJpIeplBgpAll"
            >
              <b>JP_IEPL_BGP</b>
            </b-form-checkbox>
          </template>

          <template v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group
              id="selected-jp-iepl-bgp"
              v-model="selectedJpIeplBgp"
              :options="optionsJpIeplBgp"
              :aria-describedby="ariaDescribedby"
              name="selected-jp-iepl-bgp"
              class="ml-2"
              stacked
            />
          </template>
        </b-form-group>

        <!-- JP_Normal -->
        <b-form-group v-show="optionsJpNormal.length">
          <template #label>
            <b-form-checkbox
              v-model="selectedJpNormalAll"
              aria-describedby="selected-jp-normal"
              aria-controls="selected-jp-normal"
              @change="toggleSelectedJpNormalAll"
            >
              <b>JP_Normal</b>
            </b-form-checkbox>
          </template>

          <template v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group
              id="selected-jp-normal"
              v-model="selectedJpNormal"
              :options="optionsJpNormal"
              :aria-describedby="ariaDescribedby"
              name="selected-jp-normal"
              class="ml-2"
              stacked
            />
          </template>
        </b-form-group>

        <!-- JP_Cheap -->
        <b-form-group v-show="optionsJpCheap.length">
          <template #label>
            <b-form-checkbox
              v-model="selectedJpCheapAll"
              aria-describedby="selected-jp-cheap"
              aria-controls="selected-jp-cheap"
              @change="toggleSelectedJpCheapAll"
            >
              <b>JP_Cheap</b>
            </b-form-checkbox>
          </template>

          <template v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group
              id="selected-jp-cheap"
              v-model="selectedJpCheap"
              :options="optionsJpCheap"
              :aria-describedby="ariaDescribedby"
              name="selected-jp-cheap"
              class="ml-2"
              stacked
            />
          </template>
        </b-form-group>

        <!-- KR -->
        <b-form-group v-show="optionsKr.length">
          <template #label>
            <b-form-checkbox
              v-model="selectedKrAll"
              aria-describedby="selected-kr"
              aria-controls="selected-kr"
              @change="toggleSelectedKrAll"
            >
              <b>KR</b>
            </b-form-checkbox>
          </template>

          <template v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group
              id="selected-kr"
              v-model="selectedKr"
              :options="optionsKr"
              :aria-describedby="ariaDescribedby"
              name="selected-kr"
              class="ml-2"
              stacked
            />
          </template>
        </b-form-group>

        <!-- EU -->
        <b-form-group v-show="optionsEu.length">
          <template #label>
            <b-form-checkbox
              v-model="selectedEuAll"
              aria-describedby="selected-eu"
              aria-controls="selected-eu"
              @change="toggleSelectedEuAll"
            >
              <b>EU</b>
            </b-form-checkbox>
          </template>

          <template v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group
              id="selected-eu"
              v-model="selectedEu"
              :options="optionsEu"
              :aria-describedby="ariaDescribedby"
              name="selected-eu"
              class="ml-2"
              stacked
            />
          </template>
        </b-form-group>
      </div>

      <div class="col">
        <!-- Normal -->
        <b-form-group v-show="optionsNormal.length">
          <template #label>
            <b-form-checkbox
              v-model="selectedNormalAll"
              aria-describedby="selected-normal"
              aria-controls="selected-normal"
              @change="toggleSelectedNormalAll"
            >
              <b>Normal</b>
            </b-form-checkbox>
          </template>

          <template v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group
              id="selected-normal"
              v-model="selectedNormal"
              :options="optionsNormal"
              :aria-describedby="ariaDescribedby"
              name="selected-normal"
              class="ml-2"
              stacked
            />
          </template>
        </b-form-group>

        <!-- Cheap -->
        <b-form-group v-show="optionsCheap.length">
          <template #label>
            <b-form-checkbox
              v-model="selectedCheapAll"
              aria-describedby="selected-normal"
              aria-controls="selected-normal"
              @change="toggleSelectedCheapAll"
            >
              <b>Cheap</b>
            </b-form-checkbox>
          </template>

          <template v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group
              id="selected-normal"
              v-model="selectedCheap"
              :options="optionsCheap"
              :aria-describedby="ariaDescribedby"
              name="selected-normal"
              class="ml-2"
              stacked
            />
          </template>
        </b-form-group>

        <!-- Expensive -->
        <b-form-group v-show="optionsExpensive.length">
          <template #label>
            <b-form-checkbox
              v-model="selectedExpensiveAll"
              aria-describedby="selected-expensive"
              aria-controls="selected-expensive"
              @change="toggleSelectedExpensiveAll"
            >
              <b>Expensive</b>
            </b-form-checkbox>
          </template>

          <template v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group
              id="selected-expensive"
              v-model="selectedExpensive"
              :options="optionsExpensive"
              :aria-describedby="ariaDescribedby"
              name="selected-expensive"
              class="ml-2"
              stacked
            />
          </template>
        </b-form-group>

        <!-- CEN -->
        <b-form-group v-show="optionsCen.length">
          <template #label>
            <b-form-checkbox
              v-model="selectedCenAll"
              aria-describedby="selected-cen"
              aria-controls="selected-cen"
              @change="toggleSelectedCenAll"
            >
              <b>CEN</b>
            </b-form-checkbox>
          </template>

          <template v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group
              id="selected-cen"
              v-model="selectedCen"
              :options="optionsCen"
              :aria-describedby="ariaDescribedby"
              name="selected-cen"
              class="ml-2"
              stacked
            />
          </template>
        </b-form-group>

        <!-- SPEC -->
        <b-form-group v-show="optionsSpec.length">
          <template #label>
            <b-form-checkbox
              v-model="selectedSpecAll"
              aria-describedby="selected-spec"
              aria-controls="selected-spec"
              @change="toggleSelectedSpecAll"
            >
              <b>SPEC</b>
            </b-form-checkbox>
          </template>

          <template v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group
              id="selected-spec"
              v-model="selectedSpec"
              :options="optionsSpec"
              :aria-describedby="ariaDescribedby"
              name="selected-spec"
              class="ml-2"
              stacked
            />
          </template>
        </b-form-group>
      </div>

      <!-- All -->
      <div class="col">
        <b-form-group v-show="optionsAll.length">
          <template #label>
            <b-form-checkbox
              v-model="selectedAllAll"
              aria-describedby="selected-all"
              aria-controls="selected-all"
              @change="toggleSelectedAllAll"
            >
              <b>ALL</b>
            </b-form-checkbox>
          </template>

          <template v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group
              id="selected-all"
              v-model="selectedAll"
              :options="optionsAll"
              :aria-describedby="ariaDescribedby"
              name="selected-all"
              class="ml-2"
              stacked
            />
          </template>
        </b-form-group>
      </div>
    </div>
  </div>
</template>

<script>
import FLAGS from '@/data/flags'
import URL_TEST from '@/data/surge/urlTest'
import { RE_EXPENSIVE, RE_CHEAP } from '@/data/re'
import GENERAL from '@/data/surge/general'
import REPLICA from '@/data/surge/replica'
import RULE from '@/data/surge/rule'
import HOST from '@/data/surge/host'
import URL_REWRITE from '@/data/surge/urlRewrite'
import SCRIPT from '@/data/surge/script'
import MIIM from '@/data/surge/miim'

const formatLine = function (line) {
  line = line.trim()

  if (line) {
    if (line.indexOf('->') < 0) {
      for (let i = 0; i < FLAGS.length; i++) {
        if (
          line.search(FLAGS[i].key) !== -1 &&
          !line.startsWith(FLAGS[i].emoji)
        ) {
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

      selectedHkIepl: [],
      selectedHkIeplAll: true,
      selectedHkBgp: [],
      selectedHkBgpAll: true,
      selectedHkNormal: [],
      selectedHkNormalAll: true,
      selectedHkCheap: [],
      selectedHkCheapAll: true,

      selectedUsIeplBgp: [],
      selectedUsIeplBgpAll: true,
      selectedUsNormal: [],
      selectedUsNormalAll: true,
      selectedUsCheap: [],
      selectedUsCheapAll: true,

      selectedTwIeplBgp: [],
      selectedTwIeplBgpAll: true,
      selectedTwNormal: [],
      selectedTwNormalAll: true,
      selectedTwCheap: [],
      selectedTwCheapAll: true,

      selectedSgIeplBgp: [],
      selectedSgIeplBgpAll: true,
      selectedSgNormal: [],
      selectedSgNormalAll: true,
      selectedSgCheap: [],
      selectedSgCheapAll: true,

      selectedJpIeplBgp: [],
      selectedJpIeplBgpAll: true,
      selectedJpNormal: [],
      selectedJpNormalAll: true,
      selectedJpCheap: [],
      selectedJpCheapAll: true,

      selectedKr: [],
      selectedKrAll: true,
      selectedEu: [],
      selectedEuAll: true,
      selectedCen: [],
      selectedCenAll: true,
      selectedExpensive: [],
      selectedExpensiveAll: true,
      selectedCheap: [],
      selectedCheapAll: true,
      selectedSpec: [],
      selectedSpecAll: true,

      selectedAll: [],
      selectedAllAll: true,
      selectedNormal: [],
      selectedNormalAll: true,
    }
  },
  watch: {
    source() {
      let lines = []

      this.source.split('\n').forEach(function (line) {
        line = formatLine(line)
        if (line) {
          lines.push(line)
        }
      })

      this.source = lines.join('\n')
    },
  },
  computed: {
    config() {
      return (
        GENERAL +
        '\n\n' +
        REPLICA +
        '\n\n' +
        this.configProxy +
        '\n\n' +
        this.configProxyGroup +
        '\n\n' +
        RULE +
        '\n\n' +
        HOST +
        '\n\n' +
        URL_REWRITE +
        '\n\n' +
        SCRIPT +
        '\n\n' +
        MIIM
      )
    },
    configProxy() {
      let configProxy = [
        '[Proxy]',
        'Direct = direct',
        'Reject = reject',
        'TinyGIF = reject-tinygif',
      ]

      configProxy.push(this.source)

      return configProxy.join('\n')
    },

    configProxyGroup() {
      let lines = [
        '[Proxy Group]',
        '# 基础定义',
        this.proxyGroupProxy,
        this.proxyGroupDomestic,
        this.proxyGroupAdBlock,
        this.proxyGroupAsianTV,
        this.proxyGroupGlobalTV,
        this.proxyGroupApple,
        this.proxyGroupMicrosoft,
        this.proxyGroupGoogle,
        this.proxyGroupTelegram,
        this.proxyGroupPayPal,
        this.proxyGroupSteam,
        this.proxyGroupNetflix,
        this.proxyGroupYouTube,
        this.proxyGroupSpotify,
        this.proxyGroupDisney,
        '',
        '# 经由 URL-TEST 的自动选择',
      ]

      if (this.proxyGroupHkIepl) {
        lines.push(this.proxyGroupHkIepl)
      }
      if (this.proxyGroupHkBgp) {
        lines.push(this.proxyGroupHkBgp)
      }
      if (this.proxyGroupHkNormal) {
        lines.push(this.proxyGroupHkNormal)
      }
      if (this.proxyGroupHkCheap) {
        lines.push(this.proxyGroupHkCheap)
      }
      if (this.proxyGroupUsIeplBgp) {
        lines.push(this.proxyGroupUsIeplBgp)
      }
      if (this.proxyGroupUsNormal) {
        lines.push(this.proxyGroupUsNormal)
      }
      if (this.proxyGroupUsCheap) {
        lines.push(this.proxyGroupUsCheap)
      }
      if (this.proxyGroupTwIeplBgp) {
        lines.push(this.proxyGroupTwIeplBgp)
      }
      if (this.proxyGroupTwNormal) {
        lines.push(this.proxyGroupTwNormal)
      }
      if (this.proxyGroupTwCheap) {
        lines.push(this.proxyGroupTwCheap)
      }
      if (this.proxyGroupSgIeplBgp) {
        lines.push(this.proxyGroupSgIeplBgp)
      }
      if (this.proxyGroupSgNormal) {
        lines.push(this.proxyGroupSgNormal)
      }
      if (this.proxyGroupSgCheap) {
        lines.push(this.proxyGroupSgCheap)
      }
      if (this.proxyGroupJpIeplBgp) {
        lines.push(this.proxyGroupJpIeplBgp)
      }
      if (this.proxyGroupJpNormal) {
        lines.push(this.proxyGroupJpNormal)
      }
      if (this.proxyGroupJpCheap) {
        lines.push(this.proxyGroupJpCheap)
      }
      if (this.proxyGroupKr) {
        lines.push(this.proxyGroupKr)
      }
      if (this.proxyGroupEu) {
        lines.push(this.proxyGroupEu)
      }
      if (this.proxyGroupSpec) {
        lines.push(this.proxyGroupSpec)
      }
      if (this.proxyGroupNormal) {
        lines.push(this.proxyGroupNormal)
      }
      if (this.proxyGroupCheap) {
        lines.push(this.proxyGroupCheap)
      }
      if (this.proxyGroupAuto) {
        lines.push(this.proxyGroupAuto)
      }

      lines = lines.concat(['', '# 手动选择'])
      if (this.proxyGroupCen) {
        lines.push(this.proxyGroupCen)
      }
      if (this.proxyGroupExpensive) {
        lines.push(this.proxyGroupExpensive)
      }
      if (this.proxyGroupOne) {
        lines.push(this.proxyGroupOne)
      }
      lines.push(this.proxyGroupSpeedTest)

      return lines.join('\n')
    },

    proxyGroupListHK() {
      let list = []
      if (this.selectedHkIepl.length) {
        list.push('HK_IEPL')
      }
      if (this.selectedHkBgp.length) {
        list.push('HK_BGP')
      }
      if (this.selectedHkNormal.length) {
        list.push('HK_Normal')
      }
      if (this.selectedHkCheap.length) {
        list.push('HK_Cheap')
      }
      return list
    },

    proxyGroupListUS() {
      let list = []
      if (this.selectedUsIeplBgp.length) {
        list.push('US_IEPL_BGP')
      }
      if (this.selectedUsNormal.length) {
        list.push('US_Normal')
      }
      if (this.selectedUsCheap.length) {
        list.push('US_Cheap')
      }
      return list
    },

    proxyGroupListTW() {
      let list = []
      if (this.selectedTwIeplBgp.length) {
        list.push('TW_IEPL_BGP')
      }
      if (this.selectedTwNormal.length) {
        list.push('TW_Normal')
      }
      if (this.selectedTwCheap.length) {
        list.push('TW_Cheap')
      }
      return list
    },

    proxyGroupListSG() {
      let list = []
      if (this.selectedSgIeplBgp.length) {
        list.push('SG_IEPL_BGP')
      }
      if (this.selectedSgNormal.length) {
        list.push('SG_Normal')
      }
      if (this.selectedSgCheap.length) {
        list.push('SG_Cheap')
      }
      return list
    },

    proxyGroupListJP() {
      let list = []
      if (this.selectedJpIeplBgp.length) {
        list.push('JP_IEPL_BGP')
      }
      if (this.selectedJpNormal.length) {
        list.push('JP_Normal')
      }
      if (this.selectedJpCheap.length) {
        list.push('JP_Cheap')
      }

      return list
    },

    proxyGroupListKR() {
      let list = []
      if (this.selectedKr.length) {
        list.push('KR')
      }
      return list
    },

    proxyGroupListEU() {
      let list = []
      if (this.selectedEu.length) {
        list.push('EU')
      }
      return list
    },

    proxyGroupListCEN() {
      let list = []
      if (this.selectedCen.length) {
        list.push('CEN')
      }
      return list
    },

    proxyGroupListExpensive() {
      let list = []
      if (this.selectedExpensive.length) {
        list.push('Expensive')
      }
      return list
    },

    proxyGroupListSPEC() {
      let list = []
      if (this.selectedSpec.length) {
        list.push('SPEC')
      }
      return list
    },

    proxyGroupListNormal() {
      let list = []
      if (this.selectedNormal.length) {
        list.push('Normal')
      }
      return list
    },

    proxyGroupListCheap() {
      let list = []
      if (this.selectedCheap.length) {
        list.push('Cheap')
      }
      return list
    },

    proxyGroupListAuto() {
      let list = []
      if (this.selectedAll.length) {
        list.push('Auto')
      }
      return list
    },

    proxyGroupListONE() {
      let list = []
      if (this.selectedAll.length) {
        list.push('ONE')
      }
      return list
    },

    proxyGroupDefaultList() {
      let list = []

      if (this.proxyGroupListHK.length) {
        list = list.concat(this.proxyGroupListHK)
      }

      if (this.proxyGroupListUS.length) {
        list = list.concat(this.proxyGroupListUS)
      }

      if (this.proxyGroupListTW.length) {
        list = list.concat(this.proxyGroupListTW)
      }

      if (this.proxyGroupListSG.length) {
        list = list.concat(this.proxyGroupListSG)
      }

      if (this.proxyGroupListJP.length) {
        list = list.concat(this.proxyGroupListJP)
      }

      if (this.proxyGroupListKR.length) {
        list = list.concat(this.proxyGroupListKR)
      }

      if (this.proxyGroupListEU.length) {
        list = list.concat(this.proxyGroupListEU)
      }

      if (this.proxyGroupListCEN.length) {
        list = list.concat(this.proxyGroupListCEN)
      }

      if (this.proxyGroupListSPEC.length) {
        list = list.concat(this.proxyGroupListSPEC)
      }

      if (this.proxyGroupListNormal.length) {
        list = list.concat(this.proxyGroupListNormal)
      }

      if (this.proxyGroupListCheap.length) {
        list = list.concat(this.proxyGroupListCheap)
      }

      if (this.proxyGroupListExpensive.length) {
        list = list.concat(this.proxyGroupListExpensive)
      }

      if (this.proxyGroupListAuto.length) {
        list = list.concat(this.proxyGroupListAuto)
      }

      if (this.proxyGroupListONE.length) {
        list = list.concat(this.proxyGroupListONE)
      }

      return list
    },

    proxyGroupProxy() {
      let list = []
      list = list.concat(this.proxyGroupDefaultList)

      if (list.length) {
        list.unshift('select')

        return 'Proxy = ' + list.join(', ')
      }

      return 'Proxy = select, Direct'
    },

    proxyGroupDomestic() {
      let list = ['select', 'Direct', 'Proxy']

      return 'Domestic = ' + list.join(', ')
    },

    proxyGroupAdBlock() {
      let list = ['select', 'TinyGIF', 'Reject', 'Domestic', 'Proxy']

      if (this.selectedHkCheap.length) {
        list.push('HK_Cheap')
      }

      return 'AdBlock = ' + list.join(', ')
    },

    proxyGroupAsianTV() {
      let list = ['select', 'Domestic']

      if (this.proxyGroupListHK.length) {
        list = list.concat(this.proxyGroupListHK)
      }

      if (this.proxyGroupListTW.length) {
        list = list.concat(this.proxyGroupListTW)
      }

      if (this.proxyGroupListSG.length) {
        list = list.concat(this.proxyGroupListSG)
      }

      if (this.proxyGroupListJP.length) {
        list = list.concat(this.proxyGroupListJP)
      }

      if (this.proxyGroupListKR.length) {
        list = list.concat(this.proxyGroupListKR)
      }

      return 'AsianTV = ' + list.join(', ')
    },

    lineStartsWithHK() {
      let list = ['select']
      list = list.concat(this.proxyGroupDefaultList)
      list.push('Domestic')

      return list.join(', ')
    },

    lineStartsWithUS() {
      let list = ['select']

      if (this.proxyGroupListUS.length) {
        list = list.concat(this.proxyGroupListUS)
      }

      if (this.proxyGroupListHK.length) {
        list = list.concat(this.proxyGroupListHK)
      }

      if (this.proxyGroupListTW.length) {
        list = list.concat(this.proxyGroupListTW)
      }

      if (this.proxyGroupListSG.length) {
        list = list.concat(this.proxyGroupListSG)
      }

      if (this.proxyGroupListJP.length) {
        list = list.concat(this.proxyGroupListJP)
      }

      if (this.proxyGroupListKR.length) {
        list = list.concat(this.proxyGroupListKR)
      }

      if (this.proxyGroupListEU.length) {
        list = list.concat(this.proxyGroupListEU)
      }

      if (this.proxyGroupListCEN.length) {
        list = list.concat(this.proxyGroupListCEN)
      }

      if (this.proxyGroupListSPEC.length) {
        list = list.concat(this.proxyGroupListSPEC)
      }

      if (this.proxyGroupListNormal.length) {
        list = list.concat(this.proxyGroupListNormal)
      }

      if (this.proxyGroupListCheap.length) {
        list = list.concat(this.proxyGroupListCheap)
      }

      if (this.proxyGroupListExpensive.length) {
        list = list.concat(this.proxyGroupListExpensive)
      }

      if (this.proxyGroupListAuto.length) {
        list = list.concat(this.proxyGroupListAuto)
      }

      if (this.proxyGroupListONE.length) {
        list = list.concat(this.proxyGroupListONE)
      }

      list.push('Domestic')

      return list.join(', ')
    },

    proxyGroupGlobalTV() {
      return 'GlobalTV = ' + this.lineStartsWithHK
    },

    proxyGroupApple() {
      let list = ['select', 'Domestic']
      list = list.concat(this.proxyGroupDefaultList)

      return 'Apple = ' + list.join(', ')
    },

    proxyGroupMicrosoft() {
      let list = ['select', 'Domestic']
      list = list.concat(this.proxyGroupDefaultList)

      return 'Microsoft = ' + list.join(', ')
    },

    proxyGroupGoogle() {
      return 'Google = ' + this.lineStartsWithHK
    },

    proxyGroupTelegram() {
      let list = ['select']

      if (this.proxyGroupListEU.length) {
        list = list.concat(this.proxyGroupListEU)
      }

      if (this.proxyGroupListHK.length) {
        list = list.concat(this.proxyGroupListHK)
      }

      if (this.proxyGroupListUS.length) {
        list = list.concat(this.proxyGroupListUS)
      }

      if (this.proxyGroupListTW.length) {
        list = list.concat(this.proxyGroupListTW)
      }

      if (this.proxyGroupListSG.length) {
        list = list.concat(this.proxyGroupListSG)
      }

      if (this.proxyGroupListJP.length) {
        list = list.concat(this.proxyGroupListJP)
      }

      if (this.proxyGroupListKR.length) {
        list = list.concat(this.proxyGroupListKR)
      }

      if (this.proxyGroupListCEN.length) {
        list = list.concat(this.proxyGroupListCEN)
      }

      if (this.proxyGroupListSPEC.length) {
        list = list.concat(this.proxyGroupListSPEC)
      }

      if (this.proxyGroupListNormal.length) {
        list = list.concat(this.proxyGroupListNormal)
      }

      if (this.proxyGroupListCheap.length) {
        list = list.concat(this.proxyGroupListCheap)
      }

      if (this.proxyGroupListExpensive.length) {
        list = list.concat(this.proxyGroupListExpensive)
      }

      if (this.proxyGroupListAuto.length) {
        list = list.concat(this.proxyGroupListAuto)
      }

      if (this.proxyGroupListONE.length) {
        list = list.concat(this.proxyGroupListONE)
      }

      list.push('Domestic')

      return 'Telegram = ' + list.join(', ')
    },

    proxyGroupPayPal() {
      return 'PayPal = ' + this.lineStartsWithHK
    },

    proxyGroupSteam() {
      return 'Steam = ' + this.lineStartsWithHK
    },

    proxyGroupNetflix() {
      return 'Netflix = ' + this.lineStartsWithHK
    },

    proxyGroupYouTube() {
      return 'YouTube = ' + this.lineStartsWithUS
    },
    proxyGroupSpotify() {
      return 'Spotify = ' + this.lineStartsWithUS
    },
    proxyGroupDisney() {
      return 'Disney = ' + this.lineStartsWithUS
    },

    proxyGroupSpeedTest() {
      let list = ['select', 'Direct']
      list = list.concat(this.selectedAll)

      return 'SpeedTest = ' + list.join(', ')
    },

    proxyGroupHkIepl() {
      if (this.selectedHkIepl.length) {
        return (
          'HK_IEPL = ' +
          ['url-test'].concat(this.selectedHkIepl, URL_TEST).join(', ')
        )
      }

      return null
    },

    proxyGroupHkBgp() {
      if (this.selectedHkBgp.length) {
        return (
          'HK_BGP = ' +
          ['url-test'].concat(this.selectedHkBgp, URL_TEST).join(', ')
        )
      }

      return null
    },

    proxyGroupHkNormal() {
      if (this.selectedHkNormal.length) {
        return (
          'HK_Normal = ' +
          ['url-test'].concat(this.selectedHkNormal, URL_TEST).join(', ')
        )
      }

      return null
    },

    proxyGroupHkCheap() {
      if (this.selectedHkCheap.length) {
        return (
          'HK_Cheap = ' +
          ['url-test'].concat(this.selectedHkCheap, URL_TEST).join(', ')
        )
      }

      return null
    },

    proxyGroupUsIeplBgp() {
      if (this.selectedUsIeplBgp.length) {
        return (
          'US_IEPL_BGP = ' +
          ['url-test'].concat(this.selectedUsIeplBgp, URL_TEST).join(', ')
        )
      }

      return null
    },

    proxyGroupUsNormal() {
      if (this.selectedUsNormal.length) {
        return (
          'US_Normal = ' +
          ['url-test'].concat(this.selectedUsNormal, URL_TEST).join(', ')
        )
      }

      return null
    },

    proxyGroupUsCheap() {
      if (this.selectedUsCheap.length) {
        return (
          'US_Cheap = ' +
          ['url-test'].concat(this.selectedUsCheap, URL_TEST).join(', ')
        )
      }

      return null
    },

    proxyGroupTwIeplBgp() {
      if (this.selectedTwIeplBgp.length) {
        return (
          'TW_IEPL_BGP = ' +
          ['url-test'].concat(this.selectedTwIeplBgp, URL_TEST).join(', ')
        )
      }

      return null
    },

    proxyGroupTwNormal() {
      if (this.selectedTwNormal.length) {
        return (
          'TW_Normal = ' +
          ['url-test'].concat(this.selectedTwNormal, URL_TEST).join(', ')
        )
      }

      return null
    },

    proxyGroupTwCheap() {
      if (this.selectedTwCheap.length) {
        return (
          'TW_Cheap = ' +
          ['url-test'].concat(this.selectedTwCheap, URL_TEST).join(', ')
        )
      }

      return null
    },

    proxyGroupSgIeplBgp() {
      if (this.selectedSgIeplBgp.length) {
        return (
          'SG_IEPL_BGP = ' +
          ['url-test'].concat(this.selectedSgIeplBgp, URL_TEST).join(', ')
        )
      }

      return null
    },

    proxyGroupSgNormal() {
      if (this.selectedSgNormal.length) {
        return (
          'SG_Normal = ' +
          ['url-test'].concat(this.selectedSgNormal, URL_TEST).join(', ')
        )
      }

      return null
    },

    proxyGroupSgCheap() {
      if (this.selectedSgCheap.length) {
        return (
          'SG_Cheap = ' +
          ['url-test'].concat(this.selectedSgCheap, URL_TEST).join(', ')
        )
      }

      return null
    },

    proxyGroupJpIeplBgp() {
      if (this.selectedJpIeplBgp.length) {
        return (
          'JP_IEPL_BGP = ' +
          ['url-test'].concat(this.selectedJpIeplBgp, URL_TEST).join(', ')
        )
      }

      return null
    },

    proxyGroupJpNormal() {
      if (this.selectedJpNormal.length) {
        return (
          'JP_Normal = ' +
          ['url-test'].concat(this.selectedJpNormal, URL_TEST).join(', ')
        )
      }

      return null
    },

    proxyGroupJpCheap() {
      if (this.selectedJpCheap.length) {
        return (
          'JP_Cheap = ' +
          ['url-test'].concat(this.selectedJpCheap, URL_TEST).join(', ')
        )
      }

      return null
    },

    proxyGroupKr() {
      if (this.selectedKr.length) {
        return (
          'KR = ' + ['url-test'].concat(this.selectedKr, URL_TEST).join(', ')
        )
      }

      return null
    },

    proxyGroupEu() {
      if (this.selectedEu.length) {
        return (
          'EU = ' + ['url-test'].concat(this.selectedEu, URL_TEST).join(', ')
        )
      }

      return null
    },

    proxyGroupSpec() {
      if (this.selectedSpec.length) {
        return (
          'SPEC = ' +
          ['url-test'].concat(this.selectedSpec, URL_TEST).join(', ')
        )
      }

      return null
    },

    proxyGroupNormal() {
      if (this.selectedNormal.length) {
        return (
          'Normal = ' +
          ['url-test'].concat(this.selectedNormal, URL_TEST).join(', ')
        )
      }

      return null
    },

    proxyGroupCheap() {
      if (this.selectedCheap.length) {
        return (
          'Cheap = ' +
          ['url-test'].concat(this.selectedCheap, URL_TEST).join(', ')
        )
      }

      return null
    },

    proxyGroupAuto() {
      if (this.selectedAll.length) {
        return (
          'Auto = ' + ['url-test'].concat(this.selectedAll, URL_TEST).join(', ')
        )
      }

      return null
    },

    proxyGroupCen() {
      if (this.selectedCen.length) {
        return 'CEN = ' + ['select'].concat(this.selectedCen).join(', ')
      }

      return null
    },

    proxyGroupExpensive() {
      if (this.selectedExpensive.length) {
        return (
          'Expensive = ' + ['select'].concat(this.selectedExpensive).join(', ')
        )
      }

      return null
    },

    proxyGroupOne() {
      if (this.selectedAll.length) {
        return 'ONE = ' + ['select'].concat(this.selectedAll).join(', ')
      }

      return null
    },

    /**
     * Select Options
     */
    options() {
      let sourceList = []

      this.source.split('\n').forEach(function (line) {
        line = line.trim()
        if (line) {
          const title = line.split(',')[0].split('=')[0].trim()

          sourceList.push(title)
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
          this.options[i].indexOf('港') !== -1 &&
          this.options[i].indexOf('IEPL') !== -1 &&
          this.options[i].indexOf('->') < 0 &&
          this.options[i].search(RE_EXPENSIVE) < 0
        ) {
          options.push(this.options[i])
        }
      }

      this.selectedHkIepl = options.slice()

      return options
    },
    optionsHkBgp() {
      this.selectedHkBgp = []

      let options = []
      for (let i = 0; i < this.options.length; i++) {
        if (
          this.options[i].indexOf('港') !== -1 &&
          this.options[i].indexOf('BGP') !== -1 &&
          this.options[i].indexOf('->') < 0 &&
          this.options[i].search(RE_EXPENSIVE) < 0
        ) {
          options.push(this.options[i])
        }
      }

      this.selectedHkBgp = options.slice()

      return options
    },
    optionsHkNormal() {
      this.selectedHkNormal = []

      let options = []
      for (let i = 0; i < this.options.length; i++) {
        if (
          this.options[i].indexOf('港') !== -1 &&
          this.options[i].indexOf('IEPL') < 0 &&
          this.options[i].indexOf('BGP') < 0 &&
          this.options[i].indexOf('CEN') < 0 &&
          this.options[i].indexOf('->') < 0 &&
          this.options[i].search(RE_EXPENSIVE) < 0
        ) {
          options.push(this.options[i])
        }
      }

      this.selectedHkNormal = options.slice()

      return options
    },
    optionsHkCheap() {
      this.selectedHkCheap = []

      let options = []
      for (let i = 0; i < this.options.length; i++) {
        if (
          this.options[i].indexOf('港') !== -1 &&
          this.options[i].indexOf('->') < 0 &&
          this.options[i].search(RE_CHEAP) !== -1
        ) {
          options.push(this.options[i])
        }
      }

      this.selectedHkCheap = options.slice()

      return options
    },

    // US
    optionsUsIeplBgp() {
      this.selectedUsIeplBgp = []

      let options = []
      for (let i = 0; i < this.options.length; i++) {
        if (
          this.options[i].indexOf('美') !== -1 &&
          (this.options[i].indexOf('IEPL') !== -1 ||
            this.options[i].indexOf('BGP') !== -1) &&
          this.options[i].indexOf('->') < 0 &&
          this.options[i].search(RE_EXPENSIVE) < 0
        ) {
          options.push(this.options[i])
        }
      }

      this.selectedUsIeplBgp = options.slice()

      return options
    },
    optionsUsNormal() {
      this.selectedUsNormal = []

      let options = []
      for (let i = 0; i < this.options.length; i++) {
        if (
          this.options[i].indexOf('美') !== -1 &&
          this.options[i].indexOf('IEPL') < 0 &&
          this.options[i].indexOf('BGP') < 0 &&
          this.options[i].indexOf('CEN') < 0 &&
          this.options[i].indexOf('->') < 0 &&
          this.options[i].search(RE_EXPENSIVE) < 0
        ) {
          options.push(this.options[i])
        }
      }

      this.selectedUsNormal = options.slice()

      return options
    },
    optionsUsCheap() {
      this.selectedUsCheap = []

      let options = []
      for (let i = 0; i < this.options.length; i++) {
        if (
          this.options[i].indexOf('美') !== -1 &&
          this.options[i].indexOf('->') < 0 &&
          this.options[i].search(RE_CHEAP) !== -1
        ) {
          options.push(this.options[i])
        }
      }

      this.selectedUsCheap = options.slice()

      return options
    },

    // TW
    optionsTwIeplBgp() {
      this.selectedTwIeplBgp = []

      let options = []
      for (let i = 0; i < this.options.length; i++) {
        if (
          this.options[i].indexOf('台') !== -1 &&
          (this.options[i].indexOf('IEPL') !== -1 ||
            this.options[i].indexOf('BGP') !== -1) &&
          this.options[i].indexOf('->') < 0 &&
          this.options[i].search(RE_EXPENSIVE) < 0
        ) {
          options.push(this.options[i])
        }
      }

      this.selectedTwIeplBgp = options.slice()

      return options
    },
    optionsTwNormal() {
      this.selectedTwNormal = []

      let options = []
      for (let i = 0; i < this.options.length; i++) {
        if (
          this.options[i].indexOf('台') !== -1 &&
          this.options[i].indexOf('IEPL') < 0 &&
          this.options[i].indexOf('BGP') < 0 &&
          this.options[i].indexOf('CEN') < 0 &&
          this.options[i].indexOf('->') < 0 &&
          this.options[i].search(RE_EXPENSIVE) < 0
        ) {
          options.push(this.options[i])
        }
      }

      this.selectedTwNormal = options.slice()

      return options
    },
    optionsTwCheap() {
      this.selectedTwCheap = []

      let options = []
      for (let i = 0; i < this.options.length; i++) {
        if (
          this.options[i].indexOf('台') !== -1 &&
          this.options[i].indexOf('->') < 0 &&
          this.options[i].search(RE_CHEAP) !== -1
        ) {
          options.push(this.options[i])
        }
      }

      this.selectedTwCheap = options.slice()

      return options
    },

    // SG
    optionsSgIeplBgp() {
      this.selectedSgIeplBgp = []

      let options = []
      for (let i = 0; i < this.options.length; i++) {
        if (
          this.options[i].indexOf('新') !== -1 &&
          (this.options[i].indexOf('IEPL') !== -1 ||
            this.options[i].indexOf('BGP') !== -1) &&
          this.options[i].indexOf('->') < 0 &&
          this.options[i].search(RE_EXPENSIVE) < 0
        ) {
          options.push(this.options[i])
        }
      }

      this.selectedSgIeplBgp = options.slice()

      return options
    },
    optionsSgNormal() {
      this.selectedSgNormal = []

      let options = []
      for (let i = 0; i < this.options.length; i++) {
        if (
          this.options[i].indexOf('新') !== -1 &&
          this.options[i].indexOf('IEPL') < 0 &&
          this.options[i].indexOf('BGP') < 0 &&
          this.options[i].indexOf('CEN') < 0 &&
          this.options[i].indexOf('->') < 0 &&
          this.options[i].search(RE_EXPENSIVE) < 0
        ) {
          options.push(this.options[i])
        }
      }

      this.selectedSgNormal = options.slice()

      return options
    },
    optionsSgCheap() {
      this.selectedSgCheap = []

      let options = []
      for (let i = 0; i < this.options.length; i++) {
        if (
          this.options[i].indexOf('新') !== -1 &&
          this.options[i].indexOf('->') < 0 &&
          this.options[i].search(RE_CHEAP) !== -1
        ) {
          options.push(this.options[i])
        }
      }

      this.selectedSgCheap = options.slice()

      return options
    },

    // JP
    optionsJpIeplBgp() {
      this.selectedJpIeplBgp = []

      let options = []
      for (let i = 0; i < this.options.length; i++) {
        if (
          this.options[i].indexOf('日') !== -1 &&
          (this.options[i].indexOf('IEPL') !== -1 ||
            this.options[i].indexOf('BGP') !== -1) &&
          this.options[i].indexOf('->') < 0 &&
          this.options[i].search(RE_EXPENSIVE) < 0
        ) {
          options.push(this.options[i])
        }
      }

      this.selectedJpIeplBgp = options.slice()

      return options
    },
    optionsJpNormal() {
      this.selectedJpNormal = []

      let options = []
      for (let i = 0; i < this.options.length; i++) {
        if (
          this.options[i].indexOf('日') !== -1 &&
          this.options[i].indexOf('IEPL') < 0 &&
          this.options[i].indexOf('BGP') < 0 &&
          this.options[i].indexOf('CEN') < 0 &&
          this.options[i].indexOf('->') < 0 &&
          this.options[i].search(RE_EXPENSIVE) < 0
        ) {
          options.push(this.options[i])
        }
      }

      this.selectedJpNormal = options.slice()

      return options
    },
    optionsJpCheap() {
      this.selectedJpCheap = []

      let options = []
      for (let i = 0; i < this.options.length; i++) {
        if (
          this.options[i].indexOf('日') !== -1 &&
          this.options[i].indexOf('->') < 0 &&
          this.options[i].search(RE_CHEAP) !== -1
        ) {
          options.push(this.options[i])
        }
      }

      this.selectedJpCheap = options.slice()

      return options
    },

    // KR
    optionsKr() {
      this.selectedKr = []

      let options = []
      for (let i = 0; i < this.options.length; i++) {
        if (
          this.options[i].indexOf('韩') !== -1 &&
          this.options[i].indexOf('CEN') < 0 &&
          this.options[i].indexOf('->') < 0 &&
          this.options[i].search(RE_EXPENSIVE) < 0
        ) {
          options.push(this.options[i])
        }
      }

      this.selectedKr = options.slice()

      return options
    },

    // EU
    optionsEu() {
      this.selectedEu = []

      let options = []
      for (let i = 0; i < this.options.length; i++) {
        if (
          (this.options[i].indexOf('德') !== -1 ||
            this.options[i].indexOf('英') !== -1 ||
            this.options[i].indexOf('法') !== -1) &&
          this.options[i].indexOf('CEN') < 0 &&
          this.options[i].indexOf('->') < 0 &&
          this.options[i].search(RE_EXPENSIVE) < 0
        ) {
          options.push(this.options[i])
        }
      }

      this.selectedEu = options.slice()

      return options
    },

    // Cen
    optionsCen() {
      this.selectedCen = []

      let options = []
      for (let i = 0; i < this.options.length; i++) {
        if (this.options[i].indexOf('CEN') !== -1) {
          options.push(this.options[i])
        }
      }

      this.selectedCen = options.slice()

      return options
    },

    // Expensive
    optionsExpensive() {
      this.selectedExpensive = []

      let options = []
      for (let i = 0; i < this.options.length; i++) {
        if (this.options[i].search(RE_EXPENSIVE) !== -1) {
          options.push(this.options[i])
        }
      }

      this.selectedExpensive = options.slice()

      return options
    },

    // Cheap
    optionsCheap() {
      this.selectedCheap = []

      let options = []
      for (let i = 0; i < this.options.length; i++) {
        if (this.options[i].search(RE_CHEAP) !== -1) {
          options.push(this.options[i])
        }
      }

      this.selectedCheap = options.slice()

      return options
    },

    // Normal
    optionsNormal() {
      this.selectedNormal = []

      let options = []
      for (let i = 0; i < this.options.length; i++) {
        if (
          this.options[i].indexOf('IEPL') < 0 &&
          this.options[i].indexOf('BGP') < 0 &&
          this.options[i].indexOf('CEN') < 0 &&
          this.options[i].indexOf('->') < 0 &&
          this.options[i].indexOf('俄') < 0 &&
          this.options[i].indexOf('印') < 0 &&
          this.options[i].indexOf('菲') < 0 &&
          this.options[i].indexOf('澳大利亚') < 0 &&
          this.options[i].search(RE_EXPENSIVE) < 0
        ) {
          options.push(this.options[i])
        }
      }

      this.selectedNormal = options.slice()

      return options
    },

    // All
    optionsAll() {
      this.selectedAll = []

      let a = []
      let b = []
      let c = []
      let list = []
      for (let i = 0; i < this.options.length; i++) {
        if (
          this.options[i].indexOf('->') < 0 &&
          this.options[i].indexOf('俄') < 0 &&
          this.options[i].indexOf('印') < 0 &&
          this.options[i].indexOf('菲') < 0 &&
          this.options[i].indexOf('澳大利亚') < 0 &&
          this.options[i].search(RE_EXPENSIVE) < 0
        ) {
          if (this.options[i].indexOf('IEPL') !== -1) {
            a.push(this.options[i])
          } else if (this.options[i].indexOf('BGP') !== -1) {
            b.push(this.options[i])
          } else {
            c.push(this.options[i])
          }
        }
      }

      // a.sort()
      // b.sort()
      // c.sort()

      list = a.concat(b, c)

      this.selectedAll = list

      return list
    },

    // SPEC
    optionsSpec() {
      this.selectedSpec = []

      let options = []
      for (let i = 0; i < this.options.length; i++) {
        if (this.options[i].indexOf('->') !== -1) {
          options.push(this.options[i])
        }
      }

      this.selectedSpec = options.slice()

      return options
    },
  },
  methods: {
    // HK
    toggleSelectedHkIeplAll(checked) {
      this.selectedHkIepl = checked ? this.optionsHkIepl.slice() : []
    },
    toggleSelectedHkBgpAll(checked) {
      this.selectedHkBgp = checked ? this.optionsHkBgp.slice() : []
    },
    toggleSelectedHkNormalAll(checked) {
      this.selectedHkNormal = checked ? this.optionsHkNormal.slice() : []
    },
    toggleSelectedHkCheapAll(checked) {
      this.selectedHkCheap = checked ? this.optionsHkCheap.slice() : []
    },

    // US
    toggleSelectedUsIeplBgpAll(checked) {
      this.selectedUsIeplBgp = checked ? this.optionsUsIeplBgp.slice() : []
    },
    toggleSelectedUsNormalAll(checked) {
      this.selectedUsNormal = checked ? this.optionsUsNormal.slice() : []
    },
    toggleSelectedUsCheapAll(checked) {
      this.selectedUsCheap = checked ? this.optionsUsCheap.slice() : []
    },

    // TW
    toggleSelectedTwIeplBgpAll(checked) {
      this.selectedTwIeplBgp = checked ? this.optionsTwIeplBgp.slice() : []
    },
    toggleSelectedTwNormalAll(checked) {
      this.selectedTwNormal = checked ? this.optionsTwNormal.slice() : []
    },
    toggleSelectedTwCheapAll(checked) {
      this.selectedTwCheap = checked ? this.optionsTwCheap.slice() : []
    },

    // SG
    toggleSelectedSgIeplBgpAll(checked) {
      this.selectedSgIeplBgp = checked ? this.optionsSgIeplBgp.slice() : []
    },
    toggleSelectedSgNormalAll(checked) {
      this.selectedSgNormal = checked ? this.optionsSgNormal.slice() : []
    },
    toggleSelectedSgCheapAll(checked) {
      this.selectedSgCheap = checked ? this.optionsSgCheap.slice() : []
    },

    // JP
    toggleSelectedJpIeplBgpAll(checked) {
      this.selectedJpIeplBgp = checked ? this.optionsJpIeplBgp.slice() : []
    },
    toggleSelectedJpNormalAll(checked) {
      this.selectedJpNormal = checked ? this.optionsJpNormal.slice() : []
    },
    toggleSelectedJpCheapAll(checked) {
      this.selectedJpCheap = checked ? this.optionsJpCheap.slice() : []
    },

    // KR
    toggleSelectedKrAll(checked) {
      this.selectedKr = checked ? this.optionsKr.slice() : []
    },

    // EU
    toggleSelectedEuAll(checked) {
      this.selectedEu = checked ? this.optionsEu.slice() : []
    },

    // CEN
    toggleSelectedCenAll(checked) {
      this.selectedCen = checked ? this.optionsCen.slice() : []
    },

    // Expensive
    toggleSelectedExpensiveAll(checked) {
      this.selectedExpensive = checked ? this.optionsExpensive.slice() : []
    },

    // Cheap
    toggleSelectedCheapAll(checked) {
      this.selectedCheap = checked ? this.optionsCheap.slice() : []
    },

    // SPEC
    toggleSelectedSpecAll(checked) {
      this.selectedSpec = checked ? this.optionsSpec.slice() : []
    },

    // Normal
    toggleSelectedNormalAll(checked) {
      this.selectedNormal = checked ? this.optionsNormal.slice() : []
    },

    // ALL
    toggleSelectedAllAll(checked) {
      this.selectedAll = checked ? this.optionsAll.slice() : []
    },
  },
}
</script>
