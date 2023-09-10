import '@quasar/extras/material-icons/material-icons.css';
import './styles/quasar.scss';
import lang from 'quasar/lang/pt-BR.js';
import { Loading, Notify } from 'quasar';

// To be used on app.use(Quasar, { ... })
export default {
  config: {
    notify: {
      position: 'top-right',
      timeout: 2500,
    },
    loading: {
      spinnerColor: 'primary',
    },
  },
  plugins: {
    Notify,
    Loading,
  },
  lang: lang,
};
