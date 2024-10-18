import React, { useState } from 'react';
import TeacherCard from '../TeacherCard';
import ReactPaginate from 'react-paginate';
import { teachers } from '../../data';

function GridTeacher() {

    const [searchTerm, setSearchTerm] = useState('');
    const [pageNumber, setPageNumber] = useState(0);
    const teachersPerPage = 8;
    const pagesVisited = pageNumber * teachersPerPage;

    const filteredTeachers = teachers.filter(teacher =>
        teacher.major.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const displayTeachers = filteredTeachers
        .slice(pagesVisited, pagesVisited + teachersPerPage)
        .map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
        ));

    const pageCount = Math.ceil(filteredTeachers.length / teachersPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <div className="nicdark_section">
            <div className="nicdark_container nicdark_clearfix">
                <div className="nicdark_width_100_percentage mt-5">
                    <div className="nicdark_section nicdark_box_sizing_border_box nicdark_float_left nicdark_position_relative nicdark_padding_right_20 mx-3">
                        <img alt='icon' className="nicdark_position_absolute nicdark_top_5 nicdark_left_0 nicdark_margin_top_5" width={15} src="img/icons/icon-pen.svg" />
                        <input
                            className="nicdark_padding_left_25 nicdark_border_width_2 nicdark_background_none nicdark_border_top_width_0 nicdark_border_right_width_0 nicdark_border_left_width_0"
                            type="text"
                            placeholder="Tên thành phố..."
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    {displayTeachers}
                    <div className="nicdark_section nicdark_height_30" />
                    <div className="nicdark_section nicdark_text_align_center">
                        <ReactPaginate
                            previousLabel={"Previous"}
                            nextLabel={"Next"}
                            pageCount={pageCount}
                            onPageChange={changePage}
                            containerClassName={"pagination"}
                            pageClassName="page-item"
                            pageLinkClassName="page-link"
                            previousClassName="page-item"
                            previousLinkClassName="page-link"
                            nextClassName="page-item"
                            nextLinkClassName="page-link"
                            breakLabel="..."
                            breakClassName="page-item"
                            breakLinkClassName="page-link"
                            activeClassName="active"
                        />
                    </div>
                </div>
            </div>
            <div className="nicdark_section nicdark_height_70" />
        </div>
    );
}

export default GridTeacher;
