# BỘ CÂU HỎI ÔN TẬP CHƯƠNG 2: MÃ HÓA VÀ XÁC THỰC
> **Môn học**: An toàn thông tin (Information Security)  
> **Tài liệu nguồn**: `Chuong_2_Ma_hoa_va_Xac_thuc.pdf` (Toàn bộ 70 Slide)  
> **Quy ước thiết kế**:
> - Câu hỏi tình huống và tư duy logic cao, phân tích sâu bản chất mật mã học, bám sát từng slide bài giảng.
> - Các phương án nhiễu phản ánh các hiểu lầm kinh điển trong thực tế lập trình bảo mật (ECB mode, Nonce reuse, RSA dữ liệu lớn...).
> - Các câu có nhiều tiêu chí/đặc điểm đúng được thiết kế dạng **[CHỌN NHIỀU ĐÁP ÁN]**.
> - Vị trí các đáp án đúng và nhiễu được **xáo trộn ngẫu nhiên (A, B, C, D, E, F)** để rèn luyện phản xạ đọc kỹ đề bài.

---
### Câu 1 [CHỌN 1 ĐÁP ÁN] (Slide 5, 7)
Trong các cuộc thảo luận kỹ thuật, ba khái niệm **Mã hóa (Encryption)**, **Hàm băm (Hashing)** và **Chữ ký số (Digital Signature)** thường bị đánh đồng. Phát biểu nào sau đây phân định chính xác bản chất chức năng của chúng?
- A. Mã hóa là phép biến đổi một chiều không thể giải mã, dùng để lưu mật khẩu an toàn
- B. Mã hóa bảo vệ tính bí mật (chuyển đổi hai chiều có khóa); Hàm băm bảo vệ tính toàn vẹn (biến đổi một chiều, không thể dịch ngược); Chữ ký số kết hợp băm và khóa bất đối xứng để xác thực nguồn gốc và chống chối bỏ
- C. Ba khái niệm này có thuật toán hoàn toàn giống nhau, chỉ khác nhau ở tên gọi thương mại
- D. Chữ ký số dùng để giữ bí mật tuyệt đối nội dung của một bức thư điện tử để người trung gian không đọc được

> **Đáp án đúng**: **B**  
> **Giải thích**: Slide 5 & 7 chỉ rõ: *Mã hóa bảo vệ nội dung bí mật (2 chiều); Băm là dấu vân tay dữ liệu bảo vệ tính toàn vẹn (1 chiều); Chữ ký số chứng minh danh tính người gửi và tính toàn vẹn (chống chối bỏ)*.

---
### Câu 2 [CHỌN NHIỀU ĐÁP ÁN] (Slide 8, 35, 36)
So sánh giữa hai hệ thống mật mã **Mã hóa đối xứng (Symmetric Encryption - ví dụ AES)** và **Mã hóa bất đối xứng (Asymmetric Encryption - ví dụ RSA)**:
- [ ] A. Trong thực tế người ta thường dùng trực tiếp thuật toán RSA để mã hóa các bộ phim chất lượng 4K dung lượng hàng chục Gigabyte
- [ ] B. Mã hóa đối xứng hoàn toàn không cần giữ bí mật khóa vì khóa này được công khai cho tất cả mọi người trên mạng
- [ ] C. Mã hóa đối xứng: Sử dụng cùng một khóa bí mật (Secret Key) duy nhất cho cả quá trình mã hóa và giải mã; Ưu điểm là tốc độ xử lý cực nhanh, phù hợp mã hóa khối lượng dữ liệu lớn
- [ ] D. Nhược điểm của mã hóa bất đối xứng là tốc độ tính toán chậm hơn mã hóa đối xứng từ hàng trăm đến hàng nghìn lần do các phép toán số học mô-đun trên số nguyên lớn
- [ ] E. Mô hình mã hóa lai (Hybrid Encryption - áp dụng trong giao thức HTTPS/TLS): Dùng RSA hoặc ECC để trao đổi an toàn một khóa phiên bí mật (Session Key), sau đó dùng AES với khóa phiên này để mã hóa toàn bộ dữ liệu truyền tải thực tế
- [ ] F. Mã hóa bất đối xứng: Sử dụng một cặp khóa có quan hệ toán học gồm Khóa công khai (Public Key) và Khóa bí mật (Private Key); Ưu điểm là giải quyết triệt để bài toán phân phối khóa an toàn qua kênh truyền công cộng

> **Đáp án đúng**: **C, D, E, F**  
> **Giải thích**: Slide 8, 28, 35, 36: *Đối xứng (AES): 1 khóa, nhanh, mã hóa dữ liệu lớn; Bất đối xứng (RSA): Cặp khóa Public/Private, chậm, giải quyết bài toán phân phối khóa; Hybrid Encryption kết hợp tốc độ của AES và khả năng phân phối khóa của RSA*.

---
### Câu 3 [CHỌN NHIỀU ĐÁP ÁN] (Slide 9, 10)
Về thuật toán mã khối tiêu chuẩn **AES (Advanced Encryption Standard)**:
- [ ] A. Khóa 256 bit (AES-256) cung cấp không gian khóa khổng lồ ($2^{256}$ khả năng), an toàn trước mọi hình thức tấn công vét cạn (Brute-force) bằng siêu máy tính hiện nay
- [ ] B. Kích thước khối (Block size) của AES luôn luôn cố định là **128 bit** (tương đương 16 byte), bất kể kích thước khóa là bao nhiêu
- [ ] C. AES hỗ trợ 3 kích thước chiều dài khóa tiêu chuẩn: **128 bit** (10 vòng), **192 bit** (12 vòng), và **256 bit** (14 vòng)
- [ ] D. AES có thể tự động thay đổi kích thước khối thành 256 bit hoặc 512 bit tùy theo yêu cầu của lập trình viên
- [ ] E. AES-128 sử dụng khối 128 bit, còn AES-256 bắt buộc phải sử dụng khối 256 bit
- [ ] F. AES là thuật toán mã hóa khối đối xứng (Symmetric Block Cipher) được chuẩn hóa bởi NIST

> **Đáp án đúng**: **A, B, C, F**  
> **Giải thích**: Slide 9 & 10: *AES là chuẩn mã khối đối xứng. Block size luôn CỐ ĐỊNH là 128 bit. Ba kích thước khóa: 128, 192, 256 bit với số vòng lặp tương ứng là 10, 12, 14 vòng*.

---
### Câu 4 [CHỌN NHIỀU ĐÁP ÁN] (Slide 11, 12, 13, 14, 15)
Chế độ hoạt động (Mode of Operation) quyết định cách thức AES áp dụng cho dữ liệu lớn hơn 16 byte. Hãy chọn các nhận định đúng về các chế độ hoạt động của AES:
- [ ] A. Chế độ GCM không cần dùng đến Nonce hay IV mà vẫn hoạt động bình thường
- [ ] B. **CBC (Cipher Block Chaining)**: Khối sau phụ thuộc vào khối trước qua phép XOR; Cần một Vectơ khởi tạo ngẫu nhiên (IV - Initialization Vector) cho khối đầu tiên; Đảm bảo tính bảo mật nhưng không cung cấp cơ chế kiểm tra tính toàn vẹn tích hợp
- [ ] C. **CTR (Counter Mode)**: Biến mã khối thành mã dòng (Stream Cipher) bằng cách mã hóa một bộ đếm (Nonce + Counter); Cho phép giải mã song song và truy cập ngẫu nhiên
- [ ] D. **ECB (Electronic Codebook)**: Mã hóa độc lập từng khối 16 byte bằng cùng một khóa; Nhược điểm chí mạng là làm **lộ cấu trúc dữ liệu** (các khối bản rõ giống nhau sẽ tạo ra các khối bản mã giống hệt nhau - ví dụ hình ảnh chú chim cánh cụt Tux), tuyệt đối không dùng trong thực tế
- [ ] E. **GCM (Galois/Counter Mode)**: Cung cấp tính năng Mã hóa có xác thực kèm dữ liệu bổ sung (AEAD - Authenticated Encryption with Associated Data); Đồng thời vừa bảo vệ Tính bí mật vừa kiểm tra Tính toàn vẹn và nguồn gốc dữ liệu qua Thẻ xác thực (Authentication Tag)
- [ ] F. Chế độ ECB là chế độ hiện đại và bảo mật cao nhất hiện nay, được khuyến nghị dùng mặc định cho mọi trang web ngân hàng

> **Đáp án đúng**: **B, C, D, E**  
> **Giải thích**: Slide 11–15: *ECB lộ cấu trúc dữ liệu; CBC xâu chuỗi cần IV; CTR biến thành dòng khóa; GCM cung cấp mã hóa có xác thực (AEAD - chuẩn hiện đại nhất)*.

---
### Câu 5 [CHỌN 1 ĐÁP ÁN] (Slide 16, 17)
Lỗi nghiêm trọng nào có thể dẫn đến việc **phá vỡ hoàn toàn tính bảo mật** của thuật toán mã hóa hiện đại **AES-GCM**?
- A. Không mã hóa phần dữ liệu bổ sung AAD (Associated Data)
- B. Dùng khóa có độ dài 128 bit thay vì 256 bit
- C. Dùng dữ liệu đầu vào có độ dài không chia hết cho 16 byte
- D. Tái sử dụng cùng một giá trị Nonce (Number used once) với cùng một khóa bí mật (Nonce reuse)

> **Đáp án đúng**: **D**  
> **Giải thích**: Slide 17 nêu rõ cảnh báo sống còn: *Nonce reuse trong AES-GCM có thể làm lộ khóa xác thực (GHASH key), phá hủy hoàn toàn cơ chế bảo vệ tính toàn vẹn và cho phép kẻ tấn công giả mạo hoặc giải mã bản tin*.

---
### Câu 6 [CHỌN NHIỀU ĐÁP ÁN] (Slide 25, 26, 28, 29, 31)
Về thuật toán mã hóa và chữ ký số bất đối xứng **RSA**:
- [ ] A. Khóa công khai (Public Key) dùng để giải mã dữ liệu bí mật gửi cho mình, còn Khóa bí mật (Private Key) được gửi rộng rãi cho mọi người
- [ ] B. RSA không được thiết kế để mã hóa trực tiếp dữ liệu dung lượng lớn (kích thước dữ liệu mã hóa luôn bị giới hạn nhỏ hơn kích thước khóa)
- [ ] C. Dựa trên bài toán toán học: Rất dễ nhân hai số nguyên tố lớn với nhau ($n = p \times q$), nhưng cực kỳ khó để phân tích một hợp số $n$ khổng lồ (2048 – 4096 bit) ngược trở lại thành các thừa số nguyên tố
- [ ] D. Chuẩn **RSA-OAEP** là cơ chế mã hóa có đệm ngẫu nhiên hiện đại, chống lại các cuộc tấn công bản mã đã chọn (Chosen Ciphertext Attack)
- [ ] E. Chuẩn **RSA-PSS** là cơ chế tạo chữ ký số hiện đại, an toàn và có tính ngẫu nhiên hóa cao hơn chuẩn cũ PKCS#1 v1.5
- [ ] F. Độ dài khóa an toàn được khuyến nghị cho RSA hiện nay tối thiểu là **2048 bit**, tốt hơn là **3072 bit** hoặc **4096 bit**

> **Đáp án đúng**: **B, C, D, E, F**  
> **Giải thích**: Slide 25, 26, 28, 29, 31: *RSA dựa trên độ khó phân tích thừa số nguyên tố; Khóa tối thiểu 2048 bit; Không mã hóa trực tiếp dữ liệu lớn; Dùng RSA-OAEP để mã hóa và RSA-PSS để ký số*.

---
### Câu 7 [CHỌN 1 ĐÁP ÁN] (Slide 30)
Hướng sử dụng cặp khóa trong **Mã hóa bất đối xứng (Confidentiality)** và **Chữ ký số (Authentication/Integrity)** khác nhau như thế nào?
- A. Cả mã hóa và chữ ký số đều dùng Khóa bí mật của người gửi để xử lý
- B. Mã hóa: Dùng Khóa bí mật của người nhận; Chữ ký số: Dùng Khóa công khai của người nhận
- C. Không có sự khác biệt về hướng sử dụng khóa giữa mã hóa và ký số
- D. Mã hóa: Dùng Khóa công khai của người nhận để mã hóa (chỉ người nhận có Khóa bí mật mới mở được); Chữ ký số: Dùng Khóa bí mật của người gửi để ký (bất kỳ ai có Khóa công khai của người gửi đều xác minh được)

> **Đáp án đúng**: **D**  
> **Giải thích**: Slide 30 phân biệt rõ: *Mã hóa hướng tới người nhận (dùng Public Key người nhận để mã hóa); Ký số chứng minh xuất xứ người gửi (dùng Private Key người gửi để ký)*.

---
### Câu 8 [CHỌN NHIỀU ĐÁP ÁN] (Slide 41, 42, 43, 44)
Về cơ chế **Xác thực đa yếu tố (MFA - Multi-Factor Authentication)**:
- [ ] A. Chỉ cần yêu cầu người dùng đặt mật khẩu dài 30 ký tự là hệ thống tự động đạt chuẩn MFA mà không cần thêm bước nào khác
- [ ] B. 2FA (Two-Factor Authentication) là một trường hợp cụ thể của MFA khi kết hợp đúng 2 yếu tố thuộc 2 nhóm khác nhau
- [ ] C. Nhập mật khẩu tài khoản kèm theo mã PIN gửi qua cùng một form không được coi là 2FA/MFA vì cả hai đều thuộc cùng một nhóm "Something you know"
- [ ] D. Phương thức MFA chống lừa đảo (Phishing-resistant MFA) mạnh nhất hiện nay là khóa bảo mật vật lý chuẩn FIDO2 / WebAuthn vì được ràng buộc mật mã với đúng tên miền dịch vụ thật
- [ ] E. Dựa trên 3 nhóm yếu tố xác thực độc lập: Yếu tố hiểu biết - Something you know (Mật khẩu, PIN); Yếu tố sở hữu - Something you have (Điện thoại nhận OTP, Khóa FIDO2, Thẻ thông minh); Yếu tố sinh trắc - Something you are (Vân tay, Khuôn mặt)
- [ ] F. Không phải phương thức MFA nào cũng an toàn như nhau: Mã OTP gửi qua SMS rất dễ bị tấn công qua kỹ thuật SIM Swap và nghe lén mạng viễn thông

> **Đáp án đúng**: **B, C, D, E, F**  
> **Giải thích**: Slide 41–45: *3 nhóm yếu tố xác thực (know, have, are); MFA phải kết hợp các nhóm khác nhau; SMS OTP có rủi ro cao; FIDO2/WebAuthn là Phishing-resistant MFA mạnh nhất*.

---
### Câu 9 [CHỌN NHIỀU ĐÁP ÁN] (Slide 46, 48)
Các thách thức thực tế và giải pháp hiện đại khi vận hành hệ thống **MFA**:
- [ ] A. Thiết kế vòng đời MFA bắt buộc phải xây dựng cơ chế khôi phục tài khoản an toàn (Backup codes, xác minh danh tính ngoài luồng) phòng khi người dùng làm mất điện thoại hoặc khóa bảo mật
- [ ] B. **Xác thực thích ứng (Adaptive/Risk-based MFA)**: Sử dụng các tín hiệu ngữ cảnh (vị trí địa lý mới, thiết bị lạ, thời gian bất thường) để tự động tăng cường mức độ xác thực khi có rủi ro cao và giảm bớt phiền toái khi ở môi trường an toàn
- [ ] C. Xác thực thích ứng là phương pháp luôn luôn bắt người dùng quét võng mạc mỗi khi mở một tab mới trên trình duyệt
- [ ] D. **Push Bombing (MFA Fatigue)**: Kẻ tấn công liên tục gửi hàng loạt thông báo đẩy (Push Notification) vào ban đêm khiến người dùng mệt mỏi hoặc mất cảnh giác bấm "Chấp thuận" (Approve)
- [ ] E. Cách khắc phục Push Bombing tốt nhất là tắt hoàn toàn thông báo xác thực và không dùng MFA nữa

> **Đáp án đúng**: **A, B, D**  
> **Giải thích**: Slide 46, 47, 48: *Push bombing khai thác sự mệt mỏi; Adaptive MFA đánh giá ngữ cảnh để điều chỉnh ma sát; Vòng đời MFA phải có phương án khôi phục an toàn*.

---
### Câu 10 [CHỌN NHIỀU ĐÁP ÁN] (Slide 50, 51, 54, 55)
Về khung ủy quyền **OAuth 2.0**:
- [ ] A. OAuth 2.0 yêu cầu người dùng phải nhập trực tiếp mật khẩu tài khoản Google/Facebook vào giao diện của ứng dụng bên thứ ba
- [ ] B. **Access Token**: Có thời gian sống ngắn (Short-lived), dùng trực tiếp để gọi API; **Refresh Token**: Có thời gian sống dài hơn, chỉ dùng để đổi lấy Access Token mới khi token cũ hết hạn
- [ ] C. 4 vai trò cốt lõi trong OAuth 2.0: Resource Owner (Chủ tài nguyên/Người dùng), Client (Ứng dụng cần quyền), Resource Server (Máy chủ chứa tài nguyên API), và Authorization Server (Máy chủ cấp quyền/xác thực)
- [ ] D. OAuth 2.0 là một khung ủy quyền (Authorization Framework), cho phép ứng dụng bên thứ ba truy cập có giới hạn vào tài nguyên người dùng mà không cần biết mật khẩu của người dùng
- [ ] E. **Scope**: Đại diện cho phạm vi quyền hạn cụ thể mà Client được phép thực hiện (thực thi nguyên tắc quyền tối thiểu, ví dụ: `read:grades`, `write:profile`)
- [ ] F. Refresh Token có thể được gửi công khai trên thanh địa chỉ URL của trình duyệt

> **Đáp án đúng**: **B, C, D, E**  
> **Giải thích**: Slide 50, 51, 54, 55: *OAuth 2.0 là khung ủy quyền không chia sẻ mật khẩu; 4 vai trò chuẩn; Scope thể hiện quyền tối thiểu; Access Token (ngắn hạn) vs Refresh Token (dài hạn)*.

---
### Câu 11 [CHỌN NHIỀU ĐÁP ÁN] (Slide 52, 53)
Luồng cấp mã ủy quyền kết hợp PKCE (**Authorization Code Flow with PKCE - Proof Key for Code Exchange**) được coi là chuẩn vàng bảo mật hiện đại cho cả ứng dụng Web SPA lẫn ứng dụng Mobile vì lý do gì?
- [ ] A. PKCE loại bỏ hoàn toàn việc sử dụng giao thức HTTPS trong quá trình đăng nhập
- [ ] B. Tách biệt kênh trình duyệt (Front-channel) với kênh trao đổi token máy chủ (Back-channel)
- [ ] C. Luồng này giúp máy chủ của Client hoàn toàn không cần kết nối mạng với Authorization Server
- [ ] D. Trình duyệt chỉ nhận Authorization Code tạm thời (dùng một lần, hết hạn nhanh), không bao giờ nhận trực tiếp Access Token trên URL
- [ ] E. Giúp ngăn chặn triệt để cuộc tấn công đánh chặn Authorization Code (Code Interception Attack) trên các ứng dụng di động công khai (Public Clients) không thể giấu Client Secret
- [ ] F. PKCE tạo ra một cặp khóa bí mật tạm thời gồm **Code Verifier** và chuỗi băm **Code Challenge**

> **Đáp án đúng**: **B, D, E, F**  
> **Giải thích**: Slide 52 & 53: *Authorization Code Flow tách biệt front-channel và back-channel; PKCE dùng Code Verifier/Challenge ràng buộc mã với client ban đầu, chống tấn công đánh chặn mã ủy quyền*.

---
### Câu 12 [CHỌN NHIỀU ĐÁP ÁN] (Slide 61, 62, 63, 64)
Về **Cơ sở hạ tầng khóa công khai (PKI - Public Key Infrastructure)** và **Chứng chỉ số X.509**:
- [ ] A. Chứng chỉ X.509 chứa cả Khóa bí mật (Private Key) của máy chủ bên trong file chứng chỉ tải về
- [ ] B. Trình duyệt sẽ từ chối kết nối và báo lỗi bảo mật màu đỏ nếu: Chứng chỉ hết hạn, Tên miền truy cập không khớp với SAN, hoặc Chữ ký của CA không truy ngược được về một Root CA đáng tin cậy
- [ ] C. Mục đích cốt lõi của PKI là liên kết một Khóa công khai (Public Key) với một Danh tính xác định (Tên miền, Tổ chức, Cá nhân) thông qua Chứng chỉ số
- [ ] D. Thành phần trong chứng chỉ X.509 gồm: Tên chủ thể (Subject), Tên miền hợp lệ (SAN - Subject Alternative Name), Khóa công khai của chủ thể, Thời hạn hiệu lực, và Chữ ký số của Cơ quan cấp chứng chỉ (CA - Certificate Authority)
- [ ] E. Chuỗi tin cậy (Chain of Trust) được xác minh từ Chứng chỉ cuối (Leaf/End-entity) $\rightarrow$ Chứng chỉ trung gian (Intermediate CA) $\rightarrow$ Chứng chỉ gốc (Root CA được cài sẵn trong kho tin cậy Trust Store của Hệ điều hành/Trình duyệt)
- [ ] F. Bất kỳ ai cũng có thể tự tạo chứng chỉ số tự ký (Self-signed) và chứng chỉ này mặc định sẽ được mọi trình duyệt trên thế giới tin tưởng màu xanh mà không cần cài đặt gì

> **Đáp án đúng**: **B, C, D, E**  
> **Giải thích**: Slide 61–64: *PKI gắn danh tính với Public Key; Cấu trúc X.509; Chuỗi tin cậy Leaf -> Intermediate -> Root CA; Các điều kiện kiểm tra hợp lệ (hạn dùng, tên miền, chữ ký CA)*. Chứng chỉ chỉ chứa Public Key, không bao giờ chứa Private Key.

---
### Câu 13 [CHỌN NHIỀU ĐÁP ÁN] (Slide 66, 67, 68)
Tổ chức phi lợi nhuận **Let's Encrypt** và giao thức **ACME (Automated Certificate Management Environment)** đã cách mạng hóa việc bảo mật Web như thế nào?
- [ ] A. Chứng chỉ của Let's Encrypt có thời hạn hiệu lực ngắn (**90 ngày**) nhằm mục đích giảm thiểu thiệt hại nếu khóa bí mật bị lộ và bắt buộc quản trị viên phải áp dụng quy trình gia hạn tự động hóa (Automated Renewal)
- [ ] B. Quản trị viên bắt buộc phải gửi hồ sơ công chứng giấy tờ công ty qua bưu điện mỗi lần muốn gia hạn chứng chỉ Let's Encrypt
- [ ] C. Chứng chỉ Let's Encrypt chỉ có giá trị trên mạng nội bộ LAN, không được các trình duyệt lớn như Chrome hay Firefox công nhận
- [ ] D. Cung cấp chứng chỉ SSL/TLS miễn phí, tin cậy và tự động hóa 100% quá trình cấp mới và gia hạn
- [ ] E. Giao thức ACME tự động hóa quá trình xác minh quyền sở hữu tên miền thông qua 2 cơ chế thử thách chính: **HTTP-01 Challenge** (tạo file xác thực trên máy chủ web) hoặc **DNS-01 Challenge** (tạo bản ghi TXT trên máy chủ DNS, hỗ trợ cấp chứng chỉ Wildcard `*.example.com`)

> **Đáp án đúng**: **A, D, E**  
> **Giải thích**: Slide 66, 67, 68: *Let's Encrypt + ACME tự động hóa cấp chứng chỉ; Challenge HTTP-01 vs DNS-01; Thời hạn ngắn 90 ngày đòi hỏi tự động hóa gia hạn để tăng an toàn*.

---
### Câu 14 [CHỌN NHIỀU ĐÁP ÁN] (Slide 69, 70)
Khi triển khai một cổng dịch vụ trực tuyến an toàn cho trường đại học (`portal.example.edu`) theo tình huống tích hợp cuối chương, kiến trúc bảo mật phối hợp nhiều lớp gồm những thành phần nào?
- [ ] A. **Lớp xác thực người dùng**: Triển khai MFA thích ứng kết hợp khóa FIDO2 cho giảng viên quản lý điểm và quản trị viên hệ thống
- [ ] B. Sử dụng chế độ AES-ECB để mã hóa toàn bộ cơ sở dữ liệu sinh viên nhằm tăng tốc độ truy vấn
- [ ] C. **Lớp dữ liệu**: Sử dụng mã hóa đối xứng AES-256-GCM với Nonce ngẫu nhiên duy nhất cho mỗi bản tin để bảo vệ dữ liệu nhạy cảm lưu trữ
- [ ] D. **Lớp truyền tải**: Sử dụng TLS 1.3 với chứng chỉ số X.509 hợp lệ (tự động hóa qua ACME/Let's Encrypt) để mã hóa toàn bộ kênh truyền và chống nghe lén/giả mạo
- [ ] E. **Lớp ủy quyền ứng dụng**: Triển khai OAuth 2.0 với PKCE để cho phép ứng dụng di động lịch học truy cập đọc thời khóa biểu với quyền tối thiểu (Scope `read:schedule`)
- [ ] F. Kiến trúc tốt nhất là chỉ cần dùng mật khẩu tài khoản đơn giản và tắt bỏ hoàn toàn giao thức HTTPS để website tải nhanh hơn

> **Đáp án đúng**: **A, C, D, E**  
> **Giải thích**: Slide 69 & 70 tổng kết toàn bộ chương: *Mỗi lớp giải quyết một bài toán: TLS mã hóa kênh truyền; AES-GCM bảo vệ dữ liệu lớn; MFA kiểm tra danh tính; OAuth ủy quyền quyền ứng dụng tối thiểu*.
