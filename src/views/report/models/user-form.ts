import { Seller } from '@/models/seller';

interface UserForm {
  name: string;
  email: string;
}

interface UserFormToRequest {
  name: string;
  email: string;
}

const getEmptyUserForm = (): UserForm => ({
  name: '',
  email: '',
});

const getFormByInstance = (seller: Seller): UserForm => ({
  name: seller.name,
  email: seller.email,
});

const toRequestData = (formData: UserForm): UserFormToRequest => {
  return {
    name: formData.name,
    email: formData.email,
  };
};

export { getEmptyUserForm, getFormByInstance, toRequestData, UserForm };
