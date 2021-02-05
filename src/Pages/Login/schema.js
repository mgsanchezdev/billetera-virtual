import * as yup from 'yup';

export const schema = yup.object().shape({
  email: yup.string().email().required('El email es obligatorio'),
  password: yup
    .string()
    .required('La contraseña es obligatoria')
    .min(3, 'Al menos 3 caracteres debe tener la contraseña')
    .max(10, 'Como maximo debe tener 10 caracteres la contraseña'),
});
