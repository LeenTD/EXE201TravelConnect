import React from 'react'
import RoutePath from '../config/RoutePath'
import { Link } from 'react-router-dom'

function Services() {
  return (
    <div>

      <div className="nicdark_section nicdark_bg_grey nicdark_border_bottom_1_solid_grey">
        {/*start nicdark_container*/}
        <div className="nicdark_container nicdark_clearfix">
          <div className="grid grid_12">
            <Link to={RoutePath.HOME}>Home</Link>
            <img alt="img" className="nicdark_margin_left_10 nicdark_margin_right_10" width={10} src="img/icons/icon-next-grey.svg" />
            <Link to={RoutePath.PAGES}>Pages</Link>
            <img alt="img" className="nicdark_margin_left_10 nicdark_margin_right_10" width={10} src="img/icons/icon-next-grey.svg" />
            <Link to={RoutePath.SERVICES}>Services</Link>
          </div>
        </div>
        {/*end container*/}
      </div>




      <div className="nicdark_section nicdark_height_50" />

      <div>
        <div className="nicdark_section">
          <div className="nicdark_container nicdark_clearfix">
            <div className="grid grid_3 ">
              <img alt="img" width={50} src="img/icons/icon-award-color.svg" />
              <div className="nicdark_section nicdark_height_20" />
              <h2><strong>National Awards</strong></h2>
              <div className="nicdark_section nicdark_height_20" />
              <p>Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque
                euismod orci ut et lobortis.</p>
              <div className="nicdark_section nicdark_height_20" />
              <Link className="nicdark_display_inline_block nicdark_color_grey nicdark_border_1_solid_grey nicdark_first_font nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13" href="#">READ MORE</Link>
            </div>
            <div className="grid grid_3 ">
              <img alt="img" width={50} src="img/icons/icon-graduation-color.svg" />
              <div className="nicdark_section nicdark_height_20" />
              <h2><strong>Best Teachers</strong></h2>
              <div className="nicdark_section nicdark_height_20" />
              <p>Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque
                euismod orci ut et lobortis.</p>
              <div className="nicdark_section nicdark_height_20" />
              <Link className="nicdark_display_inline_block nicdark_color_grey nicdark_border_1_solid_grey nicdark_first_font nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13" href="#">READ MORE</Link>
            </div>
            <div className="grid grid_3 ">
              <img alt="img" width={50} src="img/icons/icon-graph-color.svg" />
              <div className="nicdark_section nicdark_height_20" />
              <h2><strong>Many Courses</strong></h2>
              <div className="nicdark_section nicdark_height_20" />
              <p>Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque
                euismod orci ut et lobortis.</p>
              <div className="nicdark_section nicdark_height_20" />
              <Link className="nicdark_display_inline_block nicdark_color_grey nicdark_border_1_solid_grey nicdark_first_font nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13" href="#">READ MORE</Link>
            </div>
            <div className="grid grid_3 ">
              <img alt="img" width={50} src="img/icons/icon-support-color.svg" />
              <div className="nicdark_section nicdark_height_20" />
              <h2><strong>24 H Support</strong></h2>
              <div className="nicdark_section nicdark_height_20" />
              <p>Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque
                euismod orci ut et lobortis.</p>
              <div className="nicdark_section nicdark_height_20" />
              <Link className="nicdark_display_inline_block nicdark_color_grey nicdark_border_1_solid_grey nicdark_first_font nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13" href="#">READ MORE</Link>
            </div>
          </div>
        </div>
        <div className="nicdark_section nicdark_height_50" />
        <div className="nicdark_section ">
          <div className="nicdark_container nicdark_clearfix">
            <div className="grid grid_12">
              <h1 className="nicdark_font_size_50"><strong>Our Prices</strong></h1>
              <div className="nicdark_section nicdark_height_10" />
              <h3 className=" nicdark_color_grey">See Our Packages</h3>
            </div>
            <div className="nicdark_section ">
              <div className="nicdark_container nicdark_clearfix">
                <div className="grid grid_4 ">
                  {/*START price*/}
                  <div className="nicdark_section nicdark_box_sizing_border_box">
                    <div className="nicdark_section nicdark_position_relative">
                      <img alt="img" className="nicdark_section" src="img/courses/img29.jpg" />
                      <div className="nicdark_bg_greydark_alpha_6 nicdark_position_absolute nicdark_left_0 nicdark_height_100_percentage nicdark_width_100_percentage nicdark_box_sizing_border_box">
                        <div className="nicdark_position_absolute nicdark_bottom_30 nicdark_width_100_percentage nicdark_padding_botttom_0 nicdark_padding_50 nicdark_box_sizing_border_box nicdark_text_align_center">
                          <h3 className="nicdark_color_white"><strong>Starter Plan</strong></h3>
                          <div className="nicdark_section nicdark_height_10" />
                          <div className="nicdark_section nicdark_height_10 nicdark_display_none_all_iphone">
                          </div>
                          <div className="nicdark_text_align_center_all_iphone nicdark_width_50_percentage nicdark_width_100_percentage_all_iphone nicdark_float_left nicdark_box_sizing_border_box nicdark_padding_right_10 nicdark_text_align_right">
                            <h1 className="nicdark_color_white nicdark_font_size_60 nicdark_font_size_40_all_iphone nicdark_line_height_40_all_iphone">
                              <strong><span className="nicdark_font_size_20 nicdark_margin_right_10">$</span>50</strong>
                            </h1>
                            <p className="nicdark_color_white ">/ Monthly</p>
                          </div>
                          <div className="nicdark_display_none_all_iphone  nicdark_width_50_percentage nicdark_float_left nicdark_box_sizing_border_box nicdark_padding_left_10 nicdark_text_align_left">
                            <div className="nicdark_section nicdark_height_15" />
                            <p className="nicdark_font_size_15 nicdark_line_height_20 nicdark_color_white">
                              Lorem ipsum dolor sit amet.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="nicdark_section nicdark_border_1_solid_grey">
                    <div className="nicdark_section nicdark_padding_20 nicdark_box_sizing_border_box">
                      <table className="nicdark_section nicdark_text_align_center">
                        <tbody>
                          <tr className="nicdark_border_bottom_2_solid_grey">
                            <td className="nicdark_padding_5 nicdark_padding_top_0"><img alt="img" className="nicdark_display_inline_block nicdark_margin_right_10" width={13} src="img/icons/icon-check-green.svg" />
                              <p className="nicdark_display_inline_block">Lorem ipsum dolor sit
                                amet</p>
                            </td>
                          </tr>
                          <tr className="nicdark_border_bottom_2_solid_grey">
                            <td className="nicdark_padding_5"><img alt="img" className="nicdark_display_inline_block nicdark_margin_right_10" width={13} src="img/icons/icon-check-green.svg" />
                              <p className="nicdark_display_inline_block">Lorem ipsum dolor sit
                                amet</p>
                            </td>
                          </tr>
                          <tr className="nicdark_border_bottom_2_solid_grey">
                            <td className="nicdark_padding_5"><img alt="img" className="nicdark_display_inline_block nicdark_margin_right_10" width={13} src="img/icons/icon-check-green.svg" />
                              <p className="nicdark_display_inline_block">Lorem ipsum dolor sit
                                amet</p>
                            </td>
                          </tr>
                          <tr className="nicdark_border_bottom_2_solid_grey">
                            <td className="nicdark_padding_5"><img alt="img" className="nicdark_display_inline_block nicdark_margin_right_10" width={11} src="img/icons/icon-close-red.svg" />
                              <p className="nicdark_display_inline_block">Lorem ipsum dolor sit
                                amet</p>
                            </td>
                          </tr>
                          <tr>
                            <td className="nicdark_padding_5 nicdark_padding_botttom_0"><img alt="img" className="nicdark_display_inline_block nicdark_margin_right_10" width={11} src="img/icons/icon-close-red.svg" />
                              <p className="nicdark_display_inline_block">Lorem ipsum dolor sit
                                amet</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="nicdark_section nicdark_height_20" />
                      <div className="nicdark_width_100_percentage  nicdark_box_sizing_border_box nicdark_float_left">
                        <Link className="nicdark_display_inline_block nicdark_text_align_center nicdark_box_sizing_border_box nicdark_width_100_percentage nicdark_color_white nicdark_bg_greydark nicdark_first_font nicdark_padding_10_20 nicdark_border_radius_3 " href="#">REQUEST NOW</Link>
                      </div>
                    </div>
                  </div>
                  {/*END price*/}
                </div>
                <div className="grid grid_4 ">
                  {/*START price*/}
                  <div className="nicdark_section nicdark_box_sizing_border_box">
                    <div className="nicdark_section nicdark_position_relative">
                      <img alt="img" className="nicdark_section" src="img/courses/img25.jpg" />
                      <div className="nicdark_bg_greydark_alpha_6 nicdark_position_absolute nicdark_left_0 nicdark_height_100_percentage nicdark_width_100_percentage nicdark_box_sizing_border_box">
                        <div className="nicdark_position_absolute nicdark_bottom_30 nicdark_width_100_percentage nicdark_padding_botttom_0 nicdark_padding_50 nicdark_box_sizing_border_box nicdark_text_align_center">
                          <h3 className="nicdark_color_white"><strong>Basic Plan</strong></h3>
                          <div className="nicdark_section nicdark_height_10" />
                          <div className="nicdark_section nicdark_height_10 nicdark_display_none_all_iphone">
                          </div>
                          <div className="nicdark_text_align_center_all_iphone nicdark_width_50_percentage nicdark_width_100_percentage_all_iphone nicdark_float_left nicdark_box_sizing_border_box nicdark_padding_right_10 nicdark_text_align_right">
                            <h1 className="nicdark_color_white nicdark_font_size_60 nicdark_font_size_40_all_iphone nicdark_line_height_40_all_iphone">
                              <strong><span className="nicdark_font_size_20 nicdark_margin_right_10">$</span>100</strong>
                            </h1>
                            <p className="nicdark_color_white ">/ Monthly</p>
                          </div>
                          <div className="nicdark_display_none_all_iphone  nicdark_width_50_percentage nicdark_float_left nicdark_box_sizing_border_box nicdark_padding_left_10 nicdark_text_align_left">
                            <div className="nicdark_section nicdark_height_15" />
                            <p className="nicdark_font_size_15 nicdark_line_height_20 nicdark_color_white">
                              Lorem ipsum dolor sit amet.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="nicdark_section nicdark_border_1_solid_grey">
                    <div className="nicdark_section nicdark_padding_20 nicdark_box_sizing_border_box">
                      <table className="nicdark_section nicdark_text_align_center">
                        <tbody>
                          <tr className="nicdark_border_bottom_2_solid_grey">
                            <td className="nicdark_padding_5 nicdark_padding_top_0"><img alt="img" className="nicdark_display_inline_block nicdark_margin_right_10" width={13} src="img/icons/icon-check-green.svg" />
                              <p className="nicdark_display_inline_block">Lorem ipsum dolor sit
                                amet</p>
                            </td>
                          </tr>
                          <tr className="nicdark_border_bottom_2_solid_grey">
                            <td className="nicdark_padding_5"><img alt="img" className="nicdark_display_inline_block nicdark_margin_right_10" width={13} src="img/icons/icon-check-green.svg" />
                              <p className="nicdark_display_inline_block">Lorem ipsum dolor sit
                                amet</p>
                            </td>
                          </tr>
                          <tr className="nicdark_border_bottom_2_solid_grey">
                            <td className="nicdark_padding_5"><img alt="img" className="nicdark_display_inline_block nicdark_margin_right_10" width={13} src="img/icons/icon-check-green.svg" />
                              <p className="nicdark_display_inline_block">Lorem ipsum dolor sit
                                amet</p>
                            </td>
                          </tr>
                          <tr className="nicdark_border_bottom_2_solid_grey">
                            <td className="nicdark_padding_5"><img alt="img" className="nicdark_display_inline_block nicdark_margin_right_10" width={11} src="img/icons/icon-close-red.svg" />
                              <p className="nicdark_display_inline_block">Lorem ipsum dolor sit
                                amet</p>
                            </td>
                          </tr>
                          <tr>
                            <td className="nicdark_padding_5 nicdark_padding_botttom_0"><img alt="img" className="nicdark_display_inline_block nicdark_margin_right_10" width={11} src="img/icons/icon-close-red.svg" />
                              <p className="nicdark_display_inline_block">Lorem ipsum dolor sit
                                amet</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="nicdark_section nicdark_height_20" />
                      <div className="nicdark_width_100_percentage  nicdark_box_sizing_border_box nicdark_float_left">
                        <Link className="nicdark_display_inline_block nicdark_text_align_center nicdark_box_sizing_border_box nicdark_width_100_percentage nicdark_color_white nicdark_bg_greydark nicdark_first_font nicdark_padding_10_20 nicdark_border_radius_3 " href="#">REQUEST NOW</Link>
                      </div>
                    </div>
                  </div>
                  {/*END price*/}
                </div>
                <div className="grid grid_4 ">
                  {/*START price*/}
                  <div className="nicdark_section nicdark_box_sizing_border_box">
                    <div className="nicdark_section nicdark_position_relative">
                      <img alt="img" className="nicdark_section" src="img/courses/img39.jpg" />
                      <div className="nicdark_bg_greydark_alpha_6 nicdark_position_absolute nicdark_left_0 nicdark_height_100_percentage nicdark_width_100_percentage nicdark_box_sizing_border_box">
                        <div className="nicdark_position_absolute nicdark_bottom_30 nicdark_width_100_percentage nicdark_padding_botttom_0 nicdark_padding_50 nicdark_box_sizing_border_box nicdark_text_align_center">
                          <h3 className="nicdark_color_white"><strong>Advanced Plan</strong></h3>
                          <div className="nicdark_section nicdark_height_10" />
                          <div className="nicdark_section nicdark_height_10 nicdark_display_none_all_iphone">
                          </div>
                          <div className="nicdark_text_align_center_all_iphone nicdark_width_50_percentage nicdark_width_100_percentage_all_iphone nicdark_float_left nicdark_box_sizing_border_box nicdark_padding_right_10 nicdark_text_align_right">
                            <h1 className="nicdark_color_white nicdark_font_size_60 nicdark_font_size_40_all_iphone nicdark_line_height_40_all_iphone">
                              <strong><span className="nicdark_font_size_20 nicdark_margin_right_10">$</span>150</strong>
                            </h1>
                            <p className="nicdark_color_white ">/ Monthly</p>
                          </div>
                          <div className="nicdark_display_none_all_iphone  nicdark_width_50_percentage nicdark_float_left nicdark_box_sizing_border_box nicdark_padding_left_10 nicdark_text_align_left">
                            <div className="nicdark_section nicdark_height_15" />
                            <p className="nicdark_font_size_15 nicdark_line_height_20 nicdark_color_white">
                              Lorem ipsum dolor sit amet.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="nicdark_section nicdark_border_1_solid_grey">
                    <div className="nicdark_section nicdark_padding_20 nicdark_box_sizing_border_box">
                      <table className="nicdark_section nicdark_text_align_center">
                        <tbody>
                          <tr className="nicdark_border_bottom_2_solid_grey">
                            <td className="nicdark_padding_5 nicdark_padding_top_0"><img alt="img" className="nicdark_display_inline_block nicdark_margin_right_10" width={13} src="img/icons/icon-check-green.svg" />
                              <p className="nicdark_display_inline_block">Lorem ipsum dolor sit
                                amet</p>
                            </td>
                          </tr>
                          <tr className="nicdark_border_bottom_2_solid_grey">
                            <td className="nicdark_padding_5"><img alt="img" className="nicdark_display_inline_block nicdark_margin_right_10" width={13} src="img/icons/icon-check-green.svg" />
                              <p className="nicdark_display_inline_block">Lorem ipsum dolor sit
                                amet</p>
                            </td>
                          </tr>
                          <tr className="nicdark_border_bottom_2_solid_grey">
                            <td className="nicdark_padding_5"><img alt="img" className="nicdark_display_inline_block nicdark_margin_right_10" width={13} src="img/icons/icon-check-green.svg" />
                              <p className="nicdark_display_inline_block">Lorem ipsum dolor sit
                                amet</p>
                            </td>
                          </tr>
                          <tr className="nicdark_border_bottom_2_solid_grey">
                            <td className="nicdark_padding_5"><img alt="img" className="nicdark_display_inline_block nicdark_margin_right_10" width={11} src="img/icons/icon-close-red.svg" />
                              <p className="nicdark_display_inline_block">Lorem ipsum dolor sit
                                amet</p>
                            </td>
                          </tr>
                          <tr>
                            <td className="nicdark_padding_5 nicdark_padding_botttom_0"><img alt="img" className="nicdark_display_inline_block nicdark_margin_right_10" width={11} src="img/icons/icon-close-red.svg" />
                              <p className="nicdark_display_inline_block">Lorem ipsum dolor sit
                                amet</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="nicdark_section nicdark_height_20" />
                      <div className="nicdark_width_100_percentage  nicdark_box_sizing_border_box nicdark_float_left">
                        <Link className="nicdark_display_inline_block nicdark_text_align_center nicdark_box_sizing_border_box nicdark_width_100_percentage nicdark_color_white nicdark_bg_greydark nicdark_first_font nicdark_padding_10_20 nicdark_border_radius_3 " href="#">REQUEST NOW</Link>
                      </div>
                    </div>
                  </div>
                  {/*END price*/}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nicdark_section nicdark_height_50" />
        <div className="nicdark_section nicdark_bg_greydark nicdark_display_table">
          <div className="nicdark_width_50_percentage nicdark_position_relative nicdark_display_none_all_iphone nicdark_bg_grey nicdark_display_table_cell nicdark_vertical_align_middle nicdark_background_size_cover nicdark_background_position_center" style={{ backgroundImage: 'url(img/parallax/img3.jpg)' }}>
            <div className="nicdark_bg_greydark_alpha nicdark_position_absolute nicdark_left_0 nicdark_top_0 nicdark_height_100_percentage nicdark_width_100_percentage  ">
            </div>
          </div>
          <div className="nicdark_width_50_percentage nicdark_width_100_percentage_all_iphone nicdark_display_table_cell nicdark_vertical_align_middle nicdark_padding_100 nicdark_padding_40_all_iphone nicdark_box_sizing_border_box">
            <h1 className="nicdark_color_white nicdark_font_size_40"><strong>Find Out</strong></h1>
            <h1 className="nicdark_color_white nicdark_font_size_40"><strong><span className="nicdark_color_violet">more</span> about us</strong></h1>
            <div className="nicdark_section nicdark_height_20" />
            <p>Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod
              orci ut et lobortis. Blandit vel sapien vitae, condimentum ultricies magna et orci ut et
              lobortis, Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et.
              Quisque euismod orci ut et lobortis. Blandit vel sapien vitae, condimentum ultricies magna et
              orci ut et lobortis.</p>
            <div className="nicdark_section nicdark_height_20" />
            <Link href="courses.html"><img alt="img" className="nicdark_padding_10 nicdark_border_radius_3 nicdark_border_1_solid_grey_2 nicdark_margin_right_20" width={30} src="img/icons/icon-compass-white.svg" /></Link>
            <Link href="courses.html"><img alt="img" className="nicdark_padding_10 nicdark_border_radius_3 nicdark_border_1_solid_grey_2 nicdark_margin_right_20" width={30} src="img/icons/icon-cup-white.svg" /></Link>
            <Link href="courses.html"><img alt="img" className="nicdark_padding_10 nicdark_border_radius_3 nicdark_border_1_solid_grey_2 nicdark_margin_right_20" width={30} src="img/icons/icon-rocket-white.svg" /></Link>
          </div>
        </div>
        <div className="nicdark_section nicdark_height_40" />
        <div className="nicdark_section ">
          <div className="nicdark_container nicdark_clearfix">
            <div className="grid grid_12">
              <h1 className="nicdark_font_size_50"><strong>Our Services</strong></h1>
              <div className="nicdark_section nicdark_height_10" />
              <h3 className=" nicdark_color_grey">See Our Packages</h3>
              <div className="nicdark_section nicdark_height_20" />
            </div>
            <div className="grid grid_4 ">
              {/*START service*/}
              <div className="nicdark_section nicdark_position_relative">
                <img alt="img" className="nicdark_position_absolute" width={50} src="img/icons/icon-employee.svg" />
                <div className="nicdark_section nicdark_padding_left_70 nicdark_box_sizing_border_box">
                  <h2><strong>Best Certificate</strong></h2>
                  <div className="nicdark_section nicdark_height_20" />
                  <p className>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas
                    magna at porttitor vehicula nullam augue.</p>
                  <div className="nicdark_section nicdark_height_20" />
                  <Link className="nicdark_display_inline_block nicdark_color_white nicdark_first_font nicdark_bg_blue nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13" href="#">READ MORE</Link>
                </div>
              </div>
              {/*END services*/}
            </div>
            <div className="grid grid_4 ">
              {/*START service*/}
              <div className="nicdark_section nicdark_position_relative">
                <img alt="img" className="nicdark_position_absolute" width={50} src="img/icons/icon-flask.svg" />
                <div className="nicdark_section nicdark_padding_left_70 nicdark_box_sizing_border_box">
                  <h2><strong>National Awards</strong></h2>
                  <div className="nicdark_section nicdark_height_20" />
                  <p className>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas
                    magna at porttitor vehicula nullam augue.</p>
                  <div className="nicdark_section nicdark_height_20" />
                  <Link className="nicdark_display_inline_block nicdark_color_white nicdark_first_font nicdark_bg_blue nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13" href="#">READ MORE</Link>
                </div>
              </div>
              {/*END services*/}
            </div>
            <div className="grid grid_4 ">
              {/*START service*/}
              <div className="nicdark_section nicdark_position_relative">
                <img alt="img" className="nicdark_position_absolute" width={50} src="img/icons/icon-target.svg" />
                <div className="nicdark_section nicdark_padding_left_70 nicdark_box_sizing_border_box">
                  <h2><strong>Qualifier Teacher</strong></h2>
                  <div className="nicdark_section nicdark_height_20" />
                  <p className>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas
                    magna at porttitor vehicula nullam augue.</p>
                  <div className="nicdark_section nicdark_height_20" />
                  <Link className="nicdark_display_inline_block nicdark_color_white nicdark_first_font nicdark_bg_blue nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13" href="#">READ MORE</Link>
                </div>
              </div>
              {/*END services*/}
            </div>
            <div className="nicdark_section nicdark_height_20" />
            <div className="grid grid_4 ">
              {/*START service*/}
              <div className="nicdark_section nicdark_position_relative">
                <img alt="img" className="nicdark_position_absolute" width={50} src="img/icons/icon-microscope.svg" />
                <div className="nicdark_section nicdark_padding_left_70 nicdark_box_sizing_border_box">
                  <h2><strong>Dedicated Courses</strong></h2>
                  <div className="nicdark_section nicdark_height_20" />
                  <p className>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas
                    magna at porttitor vehicula nullam augue.</p>
                  <div className="nicdark_section nicdark_height_20" />
                  <Link className="nicdark_display_inline_block nicdark_color_white nicdark_first_font nicdark_bg_blue nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13" href="#">READ MORE</Link>
                </div>
              </div>
              {/*END services*/}
            </div>
            <div className="grid grid_4 ">
              {/*START service*/}
              <div className="nicdark_section nicdark_position_relative">
                <img alt="img" className="nicdark_position_absolute" width={50} src="img/icons/icon-calculator.svg" />
                <div className="nicdark_section nicdark_padding_left_70 nicdark_box_sizing_border_box">
                  <h2><strong>Over 4 k Stuedents</strong></h2>
                  <div className="nicdark_section nicdark_height_20" />
                  <p className>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas
                    magna at porttitor vehicula nullam augue.</p>
                  <div className="nicdark_section nicdark_height_20" />
                  <Link className="nicdark_display_inline_block nicdark_color_white nicdark_first_font nicdark_bg_blue nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13" href="#">READ MORE</Link>
                </div>
              </div>
              {/*END services*/}
            </div>
            <div className="grid grid_4 ">
              {/*START service*/}
              <div className="nicdark_section nicdark_position_relative">
                <img alt="img" className="nicdark_position_absolute" width={50} src="img/icons/icon-light-bulb.svg" />
                <div className="nicdark_section nicdark_padding_left_70 nicdark_box_sizing_border_box">
                  <h2><strong>24 H Support</strong></h2>
                  <div className="nicdark_section nicdark_height_20" />
                  <p className>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas
                    magna at porttitor vehicula nullam augue.</p>
                  <div className="nicdark_section nicdark_height_20" />
                  <Link className="nicdark_display_inline_block nicdark_color_white nicdark_first_font nicdark_bg_blue nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13" href="#">READ MORE</Link>
                </div>
              </div>
              {/*END services*/}
            </div>
          </div>
        </div>
        <div className="nicdark_section nicdark_height_50" />
        <div className="nicdark_section nicdark_background_size_cover nicdark_background_position_center" style={{ backgroundImage: 'url(img/parallax/img41.jpg)' }}>
          <div className="nicdark_section nicdark_bg_greydark_alpha_4">
            <div className="nicdark_section nicdark_height_100" />
            {/*start nicdark_container*/}
            <div className="nicdark_container nicdark_clearfix">
              <div className="grid grid_1">
                <div className="nicdark_section nicdark_height_1" />
              </div>
              <div className="grid grid_10">
                <div className="nicdark_section nicdark_bg_white nicdark_padding_40 nicdark_padding_0_all_iphone nicdark_box_sizing_border_box">
                  <div className="nicdark_width_40_percentage nicdark_width_100_percentage_responsive nicdark_float_left nicdark_padding_20 nicdark_box_sizing_border_box">
                    <h6 className="nicdark_second_font nicdark_bg_blue nicdark_padding_5 nicdark_border_radius_3 nicdark_color_white nicdark_display_inline_block">
                      CONTACT US</h6>
                    <div className="nicdark_section nicdark_height_5" />
                    <h2><strong>Request a free Quote</strong></h2>
                    <div className="nicdark_section nicdark_height_20" />
                    <p>Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et.
                      Quisque euismod orci ut et lobortis.</p>
                    <div className="nicdark_section nicdark_height_30" />
                    <div className="nicdark_section nicdark_height_5" />
                    <table className="nicdark_section">
                      <tbody>
                        <tr className="nicdark_border_bottom_2_solid_grey">
                          <td className="nicdark_padding_10 ">
                            <h6 className="nicdark_text_transform_uppercase"><strong>Secretary
                              :</strong></h6>
                          </td>
                          <td className="nicdark_padding_10 ">
                            <p className=" nicdark_text_align_right">740529705</p>
                          </td>
                        </tr>
                        <tr className="nicdark_border_bottom_2_solid_grey">
                          <td className="nicdark_padding_10 ">
                            <h6 className="nicdark_text_transform_uppercase"><strong>Commercial
                              :</strong></h6>
                          </td>
                          <td className="nicdark_padding_10 ">
                            <p className=" nicdark_text_align_right">450529678</p>
                          </td>
                        </tr>
                        <tr className>
                          <td className="nicdark_padding_10 ">
                            <h6 className="nicdark_text_transform_uppercase"><strong>Director
                              :</strong></h6>
                          </td>
                          <td className="nicdark_padding_10">
                            <p className=" nicdark_text_align_right">980529528</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="nicdark_width_60_percentage nicdark_width_100_percentage_responsive nicdark_float_left nicdark_padding_20 nicdark_box_sizing_border_box">
                    {/*form*/}
                    <div className="nicdark_section">
                      <div className="nicdark_width_50_percentage nicdark_width_100_percentage_all_iphone nicdark_padding_10 nicdark_box_sizing_border_box nicdark_float_left">
                        <input className="nicdark_padding_left_0 nicdark_background_none nicdark_border_top_width_0 nicdark_border_bottom_width_2 nicdark_border_right_width_0 nicdark_border_left_width_0" type="text" placeholder="Name" />
                      </div>
                      <div className="nicdark_width_50_percentage nicdark_width_100_percentage_all_iphone nicdark_padding_10 nicdark_box_sizing_border_box nicdark_float_left">
                        <input className="nicdark_padding_left_0 nicdark_background_none nicdark_border_top_width_0 nicdark_border_bottom_width_2 nicdark_border_right_width_0 nicdark_border_left_width_0" type="text" placeholder="Surname" />
                      </div>
                    </div>
                    <div className="nicdark_section">
                      <div className="nicdark_width_50_percentage nicdark_width_100_percentage_all_iphone nicdark_padding_10 nicdark_box_sizing_border_box nicdark_float_left">
                        <input className="nicdark_padding_left_0 nicdark_background_none nicdark_border_top_width_0 nicdark_border_bottom_width_2 nicdark_border_right_width_0 nicdark_border_left_width_0" type="text" placeholder="Email" />
                      </div>
                      <div className="nicdark_width_50_percentage nicdark_width_100_percentage_all_iphone nicdark_padding_10 nicdark_box_sizing_border_box nicdark_float_left">
                        <input className="nicdark_padding_left_0 nicdark_background_none nicdark_border_top_width_0 nicdark_border_bottom_width_2 nicdark_border_right_width_0 nicdark_border_left_width_0" type="text" placeholder="Subject" />
                      </div>
                    </div>
                    <div className="nicdark_section">
                      <div className="nicdark_width_100_percentage nicdark_padding_10 nicdark_box_sizing_border_box nicdark_float_left">
                        <textarea rows={7} className="nicdark_padding_left_0 nicdark_background_none nicdark_border_top_width_0 nicdark_border_bottom_width_2 nicdark_border_right_width_0 nicdark_border_left_width_0" placeholder="Message" defaultValue={""} />
                      </div>
                    </div>
                    <div className="nicdark_section">
                      <div className="nicdark_width_100_percentage nicdark_padding_10 nicdark_box_sizing_border_box nicdark_float_left">
                        <Link className="nicdark_display_inline_block nicdark_text_align_center nicdark_box_sizing_border_box nicdark_width_100_percentage nicdark_color_white nicdark_bg_violet nicdark_first_font nicdark_padding_10_20 nicdark_border_radius_3 " href="contact-1.html">SEND NOW</Link>
                      </div>
                    </div>
                    {/*form*/}
                  </div>
                </div>
              </div>
              <div className="grid grid_1">
                <div className="nicdark_section nicdark_height_1" />
              </div>
            </div>
            {/*end container*/}
            <div className="nicdark_section nicdark_height_100" />
          </div>
        </div>
      </div>


    </div>
  )
}

export default Services