<template>
  <q-dialog v-model="show" persistent>
    <q-card>
      <FormSell ref="form" :seller="seller" @save="save" @cancel="close"></FormSell>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
import { api } from '@/utils';
import FormSell from './components/FormSell.vue';
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { Seller } from '@/models/seller';
import { toRequestData, SellForm } from './models/sell-form';

interface Props {
  seller?: Seller | null;
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

const form = ref<InstanceType<typeof FormSell> | null>(null);

const save = (formData: SellForm) => {
  api
    .post('venda', { ...toRequestData(formData) })
    .then((response) => {
      quasar.notify({
        type: 'positive',
        message: 'Venda realizada! Comissão:' + response.data.comission,
      });

      close();
      form.value?.resetForm();
      emit('saved');
    })
    .catch((error) => {
      if (error.response.status === 422) {
        quasar.notify({
          type: 'warning',
          message: error.response.data.message,
        });
      } else {
        quasar.notify({
          type: 'negative',
          message: error.response.data.message,
        });
        console.log('Erro ao salvar usuário.', error.response);
      }
    });
};

const open = () => {
  show.value = true;
  emit('open');

  setTimeout(() => form.value?.setSeller(props.seller), 250);
};

const close = () => {
  show.value = false;
  emit('close');
};

defineExpose({ open, close });
</script>
