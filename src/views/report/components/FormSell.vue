<template>
  <q-form ref="form" class="ni-form q-gutter-md" @submit="save" autofocus>
    <q-card-section>
      <div class="text-h6">Informe o valor da venda</div>
    </q-card-section>

    <q-card-section class="q-pt-none q-gutter-sm">
      <q-input
        outlined
        v-model="formData.seller_id"
        label="Codigo do vendedor"
        lazy-rules
        disable
        :rules="[FormRules.required]"
      />
      <q-input
        outlined
        v-model="formData.amount"
        label="Valor da venda"
        prefix="$"
        lazy-rules
        :rules="[FormRules.required]"
      />
    </q-card-section>

    <q-card-actions align="right">
      <q-btn flat label="Cancelar" @click="cancel" />
      <q-btn type="submit" color="primary" label="Salvar" />
    </q-card-actions>
  </q-form>
</template>

<style lang="scss" scoped>
.ni-form {
  min-width: 550px;
}
</style>

<script lang="ts" setup>
import { FormRules } from '@/utils';
import { Seller } from '@/models/seller';
import { computed, ref } from 'vue';
import {
  getEmptyUserForm,
  getFormByInstance,
  SellForm,
} from '../models/sell-form';
import { QForm, useQuasar } from 'quasar';

interface Props {
  seller?: Seller | null;
}

interface Emits {
  (e: 'cancel'): void;
  (e: 'save', formData: SellForm): void;
}

const emit = defineEmits<Emits>();
const props = defineProps<Props>();

const quasar = useQuasar();

const formData = ref<SellForm>(getEmptyUserForm());

const form = ref<InstanceType<typeof QForm> | null>(null);

const isEdit = computed(() => props.seller !== undefined && props.seller !== null);

const resetForm = () => {
  formData.value = getEmptyUserForm();
};

const save = () => {
  form.value?.validate().then((success) => {
    if (success) {
      emit('save', formData.value);
    } else {
      quasar.notify({
        type: 'warning',
        message: 'Por favor confira os campos obrigatórios.',
      });
    }
  });
};

const cancel = () => {
  emit('cancel');
  resetForm();
};

const setSeller = (seller: Seller | null) => {
  if (seller !== null) {
    formData.value = getFormByInstance(seller);
  } else {
    resetForm();
  }
};

defineExpose({ resetForm, setSeller });
</script>
