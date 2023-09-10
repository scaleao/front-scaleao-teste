const required = (val: unknown): true | string => {
  let result = false;

  if (typeof val === 'string') {
    result = val.length > 0;
  } else if (typeof val !== null && typeof val !== undefined) {
    result = true;
  }

  return result || 'Campo obrigatório';
};

const password = (val: string): true | string =>
  (val && val.length > 5) || 'Senha deve ter pelo menos 6 caracteres';

const confirm =
  (valToCompare: string, valToCompareName: string): ((val: string) => true | string) =>
  (val: string): true | string =>
    (val && val === valToCompare) || `Deve ser igual ao campo ${valToCompareName}`;

const FormRules = {
  confirm,
  password,
  required,
};

export { FormRules };
