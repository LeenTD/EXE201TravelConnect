import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Form } from 'react-bootstrap';
import { TeacherContext } from '../contexts/TeacherContext';
import ReactPaginate from 'react-paginate';
import { addCourse, editCourse, deleteCourse, users as initialUsers } from '../data';

function AdminUser() {
  const [subjects, setSubjects] = useState([]);
  const [show, setShow] = useState(false);
  const [modalType, setModalType] = useState('');
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    imageUrl: '', // Add imageUrl field
  });
  const [pageNumber, setPageNumber] = useState(0);
  const subjectsPerPage = 4;

  const { token } = useContext(TeacherContext);

  // Function to fetch subjects from localStorage
  const fetchSubjects = () => {
    // Retrieve users from localStorage or fallback to initialUsers
    const storedUsers = JSON.parse(localStorage.getItem('users')) || initialUsers;
    setSubjects(storedUsers);
  };

  useEffect(() => {
    fetchSubjects();
  }, []); // Fetch subjects only once when component mounts

  const handleShow = (type, subject = null) => {
    setModalType(type);
    setSelectedSubject(subject);
    setShow(true);

    if (subject) {
      setFormData(subject);
    } else {
      setFormData({
        username: '', // Reset field
        password: '', // Reset field
        email: '', // Reset field
        imageUrl: '', // Reset imageUrl field
      });
    }
  };

  const handleClose = () => setShow(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSave = () => {
    if (modalType === 'create') {
      const newUser = { id: subjects.length + 1, ...formData };
      addCourse(newUser); // Ensure addCourse adds the user to localStorage as well
    } else {
      editCourse(formData); // Ensure editCourse updates the user in localStorage
    }

    fetchSubjects(); // Refresh the list
    handleClose();
  };

  const handleDelete = (id) => {
    deleteCourse(id); // Ensure deleteCourse removes the user from localStorage
    fetchSubjects();
  };

  // Function to handle page change
  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };

  const offset = pageNumber * subjectsPerPage;
  const currentPageSubjects = subjects.slice(offset, offset + subjectsPerPage);

  return (
    <div className="container" style={{ height: "600px" }}>
      <h1>Quản lý người dùng</h1>
      <Button variant="primary" onClick={() => handleShow('create')}>
        Tạo người dùng
      </Button>
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Ảnh</th>
            <th>Tên đăng nhập</th>
            <th>Mật khẩu</th>
            <th>Email</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {currentPageSubjects.map(subject => (
            <tr key={subject.id}>
              <td>
                {subject.imageUrl && <img src={subject.imageUrl} alt={subject.username} style={{ width: '50px', height: '50px' }} />}
              </td>
              <td>{subject.username}</td>
              <td>{subject.password}</td>
              <td>{subject.email}</td>
              <td className='d-flex justify-content-between'>
                <Button variant="warning" onClick={() => handleShow('update', subject)}>Chỉnh sửa</Button>
                <Button variant="danger" onClick={() => handleDelete(subject.id)}>Xóa</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={Math.ceil(subjects.length / subjectsPerPage)}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
      />

      {/* Modal for creating/updating a subject */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalType === 'create' ? 'Tạo người dùng' : 'Chỉnh sửa người dùng'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Tên người dùng</Form.Label>
              <Form.Control
                type="text"
                name="username" // Changed from "title" to "username"
                value={formData.username} // Changed from "formData.title" to "formData.username"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Mật khẩu</Form.Label>
              <Form.Control
                type="password" // Changed to password type for security
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email" // Changed to email type for validation
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Lưu thay đổi
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AdminUser;
