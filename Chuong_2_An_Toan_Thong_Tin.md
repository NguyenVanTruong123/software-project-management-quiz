# NỘI DUNG NGUYÊN BẢN CHƯƠNG 2: AN TOÀN THÔNG TIN
> Trích xuất chính xác 100% nguyên văn từng slide từ tài liệu: `Chuong_2_Ma_hoa_va_Xac_thuc.pdf`.

### [Slide 1]
CHƯƠNG 2
MÃ HÓA & XÁC THỰC
AES • RSA • MFA • OAUTH 2.0 • PKI • LET’S ENCRYPT

---

### [Slide 2]
Một lần đăng nhập — nhiều lớp bảo vệ
02
Sinh viên truy cập cổng học tập từ Wi-Fi công cộng
01
TLS mã hóa kênh truyền
02
MFA kiểm tra thêm một yếu tố
03
OAuth giới hạn quyền ứng dụng
04
Chứng chỉ gắn khóa với tên miền
Mỗi lớp giải một câu hỏi khác nhau; thiếu một lớp có thể phá vỡ toàn bộ trải nghiệm tin cậy.

---

### [Slide 3]
Sau chương này, sinh viên có thể…
03
• Phân biệt mã hóa đối xứng và bất đối xứng
• Chọn AES mode, nonce, padding và quản lý khóa phù hợp
• Dùng OpenSSL/PyCryptodome cho AES, RSA-OAEP và RSA-PSS
• Thiết kếMFA và giải thích OAuth 2.0 + PKCE
• Đọc chuỗi chứng chỉvà tựđộng hóa Let’s Encrypt
Hiểu → thao tác → thiết kế → đánh giá

---

### [Slide 4]
Bản đồ học tập Chương 2
04
1
AES
Bảo mật dữ liệu
2
RSA
Khóa & chữ ký
3
MFA + OAuth
Danh tính & quyền
4
PKI + ACME
Niềm tin trên web

---

### [Slide 5]
Khởi động: chọn phát biểu đúng nhất
05
Mã hóa và xác thực khác nhau ở đâu?
A. Mã hóa chứng minh danh tính
B. Xác thực luôn giữ dữ liệu bí mật
C. Mã hóa bảo vệ nội dung; xác thực kiểm tra chủ thể
D. Hai khái niệm hoàn toàn giống nhau
Đáp án C — trong hệ thống thực tế, chúng phối hợp nhưng không thay thế nhau.

---

### [Slide 6]
PHẦN 1
AES & RSA
Từ khối dữ liệu, khóa phiên đến chữ ký số

---

### [Slide 7]
Mã hóa, băm và chữ ký số không đồng nghĩa
07
GÓC NHÌN 1
GÓC NHÌN 2
• Mã hóa: có thể giải mã bằng khóa
• Băm: một chiều, tạo digest
• MAC: toàn vẹn + khóa bí mật
• Chữ ký số: khóa riêng ký
• Khóa công khai xác minh
• Không tự động giữ nội dung bí mật

---

### [Slide 8]
Đối xứng và bất đối xứng bổ trợ nhau
08
GÓC NHÌN 1
GÓC NHÌN 2
• Một khóa bí mật chung
• Nhanh, phù hợp dữliệu lớn
• Bài toán: phân phối khóa
• Cặp khóa công khai/riêng
• Chậm hơn, phù hợp khóa nhỏ/chữký
• Bài toán: tin khóa công khai

---

### [Slide 9]
AES là mã khối đối xứng tiêu chuẩn
09
Khối 128 bit • khóa 128 / 192 / 256 bit
AES biến đổi từng khối 128 bit qua nhiều vòng. AES-128, AES-192 và AES-256 lần
lượt dùng 10, 12 và 14 vòng.
SubBytes
ShiftRows
MixColumns

---

### [Slide 10]
Ba kích thước khóa — cùng kích thước khối
10
AES-128
10 vòng
Hiệu năng tốt; dùng rộng rãi
AES-192
12 vòng
Ít phổ biến hơn
AES-256
14 vòng
Biên an toàn khóa lớn hơn

---

### [Slide 11]
Mode quyết định cách AES xử lý nhiều khối
11
Mode
Bí mật
Toàn vẹn
Lưu ý
ECB
Có hạn chế
Không
Lộ mẫu
CBC
Có
Không
IV + padding
CTR
Có
Không
Nonce không lặp
GCM
Có
Có
AEAD; ưu tiên thực hành

---

### [Slide 12]
ECB làm lộ cấu trúc dữ liệu
12
Khối giống nhau → ciphertext giống
nhau
ECB không trộn thông tin giữa các khối. Vì vậy hình ảnh, biểu mẫu hoặc bản ghi
lặp có thể để lộ mẫu dù nội dung đã bị mã hóa.
Deterministic
Pattern leak
Avoid

---

### [Slide 13]
CBC liên kết mỗi khối với khối trước
13
1
IV ngẫu nhiên
2
XOR với plaintext
3
AES encrypt
4
Ciphertext kế tiếp
CBC cần padding và cơ chế xác thực riêng; sai thông báo lỗi có thể tạo padding oracle.

---

### [Slide 14]
CTR biến AES thành dòng khóa
14
1
Nonce + counter
2
AES tạo keystream
3
XOR plaintext
4
Ciphertext
Không cần padding; tuyệt đối không lặp nonce/counter với cùng khóa.

---

### [Slide 15]
GCM cung cấp mã hóa có xác thực
15
Confidentiality + Integrity + Authenticity
AES-GCM trả về ciphertext và authentication tag; có thể xác thực thêm AAD mà
không mã hóa AAD.
Nonce
Ciphertext
Tag

---

### [Slide 16]
Nonce, IV và salt có vai trò khác nhau
16
GÓC NHÌN 1
GÓC NHÌN 2
• Nonce/IV: làm mỗi lần mã hóa khác nhau
• Không nhất thiết bí mật
• Quy tắc ngẫu nhiên/duy nhất tùy mode
• Salt: đầu vào KDF cho mật khẩu
• Chống bảng băm dựng sẵn
• Lưu cùng dữ liệu dẫn xuất được

---

### [Slide 17]
Nonce reuse trong GCM có thể phá bảo mật
17
Một khóa + một nonce: chỉ dùng một lần
Lặp nonce làm lộ quan hệ giữa plaintext và có thể phá khả năng xác thực. Thiết
kế bộ đếm, random đủ dài và cơ chế chống reset.
Unique
Persist
Monitor

---

### [Slide 18]
Padding chỉ cần cho một số mode
18
GÓC NHÌN 1
GÓC NHÌN 2
• CBC cần dữ liệu đủ khối
• PKCS#7 thêm N byte giá trị N
• Luôn kiểm tra lỗi đồng nhất
• CTR/GCM hoạt động như dòng
• Không cần PKCS#7
• Tag thất bại → từ chối toàn bộ

---

### [Slide 19]
Khóa quan trọng hơn việc chọn tên thuật toán
19
01
Sinh khóa
CSPRNG; độ dài phù hợp
02
Lưu khóa
KMS/HSM; tách khỏi dữ liệu
03
Sử dụng
Quyền tối thiểu; audit
04
Luân chuyển
Phiên bản hóa; thu hồi; hủy an toàn
Không hard-code khóa trong mã nguồn hoặc đẩy khóa lên Git.

---

### [Slide 20]
OpenSSL: mã hóa AES từ mật khẩu
20
openssl enc -aes-256-cbc -salt -pbkdf2 \
-in diem.csv -out diem.csv.enc
openssl enc -d -aes-256-cbc -pbkdf2 \
-in diem.csv.enc -out diem.csv
`enc` phù hợp minh họa CBC; OpenSSL không hỗ trợ GCM qua lệnh enc. Ứng dụng nên dùng API AEAD.

---

### [Slide 21]
OpenSSL: kiểm tra sai mật khẩu và tính toàn vẹn
21
sha256sum diem.csv
openssl enc -d -aes-256-cbc -pbkdf2 \
-in diem.csv.enc -out thu.csv
sha256sum thu.csv
CBC encryption không tự xác thực dữ liệu. Hash đối chiếu chỉ hữu ích nếu digest gốc được bảo vệ.

---

### [Slide 22]
PyCryptodome: AES-GCM tối thiểu
22
from Crypto.Cipher import AES
from Crypto.Random import get_random_bytes
key = get_random_bytes(32)
c = AES.new(key, AES.MODE_GCM)
ct, tag = c.encrypt_and_digest(data)
# Lưu: c.nonce + tag + ct
Khi giải mã: tạo cipher với nonce, rồi decrypt_and_verify(ct, tag). Nếu tag sai, không sử dụng plaintext.

---

### [Slide 23]
Thực hành AES: nhìn thấy điều gì khi dữ liệu đổi?
23
Hạng mục
Nhiệm vụ
Bước 1
Mã hóa cùng file hai lần; so sánh ciphertext
Bước 2
Sửa 1 byte ciphertext; thử giải mã GCM
Bước 3
Ghi lại nonce, tag, ciphertext
Bước 4
Giải thích vì sao tag thất bại
Sản phẩm nộp: lệnh/mã nguồn + ảnh kết quả + 5 câu giải thích.

---

### [Slide 24]
Checkpoint AES
24
Yêu cầu nào quan trọng nhất khi dùng AES-GCM?
A. Giữ nonce bí mật
B. Không lặp nonce với cùng khóa
C. Thêm PKCS#7 padding
D. Dùng ECB trước GCM
Đáp án B — nonce thường được gửi công khai nhưng phải duy nhất theo khóa.

---

### [Slide 25]
RSA dùng một cặp khóa có quan hệ toán học
25
Public key chia sẻ • private key giữ bí
mật
Khóa công khai có thể dùng để mã hóa hoặc xác minh; khóa riêng dùng để giải
mã hoặc ký — tùy scheme.
n
e
d

---

### [Slide 26]
Trực giác RSA: dễ nhân, khó phân tích thừa số
26
1
Chọn p, q
2
Tính n = p×q
3
Chọn e
4
Suy ra d
Thực tế phải dùng thư viện chuẩn; không tự cài đặt số học RSA cho hệ thống thật.

---

### [Slide 27]
Sinh khóa RSA là một quy trình an toàn
27
01
Entropy
Nguồn ngẫu nhiên mật mã
02
Kích thước
Tối thiểu theo chính sách; thường 2048+ bit
03
Định dạng
PKCS#8 cho private key
04
Bảo vệ
Mật khẩu mạnh, quyền file, HSM/KMS
Khóa riêng bị lộ đồng nghĩa mất khả năng bí mật hoặc giả mạo chữ ký.

---

### [Slide 28]
RSA không mã hóa trực tiếp dữ liệu lớn
28
Giới hạn kích thước + chi phí cao
RSA thường bảo vệ khóa phiên AES. Dữ liệu thực được AES-GCM mã hóa — đây
là hybrid encryption.
Small key
AES payload
Envelope

---

### [Slide 29]
RSA-OAEP là scheme mã hóa có padding
29
OAEP ngẫu nhiên hóa ciphertext
OAEP dùng hàm băm và mask generation function; tránh dùng raw RSA. OAEP
không cung cấp chữ ký.
Encrypt
Randomized
Not signature

---

### [Slide 30]
Mã hóa và ký dùng hướng khóa khác nhau
30
GÓC NHÌN 1
GÓC NHÌN 2
• Mã hóa cho B: dùng public key của B
• Chỉ B có private key giải mã
• Mục tiêu: bí mật
• A ký: dùng private key của A
• Mọi người dùng public key A xác minh
• Mục tiêu: nguồn gốc + toàn vẹn

---

### [Slide 31]
RSA-PSS là scheme chữ ký hiện đại
31
Hash → PSS encode → RSA signature
Người xác minh tính lại digest và kiểm chữ ký bằng public key. PSS dùng salt để
tăng an toàn chứng minh.
SHA-256
Salt
Verify

---

### [Slide 32]
OpenSSL: sinh khóa và RSA-OAEP
32
openssl genpkey -algorithm RSA \
-pkeyopt rsa_keygen_bits:3072 -out private.pem
openssl pkey -in private.pem -pubout -out public.pem
openssl pkeyutl -encrypt -pubin -inkey public.pem \
-pkeyopt rsa_padding_mode:oaep -in key.bin -out key.enc
Giải mã dùng -decrypt với private.pem. Chỉ mã hóa dữ liệu nhỏ như khóa phiên.

---

### [Slide 33]
OpenSSL: ký và xác minh SHA-256
33
openssl dgst -sha256 -sign private.pem \
-out message.sig message.txt
openssl dgst -sha256 -verify public.pem \
-signature message.sig message.txt
Trong ứng dụng mới, cấu hình RSA-PSS rõ ràng hoặc dùng API EVP phù hợp; không nhầm ký với “mã hóa bằng khóa riêng”.

---

### [Slide 34]
PyCryptodome: OAEP và PSS
34
cipher = PKCS1_OAEP.new(pub, hashAlgo=SHA256)
wrapped = cipher.encrypt(aes_key)
h = SHA256.new(message)
sig = pss.new(private).sign(h)
pss.new(public).verify(h, sig)
Bắt ngoại lệ ValueError khi OAEP/PSS kiểm tra thất bại; không tiếp tục xử lý dữ liệu không xác thực.

---

### [Slide 35]
Hybrid encryption kết hợp tốc độ và phân phối khóa
35
1
Sinh khóa AES phiên
2
AES-GCM mã hóa dữ liệu
3
RSA-OAEP bọc khóa AES
4
Gửi envelope
Envelope gồm wrapped key + nonce + tag + ciphertext + metadata thuật toán.

---

### [Slide 36]
Chọn AES hay RSA theo nhiệm vụ
36
Nhiệm vụ
AES
RSA
Khuyến nghị
Dữ liệu lớn
Tốt
Không
AES-GCM
Chia sẻ khóa phiên
Cần kênh
Tốt
RSA-OAEP
Chữ ký
Không
Tốt
RSA-PSS
Hiệu năng
Nhanh
Chậm
Kết hợp

---

### [Slide 37]
Các lỗi mật mã thường gặp
37
GÓC NHÌN 1
GÓC NHÌN 2
• Tự thiết kế thuật toán/protocol
• ECB hoặc CBC không MAC
• Nonce reuse
• Hard-code key
• Raw RSA / PKCS#1 v1.5 encryption
• Không kiểm tra tag/signature
• Thông báo lỗi quá chi tiết
• Không có kế hoạch rotation

---

### [Slide 38]
Mini case: gửi bảng điểm cho đối tác
38
File 80 MB cần giữ bí mật, phát hiện sửa đổi và chỉ đối tác được mở.
1.
Thuật toán nào xử lý file?
2.
Khóa phiên được chuyển thế nào?
3.
Metadata nào phải gửi kèm?
Đề xuất: AES-GCM cho file; RSA-OAEP bọc khóa; ký envelope nếu cần xác minh người gửi.

---

### [Slide 39]
Checkpoint mật mã
39
Cách tốt nhất để bảo vệ file 500 MB cho người nhận có RSA public key?
A. RSA mã hóa toàn file
B. AES-GCM file; RSA-OAEP mã hóa khóa AES
C. Hash file rồi bỏ plaintext
D. ECB rồi ký nonce
Đáp án B — mô hình mã hóa lai.

---

### [Slide 40]
PHẦN 2
MFA & OAuth 2.0
Xác thực chủ thể — ủy quyền ứng dụng

---

### [Slide 41]
Ba nhóm yếu tố xác thực
41
Biết
Mật khẩu / PIN
Something you know
Có
Điện thoại / khóa bảo mật
Something you have
Là
Vân tay / khuôn mặt
Something you are

---

### [Slide 42]
2FA là một trường hợp của MFA
42
Hai yếu tố phải thuộc hai loại khác nhau
Hai mật khẩu không phải 2FA. Một thiết bị mật mã được mở bằng sinh trắc học
có thể là multi-factor authenticator.
Distinct factors
Independent
Bound

---

### [Slide 43]
Mật khẩu đơn lẻ thất bại theo nhiều đường
43
Phishing • reuse • credential stuffing •
malware
MFA làm kẻ tấn công phải vượt qua thêm yếu tố, nhưng sức mạnh phụ thuộc
phương thức và quy trình khôi phục.
Prevent
Detect
Recover

---

### [Slide 44]
Không phải phương thức MFA nào cũng mạnh như nhau
44
Phương thức
Tiện dụng
Chống phishing
Rủi ro
SMS OTP
Cao
Thấp
SIM swap
TOTP app
Khá
Thấp
Phishing relay
Push
Cao
Trung bình
MFA fatigue
FIDO/passkey
Cao
Cao
Quản lý thiết bị

---

### [Slide 45]
Phishing-resistant MFA ràng buộc với dịch vụ thật
45
FIDO2 / WebAuthn / passkeys
Authenticator ký thử thách cho đúng origin; bí mật không được gửi cho website
giả. NIST yêu cầu cung cấp lựa chọn chống phishing ở AAL2.
Origin bound
Challenge
Public key

---

### [Slide 46]
Xác thực thích ứng dùng ngữ cảnh để tăng/giảm ma sát
46
1
Thu tín hiệu
2
Tính rủi ro
3
Allow / step-up
4
Giám sát phiên
Tín hiệu: thiết bị, vị trí, IP, thời gian, hành vi, độ nhạy tài nguyên.

---

### [Slide 47]
Vòng đời MFA phải bao gồm khôi phục
47
01
Đăng ký
Xác minh người dùng; 2 thiết bị nếu phù hợp
02
Sử dụng
Rate limit; chống replay
03
Mất thiết bị
Recovery code; helpdesk xác minh
04
Thu hồi
Hủy binding; thông báo người dùng
Kẻ tấn công thường nhắm quy trình reset yếu thay vì phá thuật toán.

---

### [Slide 48]
Push bombing biến sự tiện lợi thành áp lực
48
Nhiều yêu cầu → người dùng bấm
“Approve”
Giảm thiểu bằng number matching, rate limit, hiển thị ngữ cảnh, cảnh báo và ưu
tiên phương thức chống phishing.
Context
Rate limit
Report

---

### [Slide 49]
Bài tập: thiết kế MFA cho cổng sinh viên
49
Sinh viên có điện thoại; giảng viên xử lý điểm; quản trị viên truy cập hệ thống lõi.
1.
Nhóm nào cần assurance cao nhất?
2.
Phương thức chính và dự phòng?
3.
Khôi phục tài khoản thế nào?
Không dùng một chính sách cho mọi vai trò; cân bằng rủi ro, chi phí và khả năng tiếp cận.

---

### [Slide 50]
OAuth 2.0 là khung ủy quyền
50
Delegated access — không phải giao
thức xác thực
Ứng dụng nhận quyền truy cập giới hạn tới tài nguyên mà không cần biết mật
khẩu người dùng. Đăng nhập thường cần OpenID Connect bên trên OAuth.
Authorization
Scoped
Token

---

### [Slide 51]
Bốn vai trò cốt lõi của OAuth 2.0
51
Resource Owner
Người sở hữu quyền
Client
Ứng dụng xin quyền
Authorization Server
Cấp code/token
Resource Server
API bảo vệ tài nguyên

---

### [Slide 52]
Authorization Code Flow tách trình duyệt và token
52
1
Client chuyển hướng
2
Người dùng đồng ý
3
Nhận authorization code
4
Đổi code lấy token
Code ngắn hạn đi qua front channel; token nhận tại token endpoint.

---

### [Slide 53]
PKCE ràng buộc authorization code với client
53
code_verifier → SHA-256 →
code_challenge
Client gửi challenge trước; khi đổi code phải chứng minh verifier. Kẻ đánh cắp
code không có verifier sẽ thất bại.
S256
Verifier
Binding

---

### [Slide 54]
Access token và refresh token có vòng đời khác nhau
54
GÓC NHÌN 1
GÓC NHÌN 2
• Access token: gọi API
• Ngắn hạn
• Giới hạn audience/scope
• Có thể là bearer token
• Refresh token: xin access token mới
• Dài hơn, nhạy cảm hơn
• Rotation / sender-constrained
• Thu hồi khi rủi ro

---

### [Slide 55]
Scope thể hiện quyền tối thiểu có chủ đích
55
read:profile ≠ write:grades
Consent phải rõ ứng dụng nào, dữ liệu nào, mục đích nào. Resource server vẫn
phải kiểm tra audience, scope và quyền nghiệp vụ.
Least scope
Audience
Policy

---

### [Slide 56]
OAuth bị tấn công ở redirect, code và token
56
GÓC NHÌN 1
GÓC NHÌN 2
• Redirect URI lỏng
• CSRF / mix-up
• Code interception
• Open redirect
• Token leakage trong URL/log
• Bearer token bị replay
• Refresh token không rotation
• Scope quá rộng

---

### [Slide 57]
Checklist OAuth 2.0 hiện đại
57
01
Flow
Authorization Code + PKCE
02
Redirect
So khớp URI chính xác; state
03
Token
TLS; ngắn hạn; rotation
04
API
Kiểm audience, issuer, scope; không tin client
RFC 9700 loại bỏ hoặc hạn chế nhiều mô hình cũ như implicit grant trong thiết kế mới.

---

### [Slide 58]
Thực hành OAuth: đọc một yêu cầu ủy quyền
58
Hạng mục
Nhiệm vụ
client_id
Ứng dụng nào đang xin quyền?
redirect_uri
Kết quả được trả về đâu?
scope
Ứng dụng xin quyền gì?
state + PKCE
Chống CSRF và chặn code interception
Nhóm khoanh vùng tham số có thể bị sửa và nêu kiểm tra phía authorization server.

---

### [Slide 59]
Checkpoint MFA & OAuth
59
Phát biểu nào đúng?
A. OAuth tự xác thực người dùng
B. SMS OTP chống phishing tuyệt đối
C. PKCE ràng buộc code với client
D. Scope càng rộng càng an toàn
Đáp án C. OAuth là ủy quyền; OIDC mới bổ sung lớp danh tính đăng nhập.

---

### [Slide 60]
PHẦN 3
PKI & CHỨNG CHỈ SỐ
Chuỗi tin cậy, TLS và tự động hóa Let’s Encrypt

---

### [Slide 61]
PKI gắn danh tính với khóa công khai
61
CA
Ký và phát hành chứng chỉ
RA
Kiểm tra yêu cầu/danh tính
Repository
Phân phối cert/CRL
Relying party
Xác minh và quyết định tin

---

### [Slide 62]
Một chứng chỉ X.509 chứa gì?
62
Trường
Ý nghĩa
Ví dụ
Câu hỏi
Subject / SAN
Danh tính
example.edu
Đúng tên miền?
Issuer
CA phát hành
Intermediate CA
Có tin CA?
Validity
Thời gian
NotBefore/After
Còn hạn?
Public key
Khóa + thuật toán
RSA/ECDSA
Đủ mạnh?
Extensions
Ràng buộc dùng
Key Usage
Đúng mục đích?

---

### [Slide 63]
Chuỗi tin cậy đi từ leaf tới trust anchor
63
1
Leaf certificate
2
Intermediate CA
3
Root CA
4
Trust store
Máy chủ gửi leaf và intermediate; root thường đã có sẵn trong hệ điều hành/trình duyệt.

---

### [Slide 64]
Trình xác minh kiểm nhiều điều kiện
64
01
Tên
SAN khớp hostname
02
Chữ ký
Mỗi cert được issuer ký hợp lệ
03
Thời gian
Nằm trong validity
04
Chính sách
Key usage, basic constraints, revocation
Chỉ “có chứng chỉ” không đồng nghĩa chứng chỉ hợp lệ cho kết nối hiện tại.

---

### [Slide 65]
TLS 1.3 dùng chứng chỉ để xác thực máy chủ
65
1
ClientHello
2
ServerHello + Certificate
3
CertificateVerify
4
Finished → khóa phiên
Chứng chỉ không trực tiếp mã hóa toàn bộ phiên; handshake thiết lập khóa đối xứng cho dữ liệu ứng dụng.

---

### [Slide 66]
Let’s Encrypt + ACME tự động hóa cấp chứng chỉ
66
1
ACME account
2
Order tên miền
3
Domain challenge
4
Issue + install
Let’s Encrypt là CA miễn phí, tự động và mở; ACME client thực hiện phần lớn quy trình.

---

### [Slide 67]
Chọn challenge theo kiến trúc
67
Challenge
Cách chứng minh
Phù hợp
Lưu ý
HTTP-01
File qua cổng 80
Web đơn giản
Không wildcard
DNS-01
TXT record DNS
Wildcard / nhiều máy
Bảo vệ API DNS
TLS-ALPN-01
TLS đặc biệt cổng 443
Hệ thống tích hợp
Ít client hỗ trợ

---

### [Slide 68]
Chứng chỉ ngắn hạn đòi hỏi tự động hóa
68
Mặc định hiện tại: 90 ngày
Let’s Encrypt khuyến nghị gia hạn chứng chỉ 90 ngày sau khoảng 60 ngày. Lộ trình
ngành sẽ giảm thời hạn tối đa; đến 2028 Let’s Encrypt dự kiến 45 ngày.
Auto renew
Monitor
Reload

---

### [Slide 69]
Tình huống tích hợp: triển khai portal.example.edu
69
Cổng mới cần HTTPS, đăng nhập trường và cho ứng dụng lịch đọc thời khóa biểu.
1.
AES/RSA xuất hiện ở lớp nào?
2.
MFA áp dụng cho ai?
3.
OAuth scope nào tối thiểu?
4.
ACME challenge nào phù hợp?
Thiết kế phải bao gồm rotation token, renew certificate, bảo vệ private key và giám sát lỗi.

---

### [Slide 70]
Kết thúc chương: ghép đúng lớp, đúng mục tiêu
70
01
AES-GCM bảo vệ dữ liệu lớn; nonce không lặp
02
RSA-OAEP bọc khóa; RSA-PSS ký
03
MFA mạnh ưu tiên khả năng chống phishing
04
OAuth 2.0 ủy quyền với Code + PKCE + scope hẹp
05
PKI và ACME tạo niềm tin có thể tự động vận hành
Exit ticket: vẽ kiến trúc cổng sinh viên và đánh dấu 01 khóa, 01 token, 01 chứng chỉ, 01 điểm xác thực.

---
