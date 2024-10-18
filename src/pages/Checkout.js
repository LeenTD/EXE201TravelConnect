import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RoutePath from '../config/RoutePath';

function Checkout() {
    const [courses, setCourses] = useState([]);
    const [total, setTotal] = useState(0);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        phoneNumber: '',
        paymentMethod: 'credit' // default payment method
    });

    const shortenDescription = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.substr(0, maxLength) + '...';
    };

    useEffect(() => {
        const storedCourses = localStorage.getItem('coursesCard');
        if (storedCourses) {
            setCourses(JSON.parse(storedCourses));
        }
    }, []);

    useEffect(() => {
        const calculateTotal = () => {
            let totalCost = 0;
            courses.forEach((course) => {
                totalCost += (course.totalMoneyMonthTeaching * course.numberTeachOfWeek);
            });
            setTotal(totalCost);
        };
        calculateTotal();
    }, [courses]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const checkoutInfo = {
            ...formData,
            status: false,
            coursesCard: courses
        };

        // Retrieve existing checkoutInfos array from localStorage
        let checkoutInfos = localStorage.getItem('checkoutInfos');
        checkoutInfos = checkoutInfos ? JSON.parse(checkoutInfos) : [];

        // Add the new checkoutInfo to the array
        checkoutInfos.push(checkoutInfo);

        // Save the updated array back to localStorage
        localStorage.setItem('checkoutInfos', JSON.stringify(checkoutInfos));

        // Clear coursesCard from localStorage
        localStorage.removeItem('coursesCard');
        // Redirect to QR page
        window.location.href = RoutePath.QR;
    };

    return (
        <div className="container">
            <div className="py-5 text-center">
                <h2>Register</h2>
            </div>
            <div className="row">
                <div className="col-md-4 order-md-2 mb-4">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-muted">Chuyến đi của bạn</span>
                        <span className="badge badge-secondary badge-pill">{courses.length}</span>
                    </h4>
                    <ul className="list-group mb-3">
                        {courses.map(item => (
                            <li key={item.id} className="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 className="my-0">{item.title}</h6>
                                    <small className="text-muted">{shortenDescription(item.description, 70)}</small>
                                </div>
                                <span className="text-muted text-nowrap">{item.quantity} X {item.totalMoneyMonthTeaching} VNĐ</span>
                            </li>
                        ))}
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total (USD)</span>
                            <strong>{total} VNĐ</strong>
                        </li>
                    </ul>
                </div>
                <div className="col-md-8 order-md-1">
                    <h4 className="mb-3">Thông tin học viên</h4>
                    <form className="needs-validation" noValidate onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="firstName">Họ</label>
                                <input type="text" className="form-control" id="firstName" value={formData.firstName} onChange={handleChange} required />
                                <div className="invalid-feedback">
                                    Valid first name is required.
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="lastName">Tên</label>
                                <input type="text" className="form-control" id="lastName" value={formData.lastName} onChange={handleChange} required />
                                <div className="invalid-feedback">
                                    Valid last name is required.
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">Email <span className="text-muted"></span></label>
                            <input type="email" className="form-control" id="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required />
                            <div className="invalid-feedback">
                                Please enter a valid email address for shipping updates.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address">Address</label>
                            <input type="text" className="form-control" id="address" value={formData.address} onChange={handleChange} placeholder="Nhập địa chỉ..." required />
                            <div className="invalid-feedback">
                                Please enter your shipping address.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phoneNumber">Số điện thoại <span className="text-muted"></span></label>
                            <input type="text" className="form-control" id="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Nhập số điện thoại..." required />
                        </div>
                        <hr className="my-4" />
                        <h4 className="mb-3">Payment</h4>
                        <div className="d-block my-3">
                            <div className="custom-control custom-radio">
                                <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" value="credit" checked={formData.paymentMethod === 'credit'} onChange={handleChange} required />
                                <label className="custom-control-label" htmlFor="credit">Transfer</label>
                            </div>
                            <div className="custom-control custom-radio">
                                <input id="momo" name="paymentMethod" type="radio" className="custom-control-input" value="momo" checked={formData.paymentMethod === 'momo'} onChange={handleChange} required />
                                <label className="custom-control-label" htmlFor="momo">Momo</label>
                            </div>
                        </div>
                        <hr className="mb-4" />
                        <button className="btn btn-primary btn-lg btn-block mb-4" type="submit">Continue to checkout</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
