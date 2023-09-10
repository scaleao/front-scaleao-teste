<template>
  <q-form ref="form" class="ni-form q-gutter-md" @submit="save" autofocus>
    <q-card-section>
      <div class="text-h6">{{ isEdit ? 'Editar Vendedor' : 'Cadastrar Vendedor' }}</div>
    </q-card-section>

    <q-card-section class="q-pt-none q-gutter-sm">
      <q-input
        outlined
        v-model="formData.name"
        label="Nome"
        lazy-rules
        :rules="[FormRules.required]"
      />
      <q-input
        outlined
        v-model="formData.email"
        label="Email"
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
  UserForm,
} from '../models/user-form';
import { QForm, useQuasar } from 'quasar';

interface Props {
  sellers: Seller[];
  seller?: Seller | null;
}

interface Emits {
  (e: 'cancel'): void;
  (e: 'save', formData: UserForm): void;
}

const emit = defineEmits<Emits>();
const props = defineProps<Props>();

const quasar = useQuasar();

const formData = ref<UserForm>(getEmptyUserForm());

const form = ref<InstanceType<typeof QForm> | null>(null);

// const supervisorOptions = computed(() => {
//   const supervisors = props.users.filter(
//     (user) => user.type === User.TYPE_ADMIN || user.type === User.TYPE_SUPERVISOR
//   );

//   return supervisors.map((user) => ({ label: user.name, value: user.id }));
// });

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

// const blockFieldSupervisor = (typeUser: string): boolean => {
//   if(typeUser === User.TYPE_ADMIN || typeUser === User.TYPE_SUPERVISOR || typeUser === User.TYPE_DEVELOPER){
//     return true;
//   }
//   else{
//     return false;
//   }
// };

defineExpose({ resetForm, setSeller });
</script>
