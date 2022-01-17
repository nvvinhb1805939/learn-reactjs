import React from "react";
import CourseList from "./components/CourseList";

function CourseFeature() {
  const courseList = [
    {
      id: 2,
      title: "HTML, CSS từ Zero đến Hero",
      slug: "html-css",
      description:
        "Trong khóa này chúng ta sẽ cùng nhau xây dựng giao diện 2 trang web là The Band & Shopee.",
      image: "courses/2.png",
      content: null,
      video_type: "youtube",
      video: "R6plN3FvzFY",
      priority: 10,
      students_count: 115065,
      old_price: 0,
      price: 0,
      is_pro: false,
      deleted_at: null,
      created_at: "2020-04-10T14:23:13.000000Z",
      updated_at: "2022-01-17T00:34:19.000000Z",
      image_url: "https://cdn.fullstack.edu.vn/f8-production/courses/2.png",
      video_url: "https://www.youtube.com/watch?v=R6plN3FvzFY",
    },
    {
      id: 1,
      title: "JavaScript Cơ Bản",
      slug: "javascript-co-ban",
      description:
        "Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học.",
      image: "courses/1.png",
      content: null,
      video_type: "youtube",
      video: "0SJE9dYdpps",
      priority: 30,
      students_count: 68131,
      old_price: 0,
      price: 0,
      is_pro: false,
      deleted_at: null,
      created_at: "2020-06-10T14:23:13.000000Z",
      updated_at: "2022-01-17T00:38:17.000000Z",
      image_url: "https://cdn.fullstack.edu.vn/f8-production/courses/1.png",
      video_url: "https://www.youtube.com/watch?v=0SJE9dYdpps",
    },
    {
      id: 7,
      title: "Kiến Thức Nhập Môn IT",
      slug: "lessons-for-newbie",
      description:
        "Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa này trước nhé.",
      image: "courses/7.png",
      content: null,
      video_type: "youtube",
      video: "M62l1xA5Eu8",
      priority: 0,
      students_count: 49441,
      old_price: 0,
      price: 0,
      is_pro: false,
      deleted_at: null,
      created_at: "2020-02-10T14:23:13.000000Z",
      updated_at: "2022-01-17T00:01:10.000000Z",
      image_url: "https://cdn.fullstack.edu.vn/f8-production/courses/7.png",
      video_url: "https://www.youtube.com/watch?v=M62l1xA5Eu8",
    },
    {
      id: 3,
      title: "Responsive Với Grid System",
      slug: "responsive-web-design",
      description:
        "Trong khóa này chúng ta sẽ học về cách xây dựng giao diện web responsive với Grid System, tương tự Bootstrap 4.",
      image: "courses/3.png",
      content: null,
      video_type: "youtube",
      video: "uz5LIP85J5Y",
      priority: 20,
      students_count: 18243,
      old_price: 0,
      price: 0,
      is_pro: false,
      deleted_at: null,
      created_at: "2020-05-10T14:23:13.000000Z",
      updated_at: "2022-01-16T16:45:40.000000Z",
      image_url: "https://cdn.fullstack.edu.vn/f8-production/courses/3.png",
      video_url: "https://www.youtube.com/watch?v=uz5LIP85J5Y",
    },
    {
      id: 6,
      title: "Node & ExpressJS",
      slug: "nodejs",
      description:
        "Học Back-end với Node & ExpressJS framework, hiểu các khái niệm khi làm Back-end và xây dựng RESTful API cho trang web.",
      image: "courses/6.png",
      content: null,
      video_type: "youtube",
      video: "z2f7RHgvddc",
      priority: 32,
      students_count: 15993,
      old_price: 0,
      price: 0,
      is_pro: false,
      deleted_at: null,
      created_at: "2020-08-01T14:23:13.000000Z",
      updated_at: "2022-01-17T00:09:20.000000Z",
      image_url: "https://cdn.fullstack.edu.vn/f8-production/courses/6.png",
      video_url: "https://www.youtube.com/watch?v=z2f7RHgvddc",
    },
    {
      id: 13,
      title: "Xây Dựng Website với ReactJS",
      slug: "reactjs",
      description:
        "Khóa học ReactJS từ cơ bản tới nâng cao, kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS. Cuối khóa học này bạn sẽ sở hữu một dự án giống Tiktok.com, bạn có thể tự tin đi xin việc khi nắm chắc các kiến thức được chia sẻ trong khóa học này.",
      image: "courses/13/13.png",
      content: null,
      video_type: "youtube",
      video: "x0fSBAgBrOQ",
      priority: 0,
      students_count: 15275,
      old_price: 0,
      price: 0,
      is_pro: false,
      deleted_at: null,
      created_at: null,
      updated_at: "2022-01-16T23:57:50.000000Z",
      image_url: "https://cdn.fullstack.edu.vn/f8-production/courses/13/13.png",
      video_url: "https://www.youtube.com/watch?v=x0fSBAgBrOQ",
    },
    {
      id: 5,
      title: "HTML, CSS Tips & Tricks",
      slug: "html-css-tutorials",
      description:
        "Tutorials về HTML, CSS, UI, UX sẽ được tổng hợp tại khóa học này, các video có nội dung ngắn gọn, súc tích giúp học viên có thể ứng dụng ngay vào thực tế",
      image: "courses/5.png",
      content: null,
      video_type: "youtube",
      video: "nB6cJh_bb1U",
      priority: 40,
      students_count: 12038,
      old_price: 0,
      price: 0,
      is_pro: false,
      deleted_at: null,
      created_at: "2020-03-10T14:23:13.000000Z",
      updated_at: "2022-01-16T21:50:44.000000Z",
      image_url: "https://cdn.fullstack.edu.vn/f8-production/courses/5.png",
      video_url: "https://www.youtube.com/watch?v=nB6cJh_bb1U",
    },
    {
      id: 12,
      title: "JavaScript Nâng Cao",
      slug: "javascript-nang-cao",
      description:
        "Hiểu sâu hơn về cách Javascript hoạt động, tìm hiểu về IIFE, closure, reference types, this keyword, bind, call, apply, prototype, ...",
      image: "courses/12.png",
      content: null,
      video_type: "youtube",
      video: "MGhw6XliFgo",
      priority: 31,
      students_count: 10591,
      old_price: 0,
      price: 0,
      is_pro: false,
      deleted_at: null,
      created_at: "2021-04-03T14:23:13.000000Z",
      updated_at: "2022-01-17T00:18:15.000000Z",
      image_url: "https://cdn.fullstack.edu.vn/f8-production/courses/12.png",
      video_url: "https://www.youtube.com/watch?v=MGhw6XliFgo",
    },
    {
      id: 4,
      title: 'App "Đừng Chạm Tay Lên Mặt"',
      slug: "tool-canh-bao-so-len-mat",
      description:
        "Xây dựng ứng dụng đưa ra cảnh báo khi người dùng sờ tay lên mặt. Chúng ta sẽ sử dụng thư viện ReactJS & Tensoflow để hoàn thiện ứng dụng này.",
      image: "courses/4/61a9e9e701506.png",
      content: null,
      video_type: "youtube",
      video: "r6GWbQL-qwA",
      priority: 50,
      students_count: 4268,
      old_price: 0,
      price: 0,
      is_pro: false,
      deleted_at: null,
      created_at: "2020-01-10T14:23:13.000000Z",
      updated_at: "2022-01-16T17:32:19.000000Z",
      image_url:
        "https://cdn.fullstack.edu.vn/f8-production/courses/4/61a9e9e701506.png",
      video_url: "https://www.youtube.com/watch?v=r6GWbQL-qwA",
    },
    {
      id: 14,
      title: "Làm việc với Terminal & Ubuntu",
      slug: "windows-terminal-wsl",
      description:
        "Sở hữu một Terminal hiện đại, mạnh mẽ trong tùy biến và học cách làm việc với Ubuntu là một bước quan trọng trên con đường trở thành một Web Developer.",
      image: "courses/14/61a89fb15f2fb.png",
      content: null,
      video_type: "youtube",
      video: "7ppRSaGT1uw",
      priority: 51,
      students_count: 1030,
      old_price: 0,
      price: 0,
      is_pro: false,
      deleted_at: null,
      created_at: "2021-12-01T12:08:12.000000Z",
      updated_at: "2022-01-16T17:00:14.000000Z",
      image_url:
        "https://cdn.fullstack.edu.vn/f8-production/courses/14/61a89fb15f2fb.png",
      video_url: "https://www.youtube.com/watch?v=7ppRSaGT1uw",
    },
  ];
  return <CourseList courseList={courseList} />;
}

export default CourseFeature;
