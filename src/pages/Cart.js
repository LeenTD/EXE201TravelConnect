import React, { useState, useEffect } from 'react';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';
import RoutePath from '../config/RoutePath';

function Cart() {
    const [courses, setCourses] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const storedCourses = localStorage.getItem('coursesCard');
        if (storedCourses) {
            const parsedCourses = JSON.parse(storedCourses);
            setCourses(parsedCourses);
            calculateTotalPrice(parsedCourses); // Call calculateTotalPrice after updating courses
        }
    }, []);

    const calculateTotalPrice = (courses) => {
        let total = 0;
        courses.forEach(course => {
            total += course.totalCost;
        });
        setTotalPrice(total);
    };

    // const handleAddCourse = (course) => {
    //     const updatedCourses = [...courses, course];
    //     setCourses(updatedCourses);
    //     localStorage.setItem('coursesCard', JSON.stringify(updatedCourses));
    //     calculateTotalPrice(updatedCourses);
    // };

    const handleRemoveCourse = (courseId) => {
        const updatedCourses = courses.filter((course) => course.id !== courseId);
        setCourses(updatedCourses);
        localStorage.setItem('coursesCard', JSON.stringify(updatedCourses));
        calculateTotalPrice(updatedCourses);
    };

    const handleUpdateQuantity = (courseId, newQuantity) => {
        const updatedCourses = courses.map((course) => {
            if (course.id === courseId) {
                return { ...course, quantity: newQuantity, totalCost: course.totalMoneyMonthTeaching * newQuantity };
            }
            return course;
        });
        setCourses(updatedCourses);
        localStorage.setItem('coursesCard', JSON.stringify(updatedCourses));
        calculateTotalPrice(updatedCourses);
    };
    console.log('Courses in cart:', courses);
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-8'>
                    <h1 className='text-center'>Chuyến đi bạn quan tâm</h1>
                    <table className="table table-responsive">
                        <thead>
                            <tr>
                                <th scope="col">Điểm đến</th>
                                <th scope="col">Giá</th>
                                <th scope="col">Số lượng người</th>
                                <th scope="col">Tổng</th>
                                <th scope="col">Xóa</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses.map((course, index) => (
                                <CartItem
                                    key={index}
                                    course={course}
                                    onRemove={handleRemoveCourse}
                                    onUpdateQuantity={handleUpdateQuantity}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='my-5 col-md-4'>
                    <table className="nicdark_section">
                        <thead>
                            <tr className="nicdark_border_bottom_2_solid_grey">
                                <td className="nicdark_padding_20 nicdark_width_50_percentage">
                                    <h6 className="nicdark_text_transform_uppercase">Tổng</h6>
                                </td>
                                <td className="nicdark_padding_20 nicdark_width_50_percentage"></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="">
                                <td className="nicdark_padding_20">
                                    <p>Subtotal</p>
                                </td>
                                <td className="nicdark_padding_20">
                                    <p className="nicdark_color_greydark">{(totalPrice).toLocaleString('vi-VN')} VNĐ</p>
                                </td>
                            </tr>
                            <tr className="nicdark_border_bottom_2_solid_grey">
                                <td className="nicdark_padding_20">
                                    <p>Method</p>
                                </td>
                                <td className="nicdark_padding_20">
                                    <p className="nicdark_color_greydark">Paypal</p>
                                </td>
                            </tr>
                            <tr className="">
                                <td className="nicdark_padding_20">
                                    <p>Total</p>
                                </td>
                                <td className="nicdark_padding_20">
                                    <h2><strong className='text-nowrap'>{(totalPrice).toLocaleString('vi-VN')} VNĐ</strong></h2>
                                </td>
                            </tr>
                            <tr>
                                <td> <Link to={RoutePath.COURSE} className='btn btn-lg btn-danger rounded-0 fw-bold'><i className="bi bi-arrow-left-circle-fill"></i> Return to buy</Link></td>
                                <td> <Link to={RoutePath.CHECKOUT} className='btn btn-lg btn-success rounded-0 fw-bold'>Check out <i className="bi bi-arrow-right-circle-fill"></i></Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Cart;
