# BỘ CÂU HỎI ÔN TẬP CHƯƠNG 2: QUY TRÌNH PHẦN MỀM VÀ CÁC SỐ LIỆU DỰ ÁN
> **Tiêu chí biên soạn**:
> - Bám sát 100% từ khóa chuẩn trong slide bài giảng môn Quản lý Dự án Phần mềm (ĐH Thăng Long).
> - Đáp án nhiễu logic, bẫy các quan niệm sai lầm phổ biến trong thực tế công nghệ, loại bỏ hoàn toàn các phương án ngô nghê/liệt kê máy móc.
> - Câu có từ 2 ý trở lên được thiết kế dạng **[CHỌN NHIỀU ĐÁP ÁN]**; các câu phân tích tình huống/khái niệm đơn để dạng **[CHỌN 1 ĐÁP ÁN]**.

---
### Câu 1 [CHỌN NHIỀU ĐÁP ÁN] (Slide 3)
Một giám đốc kỹ thuật tuyên bố: *"Nhóm chúng tôi toàn lập trình viên giỏi nên cứ tập trung viết mã nguồn, không cần tốn thời gian đo đạc các số liệu làm gì cho rườm rà"*. Dựa trên lý thuyết kỹ nghệ phần mềm (Slide 3), người quản lý dự án cần phản biện nhận định trên bằng những luận điểm chuẩn mực nào?
- [ ] A. Không đo lường → Sẽ không thể kiểm soát được tiến độ và chất lượng
- [ ] B. Không kiểm soát → Sẽ không có cơ sở dữ liệu thực chứng để cải tiến quy trình
- [ ] C. Đo lường chỉ là thủ tục hành chính hình thức, không mang lại giá trị thực tế cho việc quản trị
- [ ] D. Phần mềm vốn mang tính chất vô hình, nếu không đo lường bằng các số liệu cụ thể thì không thể biết được trạng thái thực tế của sản phẩm
- [ ] E. Chỉ cần sản phẩm chạy được là đủ, không cần biết năng suất và chất lượng ở mức độ nào

> **Đáp án đúng**: **A, B, D**
> **Giải thích**: Slide 3 nêu rõ triết lý cốt lõi: *Không đo → không kiểm soát • Không kiểm soát → không cải tiến • Phần mềm mang tính vô hình*.

---
### Câu 2 [CHỌN NHIỀU ĐÁP ÁN] (Slide 4, 6)
Để quản trị và cải tiến quy trình công nghệ phần mềm, dữ liệu phải trải qua chu trình chuyển hóa 3 cấp độ: **Measurement → Metrics → Indicators**. Hãy chọn những phát biểu đúng về bản chất của từng cấp độ:
- [ ] A. **Metrics**: Là đại lượng định lượng được tính toán và chuẩn hóa từ một hoặc nhiều phép đo (ví dụ: Defect Density = 50 lỗi / 10 KLOC = 5 lỗi/KLOC)
- [ ] B. Metric và Measurement là hai từ đồng nghĩa hoàn toàn, có thể dùng thay thế cho nhau trong mọi tình huống
- [ ] C. **Measurement**: Là phép đo thô (raw data) thu thập trực tiếp từ hoạt động đo (ví dụ: đếm được 50 lỗi trong quá trình kiểm thử)
- [ ] D. **Indicators**: Là chỉ báo định hướng quản lý được đúc kết từ metrics, giúp PM đưa ra quyết định hành động (ví dụ: nhận thấy chất lượng mã nguồn chưa đạt, cần cải tiến khâu kiểm thử)
- [ ] E. Measurement bản thân nó không có nhiều ý nghĩa quản lý nếu không được chuyển hóa thành Metric và Indicator
- [ ] F. Measurement là cấp độ cao nhất dùng trực tiếp để ra quyết định sa thải nhân viên

> **Đáp án đúng**: **A, C, D, E**
> **Giải thích**: Slide 4 & 6 phân biệt chuẩn: *Measurement = Phép đo thô (raw data) • Metrics = Đại lượng tính từ measurement • Indicators = Chỉ báo giúp ra quyết định quản lý*. Measurement vô nghĩa nếu không chuyển thành Metric và Indicator.

---
### Câu 3 [CHỌN NHIỀU ĐÁP ÁN] (Slide 7)
Theo Roger Pressman, việc áp dụng số liệu tràn lan không chọn lọc sẽ gây lãng phí nguồn lực. Một **Số liệu tốt (Pressman)** bắt buộc phải thỏa mãn 4 đặc điểm cốt lõi nào sau đây?
- [ ] A. **Có ý nghĩa** (Phản ánh đúng bản chất mục tiêu quản lý và chất lượng thực tế)
- [ ] B. **Thu thập được** (Khả thi về chi phí và công sức khi lấy dữ liệu trong quá trình làm việc)
- [ ] C. Giữ bí mật tuyệt đối, không cho các thành viên trong nhóm biết kết quả đo
- [ ] D. **Đơn giản** (Dễ hiểu, dễ tính toán, không đòi hỏi công thức toán học quá phức tạp)
- [ ] E. **Có thể hành động** (Cung cấp cơ sở rõ ràng để PM đưa ra quyết định cải tiến cụ thể)
- [ ] F. Phức tạp tối đa với hàng chục biến số ngầm để thể hiện tính hàn lâm

> **Đáp án đúng**: **A, B, D, E**
> **Giải thích**: Slide 7 nêu chính xác 4 đặc điểm: *Đơn giản • Có ý nghĩa • Thu thập được • Có thể hành động*.

---
### Câu 4 [CHỌN NHIỀU ĐÁP ÁN] (Slide 8, 9)
Trong quản lý kỹ nghệ phần mềm, hệ thống số liệu được phân thành 3 nhóm lớn: **Số liệu quy trình (Process Metrics)**, **Số liệu dự án (Project Metrics)** và **Số liệu sản phẩm (Product Metrics)**. Hãy chọn các nhận định đúng về mục tiêu và ví dụ điển hình của từng loại:
- [ ] A. **Process Metrics**: Tập trung vào việc đánh giá hiệu quả của quy trình nhằm cải tiến quy trình phần mềm (ví dụ: Defect Removal Efficiency - Hiệu quả loại bỏ lỗi)
- [ ] B. Process Metrics chỉ dùng riêng cho lập trình viên mới vào nghề, không áp dụng cho quản lý cấp cao
- [ ] C. Số liệu quy trình giúp tổ chức so sánh hiệu quả giữa các dự án khác nhau và nâng cao độ trưởng thành quy trình
- [ ] D. Project Metrics chỉ tính toán một lần sau khi dự án đã bàn giao và thanh lý hợp đồng
- [ ] E. **Project Metrics**: Dùng để điều hành và theo dõi dự án đang chạy (ví dụ: Cost Variance - Chênh lệch chi phí, Schedule Variance - Chênh lệch tiến độ)

> **Đáp án đúng**: **A, C, E**
> **Giải thích**: Slide 8, 9, 12 xác định rõ mục tiêu: *Process Metrics: Cải tiến quy trình, so sánh giữa các dự án (ví dụ Defect removal efficiency)*; *Project Metrics: Quản lý dự án (ví dụ Cost variance, Schedule variance)*.

---
### Câu 5 [CHỌN NHIỀU ĐÁP ÁN] (Slide 11, 13, 14)
Khi theo dõi sức khỏe của một dự án phần mềm đang diễn ra, người quản lý dự án thường xuyên thu thập các **Số liệu quy trình (Process Metrics)** và **Số liệu dự án (Project Metrics)** cụ thể nào sau đây?
- [ ] A. Số liệu dự án: Chỉ số huyết áp và nhịp tim trung bình của lập trình viên
- [ ] B. Các đơn vị đo lường dự án phổ biến: Số dòng lệnh trên tháng (LOC/tháng), Điểm chức năng trên người-tháng (FP/person-month)
- [ ] C. Số liệu dự án: Tiến độ thực tế, Chi phí tiêu hao, Năng suất của đội ngũ
- [ ] D. Số liệu quy trình: Thời gian thực hiện các công đoạn, Hiệu suất làm việc, Tỷ lệ lỗi theo từng giai đoạn phát triển
- [ ] E. Số liệu quy trình: Số lượng email rác nhận được trong hòm thư công ty

> **Đáp án đúng**: **B, C, D**
> **Giải thích**: Slide 11, 13, 14 liệt kê: *Process Metrics gồm Thời gian thực hiện, Hiệu suất, Tỷ lệ lỗi theo giai đoạn*; *Project Metrics gồm Tiến độ, Chi phí, Năng suất (LOC/tháng, FP/người-tháng)*.

---
### Câu 6 [CHỌN NHIỀU ĐÁP ÁN] (Slide 15, 16)
Một dự án hoàn thành việc viết 8,000 dòng lệnh (8,000 LOC) với tổng nỗ lực công sức là 10 người-tháng (10 person-month). Dựa trên bài tập thực hành trong bài giảng:
- [ ] A. Nguyên tắc quản trị: Không nên dùng chỉ số LOC/PM này để so sánh trực tiếp giữa các dự án sử dụng các ngôn ngữ lập trình khác nhau (ví dụ Assembly vs Python)
- [ ] B. Đội ngũ nào viết được 100,000 LOC cho cùng một tính năng chắc chắn có năng suất cao gấp 10 lần đội ngũ viết 10,000 LOC
- [ ] C. Nguyên tắc quản trị: Chỉ nên so sánh năng suất LOC trong cùng tổ chức và có sự tương đồng về công nghệ/môi trường
- [ ] D. Năng suất tính theo công thức: Productivity = \frac8,000 LOC10 person-month = 800 LOC/person-month
- [ ] E. Mức năng suất 800 LOC/PM được đánh giá là ở mức trung bình – khá

> **Đáp án đúng**: **A, C, D, E**
> **Giải thích**: Slide 15, 16 tính chuẩn: Productivity = 800 LOC/PM; Nhận xét: *Mức trung bình – khá • Không nên so sánh giữa các ngôn ngữ khác nhau • Chỉ so sánh trong cùng tổ chức*.

---
### Câu 7 [CHỌN NHIỀU ĐÁP ÁN] (Slide 18, 19, 20, 21)
Hai phương pháp phổ biến nhất để **Đo kích thước phần mềm** là đo bằng số dòng mã lệnh (LOC - Lines of Code) và đo bằng Điểm chức năng (FP - Function Point). Những nhận định nào sau đây đúng về ưu/nhược điểm bản chất của chúng?
- [ ] A. LOC có nhược điểm lớn là phụ thuộc nặng nề vào ngôn ngữ lập trình (ngôn ngữ bậc cao tốn ít dòng code hơn ngôn ngữ bậc thấp để cùng giải quyết một bài toán)
- [ ] B. LOC có thể đo lường chính xác ngay từ giai đoạn lấy yêu cầu trước khi thiết kế hệ thống
- [ ] C. Function Point không thể dùng để ước lượng chi phí vì không đo được số dòng lệnh thực tế
- [ ] D. Function Point đo kích thước dựa trên các chức năng nghiệp vụ mà người dùng nhìn thấy, hoàn toàn độc lập với công nghệ và ngôn ngữ triển khai
- [ ] E. LOC có ưu điểm là dễ đo, trực quan, có thể đếm tự động bằng công cụ
- [ ] F. Đơn vị đo năng suất và chi phí tương ứng là: FP / Person-month hoặc LOC / Person-month

> **Đáp án đúng**: **A, D, E, F**
> **Giải thích**: Slide 18, 19, 20, 21 phân tích: *LOC: Dễ đo, Phụ thuộc ngôn ngữ*; *FP: Đo theo chức năng, Độc lập công nghệ*; *Đo năng suất: FP/Person-month, LOC/Person-month*.

---
### Câu 8 [CHỌN NHIỀU ĐÁP ÁN] (Slide 22, 23)
Bảng tổng kết so sánh giữa **LOC và Function Point (FP)** ở Slide 23 đưa ra những kết luận quan trọng nào sau đây mà người làm quản lý dự án phải ghi nhớ?
- [ ] A. Tiêu chí "Khả năng dùng sớm (ở pha phân tích/đặc tả yêu cầu)": LOC rất khó dùng; FP rất dễ dùng
- [ ] B. Không thể ước lượng nỗ lực sớm bằng FP vì khách hàng không hiểu điểm chức năng
- [ ] C. Kết luận bài học: Phương pháp Function Point (FP) phù hợp hơn cho công tác quản lý dự án phần mềm
- [ ] D. Tiêu chí "So sánh giữa các dự án khác nhau": LOC thể hiện kém; FP thể hiện tốt
- [ ] E. Tiêu chí "Phụ thuộc ngôn ngữ": LOC có phụ thuộc; FP không phụ thuộc
- [ ] F. LOC phù hợp cho quản lý dự án hơn FP vì LOC phản ánh đúng số byte lưu trữ trên ổ đĩa

> **Đáp án đúng**: **A, C, D, E**
> **Giải thích**: Slide 23 khẳng định: *Phụ thuộc ngôn ngữ (LOC: Có, FP: Không) • Dùng sớm (LOC: Khó, FP: Dễ) • So sánh dự án (LOC: Kém, FP: Tốt) → FP phù hợp hơn cho quản lý dự án*.

---
### Câu 9 [CHỌN NHIỀU ĐÁP ÁN] (Slide 25, 26, 27)
Tại sao trong quản trị dự án phần mềm hiện đại, các chuyên gia khuyến nghị **Cần nhiều cách đo và kết hợp cả LOC lẫn FP** thay vì chỉ dựa vào một thước đo duy nhất?
- [ ] A. Vì đo càng nhiều cách thì càng làm khách hàng bối rối và dễ dàng ký nghiệm thu dự án hơn
- [ ] B. Giúp người quản lý điều phối số liệu linh hoạt phù hợp với từng mục tiêu quản trị cụ thể
- [ ] C. Mỗi phương pháp đo đều có những hạn chế cố hữu riêng
- [ ] D. LOC và FP bổ sung cho nhau rất tốt: FP dùng để ước lượng sớm ở pha yêu cầu/thiết kế, còn LOC dùng để kiểm soát chi tiết ở pha lập trình và kiểm thử
- [ ] E. Trong kỹ nghệ phần mềm không tồn tại một số liệu đo lường nào là hoàn hảo tuyệt đối

> **Đáp án đúng**: **B, C, D, E**
> **Giải thích**: Slide 25, 26, 27 khẳng định: *Mỗi cách có hạn chế • Không có số liệu hoàn hảo • Kết hợp LOC & FP bổ sung cho nhau, phù hợp từng giai đoạn • Lựa chọn phù hợp mục tiêu*.

---
### Câu 10 [CHỌN NHIỀU ĐÁP ÁN] (Slide 29, 30, 31)
Về khía cạnh **Số liệu cho chất lượng phần mềm**, những phát biểu nào sau đây đúng theo định nghĩa bài giảng?
- [ ] A. Phần mềm có chất lượng cao nhất là phần mềm viết nhiều dòng lệnh nhất bất kể số lỗi
- [ ] B. Khái niệm chất lượng phần mềm bao hàm các thuộc tính cốt lõi: Độ tin cậy (Reliability), Dễ bảo trì (Maintainability), Dễ sử dụng (Usability)
- [ ] C. Các số liệu đánh giá chất lượng phần mềm gồm: Số lượng lỗi, Mật độ lỗi (Defect Density), Thời gian sửa lỗi
- [ ] D. Mật độ lỗi (Defect Density) được tính chuẩn hóa theo quy mô: Lỗi / KLOC (nghìn dòng lệnh) hoặc Lỗi / FP (điểm chức năng)
- [ ] E. Mật độ lỗi chỉ là con số lý thuyết, không phản ánh được mức độ ổn định của sản phẩm

> **Đáp án đúng**: **B, C, D**
> **Giải thích**: Slide 29, 30, 31 chỉ rõ: *Chất lượng gồm Độ tin cậy, Dễ bảo trì, Dễ sử dụng*; *Số liệu: Số lỗi, Mật độ lỗi, Thời gian sửa lỗi*; *Defect Density = Lỗi/KLOC hoặc Lỗi/FP*.

---
### Câu 11 [CHỌN NHIỀU ĐÁP ÁN] (Slide 32, 33)
Một dự án phần mềm có quy mô 12,000 dòng lệnh (12,000 LOC = 12 KLOC). Giai đoạn kiểm thử phát hiện tổng cộng 60 lỗi. Phân tích số liệu này dưới góc độ quản lý:
- [ ] A. Mức 5 lỗi/KLOC được đánh giá là ở mức trung bình trong ngành phần mềm thương mại
- [ ] B. Hành động cần thiết của PM: Tăng cường kiểm thử và rà soát lại quy trình phát triển
- [ ] C. Khi mật độ lỗi đạt 5 lỗi/KLOC, PM có thể yên tâm bàn giao hệ thống thanh toán tự động ngay mà không cần kiểm thử thêm
- [ ] D. Điểm nhấn bài học: "Defect density là chỉ báo chất lượng, không phải chỉ để báo cáo hình thức"
- [ ] E. Đối với các hệ thống có độ quan trọng cao (như ngân hàng, y tế, hàng không), mức 5 lỗi/KLOC là CHƯA ĐẠT yêu cầu chất lượng
- [ ] F. Mật độ lỗi: Defect Density = \frac60 lỗi12 KLOC = 5 lỗi/KLOC

> **Đáp án đúng**: **A, B, D, E, F**
> **Giải thích**: Slide 32, 33 giải quyết bài toán: Defect Density = 5 lỗi/KLOC; Đánh giá: *Mức trung bình; Với hệ thống quan trọng: chưa đạt; Cần tăng kiểm thử, rà soát quy trình; Defect density là chỉ báo chất lượng, không phải chỉ để báo cáo*.

---
### Câu 12 [CHỌN NHIỀU ĐÁP ÁN] (Slide 35, 36, 37)
Để việc đo lường phát huy hiệu quả thực tế, **Số liệu phải được tích hợp xuyên suốt vòng đời phần mềm**. Hoạt động này bao gồm những nội dung nào?
- [ ] A. Khai thác dữ liệu để phát hiện các điểm nghẽn, điểm yếu trong quy trình và ra quyết định cải tiến
- [ ] B. Thu thập số liệu nhằm mục đích chính là tìm lỗi của lập trình viên để trừ lương thưởng
- [ ] C. Chỉ thu thập số liệu vào ngày cuối cùng trước khi đóng dự án
- [ ] D. Đo lường liên tục trong các giai đoạn: Phân tích → Thiết kế → Lập trình → Kiểm thử
- [ ] E. Xây dựng quy trình thu thập và công cụ lưu trữ số liệu tập trung để tạo kho dữ liệu lịch sử

> **Đáp án đúng**: **A, D, E**
> **Giải thích**: Slide 35, 36, 37 nêu rõ: *Đo lường trong vòng đời: Phân tích, Thiết kế, Lập trình, Kiểm thử • Thu thập & lưu trữ: Công cụ, Quy trình • Sử dụng số liệu: Phát hiện điểm yếu, Ra quyết định cải tiến*.

---
### Câu 13 [CHỌN NHIỀU ĐÁP ÁN] (Slide 39, 40, 41)
Phương pháp **Kiểm soát quy trình dựa trên thống kê (Statistical Process Control - SPC)** và **Biểu đồ kiểm soát (Control Chart)** ứng dụng trong quản lý phần mềm như thế nào?
- [ ] A. Biểu đồ kiểm soát (Control Chart) thiết lập hai đường biên thống kê quan trọng: Giới hạn kiểm soát trên (Upper Control Limit - UCL) và Giới hạn kiểm soát dưới (Lower Control Limit - LCL)
- [ ] B. Nếu số lỗi nằm trong dải giữa UCL và LCL thì quy trình được coi là ổn định và nằm trong tầm kiểm soát thống kê
- [ ] C. SPC chứng minh rằng mọi dự án phần mềm đều không có bất kỳ sự biến đổi nào xảy ra
- [ ] D. SPC dựa trên việc phân tích Dữ liệu lịch sử, Xu hướng biến thiên và thiết lập các Ngưỡng kiểm soát
- [ ] E. Control Chart là biểu đồ dùng để vẽ sơ đồ đường đi của cáp mạng máy chủ
- [ ] F. Giúp quản lý các nguồn biến đổi nội tại của dự án: biến đổi về Yêu cầu, Nhân lực, Công nghệ

> **Đáp án đúng**: **A, B, D, F**
> **Giải thích**: Slide 39, 40, 41 xác định: *Biến đổi: Yêu cầu, Nhân lực, Công nghệ • SPC: Dữ liệu lịch sử, Xu hướng, Ngưỡng kiểm soát • Control Chart: Upper Control Limit (UCL) và Lower Control Limit (LCL)*.

---
### Câu 14 [CHỌN NHIỀU ĐÁP ÁN] (Slide 42, 43)
Một dự án theo dõi số lượng lỗi phát hiện mỗi tuần bằng biểu đồ kiểm soát SPC. Trong 3 tuần đầu, số lỗi dao động rất ổn định dưới ngưỡng UCL. Đến tuần thứ 4, số lỗi tăng vọt vượt qua đường giới hạn kiểm soát trên (UCL). Dưới góc độ quản lý dự án chuyên nghiệp:
- [ ] A. Hiện tượng này có ý nghĩa: Quy trình phát triển phần mềm đang có dấu hiệu mất kiểm soát
- [ ] B. Bắt đội kiểm thử giảm bớt số ca test để tuần sau số lỗi giảm xuống dưới ngưỡng UCL
- [ ] C. Nguyên tắc xử lý vàng của PM: "Sửa quy trình, không sửa triệu chứng"
- [ ] D. Hành động đúng đắn của PM: Dừng lại phân tích nguyên nhân gốc rễ, không vội vàng thúc ép nhân viên sửa code một cách chắp vá
- [ ] E. Hiện tượng này chứng tỏ đã xuất hiện biến đổi đặc biệt (special cause - ví dụ thay đổi công nghệ đột ngột, nhân sự mới chưa qua đào tạo)
- [ ] F. Hành động đúng của PM: Lập tức xóa bỏ dữ liệu tuần 4 khỏi biểu đồ để báo cáo dự án trông vẫn đẹp và an toàn

> **Đáp án đúng**: **A, C, D, E**
> **Giải thích**: Slide 42, 43 kết luận: *1. Ý nghĩa: Quy trình có dấu hiệu mất kiểm soát, Xuất hiện biến đổi đặc biệt (special cause); 2. Hành động: Phân tích nguyên nhân, Không vội sửa code, "Sửa quy trình, không sửa triệu chứng"*.

---
### Câu 15 [CHỌN NHIỀU ĐÁP ÁN] (Slide 46)
Để khép lại Chương 2, bài giảng đúc kết **3 thông điệp tổng kết mang tính nguyên tắc cốt tử** cho người làm quản lý dự án phần mềm gồm:
- [ ] A. Đo lường là nền tảng để cải tiến quy trình
- [ ] B. Đo càng nhiều số liệu không dùng đến càng thể hiện trình độ chuyên môn cao
- [ ] C. Tuyệt đối không đo lường theo kiểu hình thức, đối phó
- [ ] D. Số liệu sinh ra chỉ để phục vụ cho các đợt thanh tra bên ngoài công ty
- [ ] E. Số liệu thu thập bắt buộc phải phục vụ cho việc ra quyết định hành động

> **Đáp án đúng**: **A, C, E**
> **Giải thích**: Slide 46 nêu nguyên văn 3 kết luận: *Đo lường là nền tảng cải tiến quy trình • Số liệu phải phục vụ quyết định • Không đo hình thức*.

