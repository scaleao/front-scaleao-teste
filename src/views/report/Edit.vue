<template>
  <q-dialog v-model="show" persistent>
    <q-card>
      <Form ref="form" :sellers="sellers" :seller="seller" @save="save" @cancel="close"></Form>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
import { api } from '@/utils';
import Form from './components/Form.vue';
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { Seller } from '@/models/seller';
import { toRequestData, UserForm } from './models/user-form';

interface Props {
  sellers: Seller[];
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

const form = ref<InstanceType<typeof Form> | null>(null);

const save = (formData: UserForm) => {
  api
    .put(`vendedores/${props.seller?.id}`, { ...toRequestData(formData) })
    .then(() => {
      quasar.notify({
        type: 'positive',
        message: 'Usuário salvo!',
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
