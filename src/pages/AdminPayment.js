import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

function AdminPayment() {
    const [checkoutInfos, setCheckoutInfos] = useState([]);
    const [showCoursesModal, setShowCoursesModal] = useState(false);
    const [selectedCourses, setSelectedCourses] = useState([]);

    useEffect(() => {
        // Fetch checkout information from localStorage
        const storedCheckoutInfos = localStorage.getItem('checkoutInfos');
        if (storedCheckoutInfos) {
            setCheckoutInfos(JSON.parse(storedCheckoutInfos));
        }
    }, []);

    const handleShowCourses = (coursesCard) => {
        setSelectedCourses(coursesCard);
        setShowCoursesModal(true);
    };

    const handleCloseCoursesModal = () => {
        setShowCoursesModal(false);
    };

    return (
        <div>
            <h2>Thông tin giao dịch</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Họ</th>
                        <th>Tên</th>
                        <th>Email</th>
                        <th>Địa chỉ</th>
                        <th>Điện thoại</th>
                        <th>Trạng thái</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {checkoutInfos.map((checkoutInfo, index) => (
                        <tr key={index}>
                            <td>{checkoutInfo.firstName}</td>
                            <td>{checkoutInfo.lastName}</td>
                            <td>{checkoutInfo.email}</td>
                            <td>{checkoutInfo.address}</td>
                            <td>{checkoutInfo.phoneNumber}</td>
                            <td>{checkoutInfo.status ? 'Paid' : 'Unpaid'}</td>
                            <td>
                                <Button onClick={() => handleShowCourses(checkoutInfo.coursesCard)}>
                                    Hiển thị chuyến đi
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal to show courses */}
            <Modal show={showCoursesModal} onHide={handleCloseCoursesModal} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Chuyến đi đã chọn</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Chuyến đi đã chọn</h4>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Chuyến đi</th>
                                <th>Kinh phí</th>
                                <th>Số người</th>
                                <th>Tổng</th>
                                <th>Hướng dẫn</th>
                            </tr>
                        </thead>
                        <tbody>
                            {selectedCourses.map(course => (
                                <tr key={course.id}>
                                    <td>{course.id}</td>
                                    <td>{course.title}</td>
                                    <td>{(course.totalMoneyMonthTeaching).toLocaleString('vi-VN')} VNĐ</td>
                                    <td>{course.quantity}</td>
                                    <td>{(course.quantity * course.totalMoneyMonthTeaching).toLocaleString('vi-VN')} VNĐ</td>
                                    <td>{course.teacher}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseCoursesModal}>
                        Đóng
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
}

export default AdminPayment;
