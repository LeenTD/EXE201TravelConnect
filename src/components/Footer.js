import React, { memo } from 'react'

function Footer() {
  return (


    <>


      <div>
        <div className="nicdark_section bg-secondary">
          <div className="nicdark_section nicdark_height_50" />
          {/*start nicdark_container*/}
          <div className="nicdark_container nicdark_clearfix">
            <div className="grid grid_12 nicdark_text_align_center">
              <div className="nicdark_section">
                <a href="#"><img alt width={500} className='' style={{ paddingLeft: '100px' }} src="/logo.png" /></a>
              </div>
              <div className="nicdark_section nicdark_height_20" />
              <div className="nicdark_display_inline_block">
                <a href="index.html"><img alt width={40} className="nicdark_margin_right_10" src="img/icons/icon-facebook-circle.svg" /></a>
                <a href="index.html"><img alt width={40} className="nicdark_margin_right_10" src="img/icons/icon-twitter-circle.svg" /></a>
                <a href="index.html"><img alt width={40} className="nicdark_margin_right_10" src="img/icons/icon-pinterest-circle.svg" /></a>
                <a href="index.html"><img alt width={40} className="nicdark_margin_right_10" src="img/icons/icon-linkedin-circle.svg" /></a>
                <a href="index.html"><img alt width={40} className="nicdark_margin_right_10" src="img/icons/icon-youtube-circle.svg" /></a>
              </div>
            </div>
          </div>
          {/*end container*/}
          <div className="nicdark_section nicdark_height_50" />
        </div>
        <div className="nicdark_section nicdark_bg_greydark">
          {/*start nicdark_container*/}
          <div className="nicdark_container nicdark_clearfix nicdark_border_top_1_solid_greydark">
            <div className="grid grid_6 nicdark_text_align_center_responsive">
              <p className="nicdark_color_grey nicdark_font_size_14">© Copyright 2016 CleanThemes.net - Food
                Laborator Theme</p>
            </div>
            <div className="grid grid_6 nicdark_text_align_right nicdark_text_align_center_responsive nicdark_border_top_1_solid_greydark_responsive nicdark_display_none_all_iphone">
              <div className="nicdark_navigation_copyright">
                <ul>
                  <li>
                    <a href="index.html">Trang chủ</a>
                  </li>
                  <li>
                    <a href="about-us.html">Giới thiệu</a>
                  </li>
                  <li>
                    <a href="contact-1.html">Liên hệ</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*end container*/}
        </div>
      </div>


    </>



  )
}

export default memo(Footer)