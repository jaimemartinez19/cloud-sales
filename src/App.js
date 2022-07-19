import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Login from './componentes/Login';
import Sales from './componentes/Sales';

import ProductsAdmin from './componentes/productos/ProductsAdmin';
import ProductsAdd from './componentes/productos/ProductsAdd';
import ProductsEdit from './componentes/productos/ProductsEdit';

import UsersAdd from './componentes/usuarios/UsersAdd';
import UsersAdmin from './componentes/usuarios/UsersAdmin';
import UsersEdit from './componentes/usuarios/UsersEdit';

import ClientsAdd from './componentes/clients/ClientsAdd';
import ClientsAdmin from './componentes/clients/ClientsAdmin';
import ClientsEdit from './componentes/clients/ClientsEdit';


function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/sales" element={<Sales />}></Route>
        <Route path="/products" element={<ProductsAdmin />}></Route>
        <Route path="/products/add" element={<ProductsAdd />}></Route>
        <Route path="/products/edit" element={<ProductsEdit />}></Route>
        <Route path="/users" element={<UsersAdmin />}></Route>
        <Route path="/users/add" element={<UsersAdd />}></Route>
        <Route path="/users/edit" element={<UsersEdit />}></Route>
        <Route path="/clients" element={<ClientsAdmin />}></Route>
        <Route path="/clients/add" element={<ClientsAdd />}></Route>
        <Route path="/clients/edit" element={<ClientsEdit />}></Route>
      </Routes>
    </div>
  );
}

export default App;
