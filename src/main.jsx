import ReactDOM from 'react-dom/client'
import './index.css'
import router from './route/Router/Router.jsx';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider >
);
