import React, { useEffect } from 'react'
import { courses, teachers } from '../data';
import CourseCard from '../components/CourseCard';
import TeacherCard from '../components/TeacherCard';

function Home() {

  useEffect(() => {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJST0xFIjoiQURNSU4iLCJzdWIiOiJkdXk4IiwiaWF0IjoxNzE3NDczOTY5LCJleHAiOjE3MTgzMTk5Njl9.y3Xckq84rwhzzWaStSPIEnEwZfuS1_CG3ouIxqXU6Ak';

    fetch('http://localhost:8080/api/user/list?page=0&record=3', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.text();  // Parse as text first
      })
      .then(text => {
        try {
          const data = JSON.parse(text);  // Try to parse JSON
          console.log(data);
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      })
      .catch(error => console.error('Fetch error:', error));
  }, []);


  return (

    <>
      <p className='text-danger'>Hệ thống đang bảo trì và đang trong giai đoạn hoàn thiện.</p>
      <p className='text-danger'>Nếu bạn muốn trải nghiệm TravelConect thì bạn hãy đăng nhập tài khoản email: <span className='fw-bold'>test@gmail.com</span>, password: <span className='fw-bold'>usertest</span> hoặc đăng kí tài khoản mới để được trải nghiệm hệ thống</p>
      <div className="nicdark_section nicdark_background_size_cover nicdark_background_position_center" style={{ backgroundImage: 'url(https://www.anhdulich.vn/storage/sliders/ha-long-bay-copy.jpg)' }}>
        <div className="nicdark_section nicdark_bg_greydark_alpha_gradient_3">
          <div className="nicdark_section nicdark_height_570" />
          {/*start nicdark_container*/}
          <div className="nicdark_container nicdark_clearfix nicdark_display_none_all_iphone">
            <div className="grid grid_12">
              <strong className="nicdark_color_white nicdark_font_size_60 nicdark_first_font">"Cùng TravelConnect Khám Phá "</strong>
              {/*START typed words*/}
              <div className="nicdark_section ">

                <div className="nicdark_typed_strings">
                  <p><strong className="nicdark_color_white nicdark_font_size_40 nicdark_first_font">Tìm kiếm những trải nghiệm mới mẻ cùng với những người bạn đồng hành!</strong></p>
                  {/* <p><strong className="nicdark_color_white nicdark_font_size_40 nicdark_first_font">economics
                    and statistics</strong></p> */}
                </div>
                <span className="nicdark_typed nicdark_padding_botttom_5" style={{ whiteSpace: 'pre' }} />
              </div>
              {/*END typed words*/}
            </div>
          </div>
          {/*end container*/}
          <div className="nicdark_section nicdark_height_50" />
        </div>
      </div>



      <div className="nicdark_section">
        <div className="nicdark_container nicdark_clearfix">
          <div className="grid grid_4 ">
            <div className="nicdark_section nicdark_height_20" />
            <h2><strong>Khám phá du lịch</strong></h2>
            <div className="nicdark_section nicdark_height_20" />
            <p>"Cùng chúng tôi khám phá những điểm đến hấp dẫn trên khắp thế giới. Từ những kỳ quan thiên nhiên hùng vĩ đến các thành phố hiện đại đầy sắc màu, hành trình của bạn sẽ luôn đầy thú vị và mới mẻ."</p>
          </div>
          <div className="grid grid_4 ">
            <div className="nicdark_section nicdark_height_20" />
            <h2><strong>Kết nối bạn bè</strong></h2>
            <div className="nicdark_section nicdark_height_20" />
            <p>"Du lịch không chỉ là khám phá, mà còn là kết nối. Chúng tôi giúp bạn tìm kiếm và kết bạn với những người bạn đồng hành mới, chia sẻ trải nghiệm và tạo nên những kỷ niệm khó quên trên mỗi chuyến đi."</p>
          </div>
          <div className="grid grid_4 ">
            <div className="nicdark_section nicdark_height_20" />
            <h2><strong>Trải nghiệm thực tế</strong></h2>
            <div className="nicdark_section nicdark_height_20" />
            <p>"Thay vì chỉ nhìn qua màn hình, hãy đến và cảm nhận thực tế. Từ việc thưởng thức ẩm thực địa phương, hòa mình vào văn hóa bản địa, đến tham gia các hoạt động đặc sắc, chúng tôi mang đến cho bạn trải nghiệm du lịch chân thật và sống động."</p>
          </div>
        </div>
      </div>




      <div className="nicdark_section nicdark_background_size_cover nicdark_background_position_center_top" style={{ backgroundImage: 'url(https://r2.nucuoimekong.com/wp-content/uploads/dia-diem-du-lich-viet-nam-avt.jpg)' }}>
        <div className="nicdark_section nicdark_bg_greydark_alpha_gradient_5">
          {/*start nicdark_container*/}
          <div className="nicdark_container nicdark_clearfix">
            <div className="nicdark_section nicdark_height_50" />
            <div className="grid grid_12">
              <h1 className="nicdark_font_size_50 nicdark_color_white"><strong>Các chuyến đi</strong></h1>
              <div className="nicdark_section nicdark_height_10" />
              <h3 className=" nicdark_color_white">Chuyến đi mới nhất</h3>
            </div>
          </div>
          {/*END nicdark_container*/}
          {/*start nicdark_container*/}
          <div className="nicdark_container nicdark_clearfix nicdark_padding_20  nicdark_padding_botttom_0 nicdark_box_sizing_border_box">
            <div className="nicdark_width_100_percentage nicdark_position_relative nicdark_margin_bottom_105_negative nicdark_bg_grey nicdark_border_1_solid_grey nicdark_float_left nicdark_padding_20 nicdark_padding_0_all_iphone nicdark_box_sizing_border_box">
              {Array.isArray(courses) && courses.length > 0 ? (
                courses.slice(0, 3).map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))
              ) : (
                <p>No trip found</p>
              )}
            </div>
          </div>
          {/*end container*/}
        </div>
      </div>



      <div className="nicdark_section nicdark_height_150" />



      <div className="nicdark_section">
        {/*start nicdark_container*/}
        <div className="nicdark_container nicdark_clearfix">
          <div className="grid grid_12">
            <h1 className="nicdark_font_size_50"><strong>Hướng dẫn viên</strong></h1>
            <div className="nicdark_section nicdark_height_10" />
            <h3 className=" nicdark_color_grey">Hướng dẫn viên có kinh nghiệm nhất</h3>
            <div className="nicdark_section nicdark_height_10" />
          </div>
          {Array.isArray(teachers) && teachers.length > 0 ? (
            teachers.slice(0, 4).map((teacher) => (
              <TeacherCard key={teacher.id} teacher={teacher} />
            ))
          ) : (
            <p>Không có hướng dẫn viên nào được tìm thấy</p>
          )}
        </div>
        {/*end container*/}
      </div>




      <div className="nicdark_section nicdark_background_size_cover nicdark_background_position_center_top" style={{ backgroundImage: 'url(https://static-images.vnncdn.net/files/publish/2023/8/15/key-facts-about-vietnam-featured-photo-min-1569.jpg' }}>
        <div className="nicdark_section nicdark_bg_greydark_alpha_6">
          <div className="nicdark_container nicdark_clearfix">
            <div className="nicdark_section nicdark_height_80" />
            <div className="grid grid_3 nicdark_text_align_center">
              <h1 className="nicdark_font_size_50 nicdark_color_white"><strong>150</strong></h1>
              <div className="nicdark_section nicdark_height_20" />
              <p className="nicdark_color_white">Hướng dẫn viên</p>
            </div>
            <div className="grid grid_3 nicdark_text_align_center">
              <h1 className="nicdark_font_size_50 nicdark_color_white"><strong>+ 10 K</strong></h1>
              <div className="nicdark_section nicdark_height_20" />
              <p className="nicdark_color_white">Khách hàng</p>
            </div>
            <div className="grid grid_3 nicdark_text_align_center">
              <h1 className="nicdark_font_size_50 nicdark_color_white"><strong>+ 47</strong></h1>
              <div className="nicdark_section nicdark_height_20" />
              <p className="nicdark_color_white">Chuyến đi</p>
            </div>
            <div className="grid grid_3 nicdark_text_align_center">
              <h1 className="nicdark_font_size_50 nicdark_color_white"><strong>10</strong></h1>
              <div className="nicdark_section nicdark_height_20" />
              <p className="nicdark_color_white">Kinh nghiệm</p>
            </div>
            <div className="nicdark_section nicdark_height_80" />
          </div>
        </div>
      </div>








    </>


  )
}

export default Home