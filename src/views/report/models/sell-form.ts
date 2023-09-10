import { Seller } from '@/models/seller';

interface SellForm {
  seller_id?: number | null | undefined;
  amount?: number | null | undefined;
}

interface UserFormToRequest {
  seller_id: number | null | undefined;
  amount: number | null | undefined;
}

const getEmptyUserForm = (): SellForm => ({
  seller_id: 0,
  amount: 0,
});

const getFormByInstance = (seller: Seller): SellForm => ({
  seller_id: seller.id,
  amount: 0,
});

const toRequestData = (formData: SellForm): UserFormToRequest => {
  return {
    seller_id: formData.seller_id,
    amount: formData.amount,
  };
};

export { getEmptyUserForm, getFormByInstance, toRequestData, SellForm };
