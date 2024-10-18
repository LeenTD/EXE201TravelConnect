import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { users, teachers } from '../data';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        role: 'user', // Default role
        username: '', // For users
        password: '', // Common field
        passwordRepeat: '', // Common field
        email: '', // Common field
        imageUrl: '', // Common field
        fullname: '', // For teachers
        city: '', // For teachers
        description: '', // For teachers
        phone: '', // For teachers
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate required fields
        if (!formData.email || !formData.password || !formData.passwordRepeat || !formData.imageUrl) {
            toast.error('Vui lòng điền đầy đủ các trường bắt buộc.');
            return;
        }
        if (formData.role === 'user' && !formData.username) {
            toast.error('Vui lòng nhập Họ tên cho người dùng.');
            return;
        }
        if (formData.role === 'teacher' && (!formData.fullname || !formData.city || !formData.description || !formData.phone)) {
            toast.error('Vui lòng điền đầy đủ thông tin cho hướng dẫn viên.');
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast.error('Email không hợp lệ. Vui lòng nhập đúng định dạng email.');
            return;
        }

        // Validate password match
        if (formData.password !== formData.passwordRepeat) {
            toast.error('Mật khẩu và Nhập lại mật khẩu không khớp. Vui lòng kiểm tra lại.');
            return;
        }

        // Check for existing username or fullname
        const existingUser = users.find(user => user.username === formData.username) ||
            teachers.find(teacher => teacher.fullname === formData.fullname);
        if (existingUser) {
            toast.error('Tên người dùng hoặc Họ và tên đã tồn tại. Vui lòng chọn tên khác.');
            return;
        }

        // Check for existing email
        const existingEmail = users.find(user => user.email === formData.email) ||
            teachers.find(teacher => teacher.email === formData.email);
        if (existingEmail) {
            toast.error('Email đã tồn tại. Vui lòng sử dụng email khác.');
            return;
        }

        // Tạo một đối tượng người dùng hoặc giáo viên mới
        const newEntry = {
            id: formData.role === 'user' ? users.length + 1 : teachers.length + 1,
            role: formData.role,
            email: formData.email,
            imageUrl: formData.imageUrl,
            password: formData.password,
        };

        if (formData.role === 'teacher') {
            newEntry.fullname = formData.fullname;
            newEntry.city = formData.city;
            newEntry.description = formData.description;
            newEntry.phone = formData.phone;
            teachers.push(newEntry);
            toast.success('Đăng ký hướng dẫn viên thành công!');
        } else {
            newEntry.username = formData.username;
            users.push(newEntry);
            toast.success('Đăng ký người dùng thành công!');
        }

        // Lưu danh sách users vào Local Storage
        localStorage.setItem('users', JSON.stringify(users));
        console.log('New entry:', newEntry);
    };

    return (
        <div className="container">
            <ToastContainer />
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <select className="form-select" name="role" value={formData.role} onChange={handleChange}>
                        <option value="user">Người du lịch</option>
                        <option value="teacher">Hướng dẫn viên</option>
                    </select>
                </div>
                {/* Fields for user */}
                {formData.role === 'user' && (
                    <div className="mb-3">
                        <input type="text" className="form-control" name="username" value={formData.username} onChange={handleChange} placeholder="Họ tên" />
                    </div>
                )}
                {/* Fields for teacher */}
                {formData.role === 'teacher' && (
                    <>
                        <div className="mb-3">
                            <input type="text" className="form-control" name="fullname" value={formData.fullname} onChange={handleChange} placeholder="Họ và tên" />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" name="city" value={formData.city} onChange={handleChange} placeholder="Thành phố" />
                        </div>
                        <div className="mb-3">
                            <textarea className="form-control" name="description" value={formData.description} onChange={handleChange} placeholder="Mô tả" />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" name="phone" value={formData.phone} onChange={handleChange} placeholder="Số điện thoại" />
                        </div>
                    </>
                )}

                <div className="mb-3">
                    <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                </div>

                <div className="mb-3">
                    <input type="text" className="form-control" name="imageUrl" value={formData.imageUrl} onChange={handleChange} placeholder="Image URL" />
                </div>

                <div className="mb-3">
                    <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} placeholder="Mật khẩu" />
                </div>

                <div className="mb-3">
                    <input type="password" className="form-control" name="passwordRepeat" value={formData.passwordRepeat} onChange={handleChange} placeholder="Nhập lại mật khẩu" />
                </div>

                <button type="submit" className="btn btn-primary">Đăng ký</button>
            </form>
        </div>
    );
};

export default SignupForm;
