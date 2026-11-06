# CÁC CÂU HỎI, KHÁI NIỆM CẦN HỌC
## CHƯƠNG 4: QUẢN LÝ VÀ PHÂN TÍCH RỦI RO

---

### 1. KHÁI NIỆM RỦI RO
• Rủi ro = sự kiện có khả năng xảy ra trong tương lai
• Có thể gây ảnh hưởng tiêu cực
• Khác với “vấn đề” (issue)
• Không chắc chắn
• Công thức: Risk = Probability × Impact

---

### 2. THUỘC TÍNH RỦI RO
• Không chắc chắn
• Có xác suất xảy ra
• Có hậu quả (thiệt hại)
*Ví dụ*:
• Dev nghỉ việc giữa dự án
• Công nghệ mới không ổn định

---

### 3. SO SÁNH RỦI RO & ISSUE
| Tiêu chí | Risk (Rủi ro) | Issue (Vấn đề) |
| :--- | :--- | :--- |
| **Trạng thái** | Chưa xảy ra | Đã xảy ra |
| **Xác suất** | Có xác suất (0 < P < 1) | 100% xảy ra |
| **Hành động** | Cần dự phòng | Cần xử lý |

---

### 4. RISK EXPOSURE (RE)
Công thức:
RE = Probability × Loss

*Ví dụ*:
P = 0.4
Loss = 50,000$
RE = 20,000$

---

### 5. VÌ SAO PHẦN MỀM RỦI RO CAO?
• Yêu cầu thay đổi
• Sản phẩm vô hình
• Phụ thuộc con người
• Công nghệ thay đổi nhanh

---

### 6. VAI TRÒ CỦA QUẢN LÝ RỦI RO
• Giảm bất ngờ
• Tăng khả năng thành công
• Cải thiện ra quyết định

---

### 7. BA NHÓM RỦI RO CHÍNH
• **Project Risks (Rủi ro dự án)**:
  - Trễ tiến độ
  - Ước lượng sai
  - Thiếu nhân lực
  - Thay đổi phạm vi

• **Technical Risks (Rủi ro kỹ thuật)**:
  - Công nghệ mới
  - Thiết kế chưa rõ
  - Tích hợp hệ thống
  - Hiệu năng không đạt

• **Business Risks (Rủi ro kinh doanh)**:
  - Thị trường thay đổi
  - Khách hàng hủy dự án
  - Không sinh lợi
  - Thay đổi chiến lược
*(Business Risk nguy hiểm nhất vì dù làm tốt kỹ thuật nhưng không bán được hoặc khách hủy thì dự án vẫn bằng 0)*.

---

### 8. RỦI RO PHỔ BIẾN THEO PRESSMAN
• Size uncertainty (Không chắc chắn về kích thước)
• Customer characteristics (Đặc trưng khách hàng)
• Process maturity (Độ trưởng thành quy trình)
• Staff experience (Kinh nghiệm nhân sự)

---

### 9. QUY TRÌNH NHẬN DIỆN VÀ QUẢN LÝ RỦI RO
**Tóm tắt quy trình**:
Identify → Analyze → Plan → Monitor

**Quy trình 4 bước**:
1. **Nhận diện (Identify)**
2. **Phân tích (Analyze)**
3. **Lập kế hoạch (Plan)**
4. **Theo dõi (Monitor)**

**Kỹ thuật xác định rủi ro**:
• **Brainstorming**: Họp nhóm, Liệt kê tự do, Không phê phán
• **Checklist**: Danh sách rủi ro chuẩn (Scope change, Schedule slip, Technology risk, People risk)
• **Historical data**: Dự án trước, Lessons learned, Báo cáo lỗi
• **SWOT**: Strength, Weakness, Opportunity, Threat

---

### 10. ĐỊNH LƯỢNG & SÀNG LỌC RỦI RO
**Định lượng rủi ro**:
• Gán xác suất (0–1)
• Ước lượng thiệt hại
• Tính RE

**Xếp hạng rủi ro**:
• High
• Medium
• Low

**Risk Matrix (Ma trận 3x3)**:
• Probability (Low–High)
• Impact (Low–High)

**Nguyên tắc sàng lọc**:
• Ưu tiên RE cao
• Không bỏ qua rủi ro hiếm nhưng thiệt hại lớn

---

### 11. BỐN CHIẾN LƯỢC XỬ LÝ RỦI RO
• **Avoid (Tránh)**: Loại bỏ nguyên nhân gây rủi ro
• **Mitigate (Giảm thiểu)**: Giảm xác suất hoặc giảm tác động (làm prototype trước, đào tạo nhân sự, kiểm thử sớm)
• **Transfer (Chuyển giao)**: Thuê ngoài, mua bảo hiểm
• **Accept (Chấp nhận)**: Chấp nhận và lập quỹ dự phòng

**Theo dõi rủi ro (Risk Monitoring)**:
• Theo dõi trigger
• Cập nhật Risk Register

**Risk Register gồm**: ID, Description, Probability, Impact, Owner (hoặc RE, Strategy).

**Theo dõi rủi ro theo vòng đời dự án**:
Lập kế hoạch → Thiết kế → Lập trình → Kiểm thử → Triển khai

---

### 12. BÀI TẬP THỰC HÀNH CHƯƠNG 4 (THEO SLIDE)

#### Bài tập 1 – Phân loại rủi ro:
• Dev nghỉ việc → **Project Risk**
• Công nghệ mới → **Technical Risk**
• Cắt ngân sách → **Business Risk**
• Thay đổi yêu cầu → **Project Risk**

#### Bài tập 2 – Brainstorming Mobile Banking App (ít nhất 8 rủi ro đủ 3 nhóm):
• Tấn công bảo mật (Technical)
• Lỗi tích hợp ngân hàng (Technical)
• Trễ tiến độ (Project)
• Không đạt yêu cầu pháp lý (Business)
• Dev thiếu kinh nghiệm (Project)
• Server quá tải (Technical)
• Yêu cầu thay đổi (Project)
• Ngân sách bị cắt (Business)
==> Điểm nhấn: phải bao phủ cả 3 nhóm rủi ro.

#### Bài tập 3 – Tính Risk Exposure:
• Đề bài: Rủi ro hệ thống bị tấn công, P = 0.2, Loss = 200,000$.
• Lời giải: RE = 0.2 × 200,000 = 40,000$.
• Đánh giá: RE cao → cần ưu tiên xử lý.
==> Pressman: Rủi ro có RE cao cần mitigation plan rõ ràng.

#### Bài tập 4 – So sánh RE:
• Risk A: 0.5 × 10,000 = 5,000
• Risk B: 0.2 × 50,000 = 10,000
==> Risk B nguy hiểm hơn.
==> Không chỉ nhìn xác suất, phải nhìn tổng thiệt hại.

#### Bài tập 5 – Xếp hạng rủi ro:
• R1 (High × High)
• R2 (Medium × High)
• R4 (High × Low)
• R3 (Low × High)
==> Risk Matrix giúp trực quan hóa ưu tiên.

#### Bài tập 6 – Chọn chiến lược xử lý cho “Công nghệ AI mới chưa ổn định”:
• Mitigate: Prototype trước, Đào tạo nhân sự, Kiểm thử sớm.
• Tránh (Avoid) nếu có thể dùng công nghệ cũ ổn định.

#### Bài tập 7 – Bảng Risk Register mẫu (Website thương mại điện tử):
| ID | Risk | P | Loss | RE | Strategy |
| :---: | :--- | :---: | :---: | :---: | :--- |
| **R1** | Payment failure | 0.3 | 50k | 15k | Mitigate |
| **R2** | Server overload | 0.4 | 30k | 12k | Mitigate |
| **R3** | Data leak | 0.2 | 200k | 40k | Avoid/Mitigate |
| **R4** | Dev nghỉ việc | 0.3 | 20k | 6k | Mitigate |
| **R5** | Delay | 0.5 | 10k | 5k | Monitor |
