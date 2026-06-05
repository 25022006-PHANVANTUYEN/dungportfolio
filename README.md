# Portfolio - Phan Văn Tuyến

Portfolio Kỹ thuật số cho Phan Văn Tuyến, sinh viên ngành Điện tử Viễn thông - Đại học Quốc gia Hà Nội.

## 📁 Cấu trúc tệp

```
Portfolio/
├── index.html           # Trang chủ
├── about.html          # Trang giới thiệu bản thân
├── projects.html       # Trang các bài tập & dự án (6 bài)
├── summary.html        # Trang tóm tắt
├── styles.css          # Tệp CSS chính (Dark mode/Light mode)
├── script.js           # Tệp JavaScript cho tương tác
├── tải xuống.jpg       # Ảnh avatar
└── README.md           # Tệp này
```

## 🎨 Các tính năng

✅ **Giao diện hiện đại & trang trọng**
- Phông chữ Segoe UI, Roboto (đơn giản nhưng sang trọng)
- Bố cục responsive, hỗ trợ mọi kích thước màn hình

✅ **Dark Mode / Light Mode**
- Chuyển đổi chủ đề tối và sáng
- Lưu trữ tùy chọn trong localStorage

✅ **4 Trang chính**
- **Home (index.html)**: Trang giới thiệu chung
- **About Me (about.html)**: Giới thiệu bản thân, kỹ năng, thông tin cá nhân
- **My Projects (projects.html)**: 6 bài tập trong học phần Nhập môn Công nghệ số
- **Summary (summary.html)**: Tóm tắt học tập và hướng phát triển

✅ **Tích hợp Avatar**
- Ảnh của bạn (tải xuống.jpg) được sử dụng ở trang Home và About Me

✅ **Thiết kế chuyên nghiệp**
- Màu sắc chủ đề: Xanh dương (00d4ff) và Tím (6c5ce7)
- Hiệu ứng hover, shadows, transitions
- Navigation sticky ở đầu trang

## 🚀 Cách sử dụng

### 1. **Mở các trang HTML**
   - Nhấp đôi vào bất kỳ file `.html` để mở trong trình duyệt
   - Hoặc chạy trên localhost (nếu sử dụng server)

### 2. **Dark Mode / Light Mode**
   - Nhấn nút 🌙/☀️ ở góc trên phải
   - Hoặc nhấn **Alt + D** để bật/tắt Dark Mode

### 3. **Chuyển đổi giữa các trang**
   - Sử dụng Navigation Bar để di chuyển giữa các trang
   - Hoặc click vào các nút CTA (Call To Action)

## ✏️ Cách chỉnh sửa

### **Chỉnh sửa nội dung**

1. **Trang chủ (index.html)**
   - Mở file bằng VS Code hoặc text editor
   - Chỉnh sửa phần `<hero-content>` để thay đổi tiêu đề, mô tả
   - Thay đổi ảnh trong `<hero-image>` nếu cần

2. **About Me (about.html)**
   - Cập nhật thông tin cá nhân trong `.info-card`
   - Chỉnh sửa các section: Giới thiệu, Mục tiêu, Kỹ năng
   - Thêm/xóa các mục theo nhu cầu

3. **My Projects (projects.html)**
   - Chỉnh sửa nội dung các bài tập (01-06)
   - Thay đổi mô tả, mục tiêu, chi tiết
   - Thêm hoặc xóa tags

4. **Summary (summary.html)**
   - Cập nhật các phần: Tóm tắt, Kết quả học tập, Hướng phát triển
   - Thêm/xóa các mục khác tùy ý

### **Chỉnh sửa giao diện (CSS)**

- Mở **styles.css**
- Chỉnh sửa các biến màu trong `:root`:
  ```css
  --primary-color: #00d4ff;      /* Màu xanh dương chính */
  --secondary-color: #6c5ce7;    /* Màu tím phụ */
  ```
- Điều chỉnh font size, spacing, colors tùy ý
- Tất cả thay đổi sẽ tự động áp dụng cho Dark Mode & Light Mode

### **Chỉnh sửa JavaScript (script.js)**

- Mở **script.js** để chỉnh sửa tương tác
- Dark Mode logic ở phần đầu
- Thêm các tính năng mới theo nhu cầu

### **Thay đổi ảnh Avatar**

- Thay thế file **tải xuống.jpg** bằng ảnh của bạn
- Hoặc đổi tên file trong HTML:
  ```html
  <img src="tên-file-mới.jpg" alt="Phan Văn Tuyến">
  ```

## 🎯 Các bài tập trong My Projects

Theo yêu cầu Portfolio, My Projects bao gồm 6 bài tập:

1. **Thao tác cơ bản với tệp tin và thư mục**
2. **Tìm kiếm và đánh giá thông tin học thuật**
3. **Sử dụng Prompt hiệu quả cho các tác vụ học tập**
4. **Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm**
5. **Sử dụng AI tạo sinh đề hỗ trợ sáng tạo nội dung**
6. **Sử dụng AI một cách có đạo đức và trách nhiệm**

Bạn có thể chỉnh sửa nội dung từng bài tập trong **projects.html**.

## 🎨 Tùy chỉnh màu sắc

Để thay đổi bảng màu, sửa các biến trong **styles.css**:

```css
:root {
    --primary-color: #00d4ff;        /* Màu chính */
    --primary-dark: #0099cc;         /* Màu chính tối hơn */
    --secondary-color: #6c5ce7;      /* Màu phụ */
    --secondary-dark: #5f3dc4;       /* Màu phụ tối hơn */
}
```

## 📱 Responsive Design

Portfolio hoạt động tốt trên:
- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1199px)
- ✅ Mobile (dưới 768px)

## 🔧 Các công cụ được sử dụng

- **HTML5**: Cấu trúc trang
- **CSS3**: Styling, animations, Dark Mode
- **JavaScript**: Interactivity, Dark Mode toggle, smooth scroll
- **Font**: Segoe UI, Roboto (web-safe)

## 💾 Lưu trữ / Deploy

### **Cách chạy locally**
```bash
# Đơn giản nhất: Mở file index.html trực tiếp trên trình duyệt
# Hoặc sử dụng Live Server (VS Code Extension)
```

### **Cách deploy trên GitHub Pages**
1. Tạo repository: `username.github.io`
2. Push tất cả các file vào repository
3. Truy cập: `https://username.github.io`

### **Cách deploy trên server khác**
1. Upload tất cả file sang hosting
2. Truy cập URL tương ứng

## 📝 Ghi chú

- Mọi file `.html` là độc lập nhưng liên kết với nhau qua Navigation
- File `styles.css` và `script.js` được chia sẻ cho tất cả các trang
- Ảnh avatar cần phải nằm trong cùng thư mục với các file HTML

## 🚀 Các cải tiến tương lai (tuỳ ý)

- Thêm blog hoặc news section
- Thêm contact form
- Thêm animation trang
- Thêm testimonials section
- Thêm download CV button
- Thêm social media links
- Thêm project showcase gallery

## ❓ Câu hỏi thường gặp

**Q: Làm sao để thêm bài tập mới?**
A: Chỉnh sửa `projects.html`, sao chép một `project-card` và cập nhật nội dung.

**Q: Làm sao để thay đổi font chữ?**
A: Mở `styles.css`, tìm `font-family` và thay đổi, ví dụ:
```css
body {
    font-family: 'Arial', sans-serif;
}
```

**Q: Làm sao để thêm social media links?**
A: Tìm phần `.footer-links` trong HTML và thêm links mới.

**Q: Dark Mode có lưu trữ không?**
A: Có! Tùy chọn được lưu trong localStorage của trình duyệt.

## 📧 Liên hệ

- Email: 25022006@vnu.edu.vn
- Trường: Đại học Quốc gia Hà Nội
- Ngành: Khoa học Máy tính (Điện tử Viễn thông)

---

**Tạo: 2025**  
**Cập nhật: 6/6/2025**

Chúc bạn thành công với Portfolio! 🎉
