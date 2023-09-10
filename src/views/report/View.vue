<template>
  <q-dialog v-model="show" persistent>
    <q-card class="view-modal">
      <q-card-section>
        <div class="text-h6">Detalhes do Vendedor</div>
      </q-card-section>

      <q-card-section>
        <q-list>
          <q-item>
            <q-item-section side>Código: </q-item-section>
            <q-item-section>{{ seller?.id }}</q-item-section>
          </q-item>
          <q-item>
            <q-item-section side>Nome: </q-item-section>
            <q-item-section>{{ seller?.name }}</q-item-section>
          </q-item>
          <q-item>
            <q-item-section side>E-mail: </q-item-section>
            <q-item-section>{{ seller?.email }}</q-item-section>
          </q-item>
          <q-item>
            <q-item-section side>Criado em: </q-item-section>
            <q-item-section>{{ seller?.createdAt.format('L') }}</q-item-section>
          </q-item>
          <q-item>
            <q-item-section side>Atualizado em: </q-item-section>
            <q-item-section>{{ seller?.updatedAt?.format('L') || '-' }}</q-item-section>
          </q-item>
        </q-list>
        <q-table
          title="Vendas"
          :rows="seller.sales"
          row-key="id"
          :columns="tableColumns"
          :rows-per-page-options="[10, 50, 100, 200, 0]"
          class=""
        ></q-table>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Fechar" @click="close" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style lang="scss" scoped>
.view-modal {
  min-width: 550px;
}
</style>

<script lang="ts" setup>
import { ref } from 'vue';
import { Seller } from '@/models/seller';
import { Sale } from '@/models/sale';
import { Moment } from 'moment';

interface Props {
  seller: Seller | null;
}

interface Emits {
  (e: 'open'): void;
  (e: 'close'): void;
}

const emit = defineEmits<Emits>();
defineProps<Props>();

const tableColumns = [
  {
    name: 'createdAt',
    required: true,
    label: 'Data',
    align: 'left',
    field: (row: Sale): Moment | null => row.createdAt,
    format: (val: Moment | null): string => (val !== null ? val.format('L') : '-'),
    sortable: true,
  },
  {
    name: 'amount',
    required: true,
    label: 'Venda',
    align: 'left',
    field: (row: Sale): number => row.amount,
    sortable: true,
  },
  {
    name: 'comission',
    required: true,
    label: 'Comissão',
    align: 'left',
    field: (row: Sale): number => row.comission,
    sortable: true,
  }
];

const show = ref<boolean>(false);

const open = () => {
  show.value = true;
  emit('open');
};

const close = () => {
  show.value = false;
  emit('close');
};

defineExpose({ open, close });
</script>
