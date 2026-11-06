# CÁC CÂU HỎI, KHÁI NIỆM CẦN HỌC
## CHƯƠNG 2: QUY TRÌNH PHẦN MỀM VÀ CÁC SỐ LIỆU DỰ ÁN

---

### 1. VÌ SAO CẦN ĐO LƯỜNG TRONG PHẦN MỀM?
• Không đo → không kiểm soát
• Không kiểm soát → không cải tiến
• Phần mềm mang tính vô hình

---

### 2. ĐO LƯỜNG TRONG KỸ NGHỆ PHẦN MỀM
• **Measurement** ==> Phép đo thô (raw data)
• **Metrics** ==> Đại lượng được tính từ measurement
• **Indicators** ==> Chỉ báo giúp ra quyết định quản lý

**Ví dụ**:
• Measurement: số lỗi được phát hiện = 50
• Metric: Defect Density = 50 lỗi / 10 KLOC = 5 lỗi/KLOC
• Indicator: Chất lượng mã nguồn chưa đạt, cần cải tiến quy trình kiểm thử
==> Measurement không có ý nghĩa nếu không chuyển thành Metric và Indicator.

---

### 3. MEASUREMENT – METRICS – INDICATOR
• Measurement: hoạt động đo
• Metrics: số liệu định lượng
• Indicator: chỉ dẫn ra quyết định
==> Vì sao các dự án phần mềm khó đo lường hơn các ngành kỹ thuật truyền thống? (Do phần mềm mang tính vô hình, yêu cầu thay đổi liên tục, phụ thuộc con người).

---

### 4. ĐẶC ĐIỂM CỦA SỐ LIỆU TỐT (PRESSMAN)
• Đơn giản
• Có ý nghĩa
• Thu thập được
• Có thể hành động

---

### 5. PHÂN LOẠI SỐ LIỆU
• Số liệu quy trình
• Số liệu dự án
• Số liệu sản phẩm

| Loại | Mục tiêu | Ví dụ |
| :--- | :--- | :--- |
| **Process Metrics** | Cải tiến quy trình | Defect removal efficiency |
| **Project Metrics** | Quản lý dự án | Cost variance, schedule variance |

---

### 6. SỐ LIỆU QUY TRÌNH (PROCESS METRICS)
• Thời gian thực hiện
• Hiệu suất
• Tỷ lệ lỗi theo giai đoạn

**Mục tiêu số liệu quy trình**:
• Cải tiến quy trình
• So sánh giữa các dự án

---

### 7. SỐ LIỆU DỰ ÁN (PROJECT METRICS)
• Tiến độ
• Chi phí
• Năng suất

**Ví dụ số liệu dự án**:
• LOC / tháng
• Function Point / người-tháng

---

### 8. ĐO KÍCH THƯỚC PHẦN MỀM
• LOC (Lines of Code)
• Function Point (FP)

**Ưu & nhược điểm LOC**:
• Dễ đo
• Phụ thuộc ngôn ngữ

**Function Point**:
• Đo theo chức năng
• Độc lập công nghệ

**Đo năng suất & chi phí**:
• FP / Person-month
• LOC / Person-month

**So sánh LOC vs Function Point**:
| Tiêu chí | LOC | FP |
| :--- | :--- | :--- |
| Phụ thuộc ngôn ngữ | Có | Không |
| Dùng sớm | Khó | Dễ |
| So sánh dự án | Kém | Tốt |
==> FP phù hợp hơn cho quản lý dự án

---

### 9. CÁC SỐ LIỆU CHO CHẤT LƯỢNG PHẦN MỀM
**Chất lượng phần mềm là gì?**
• Độ tin cậy
• Dễ bảo trì
• Dễ sử dụng

**Số liệu chất lượng**:
• Số lỗi
• Mật độ lỗi
• Thời gian sửa lỗi

**Defect Density**:
• Lỗi / KLOC
• Lỗi / FP

---

### 10. QUẢN LÝ BIẾN ĐỔI – KIỂM SOÁT QUY TRÌNH DỰA TRÊN THỐNG KÊ (SPC)
**Biến đổi trong dự án phần mềm**:
• Yêu cầu
• Nhân lực
• Công nghệ

**Statistical Process Control (SPC)**:
• Dữ liệu lịch sử
• Xu hướng
• Ngưỡng kiểm soát

**Control Chart (Khái niệm)**:
• Upper Control Limit (UCL)
• Lower Control Limit (LCL)

---

### 11. BÀI TẬP THỰC HÀNH CHƯƠNG 2 (THEO SLIDE)

#### Bài tập 1 – Productivity Metric:
• Đề bài: Dự án viết 8,000 LOC, tổng effort: 10 person-month.
• Lời giải:
  Productivity = 8000 / 10 = 800 LOC / person-month
• Nhận xét:
  • Mức trung bình – khá
  • Không nên so sánh giữa các ngôn ngữ khác nhau
  • Chỉ so sánh trong cùng tổ chức

#### Bài tập 2 – LOC & Defect Density:
• Đề bài: Một dự án có tổng LOC: 12,000; số lỗi phát hiện trong kiểm thử: 60.
• Lời giải:
  1. Defect Density = 60 / 12 = 5 lỗi / KLOC
  2. Đánh giá:
     • 5 lỗi/KLOC → mức trung bình
     • Với hệ thống quan trọng: chưa đạt
     • Cần: Tăng kiểm thử, Rà soát quy trình phát triển
  ==> Defect density là chỉ báo chất lượng, không phải chỉ để “báo cáo”.

#### Bài tập 3 – Control Chart (SPC):
• Đề bài: Dự án theo dõi số lỗi mỗi tuần: Tuần 1–3: ổn định; Tuần 4: tăng đột biến.
• Lời giải:
  1. Ý nghĩa:
     • Quy trình có dấu hiệu mất kiểm soát
     • Xuất hiện biến đổi đặc biệt (special cause)
  2. Hành động:
     • Phân tích nguyên nhân
     • Không vội sửa code
     • Sửa quy trình, không sửa triệu chứng

#### Bài tập 4 – Case Study:
• Đề bài: Dự án web: 15,000 LOC, 12 person-month, 90 lỗi phát hiện, deadline trễ 2 tuần.
• Yêu cầu & Lời giải:
  1. Metric: Productivity = 15,000 / 12 = 1,250 LOC/PM; Defect Density = 90 / 15 = 6 lỗi/KLOC.
  2. Đánh giá: Năng suất cao nhưng mật độ lỗi cao và trễ hạn -> vội vã code làm nghẽn khâu test.
  3. Đề xuất: Đưa kiểm thử vào sớm, bắt buộc code review, không đo năng suất chỉ bằng LOC.
