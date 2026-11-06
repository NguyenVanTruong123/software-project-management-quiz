# BÀI GIẢNG CHUẨN SLIDE: CHƯƠNG 2 - QUY TRÌNH PHẦN MỀM VÀ CÁC SỐ LIỆU DỰ ÁN
> Trích xuất chính xác 100% nguyên bản từng slide theo bài giảng môn Quản lý Dự án Phần mềm - ĐH Thăng Long.

### [Slide 1]
PHÁT TRIỂN DỰ ÁN
Hà Nội, ngày 21 tháng 01 năm 2026
Giảng viên : Vũ Duy Khương

---

### [Slide 2]
2.1. Các phương pháp đo, số liệu và các chỉ dẫn
2.2. Các số liệu về quy trình và dự án
2.3. Các phương pháp đánh giá (measurement) phần mềm
2.4. Đánh giá, điều phối giữa các cách tiếp cận khác nhau
2.5 Các số liệu cho chất lượng phần mềm.
2.6 Tích hợp số liệu trong quy trình phần mềm
2.7 Quản lý các biến đổi: kiểm soát quy trình dựa trên thống kê.
CHƯƠNG 2. QUY TRÌNH PHẦN MỀM VÀ CÁC SỐ LIỆU DỰ ÁN

---

### [Slide 3]
VÌ SAO CẦN ĐO LƯỜNG TRONG PHẦN MỀM?
• Không đo → không kiểm soát
• Không kiểm soát → không cải tiến
• Phần mềm mang tính vô hình

---

### [Slide 4]
ĐO LƯỜNG TRONG KỸ NGHỆ PHẦN MỀM
• Measurement
==> Phép đo thô (raw data)
• Metrics
==> Đại lượng được tính từ measurement
• Indicators
==> Chỉ báo giúp ra quyết định quản lý
Ví dụ:
• Measurement: số lỗi được phát hiện = 50
• Metric: Defect Density = 50 lỗi / 10 KLOC = 5 lỗi/KLOC
• Indicator: Chất lượng mã nguồn chưa đạt, cần cải tiến quy trình kiểm thử
==> Measurement không có ý nghĩa nếu không chuyển thành Metric và
Indicator.

---

### [Slide 5]
2.1. CÁC PHƯƠNG PHÁP ĐO, SỐ LIỆU VÀ CÁC
CHỈ DẪN

---

### [Slide 6]
MEASUREMENT – METRICS – INDICATOR
• Measurement: hoạt động đo
• Metrics: số liệu định lượng
• Indicator: chỉ dẫn ra quyết định
==> Vì sao các dự án phần mềm khó đo lường hơn các ngành kỹ thuật
truyền thống?

---

### [Slide 7]
ĐẶC ĐIỂM CỦA SỐ LIỆU TỐT (PRESSMAN)
• Đơn giản
• Có ý nghĩa
• Thu thập được
• Có thể hành động

---

### [Slide 8]
PHÂN LOẠI SỐ LIỆU
• Số liệu quy trình
• Số liệu dự án
• Số liệu sản phẩm

---

### [Slide 9]
THỰC HÀNH
• Thảo luận nhanh (10’)
• Theo bạn: đo quá nhiều có tốt không?
• Phân biệt Process Metrics và Project Metrics. Cho ví dụ mỗi loại.
Loại
Mục tiêu
Ví dụ
Process Metrics
Cải tiến quy trình
Defect removal efficiency
Project Metrics
Quản lý dự án
Cost variance, schedule
variance

---

### [Slide 10]
2.2. CÁC SỐ LIỆU VỀ QUY TRÌNH VÀ DỰ ÁN

---

### [Slide 11]
SỐ LIỆU QUY TRÌNH (PROCESS METRICS)
• Thời gian thực hiện
• Hiệu suất
• Tỷ lệ lỗi theo giai đoạn- Thực hành

---

### [Slide 12]
MỤC TIÊU SỐ LIỆU QUY TRÌNH
• Cải tiến quy trình
• So sánh giữa các dự án

---

### [Slide 13]
SỐ LIỆU DỰ ÁN (PROJECT METRICS)
• Tiến độ
• Chi phí
• Năng suất

---

### [Slide 14]
VÍ DỤ SỐ LIỆU DỰ ÁN
• LOC / tháng
• Function Point / người-tháng

---

### [Slide 15]
THỰC HÀNH 1 (15’)
Bài tập – Productivity Metric
Đề bài
• Dự án viết 8,000 LOC
• Tổng effort: 10 person-month
Yêu cầu:
• Tính Productivity
• Nhận xét

---

### [Slide 16]
THỰC HÀNH 1 (15’)
Lời giải
𝑃𝑟𝑜𝑑𝑢𝑐𝑡𝑖𝑣𝑖𝑡𝑦= 8000
= 800 LOC/person−month
Nhận xét:
• Mức trung bình – khá
• Không nên so sánh giữa các ngôn ngữ khác nhau
• Chỉ so sánh trong cùng tổ chức

---

### [Slide 17]
2.3. CÁC PHƯƠNG PHÁP ĐÁNH GIÁ
(MEASUREMENT) PHẦN MỀM

---

### [Slide 18]
ĐO KÍCH THƯỚC PHẦN MỀM
• LOC (Lines of Code)
• Function Point (FP)

---

### [Slide 19]
ƯU & NHƯỢC ĐIỂM LOC
• Dễ đo
• Phụ thuộc ngôn ngữ

---

### [Slide 20]
FUNCTION POINT
• Đo theo chức năng
• Độc lập công nghệ

---

### [Slide 21]
ĐO NĂNG SUẤT & CHI PHÍ
• FP / Person-month
• LOC / Person-month

---

### [Slide 22]
THỰC HÀNH 2 (20’)
Bài tập – LOC vs Function Point
Đề bài
So sánh LOC và FP theo các tiêu chí:
• Ngôn ngữ
• Giai đoạn sử dụng
• Độ ổn định

---

### [Slide 23]
THỰC HÀNH 2 (20’)
Lời giải
==> FP phù hợp hơn cho quản lý dự án
Tiêu chí
LOC
FP
Phụ thuộc ngôn ngữ
Có
Không
Dùng sớm
Khó
Dễ
So sánh dự án
Kém
Tốt

---

### [Slide 24]
2.4. ĐÁNH GIÁ, ĐIỀU PHỐI GIỮA CÁC CÁCH
TIẾP CẬN

---

### [Slide 25]
VÌ SAO CẦN NHIỀU CÁCH ĐO?
• Mỗi cách có hạn chế
• Không có số liệu hoàn hảo

---

### [Slide 26]
KẾT HỢP LOC & FP
• Bổ sung cho nhau
• Phù hợp từng giai đoạn

---

### [Slide 27]
ĐIỀU PHỐI SỐ LIỆU TRONG DỰ ÁN
• Lựa chọn phù hợp mục tiêu

---

### [Slide 28]
2.5. CÁC SỐ LIỆU CHO CHẤT LƯỢNG PHẦN
MỀM

---

### [Slide 29]
CHẤT LƯỢNG PHẦN MỀM LÀ GÌ?
• Độ tin cậy
• Dễ bảo trì
• Dễ sử dụng

---

### [Slide 30]
SỐ LIỆU CHẤT LƯỢNG
• Số lỗi
• Mật độ lỗi
• Thời gian sửa lỗi

---

### [Slide 31]
DEFECT DENSITY
• Lỗi / KLOC
• Lỗi / FP

---

### [Slide 32]
THỰC HÀNH 3 (15’)
Bài tập – LOC & Defect Density
Đề bài: Một dự án phần mềm có:
• Tổng LOC: 12,000
• Số lỗi phát hiện trong kiểm thử: 60
Yêu cầu:
• Tính Defect Density
• Đánh giá chất lượng sơ bộ

---

### [Slide 33]
THỰC HÀNH 3 (15’)
Lời giải :
1. Defect Density
𝐷𝑒𝑓𝑒𝑐𝑡 𝐷𝑒𝑛𝑠𝑖𝑡𝑦= 60
12 = 5 lỗi/KLOC
2. Đánh giá
• 5 lỗi/KLOC → mức trung bình
• Với hệ thống quan trọng: chưa đạt
• Cần:
• Tăng kiểm thử
• Rà soát quy trình phát triển
==> Defect density là chỉ báo chất lượng, không phải chỉ để “báo cáo”.

---

### [Slide 34]
2.6. TÍCH HỢP SỐ LIỆU TRONG QUY TRÌNH
PHẦN MỀM

---

### [Slide 35]
ĐO LƯỜNG TRONG VÒNG ĐỜI PHẦN MỀM
• Phân tích
• Thiết kế
• Lập trình
• Kiểm thử

---

### [Slide 36]
THU THẬP & LƯU TRỮ SỐ LIỆU
• Công cụ
• Quy trình

---

### [Slide 37]
SỬ DỤNG SỐ LIỆU ĐỂ CẢI TIẾN
• Phát hiện điểm yếu
• Ra quyết định

---

### [Slide 38]
2.7. QUẢN LÝ BIẾN ĐỔI – KIỂM SOÁT QUY
TRÌNH DỰA TRÊN THỐNG KÊ

---

### [Slide 39]
BIẾN ĐỔI TRONG DỰ ÁN PHẦN MỀM
• Yêu cầu
• Nhân lực
• Công nghệ

---

### [Slide 40]
STATISTICAL PROCESS CONTROL (SPC)
• Dữ liệu lịch sử
• Xu hướng
• Ngưỡng kiểm soát

---

### [Slide 41]
CONTROL CHART (KHÁI NIỆM)
• Upper Control Limit
• Lower Control Limit

---

### [Slide 42]
THỰC HÀNH 4 (15’)
Bài tập  – Control Chart (SPC)
Đề bài
Một dự án theo dõi số lỗi mỗi tuần:
• Tuần 1–3: ổn định
• Tuần 4: tăng đột biến
Hỏi:
• Điều này có ý nghĩa gì?
• PM nên làm gì?

---

### [Slide 43]
THỰC HÀNH 4 (15’)
Lời giải
1. Ý nghĩa:
• Quy trình có dấu hiệu mất kiểm soát
• Xuất hiện biến đổi đặc biệt (special cause)
2. Hành động:
• Phân tích nguyên nhân
• Không vội sửa code
• Sửa quy trình, không sửa triệu chứng

---

### [Slide 44]
THỰC HÀNH TỔNG HỢP CUỐI BUỔI (60’)

---

### [Slide 45]
BÀI TẬP NHÓM
Bài tập nhóm – Case Study
Đề bài
Một dự án web:
• 15,000 LOC
• 12 person-month
• 90 lỗi phát hiện
• Deadline trễ 2 tuần
Yêu cầu:
1. Tính các metric chính
2. Đánh giá dự án
3. Đề xuất cải tiến

---

### [Slide 46]
TỔNG KẾT
• Đo lường là nền tảng cải tiến quy trình
• Số liệu phải phục vụ quyết định
• Không đo hình thức

---

### [Slide 47]
CÂU HỎI ÔN TẬP
• Vì sao đo lường phần mềm khó?
• LOC hay FP – khi nào dùng?
• SPC giúp gì cho quản lý dự án?

---
