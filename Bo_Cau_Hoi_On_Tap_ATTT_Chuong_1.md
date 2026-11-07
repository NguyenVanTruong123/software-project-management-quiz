# BỘ CÂU HỎI ÔN TẬP CHƯƠNG 1: TỔNG QUAN AN TOÀN THÔNG TIN
> **Môn học**: An toàn thông tin (Information Security)  
> **Tài liệu nguồn**: `Chuong_1_Tong_quan_ATTT.pdf` (Toàn bộ 71 Slide)  
> **Quy ước thiết kế**:
> - Câu hỏi tình huống và tư duy logic cao, phân tích sâu bản chất kỹ thuật, bám sát từng slide bài giảng.
> - Các phương án nhiễu phản ánh các hiểu lầm kinh điển trong thực tế bảo mật.
> - Các câu có nhiều tiêu chí/đặc điểm đúng được thiết kế dạng **[CHỌN NHIỀU ĐÁP ÁN]**.
> - Vị trí các đáp án đúng và nhiễu được **xáo trộn ngẫu nhiên (A, B, C, D, E, F)** để rèn luyện phản xạ đọc kỹ đề bài.

---
### Câu 1 [CHỌN 1 ĐÁP ÁN] (Slide 2, 5, 9)
Vào lúc 08:00 sáng, cổng thông tin sinh viên gặp sự cố nghiêm trọng: hàng nghìn yêu cầu bất thường làm nghẽn dịch vụ, một email lừa đảo đã đánh cắp tài khoản của nhiều người, và một số điểm thi trong hệ thống bị chỉnh sửa không khớp với bản gốc. Phân tích này thể hiện điều gì về mục tiêu cốt lõi của An toàn thông tin?
- A. Sự cố chỉ đe dọa đến tính sẵn sàng (Availability) vì dịch vụ bị ngừng trệ tạm thời
- B. Tính bí mật là yếu tố duy nhất cấu thành an toàn thông tin, các yếu tố khác thuộc về quản trị mạng
- C. An toàn thông tin là bài toán phải đồng thời bảo vệ và cân bằng cả 3 trụ cột: Tính bí mật (Confidentiality), Tính toàn vẹn (Integrity) và Tính sẵn sàng (Availability)
- D. Chỉ cần bảo vệ máy chủ không bị sập thì hệ thống được coi là an toàn tuyệt đối

> **Đáp án đúng**: **C**  
> **Giải thích**: Theo Slide 2 & 5, sự cố trên vi phạm đồng thời cả 3 mục tiêu CIA: Nghẽn dịch vụ (mất Availability), Lộ tài khoản (mất Confidentiality), Điểm số bị sửa (mất Integrity). ATTT là bài toán bảo vệ cân bằng cả 3 mục tiêu.

---
### Câu 2 [CHỌN NHIỀU ĐÁP ÁN] (Slide 8)
Theo lý thuyết quản lý an toàn thông tin (Slide 8), **Rủi ro (Risk)** trong hệ thống được cấu thành từ mối quan hệ tương tác giữa những yếu tố nền tảng nào sau đây?
- [ ] A. **Chi phí bản quyền (License Cost)**: Đại lượng duy nhất quyết định hệ thống có lỗ hổng hay không
- [ ] B. **Tường lửa (Firewall)**: Yếu tố tự động loại bỏ mọi rủi ro về con số 0 mà không cần quản lý tài sản
- [ ] C. **Lỗ hổng (Vulnerability)**: Điểm yếu trong hệ thống, quy trình hoặc con người mà mối đe dọa có thể khai thác
- [ ] D. **Mối đe dọa (Threat)**: Bất kỳ tác nhân hoặc sự kiện tiềm tàng nào có thể gây hại cho tài sản
- [ ] E. **Tài sản (Asset)**: Bất cứ thứ gì có giá trị đối với tổ chức cần được bảo vệ (dữ liệu, phần cứng, danh tiếng)
- [ ] F. **Tác động (Impact)**: Mức độ thiệt hại xảy ra khi mối đe dọa khai thác thành công lỗ hổng

> **Đáp án đúng**: **C, D, E, F**  
> **Giải thích**: Slide 8 chỉ rõ 4 khái niệm tạo nên rủi ro: *Tài sản (Asset) • Mối đe dọa (Threat) • Lỗ hổng (Vulnerability) • Tác động (Impact)*. Rủi ro xuất hiện khi Threat khai thác Vulnerability tác động lên Asset.

---
### Câu 3 [CHỌN NHIỀU ĐÁP ÁN] (Slide 10, 11, 12)
Về mục tiêu **Confidentiality (Tính bí mật)** trong bộ ba CIA Triad, những nhận định nào sau đây là đúng theo bài giảng?
- [ ] A. Ngăn chặn việc tiết lộ thông tin trái phép cho các đối tượng, thực thể hoặc tiến trình không có thẩm quyền
- [ ] B. Chỉ cần máy chủ không kết nối Internet là tính bí mật tự động được bảo đảm 100% không bao giờ bị lộ
- [ ] C. Tính bí mật đảm bảo rằng dữ liệu không bao giờ bị hacker sửa đổi hoặc làm sai lệch nội dung
- [ ] D. Câu hỏi trọng tâm của tính bí mật là: *"Ai được phép biết và truy cập thông tin này?"*
- [ ] E. Kiểm soát tính bí mật đòi hỏi triển khai nhiều lớp: Mã hóa dữ liệu (Encryption), Kiểm soát truy cập (Access Control), và Phân loại dữ liệu
- [ ] F. Mất tính bí mật có thể xảy ra qua nhiều hình thức: rò rỉ dữ liệu (data leak), tấn công nghe lén (eavesdropping), hoặc do người dùng bị lừa qua Social Engineering

> **Đáp án đúng**: **A, D, E, F**  
> **Giải thích**: Slide 10, 11, 12: *Confidentiality ngăn tiết lộ trái phép, trả lời câu hỏi "Ai được phép biết thông tin này?". Kiểm soát bằng mã hóa, phân quyền, phân loại dữ liệu*. Ngăn sửa đổi dữ liệu là thuộc về Tính toàn vẹn (Integrity).

---
### Câu 4 [CHỌN NHIỀU ĐÁP ÁN] (Slide 13, 14, 15)
Về mục tiêu **Integrity (Tính toàn vẹn)** trong bộ ba CIA Triad:
- [ ] A. Kiểm soát tính toàn vẹn bao gồm cả cơ chế phòng ngừa (phân quyền ghi, chữ ký số) và cơ chế phát hiện (hàm băm Cryptographic Hash, kiểm tra tổng Checksum)
- [ ] B. Tính toàn vẹn đồng nghĩa với việc dữ liệu luôn sẵn sàng để bất kỳ ai cũng có thể mở xem bất cứ lúc nào
- [ ] C. Nếu một tệp tin đã được mã hóa thì tính toàn vẹn của tệp tin đó tự động được bảo đảm tuyệt đối mà không cần kiểm tra hàm băm
- [ ] D. Câu hỏi trọng tâm của tính toàn vẹn là: *"Dữ liệu có còn đúng đắn và đáng tin cậy không?"*
- [ ] E. Toàn vẹn có thể bị phá vỡ không chỉ do kẻ tấn công cố ý chỉnh sửa, mà còn do lỗi đường truyền, lỗi phần mềm hoặc thao tác sai của con người
- [ ] F. Bảo vệ tính chính xác, đầy đủ và đáng tin cậy của thông tin và các phương pháp xử lý

> **Đáp án đúng**: **A, D, E, F**  
> **Giải thích**: Slide 13, 14, 15: *Integrity bảo vệ tính đúng đắn, trả lời câu hỏi "Dữ liệu có còn đúng và đáng tin cậy không?". Mất toàn vẹn do tấn công hoặc sai sót kỹ thuật. Kiểm soát bằng cả phòng ngừa và phát hiện (Hash, Chữ ký số)*.

---
### Câu 5 [CHỌN NHIỀU ĐÁP ÁN] (Slide 16, 17, 18)
Về mục tiêu **Availability (Tính sẵn sàng)** trong bộ ba CIA Triad:
- [ ] A. Tính sẵn sàng chỉ áp dụng cho phần mềm, không áp dụng cho đường truyền mạng và máy chủ vật lý
- [ ] B. Câu hỏi trọng tâm: *"Dịch vụ và dữ liệu có thể tiếp cận được khi cần thiết hay không?"*
- [ ] C. Đảm bảo người dùng hợp lệ có thể truy cập thông tin và dịch vụ vào đúng thời điểm họ cần
- [ ] D. Tính sẵn sàng bị đe dọa bởi cả sự cố kỹ thuật (mất điện, lỗi phần cứng, đứt cáp), lỗi vận hành nội bộ lẫn các cuộc tấn công có chủ đích (DDoS, Ransomware mã hóa dữ liệu)
- [ ] E. Đạt được tính sẵn sàng cao nhất bằng cách bỏ qua toàn bộ mật khẩu đăng nhập để mọi người truy cập nhanh nhất
- [ ] F. Thiết kế tính sẵn sàng phải chuẩn bị từ trước khi sự cố xảy ra: Hạ tầng dự phòng (Redundancy), Cân bằng tải (Load Balancing), Kế hoạch sao lưu (Backup) và Phục hồi sau thảm họa (Disaster Recovery)

> **Đáp án đúng**: **B, C, D, F**  
> **Giải thích**: Slide 16, 17, 18: *Availability là dịch vụ sẵn sàng đúng lúc cho người dùng hợp lệ. Bị đe dọa bởi cả kỹ thuật lẫn tấn công. Cần thiết kế sẵn sàng trước bằng dự phòng, cân bằng tải, backup*.

---
### Câu 6 [CHỌN 1 ĐÁP ÁN] (Slide 19)
Hiện tượng **Đánh đổi trong bộ ba CIA (CIA Trade-offs)** thường xuất hiện như thế nào trong thực tế thiết kế hệ thống?
- A. Không bao giờ tồn tại sự đánh đổi giữa các mục tiêu bảo mật nếu mua phần cứng đời mới nhất
- B. Việc tăng cường bảo vệ quá mức một mục tiêu (ví dụ: siết chặt tính bí mật bằng nhiều lớp xác thực phức tạp, mã hóa nhiều tầng) có thể làm suy giảm tính tiện dụng và tính sẵn sàng (Availability) của dịch vụ
- C. Ba mục tiêu CIA luôn luôn bổ trợ hoàn hảo cho nhau và có thể đồng thời đạt mức tối đa 100% mà không tốn thêm chi phí
- D. Tính toàn vẹn luôn đối đầu với tính bí mật, hệ thống có tính bí mật cao thì chắc chắn tính toàn vẹn bằng 0

> **Đáp án đúng**: **B**  
> **Giải thích**: Slide 19 nhấn mạnh: *Ba mục tiêu CIA thường tạo ra đánh đổi. Ví dụ: Bảo mật quá cao (Mật khẩu 20 ký tự đổi hàng tuần + OTP 3 lớp) làm giảm tính sẵn sàng và trải nghiệm người dùng hợp lệ*.

---
### Câu 7 [CHỌN NHIỀU ĐÁP ÁN] (Slide 24, 25)
Tại sao kiến trúc bảo mật truyền thống theo kiểu **"Lâu đài và hào nước" (Perimeter-based Security)** ngày nay bị coi là không còn đủ an toàn, dẫn đến sự ra đời của tư duy **Zero Trust**?
- [ ] A. Vì mô hình lâu đài và hào nước chỉ bảo vệ phần mềm mã nguồn mở, không bảo vệ phần mềm thương mại
- [ ] B. Kẻ tấn công hoặc mã độc một khi đã xâm nhập vượt qua tường lửa biên (như qua email phishing) có thể tự do di chuyển ngang (Lateral Movement) để chiếm toàn bộ hệ thống
- [ ] C. Mô hình Zero Trust ra đời nhằm khuyên các doanh nghiệp đóng cửa hoàn toàn không dùng Internet nữa
- [ ] D. Biên giới mạng truyền thống bị xóa nhòa do làm việc từ xa (Remote work), mang thiết bị cá nhân (BYOD) và dịch vụ Điện toán đám mây (Cloud)
- [ ] E. Mô hình cũ giả định ngây thơ rằng: *"Bên ngoài là thù địch, nhưng bất cứ ai đã vào được bên trong mạng nội bộ (mạng LAN/VPN) thì mặc định đáng tin cậy"*
- [ ] F. Nguy cơ từ chính các mối đe dọa nội bộ (Insider threats - nhân viên bất mãn, tài khoản nội bộ bị chiếm đoạt) không thể bị ngăn chặn bởi tường lửa biên

> **Đáp án đúng**: **B, D, E, F**  
> **Giải thích**: Slide 24 & 25: *Mô hình "lâu đài và hào nước" có nhược điểm: tin cậy mặc định bên trong mạng nội bộ. Khi ranh giới mạng tan biến (Cloud, Remote), kẻ tấn công di chuyển ngang dễ dàng. Zero Trust loại bỏ niềm tin mặc định*.

---
### Câu 8 [CHỌN NHIỀU ĐÁP ÁN] (Slide 24, 26, 28, 29)
Triết lý và nguyên lý cốt lõi của **Kiến trúc Zero Trust (Zero Trust Architecture theo NIST)** bao gồm những luận điểm nào?
- [ ] A. Quyết định truy cập được đánh giá liên tục theo ngữ cảnh (Context-aware): dựa trên danh tính người dùng, tình trạng thiết bị, vị trí, thời gian và hành vi bất thường
- [ ] B. Tách biệt giữa Điểm quyết định chính sách (Policy Decision Point - PDP) và Điểm thực thi chính sách (Policy Enforcement Point - PEP)
- [ ] C. Zero Trust quy định rằng một khi người dùng đã đăng nhập thành công vào buổi sáng thì cả ngày hôm đó không cần kiểm tra lại ngữ cảnh nữa
- [ ] D. Triết lý chỉ đạo cốt lõi: *"Không bao giờ tin tưởng, luôn luôn xác minh" (Never trust, always verify)*
- [ ] E. Không trao quyền tin cậy dựa trên vị trí địa lý hay vị trí mạng (ở trong văn phòng công ty hay ở quán cafe đều phải xác thực như nhau)
- [ ] F. Áp dụng nguyên tắc Đặc quyền tối thiểu (Least Privilege): Chỉ cấp quyền vừa đủ để hoàn thành công việc cụ thể

> **Đáp án đúng**: **A, B, D, E, F**  
> **Giải thích**: Slide 24, 26, 28, 29: *Zero Trust: Never trust, always verify • Quyết định truy cập theo ngữ cảnh động (tín hiệu người dùng, thiết bị, vị trí) • Nguyên tắc đặc quyền tối thiểu • Tách quyết định (PDP) khỏi thực thi (PEP)*.

---
### Câu 9 [CHỌN NHIỀU ĐÁP ÁN] (Slide 34, 35, 36, 37, 38)
Về hình thức tấn công **Từ chối dịch vụ phân tán (DDoS - Distributed Denial of Service)**:
- [ ] A. Mục tiêu chính của DDoS là đột nhập vào cơ sở dữ liệu để bí mật tải trộm dữ liệu tài khoản ngân hàng
- [ ] B. Mục tiêu trực diện của DDoS là triệt hạ Tính sẵn sàng (Availability), khiến người dùng hợp lệ không thể tiếp cận dịch vụ
- [ ] C. Kẻ tấn công sử dụng mạng máy tính ma (Botnet) gồm hàng nghìn đến hàng triệu thiết bị bị nhiễm mã độc (máy tính, camera IoT) để khuếch đại sức tấn công
- [ ] D. Kỹ thuật Reflection (phản xạ) và Amplification (khuếch đại) lợi dụng các máy chủ dịch vụ công cộng (như DNS, NTP) để vừa che giấu IP thật của kẻ tấn công vừa nhân lưu lượng tấn công lên gấp nhiều lần
- [ ] E. DDoS xuất hiện ở nhiều tầng mạng: Tầng mạng/vận chuyển (SYN Flood, UDP Flood - làm nghẽn băng thông) và Tầng ứng dụng (HTTP Flood, Slowloris - làm cạn kiệt tài nguyên xử lý CPU/RAM/Database)
- [ ] F. Một chiếc máy tính cá nhân duy nhất không cần kết nối mạng cũng có thể tự thực hiện cuộc tấn công DDoS

> **Đáp án đúng**: **B, C, D, E**  
> **Giải thích**: Slide 35, 36, 37, 38: *DDoS đánh vào tính sẵn sàng; dùng Botnet khuếch đại; diễn ra ở L3/L4 (băng thông) và L7 (ứng dụng); dùng Reflection và Amplification để che nguồn và tăng lưu lượng*. Mục tiêu tải trộm dữ liệu là của APT hoặc Data Breach.

---
### Câu 10 [CHỌN NHIỀU ĐÁP ÁN] (Slide 40, 41)
Chiến lược **Phòng thủ và Ứng phó tấn công DDoS** hiệu quả trong thực tế đòi hỏi triển khai những biện pháp nào?
- [ ] A. Rút dây mạng của toàn bộ trung tâm dữ liệu vĩnh viễn để tránh bị tấn công DDoS
- [ ] B. Áp dụng kỹ thuật Rate Limiting (giới hạn tần suất yêu cầu trên mỗi địa chỉ IP) và cơ chế thử thách xác thực (CAPTCHA/Challenge)
- [ ] C. Xây dựng sẵn Quy trình ứng phó sự cố (DDoS Playbook) phân công rõ vai trò, kênh liên lạc khẩn cấp và kịch bản kích hoạt điều hướng lưu lượng (BGP Anycast/Blackholing)
- [ ] D. Chỉ cần mua thêm một thanh RAM cắm vào máy chủ là có thể chống lại mọi đợt tấn công DDoS quy mô hàng Terabit/giây
- [ ] E. Phòng thủ theo nhiều tầng: Sử dụng mạng phân phối nội dung (CDN) và dịch vụ lọc lưu lượng chuyên dụng (Cloudflare, AWS Shield) ở tuyến đầu
- [ ] F. Giám sát liên tục để phân biệt được sự đột biến lưu lượng hợp lệ (như ngày hội tuyển sinh, flash sale) với lưu lượng tấn công nhân tạo

> **Đáp án đúng**: **B, C, E, F**  
> **Giải thích**: Slide 40 & 41: *Phòng thủ DDoS cần nhiều tầng (CDN, WAF, Rate Limiting) • Ứng phó theo Playbook • Phân biệt traffic hợp lệ vs bất thường*.

---
### Câu 11 [CHỌN NHIỀU ĐÁP ÁN] (Slide 43, 44, 45, 46)
Đặc trưng cốt lõi của hình thức tấn công **Mối đe dọa có chủ đích nâng cao (APT - Advanced Persistent Threat)** được thể hiện qua những khía cạnh nào?
- [ ] A. Tấn công APT luôn gây ra tiếng vang lớn và làm sập máy chủ ngay lập tức để chủ sở hữu phát hiện ra trong vòng 5 phút
- [ ] B. APT là hình thức virus đơn giản do các học sinh cấp 2 viết ra để đùa vui
- [ ] C. **Threat (Mối đe dọa)**: Có mục tiêu cụ thể có chủ đích (đánh cắp sở hữu trí tuệ, gián điệp mạng, phá hoại hạ tầng trọng yếu)
- [ ] D. **Persistent (Kiên trì/Lâu dài)**: Mục tiêu không phải là phá hoại ngay lập tức, mà là âm thầm duy trì quyền truy cập bí mật trong mạng mục tiêu suốt nhiều tháng hoặc nhiều năm
- [ ] E. Vòng đời tấn công APT trải qua nhiều giai đoạn: Thu thập thông tin $\rightarrow$ Xâm nhập ban đầu $\rightarrow$ Thiết lập chỗ đứng $\rightarrow$ Leo thang đặc quyền $\rightarrow$ Di chuyển ngang $\rightarrow$ Thu thập và trích xuất dữ liệu (Data Exfiltration)
- [ ] F. **Advanced (Nâng cao)**: Đối thủ có trình độ chuyên môn cao, nguồn lực tài chính mạnh (thường được chính phủ hoặc tổ chức tội phạm lớn tài trợ), sử dụng kết hợp nhiều kỹ thuật tinh vi và lỗ hổng Zero-day

> **Đáp án đúng**: **C, D, E, F**  
> **Giải thích**: Slide 43, 44, 45: *APT là đối thủ có năng lực và kiên trì. 3 từ mô tả: Advanced • Persistent • Threat. Tiến triển qua nhiều pha, âm thầm duy trì hiện diện lâu dài, kết hợp kỹ thuật thay vì dựa vào 1 lỗ hổng*.

---
### Câu 12 [CHỌN NHIỀU ĐÁP ÁN] (Slide 50, 51, 52, 53)
Về hình thức tấn công **Kỹ nghệ xã hội (Social Engineering)** trong an toàn thông tin:
- [ ] A. Social Engineering là kỹ thuật sử dụng máy học để giải mã khóa mật mã AES 256-bit trong vài giây
- [ ] B. Kẻ tấn công thường khai thác các phản xạ tâm lý điển hình: Nỗi sợ hãi (đe dọa khóa tài khoản), Tính khẩn cấp (yêu cầu xử lý trong 15 phút), và Lòng tham hoặc Sự tin tưởng vào cơ quan quyền lực
- [ ] C. Yếu tố con người thường được coi là mắt xích yếu nhất trong chuỗi bảo mật của bất kỳ tổ chức nào
- [ ] D. Các giải pháp công nghệ (như tường lửa và phần mềm diệt virus) có thể ngăn chặn được 100% các cuộc tấn công Social Engineering mà không cần đào tạo người dùng
- [ ] E. Là nghệ thuật thao túng tâm lý con người nhằm đánh lừa nạn nhân tự nguyện cung cấp thông tin nhạy cảm hoặc thực hiện hành động gây mất an toàn
- [ ] F. Không chỉ giới hạn ở Phishing qua email, mà còn bao gồm: Spear Phishing (lừa đảo nhắm mục tiêu cụ thể), Vishing (lừa đảo qua điện thoại), Smishing (qua SMS) và Pretexting (dựng kịch bản đóng vai)

> **Đáp án đúng**: **B, C, E, F**  
> **Giải thích**: Slide 50, 51, 52: *Social Engineering khai thác niềm tin và cảm xúc • Kích hoạt 3 phản xạ: Khẩn cấp, Sợ hãi, Tin tưởng • Đa dạng hình thức (Phishing, Vishing, Pretexting) • Giảm rủi ro cần cả công nghệ lẫn nhận thức con người*.

---
### Câu 13 [CHỌN NHIỀU ĐÁP ÁN] (Slide 60, 61, 62, 63)
Tiêu chuẩn quốc tế **ISO/IEC 27001** giữ vai trò gì trong quản trị an toàn thông tin của một tổ chức?
- [ ] A. Khi một doanh nghiệp đã đạt chứng chỉ ISO/IEC 27001 thì đảm bảo hệ thống sẽ miễn nhiễm 100% với mọi cuộc tấn công của tin tặc và không bao giờ bị hack
- [ ] B. Cốt lõi của ISO 27001 là tiếp cận dựa trên quản lý rủi ro (Risk-based approach): Xác định tài sản, đánh giá lỗ hổng/đe dọa và lựa chọn biện pháp kiểm soát tương xứng
- [ ] C. ISO 27001 là một phần mềm diệt virus cài đặt trực tiếp trên máy tính của nhân viên
- [ ] D. Vận hành theo chu trình quản lý chất lượng liên tục PDCA: Plan (Lập kế hoạch) $\rightarrow$ Do (Thực hiện) $\rightarrow$ Check (Kiểm tra) $\rightarrow$ Act (Cải tiến)
- [ ] E. Phụ lục Annex A (phiên bản 2022) nhóm các biện pháp kiểm soát bảo mật thành 4 chủ đề: Con người (People), Tổ chức (Organizational), Công nghệ (Technological), và Vật lý (Physical)
- [ ] F. Cung cấp khuôn khổ chuẩn để xây dựng, vận hành, giám sát và cải tiến Hệ thống quản lý an toàn thông tin (ISMS - Information Security Management System)

> **Đáp án đúng**: **B, D, E, F**  
> **Giải thích**: Slide 60, 61, 62, 63, 66: *ISO 27001 xây dựng ISMS theo PDCA • Annex A 2022 gồm 4 nhóm: People, Org, Tech, Physical • Dựa trên quản trị rủi ro • Slide 66 khẳng định: ISO 27001 KHÔNG bảo đảm miễn nhiễm tấn công, mà giúp tổ chức quản trị có hệ thống và phục hồi nhanh*.

---
### Câu 14 [CHỌN NHIỀU ĐÁP ÁN] (Slide 60, 67, 68, 69)
Quy định chung về bảo vệ dữ liệu của Liên minh Châu Âu (**GDPR - General Data Protection Regulation**) đặt ra những nguyên tắc và nghĩa vụ pháp lý nào?
- [ ] A. Doanh nghiệp có quyền tự ý đem dữ liệu cá nhân của người dùng bán cho bên thứ ba mà không cần sự đồng thuận minh bạch
- [ ] B. GDPR chỉ áp dụng cho các doanh nghiệp có trụ sở tại châu Âu, nếu doanh nghiệp ở Việt Nam xử lý dữ liệu của công dân EU thì hoàn toàn không chịu chế tài
- [ ] C. Đặt nghĩa vụ nghiêm ngặt cho tổ chức: Khi xảy ra sự cố rò rỉ dữ liệu cá nhân nghiêm trọng, bắt buộc phải báo cáo cho cơ quan quản lý trong vòng **72 giờ**
- [ ] D. Bảo vệ quyền riêng tư và quyền kiểm soát dữ liệu cá nhân (Personal Data) của mọi thể nhân
- [ ] E. Trao cho cá nhân các quyền quan trọng: Quyền được truy cập, Quyền được sửa đổi, Quyền được xóa dữ liệu ("Quyền được lãng quên"), Quyền phản đối xử lý dữ liệu
- [ ] F. Áp dụng 7 nguyên tắc cốt lõi: Hợp pháp, công bằng, minh bạch; Giới hạn mục đích; Giảm thiểu dữ liệu; Chính xác; Giới hạn lưu trữ; Toàn vẹn và bí mật; Trách nhiệm giải trình

> **Đáp án đúng**: **C, D, E, F**  
> **Giải thích**: Slide 67, 68, 69: *GDPR bảo vệ dữ liệu cá nhân • 7 nguyên tắc vòng đời dữ liệu • Trao quyền cho cá nhân (xóa, truy cập) • Nghĩa vụ báo cáo vi phạm trong 72 giờ • Có phạm vi áp dụng ngoại lãnh thổ nếu phục vụ đối tượng EU*.
