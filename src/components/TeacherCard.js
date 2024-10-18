// components/TeacherCard.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TeacherContext } from '../contexts/TeacherContext';
import RoutePath from '../config/RoutePath';

function TeacherCard({ teacher }) {
    const { setTeacher } = useContext(TeacherContext);

    const handleViewProfile = () => {
        setTeacher(teacher);
    };

    return (
        <div className="grid grid_3">
            <div className="nicdark_section">
                <div className="nicdark_section">
                    <div className="nicdark_section nicdark_position_relative" style={{ width: '100%', height: '200px' }}>
                        <img alt="" className="nicdark_section" src={teacher.cardPhoto} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <div className="nicdark_bg_greydark_alpha_gradient nicdark_position_absolute nicdark_left_0 nicdark_height_100_percentage nicdark_width_100_percentage nicdark_padding_20 nicdark_box_sizing_border_box">
                            <div className="nicdark_position_absolute nicdark_bottom_20">
                                <div className="nicdark_display_inline_block">
                                    <img alt="" width={15} className="nicdark_margin_right_10" src="img/icons/icon-twitter-white.svg" />
                                    <img alt="" width={15} className="nicdark_margin_right_10" src="img/icons/icon-pinterest-white.svg" />
                                    <img alt="" width={15} className="nicdark_margin_right_10" src="img/icons/icon-linkedin-white.svg" />
                                    <img alt="" width={15} className="nicdark_margin_right_10" src="img/icons/icon-google-white.svg" />
                                    <img alt="" width={15} className="nicdark_margin_right_10" src="img/icons/icon-instagram-white.svg" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nicdark_section nicdark_padding_20 nicdark_box_sizing_border_box">
                        <h2><strong className='text-nowrap'>{teacher.fullName}</strong></h2>
                        <div className="nicdark_section nicdark_height_10" />
                        <h6 className="nicdark_text_transform_uppercase nicdark_color_grey">{teacher.major}</h6>
                        <div className="nicdark_section nicdark_height_20" />
                        <p style={{height:'90px'}}>{teacher.description}</p>
                        <div className="nicdark_section nicdark_height_20" />
                        <Link
                            className="fw-bold nicdark_display_inline_block nicdark_color_white nicdark_bg_blue nicdark_first_font nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13"
                            to={RoutePath.TEACHERSINGLE}
                            onClick={handleViewProfile}
                        >
                            Xem thông tin
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeacherCard;
