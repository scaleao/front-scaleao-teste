<template>
  <div class="row full-width">
    <div class="col-12">
      <q-table
        title="Vendedores"
        :rows="sellers"
        row-key="id"
        :columns="tableColumns"
        :filter="searchWord"
        :rows-per-page-options="[10, 50, 100, 200, 0]"
        class=""
      >
        <template v-slot:top-right>
          <q-input borderless dense debounce="300" v-model="searchWord" placeholder="Pesquisar">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
          <q-btn label="Novo" color="primary" class="q-ml-xl" @click="modalCreate?.open()" />
        </template>

        <template v-slot:body-cell-actions="props">
          <q-td :props="props">
            <q-btn
              flat
              size="sm"
              round
              color="primary"
              icon="visibility"
              @click="view(props.row.id)"
            />
            <q-btn flat size="sm" round color="primary" icon="edit" @click="edit(props.row.id)" />
            <q-btn
              flat
              size="sm"
              round
              color="primary"
              :icon="props.row.deletedAt ? 'recycling' : 'delete'"
              @click="disable(props.row.id)"
            />
            <q-btn flat size="md" round color="primary" label="VENDER" @click="sell(props.row.id)" />
          </q-td>
        </template>
      </q-table>
    </div>
  </div>

  <Create ref="modalCreate" :sellers="sellers" @created="getSellers"></Create>
  <Edit ref="modalEdit" :sellers="sellers" :seller="selectedSeller" @saved="getSellers"></Edit>
  <View ref="modalView" :seller="selectedSeller"></View>
  <Disable ref="modalDisable" :seller="selectedSeller" @saved="getSellers"></Disable>
  <Sell ref="modalSell" :seller="selectedSeller" @saved="getSellers"></Sell>
</template>

<script lang="ts" setup>
import { api } from '@/utils';
import Create from './Create.vue';
import Disable from './Disable.vue';
import Edit from './Edit.vue';
import { plainToInstance } from 'class-transformer';
import { ref } from 'vue';
import { tableColumns } from './table-columns';
import { useQuasar } from 'quasar';
import { Seller } from '@/models/seller';
import View from './View.vue';
import Sell from './Sell.vue';

const quasar = useQuasar();

const searchWord = ref<string>('');
const sellers = ref<Seller[]>([]);
const selectedSeller = ref<Seller | null>(null);

const modalCreate = ref<InstanceType<typeof Create> | null>(null);
const modalEdit = ref<InstanceType<typeof Edit> | null>(null);
const modalView = ref<InstanceType<typeof View> | null>(null);
const modalDisable = ref<InstanceType<typeof Disable> | null>(null);
const modalSell = ref<InstanceType<typeof Sell> | null>(null);

const getSellers = () => {
  quasar.loading.show();

  api
    .get('vendedores')
    .then((response) => {
      sellers.value = plainToInstance(Seller, response.data);
      // console.log(sellers);

      quasar.loading.hide();
    })
    .catch((error) => {
      quasar.notify({
        type: 'negative',
        message: 'Houve um problema ao adquirir as informações dos vendedores.',
      });
      console.log('Erro ao adquirir dados de vendedores', error.response);

      quasar.loading.hide();
    });
};

const edit = (id: number) => {
  selectedSeller.value = sellers.value.find((sellers) => sellers.id === id) || null;

  setTimeout(() => {
    modalEdit.value?.open();
  }, 250);
};

const view = (id: number) => {
  selectedSeller.value = sellers.value.find((seller) => seller.id === id) || null;

  setTimeout(() => {
    modalView.value?.open();
  }, 250);
};

const disable = (id: number) => {
  selectedSeller.value = sellers.value.find((seller) => seller.id === id) || null;

  setTimeout(() => {
    modalDisable.value?.open();
  }, 250);
};

const sell = (id: number) => {
  selectedSeller.value = sellers.value.find((seller) => seller.id === id) || null;

  setTimeout(() => {
    modalSell.value?.open();
  }, 250);
};

const init = () => {
  getSellers();
};

init();
</script>
