import React from 'react'

function Blog() {
    return (
        <div>
            <div className="nicdark_section nicdark_bg_grey nicdark_border_bottom_1_solid_grey">
                {/*start nicdark_container*/}
                <div className="nicdark_container nicdark_clearfix">
                    <div className="grid grid_12">
                        <a href="#">Home</a>
                        <img alt className="nicdark_margin_left_10 nicdark_margin_right_10" width={10} src="img/icons/icon-next-grey.svg" />
                        <a href="#">Blog</a>
                        <img alt className="nicdark_margin_left_10 nicdark_margin_right_10" width={10} src="img/icons/icon-next-grey.svg" />
                        <a href="#">News</a>
                    </div>
                </div>
                {/*end container*/}
            </div>


            <div className="nicdark_width_50_percentage nicdark_text_align_center_all_iphone nicdark_width_100_percentage_all_iphone nicdark_float_left nicdark_display_none nicdark_display_block_responsive">
                <div className="nicdark_section nicdark_height_20" />
                <a href="index.html"><img alt width={170} className src="img/logos/logo-university.svg" /></a>
            </div>


        </div>
    )
}

export default Blog