# NỘI DUNG NGUYÊN BẢN CHƯƠNG 1: AN TOÀN THÔNG TIN
> Trích xuất chính xác 100% nguyên văn từng slide từ tài liệu: `Chuong_1_Tong_quan_ATTT.pdf`.

### [Slide 1]
CHƯƠNG 1
TỔNG QUAN AN
TOÀN THÔNG TIN
CIA TRIAD • ZERO TRUST • TẤN CÔNG • ISO 27001 • GDPR

---

### [Slide 2]
08:00 sáng — cổng sinh viên ngừng hoạt động
02
Ba dấu hiệu xuất hiện cùng lúc
Không truy cập được
Hàng nghìn yêu cầu bất
thường làm nghẽn dịch vụ.
Tài khoản bị chiếm
Một email “nâng cấp mật
khẩu” đã đánh lừa người dùng.
Dữ liệu bị thay đổi
Một số điểm số không còn
khớp với bản gốc.
Câu hỏi mở: đây là một sự cố hay ba sự cố khác nhau?

---

### [Slide 3]
Sau chương này, sinh viên có thể…
03
Mục tiêu học tập
• Giải thích và vận dụng bộba CIA đểphân tích sựcố
• Mô tảtư duy Zero Trust và quyết định truy cập theo ngữcảnh
• Phân biệt DDoS, APT và Social Engineering
• Trình bày vai trò của ISO/IEC 27001 và GDPR
• Đềxuất biện pháp bảo vệphù hợp cho một tình huống thực tế
Hiểu → phân tích → đềxuất

---

### [Slide 4]
Bản đồ học tập của Chương 1
04
01
Mục tiêu bảo mật
CIA triad
02
Mô hình truy cập
Zero Trust
03
Mối đe dọa
DDoS • APT • SE
04
Quản trị & pháp lý
ISO 27001 • GDPR

---

### [Slide 5]
Khởi động: hệ thống nào “an toàn” hơn?
05
Chọn phương án tốt nhất
A. Không ai bên ngoài truy cập được
B. Dữliệu không bịsửa
C. Dịch vụluôn hoạt động
D. Cần đồng thời bảo vệbí mật, toàn vẹn và sẵn
sàng
Đáp án: D — an toàn thông tin là bài toán cân bằng nhiều mục tiêu.

---

### [Slide 6]
PHẦN 1
CIA TRIAD & ZERO
TRUST
Từ mục tiêu cần bảo vệ đến cách ra quyết định truy cập

---

### [Slide 7]
ATTT bảo vệ thông tin trong suốt vòng đời
07
Không chỉ là “chống hacker”
An toàn thông tin bảo vệthông tin và hệthống trước
truy cập, sửdụng, tiết lộ, gián đoạn, sửa đổi hoặc phá
hủy trái phép.
Con người
Quy trình
Công nghệ

---

### [Slide 8]
Bốn khái niệm tạo nên rủi ro
08
Tài sản
Điều có giá trị cần bảo vệ: dữ liệu sinh viên,
website nhà trường, uy tín của trường.
Mối đe dọa
Tác nhân hoặc sự kiện có thể gây hại: tin tặc đánh
cắp dữ liệu, mã độc mã hóa tệp, cháy phòng
máy.
Lỗhổng
Điểm yếu có thể bị khai thác: mật khẩu dễ đoán,
phần mềm chưa vá lỗi, phân quyền truy cập quá
rộng.
Rủi ro
Khả năng xảy ra thiệt hại và mức độ ảnh hưởng: dữ
liệu sinh viên có thể bị đánh cắp do tài khoản quản
trị sử dụng mật khẩu yếu, dẫn đến lộ thông tin và
giảm uy tín nhà trường.
Ví dụ: dữliệu điểm + kẻtấn công + mật khẩu yếu → nguy cơ sửa điểm.

---

### [Slide 9]
CIA là ba mục tiêu cốt lõi của bảo mật
09
C
Confidentiality
Chỉchủthểđược phép mới
xem được thông tin.
I
Integrity
Thông tin chính xác, đầy đủ và
không bị sửa trái phép.
A
Availability
Thông tin và dịch vụ sẵn sàng
khi người dùng hợp lệ cần.

---

### [Slide 10]
Confidentiality — ngăn tiết lộ trái phép
10
C
Câu hỏi trọng tâm: Ai được phép biết thông tin này?
• Xác định dữliệu nhạy cảm
• Giới hạn người được truy cập
• Bảo vệdữliệu khi lưu trữvà truyền tải

---

### [Slide 11]
Mất bí mật có nhiều hình thức
11
Tình huống
• Lộdanh sách sinh viên
• Đọc trộm email
• Sao chép mã nguồn
• Nghe lén lưu lượng
Hậu quả
• Xâm phạm riêng tư
• Mất lợi thếcạnh tranh
• Tổn thất tài chính
• Rủi ro pháp lý và uy tín

---

### [Slide 12]
Kiểm soát bí mật theo nhiều lớp
12
01
Dữliệu
Mã hóa, phân loại, che dữliệu
02
Truy cập
MFA, phân quyền, đặc quyền tối thiểu
03
Mạng
TLS, VPN, phân đoạn mạng
04
Con người
Đào tạo, cam kết, quy trình chia sẻ
Không có một biện pháp đơn lẻnào bảo vệđược mọi đường rò rỉ.

---

### [Slide 13]
Integrity — bảo vệ tính đúng đắn của thông tin
13
I
Câu hỏi trọng tâm: Dữliệu có còn đúng và đáng tin cậy không?
• Ngăn sửa đổi trái phép
• Phát hiện thay đổi
• Khôi phục vềtrạng thái tin cậy

---

### [Slide 14]
Toàn vẹn có thể mất do tấn công hoặc sai sót
14
Cốý
• Sửa điểm hoặc sốdư
• Chèn mã độc vào phần mềm
• Thay đổi log đểche dấu
Vô ý
• Nhập sai dữliệu
• Lỗi phần mềm
• Đồng bộghi đè bản mới
• Cấu hình nhầm

---

### [Slide 15]
Kiểm soát toàn vẹn cần phòng ngừa và phát hiện
15
01
Xác thực
Chữký số, MAC, checksum
02
Thay đổi
Version control, phê duyệt hai bước
03
Nhật ký
Audit log chống sửa, giám sát
04
Phục hồi
Sao lưu, kiểm thử khôi phục
Checksum phát hiện thay đổi; chữ ký số còn xác minh nguồn gốc.

---

### [Slide 16]
Availability — dịch vụ sẵn sàng đúng lúc
16
A
Người dùng hợp lệcó truy cập được khi cần?
• Giảm điểm lỗi đơn
• Duy trì năng lực xửlý
• Khôi phục nhanh sau sựcố

---

### [Slide 17]
Sẵn sàng bị đe dọa bởi cả kỹ thuật và vận hành
17
Sựkiện
• DDoS
• Hỏng phần cứng
• Mất điện hoặc đường truyền
• Ransomware
• Lỗi cập nhật
Chỉ số cần theo dõi
• Uptime
• Thời gian phản hồi
• RTO — thời gian phục hồi
• RPO — mức mất dữliệu chấp nhận

---

### [Slide 18]
Thiết kế sẵn sàng từ trước khi sự cố xảy ra
18
01
Dựphòng
Cluster, nhiều đường truyền, nguồn dựphòng
02
Khảnăng chịu tải
Auto scaling, cache, CDN
03
Phục hồi
Backup, DR site, runbook
04
Giám sát
Alert, log, kiểm thử định kỳ
Dựphòng chưa đủnếu không kiểm thửchuyển đổi và khôi phục.

---

### [Slide 19]
Ba mục tiêu CIA thường tạo ra đánh đổi
19
Bí mật cao
Kiểm soát truy cập chặt hơn
Toàn vẹn cao
Nhiều bước xác minh hơn
Sẵn sàng cao
Nhiều bản sao và điểm truy
cập hơn
Thiết kếtheo rủi ro
Mục tiêu không phải tối đa hóa từng trục, mà là đạt mức phù hợp với bối cảnh.

---

### [Slide 20]
Hoạt động: phân loại tác động theo CIA
20
Theo nhóm, gán C, I, A cho từng tình huống
Email bảng lương gửi nhầm người —
File cấu hình bịsửa trái phép —
Website đăng ký môn bịnghẽn —
Ransomware mã hóa cơ sởdữliệu —
Tài khoản quản trịbịlộ—
Giải thích vì sao một sựcốcó thểtác động nhiều mục tiêu.

---

### [Slide 21]
Hoạt động: phân loại tác động theo CIA
20
Theo nhóm, gán C, I, A cho từng tình huống
Email bảng lương gửi nhầm người — C
File cấu hình bịsửa trái phép — I
Website đăng ký môn bịnghẽn — A
Ransomware mã hóa cơ sởdữliệu — I + A
Tài khoản quản trịbịlộ— C + I + A
Giải thích vì sao một sựcốcó thểtác động nhiều mục tiêu.

---

### [Slide 22]
Mini case: cổng thông tin sinh viên
21
Một sinh viên nhận được đường link giả, nhập mật khẩu; sau đó điểm bịsửa và hệthống bịkhóa.
1.
Tài sản quan trọng là gì?
2.
CIA bị ảnh hưởng theo thứ tự nào?
3.
Biện pháp nào có thểcắt chuỗi sựcốsớm nhất?
Gợi ý: MFA + phát hiện đăng nhập bất thường + log chống sửa + bản sao lưu.

---

### [Slide 23]
Kiểm tra nhanh: CIA
22
Biện pháp nào chủyếu bảo vệIntegrity?
A. CDN
B. Chữ ký số
C. Mã hóa ổ đĩa
D. Load balancing
Đáp án: B. Chữký sốgiúp phát hiện thay đổi và xác minh nguồn.

---

### [Slide 24]
Zero Trust loại bỏ niềm tin mặc định
23
Không tin chỉvì vịtrí mạng
Mọi yêu cầu truy cập phải được xác thực, ủy quyền và đánh giá
dựa trên chủthể, thiết bị, tài nguyên và ngữcảnh.
Verify explicitly
Least privilege
Assume breach

---

### [Slide 25]
Vì sao mô hình “lâu đài và hào nước” không đủ?
24
Mô hình chu vi
• Tin mạng nội bộ
• Kiểm tra chủyếu ở cổng vào
• Quyền truy cập thường rộng
• Khó kiểm soát di chuyển ngang
Zero Trust
• Không tin mặc định
• Đánh giá từng phiên truy cập
• Quyền nhỏvà có thời hạn
• Thực thi gần tài nguyên

---

### [Slide 26]
Bảy nguyên lý Zero Trust theo NIST
25
1
Mọi nguồn dữ liệu và dịch vụ là tài nguyên
2
Mọi giao tiếp đều được bảo vệ
3
Truy cập theo từng phiên và đặc quyền tối
thiểu
4
Chính sách dựa trên thuộc tính và ngữ cảnh
5
Theo dõi trạng thái tài sản liên tục
6
Xác thực và ủy quyền động, nghiêm ngặt
7
Thu thập dữ liệu để cải thiện chính sách

---

### [Slide 27]
Zero Trust bảo vệ tài nguyên, không bảo vệ “vùng”
26
Resource-centric security
Đối tượng cần bảo vệlà dữliệu, ứng dụng, dịch vụvà quy trình. Vị
trí IP chỉlà một tín hiệu, không phải bằng chứng đủđểtin cậy.
Data
Applications
Services

---

### [Slide 28]
Quyết định truy cập được tách khỏi thực thi
27
Policy Engine
Quyết định cho phép/ từ
chối
Policy Administrator
Thiết lập hoặc dừng phiên
Policy Enforcement
Point
Thực thi trước tài nguyên
Luồng điều khiển ra quyết định; luồng dữliệu chỉmởkhi chính sách cho phép.

---

### [Slide 29]
Một yêu cầu truy cập được đánh giá bằng nhiều tín hiệu
28
Identity
Ai đang yêu cầu?
Device
Thiết bị có an toàn?
Resource
Tài nguyên nhạy cảm
mức nào?
Context
Vị trí, thời gian, hành
vi?
Threat
Có chỉ báo rủi ro
mới?
Decision = Policy(identity + device + resource + context + threat)

---

### [Slide 30]
Triển khai Zero Trust theo lộ trình tăng dần
29
01
Lập danh mục
tài sản & luồng dữ
liệu
02
Củng cố
identity + MFA
03
Thu hẹp quyền
& phân đoạn
04
Đo lường, tự động
điều chỉnh chính
sách
Không cần thay toàn bộ hạ tầng trong một lần.

---

### [Slide 31]
Ứng dụng Zero Trust cho hệ thống LMS
30
Giảng viên đăng nhập từlaptop cá nhân ở nước ngoài đểtải toàn bộdanh sách điểm.
1.
Tín hiệu nào làm tăng rủi ro?
2.
Có nên chặn hoàn toàn không?
3.
Kiểm soát thích ứng nào phù hợp?
Gợi ý: MFA mạnh, kiểm tra thiết bị, giới hạn tải, phê duyệt bổsung, giám sát phiên.

---

### [Slide 32]
Checkpoint: Zero Trust
31
Phát biểu nào đúng nhất?
A. Không bao giờ cho phép truy cập
B. Chỉ tin thiết bị do công ty cấp
C. Không cấp niềm tin ngầm; đánh giá từng yêu cầu
D. Chỉ cần triển khai MFA
Đáp án: C. MFA quan trọng nhưng chỉ là một thành phần.

---

### [Slide 33]
PHẦN 2
CÁC LOẠI TẤN CÔNG
DDoS đánh vào dịch vụ • APT bám trụ dài hạn • Social
Engineering đánh vào con người

---

### [Slide 34]
Ba kiểu tấn công khác nhau về mục tiêu và nhịp độ
33
Đặc điểm
DDoS
APT
Social Engineering
Mục tiêu chính
Làm gián đoạn
Bám trụ / đánh cắp
Thao túng con người
Thời gian
Ngắn–trung hạn
Dài hạn
Theo từng chiến dịch
Dấu hiệu
Lưu lượng tăng vọt
Yếu và phân tán
Thông điệp bất thường
CIA thường bị tác động
A
C + I
C / I / A

---

### [Slide 35]
DDoS làm người dùng hợp lệ không thể truy cập
34
Distributed Denial of Service
Nhiều nguồn đồng thời gửi lưu lượng hoặc yêu cầu đểlàm cạn
băng thông, kết nối hay tài nguyên ứng dụng của mục tiêu.
Nhiều nguồn
Tài nguyên cạn
Dịch vụ gián đoạn

---

### [Slide 36]
Botnet khuếch đại sức tấn công
35
Attacker / C2
Thiết bị bị chiếm quyền
Lưu lượng phân tán
Dịch vụ mục tiêu
Nguồn phân tán khiến chặn theo một địa chỉ IP không hiệu quả.

---

### [Slide 37]
DDoS thường xuất hiện ở ba lớp
36
01
Volumetric
Làm đầy băng thông bằng lưu lượng lớn.
02
Protocol
Khai thác trạng thái hoặc giới hạn giao
thức.
03
Application
Gửi yêu cầu tốn tài nguyên ở lớp ứng
dụng.

---

### [Slide 38]
Reflection và amplification che nguồn, tăng lưu lượng
37
1
Giả mạo IP nạn nhân
2
Gửi truy vấn nhỏ tới máy
phản xạ
3
Nhận phản hồi lớn hơn
4
Phản hồi dồn về nạn nhân
Giảm thiểu: chống spoofing, cấu hình dịch vụ đúng, lọc và dịch vụ scrubbing.

---

### [Slide 39]
Phân biệt DDoS và lượng truy cập hợp lệ
38
DDoS
• Mẫu truy cập lặp bất thường
• Phân bốđịa lý đáng ngờ
• Tỷlệlỗi kết nối cao
• Không gắn với sựkiện kinh doanh
Flash crowd
• Người dùng thực
• Hành vi điều hướng đa dạng
• Tăng theo chiến dịch/sựkiện
• Có khảnăng chuyển đổi

---

### [Slide 40]
Phòng thủ DDoS cần nhiều tầng
39
01
Edge
Anycast, CDN, scrubbing
02
Network
ACL, rate limit, upstream filtering
03
Application
WAF, cache, bot management
04
Operations
Baseline, alert, playbook, diễn tập
Phối hợp sớm với ISP/CDN vì lưu lượng có thểlàm nghẽn trước khi tới máy chủ.

---

### [Slide 41]
Ứng phó DDoS theo playbook
40
Phát
hiện
So sánh baseline
Xác
minh
Loại trừ lỗi nội bộ
Giảm
thiểu
Kích hoạt lọc/scrubbing
Phục
hồi
Theo dõi và rút kinh nghiệm
Ghi lại thời điểm, chỉ số, quyết định và bằng chứng để phục vụ hậu kiểm.

---

### [Slide 42]
Bài tập nhóm: website tuyển sinh bị nghẽn
41
Thiết kếphản ứng trong 10 phút
Dấu hiệu cần kiểm tra — Băng thông, RPS, CPU, lỗi 5xx, nguồn truy cập
Đối tác cần liên hệ— ISP, CDN/WAF, đội ứng dụng, truyền thông
Quyết định ưu tiên — Duy trì trang thiết yếu; giới hạn chức năng nặng
Bằng chứng cần giữ— Flow logs, WAF logs, timeline, cấu hình thay đổi
Nhóm trình bày một hành động “trước – trong – sau” sựcố.

---

### [Slide 43]
APT là đối thủ có năng lực và kiên trì
42
Advanced Persistent Threat
Đối thủdùng nhiều vector, thích ứng với phòng thủvà duy trì hiện
diện trong thời gian dài đểđạt mục tiêu chiến lược.
Advanced
Persistent
Goal-driven

---

### [Slide 44]
Ba từ trong APT mô tả cách đối thủ hoạt động
43
A
Advanced
Chuyên môn, tài nguyên và nhiều kỹ
thuật.
P
Persistent
Theo đuổi lâu dài, quay lại và thích ứng.
T
Threat
Đối thủ có mục tiêu, ý định và năng lực.

---

### [Slide 45]
APT tiến triển qua nhiều giai đoạn
44
1
Xâm nhập
2
Tạo chỗ đứng
3
Nâng quyền & di chuyển
4
Thu thập / đánh cắp
Mô hình thực tế có thể lặp lại; phát hiện sớm giúp giảm phạm vi ảnh hưởng.

---

### [Slide 46]
APT kết hợp kỹ thuật thay vì phụ thuộc một lỗ hổng
45
Đường vào
• Spear phishing
• Khai thác dịch vụcông khai
• Chuỗi cung ứng
• Tài khoản hợp lệbịchiếm
Bám trụ & hành động
• Persistence
• Credential dumping
• Lateral movement
• Command and control
• Exfiltration

---

### [Slide 47]
Dấu hiệu APT thường yếu nhưng liên kết được
46
Identity
Đăng nhập lạ,
impossible travel
Endpoint
Tiến trình và
persistence bất
thường
Network
Beaconing, DNS lạ,
C2
Data
Nén, staging, truyền
dữ liệu
Behavior
Chuỗi hành động
khác baseline
Giá trị nằm ở tương quan nhiều tín hiệu theo thời gian.

---

### [Slide 48]
Chống APT là cuộc chơi phát hiện và hạn chế thiệt hại
47
01
Ngăn xâm nhập
MFA, vá lỗi, email security
02
Giảm di chuyển
Segmentation, PAM, least privilege
03
Phát hiện
EDR, SIEM, threat hunting
04
Ứng phó
Cô lập, điều tra, phục hồi, lessons learned
Giảđịnh có vi phạm giúp thiết kếkhảnăng phát hiện và khống chế.

---

### [Slide 49]
Threat hunting: ghép các mảnh tín hiệu
48
Sắp xếp chuỗi sựkiện thành giảthuyết APT
09:12   — Đăng nhập VPN từ vị trí lạ
09:18   — PowerShell tạo scheduled task
10:04   — Truy cập nhiều máy chủ nội bộ
11:31   — Nén 4 GB dữ liệu
11:45   — DNS beacon mỗi 60 giây
Chọn điểm nên cô lập đầu tiên và nêu bằng chứng cần thu thập.

---

### [Slide 50]
Social Engineering khai thác niềm tin và cảm xúc
49
Con người trở thành “giao diện tấn
công”
Kẻtấn công dùng lừa dối và thuyết phục đểkhiến nạn nhân tiết lộ
thông tin hoặc thực hiện hành động có lợi cho chúng.
Tin tưởng
Khẩn cấp
Tò mò

---

### [Slide 51]
Kẻ tấn công thường kích hoạt ba phản xạ
50
!
Urgency
“Thực hiện ngay nếu không sẽ
bịkhóa.”
★
Authority
“Yêu cầu từ hiệu trưởng / giám
đốc.”
?
Curiosity
“Xem danh sách lương mới
nhất.”

---

### [Slide 52]
Social Engineering không chỉ là phishing
51
Phishing
Thông điệp đại trà qua email/web.
Spear phishing
Nội dung cá nhân hóa cho mục tiêu.
Vishing / Smishing
Lừa qua điện thoại hoặc SMS.
Pretexting / Baiting
Dựng kịch bản hoặc dùng mồi nhử.
Kênh khác nhau, nguyên tắc thao túng tương tự.

---

### [Slide 53]
Giải phẫu một email lừa đảo
52
1
Người gửi
Tên hiển thị giống thật; domain lệch một ký tự
2
Thông điệp
Tạo khẩn cấp, sợ hãi hoặc lợi ích bất ngờ
3
Liên kết/tệp
Đích thật khác nội dung hiển thị
4
Yêu cầu
Đăng nhập, chuyển tiền, cung cấp OTP
Thói quen: dừng lại → kiểm tra → xác minh qua kênh độc lập.

---

### [Slide 54]
Giảm rủi ro cần cả công nghệ lẫn hành vi
53
01
Email & web
Filtering, sandbox, DMARC
02
Identity
MFA chống phishing, conditional access
03
Quy trình
Xác minh giao dịch qua kênh thứ hai
04
Con người
Đào tạo theo tình huống, nút report
Đừng biến người dùng thành “lớp phòng thủ cuối cùng” mà không có hỗ trợ kỹ thuật.

---

### [Slide 55]
Nếu đã nhấp link: phản ứng nhanh hơn che giấu
54
1
Ngắt tương tác, không
nhập thêm
2
Báo cáo ngay cho bộ
phận phụ trách
3
Đổi mật khẩu, thu hồi
phiên, kiểm tra MFA
4
Quét thiết bị và theo
dõi tài khoản
Không đổlỗi; văn hóa báo cáo sớm làm giảm thiệt hại.

---

### [Slide 56]
Đóng vai: cuộc gọi “hỗ trợ kỹ thuật”
55
Người gọi biết tên, khoa và mã nhân viên; yêu cầu đọc mã OTP để“khôi phục email”.
1.
Dấu hiệu thao túng nào xuất hiện?
2.
Bạn sẽ nói gì để từ chối lịch sự?
3.
Kênh nào dùng để xác minh?
Câu trảlời mẫu: Tôi không cung cấp OTP. Tôi sẽgọi lại sốhỗtrợchính thức.

---

### [Slide 57]
So sánh DDoS, APT và Social Engineering
56
Tiêu chí
DDoS
APT
Social Engineering
Đối tượng bị khai thác
Hạ tầng/dịch vụ
Toàn hệ thống
Con người/quy trình
Mục tiêu thường gặp
Gián đoạn
Bám trụ, đánh cắp
Lấy quyền hoặc thông tin
Tốc độ
Nhanh, dễ thấy
Chậm, kín đáo
Nhanh hoặc nhiều bước
Phòng thủ nổi bật
Năng lực + lọc
Telemetry + hunting
Xác minh + kiểm soát

---

### [Slide 58]
Checkpoint: nhận diện kiểu tấn công
57
Kịch bản nào gần APT nhất?
A. 50.000 IP gửi UDP trong 5 phút
B. Email giả mạo yêu cầu nhập OTP
C. Đối thủ bám trụ nhiều tháng, di chuyển ngang và đánh cắp dữ liệu
D. Máy chủ hỏng ổ đĩa
Đáp án: C. Dấu hiệu cốt lõi là mục tiêu dài hạn, thích ứng và duy trì hiện diện.

---

### [Slide 59]
PHẦN 3
ISO/IEC 27001 & GDPR
Từ kiểm soát kỹ thuật đến hệ thống quản lý và trách nhiệm
pháp lý

---

### [Slide 60]
Tiêu chuẩn và quy định trả lời hai câu hỏi khác nhau
59
ISO/IEC 27001
• Tiêu chuẩn vềISMS
• Tiếp cận dựa trên rủi ro
• Có thểđược chứng nhận
• Áp dụng cho nhiều loại thông tin
GDPR
• Quy định pháp luật EU
• Bảo vệdữliệu cá nhân
• Tạo quyền cho cá nhân
• Đặt nghĩa vụcho tổchức

---

### [Slide 61]
ISO/IEC 27001 xây dựng một hệ thống quản lý ATTT
60
ISMS — Information Security
Management System
Tiêu chuẩn quy định yêu cầu để thiết lập, triển khai, duy trì và cải tiến liên
tục hệ thống quản lý an toàn thông tin.
People
Policies
Technology

---

### [Slide 62]
Các điều khoản 4–10 tạo thành vòng quản lý
61
4–5
Bối cảnh, lãnh đạo, phạm vi
6–7
Kế hoạch, mục tiêu, nguồn lực
8–9
Vận hành, đo lường, audit
10
Khắc phục và cải tiến
ISMS là chu trình quản trị, không phải danh sách mua công nghệ.

---

### [Slide 63]
Annex A 2022 nhóm kiểm soát thành bốn chủ đề
62
Organizational
Chính sách, vai trò, nhà cung cấp, sự cố.
People
Sàng lọc, nhận thức, trách nhiệm nhân sự.
Physical
Khu vực, thiết bị, môi trường vật lý.
Technological
Identity, mạng, mã hóa, logging, SDLC.
Tổ chức lựa chọn kiểm soát theo xử lý rủi ro và giải trình trong Statement of Applicability.

---

### [Slide 64]
Quản lý rủi ro biến mục tiêu thành hành động
63
1
Xác định tài sản, đe dọa, lỗ
hổng
2
Đánh giá khả năng và tác động
3
Chọn xử lý: giảm, tránh,
chuyển, chấp nhận
4
Theo dõi hiệu lực và rủi ro còn
lại
Chủ sở hữu rủi ro phải chấp nhận rủi ro còn lại một cách có căn cứ.

---

### [Slide 65]
Lộ trình triển khai ISMS bắt đầu từ phạm vi rõ ràng
64
01
Xác định phạm vi
& bên liên quan
02
Đánh giá rủi ro
& chọn kiểm soát
03
Vận hành, đào tạo
& thu bằng chứng
04
Audit nội bộ, review
& cải tiến
Chứng nhận là kết quả của hệ thống vận hành, không phải đích duy nhất.

---

### [Slide 66]
ISO 27001 không bảo đảm miễn nhiễm tấn công
65
Chứng minh được
• Có phạm vi ISMS xác định
• Có quy trình quản lý rủi ro
• Có kiểm soát và bằng chứng vận hành
• Có cơ chếcải tiến
Không tự động chứng minh
• Mọi hệthống đều an toàn tuyệt đối
• Mọi rủi ro đã bằng 0
• Phạm vi ngoài chứng nhận cũng đạt chuẩn
• Sẽkhông còn sựcố

---

### [Slide 67]
GDPR bảo vệ dữ liệu cá nhân của con người
66
Personal data + processing +
responsibility
GDPR áp dụng theo phạm vi hoạt động và đối tượng được nhắm tới; dữ
liệu cá nhân được bảo vệ bất kể công nghệ xử lý.
Controller
Processor
Data subject

---

### [Slide 68]
Bảy nguyên tắc GDPR định hướng toàn bộ vòng đời dữ liệu
67
1
Hợp pháp, công bằng và minh bạch
2
Giới hạn mục đích
3
Tối thiểu hóa dữ liệu
4
Giới hạn thời gian lưu trữ
5
Đảm bảo chính xác
6
Toàn vẹn và bí mật
7
Trách nhiệm giải trình

---

### [Slide 69]
GDPR trao quyền cho cá nhân và đặt nghĩa vụ cho tổ chức
68
Quyền của cá nhân
• Được thông tin và truy cập
• Sửa dữliệu
• Xóa hoặc hạn chếxửlý
• Di chuyển dữliệu
• Phản đối và quyền liên quan quyết định tự
động
Nghĩa vụ tổ chức
• Có cơ sởpháp lý
• Privacy by design/default
• Bảo mật phù hợp rủi ro
• Quản lý bên xửlý và chuyển dữliệu
• Thông báo vi phạm theo điều kiện luật định

---

### [Slide 70]
Tình huống tích hợp: nền tảng học tập bị xâm nhập
69
Tài khoản quản trịbịphishing; dữliệu sinh viên bịtải xuống; website sau đó bịDDoS
đểche dấu hoạt động.
1.
CIA bịtác động như thếnào?
2.
Zero Trust đã có thể chặn ở điểm nào?
3.
ISMS cần kích hoạt quy trình nào?
4.
Dữ liệu cá nhân kéo theo nghĩa vụ GDPR nào?
Trảlời theo chuỗi: phát hiện → cô lập → bảo toàn bằng chứng → đánh giá vi phạm → thông báo phù hợp
→ cải tiến.

---

### [Slide 71]
Kết thúc chương: bảo mật là một hệ thống quyết định
70
01
CIA xác định điều cần bảo vệ
02
Zero Trust kiểm soát cách truy cập
03
DDoS, APT và Social Engineering đòi hỏi phòng thủ khác nhau
04
ISO 27001 tổ chức hóa quản trị rủi ro
05
GDPR gắn bảo mật với quyền và trách nhiệm dữ liệu
Exit ticket: chọn một dịch vụcủa trường và đềxuất 01 rủi ro + 01 kiểm soát + 01 chỉsốđo hiệu quả.

---
