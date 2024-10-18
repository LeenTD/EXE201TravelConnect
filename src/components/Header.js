import { Link, useNavigate } from 'react-router-dom';
import RoutePath from '../config/RoutePath';
import { memo } from 'react';

function Header() {
  const navigate = useNavigate(); // Khởi tạo useNavigate

  // Hàm xử lý đăng xuất
  const handleLogout = () => {
    localStorage.removeItem('currentUser'); // Xóa currentUser khỏi LocalStorage
    navigate(RoutePath.HOME); // Điều hướng về trang chủ sau khi đăng xuất
  };

  // Kiểm tra xem có user đang đăng nhập không
  const currentUser = localStorage.getItem('currentUser');

  return (
    <>
      <div className="nicdark_section">
        <div className="nicdark_section nicdark_bg_blue">
          <div className="nicdark_container nicdark_clearfix">
            <div className="grid grid_6 nicdark_padding_botttom_10 nicdark_padding_top_10 nicdark_text_align_center_responsive">
              <div className="nicdark_navigation_top_header_3">
                <ul>
                  <li>
                    <img alt="img" className="nicdark_margin_right_10 " width={15} src="img/icons/icon-world-white.svg" />
                    <Link className="nicdark_line_height_18 nicdark_color_white" to={RoutePath.HOME}>Ngôn ngữ</Link>
                    <ul className="nicdark_sub_menu">
                      <li><Link to={RoutePath.HOME}>Tiếng anh</Link></li>
                      <li><Link to={RoutePath.HOME}>Tiếng việt</Link></li>
                    </ul>
                  </li>
                  <li>
                    <img alt="img" className="nicdark_margin_right_10" width={15} src="img/icons/icon-share-white.svg" />
                    <Link className="nicdark_line_height_18 nicdark_color_white" to={RoutePath.HOME}>Mạng xã hội</Link>
                    <ul className="nicdark_sub_menu">
                      <li><Link target="_blank" href="https://www.facebook.com/cleanthemeslab">Facebook</Link></li>
                      <li><Link target="_blank" href="https://twitter.com/cleanthemeslab">Twitter</Link></li>
                      <li><Link target="_blank" href="https://www.instagram.com/cleanthemeslab/">Instagram</Link></li>
                    </ul>
                    <Link target="_blank" href="https://www.facebook.com/cleanthemeslab"><img alt="img" className="nicdark_margin_left_10  nicdark_margin_top_2 nicdark_display_none_all_responsive" width={12} src="img/icons/icon-facebook-white.svg" /></Link>
                    <Link target="_blank" href="https://twitter.com/cleanthemeslab"><img alt="img" className="nicdark_margin_left_10  nicdark_margin_top_2 nicdark_display_none_all_responsive" width={12} src="img/icons/icon-twitter-white.svg" /></Link>
                    <Link target="_blank" to={RoutePath.HOME}><img alt="img" className="nicdark_margin_left_10  nicdark_margin_top_2 nicdark_display_none_all_responsive" width={12} src="img/icons/icon-linkedin-white.svg" /></Link>
                    <Link target="_blank" to={RoutePath.HOME}><img alt="img" className="nicdark_margin_left_10  nicdark_margin_top_2 nicdark_display_none_all_responsive" width={12} src="img/icons/icon-pinterest-white.svg" /></Link>
                    <Link target="_blank" href="https://www.instagram.com/cleanthemeslab/"><img alt="img" className="nicdark_margin_left_10  nicdark_margin_top_2 nicdark_display_none_all_responsive" width={12} src="img/icons/icon-instagram-white.svg" /></Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid_6 nicdark_text_align_right nicdark_border_top_1_solid_bluedark_responsive nicdark_text_align_center_responsive nicdark_padding_botttom_10 nicdark_padding_top_10">
              <div className="nicdark_navigation_top_header_3">
                <ul>
                  {currentUser ? (
                    <>
                      <li>
                        <span className="nicdark_color_white">{JSON.parse(currentUser).username}</span>
                      </li>
                      <li>
                        <button className="nicdark_color_white" onClick={handleLogout}>ĐĂNG XUẤT</button>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <img alt="img" className="nicdark_margin_right_10 nicdark_float_left" width={15} src="img/icons/icon-user-white.svg" />
                        <Link className="nicdark_color_white" to={RoutePath.LOGIN}>ĐĂNG NHẬP</Link>
                      </li>
                      <li>
                        <img alt="img" className="nicdark_margin_right_10 nicdark_float_left" width={15} src="img/icons/icon-login-white.svg" />
                        <Link className="nicdark_color_white" to={RoutePath.REGISTER}>ĐĂNG KÍ</Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="nicdark_section nicdark_position_relative ">
        <div className="nicdark_section nicdark_bg_white">
          <div className="nicdark_container nicdark_clearfix nicdark_position_relative">
            <div className="grid grid_12 nicdark_display_none_all_responsive">
              <div className="nicdark_section nicdark_height_10" />
              <Link to={RoutePath.HOME}><img alt="img" className="nicdark_position_absolute nicdark_left_15 nicdark_top_20" width={230} src="/logo.png" /></Link>
              <div className="nicdark_float_right nicdark_width_100 nicdark_position_relative nicdark_height_25 nicdark_display_none_all_responsive">
                <Link to={RoutePath.CART}>
                  <img alt="img" className="nicdark_opacity_05_hover nicdark_transition_all_08_ease nicdark_position_absolute nicdark_top_3_negative nicdark_left_0 nicdark_margin_left_20" width={25} src="img/icons/icon-cart-grey.svg" />
                </Link>
                <Link className="nicdark_navigation_3_open_search_content" to={RoutePath.HOME}>
                  <img alt="img" className="nicdark_opacity_05_hover nicdark_transition_all_08_ease nicdark_position_absolute nicdark_top_3_negative nicdark_right_0" width={25} src="img/icons/icon-search-grey.svg" />
                </Link>
              </div>
              <div className="nicdark_navigation_3 nicdark_text_align_right nicdark_float_right nicdark_display_none_all_responsive">
                <ul>
                  <li>
                    <Link to={RoutePath.HOME}>Trang chủ</Link>
                  </li>
                  <li>
                    <Link to={RoutePath.COURSE}>Chuyến đi</Link>
                  </li>
                  <li>
                    <Link to={RoutePath.TEACHERS}>Người đồng Hành</Link>
                  </li>
                  <li>
                    <Link to={RoutePath.ABOUTUS}>Liên hệ</Link>
                  </li>
                </ul>
              </div>
              <div className="nicdark_section nicdark_height_10" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Header);
