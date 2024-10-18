import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RoutePath from '../config/RoutePath';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    // Lấy danh sách users từ Local Storage
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Tìm user trong danh sách dựa trên email và password nhập vào
    const user = storedUsers.find((user) => user.email === email && user.password === password);

    // Chuyển hướng đến trang admin
    if (user) {
      // Nếu tìm thấy user, đăng nhập thành công
      toast.success('Đăng nhập thành công');

      // Lưu thông tin người dùng vào localStorage
      localStorage.setItem('currentUser', JSON.stringify(user)); // Lưu thông tin người dùng
      localStorage.setItem('token', user.token); // Lưu token vào localStorage
      window.location.href = RoutePath.HOME;

    } else if (email === 'Admin' && password === 'admin') {
      window.location.href = '/admin';
      // Nếu không tìm thấy user, đăng nhập thất bại

    } else {
      toast.error('Đăng nhập thất bại');
    }
  };

  return (
    <div className="container">
      <h2 className='text-white'>Login</h2>
      <form onSubmit={handleLogin} className='my-5'>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Địa chỉ email</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Mật khẩu</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary my-3">Đăng nhập</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default LoginForm;
