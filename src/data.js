// data.js

let courses = JSON.parse(localStorage.getItem("courses")) || [

  {
    id: 1,
    title: "Bán đảo sơn trà",
    description:
      " Du lịch bán đảo Sơn Trà là hoạt động không chỉ thu hút khách du lịch mà còn là mối quan tâm lớn của các nhà khoa học. Sở dĩ du lịch bán đảo Sơn Trà có sức hấp dẫn lớn đến vậy là vì nơi đây có hệ sinh thái động thực vật đa dạng, chứa đựng nhiều “câu chuyện” chưa được kể hết. ",
    totalMoneyMonthTeaching: 1500000,
    numberTeachOfWeek: "2024-10-20",
    oneHourTeaching: 5,
    imageUrl:
      "https://www.vietnambooking.com/wp-content/uploads/2019/05/chua-linh-ung-ban-dao-son-tra-25052019-1.png",
    teacher: "Hạnh Hài Hước",
  },
  {
    id: 2,
    title: "Hội An Food Tour",
    description:
      "Khám phá những món ăn ngon độc lạ có tại Hội An",
    totalMoneyMonthTeaching: 1000000,
    numberTeachOfWeek: "2024-10-20",
    oneHourTeaching: 4,
    imageUrl:
      "https://veronikasadventure.com/wp-content/uploads/2024/01/hoi-an-ancient-town-walking-street-food-tours-with-night-market.jpg",
    teacher: "Linh Chi",
  },
  {
    id: 3,
    title: "Bà Nà Hills",
    description:
      "Tham quan bà nà hills cùng những câu chuyện chưa ai kể cho bạn nge",
    totalMoneyMonthTeaching: 1500000,
    numberTeachOfWeek: "2024-10-20",
    oneHourTeaching: 6,
    imageUrl:
      "https://vnpay.vn/s1/statics.vnpay.vn/2023/11/0vbgf0hp28k1698943189116.png",
    teacher: "Quốc Nhật",
  },
  {
    id: 4,
    title: "Kinh Thành Huế",
    description:
      "Cố đô Huế cũng những câu chuyện của thời nhà Nguyễn",
    totalMoneyMonthTeaching: 1500000,
    numberTeachOfWeek: "2024-10-20",
    oneHourTeaching: 15,
    imageUrl: "https://i.ytimg.com/vi/2xuJn9VSP50/maxresdefault.jpg",
    teacher: "Gia Khiêm",
  },
  {
    id: 5,
    title: "Thánh địa Mỹ Sơn",
    description:
      "Truyền cảm hứng cho các bạn về văn hóa nghệ thuật Chăm",
    totalMoneyMonthTeaching: 1500000,
    numberTeachOfWeek: "2024-10-20",
    oneHourTeaching: 2,
    imageUrl: "https://imgs.vietnamnet.vn/Images/2017/04/25/10/20170425100442-my-son.jpg",
    teacher: "Thùy Dương",
  },
  {
    id: 6,
    title: "Phượt Đà Lạt",
    description:
      "Trải nghiệm chuyến đi xa cùng nhau để đến nơi mình cần đến",
    totalMoneyMonthTeaching: "Chưa xác định",
    numberTeachOfWeek: "2024-10-20",
    oneHourTeaching: 15,
    imageUrl: "https://bizweb.dktcdn.net/100/349/716/files/phuot-da-lat-bang-xe-may-1.jpg?v=1712391510621",
    teacher: "Duy Nguyễn",
  },
  {
    id: 7,
    title: "Phong Nha - Kẽ Bàng",
    description:
      "Khám phá những hang động lớn nhỏ có tại Phong Nha - Kẻ Bàng",
    totalMoneyMonthTeaching: 1500000,
    numberTeachOfWeek: "2024-10-20",
    oneHourTeaching: 15,
    imageUrl: "https://cdn.tgdd.vn/Files/2021/07/05/1365760/kinh-nghiem-du-lich-kham-pha-dong-phong-nha-ke-bang-quang-binh-202107051210588725.jpg",
    teacher: "Phạm Thế Toàn",
  },
  {
    id: 8,
    title: "Vịnh Hạ Long",
    description:
      "Điểm đến hấp dẫn được mệnh danh là kì quan thiên nhiên thế giới",
    totalMoneyMonthTeaching: 1500000,
    numberTeachOfWeek: "2024-10-20",
    oneHourTeaching: 15,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO90_xtA1I1oWTosK5OkQ16p-5syGLtWgYAA&s",
    teacher: "Hải Đăng",
  },
];

let users = JSON.parse(localStorage.getItem("users")) || [
  {
    id: 1,
    username: "usertest",
    password: "usertest",
    email: "test@gmail.com",
    imageUrl:
      "https://www.bing.com/th/id/OIP.Ui8U6RfUSMOP0LiBzQv4wAHaEX?w=300&h=180&c=7&r=0&o=5&pid=1.7",

  },
  {
    id: 2,
    username: "Trình Đức Thắng",
    password: "123123",
    email: "thangtd123@gmail.com",
    imageUrl:
      "https://www.bing.com/th/id/OIP.Ui8U6RfUSMOP0LiBzQv4wAHaEX?w=300&h=180&c=7&r=0&o=5&pid=1.7",
  },
  {
    id: 3,
    username: "Phạm Đoàn Đại Nghĩa",
    password: "nghiadepzai",
    email: "nghiapham@gmail.com",
    imageUrl:
      "https://www.bing.com/th/id/OIP.Ui8U6RfUSMOP0LiBzQv4wAHaEX?w=300&h=180&c=7&r=0&o=5&pid=1.7",
  },
  {
    id: 4,
    username: "Nguyễn Tiến Thành Đạt",
    password: "datnguyen123",
    email: "thanhdat2002@gmail.com",
    imageUrl:
      "https://www.bing.com/th/id/OIP.Ui8U6RfUSMOP0LiBzQv4wAHaEX?w=300&h=180&c=7&r=0&o=5&pid=1.7",
  },
  {
    id: 5,
    username: "Nguyễn Trần Lâm Khuê",
    password: "huhu98767",
    email: "noriabc1231@gmail.com",
    imageUrl:
      "https://www.bing.com/th/id/OIP.Ui8U6RfUSMOP0LiBzQv4wAHaEX?w=300&h=180&c=7&r=0&o=5&pid=1.7",
  },
  {
    id: 6,
    username: "Võ Đức Minh",
    password: "Minh098098",
    email: "abssd@gmail.com",
    imageUrl:
      "https://www.bing.com/th/id/OIP.Ui8U6RfUSMOP0LiBzQv4wAHaEX?w=300&h=180&c=7&r=0&o=5&pid=1.7",
  },
  {
    id: 7,
    username: "Nguyễn Thị Ngọc Phi",
    password: "phiphi1221",
    email: "ngocphi@gmail.com",
    imageUrl:
      "https://www.bing.com/th/id/OIP.Ui8U6RfUSMOP0LiBzQv4wAHaEX?w=300&h=180&c=7&r=0&o=5&pid=1.7",
  },
  {
    id: 8,
    username: "Nguyễn Tài Quỳnh Anh",
    password: "quanhnguyen",
    email: "quanhnguyen@gmail.com",
    imageUrl:
      "https://www.bing.com/th/id/OIP.Ui8U6RfUSMOP0LiBzQv4wAHaEX?w=300&h=180&c=7&r=0&o=5&pid=1.7",
  },
  {
    id: 9,
    username: "Nguyễn Cao Khánh Linh",
    password: "linhlinh",
    email: "klinhnc2002@gmail.com",
    imageUrl:
      "https://www.bing.com/th/id/OIP.Ui8U6RfUSMOP0LiBzQv4wAHaEX?w=300&h=180&c=7&r=0&o=5&pid=1.7",
  },
  {
    id: 10,
    username: "Nguyễn Văn Mạnh",
    password: "pass",
    email: "manh@gmail.com",
    imageUrl:
      "https://www.bing.com/th/id/OIP.Ui8U6RfUSMOP0LiBzQv4wAHaEX?w=300&h=180&c=7&r=0&o=5&pid=1.7",
  },
];

let teachers = JSON.parse(localStorage.getItem("teachers")) || [

  {
    id: 1,
    fullName: "Thanh Thảo",
    major: "Quảng Nam",
    description:
      "Thanh Thảo có kinh nghiệm 5 năm làm việc và thông thạo tiếng Anh.",
    email: "thienhn2k2@gmail.com",
    phone: "0905222529",
    cardPhoto: "https://cantho-school.fpt.edu.vn/wp-content/uploads/con-gai-co-nen-hoc-quan-tri-du-lich-va-lu-hanh-1.jpg"
  },
  {
    id: 2,
    fullName: "Linh Chi",
    major: "Huế",
    description: "Có kinh nghiệm hướng dẫn du lịch cho khách quốc tế tại Huế.",
    email: "linhchi@example.com",
    phone: "0905222530",
    cardPhoto: "https://trangtinphapluat.com/wp-content/uploads/2018/02/huongdanviendulich.jpg"
  },
  {
    id: 3,
    fullName: "Quốc Nhật",
    major: "Đà Nẵng",
    description: "Quốc Nhật là hướng dẫn viên du lịch chuyên nghiệp tại Đà Nẵng với hơn 7 năm kinh nghiệm",
    email: "quocnhat@example.com",
    phone: "0905222531",
    cardPhoto: "https://bachkhoasaigon.edu.vn/wp-content/uploads/2021/07/ngoai-hinh-nguoi-huong-dan-vien-du-lich.jpg"
  },
  {
    id: 4,
    fullName: "Gia Khiêm",
    major: "Quảng Bình",
    description: "Gia Khiêm có kinh nghiệm tổ chức và quản lý tour du lịch tại Quảng Bình.",
    email: "giakhiem@example.com",
    phone: "0905222532",
    cardPhoto: "https://kienthucnganhdulich.edu.vn/wp-content/uploads/2024/07/Vi-Tri-Huong-Dan-Vien-Du-Lich-Tour-Guide.jpg"
  },
  {
    id: 5,
    fullName: "Thùy Dương",
    major: "Đà Nẵng",
    description: "Thùy Dương chuyên tổ chức các tour du lịch trong nước",
    email: "thuydung@example.com",
    phone: "0905222533",
    cardPhoto: "https://image.phunuonline.com.vn/fckeditor/upload/2024/20240724/images/sinh-vien-quan-tri-du-lich-_621721808163.jpg"
  },
  {
    id: 6,
    fullName: "Duy Nguyễn",
    major: "Hà Nội",
    description: "Duy Nguyễn là hướng dẫn viên quốc tế với kinh nghiệm làm việc tại Hà Nội.",
    email: "duynguyen@example.com",
    phone: "0905222534",
    cardPhoto:
      "https://caodang.fpt.edu.vn/wp-content/uploads/2024/08/z5577303856517_b5cd488acf73bfc4e1f9ebcff4785a2d.jpg",
  },
  {
    id: 7,
    fullName: "Phạm Thế Toàn",
    major: "Đà Nẵng",
    description: "Thế Toàn từng được vinh danh trong ngành du lịch tại Đà Nẵng.",
    email: "thetoan@example.com",
    phone: "0905222535",
    cardPhoto: "https://static.baovanhoa.vn/zoom/1000/uploaded/lehonghanh/2024_09_24/4610459069229436665252688526888183746985468n_zmyi.jpg"
  },
  {
    id: 8,
    fullName: "Hải Đăng",
    major: "Quảng Nam",
    description:
      "Hải Đăng là giáo viên giảng dạy về du lịch tại Quảng Nam.",
    email: "haidang@example.com",
    phone: "0905222536",
    cardPhoto: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2023/6/7/1201802/Sinh-Vien-01.png"
  },
  {
    id: 9,
    fullName: "Hồng Hoa",
    major: "Huế",
    description:
      "Hồng Hoa có kinh nghiệm hướng dẫn các tour du lịch tại Huế.",
    email: "janesmith@example.com",
    phone: "0905222537",
    cardPhoto: "https://caodanglacviet.edu.vn/wp-content/uploads/2023/08/anh-huong-dan-vien-700x568.jpg"
  },
  {
    id: 10,
    fullName: "Jane Smith",
    major: "Khoa học",
    description:
      "Giáo viên toán có kinh nghiệm với niềm đam mê dạy và giúp đỡ học sinh thành công.",
    email: "janesmith2@example.com",
    phone: "0905222538",
    cardPhoto:
      "https://th.bing.com/th/id/OIP.T242IUQAYZJ3ZQibMAu-3AHaHa?rs=1&pid=ImgDetMain",
  },
  {
    id: 11,
    fullName: "Jane Smith",
    major: "Khoa học",
    description:
      "Giáo viên toán có kinh nghiệm với niềm đam mê dạy và giúp đỡ học sinh thành công.",
    email: "janesmith3@example.com",
    phone: "0905222539",
    cardPhoto:
      "https://th.bing.com/th/id/OIP.T242IUQAYZJ3ZQibMAu-3AHaHa?rs=1&pid=ImgDetMain",
  },
  {
    id: 12,
    fullName: "Jane Smith",
    major: "Khoa học",
    description:
      "Giáo viên toán có kinh nghiệm với niềm đam mê dạy và giúp đỡ học sinh thành công.",
    email: "janesmith4@example.com",
    phone: "0905222540",
    cardPhoto:
      "https://th.bing.com/th/id/OIP.T242IUQAYZJ3ZQibMAu-3AHaHa?rs=1&pid=ImgDetMain",
  },
  {
    id: 13,
    fullName: "Jane Smith",
    major: "Khoa học",
    description:
      "Giáo viên toán có kinh nghiệm với niềm đam mê dạy và giúp đỡ học sinh thành công.",
    email: "janesmith5@example.com",
    phone: "0905222541",
    cardPhoto:
      "https://th.bing.com/th/id/OIP.T242IUQAYZJ3ZQibMAu-3AHaHa?rs=1&pid=ImgDetMain",
  },
  {
    id: 14,
    fullName: "Jane Smith",
    major: "Khoa học",
    description:
      "Giáo viên toán có kinh nghiệm với niềm đam mê dạy và giúp đỡ học sinh thành công.",
    email: "janesmith6@example.com",
    phone: "0905222542",
    cardPhoto:
      "https://th.bing.com/th/id/OIP.T242IUQAYZJ3ZQibMAu-3AHaHa?rs=1&pid=ImgDetMain",
  },
  {
    id: 15,
    fullName: "Jane Smith",
    major: "Khoa học",
    description:
      "Giáo viên toán có kinh nghiệm với niềm đam mê dạy và giúp đỡ học sinh thành công.",
    email: "janesmith7@example.com",
    phone: "0905222543",
    cardPhoto:
      "https://th.bing.com/th/id/OIP.T242IUQAYZJ3ZQibMAu-3AHaHa?rs=1&pid=ImgDetMain",
  },
];

// Function to save courses to localStorage
const saveCoursesToLocalStorage = () => {
  localStorage.setItem("courses", JSON.stringify(courses));
};

// Function to save teachers to localStorage
const saveTeachersToLocalStorage = () => {
  localStorage.setItem("teachers", JSON.stringify(teachers));
};

// Function to add a new course
export const addCourse = (newCourse) => {
  courses = [...courses, newCourse];
  saveCoursesToLocalStorage();
};

// Function to edit an existing course
export const editCourse = (editedCourse) => {
  courses = courses.map((course) =>
    course.id === editedCourse.id ? editedCourse : course
  );
  saveCoursesToLocalStorage();
};

// Function to delete a course
export const deleteCourse = (courseId) => {
  courses = courses.filter((course) => course.id !== courseId);
  saveCoursesToLocalStorage();
};

// Function to add a new teacher
export const addTeacher = (newTeacher) => {
  teachers = [...teachers, newTeacher];
  saveTeachersToLocalStorage();
};

// Function to edit an existing teacher
export const editTeacher = (editedTeacher) => {
  teachers = teachers.map((teacher) =>
    teacher.id === editedTeacher.id ? editedTeacher : teacher
  );
  saveTeachersToLocalStorage();
};

// Function to delete a teacher
export const deleteTeacher = (teacherId) => {
  teachers = teachers.filter((teacher) => teacher.id !== teacherId);
  saveTeachersToLocalStorage();
};

export { courses, teachers, users };
