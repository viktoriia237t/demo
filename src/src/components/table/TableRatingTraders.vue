<script setup>

import LabelCoin from "@/components/table/LabelCoin.vue";
import LabelValue from "@/components/table/LabelValue.vue";
import Row from "@/components/table/RatingTraders/Row.vue"
import {ref, provide} from "vue";


const grid = {
  id: {
    width: 'w-48',
    title: '#'
  },
  api: {
    width: 'w-126',
    title: 'АРІ'
  },
  deposit: {
    width: 'w-126',
    title: 'Депозит, $'
  },
  roi: {
    width: 'w-110',
    title: 'ROI, %'
  },
  deals: {
    width: 'w-120',
    title: 'Прибыльные сделки'
  },
  chevron: {
    width: 'w-16',
    isShow: false,
  },
  coin: {
    width: 'w-126',
    title: 'Монета'
  },
  price: {
    width: 'w-110',
    title: 'Цена'
  },
  volume: {
    width: 'w-110',
    title: 'Объем'
  },
  pnl: {
    width: 'w-126',
    title: 'Pnl, $'
  },
  action: {
    width: 'w-60',
    title: 'Действия'
  }
}

provide('grid', grid);

const gridData = [
  {
    row: {
      id: {
        value: 0
      },
      api: {
        value: 'CXE9uaEZ',
      },
      deposit: {
        value: '50 154 $',
      },
      roi: {
        value: '122%',
      },
      deals: {
        value: '87%',
      },
      chevron: {
        isShow: true
      },
      coin: {
        name: 'BTCUSDT',
        icon: 'c-btc'
      },
      price: {
        value: '38 554 $',
        status: 'low'
      },
      volume: {
        value: '8',
      },
      pnl: {
        value: '112',
      },
      action: {
        value: 'icon'
      }
    },
    childRows:[
      {
        chevron:{
          isShow: true
        },
        coin: {
          name: 'BTCUSDT',
          icon: 'c-btc'
        },
        price: {
          value: '38554',
          status: 'low'
        },
        volume: {
          value: '-8052',
        },
      },
      {
        chevron:{
          isShow: true
        },
        coin: {
          name: 'BTCUSDT',
          icon: 'c-btc'
        },
        price: {
          value: '554',
          status: 'high'
        },
        volume: {
          value: '52',
        },
      },
      {
        chevron:{
          isShow: true
        },
        coin: {
          name: 'BTCUSDT',
          icon: 'c-btc'
        },
        price: {
          value: '38554',
          status: 'low'
        },
        volume: {
          value: '-8052',
        },
      }
    ]
  },
  {
    row: {
      id: {
        value: 0
      },
      api: {
        value: 'CXE9uaEZ',
      },
      deposit: {
        value: '50 154 $',
      },
      roi: {
        value: '122%',
      },
      deals: {
        value: '87%',
      },
      chevron: {
        isShow: true
      },
      coin: {
        name: 'BTCUSDT',
        icon: 'c-btc'
      },
      price: {
        value: '38 554 $',
        status: 'low'
      },
      volume: {
        value: '8',
      },
      pnl: {
        value: '112',
      },
      action: {
        value: 'icon'
      }
    },
    childRows:[
      {
        chevron:{
          isShow: true
        },
        coin: {
          name: 'BTCUSDT',
          icon: 'c-btc'
        },
        price: {
          value: '38554',
          status: 'low'
        },
        volume: {
          value: '-8052',
        },
      },
      {
        chevron:{
          isShow: true
        },
        coin: {
          name: 'BTCUSDT',
          icon: 'c-btc'
        },
        price: {
          value: '554',
          status: 'high'
        },
        volume: {
          value: '52',
        },
      },
      {
        chevron:{
          isShow: true
        },
        coin: {
          name: 'BTCUSDT',
          icon: 'c-btc'
        },
        price: {
          value: '38554',
          status: 'low'
        },
        volume: {
          value: '-8052',
        },
      }
    ]
  },
  {
    row: {
      id: {
        value: 0
      },
      api: {
        value: 'CXE9uaEZ',
      },
      deposit: {
        value: '50 154 $',
      },
      roi: {
        value: '122%',
      },
      deals: {
        value: '87%',
      },
      chevron: {
        isShow: true
      },
      coin: {
        name: 'BTCUSDT',
        icon: 'c-btc'
      },
      price: {
        value: '38 554 $',
        status: 'low'
      },
      volume: {
        value: '8',
      },
      pnl: {
        value: '112',
      },
      action: {
        value: 'icon'
      }
    },
    childRows:[
      {
        chevron:{
          isShow: true
        },
        coin: {
          name: 'BTCUSDT',
          icon: 'c-btc'
        },
        price: {
          value: '38554',
          status: 'low'
        },
        volume: {
          value: '-8052',
        },
      },
      {
        chevron:{
          isShow: true
        },
        coin: {
          name: 'BTCUSDT',
          icon: 'c-btc'
        },
        price: {
          value: '554',
          status: 'high'
        },
        volume: {
          value: '52',
        },
      },
      {
        chevron:{
          isShow: true
        },
        coin: {
          name: 'BTCUSDT',
          icon: 'c-btc'
        },
        price: {
          value: '38554',
          status: 'low'
        },
        volume: {
          value: '-8052',
        },
      }
    ]
  },
  {
    row: {
      id: {
        value: 0
      },
      api: {
        value: 'CXE9uaEZ',
      },
      deposit: {
        value: '50 154 $',
      },
      roi: {
        value: '122%',
      },
      deals: {
        value: '87%',
      },
      chevron: {
        isShow: true
      },
      coin: {
        name: 'BTCUSDT',
        icon: 'c-btc'
      },
      price: {
        value: '38 554 $',
        status: 'low'
      },
      volume: {
        value: '8',
      },
      pnl: {
        value: '112',
      },
      action: {
        value: 'icon'
      }
    },
    childRows:[
      {
        chevron:{
          isShow: true
        },
        coin: {
          name: 'BTCUSDT',
          icon: 'c-btc'
        },
        price: {
          value: '38554',
          status: 'low'
        },
        volume: {
          value: '-8052',
        },
      },
      {
        chevron:{
          isShow: true
        },
        coin: {
          name: 'BTCUSDT',
          icon: 'c-btc'
        },
        price: {
          value: '554',
          status: 'high'
        },
        volume: {
          value: '52',
        },
      },
      {
        chevron:{
          isShow: true
        },
        coin: {
          name: 'BTCUSDT',
          icon: 'c-btc'
        },
        price: {
          value: '38554',
          status: 'low'
        },
        volume: {
          value: '-8052',
        },
      }
    ]
  }
]


const openCoinInfo = ref(true);
</script>

<template>

  <div class="px-3/4 flex justify-between gap-3/4 text-sm font-base font-normal text-white-30 ">
    <div v-for="(item, key) in grid" class="last:text-right pb-3/4"
         :class="grid[key].width">
      <span v-if="key ===  'volume'" class="flex items-center gap-1/4">
        {{ item.title }}
        <span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.66699 9.33301L8.00033 12.6663L11.3337 9.33301H4.66699Z" fill="white" fill-opacity="0.3"/>
            <path d="M8.00033 3.33301L4.66699 6.66634H11.3337L8.00033 3.33301Z" fill="white" fill-opacity="0.5"/>
          </svg>
        </span>
      </span>
      <span v-else>
        {{ item.title }}
      </span>
    </div>
  </div>
  <div class="flex flex-col gap-1/2">
    <div v-for="{row, childRows} in gridData">
      <Row :row="row" :child-rows="childRows" />
    </div>
  </div>


</template>

<style scoped>

</style>