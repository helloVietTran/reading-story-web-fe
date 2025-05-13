## 📌Hướng Dẫn Cài Đặt và Chạy Dự Án

Để clone dự án từ GitHub về máy tính của bạn, làm theo các bước sau:

1. Mở terminal trong Visual Studio Code
   ```bash
   git clone https://github.com/helloVietTran/reading-story-web-fe
2. Di chuyển tới thư mục dự án
   ```bash
   cd reading-story-web-fe

3. chạy lệnh sau trong terminal visual studio code ở thư mục dự án 
     ```bash
     npm install
6. Để chạy dự án, chạy tiếp lệnh sau
     ```bash
     npm run dev
     ```
### 🎉 Chúc mừng! Bạn đã chạy dự án thành công 

# 📚 Về dự án - Web đọc truyện - VStory

## 🚀 Tính năng chính
Frontend:
- Giao diện người dùng trực quan, responsive
- Đọc truyện
- Dark - Light theme
- Có thể lọc truyện theo nhiều tiêu chí
- Xây dựng chức năng mua vật phẩm để giữ chân người dùng
- Chức năng bình luận và thả cảm xúc bình luận
Backend:

- Cung cấp API quản lý truyện, quản lý chapter, quản lý người dùng, ...
- Xây dựng tính năng tính toán level chính xác bằng Redis
- Cron một số công việc: đồng bộ dữ liệu, đánh giá truyện hot
- Caching các dữ liệu bảng xếp hạng: top truyện được đọc nhiều nhất
- Phân quyền theo vai trò
- Xác thực bằng JWT, refresh token
  
## 🛠️ Công nghệ nổi bật
     React.js, Tailwind CSS v4, Redux Toolkit, React Query, zod, react-hook-form

## 🎬 Demo 

<table>
  <tr>
    <td><img src="./public/demo/login.png" width="500"/></td>
    <td><img src="./public/demo/home.png" width="500"/></td>
  </tr>
  <tr>
    <td><img src="./public/demo/modal.png" width="500"/></td>
    <td><img src="./public/demo/author.png" width="500"/></td>
  </tr>
  <tr>
    <td><img src="./public/demo/author-detail.png" width="500"/></td>
    <td><img src="./public/demo/user-detail.png" width="500"/></td>
  </tr>
  <tr>
    <td><img src="./public/demo/book.png" width="500"/></td>
    <td><img src="./public/demo/chat app.png" width="500"/></td>
  </tr>
</table>
    
## 👤 Thông tin tài khoản test 
📌 Admin: tài khoản: admin123@gmail.com | mật khẩu: adminweb123
## 📌 Hướng phát triển tương lai
- Phát triển UI cho quản trị viên
- Tối ưu truy vấn hơn
- Phát triển thêm chức năng bang hội
## 📄 License
- Hoàn toàn miễn phí
