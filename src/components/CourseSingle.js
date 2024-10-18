import React, { useContext } from 'react'
import { TeacherContext } from '../contexts/TeacherContext'

function CourseSingle() {
    const { course } = useContext(TeacherContext);
    if (!course) {
        return <div>No course data available</div>;
    }
    return (
        <div>
            <div className="nicdark_section nicdark_bg_grey nicdark_border_bottom_1_solid_grey">
                {/*start nicdark_container*/}
                <div className="nicdark_container nicdark_clearfix">
                    <div className="grid grid_12">
                        <a href="#">Home</a>
                        <img alt className="nicdark_margin_left_10 nicdark_margin_right_10" width={10} src="img/icons/icon-next-grey.svg" />
                        <a href="#">Courses</a>
                        <img alt className="nicdark_margin_left_10 nicdark_margin_right_10" width={10} src="img/icons/icon-next-grey.svg" />
                        <a href="#">{course.title}</a>
                    </div>
                </div>
                {/*end container*/}
            </div>

            <div className="nicdark_section nicdark_height_50" />

            <div className="nicdark_section">
                {/*start nicdark_container*/}
                <div className="nicdark_container nicdark_clearfix">
                    <div className="nicdark_width_66_percentage nicdark_width_100_percentage_ipad_port nicdark_width_100_percentage_all_iphone nicdark_float_left">
                        <div className="nicdark_section nicdark_padding_15 nicdark_box_sizing_border_box">
                            <h1>COURSE NAME: {course.subjectName}</h1>
                            <div className="nicdark_section nicdark_height_20" />
                            
                            
                            <div className="nicdark_section nicdark_height_20" />
                            <div className="nicdark_section nicdark_position_relative">
                                <img alt className="nicdark_section" src="img/courses/img3.jpg" />
                                <div className="nicdark_bg_greydark_alpha_gradient nicdark_position_absolute nicdark_left_0 nicdark_height_100_percentage nicdark_width_100_percentage nicdark_padding_20 nicdark_box_sizing_border_box">
                                   
                                </div>
                            </div>
                            <div className="nicdark_section nicdark_height_40" />
                            <div className="nicdark_section">
                                {/*START tab*/}
                                <div className="nicdark_tabs">
                                    <ul className="nicdark_list_style_none nicdark_margin_0 nicdark_padding_0 nicdark_section nicdark_border_bottom_2_solid_grey">
                                        <li className="nicdark_display_inline_block">
                                            <h4><a className="nicdark_outline_0 nicdark_padding_20 nicdark_display_inline_block nicdark_first_font nicdark_color_greydark" href="#tabs-1">Descriptions</a></h4>
                                        </li>
                                        <li className="nicdark_display_inline_block">
                                            <h4><a className="nicdark_outline_0 nicdark_padding_20 nicdark_display_inline_block nicdark_first_font nicdark_color_greydark" href="#tabs-2">Program</a></h4>
                                        </li>
                                        <li className="nicdark_display_inline_block">
                                            <h4><a className="nicdark_outline_0 nicdark_padding_20 nicdark_display_inline_block nicdark_first_font nicdark_color_greydark" href="#tabs-3">Teachers</a></h4>
                                        </li>
                                        <li className="nicdark_display_inline_block">
                                            <h4><a className="nicdark_outline_0 nicdark_padding_20 nicdark_display_inline_block nicdark_first_font nicdark_color_greydark" href="#tabs-5">Reviews</a></h4>
                                        </li>
                                      
                                    </ul>
                                    <div className="nicdark_section nicdark_height_40" />
                                    <div className="nicdark_section" id="tabs-1">
                                        <h3><strong>Course Description</strong></h3>
                                        <div className="nicdark_section nicdark_height_20" />
                                        <p>{course.description}</p>
                                        <div className="nicdark_section nicdark_height_40" />
                                       
                                     
                                    </div>
                                    <div className="nicdark_section" id="tabs-2">
                                        {/*START program*/}
                                        <h3><strong>Our Program</strong></h3>
                                        <div className="nicdark_section nicdark_height_30" />
                                        <div className="nicdark_section">
                                            <div className="nicdark_section nicdark_border_top_1_solid_grey nicdark_padding_15 nicdark_box_sizing_border_box">
                                                <div className="nicdark_width_15_percentage nicdark_width_100_percentage_responsive nicdark_float_left">
                                                    <table>
                                                        <tbody><tr>
                                                            <td><img alt width={20} src="img/icons/icon-file-green.svg" /></td>
                                                            <td><span className="nicdark_color_grey nicdark_first_font nicdark_font_size_12 nicdark_margin_left_10">LESSON</span>
                                                            </td>
                                                        </tr>
                                                        </tbody></table>
                                                </div>
                                                <div className="nicdark_width_75_percentage nicdark_width_100_percentage_responsive nicdark_float_left">
                                                    <h4 className="nicdark_padding_5 nicdark_second_font">Introducing the
                                                        program of the course</h4>
                                                </div>
                                                <div className="nicdark_width_10_percentage nicdark_width_100_percentage_responsive nicdark_float_left nicdark_text_align_right nicdark_text_align_left_responsive nicdark_margin_top_5_responsive">
                                                    <a className="nicdark_display_inline_block nicdark_color_white nicdark_bg_violet nicdark_first_font nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13" href="#">PREVIEW</a>
                                                </div>
                                            </div>
                                            <div className="nicdark_section nicdark_border_top_1_solid_grey nicdark_padding_15 nicdark_box_sizing_border_box">
                                                <div className="nicdark_width_15_percentage nicdark_width_100_percentage_responsive nicdark_float_left">
                                                    <table>
                                                        <tbody><tr>
                                                            <td><img alt width={20} src="img/icons/icon-file-green.svg" /></td>
                                                            <td><span className="nicdark_color_grey nicdark_first_font nicdark_font_size_12 nicdark_margin_left_10">PDF</span>
                                                            </td>
                                                        </tr>
                                                        </tbody></table>
                                                </div>
                                                <div className="nicdark_width_75_percentage nicdark_width_100_percentage_responsive nicdark_float_left">
                                                    <h4 className="nicdark_padding_5 nicdark_second_font">Download course
                                                        slides</h4>
                                                </div>
                                                <div className="nicdark_width_10_percentage nicdark_width_100_percentage_responsive nicdark_float_left nicdark_text_align_right nicdark_text_align_left_responsive nicdark_margin_top_5_responsive">
                                                    <a className="nicdark_display_inline_block nicdark_color_white nicdark_bg_violet nicdark_first_font nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13" href="#">PREVIEW</a>
                                                </div>
                                            </div>
                                            <div className="nicdark_section nicdark_border_top_1_solid_grey nicdark_padding_15 nicdark_box_sizing_border_box ">
                                                <div className="nicdark_width_15_percentage nicdark_width_100_percentage_responsive nicdark_float_left">
                                                    <table>
                                                        <tbody><tr>
                                                            <td><img alt width={20} src="img/icons/icon-play-green.svg" /></td>
                                                            <td><span className="nicdark_color_grey nicdark_first_font nicdark_font_size_12 nicdark_margin_left_10">VIDEO</span>
                                                            </td>
                                                        </tr>
                                                        </tbody></table>
                                                </div>
                                                <div className="nicdark_width_75_percentage nicdark_width_100_percentage_responsive nicdark_float_left">
                                                    <h4 className="nicdark_padding_5 nicdark_second_font">Final Exams</h4>
                                                </div>
                                                <div className="nicdark_width_10_percentage nicdark_width_100_percentage_responsive nicdark_float_left nicdark_text_align_right nicdark_text_align_left_responsive nicdark_margin_top_5_responsive">
                                                    <a className="nicdark_display_inline_block nicdark_color_white nicdark_bg_violet nicdark_first_font nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13" href="#">PREVIEW</a>
                                                </div>
                                            </div>
                                        </div>
                                        {/*END program*/}
                                    </div>
                                    <div className="nicdark_section" id="tabs-3">
                                        <h3><strong>Our Main Teachers</strong></h3>
                                        <div className="nicdark_section nicdark_height_30" />
                                        <div className="nicdark_section">
                                            {/*START teacher*/}
                                            {course.listTutorDTO.map(teacher => {
                                                return (
                                                    <div className="nicdark_section nicdark_border_top_1_solid_grey nicdark_padding_40_20 nicdark_box_sizing_border_box">
                                                        <div className="nicdark_display_table nicdark_float_left">
                                                            <div className="nicdark_display_table_cell nicdark_vertical_align_middle">
                                                                <img alt className="nicdark_width_50_all_iphone nicdark_margin_right_20 nicdark_border_radius_100_percentage " width={100} src="img/avatar/avatar-chef-3.jpg" />
                                                            </div>
                                                            <div className="nicdark_display_table_cell nicdark_vertical_align_middle">
                                                                <h3 className><strong>{teacher.fullName}</strong></h3>
                                                                <div className="nicdark_section nicdark_height_5" />
                                                                <h5 className="nicdark_color_grey">{teacher.major}</h5>
                                                                <div className="nicdark_section nicdark_height_20" />
                                                               
                                                            </div>
                                                        </div>
                                                        <div className="nicdark_section nicdark_height_20" />
                                                        <p className="nicdark_section">{teacher.description}</p>
                                                    </div>
                                                );
                                            })}
                                            {/*END teacher*/}



                                        </div>
                                    </div>
                            
                                    <div className="nicdark_section" id="tabs-5">
                                        <div className="nicdark_section">
                                            <h3><strong>Course Reviews</strong></h3>
                                            <div className="nicdark_section nicdark_height_30" />
                                            <div className="nicdark_section">
                                                <div className="nicdark_width_30_percentage nicdark_width_100_percentage_all_iphone nicdark_border_radius_3 nicdark_float_left nicdark_text_align_center nicdark_bg_greydark nicdark_padding_30 nicdark_box_sizing_border_box">
                                                    <h1 className="nicdark_font_size_70 nicdark_color_white">
                                                        <strong>5</strong></h1>
                                                    <div className="nicdark_section nicdark_height_20" />
                                                    <div className="nicdark_section ">
                                                        <img alt className width={15} src="img/icons/icon-star-full-yellow.svg" />
                                                        <img alt className width={15} src="img/icons/icon-star-full-yellow.svg" />
                                                        <img alt className width={15} src="img/icons/icon-star-full-yellow.svg" />
                                                        <img alt className width={15} src="img/icons/icon-star-full-yellow.svg" />
                                                        <img alt className="nicdark_margin_right_10" width={15} src="img/icons/icon-star-full-yellow.svg" />
                                                    </div>
                                                    <p>3 Ratings</p>
                                                </div>
                                                <div className="nicdark_width_70_percentage nicdark_width_100_percentage_all_iphone nicdark_padding_left_40 nicdark_padding_left_0_all_iphone nicdark_float_left nicdark_box_sizing_border_box">
                                                    <div className=" nicdark_border_radius_3 nicdark_section nicdark_border_1_solid_grey nicdark_padding_20 nicdark_box_sizing_border_box">
                                                        <table className="nicdark_section">
                                                            <tbody><tr>
                                                                <td className="nicdark_width_20_percentage ">
                                                                    <h5><strong>5 Stars</strong></h5>
                                                                </td>
                                                                <td className="nicdark_width_70_percentage ">
                                                                    <div className="nicdark_section nicdark_bg_yellow nicdark_height_10 nicdark_border_radius_3">
                                                                    </div>
                                                                </td>
                                                                <td className="nicdark_width_10_percentage nicdark_text_align_right">
                                                                    <p className="nicdark_font_size_14 nicdark_line_height_30">
                                                                        3</p>
                                                                </td>
                                                            </tr>
                                                                <tr>
                                                                    <td className="nicdark_width_20_percentage ">
                                                                        <h5><strong>4 Stars</strong></h5>
                                                                    </td>
                                                                    <td className="nicdark_width_70_percentage ">
                                                                        <div className="nicdark_section nicdark_bg_grey_3 nicdark_height_10 nicdark_border_radius_3">
                                                                        </div>
                                                                    </td>
                                                                    <td className="nicdark_width_10_percentage nicdark_text_align_right">
                                                                        <p className="nicdark_font_size_14 nicdark_line_height_30">
                                                                            0</p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="nicdark_width_20_percentage ">
                                                                        <h5><strong>3 Stars</strong></h5>
                                                                    </td>
                                                                    <td className="nicdark_width_70_percentage ">
                                                                        <div className="nicdark_section nicdark_bg_grey_3 nicdark_height_10 nicdark_border_radius_3">
                                                                        </div>
                                                                    </td>
                                                                    <td className="nicdark_width_10_percentage nicdark_text_align_right">
                                                                        <p className="nicdark_font_size_14 nicdark_line_height_30">
                                                                            0</p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="nicdark_width_20_percentage ">
                                                                        <h5><strong>2 Stars</strong></h5>
                                                                    </td>
                                                                    <td className="nicdark_width_70_percentage ">
                                                                        <div className="nicdark_section nicdark_bg_grey_3 nicdark_height_10 nicdark_border_radius_3">
                                                                        </div>
                                                                    </td>
                                                                    <td className="nicdark_width_10_percentage nicdark_text_align_right">
                                                                        <p className="nicdark_font_size_14 nicdark_line_height_30">
                                                                            0</p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="nicdark_width_20_percentage ">
                                                                        <h5><strong>1 Stars</strong></h5>
                                                                    </td>
                                                                    <td className="nicdark_width_70_percentage ">
                                                                        <div className="nicdark_section nicdark_bg_grey_3 nicdark_height_10 nicdark_border_radius_3">
                                                                        </div>
                                                                    </td>
                                                                    <td className="nicdark_width_10_percentage nicdark_text_align_right">
                                                                        <p className="nicdark_font_size_14 nicdark_line_height_30">
                                                                            0</p>
                                                                    </td>
                                                                </tr>
                                                            </tbody></table>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="nicdark_section nicdark_height_30" />
                                            {/*START comment preview*/}
                                            <div className="nicdark_section nicdark_border_top_1_solid_grey nicdark_padding_40_20 nicdark_box_sizing_border_box">
                                                <div className="nicdark_display_table nicdark_float_left">
                                                    <img alt className="nicdark_display_none_all_iphone nicdark_margin_right_10 nicdark_display_table_cell nicdark_vertical_align_middle nicdark_border_radius_100_percentage" width={40} src="img/avatar/avatar-chef-1.jpg" />
                                                    <p className="  nicdark_display_table_cell nicdark_vertical_align_middle ">
                                                        <span className="nicdark_color_greydark nicdark_first_font nicdark_margin_right_20"><strong>John
                                                            Doe</strong></span></p>
                                                    <div className="nicdark_display_table_cell nicdark_vertical_align_middle ">
                                                        <img alt className width={15} src="img/icons/icon-star-full-yellow.svg" />
                                                        <img alt className width={15} src="img/icons/icon-star-full-yellow.svg" />
                                                        <img alt className width={15} src="img/icons/icon-star-full-yellow.svg" />
                                                        <img alt className width={15} src="img/icons/icon-star-full-yellow.svg" />
                                                        <img alt className="nicdark_margin_right_10" width={15} src="img/icons/icon-star-full-yellow.svg" />
                                                    </div>
                                                </div>
                                                <div className="nicdark_section nicdark_height_20" />
                                                <div className="nicdark_section">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et
                                                        ipsum sit amet ex pulvinar mattis. Pellentesque vitae purus
                                                        viverra, aliquet lacus in, fringilla massa. Suspendisse ac est a
                                                        nisi aliquet sollicitudin. Interdum et malesuada fames.</p>
                                                </div>
                                            </div>
                                            {/*END comment preview*/}
                                            {/*START comment preview*/}
                                            <div className="nicdark_section nicdark_border_top_1_solid_grey nicdark_padding_40_20 nicdark_box_sizing_border_box">
                                                <div className="nicdark_display_table nicdark_float_left">
                                                    <img alt className="nicdark_display_none_all_iphone nicdark_margin_right_10 nicdark_display_table_cell nicdark_vertical_align_middle nicdark_border_radius_100_percentage" width={40} src="img/avatar/avatar-chef-2.jpg" />
                                                    <p className="  nicdark_display_table_cell nicdark_vertical_align_middle ">
                                                        <span className="nicdark_color_greydark nicdark_first_font nicdark_margin_right_20"><strong>Nick
                                                            Hope</strong></span></p>
                                                    <div className="nicdark_display_table_cell nicdark_vertical_align_middle ">
                                                        <img alt className width={15} src="img/icons/icon-star-full-yellow.svg" />
                                                        <img alt className width={15} src="img/icons/icon-star-full-yellow.svg" />
                                                        <img alt className width={15} src="img/icons/icon-star-full-yellow.svg" />
                                                        <img alt className width={15} src="img/icons/icon-star-full-yellow.svg" />
                                                        <img alt className="nicdark_margin_right_10" width={15} src="img/icons/icon-star-full-yellow.svg" />
                                                    </div>
                                                </div>
                                                <div className="nicdark_section nicdark_height_20" />
                                                <div className="nicdark_section">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et
                                                        ipsum sit amet ex pulvinar mattis. Pellentesque vitae purus
                                                        viverra, aliquet lacus in, fringilla massa. Suspendisse ac est a
                                                        nisi aliquet sollicitudin. Interdum et malesuada fames.</p>
                                                </div>
                                            </div>
                                            {/*END comment preview*/}
                                            {/*START comment preview*/}
                                            <div className="nicdark_section nicdark_border_top_1_solid_grey nicdark_padding_40_20 nicdark_box_sizing_border_box">
                                                <div className="nicdark_display_table nicdark_float_left">
                                                    <img alt className="nicdark_display_none_all_iphone nicdark_margin_right_10 nicdark_display_table_cell nicdark_vertical_align_middle nicdark_border_radius_100_percentage" width={40} src="img/avatar/avatar-chef-3.jpg" />
                                                    <p className="  nicdark_display_table_cell nicdark_vertical_align_middle ">
                                                        <span className="nicdark_color_greydark nicdark_first_font nicdark_margin_right_20"><strong>Jane
                                                            Dark</strong></span></p>
                                                    <div className="nicdark_display_table_cell nicdark_vertical_align_middle ">
                                                        <img alt className width={15} src="img/icons/icon-star-full-yellow.svg" />
                                                        <img alt className width={15} src="img/icons/icon-star-full-yellow.svg" />
                                                        <img alt className width={15} src="img/icons/icon-star-full-yellow.svg" />
                                                        <img alt className width={15} src="img/icons/icon-star-full-yellow.svg" />
                                                        <img alt className="nicdark_margin_right_10" width={15} src="img/icons/icon-star-full-yellow.svg" />
                                                    </div>
                                                </div>
                                                <div className="nicdark_section nicdark_height_20" />
                                                <div className="nicdark_section">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et
                                                        ipsum sit amet ex pulvinar mattis. Pellentesque vitae purus
                                                        viverra, aliquet lacus in, fringilla massa. Suspendisse ac est a
                                                        nisi aliquet sollicitudin. Interdum et malesuada fames.</p>
                                                </div>
                                            </div>
                                            {/*END comment preview*/}
                                        </div>
                                    </div>
                              
                                </div>
                                {/*END tab*/}
                            </div>
                        </div>
                        <div className="nicdark_section nicdark_height_50" />
                    </div>
                    <div className="nicdark_width_33_percentage nicdark_width_100_percentage_ipad_port nicdark_width_100_percentage_all_iphone nicdark_float_left">
                        <div className="nicdark_section nicdark_padding_15 nicdark_box_sizing_border_box">
                            <div className="nicdark_section nicdark_height_60" />
                           
                            <div className="nicdark_section nicdark_height_25" />
                            {/*calendar*/}
                            <div className="nicdark_section nicdark_border_1_solid_grey">
                                <div className="nicdark_datepicker" />
                                <div className="nicdark_section nicdark_padding_10 nicdark_box_sizing_border_box nicdark_bg_grey nicdark_border_top_1_solid_grey">
                                    <div className="nicdark_text_align_right nicdark_padding_10 nicdark_box_sizing_border_box">
                                        <a className="nicdark_display_inline_block nicdark_text_align_center nicdark_width_100_percentage nicdark_box_sizing_border_box nicdark_color_white nicdark_bg_violet nicdark_first_font nicdark_padding_10_20 nicdark_border_radius_3 " href="cart.html">ADD TO CART</a>
                                    </div>
                                </div>
                            </div>
                            {/*calendar*/}
                            <div className="nicdark_section nicdark_height_13" />
                            <table className="nicdark_section">
                                <tbody>
                                    <tr className="nicdark_border_bottom_2_solid_grey">
                                        <td className="nicdark_padding_20 "><img alt className width={40} src="img/icons/icon-clock-grey.svg" /></td>
                                        <td className="nicdark_padding_20 ">
                                            <h4 className=" nicdark_text_align_right">Duration: {course.numberTeachOfWeek * course.oneHourTeaching} Hours</h4>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="nicdark_padding_20 "><img alt className width={40} src="img/icons/icon-card-grey.svg" /></td>
                                        <td className="nicdark_padding_20 ">
                                            <h4 className=" nicdark_text_align_right">Price: {course.totalMoneyMonthTeaching} USD/Month</h4>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="nicdark_section nicdark_height_20" />
                            <div className="nicdark_section nicdark_bg_white nicdark_border_1_solid_grey">
                                <div className="nicdark_section nicdark_padding_20 nicdark_box_sizing_border_box nicdark_bg_grey nicdark_border_bottom_1_solid_grey nicdark_text_align_center">
                                    <h3 className><strong>Question</strong></h3>
                                </div>
                                <div className="nicdark_section nicdark_padding_10 nicdark_box_sizing_border_box">
                                    <div className="nicdark_section">
                                        <div className="nicdark_width_100_percentage nicdark_padding_10 nicdark_box_sizing_border_box nicdark_float_left">
                                            <input className="nicdark_padding_left_0 nicdark_background_none nicdark_border_top_width_0 nicdark_border_right_width_0 nicdark_border_left_width_0" type="text" placeholder="Name" />
                                        </div>
                                    </div>
                                    <div className="nicdark_section">
                                        <div className="nicdark_width_100_percentage nicdark_padding_10 nicdark_box_sizing_border_box nicdark_float_left">
                                            <input className="nicdark_padding_left_0 nicdark_background_none nicdark_border_top_width_0 nicdark_border_right_width_0 nicdark_border_left_width_0" type="text" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="nicdark_section">
                                        <div className="nicdark_width_100_percentage nicdark_padding_10 nicdark_box_sizing_border_box nicdark_float_left">
                                            <textarea rows={4} className="nicdark_padding_left_0 nicdark_background_none nicdark_border_top_width_0 nicdark_border_right_width_0 nicdark_border_left_width_0" placeholder="Message" defaultValue={""} />
                                        </div>
                                    </div>
                                    <div className="nicdark_section">
                                        <div className="nicdark_width_100_percentage nicdark_padding_10 nicdark_box_sizing_border_box nicdark_float_left">
                                            <a className="nicdark_display_inline_block nicdark_text_align_center nicdark_box_sizing_border_box nicdark_width_100_percentage nicdark_color_white nicdark_bg_violet nicdark_first_font nicdark_padding_10_20 nicdark_border_radius_3 " href="contact-1.html">SEND NOW</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="nicdark_section nicdark_height_50" />
                    </div>
                </div>
            </div>



        </div>
    )
}

export default CourseSingle