# 🎓 Software Project Management Study Hub & Exam Prep (SPM Quiz)
### Nền tảng ôn thi & Luyện trắc nghiệm - Tự luận Quản lý Dự án Phần mềm

<p align="center">
  <img src="https://img.shields.io/badge/Platform-Web%20Offline%20%7C%20GitHub%20Pages-blue?style=for-the-badge&logo=html5" alt="Platform" />
  <img src="https://img.shields.io/badge/Questions-90%20MCQs%20%2B%2016%20Essays-emerald?style=for-the-badge" alt="Questions" />
  <img src="https://img.shields.io/badge/Curriculum-Thang%20Long%20University-indigo?style=for-the-badge" alt="TLU" />
  <img src="https://img.shields.io/badge/License-MIT-amber?style=for-the-badge" alt="License" />
</p>

---

## 🌐 Trải nghiệm Trực tiếp (Live Demo)
👉 **Truy cập ứng dụng trực tuyến:**  
[https://nguyenvantruong123.github.io/software-project-management-quiz/](https://nguyenvantruong123.github.io/software-project-management-quiz/)

*(Ứng dụng tương thích hoàn hảo trên cả máy tính để bàn, máy tính bảng và điện thoại di động).*

---

## 📌 Giới Thiệu Dự Án (Overview)

**Software Project Management Study Hub** là nền tảng ôn tập tương tác toàn diện dành cho môn học **Quản lý Dự án Phần mềm (Software Project Management - SPM)** tại **Đại học Thăng Long (TLU)** theo giáo trình và bài giảng của **GV. Vũ Duy Khương**.

Toàn bộ hệ thống được xây dựng với mục tiêu:
1. **Bám sát 100% từng gạch đầu dòng slide bài giảng**: Trích xuất nguyên văn khái niệm, định nghĩa và từ khóa trọng tâm để phục vụ thi trắc nghiệm và tự luận (không suy diễn hay biến tấu câu chữ).
2. **Khảo thí đa dạng**: 90 câu trắc nghiệm bao quát từng ngóc ngách slide cùng 16 bài tập tình huống lớn cuối mỗi chương có barem chấm điểm chi tiết.
3. **Chạy hoàn toàn Offline & Zero Dependency**: Không cần cài đặt `Node.js`, không cần chạy server ảo, chỉ cần mở file `index.html` trực tiếp trên trình duyệt.

---

## ✨ Tính Năng Nổi Bật (Key Features)

### 1. 🎯 Chế độ Luyện Trắc Nghiệm Thông Minh (90 câu)
- **Chấm điểm tức thì (Instant Feedback)**: Hiển thị ngay Đúng/Sai khi chọn, làm nổi bật phương án chuẩn và phương án thí sinh chọn.
- **Giải thích & Mẹo nhớ (Tips & Explanations)**: Mỗi câu hỏi đều đi kèm trích dẫn nguyên văn gạch đầu dòng slide và mẹo nhớ nhanh để nhận diện bẫy đề thi.
- **Bộ lọc đa chiều**: Lọc theo từng chương (Chương 1: 28 câu, Chương 2: 21 câu, Chương 3: 18 câu, Chương 4: 23 câu) hoặc tìm kiếm theo từ khóa thực tế (`RE`, `LOC`, `FP`, `WBS`, `COCOMO`, `Brooks`...).
- **Chế độ Thi Thử (Mock Exam)**:
  - Chọn ngẫu nhiên 20 câu từ kho dữ liệu.
  - Đồng hồ đếm ngược 20 phút.
  - Chấm điểm chuẩn thang 10 kèm phân tích kết quả chi tiết từng câu sau khi nộp bài.

### 2. ✍️ Thư Viện Tự Luận & Barem Chấm Điểm Slide (16 bài tập)
- Bao gồm 100% các bài tập tình huống và câu hỏi mở ở cuối mỗi chương slide.
- Cấu trúc hiển thị dạng Accordion chuẩn mực:
  - **Đề bài & Tình huống thực tế**.
  - **Dàn ý barem chấm điểm**: Từng tiêu chí tính điểm theo chuẩn giảng viên.
  - **Lời giải mẫu chi tiết**: Trình bày theo văn phong kỹ sư PM chuyên nghiệp.
  - **Từ khóa ăn điểm & Góc nhìn Quản trị (PM Insight)**.

### 3. 🗂 Flashcard Ghi Nhớ Nhanh 3D (90 thẻ)
- Mô phỏng thẻ lật không gian 3D tương tác cao.
- Mặt trước: Câu hỏi kiểm tra kiến thức cốt lõi.
- Mặt sau: Đáp án chính xác, trích dẫn slide và mẹo ghi nhớ.
- **Hỗ trợ phím tắt**: Bấm `Space` để lật thẻ, phím `←` / `→` để chuyển đổi câu hỏi.

### 4. 📐 Bộ Công Thức & Công Cụ Tính Toán Nhanh (Interactive Calculators)
- **Tool 1: Tính Mức độ Phơi nhiễm Rủi ro (Risk Exposure - $RE$)**:
  $$\text{RE} = P \times \text{Loss}$$
  Tự động phân nhóm rủi ro (Rất cao, Cao, Vừa, Thấp) theo ma trận rủi ro $3 \times 3$.
- **Tool 2: Tính Năng Suất ($LOC/PM$) & Mật Độ Lỗi ($Defect\ Density$)**:
  $$\text{Productivity} = \frac{\text{LOC}}{\text{Effort (Person-Months)}}, \quad \text{Defect Density} = \frac{\text{Số lỗi}}{\text{KLOC}}$$
- **Tool 3: Ước lượng Chi phí & Công sức Basic COCOMO**:
  $$\text{Effort} = a \times (\text{KLOC})^b, \quad \text{Tdev} = c \times (\text{Effort})^d$$
  Tự động tính cho cả 3 chế độ dự án: Organic, Semi-detached, Embedded.
- **Bảng so sánh cốt lõi**: Phân biệt *Risk vs Issue*, *LOC vs FP*, *4 Chiến lược xử lý rủi ro*.

---

## 📚 Ma Trận Nội Dung & Khối Lượng Kiến Thức

```
├── CHƯƠNG 1: GIỚI THIỆU VỀ QUẢN LÝ DỰ ÁN PHẦN MỀM (28 MCQs | 4 Tự luận)
│   ├── Khái niệm Dự án, Đặc thù phần mềm (Vô hình, Thay đổi, Con người, Rủi ro)
│   ├── 4P của Pressman (People, Product, Process, Project)
│   ├── Tam giác quản lý dự án (Thời gian - Chi phí - Chất lượng)
│   ├── 4 Nhiệm vụ PM (Kiểm soát, Chỉ đạo, Tạo động lực, Tổ chức)
│   ├── Kỹ thuật WBS (Quy tắc 100%, 3-6 mức), Biểu đồ Gantt, W5HH
│
├── CHƯƠNG 2: QUY TRÌNH PHẦN MỀM VÀ CÁC SỐ LIỆU ĐO LƯỜNG (21 MCQs | 4 Tự luận)
│   ├── Tháp giá trị: Measurement → Metric → Indicator
│   ├── 4 Đặc tính của một số liệu tốt
│   ├── Phân biệt Process metrics vs Project metrics
│   ├── Đo lường kích thước: LOC vs Function Points (FP)
│   ├── Năng suất (Productivity), Mật độ lỗi (Defect Density), Chất lượng
│   ├── Biểu đồ kiểm soát thống kê SPC (UCL, LCL, Mean)
│
├── CHƯƠNG 3: LẬP KẾ HOẠCH DỰ ÁN PHẦN MỀM (18 MCQs | 4 Tự luận)
│   ├── Vì sao phải lập kế hoạch? (Phần mềm phức tạp, Nhiều rủi ro, Nguồn lực hạn chế)
│   ├── Xác định phạm vi (Scope) & Kiểm soát phình phạm vi (Scope creep)
│   ├── 3 Nguồn lực dự án theo Pressman (Con người, Thành phần tái sử dụng, Môi trường)
│   ├── Mô hình ước lượng Basic COCOMO (Organic, Semi-detached, Embedded)
│   ├── Định luật Brooks ("Thêm người vào dự án muộn chỉ làm nó muộn hơn")
│
└── CHƯƠNG 4: QUẢN LÝ VÀ PHÂN TÍCH RỦI RO (23 MCQs | 4 Tự luận)
    ├── Khái niệm Rủi ro (Chưa xảy ra) vs Sự cố (Đã xảy ra)
    ├── Công thức Risk Exposure: RE = P x Loss
    ├── 3 Nhóm rủi ro (Project, Technical, Business risks)
    ├── 4 Chiến lược xử lý rủi ro (Tránh, Giảm thiểu, Chuyển giao, Chấp nhận)
    └── Ma trận đánh giá rủi ro (Risk Matrix 3x3) & Sổ theo dõi Risk Register
```

---

## 📁 Cấu Trúc Mã Nguồn (Directory Structure)

```text
├── index.html                                  # Ứng dụng web Single-Page Application (SPA)
├── quiz_data.js                               # Cơ sở dữ liệu 90 MCQs & 16 Essays độc lập
├── .gitignore                                 # Loại bỏ file rác hệ điều hành và IDE
├── README.md                                  # Tài liệu hướng dẫn dự án chi tiết
├── Ngan_Hang_Trac_Nghiem_Va_Tu_Luan.md        # Văn bản tổng hợp 90 câu trắc nghiệm & 16 bài tập
├── De_Thi_Thu_Chuan_Format.md                 # Đề thi thử hoàn chỉnh (TN 6.0đ + TL 4.0đ)
├── Chuong_1_Gioi_Thieu_Ve_QLDA.md             # Tóm tắt lý thuyết chi tiết Chương 1
├── Chuong_2_Quy_Trinh_Phan_Mem_Va_So_Lieu.md  # Tóm tắt lý thuyết chi tiết Chương 2
├── Chuong_3_Lap_Ke_Hoach_Du_An.md             # Tóm tắt lý thuyết chi tiết Chương 3
├── Chuong_4_Quan_Ly_Va_Phan_Tich_Rui_Ro.md    # Tóm tắt lý thuyết chi tiết Chương 4
└── slide phat trien du an/                    # Thư mục chứa 4 slide bài giảng gốc (PDF)
```

---

## 🛠 Công Nghệ Sử Dụng (Tech Stack)

- **Frontend**: Pure HTML5, Semantic Elements.
- **Styling**: [Tailwind CSS CDN](https://tailwindcss.com/) (giao diện hiện đại, tối ưu responsive trên mọi kích thước màn hình).
- **Icons**: [FontAwesome 6.4](https://fontawesome.com/).
- **Fonts**: [Google Fonts (Inter)](https://fonts.google.com/specimen/Inter).
- **Logic & Data**: Vanilla JavaScript (ES6+), cấu trúc dữ liệu JSON tối ưu hóa tốc độ tải trang dưới 0.2 giây.

---

## 💻 Hướng Dẫn Cài Đặt & Sử Dụng (Getting Started)

### Cách 1: Chạy trực tiếp tại máy (Offline)
1. Clone repository về máy:
   ```bash
   git clone https://github.com/NguyenVanTruong123/software-project-management-quiz.git
   ```
2. Nhấp đúp chuột vào file `index.html` (hoặc mở bằng bất kỳ trình duyệt nào: Chrome, Edge, Safari, Firefox). Không cần cài đặt bất kỳ công cụ lập trình nào khác.

### Cách 2: Triển khai lên GitHub Pages cá nhân
1. Fork hoặc clone repo này về GitHub của bạn.
2. Vào **Settings** $\rightarrow$ **Pages**.
3. Tại mục **Branch**, chọn `main` và thư mục `/ (root)` rồi nhấn **Save**.
4. Đường link truy cập sẽ tự động khởi tạo sau 1 phút.

---

## 👨‍💻 Tác Giả & Đóng Góp (Author & Credits)

- **Tác giả phát triển**: **Nguyễn Văn Trường**
- **GitHub**: [@NguyenVanTruong123](https://github.com/NguyenVanTruong123)
- **Tài liệu tham khảo**: Bài giảng môn Quản lý Dự án Phần mềm - Giảng viên **Vũ Duy Khương** (Đại học Thăng Long).

---

<p align="center">
  <b>⭐ Đừng quên nhấn Star nếu kho tài liệu này hữu ích cho bạn trong kỳ thi! ⭐</b>
</p>
