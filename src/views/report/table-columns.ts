import { Seller } from '@/models/seller';

const tableColumns = [
  {
    name: 'id',
    required: true,
    label: 'Código',
    align: 'left',
    field: (row: Seller): number | null => row.id,
    sortable: true,
  },
  {
    name: 'name',
    required: true,
    label: 'Nome',
    align: 'left',
    field: (row: Seller): string => row.name,
    sortable: true,
  },
  {
    name: 'total_commission',
    required: true,
    label: 'Comissão Total',
    align: 'left',
    field: (row: Seller): number => row.total_commission,
    sortable: true,
  },
  {
    name: 'actions',
    label: '',
    align: 'left',
    field: (row: Seller): Seller => row,
    sortable: false,
  },
];

export { tableColumns };
