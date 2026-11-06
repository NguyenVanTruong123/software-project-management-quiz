# CÁC CÂU HỎI, KHÁI NIỆM CẦN HỌC
## CHƯƠNG 3: LẬP KẾ HOẠCH DỰ ÁN PHẦN MỀM

---

### 1. VÌ SAO PHẢI LẬP KẾ HOẠCH DỰ ÁN?
• Phần mềm phức tạp
• Nhiều rủi ro
• Nguồn lực hạn chế

---

### 2. MỤC ĐÍCH LẬP KẾ HOẠCH
• Xác định công việc cần làm
• Dự báo thời gian & chi phí
• Phân bổ nguồn lực

**Theo Pressman, mục đích lập kế hoạch**:
• Xác định phạm vi rõ ràng
• Ước lượng chi phí & thời gian
• Phân bổ nguồn lực
• Nhận diện rủi ro
• Làm cơ sở kiểm soát dự án
==> Điểm nhấn Pressman: A project plan provides a roadmap for the team.

**Nếu không có kế hoạch**:
• Không kiểm soát tiến độ
• Không kiểm soát chi phí
• Không đánh giá được sai lệch

---

### 3. KẾ HOẠCH DỰ ÁN GỒM GÌ?
• Phạm vi
• Ước lượng
• Lịch trình
• Rủi ro

---

### 4. PHẠM VI PHẦN MỀM LÀ GÌ?
• Những gì hệ thống sẽ làm
• Những gì hệ thống không làm

**Xác định phạm vi**:
• Mục tiêu
• Chức năng chính
• Ràng buộc

**Tài liệu phạm vi**:
• Vision
• SRS mức cao

**Phạm vi gồm (Pressman)**:
• Chức năng (Functions)
• Hiệu năng (Performance)
• Ràng buộc (Constraints)
• Giao diện (Interfaces)

**Nếu phạm vi không rõ**:
• Scope creep
• Ước lượng sai
• Mâu thuẫn khách hàng
==> Pressman: The scope must be bounded and clearly understood.

---

### 5. PHÂN LOẠI NGUỒN LỰC (THEO PRESSMAN)
1. **Human Resources (Nhân lực)**
   • PM, Developer, Tester (quan trọng nhất)
2. **Reusable Software Resources (Phần mềm tái sử dụng)**
   • Framework, thư viện, COTS
3. **Environmental Resources (Môi trường)**
   • Server, máy tính, mạng, công cụ

**Vấn đề về nguồn lực**:
• Thiếu người
• Thiếu kỹ năng
• Phân bổ sai

---

### 6. ĐỊNH LƯỢNG DỰ ÁN PHẦN MỀM
**Định lượng là gì?**
• Ước lượng kích thước
• Ước lượng công sức
• Ước lượng chi phí

**Định lượng dựa trên gì?**
• Kinh nghiệm
• Dữ liệu lịch sử
• Mô hình toán học

**Các đại lượng thường dùng**:
• LOC
• Function Point
• Person-month

---

### 7. PHÂN RÃ PHẦN MỀM (DECOMPOSITION)
**Phân rã là gì?**
• Chia nhỏ dự án
• Dễ ước lượng
• Dễ quản lý
==> Pressman: Decomposition reduces uncertainty.

**Hai cách phân rã**:
• **Phân rã theo chức năng**: Module, Feature
• **Phân rã theo công việc**: Phân tích, Thiết kế, Lập trình, Kiểm thử

**Công cụ phân rã phổ biến**: WBS (Work Breakdown Structure).

---

### 8. MÔ HÌNH ƯỚC LƯỢNG KINH NGHIỆM - COCOMO
**Vì sao cần mô hình ước lượng?**
• Giảm phụ thuộc cảm tính
• Có cơ sở khoa học

**COCOMO (Basic COCOMO)**:
Công thức:
Effort = a × (KLOC)^b
Với Organic mode: a = 2.4; b = 1.05.

**So sánh ước lượng trực giác vs mô hình**:
Không nên tin một nguồn duy nhất.
Giải pháp:
• Dùng nhiều phương pháp
• So sánh kết quả
• Điều chỉnh theo kinh nghiệm tổ chức
==> Pressman: Estimation should be iterative.

---

### 9. BÀI TẬP THỰC HÀNH CHƯƠNG 3 (THEO SLIDE)

#### Bài tập 1 – Viết phạm vi phần mềm cho “Ứng dụng quản lý kho có quét barcode”:
• Chức năng: Nhập/xuất kho, Quét barcode, Báo cáo tồn kho.
• Ràng buộc: Phải tích hợp với ERP, Chạy trên Android.
• Người dùng: Thủ kho, Quản lý kho.

#### Bài tập 2 – Phân loại nguồn lực theo Pressman:
• Human Resources: 4 Dev, 1 Tester (Nhân lực là quan trọng nhất).
• Reusable Software Resources: Framework, thư viện.
• Environmental Resources: Server, máy tính.

#### Bài tập 3 – Ước lượng theo LOC:
• Đề bài: 20,000 LOC, năng suất 800 LOC / person-month, team 5 người.
• Lời giải:
  Effort = 20,000 / 800 = 25 person-month
  Duration = 25 / 5 = 5 tháng
• Cảnh báo Pressman: LOC chỉ ước lượng tương đối, phụ thuộc ngôn ngữ.

#### Bài tập 4 – Ước lượng theo Function Point:
• Đề bài: UFP = 200, 1 FP ≈ 50 LOC, năng suất 1,000 LOC/PM.
• Lời giải:
  LOC = 200 × 50 = 10,000 LOC
  Effort = 10,000 / 1000 = 10 person-month
• Điểm nhấn: FP tốt hơn LOC vì không phụ thuộc ngôn ngữ, dùng được từ giai đoạn sớm.

#### Bài tập 5 – Xây dựng WBS cho “Website bán hàng online”:
1. Phân tích yêu cầu
2. Thiết kế
3. Lập trình (Module sản phẩm, Module giỏ hàng, Module thanh toán)
4. Kiểm thử
5. Triển khai

#### Bài tập 6 – Basic COCOMO:
• Đề bài: Organic mode, KLOC = 32, a = 2.4, b = 1.05.
• Lời giải: Effort = 2.4 × 32^1.05 ≈ 2.4 × 35 ≈ 84 person-month (hoặc 91.3 PM).
• Nhận xét: Effort cao hơn tính đơn giản, COCOMO phản ánh độ phức tạp tăng phi tuyến.
