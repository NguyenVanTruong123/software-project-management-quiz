# BỘ CÂU HỎI ÔN TẬP CHƯƠNG 4: QUẢN LÝ VÀ PHÂN TÍCH RỦI RO
> **Tiêu chí biên soạn**:
> - Bám sát 100% từ khóa chuẩn trong slide bài giảng môn Quản lý Dự án Phần mềm (ĐH Thăng Long).
> - Đáp án nhiễu logic, bẫy các quan niệm sai lầm phổ biến trong thực tế công nghệ, loại bỏ hoàn toàn các phương án ngô nghê/liệt kê máy móc.
> - Câu có từ 2 ý trở lên được thiết kế dạng **[CHỌN NHIỀU ĐÁP ÁN]**; các câu phân tích tình huống/khái niệm đơn để dạng **[CHỌN 1 ĐÁP ÁN]**.

---

### Câu 1 [CHỌN NHIỀU ĐÁP ÁN] (Slide 4, 5, 6)
Khi bàn về công tác quản trị dự án phần mềm, người quản lý dự án (PM) cần hiểu đúng bản chất **Khái niệm và Thuộc tính của Rủi ro (Risk)** thông qua những đặc trưng cốt lõi nào sau đây?
- [ ] A. Rủi ro là sự kiện có khả năng xảy ra trong tương lai (chưa xảy ra ở thời điểm hiện tại)
- [ ] B. Rủi ro là sự kiện có thể gây ra ảnh hưởng hoặc thiệt hại tiêu cực đối với mục tiêu dự án
- [ ] C. Rủi ro về bản chất mang tính "không chắc chắn" (uncertainty)
- [ ] D. Thuộc tính của rủi ro bao gồm: Có xác suất xảy ra ($0 < P < 1$) và Có hậu quả / mức độ thiệt hại (Loss)
- [ ] E. Công thức định lượng mối quan hệ: $Risk = Probability \times Impact$ (Xác suất $\times$ Tác động)
- [ ] F. Rủi ro là những sai sót, sự cố kỹ thuật chắc chắn 100% đã xảy ra trên môi trường máy chủ thực tế

> **Đáp án đúng**: **A, B, C, D, E**  
> **Giải thích**: Slide 4, 5, 6 xác định chuẩn: *Rủi ro = sự kiện có khả năng xảy ra trong tương lai • Có thể gây ảnh hưởng tiêu cực • Thuộc tính: Không chắc chắn, Có xác suất xảy ra, Có hậu quả (thiệt hại) • Risk = Probability x Impact*. Sự kiện đã xảy ra 100% là Issue, không phải Risk.

---

### Câu 2 [CHỌN NHIỀU ĐÁP ÁN] (Slide 7)
Trong các cuộc họp tiến độ, việc nhầm lẫn giữa **Rủi ro (Risk)** và **Vấn đề / Sự cố (Issue)** thường dẫn đến hành động sai lệch. Bảng đối chiếu ở Slide 7 phân biệt sự khác nhau mang tính bản chất giữa hai khái niệm này dựa trên những tiêu chí nào?
- [ ] A. Về trạng thái xảy ra: Rủi ro là sự kiện chưa xảy ra; Vấn đề (Issue) là sự kiện đã xảy ra
- [ ] B. Về xác suất: Rủi ro gắn liền với xác suất ($0 < P < 1$); Vấn đề có xác suất là 100% xảy ra
- [ ] C. Về hành động ứng phó: Rủi ro đòi hỏi phải lập kế hoạch dự phòng (Precaution/Contingency); Vấn đề đòi hỏi phải kích hoạt xử lý giải quyết ngay lập tức (Action/Resolve)
- [ ] D. Về chi phí: Rủi ro luôn gây tốn kém tiền bạc gấp đôi so với các vấn đề đã xảy ra
- [ ] E. Rủi ro và Vấn đề là hai từ hoàn toàn đồng nghĩa, cùng phản ánh một sự việc đã xảy ra trên máy chủ

> **Đáp án đúng**: **A, B, C**  
> **Giải thích**: Bảng so sánh Slide 7 quy định rõ: *Trạng thái (Risk: Chưa xảy ra vs Issue: Đã xảy ra) • Xác suất (Risk: Có xác suất vs Issue: 100% xảy ra) • Hành động (Risk: Cần dự phòng vs Issue: Cần xử lý)*.

---

### Câu 3 [CHỌN NHIỀU ĐÁP ÁN] (Slide 8)
Đại lượng **Mức độ phơi nhiễm rủi ro (Risk Exposure - RE)** là chỉ số tài chính và định lượng quan trọng nhất để PM so sánh các rủi ro. Hãy chọn các phát biểu đúng về RE:
- [ ] A. Công thức tính toán chuẩn: $RE = Probability \times Loss$ (Xác suất xảy ra $\times$ Mức độ thiệt hại ước tính)
- [ ] B. Đơn vị của RE thường được quy đổi thành tiền tệ (USD hoặc VNĐ) hoặc đơn vị công sức (người-tháng)
- [ ] C. Ví dụ bài học: Nếu rủi ro có xác suất xảy ra $P = 0.4$ và thiệt hại ước tính $Loss = 50,000\$$, thì mức độ phơi nhiễm là $RE = 0.4 \times 50,000\$ = 20,000\$$
- [ ] D. Công thức tính toán là thương số: $RE = \frac{Probability}{Loss}$
- [ ] E. RE càng thấp thì rủi ro đó càng đòi hỏi mức độ ưu tiên xử lý khẩn cấp nhất

> **Đáp án đúng**: **A, B, C**  
> **Giải thích**: Slide 8 nêu rõ: $RE = Probability \times Loss$; Ví dụ $P = 0.4, Loss = 50,000\$ \rightarrow RE = 20,000\$$.

---

### Câu 4 [CHỌN NHIỀU ĐÁP ÁN] (Slide 9, 10)
Tại sao các chuyên gia kỹ nghệ phần mềm đều nhận định **Dự án phần mềm có mức độ rủi ro rất cao** và **Vai trò của quản lý rủi ro** là gì?
- [ ] A. Vì sao rủi ro cao: Yêu cầu của khách hàng liên tục thay đổi trong suốt quá trình phát triển
- [ ] B. Vì sao rủi ro cao: Sản phẩm phần mềm mang tính vô hình, khó kiểm soát chất lượng bằng mắt thường
- [ ] C. Vì sao rủi ro cao: Quá trình phát triển phụ thuộc rất lớn vào năng lực và tâm lý của con người
- [ ] D. Vì sao rủi ro cao: Công nghệ thông tin biến đổi với tốc độ rất nhanh, công cụ cũ nhanh chóng bị lỗi thời
- [ ] E. Vai trò của quản lý rủi ro: Giúp giảm bớt sự bất ngờ thụ động cho nhóm
- [ ] F. Vai trò của quản lý rủi ro: Nâng cao tỷ lệ khả năng thành công và cải thiện chất lượng của các quyết định quản lý
- [ ] G. Quản lý rủi ro giúp triệt tiêu hoàn toàn 100% mọi bất trắc và đảm bảo phần mềm không có lỗi

> **Đáp án đúng**: **A, B, C, D, E, F**  
> **Giải thích**: Slide 9 nêu lý do rủi ro cao: *Yêu cầu thay đổi • Sản phẩm vô hình • Phụ thuộc con người • Công nghệ thay đổi nhanh*; Slide 10 nêu vai trò: *Giảm bất ngờ • Tăng khả năng thành công • Cải thiện ra quyết định*.

---

### Câu 5 [CHỌN NHIỀU ĐÁP ÁN] (Slide 11, 12, 13, 14, 17)
Roger Pressman phân chia rủi ro phần mềm thành **3 nhóm rủi ro chính (Three Major Risk Categories)**. Hãy chọn các phát biểu đúng về định nghĩa và ví dụ cụ thể của từng nhóm:
- [ ] A. **Project Risks (Rủi ro dự án)**: Đe dọa trực tiếp đến tiến độ và nguồn lực dự án (ví dụ: Trễ tiến độ, Ước lượng sai, Thiếu nhân lực, Thay đổi phạm vi)
- [ ] B. **Technical Risks (Rủi ro kỹ thuật)**: Đe dọa chất lượng và tính khả thi kỹ thuật của phần mềm (ví dụ: Sử dụng công nghệ mới chưa kiểm chứng, Thiết kế kiến trúc chưa rõ, Lỗi tích hợp hệ thống, Hiệu năng không đạt)
- [ ] C. **Business Risks (Rủi ro kinh doanh)**: Đe dọa khả năng sinh lời và sự tồn tại thương mại của sản phẩm (ví dụ: Thị trường biến động, Khách hàng đột ngột hủy dự án, Sản phẩm không sinh lợi, Thay đổi chiến lược kinh doanh)
- [ ] D. Rủi ro kinh doanh (Business Risk) được coi là nguy hiểm nhất vì dù phần mềm làm ra hoàn hảo về mặt kỹ thuật, nhưng nếu khách hàng hủy dự án hoặc không ai mua thì toàn bộ giá trị dự án vẫn trở về con số 0
- [ ] E. Technical Risks chỉ gồm các rủi ro liên quan đến việc hỏng hóc chuột và bàn phím máy tính

> **Đáp án đúng**: **A, B, C, D**  
> **Giải thích**: Slide 11–14 & 17 phân tích chi tiết 3 nhóm rủi ro: *Project Risks • Technical Risks • Business Risks*; Thảo luận Slide 17: *Business Risk nguy hiểm nhất vì dù làm tốt kỹ thuật nhưng không bán được hoặc khách hủy thì dự án bằng 0*.

---

### Câu 6 [CHỌN NHIỀU ĐÁP ÁN] (Slide 15)
Theo giáo trình của Roger Pressman (Slide 15), có **4 nguồn rủi ro phổ biến hàng đầu** xuất hiện trong hầu hết các dự án công nghệ thông tin gồm những nguồn rủi ro nào?
- [ ] A. **Size uncertainty** (Sự không chắc chắn về kích thước và quy mô thực tế của phần mềm)
- [ ] B. **Customer characteristics** (Đặc trưng của khách hàng: khả năng giao tiếp, tính quyết đoán, hiểu biết về CNTT)
- [ ] C. **Process maturity** (Độ trưởng thành của quy trình phát triển phần mềm trong tổ chức)
- [ ] D. **Staff experience** (Kinh nghiệm và trình độ kỹ năng thực tế của đội ngũ nhân sự)
- [ ] E. Fluctuations in office rental prices (Biến động giá thuê văn phòng làm việc)
- [ ] F. Power outages during rainstorms (Hiện tượng mất điện khi trời mưa bão)

> **Đáp án đúng**: **A, B, C, D**  
> **Giải thích**: Slide 15 liệt kê chính xác 4 nguồn rủi ro phổ biến theo Pressman: *Size uncertainty • Customer characteristics • Process maturity • Staff experience*.

---

### Câu 7 [CHỌN NHIỀU ĐÁP ÁN] (Slide 18, 42)
**Quy trình quản lý rủi ro chuẩn mực** trong kỹ nghệ phần mềm bao gồm 4 bước nối tiếp nhau theo đúng chu trình nào sau đây?
- [ ] A. Bước 1: Nhận diện rủi ro (Risk Identification)
- [ ] B. Bước 2: Phân tích và định lượng rủi ro (Risk Analysis)
- [ ] C. Bước 3: Lập kế hoạch ứng phó rủi ro (Risk Planning)
- [ ] D. Bước 4: Theo dõi và giám sát rủi ro (Risk Monitoring)
- [ ] E. Chu trình tóm tắt chuẩn xác: Identify $\rightarrow$ Analyze $\rightarrow$ Plan $\rightarrow$ Monitor
- [ ] F. Chu trình ngược lại: Monitor rủi ro trước rồi mới đi tìm hiểu xem rủi ro đó là gì

> **Đáp án đúng**: **A, B, C, D, E**  
> **Giải thích**: Slide 18 & 42 quy định quy trình 4 bước: *Nhận diện (Identify) $\rightarrow$ Phân tích (Analyze) $\rightarrow$ Lập kế hoạch (Plan) $\rightarrow$ Theo dõi (Monitor)*.

---

### Câu 8 [CHỌN NHIỀU ĐÁP ÁN] (Slide 19, 20, 21, 22, 23)
Trong bước đầu tiên (Nhận diện rủi ro), bài giảng giới thiệu **4 kỹ thuật xác định rủi ro kinh điển**. Hãy chọn các nhận định đúng về bản chất của từng kỹ thuật:
- [ ] A. **Brainstorming**: Kỹ thuật họp động não nhóm, khuyến khích các thành viên liệt kê rủi ro tự do và tuyệt đối không phê phán ý kiến của nhau trong lúc liệt kê
- [ ] B. **Checklist**: Sử dụng bảng danh mục rủi ro chuẩn đã được đúc kết từ trước (như danh mục về Scope change, Schedule slip, Technology risk, People risk)
- [ ] C. **Historical data**: Khai thác dữ liệu lịch sử từ các dự án trước, báo cáo bài học kinh nghiệm (Lessons learned) và hồ sơ lưu trữ lỗi cũ
- [ ] D. **SWOT**: Ma trận phân tích điểm mạnh (Strength), điểm yếu (Weakness), cơ hội (Opportunity) và thách thức (Threat) trong dự án
- [ ] E. Brainstorming quy định ai đưa ra rủi ro viển vông sẽ bị đuổi ngay ra khỏi phòng họp
- [ ] F. Checklist là kỹ thuật chỉ áp dụng cho kiểm thử phần cứng, không dùng cho phần mềm

> **Đáp án đúng**: **A, B, C, D**  
> **Giải thích**: Slide 19–23 trình bày 4 kỹ thuật: *Brainstorming (Họp nhóm, Liệt kê tự do, Không phê phán) • Checklist (Danh mục rủi ro chuẩn) • Historical data (Dự án trước, Lessons learned, Báo cáo lỗi) • SWOT*.

---

### Câu 9 [CHỌN NHIỀU ĐÁP ÁN] (Slide 26, 28, 29, 30, 32)
Về các công cụ và nguyên tắc dùng cho hoạt động **Định lượng, Xếp hạng và Sàng lọc rủi ro**:
- [ ] A. Hoạt động định lượng rủi ro gồm việc: Gán xác suất xảy ra (từ 0 đến 1), Ước lượng mức độ thiệt hại (Loss), và Tính chỉ số RE
- [ ] B. Xếp hạng rủi ro thường chia thành 3 cấp độ ưu tiên: Cao (High), Trung bình (Medium), Thấp (Low)
- [ ] C. Ma trận rủi ro (Risk Matrix 3x3) trực quan hóa mức độ nghiêm trọng dựa trên hai trục: Xác suất (Probability: Low - Med - High) và Tác động (Impact: Low - Med - High)
- [ ] D. Nguyên tắc sàng lọc (Slide 32): Ưu tiên tập trung nguồn lực xử lý các rủi ro có chỉ số RE cao nhất
- [ ] E. Nguyên tắc sàng lọc (Slide 32): Tuyệt đối không được bỏ qua các rủi ro có xác suất xảy ra thấp nhưng nếu xảy ra thì mức độ thiệt hại mang tính hủy diệt (ví dụ sự cố rò rỉ dữ liệu khách hàng)
- [ ] F. Khi sàng lọc, PM chỉ cần quan tâm đến rủi ro có xác suất cao nhất, còn mức độ thiệt hại bao nhiêu không quan trọng

> **Đáp án đúng**: **A, B, C, D, E**  
> **Giải thích**: Slide 26, 28, 29, 30, 32 nêu rõ: *Định lượng: Gán xác suất (0-1), Ước lượng thiệt hại, Tính RE • Xếp hạng: High, Medium, Low • Risk Matrix 3x3 • Nguyên tắc sàng lọc: Ưu tiên RE cao, Không bỏ qua rủi ro hiếm nhưng thiệt hại lớn*.

---

### Câu 10 [CHỌN NHIỀU ĐÁP ÁN] (Slide 34, 35)
Khi lập kế hoạch ứng phó rủi ro, người quản lý dự án có **4 chiến lược xử lý rủi ro kinh điển**. Hãy chọn các cặp ghép nối chính xác giữa tên chiến lược và hành động thực tế:
- [ ] A. **Avoid (Tránh rủi ro)**: Thay đổi kế hoạch hoặc thiết kế để loại bỏ hoàn toàn nguyên nhân gây ra rủi ro (ví dụ: quyết định không dùng công nghệ AI thử nghiệm nữa mà chuyển sang dùng thuật toán truyền thống đã ổn định)
- [ ] B. **Mitigate (Giảm thiểu rủi ro)**: Thực hiện các hành động chủ động nhằm làm giảm xác suất xảy ra hoặc làm giảm mức độ thiệt hại của rủi ro (ví dụ: làm bản prototype thử nghiệm trước, đào tạo nhân sự, tăng cường kiểm thử sớm)
- [ ] C. **Transfer (Chuyển giao rủi ro)**: Chuyển trách nhiệm thiệt hại sang bên thứ ba (ví dụ: thuê ngoài đơn vị chuyên gia bảo mật uy tín phát triển cổng thanh toán, mua bảo hiểm rủi ro phần mềm)
- [ ] D. **Accept (Chấp nhận rủi ro)**: Chấp nhận khả năng rủi ro có thể xảy ra và chủ động thiết lập quỹ dự phòng ngân sách và quỹ thời gian đệm (Buffer) để khắc phục nếu rủi ro ập đến
- [ ] E. **Ignore (Lờ đi rủi ro)**: Giả vờ không biết để dự án không bị tăng chi phí dự phòng
- [ ] F. Chiến lược Avoid và Transfer là giống hệt nhau về bản chất thực hiện

> **Đáp án đúng**: **A, B, C, D**  
> **Giải thích**: Slide 34, 35 định nghĩa 4 chiến lược chuẩn: *Avoid (Tránh) • Mitigate (Giảm thiểu) • Transfer (Chuyển giao) • Accept (Chấp nhận)*.

---

### Câu 11 [CHỌN 1 ĐÁP ÁN] (Slide 35, 57)
Trong một dự án xây dựng ứng dụng tài chính, đội ngũ nhận diện được rủi ro: *"Công nghệ thư viện AI nhận diện khuôn mặt mới chọn chưa thực sự ổn định"*. PM quyết định chỉ đạo: **Cho một nhóm nhỏ làm bản Prototype thử nghiệm trước trong 2 tuần, đồng thời gửi lập trình viên đi đào tạo chuyên sâu và đưa quy trình kiểm thử vào sớm**. Đây là biểu hiện cụ thể của chiến lược xử lý nào?
- A. Chiến lược Tránh (Avoid)
- B. Chiến lược Giảm thiểu (Mitigate)
- C. Chiến lược Chuyển giao (Transfer)
- D. Chiến lược Chấp nhận (Accept)

> **Đáp án đúng**: **B**  
> **Giải thích**: Slide 35 & 57 nêu rõ: *Mitigate = Giảm xác suất hoặc giảm tác động bằng cách làm Prototype trước, Đào tạo nhân sự, Kiểm thử sớm*.

---

### Câu 12 [CHỌN NHIỀU ĐÁP ÁN] (Slide 36, 37, 41)
Về công tác **Theo dõi rủi ro (Risk Monitoring)** và tài liệu **Sổ đăng ký rủi ro (Risk Register)**:
- [ ] A. Theo dõi rủi ro bao gồm việc: Thường xuyên theo dõi các dấu hiệu cảnh báo sớm (triggers) và Cập nhật định kỳ nội dung bảng Risk Register
- [ ] B. Các cột thông tin tiêu chuẩn cấu thành một bảng Risk Register gồm: Mã nhận diện (ID), Mô tả rủi ro (Description), Xác suất (Probability), Tác động/Thiệt hại (Impact/Loss), Người chịu trách nhiệm theo dõi (Owner), Chỉ số RE và Chiến lược xử lý
- [ ] C. Rủi ro cần phải được giám sát liên tục theo suốt vòng đời dự án: Lập kế hoạch $\rightarrow$ Thiết kế $\rightarrow$ Lập trình $\rightarrow$ Kiểm thử $\rightarrow$ Triển khai
- [ ] D. Risk Register là tài liệu tĩnh, chỉ lập một lần trong tuần đầu tiên rồi khóa lại không chỉnh sửa
- [ ] E. Hoạt động theo dõi rủi ro chỉ bắt đầu khi dự án đã bị trễ hạn bàn giao ít nhất 1 tháng

> **Đáp án đúng**: **A, B, C**  
> **Giải thích**: Slide 36, 37, 41 quy định: *Theo dõi trigger, Cập nhật Risk Register • Cột bảng: ID, Description, Probability, Impact, Owner, RE, Strategy • Giám sát suốt vòng đời dự án*.

---

### Câu 13 [CHỌN NHIỀU ĐÁP ÁN] (Slide 46, 55)
Xem xét bài toán so sánh giữa hai rủi ro thực tế (Slide 46, 55):
- Rủi ro A: Xác suất $P = 0.5$, Thiệt hại ước tính $Loss = 10,000\$$
- Rủi ro B: Xác suất $P = 0.2$, Thiệt hại ước tính $Loss = 50,000\$$
Dưới góc độ người quản lý dự án được đào tạo bài bản, những kết luận nào sau đây là chính xác?
- [ ] A. Mức độ phơi nhiễm rủi ro A là: $RE(A) = 0.5 \times 10,000\$ = 5,000\$$
- [ ] B. Mức độ phơi nhiễm rủi ro B là: $RE(B) = 0.2 \times 50,000\$ = 10,000\$$
- [ ] C. Vì $RE(B) = 10,000\$ > RE(A) = 5,000\$$, nên Rủi ro B nguy hiểm hơn và cần được ưu tiên xử lý trước
- [ ] D. Bài học quản trị rút ra: "Khi đánh giá rủi ro, người quản lý không được chỉ nhìn vào mỗi xác suất xảy ra, mà bắt buộc phải nhân với mức độ thiệt hại để nhìn ra tổng thiệt hại kỳ vọng (RE)"
- [ ] E. Rủi ro A chắc chắn nguy hiểm hơn Rủi ro B vì xác suất 50% lớn hơn 20% gấp 2.5 lần
- [ ] F. Không thể so sánh được vì hai rủi ro này có xác suất và số tiền khác nhau

> **Đáp án đúng**: **A, B, C, D**  
> **Giải thích**: Slide 46 & 55: $RE(A) = 5,000\$$; $RE(B) = 10,000\$$; Kết luận: *Risk B nguy hiểm hơn • Không chỉ nhìn xác suất, phải nhìn tổng thiệt hại*.

---

### Câu 14 [CHỌN NHIỀU ĐÁP ÁN] (Slide 43, 52)
Dựa vào bài tập phân loại rủi ro chuẩn trong bài giảng (Slide 43, 52), hãy xác định đúng nhóm rủi ro tương ứng của từng tình huống thực tế sau đây:
- [ ] A. "Lập trình viên chủ chốt phụ trách kiến trúc đột ngột xin nghỉ việc" $\rightarrow$ Được phân loại vào nhóm **Project Risk (Rủi ro dự án)**
- [ ] B. "Công nghệ mới áp dụng vào hệ thống chưa ổn định, hay bị lỗi timeout" $\rightarrow$ Được phân loại vào nhóm **Technical Risk (Rủi ro kỹ thuật)**
- [ ] C. "Khách hàng gặp khủng hoảng tài chính và cắt giảm 50% ngân sách đầu tư" $\rightarrow$ Được phân loại vào nhóm **Business Risk (Rủi ro kinh doanh)**
- [ ] D. "Phía khách hàng liên tục thay đổi và bổ sung yêu cầu nghiệp vụ mỗi tuần" $\rightarrow$ Được phân loại vào nhóm **Project Risk (Rủi ro dự án)**
- [ ] E. "Khách hàng cắt giảm ngân sách đầu tư" $\rightarrow$ Thuộc nhóm Technical Risk vì làm giảm tiền mua bản quyền công nghệ

> **Đáp án đúng**: **A, B, C, D**  
> **Giải thích**: Slide 43 & 52 phân loại chuẩn xác: *Dev nghỉ việc $\rightarrow$ Project Risk • Công nghệ mới $\rightarrow$ Technical Risk • Cắt ngân sách $\rightarrow$ Business Risk • Thay đổi yêu cầu $\rightarrow$ Project Risk*.
