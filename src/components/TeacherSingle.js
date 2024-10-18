import React, { useContext, useState, useEffect } from "react";
import { TeacherContext } from "../contexts/TeacherContext";
function TeacherSingle() {
  const { teacher } = useContext(TeacherContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    // Lấy feedback từ local storage khi component được render lần đầu tiên
    const storedFeedbackList =
      JSON.parse(localStorage.getItem("feedbackList")) || [];
    setFeedbackList(storedFeedbackList);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeedback = { name, email, feedback };
    const updatedFeedbackList = [...feedbackList, newFeedback];
    setFeedbackList(updatedFeedbackList);
    localStorage.setItem("feedbackList", JSON.stringify(updatedFeedbackList));
    setName("");
    setEmail("");
    setFeedback("");
  };
  return (
    <div>
      <div className="nicdark_section nicdark_bg_grey nicdark_border_bottom_1_solid_grey">
        {/*start nicdark_container*/}
        <div className="nicdark_container nicdark_clearfix">
          <div className="grid grid_12">
            <a href="#">Trang chủ</a>
            <img
              alt
              className="nicdark_margin_left_10 nicdark_margin_right_10"
              width={10}
              src="img/icons/icon-next-grey.svg"
            />
            <a href="#">Gia sư</a>
            <img
              alt
              className="nicdark_margin_left_10 nicdark_margin_right_10"
              width={10}
              src="img/icons/icon-next-grey.svg"
            />
            <a href="#">{teacher.fullName}</a>
          </div>
        </div>
        {/*end container*/}
      </div>

      <div
        className="nicdark_section nicdark_background_size_cover nicdark_background_position_center"
        style={{ backgroundImage: "url(img/parallax/img2.jpg)" }}
      >
        <div className="nicdark_section nicdark_bg_greydark_alpha_gradient_2">
          {/*start nicdark_container*/}
          <div className="nicdark_container nicdark_clearfix">
            <div className="nicdark_section nicdark_height_200" />
            <div className="grid grid_6">
              <div className="nicdark_display_table nicdark_float_left nicdark_display_none_all_iphone">
                <div className="nicdark_display_table_cell nicdark_vertical_align_middle">
                  <img
                    alt
                    className="nicdark_margin_right_20 nicdark_border_radius_100_percentage "
                    width={150}
                    src={teacher.cardPhoto}
                  />
                </div>
                <div className="nicdark_display_table_cell nicdark_vertical_align_middle">
                  <strong className="nicdark_color_white nicdark_font_size_40 nicdark_first_font">
                    {teacher.fullName}
                  </strong>
                  {/* <div className="nicdark_display_inline_block nicdark_margin_left_20">
                                        <img alt width={20} className="nicdark_margin_right_10" src="img/icons/icon-twitter-white.svg" />
                                        <img alt width={20} className="nicdark_margin_right_10" src="img/icons/icon-pinterest-white.svg" />
                                        <img alt width={20} className="nicdark_margin_right_10" src="img/icons/icon-linkedin-white.svg" />
                                        <img alt width={20} className="nicdark_margin_right_10" src="img/icons/icon-google-white.svg" />
                                        <img alt width={20} className="nicdark_margin_right_10" src="img/icons/icon-instagram-white.svg" />
                                    </div> */}
                  <div className="nicdark_section nicdark_height_5" />
                  {/* <h3 className="nicdark_color_white">Teacher</h3> */}
                  <div className="nicdark_section nicdark_height_30" />
                  {/* <a className="nicdark_display_inline_block nicdark_color_white nicdark_border_1_solid_white nicdark_first_font nicdark_padding_10_20 nicdark_border_radius_3 nicdark_margin_right_20 nicdark_transition_all_08_ease  " href="#">FOLLOW ME</a>
                                    <a className="nicdark_display_inline_block nicdark_color_white nicdark_border_1_solid_white nicdark_first_font nicdark_padding_10_20 nicdark_border_radius_3 nicdark_transition_all_08_ease  " href="#">MESSAGE ME</a> */}
                </div>
              </div>
              {/*START responsive*/}
              <div className="nicdark_section nicdark_display_none nicdark_display_block_all_iphone nicdark_text_align_center">
                <img
                  alt
                  className=" nicdark_border_radius_100_percentage "
                  width={100}
                  src="img/avatar/avatar-chef-1.jpg"
                />
                <div className="nicdark_section nicdark_height_10" />
                <div className="nicdark_section nicdark_text_align_center">
                  <img
                    alt
                    width={15}
                    className="nicdark_margin_right_10"
                    src="img/icons/icon-twitter-white.svg"
                  />
                  <img
                    alt
                    width={15}
                    className="nicdark_margin_right_10"
                    src="img/icons/icon-pinterest-white.svg"
                  />
                  <img
                    alt
                    width={15}
                    className="nicdark_margin_right_10"
                    src="img/icons/icon-linkedin-white.svg"
                  />
                  <img
                    alt
                    width={15}
                    className="nicdark_margin_right_10"
                    src="img/icons/icon-google-white.svg"
                  />
                  <img
                    alt
                    width={15}
                    className
                    src="img/icons/icon-instagram-white.svg"
                  />
                </div>
                <div className="nicdark_section nicdark_height_10" />
                <h2>
                  <strong className="nicdark_color_white nicdark_first_font">
                    John Doe
                  </strong>
                </h2>
                <div className="nicdark_section nicdark_height_5" />
                <h5 className="nicdark_color_white">Food Teacher</h5>
                <div className="nicdark_section nicdark_height_20" />
                <a
                  className="nicdark_display_inline_block nicdark_color_white nicdark_border_1_solid_white nicdark_first_font nicdark_padding_8 nicdark_border_radius_3 nicdark_margin_right_20 nicdark_font_size_13 nicdark_transition_all_08_ease nicdark_border_1_solid_green_hover nicdark_bg_green_hover"
                  href="#"
                >
                  FOLLOW ME
                </a>
                <a
                  className="nicdark_display_inline_block nicdark_color_white nicdark_border_1_solid_white nicdark_first_font nicdark_padding_8 nicdark_border_radius_3 nicdark_font_size_13 nicdark_transition_all_08_ease nicdark_border_1_solid_green_hover nicdark_bg_green_hover"
                  href="#"
                >
                  MESSAGE ME
                </a>
              </div>
              {/*END responsive*/}
              <div className="nicdark_section nicdark_height_20" />
            </div>
            <div className="grid grid_6 nicdark_text_align_right nicdark_text_align_left_responsive nicdark_text_align_center_all_iphone">
              <div className="nicdark_section nicdark_height_80 nicdark_display_none_all_responsive" />
              <div className="nicdark_display_inline_block nicdark_text_align_center  nicdark_margin_right_40">
                <h1 className="nicdark_color_white nicdark_font_size_40 nicdark_font_size_20_all_iphone nicdark_line_height_20_all_iphone">
                  <strong>{teacher.ecademicLevel}</strong>
                </h1>
                <div className="nicdark_section nicdark_height_5" />
                <p className="nicdark_color_white nicdark_font_size_10_all_iphone">
                  EcademicLevel
                </p>
              </div>
              <div className="nicdark_display_inline_block nicdark_text_align_center nicdark_margin_right_40">
                <h1 className="nicdark_color_white nicdark_font_size_40 nicdark_font_size_20_all_iphone nicdark_line_height_20_all_iphone">
                  <strong>{teacher.gender == "1" ? "Male" : "Female"}</strong>
                </h1>
                <div className="nicdark_section nicdark_height_5" />
                <p className="nicdark_color_white nicdark_font_size_10_all_iphone">
                  Gender
                </p>
              </div>
            </div>
          </div>
          {/*end container*/}
        </div>
      </div>

      <div className="nicdark_section">
        {/*start nicdark_container*/}
        <div className="nicdark_container nicdark_clearfix">
          <div className="nicdark_width_66_percentage nicdark_width_100_percentage_responsive nicdark_float_left">
            <div className="nicdark_section nicdark_padding_15 nicdark_box_sizing_border_box">
              <h2>
                <strong>{teacher.major}</strong>
              </h2>
              <div className="nicdark_section nicdark_height_20" />
              <div className="nicdark_width_100_percentage_all_iphone nicdark_float_left ">
                <p className="nicdark_padding_10 nicdark_padding_0_all_iphone nicdark_padding_left_0">
                  {teacher.description}
                </p>
              </div>

              <div className="nicdark_section nicdark_height_40" />
              <div className="nicdark_section">
                {/*START tab*/}
                <div className="nicdark_tabs ui-tabs ui-widget ui-widget-content ui-corner-all">
                  <ul
                    className="nicdark_list_style_none nicdark_margin_0 nicdark_padding_0 nicdark_section nicdark_border_bottom_2_solid_grey ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"
                    role="tablist"
                  >
                    <li
                      className="nicdark_display_inline_block ui-state-default ui-corner-top"
                      role="tab"
                      tabIndex={-1}
                      aria-controls="tabs-3"
                      aria-labelledby="ui-id-3"
                      aria-selected="false"
                      aria-expanded="false"
                    >
                      <h4>
                        <a
                          className="nicdark_outline_0 nicdark_padding_20 nicdark_padding_right_10 nicdark_display_inline_block nicdark_first_font nicdark_color_greydark ui-tabs-anchor"
                          href="#tabs-3"
                          tabIndex={-1}
                          id="ui-id-3"
                        >
                          My Reviews
                        </a>
                      </h4>
                    </li>
                  </ul>
                  <div className="nicdark_section nicdark_height_20" />

                  <div
                    className="nicdark_section ui-tabs-panel ui-widget-content ui-corner-bottom"
                    id="tabs-3"
                    aria-labelledby="ui-id-3"
                    role="tabpanel"
                    aria-hidden="true"
                    style={{ display: "block" }}
                  >
                    <div className="nicdark_section">
                      <div className="nicdark_section nicdark_height_20" />
                      <div className="nicdark_section">
                        <div className="nicdark_width_30_percentage nicdark_width_100_percentage_all_iphone nicdark_border_radius_3 nicdark_float_left nicdark_text_align_center nicdark_bg_greydark nicdark_padding_30 nicdark_box_sizing_border_box">
                          <h1 className="nicdark_font_size_70 nicdark_color_white">
                            <strong>5</strong>
                          </h1>
                          <div className="nicdark_section nicdark_height_20" />
                          <div className="nicdark_section ">
                            <img
                              alt
                              className
                              width={15}
                              src="img/icons/icon-star-full-yellow.svg"
                            />
                            <img
                              alt
                              className
                              width={15}
                              src="img/icons/icon-star-full-yellow.svg"
                            />
                            <img
                              alt
                              className
                              width={15}
                              src="img/icons/icon-star-full-yellow.svg"
                            />
                            <img
                              alt
                              className
                              width={15}
                              src="img/icons/icon-star-full-yellow.svg"
                            />
                            <img
                              alt
                              className="nicdark_margin_right_10"
                              width={15}
                              src="img/icons/icon-star-full-yellow.svg"
                            />
                          </div>
                          <p>3 Ratings</p>
                        </div>
                        <div className="nicdark_width_70_percentage nicdark_width_100_percentage_all_iphone nicdark_padding_left_40 nicdark_padding_left_0_all_iphone nicdark_float_left nicdark_box_sizing_border_box">
                          <div className=" nicdark_border_radius_3 nicdark_section nicdark_border_1_solid_grey nicdark_padding_20 nicdark_box_sizing_border_box">
                            <table className="nicdark_section">
                              <tbody>
                                <tr>
                                  <td className="nicdark_width_20_percentage ">
                                    <h5>
                                      <strong>5 Stars</strong>
                                    </h5>
                                  </td>
                                  <td className="nicdark_width_70_percentage ">
                                    <div className="nicdark_section nicdark_bg_yellow nicdark_height_10 nicdark_border_radius_3"></div>
                                  </td>
                                  <td className="nicdark_width_10_percentage nicdark_text_align_right">
                                    <p className="nicdark_font_size_14 nicdark_line_height_30">
                                      3
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="nicdark_width_20_percentage ">
                                    <h5>
                                      <strong>4 Stars</strong>
                                    </h5>
                                  </td>
                                  <td className="nicdark_width_70_percentage ">
                                    <div className="nicdark_section nicdark_bg_grey_3 nicdark_height_10 nicdark_border_radius_3"></div>
                                  </td>
                                  <td className="nicdark_width_10_percentage nicdark_text_align_right">
                                    <p className="nicdark_font_size_14 nicdark_line_height_30">
                                      0
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="nicdark_width_20_percentage ">
                                    <h5>
                                      <strong>3 Stars</strong>
                                    </h5>
                                  </td>
                                  <td className="nicdark_width_70_percentage ">
                                    <div className="nicdark_section nicdark_bg_grey_3 nicdark_height_10 nicdark_border_radius_3"></div>
                                  </td>
                                  <td className="nicdark_width_10_percentage nicdark_text_align_right">
                                    <p className="nicdark_font_size_14 nicdark_line_height_30">
                                      0
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="nicdark_width_20_percentage ">
                                    <h5>
                                      <strong>2 Stars</strong>
                                    </h5>
                                  </td>
                                  <td className="nicdark_width_70_percentage ">
                                    <div className="nicdark_section nicdark_bg_grey_3 nicdark_height_10 nicdark_border_radius_3"></div>
                                  </td>
                                  <td className="nicdark_width_10_percentage nicdark_text_align_right">
                                    <p className="nicdark_font_size_14 nicdark_line_height_30">
                                      0
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="nicdark_width_20_percentage ">
                                    <h5>
                                      <strong>1 Stars</strong>
                                    </h5>
                                  </td>
                                  <td className="nicdark_width_70_percentage ">
                                    <div className="nicdark_section nicdark_bg_grey_3 nicdark_height_10 nicdark_border_radius_3"></div>
                                  </td>
                                  <td className="nicdark_width_10_percentage nicdark_text_align_right">
                                    <p className="nicdark_font_size_14 nicdark_line_height_30">
                                      0
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="nicdark_section nicdark_height_30" />
                      {/*START comment preview*/}
                      <div className="nicdark_section nicdark_border_top_1_solid_grey nicdark_padding_40_20 nicdark_box_sizing_border_box">
                        <div className="nicdark_display_table nicdark_float_left">
                          <img
                            alt
                            className="nicdark_display_none_all_iphone nicdark_margin_right_10 nicdark_display_table_cell nicdark_vertical_align_middle nicdark_border_radius_100_percentage"
                            width={40}
                            src="img/avatar/avatar-chef-1.jpg"
                          />
                          <p className="  nicdark_display_table_cell nicdark_vertical_align_middle ">
                            <span className="nicdark_color_greydark nicdark_first_font nicdark_margin_right_20">
                              <strong>John Doe</strong>
                            </span>
                          </p>
                        </div>
                        <div className="nicdark_section nicdark_height_20" />
                        <div className="nicdark_section">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. In et ipsum sit amet ex pulvinar mattis.
                            Pellentesque vitae purus viverra, aliquet lacus in,
                            fringilla massa. Suspendisse ac est a nisi aliquet
                            sollicitudin. Interdum et malesuada fames.
                          </p>
                        </div>
                      </div>
                      {/*END comment preview*/}
                      {/*START comment preview*/}
                      <div className="nicdark_section nicdark_border_top_1_solid_grey nicdark_padding_40_20 nicdark_box_sizing_border_box">
                        <div className="nicdark_display_table nicdark_float_left">
                          <img
                            alt
                            className="nicdark_display_none_all_iphone nicdark_margin_right_10 nicdark_display_table_cell nicdark_vertical_align_middle nicdark_border_radius_100_percentage"
                            width={40}
                            src="img/avatar/avatar-chef-2.jpg"
                          />
                          <p className="  nicdark_display_table_cell nicdark_vertical_align_middle ">
                            <span className="nicdark_color_greydark nicdark_first_font nicdark_margin_right_20">
                              <strong>Nick Hope</strong>
                            </span>
                          </p>
                        </div>
                        <div className="nicdark_section nicdark_height_20" />
                        <div className="nicdark_section">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. In et ipsum sit amet ex pulvinar mattis.
                            Pellentesque vitae purus viverra, aliquet lacus in,
                            fringilla massa. Suspendisse ac est a nisi aliquet
                            sollicitudin. Interdum et malesuada fames.
                          </p>
                        </div>
                      </div>
                      {/* Hiển thị feedback */}
                      {feedbackList.map((item, index) => (
                        <div
                          key={index}
                          className="nicdark_section nicdark_border_top_1_solid_grey nicdark_padding_40_20 nicdark_box_sizing_border_box"
                        >
                          <div className="nicdark_display_table nicdark_float_left">
                            <img
                              alt=""
                              className="nicdark_display_none_all_iphone nicdark_margin_right_10 nicdark_display_table_cell nicdark_vertical_align_middle nicdark_border_radius_100_percentage"
                              width={40}
                              src={`img/avatar/avatar-chef-${
                                index % 2 === 0 ? "1" : "2"
                              }.jpg`}
                            />
                            <p className="nicdark_display_table_cell nicdark_vertical_align_middle">
                              <span className="nicdark_color_greydark nicdark_first_font nicdark_margin_right_20">
                                <strong>{item.name}</strong>
                              </span>
                            </p>
                          </div>
                          <div className="nicdark_section nicdark_height_20" />
                          <div className="nicdark_section">
                            <p>{item.feedback}</p>
                          </div>
                        </div>
                      ))}
                      {/*END comment preview*/}
                      {/*START comment preview*/}
                      {/*END comment preview*/}
                      <div>
                        <h1>Feedback Form</h1>
                        <form onSubmit={handleSubmit}>
                          <div>
                            <label htmlFor="name">Name:</label>
                            <input
                              type="text"
                              id="name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="email">Email:</label>
                            <input
                              type="email"
                              id="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="feedback">Feedback:</label>
                            <textarea
                              id="feedback"
                              value={feedback}
                              onChange={(e) => setFeedback(e.target.value)}
                              required
                            />
                          </div>
                          <button type="submit">Submit</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                {/*END tab*/}
                {/*START Dialog*/}
                {/*<div class="nicdark_dialog" title="Basic dialog">
                                    <p>This is an animated dialog which is useful for displaying information. The dialog window can be moved, resized and closed with the 'x' icon.</p>
                                  </div>*/}
                {/*<button class="nicdark_dialog_open">Open Dialog</button>*/}
                {/*END Dialog*/}
              </div>
            </div>
            <div className="nicdark_section nicdark_height_50" />
          </div>
          <div className="nicdark_width_33_percentage nicdark_width_100_percentage_responsive nicdark_float_left">
            <div className="nicdark_section nicdark_padding_15 nicdark_box_sizing_border_box">
              <table className="nicdark_section">
                <tbody>
                  <tr className="nicdark_border_bottom_2_solid_grey">
                    <td className="nicdark_padding_20 ">
                      <img
                        alt
                        className
                        width={40}
                        src="img/icons/icon-email-grey.svg"
                      />
                    </td>
                    <td className="nicdark_padding_20 ">
                      <h4 className=" nicdark_text_align_right">
                        Email: {teacher.email}
                      </h4>
                    </td>
                  </tr>
                  <tr className="nicdark_border_bottom_2_solid_grey">
                    <td className="nicdark_padding_20">
                      <img
                        alt
                        className
                        width={40}
                        src="img/icons/icon-mobile-grey.svg"
                      />
                    </td>
                    <td className="nicdark_padding_20">
                      <h4 className=" nicdark_text_align_right">
                        Phone: {teacher.phone}
                      </h4>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="nicdark_section nicdark_height_40" />
              <div className="nicdark_section nicdark_bg_white nicdark_border_1_solid_grey">
                <div className="nicdark_section nicdark_padding_20 nicdark_box_sizing_border_box nicdark_bg_grey nicdark_border_bottom_1_solid_grey nicdark_text_align_center">
                  <h3 className>
                    <strong>Contact Me</strong>
                  </h3>
                </div>
                <div className="nicdark_section nicdark_padding_10 nicdark_box_sizing_border_box">
                  <div className="nicdark_section">
                    <div className="nicdark_width_100_percentage nicdark_padding_10 nicdark_box_sizing_border_box nicdark_float_left">
                      <input
                        className="nicdark_padding_left_0 nicdark_background_none nicdark_border_top_width_0 nicdark_border_right_width_0 nicdark_border_left_width_0"
                        type="text"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div className="nicdark_section">
                    <div className="nicdark_width_100_percentage nicdark_padding_10 nicdark_box_sizing_border_box nicdark_float_left">
                      <input
                        className="nicdark_padding_left_0 nicdark_background_none nicdark_border_top_width_0 nicdark_border_right_width_0 nicdark_border_left_width_0"
                        type="text"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="nicdark_section">
                    <div className="nicdark_width_100_percentage nicdark_padding_10 nicdark_box_sizing_border_box nicdark_float_left">
                      <textarea
                        rows={4}
                        className="nicdark_padding_left_0 nicdark_background_none nicdark_border_top_width_0 nicdark_border_right_width_0 nicdark_border_left_width_0"
                        placeholder="Message"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="nicdark_section">
                    <div className="nicdark_width_100_percentage nicdark_padding_10 nicdark_box_sizing_border_box nicdark_float_left">
                      <a
                        className="nicdark_display_inline_block nicdark_text_align_center nicdark_box_sizing_border_box nicdark_width_100_percentage nicdark_color_white nicdark_bg_violet nicdark_first_font nicdark_padding_10_20 nicdark_border_radius_3 "
                        href="#"
                      >
                        SEND NOW
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="nicdark_section nicdark_height_50" />
          </div>
        </div>
        {/*end container*/}
      </div>
    </div>
  );
}

export default TeacherSingle;
