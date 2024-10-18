import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import RoutePath from '../config/RoutePath';
import { TeacherContext } from '../contexts/TeacherContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CourseCard({ course }) {
    const { title, description, totalMoneyMonthTeaching, numberTeachOfWeek, oneHourTeaching, teacher } = course;
    const { setCourse } = useContext(TeacherContext);

    const shortenDescription = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.substr(0, maxLength) + '...';
    };


    const handleRegister = () => {
        const coursesInLocalStorage = JSON.parse(localStorage.getItem('coursesCard')) || [];
        const existingCourseIndex = coursesInLocalStorage.findIndex((c) => c.id === course.id);

        if (existingCourseIndex !== -1) {
            // Increment quantity if the course already exists
            coursesInLocalStorage[existingCourseIndex].quantity += 1;
            coursesInLocalStorage[existingCourseIndex].totalCost += coursesInLocalStorage[existingCourseIndex].totalMoneyMonthTeaching;
        } else {
            // Add new course with quantity 1 and initial total cost
            coursesInLocalStorage.push({ ...course, quantity: 1, totalCost: totalMoneyMonthTeaching });
        }

        localStorage.setItem('coursesCard', JSON.stringify(coursesInLocalStorage));
        toast.success('Course registered successfully!', {
            toastClassName: 'my-custom-toast'
        });
    };

    return (
        <div className="nicdark_width_33_percentage nicdark_width_100_percentage_responsive nicdark_float_left">
            <div className="nicdark_section nicdark_padding_15 nicdark_box_sizing_border_box">
                <div className="nicdark_section nicdark_border_1_solid_grey">
                    <div className="nicdark_section nicdark_position_relative">
                        <img alt="course" className="nicdark_section" height={230} style={{ objectFit: 'cover' }} src={course.imageUrl} />
                        <div className="nicdark_bg_greydark_alpha_gradient_2 nicdark_position_absolute nicdark_left_0 nicdark_height_100_percentage nicdark_width_100_percentage nicdark_padding_20 nicdark_box_sizing_border_box">
                            <a className="nicdark_tooltip_jquery nicdark_position_absolute nicdark_right_0" title="Add To Favorites" href="index.html">
                                <img alt="heart icon" className="nicdark_margin_right_60" width={25} src="img/icons/icon-heart-white.svg" />
                            </a>
                            <a className="nicdark_tooltip_jquery nicdark_position_absolute nicdark_right_0" title="Add To Compare" href="index.html">
                                <img alt="compare icon" className="nicdark_margin_right_20 nicdark_right_0" width={25} src="img/icons/icon-compare-white.svg" />
                            </a>
                            <div className="nicdark_position_absolute nicdark_bottom_20">
                                <div className="nicdark_display_table nicdark_float_left">
                                    {/* <img alt="calendar icon" className="nicdark_margin_right_10 nicdark_display_table_cell nicdark_vertical_align_middle" width={20} src="img/icons/icon-calendar.svg" />
                                    <p className="nicdark_color_white nicdark_display_table_cell nicdark_vertical_align_middle nicdark_font_size_13">
                                        21/12/2017</p> */}
                                    <img alt="clock icon" className="nicdark_margin_right_10 nicdark_margin_left_20 nicdark_display_table_cell nicdark_vertical_align_middle" width={20} src="img/icons/icon-clock.svg" />
                                    <p className="nicdark_color_white nicdark_display_table_cell nicdark_vertical_align_middle nicdark_font_size_13">
                                        {oneHourTeaching} người tham gia</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nicdark_section nicdark_padding_20 nicdark_box_sizing_border_box">
                        <h3>
                            <Link className="nicdark_color_greydark nicdark_first_font" to={RoutePath.COURSESINGLE} onClick={() => setCourse(course)}>
                                {title}
                            </Link>
                        </h3>
                        <div className="nicdark_section nicdark_height_20" />
                        <p>
                            <Link className="nicdark_color_greydark" to={RoutePath.COURSESINGLE} onClick={() => setCourse(course)}>
                                <p><strong>Hướng dẫn viên: </strong>{teacher}</p>   {shortenDescription(description, 37)} {/* Adjust 100 to desired length */}
                            </Link>
                        </p>
                        <div className="nicdark_section nicdark_height_20" />
                        <p><strong>Kinh phí: </strong>{(totalMoneyMonthTeaching).toLocaleString('vi-VN')} VND</p>
                        <p><strong>Thời gian đi: </strong>{numberTeachOfWeek}</p>

                        <button className='w-100 btn btn-primary' onClick={handleRegister}>
                            Đăng kí tham gia
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default CourseCard;
