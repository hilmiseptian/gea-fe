import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserRegister from './views/User/UserRegister';
import UserLogin from './views/User/UserLogin';
import UserLogout from './views/User/UserLogout';
import { AuthProvider } from './lib/context/AuthContext';
import EmployeeCreate from './views/employees/EmployeeCreate';
import './index.css';
import BaseLayout from './views/layouts/BaseLayout';
import EmployeeEdit from './views/employees/EmployeeEdit';
import EmployeeView from './views/employees/EmployeeView';
import EmployeeList from './views/employees/EmployeeList';
function App() {
  return (
    // <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route index path="/" element={<UserLogin />} />
          <Route path="register" element={<UserRegister />} />
          <Route path="/" element={<BaseLayout />}>
            <Route path="employees">
              <Route index element={<EmployeeList />} />
              <Route path="create" element={<EmployeeCreate />} />
              <Route path=":id/edit" element={<EmployeeEdit />} />
              <Route path=":id" element={<EmployeeView />} />
            </Route>
            <Route path="logout" element={<UserLogout />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
    // </React.StrictMode>
  );
}
export default App;
