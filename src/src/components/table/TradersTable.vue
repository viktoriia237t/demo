<script setup>

import TradersTableHeader from "@/components/table/TradersTable/TradersTableHeader.vue";
import TradersTableRow from "@/components/table/TradersTable/TradersTableRow.vue";
import RowTraders from "@/components/table/RatingTraders/RowTraders.vue";
import {provide} from "vue";


const gridTraders =
    {
      id: {
        width: 'w-70',
        title: '#',
        sort: false,
      },
      status: {
        width: 'w-100',
        title: 'Статус',
        sort: true,
      },
      api: {
        width: 'w-248',
        title: 'АРІ',
        sort: false,
      },
      deposit: {
        width: 'w-300',
        title: 'Депозит, $',
        sort: true,
      },
      roi: {
        width: 'w-248',
        title: 'ROI, %',
        sort: true,
      },
      profitableDeals: {
        width: 'w-248',
        title: 'Прибыльные сделки',
        sort: true,
      },
      pnl: {
        width: 'w-200',
        title: 'Pnl, $',
        sort: false,
      },
      action: {
        width: 'w-60',
        title: 'Действия',
        sort: false,
      }
    };

const tradersRow = [
  {
    id: {
      value: 0
    },
    status: {
      value: 'inactive',
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
    profitableDeals: {
      value: '38 554 $',
    },
    pnl: {
      value: 112,
    },
    action: {
      value: 'icon'
    }
  },
  {
    id: {
      value: 2
    },
    status: {
      value: 'active',
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
    profitableDeals: {
      value: '38 554 $',
    },
    pnl: {
      value: 112,
    },
    action: {
      value: 'icon'
    }
  },
  {
    id: {
      value: 3
    },
    status: {
      value: 'active',
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
    profitableDeals: {
      value: '38 554 $',
    },
    pnl: {
      value: 112,
    },
    action: {
      value: 'icon'
    }
  },
  {
    id: {
      value: 4
    },
    status: {
      value: 'active',
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
    profitableDeals: {
      value: '38 554 $',
    },
    pnl: {
      value: 112,
    },
    action: {
      value: 'icon'
    }
  },
  {
    id: {
      value: 5
    },
    status: {
      value: 'active',
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
    profitableDeals: {
      value: '38 554 $',
    },
    pnl: {
      value: 112,
    },
    action: {
      value: 'icon'
    }
  }
]

provide('gridTraders', gridTraders);

</script>

<template>
  <traders-table-header :grid="gridTraders"/>

  <div class="flex flex-col gap-1/2">
    <div v-for="(row, index) in tradersRow">
      <traders-table-row :row="row" :index="index" />
    </div>
  </div>

</template>

<style scoped>

</style>