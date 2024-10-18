import React, { useEffect, useState, useCallback } from 'react';
import CourseCard from '../CourseCard';
import ReactPaginate from 'react-paginate';
import { courses as hardcodedCourses, editCourse as editCourseAPI, deleteCourse as deleteCourseAPI } from '../../data';

function GridCourse() {
    const [courses, setCourses] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [pageSize, setPageSize] = useState(6);
    const [searchKeyword, setSearchKeyword] = useState('');

    // Định nghĩa hàm fetchData trước khi sử dụng
    const fetchData = useCallback(() => {
        const filteredCourses = hardcodedCourses.filter(course =>
            course.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
            course.description.toLowerCase().includes(searchKeyword.toLowerCase())
        );
        const paginatedCourses = filteredCourses.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize);
        setCourses(paginatedCourses);
    }, [searchKeyword, pageNumber, pageSize]); // Thêm dependencies cần thiết

    useEffect(() => {
        fetchData();
    }, [fetchData]); // Sử dụng fetchData đã được định nghĩa

    const handlePageChange = ({ selected }) => {
        setPageNumber(selected);
    };

    const handleSearchChange = (event) => {
        setSearchKeyword(event.target.value);
        setPageNumber(0); // Reset to first page when search keyword changes
    };

    const editCourse = (updatedCourse) => {
        editCourseAPI(updatedCourse);
        fetchData();
    };

    const deleteCourse = (courseId) => {
        deleteCourseAPI(courseId);
        fetchData();
    };

    return (
        <div className='nicdark_container'>
            <div className="nicdark_width_100_percentage">
                <div className="nicdark_section nicdark_padding_15 nicdark_box_sizing_border_box">
                    <div className="nicdark_section nicdark_box_sizing_border_box ">
                        <div className="nicdark_section nicdark_height_10" />
                        <div className="nicdark_width_70_percentage nicdark_float_left nicdark_width_100_percentage_all_iphone">
                            <div className="nicdark_section nicdark_height_20" />
                            <div className="nicdark_width_50_percentage nicdark_float_left">
                                <div className="nicdark_section nicdark_box_sizing_border_box nicdark_float_left nicdark_position_relative nicdark_padding_right_20">
                                    <img alt="" className="nicdark_position_absolute nicdark_top_5 nicdark_left_0 nicdark_margin_top_5" width={15} src="img/icons/icon-pen.svg" />
                                    <input
                                        className="nicdark_padding_left_25 nicdark_border_width_2 nicdark_background_none nicdark_border_top_width_0 nicdark_border_right_width_0 nicdark_border_left_width_0"
                                        type="text"
                                        placeholder="Địa điểm muốn đi ..."
                                        value={searchKeyword}
                                        onChange={handleSearchChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nicdark_width_100_percentage">
                    <div className="nicdark_width_100_percentage">
                        {Array.isArray(courses) && courses.length > 0 ? (
                            courses.map((course) => (
                                <CourseCard key={course.id} course={course} onEditCourse={editCourse} onDeleteCourse={deleteCourse} />
                            ))
                        ) : (
                            <p>No courses found</p>
                        )}
                    </div>
                </div>
                <div className="nicdark_section nicdark_height_50" />
                <div className="nicdark_section nicdark_text_align_center">
                    <ReactPaginate
                        previousLabel="Trang trước"
                        nextLabel="Trang sau"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        pageCount={Math.ceil(hardcodedCourses.length / pageSize)}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageChange}
                        containerClassName="pagination"
                        activeClassName="active"
                        forcePage={pageNumber}
                    />
                </div>
            </div>
            <div className="nicdark_section nicdark_height_70" />
        </div>
    )
}

export default GridCourse;
