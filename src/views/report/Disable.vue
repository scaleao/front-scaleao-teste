<template>
  <q-dialog v-model="show" persistent>
    <q-card class="view-modal">
      <q-card-section>
        <div class="text-h6">Deletar Vendedor</div>
      </q-card-section>

      <q-card-section>
        <p v-html="message"></p>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Não" @click="close" />
        <q-btn flat label="Sim" @click="confirm" />
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
import { api } from '@/utils';
import { useQuasar } from 'quasar';
import { Seller } from '@/models/seller';
import { computed, ref } from 'vue';

interface Props {
  seller: Seller | null;
}

interface Emits {
  (e: 'open'): void;
  (e: 'close'): void;
  (e: 'saved'): void;
}

const emit = defineEmits<Emits>();
const props = defineProps<Props>();

const quasar = useQuasar();

const show = ref<boolean>(false);

const message = computed(() => {
  if (props.seller?.deletedAt) {
    return `Realmente deseja reabilitar o vendedor: <strong>${props.seller?.name}</strong>?`;
  } else {
    return `Realmente deseja deletar o venededor: <strong>${props.seller?.name}</strong>?`;
  }
});

const disable = () => {
  api
    .delete(`vendedores/${props.seller?.id}`)
    .then(() => {
      quasar.notify({
        type: 'positive',
        message: 'Vendedor deletado!',
      });

      close();
      emit('saved');
    })
    .catch((error) => {
      quasar.notify({
        type: 'negative',
        message: error.response.data.message,
      });

      console.log('Erro ao deletar vendedor.', error.response);
    });
};

const confirm = () => {
  disable();
};

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
