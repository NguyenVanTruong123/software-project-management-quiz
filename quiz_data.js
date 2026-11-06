// NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM VÀ TỰ LUẬN QUẢN LÝ DỰ ÁN PHẦN MỀM
// Tổng hợp chuẩn 100% slide bài giảng - GV: Vũ Duy Khương (Đại học Thăng Long)
// Phân loại: Single-Select (cân bằng A, B, C, D) & Multi-Select (nhiều đáp án kèm nút kiểm tra)

const MCQ_QUESTIONS = [
  {
    "id": 1,
    "chapter": 1,
    "tag": "Slide 5",
    "type": "multiple",
    "question": "Trong buổi họp khởi động, một khách hàng yêu cầu nhóm phát triển: *\"Hãy xây dựng và duy trì hệ thống bán hàng này liên tục, không cần chốt ngày kết thúc, cứ làm đến khi nào thấy tối ưu nhất thì thôi\"*. Dựa vào định nghĩa chuẩn về **Dự án** trong bài giảng, người quản lý dự án (PM) cần giải thích cho khách hàng hiểu một dự án bắt buộc phải hội tụ đủ những đặc trưng nào sau đây?",
    "options": [
      "A. Phải tạo ra kết quả đầu ra rõ ràng (sản phẩm, dịch vụ bàn giao)",
      "B. Phải có thời gian xác định (có điểm bắt đầu và kết thúc rõ ràng)",
      "C. Bị ràng buộc bởi nguồn lực giới hạn (ngân sách, nhân sự, thiết bị)",
      "D. Là hoạt động vận hành thường nhật (Operations) lặp đi lặp lại vô thời hạn",
      "E. Phải có mục tiêu cụ thể",
      "F. Có thể tùy ý sử dụng nguồn lực không giới hạn của tổ chức"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Theo Slide 5, *Dự án = tập hợp các hoạt động có: Mục tiêu cụ thể • Thời gian xác định • Nguồn lực giới hạn • Kết quả đầu ra rõ ràng*. Hoạt động không có thời hạn kết thúc là vận hành kinh doanh (Operations), không phải dự án.",
    "tip": "Theo Slide 5, *Dự án = tập hợp các hoạt động có: Mục tiêu cụ thể • Thời gian xác..."
  },
  {
    "id": 2,
    "chapter": 1,
    "tag": "Slide 6",
    "type": "multiple",
    "question": "So với việc quản lý một dự án xây dựng cầu đường, việc quản lý một **Dự án phần mềm** gặp nhiều thách thức đặc thù hơn xuất phát từ những đặc điểm bản chất nào sau đây?",
    "options": [
      "A. Mức độ rủi ro cao (công nghệ mới, rủi ro tích hợp, sai lệch ước lượng)",
      "B. Sản phẩm vô hình (khó định lượng trực tiếp tiến độ hoàn thành bằng mắt thường)",
      "C. Phụ thuộc con người nhiều hơn máy móc (năng suất và chất lượng phụ thuộc năng lực lập trình viên)",
      "D. Sản phẩm hữu hình, dễ dàng kiểm đếm khối lượng công việc từng ngày",
      "E. Máy móc tự động hóa đóng vai trò chính, yếu tố con người chỉ là thứ yếu",
      "F. Yêu cầu thay đổi liên tục trong suốt vòng đời dự án"
    ],
    "answer": [
      0,
      1,
      2,
      5
    ],
    "explanation": "Slide 6 chỉ rõ 4 đặc điểm cốt lõi của dự án phần mềm: *Sản phẩm vô hình • Yêu cầu thay đổi liên tục • Phụ thuộc con người nhiều hơn máy móc • Rủi ro cao*.",
    "tip": "Slide 6 chỉ rõ 4 đặc điểm cốt lõi của dự án phần mềm: *Sản phẩm vô hình • Yêu cầ..."
  },
  {
    "id": 3,
    "chapter": 1,
    "tag": "Slide 7",
    "type": "multiple",
    "question": "Theo định nghĩa trong giáo trình, hoạt động **Quản lý dự án** áp dụng kiến thức, kỹ năng, công cụ và kỹ thuật vào các hoạt động nhằm đáp ứng những yêu cầu cốt lõi nào?",
    "options": [
      "A. Bằng mọi giá chỉ tập trung giảm chi phí thấp nhất mà chấp nhận hy sinh chất lượng sản phẩm",
      "B. Đạt hoặc vượt các yêu cầu hay kỳ vọng của những người có quyền lợi và nghĩa vụ liên quan (stakeholders)",
      "C. Cân bằng giữa các yếu tố ràng buộc: thời gian, chi phí và chất lượng sản phẩm",
      "D. Đạt được mục tiêu dự án đã cam kết",
      "E. Chỉ cần làm hài lòng giám đốc công ty phát triển, bỏ qua kỳ vọng của khách hàng và người dùng"
    ],
    "answer": [
      1,
      2,
      3
    ],
    "explanation": "Slide 7 nêu rõ mục tiêu QLDA: *Đạt mục tiêu dự án • Đạt hoặc vượt các yêu cầu hay kỳ vọng của stakeholders • Cân bằng giữa các yếu tố: thời gian, chi phí, chất lượng sản phẩm*.",
    "tip": "Slide 7 nêu rõ mục tiêu QLDA: *Đạt mục tiêu dự án • Đạt hoặc vượt các yêu cầu ha..."
  },
  {
    "id": 4,
    "chapter": 1,
    "tag": "Slide 8",
    "type": "multiple",
    "question": "Xét dưới góc độ quy trình điều hành, **Quản lý dự án là một quá trình liên tục** bao gồm các hoạt động quản trị nào sau đây nhằm hướng tới mục tiêu trong các ràng buộc?",
    "options": [
      "A. Tổ chức (Organizing)",
      "B. Điều phối (Coordinating)",
      "C. Theo dõi & kiểm soát (Monitoring & Controlling)",
      "D. Trực tiếp thay thế toàn bộ lập trình viên viết mã nguồn nghiệp vụ",
      "E. Xóa bỏ các mốc kiểm soát để đẩy nhanh tiến độ bàn giao",
      "F. Lập kế hoạch (Planning)"
    ],
    "answer": [
      0,
      1,
      2,
      5
    ],
    "explanation": "Theo Slide 8, QLDA là quá trình: *Lập kế hoạch (Planning) • Tổ chức (Organizing) • Điều phối (Coordinating) • Theo dõi & kiểm soát (Monitoring & Controlling)*.",
    "tip": "Theo Slide 8, QLDA là quá trình: *Lập kế hoạch (Planning) • Tổ chức (Organizing)..."
  },
  {
    "id": 5,
    "chapter": 1,
    "tag": "Slide 10",
    "type": "single",
    "question": "Trong mô hình **Tam giác quản lý dự án (Project Triangle)** gồm 3 đỉnh ràng buộc: Phạm vi (Scope) - Thời gian (Time) - Chi phí (Cost), yếu tố **Chất lượng sản phẩm (Quality)** được định vị như thế nào?",
    "options": [
      "A. Là yếu tố bất biến, không hề chịu tác động khi phạm vi hoặc chi phí thay đổi",
      "B. Thuộc trách nhiệm riêng của bên kiểm thử, không nằm trong các yếu tố của tam giác dự án",
      "C. Nằm ở trung tâm của tam giác, là kết quả của sự cân bằng giữa 3 yếu tố Scope - Time - Cost",
      "D. Là một đỉnh độc lập thứ tư tạo thành hình tứ giác ràng buộc"
    ],
    "answer": 2,
    "explanation": "Slide 10 ghi nhận: *Phạm vi (Scope), Thời gian (Time), Chi phí (Cost) — Chất lượng là kết quả cân bằng 3 yếu tố*. Khi một trong 3 đỉnh bị ép (ví dụ rút ngắn thời gian nhưng không tăng chi phí), chất lượng sẽ bị ảnh hưởng.",
    "tip": "Slide 10 ghi nhận: *Phạm vi (Scope), Thời gian (Time), Chi phí (Cost) — Chất lượ..."
  },
  {
    "id": 6,
    "chapter": 1,
    "tag": "Slide 12",
    "type": "multiple",
    "question": "Mô hình **4P trong Quản lý dự án phần mềm** xác định 4 yếu tố then chốt cần quản lý. Hãy chọn những yếu tố cấu thành đúng cùng định nghĩa chuẩn của chúng theo bài giảng:",
    "options": [
      "A. **Khuyến mãi (Promotion)** — Kế hoạch tiếp thị giới thiệu phần mềm ra thị trường",
      "B. **Sản phẩm (Product)** — Phần mềm được xây dựng",
      "C. **Dự án (Project)** — Tất cả các công việc để sản phẩm trở thành hiện thực",
      "D. **Con người (People)** — Yếu tố quan trọng nhất của dự án",
      "E. **Quy trình (Process)** — Tập hợp các hoạt động chương trình khung và nhiệm vụ của phần mềm để thực hiện công việc",
      "F. **Lợi nhuận (Profit)** — Tổng số tiền thu được sau khi bàn giao"
    ],
    "answer": [
      1,
      2,
      3,
      4
    ],
    "explanation": "4P kinh điển trong công nghệ phần mềm (Pressman) gồm *People (quan trọng nhất) • Product • Process • Project*. Profit và Promotion là thuật ngữ của Marketing 4P.",
    "tip": "4P kinh điển trong công nghệ phần mềm (Pressman) gồm *People (quan trọng nhất) •..."
  },
  {
    "id": 7,
    "chapter": 1,
    "tag": "Slide 12",
    "type": "single",
    "question": "Trong 4 yếu tố của mô hình 4P (Con người, Sản phẩm, Quy trình, Dự án), bài giảng khẳng định yếu tố nào đóng vai trò **quan trọng nhất của dự án**?",
    "options": [
      "A. Dự án (Project) — vì hợp đồng dự án ràng buộc pháp lý giữa hai bên",
      "B. Sản phẩm (Product) — vì khách hàng trả tiền mua sản phẩm cuối cùng",
      "C. Quy trình (Process) — vì quy trình chuẩn CMMI sẽ đảm bảo mọi khâu tự động chạy tốt",
      "D. Con người (People) — vì kỹ năng, sự phối hợp và tinh thần làm việc của nhân sự quyết định thành bại"
    ],
    "answer": 3,
    "explanation": "Slide 12 nêu rõ: *Con người — yếu tố quan trọng nhất của dự án*.",
    "tip": "Slide 12 nêu rõ: *Con người — yếu tố quan trọng nhất của dự án*...."
  },
  {
    "id": 8,
    "chapter": 1,
    "tag": "Slide 13",
    "type": "multiple",
    "question": "Một người Quản lý dự án (PM) chuyên nghiệp cần đảm nhận những vai trò cốt lõi nào để dẫn dắt dự án thành công?",
    "options": [
      "A. Tự mình làm tất cả mọi tác vụ kỹ thuật vì không tin tưởng năng lực cấp dưới",
      "B. Tránh né nhận trách nhiệm khi dự án phát sinh sự cố trễ hạn",
      "C. Đảm bảo giao tiếp minh bạch và hiệu quả giữa các bên",
      "D. Làm cầu nối kết nối giữa khách hàng – đội dự án – tổ chức",
      "E. Nhận diện và chủ động quản lý rủi ro trong suốt vòng đời dự án",
      "F. Ra quyết định kịp thời trong phạm vi quyền hạn được ủy quyền"
    ],
    "answer": [
      2,
      3,
      4,
      5
    ],
    "explanation": "Slide 13 quy định 4 vai trò của PM: *Kết nối giữa khách hàng – đội dự án – tổ chức • Ra quyết định • Quản lý rủi ro • Đảm bảo giao tiếp hiệu quả*.",
    "tip": "Slide 13 quy định 4 vai trò của PM: *Kết nối giữa khách hàng – đội dự án – tổ ch..."
  },
  {
    "id": 9,
    "chapter": 1,
    "tag": "Slide 15, 16",
    "type": "multiple",
    "question": "Khi tiến hành nghiệm thu tổng kết dự án, hội đồng đánh giá sẽ phân định **Dự án thành công** hoặc **Dự án thất bại** dựa trên những tiêu chí chuẩn mực nào sau đây?",
    "options": [
      "A. Tiêu chí dự án thành công: Đạt chất lượng chấp nhận được",
      "B. Tiêu chí dự án thành công: Trong ngân sách đã duyệt",
      "C. Dự án hoàn thành trễ hạn 1 năm và đội vốn 300% nhưng vẫn coi là thành công vì có sản phẩm",
      "D. Tiêu chí dự án thất bại: Trễ tiến độ hoặc Vượt chi phí ngân sách",
      "E. Tiêu chí dự án thất bại: Sản phẩm làm ra không dùng được hoặc Bị hủy giữa chừng",
      "F. Tiêu chí dự án thành công: Đáp ứng đúng và đủ yêu cầu của người dùng",
      "G. Tiêu chí dự án thành công: Hoàn thành đúng hạn"
    ],
    "answer": [
      0,
      1,
      3,
      4,
      5,
      6
    ],
    "explanation": "Slide 15 xác định dự án thành công: *Hoàn thành đúng hạn • Trong ngân sách • Đáp ứng yêu cầu người dùng • Chất lượng chấp nhận được*. Slide 16 xác định dự án thất bại: *Trễ tiến độ • Vượt chi phí • Sản phẩm không dùng được • Bị hủy giữa chừng*.",
    "tip": "Slide 15 xác định dự án thành công: *Hoàn thành đúng hạn • Trong ngân sách • Đáp..."
  },
  {
    "id": 10,
    "chapter": 1,
    "tag": "Slide 17",
    "type": "multiple",
    "question": "Các nghiên cứu của Standish Group (Chaos Report) và giáo trình môn học đã tổng kết những **Nguyên nhân hàng đầu khiến các dự án phần mềm thất bại** gồm những nguyên nhân nào?",
    "options": [
      "A. Do nhóm phát triển áp dụng quy trình kiểm thử chất lượng từ sớm",
      "B. Thiếu hoạt động quản lý rủi ro từ giai đoạn khởi đầu",
      "C. Giao tiếp kém giữa khách hàng, quản lý và nhóm phát triển",
      "D. Do sử dụng các công cụ quản lý dự án hiện đại như Jira, Trello, Git",
      "E. Ước lượng sai về thời gian, công sức và chi phí",
      "F. Yêu cầu không rõ ràng, mơ hồ hoặc biến động liên tục",
      "G. Thiếu sự cam kết và đồng hành từ các bên liên quan (stakeholders)"
    ],
    "answer": [
      1,
      2,
      4,
      5,
      6
    ],
    "explanation": "Slide 17 chỉ rõ 5 nguyên nhân thất bại: *Yêu cầu không rõ ràng • Thiếu quản lý rủi ro • Giao tiếp kém • Ước lượng sai • Thiếu cam kết từ stakeholders*.",
    "tip": "Slide 17 chỉ rõ 5 nguyên nhân thất bại: *Yêu cầu không rõ ràng • Thiếu quản lý r..."
  },
  {
    "id": 11,
    "chapter": 1,
    "tag": "Slide 18",
    "type": "multiple",
    "question": "Bảng đối chiếu trong bài giảng (Slide 18) so sánh sự khác biệt bản chất giữa các dự án thành công và thất bại thông qua những cặp trạng thái đối lập nào?",
    "options": [
      "A. Về yêu cầu: Rõ ràng (Thành công) đối lập với Mơ hồ (Thất bại)",
      "B. Về kế hoạch: Thực tế, khả thi (Thành công) đối lập với Hình thức, đối phó (Thất bại)",
      "C. Về kiểm soát thay đổi: Có quy trình kiểm soát (Thành công) đối lập với Buông lỏng (Thất bại)",
      "D. Về yêu cầu: Càng nhiều yêu cầu phát sinh không kiểm soát càng đảm bảo thành công",
      "E. Về giao tiếp: Thường xuyên (Thành công) đối lập với Rời rạc (Thất bại)"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Slide 18 tổng kết bảng so sánh theo 3 tiêu chí chủ chốt: *Yêu cầu (Rõ ràng vs Mơ hồ), Giao tiếp (Thường xuyên vs Rời rạc), Kế hoạch (Thực tế vs Hình thức)* cùng kiểm soát thay đổi.",
    "tip": "Slide 18 tổng kết bảng so sánh theo 3 tiêu chí chủ chốt: *Yêu cầu (Rõ ràng vs Mơ..."
  },
  {
    "id": 12,
    "chapter": 1,
    "tag": "Slide 20",
    "type": "multiple",
    "question": "Theo nội dung bài học, để điều hành một dự án phần mềm toàn diện, PM cần tập trung quản lý chặt chẽ **4 nhóm vấn đề cốt lõi** nào sau đây?",
    "options": [
      "A. Các hoạt động kinh doanh ngoài ngành của chủ đầu tư",
      "B. Môi trường & tài nguyên (Environment & Resources)",
      "C. Giá trị thị trường cổ phiếu của doanh nghiệp đối tác",
      "D. Sản phẩm phần mềm (Product)",
      "E. Tiến trình thực hiện dự án (Process / Schedule)",
      "F. Nhân lực tham gia dự án (People)"
    ],
    "answer": [
      1,
      3,
      4,
      5
    ],
    "explanation": "Slide 20 phân loại 4 nhóm vấn đề cần quản lý: *Tiến trình (Process/Schedule) • Sản phẩm (Product) • Nhân lực (People) • Môi trường & tài nguyên (Environment & Resources)*.",
    "tip": "Slide 20 phân loại 4 nhóm vấn đề cần quản lý: *Tiến trình (Process/Schedule) • S..."
  },
  {
    "id": 13,
    "chapter": 1,
    "tag": "Slide 21",
    "type": "multiple",
    "question": "Trong hoạt động **Quản lý tiến trình**, PM cần thực hiện những nhiệm vụ kỹ thuật nào và thường sử dụng những công cụ đắc lực nào sau đây?",
    "options": [
      "A. Nhiệm vụ: Xác định các công việc cần làm",
      "B. Công cụ: Biểu đồ Gantt (Gantt Chart)",
      "C. Công cụ: Các mốc kiểm soát tiến độ quan trọng (Milestone)",
      "D. Nhiệm vụ: Xác định thứ tự và quan hệ phụ thuộc khi thực hiện các công việc",
      "E. Nhiệm vụ: Để mặc các lập trình viên tự chọn thứ tự làm việc tùy hứng không theo dõi",
      "F. Công cụ: Cấu trúc phân rã công việc WBS (Work Breakdown Structure)",
      "G. Nhiệm vụ: Thường xuyên theo dõi và giám sát tiến độ thực tế so với kế hoạch"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      5,
      6
    ],
    "explanation": "Slide 21 chỉ rõ: Nội dung gồm *Xác định công việc cần làm • Thứ tự thực hiện • Theo dõi tiến độ*; Công cụ gồm *WBS • Gantt Chart • Milestone*.",
    "tip": "Slide 21 chỉ rõ: Nội dung gồm *Xác định công việc cần làm • Thứ tự thực hiện • T..."
  },
  {
    "id": 14,
    "chapter": 1,
    "tag": "Slide 22, 23",
    "type": "multiple",
    "question": "Về kỹ thuật xây dựng **Cấu trúc phân rã công việc (WBS - Work Breakdown Structure)**, những phát biểu nào sau đây đúng với bài giảng?",
    "options": [
      "A. CWBS luôn phải chi tiết hơn PWBS và phân rã sâu đến từng dòng lệnh",
      "B. Một cấu trúc WBS đầy đủ thông thường có từ 3 đến 6 mức (3 mức trên dùng cho quản lý/báo cáo, 3 mức dưới cho kỹ thuật nội bộ)",
      "C. WBS là danh sách thời gian biểu ghi rõ số ngày làm việc cụ thể của từng nhân viên",
      "D. Mục đích chính của WBS là chia nhỏ công việc giúp dự án dễ ước lượng và dễ quản lý hơn",
      "E. Project WBS (PWBS): Được định nghĩa bởi PM và đội dự án, gắn liền với các sản phẩm bàn giao cụ thể, dùng để theo dõi công việc chi tiết ở mức thấp nhất",
      "F. Contract WBS (CWBS): Chỉ gồm 2–3 mức đầu tiên, thường dùng để khách hàng và cấp quản lý theo dõi công việc ở mức cao"
    ],
    "answer": [
      1,
      3,
      4,
      5
    ],
    "explanation": "Slide 22 & 23 phân biệt rõ: *CWBS (2-3 mức đầu, theo dõi mức cao)* vs *PWBS (gắn với sản phẩm bàn giao, theo dõi mức thấp nhất)*; thông thường WBS có 3-6 mức.",
    "tip": "Slide 22 & 23 phân biệt rõ: *CWBS (2-3 mức đầu, theo dõi mức cao)* vs *PWBS (gắn..."
  },
  {
    "id": 15,
    "chapter": 1,
    "tag": "Slide 24",
    "type": "single",
    "question": "Công cụ nào cho phép người quản lý dự án **trực quan hóa tiến độ theo trục thời gian ngang**, nhìn rõ mối quan hệ gối đầu giữa các tác vụ và xác định các cột mốc quan trọng (Milestone)?",
    "options": [
      "A. Biểu đồ Use Case",
      "B. Biểu đồ Gantt (Gantt Chart)",
      "C. Sổ đăng ký rủi ro (Risk Register)",
      "D. Biểu đồ thực thể liên kết ERD"
    ],
    "answer": 1,
    "explanation": "Slide 24 nêu rõ vai trò của Gantt Chart: *Trực quan tiến độ • Theo dõi thời gian • Xác định milestone*.",
    "tip": "Slide 24 nêu rõ vai trò của Gantt Chart: *Trực quan tiến độ • Theo dõi thời gian..."
  },
  {
    "id": 16,
    "chapter": 1,
    "tag": "Slide 26, 27, 28",
    "type": "multiple",
    "question": "Trong nhóm nhiệm vụ **Quản lý sản phẩm**, người quản lý dự án cần nắm vững những nguyên tắc cốt lõi nào về Phạm vi (Scope) và Yêu cầu phần mềm?",
    "options": [
      "A. Bản chất của Phạm vi (Scope) là định rõ: \"Những gì được làm\" và \"Những gì không làm\"",
      "B. Quản lý sản phẩm chỉ đơn thuần là việc thiết kế giao diện bắt mắt theo sở thích cá nhân",
      "C. Phạm vi dự án là khái niệm mở, cho phép khách hàng bổ sung bất cứ lúc nào mà không cần đánh giá tác động",
      "D. Quản lý sản phẩm bao gồm 3 việc trọng tâm: Xác định phạm vi (Scope), Quản lý yêu cầu, Kiểm soát thay đổi",
      "E. Yêu cầu phần mềm bắt buộc phải bao quát: Yêu cầu chức năng, Yêu cầu phi chức năng và Mức độ ưu tiên"
    ],
    "answer": [
      0,
      3,
      4
    ],
    "explanation": "Slide 26, 27, 28 xác định: *Quản lý sản phẩm: Scope, Quản lý yêu cầu, Kiểm soát thay đổi*; *Scope là: Những gì được làm và Những gì không làm*; *Yêu cầu gồm: Chức năng, Phi chức năng, Ưu tiên*.",
    "tip": "Slide 26, 27, 28 xác định: *Quản lý sản phẩm: Scope, Quản lý yêu cầu, Kiểm soát ..."
  },
  {
    "id": 17,
    "chapter": 1,
    "tag": "Slide 29",
    "type": "multiple",
    "question": "Để xác định đầy đủ và toàn diện phạm vi của một dự án phần mềm trước khi bắt tay thực hiện, Roger Pressman đề xuất **Bộ câu hỏi cốt lõi W5HH**. Bộ câu hỏi này bao gồm những từ khóa nào?",
    "options": [
      "A. **Where** (Các thành phần được triển khai ở đâu?)",
      "B. **How much** (Cần bao nhiêu nguồn lực và kinh phí?)",
      "C. **Which** (Khách hàng thích màu sắc nào hơn?)",
      "D. **What** (Hệ thống sẽ làm những gì?)",
      "E. **Why** (Tại sao phát triển hệ thống?)",
      "F. **When** (Các mốc thời gian hoàn thành khi nào?)",
      "G. **Who** (Ai chịu trách nhiệm thực hiện từng công việc?)",
      "H. **How** (Công việc sẽ được thực hiện như thế nào về mặt kỹ thuật và quản lý?)"
    ],
    "answer": [
      0,
      1,
      3,
      4,
      5,
      6,
      7
    ],
    "explanation": "Slide 29 liệt kê đầy đủ 7 câu hỏi của nguyên tắc W5HH: *Why, What, When, Who, Where, How, How much*.",
    "tip": "Slide 29 liệt kê đầy đủ 7 câu hỏi của nguyên tắc W5HH: *Why, What, When, Who, Wh..."
  },
  {
    "id": 18,
    "chapter": 1,
    "tag": "Slide 31, 32, 33",
    "type": "multiple",
    "question": "Khi tiếp cận nhiệm vụ **Quản lý nhân lực (People Management)**, người quản lý dự án cần nhận thức được những nguyên lý tổ chức và vấn đề thực tế nào sau đây?",
    "options": [
      "A. Con người là yếu tố quyết định sự thành bại của dự án phần mềm",
      "B. Không bao giờ phát sinh xung đột nội bộ nếu các thành viên đều có trình độ đại học",
      "C. Cơ cấu nhóm dự án phần mềm cơ bản gồm: PM, Dev (Lập trình), Tester (Kiểm thử), Stakeholder (Bên liên quan)",
      "D. Chỉ cần tuyển những lập trình viên giỏi nhất thì dự án sẽ tự động thành công mà không cần người điều phối",
      "E. Các vấn đề nhân sự thường trực gồm: Thiếu kỹ năng, Xung đột nội bộ, Thiếu động lực làm việc",
      "F. Kỹ năng chuyên môn cá nhân cao không đồng nghĩa với hiệu quả công việc chung nếu thiếu sự phối hợp và tinh thần làm việc nhóm"
    ],
    "answer": [
      0,
      2,
      4,
      5
    ],
    "explanation": "Slide 31, 32, 33 ghi nhận: *Con người là yếu tố quyết định thành bại • Kỹ năng ≠ Hiệu quả nếu thiếu phối hợp • Cơ cấu: PM, Dev, Tester, Stakeholder • Vấn đề: Thiếu kỹ năng, Xung đột, Thiếu động lực*.",
    "tip": "Slide 31, 32, 33 ghi nhận: *Con người là yếu tố quyết định thành bại • Kỹ năng ≠..."
  },
  {
    "id": 19,
    "chapter": 1,
    "tag": "Slide 35, 36, 37, 38",
    "type": "multiple",
    "question": "Về phương diện **Quản lý môi trường & tài nguyên**, những nhận định nào sau đây phản ánh chính xác nội dung bài giảng?",
    "options": [
      "A. Thời gian và ngân sách là vô hạn nên không được xếp vào nhóm tài nguyên cần quản lý",
      "B. Môi trường chỉ đề cập đến nhiệt độ phòng làm việc, không liên quan đến công cụ và hạ tầng máy chủ",
      "C. Môi trường dự án bao gồm: Công cụ (IDE, Jira, Git), Hạ tầng (Server, đường truyền mạng), Văn hóa tổ chức",
      "D. Các rủi ro môi trường phổ biến trong phát triển phần mềm gồm: Mạng yếu/chập chờn, Thiếu máy chủ (Server), Thiếu bản quyền phần mềm (License)",
      "E. Quản lý tài nguyên dự án bao gồm việc phân bổ và tối ưu: Thời gian, Ngân sách, Thiết bị"
    ],
    "answer": [
      2,
      3,
      4
    ],
    "explanation": "Slide 35, 36, 37, 38 chỉ rõ: *Môi trường gồm: Công cụ (IDE, Jira, Git), Hạ tầng (Server, mạng), Văn hóa tổ chức*; *Tài nguyên gồm: Thời gian, Ngân sách, Thiết bị*; *Rủi ro: Mạng yếu, Thiếu server, Thiếu license*.",
    "tip": "Slide 35, 36, 37, 38 chỉ rõ: *Môi trường gồm: Công cụ (IDE, Jira, Git), Hạ tầng ..."
  },
  {
    "id": 20,
    "chapter": 2,
    "tag": "Slide 3",
    "type": "multiple",
    "question": "Một giám đốc kỹ thuật tuyên bố: *\"Nhóm chúng tôi toàn lập trình viên giỏi nên cứ tập trung viết mã nguồn, không cần tốn thời gian đo đạc các số liệu làm gì cho rườm rà\"*. Dựa trên lý thuyết kỹ nghệ phần mềm (Slide 3), người quản lý dự án cần phản biện nhận định trên bằng những luận điểm chuẩn mực nào?",
    "options": [
      "A. Không đo lường → Sẽ không thể kiểm soát được tiến độ và chất lượng",
      "B. Không kiểm soát → Sẽ không có cơ sở dữ liệu thực chứng để cải tiến quy trình",
      "C. Đo lường chỉ là thủ tục hành chính hình thức, không mang lại giá trị thực tế cho việc quản trị",
      "D. Phần mềm vốn mang tính chất vô hình, nếu không đo lường bằng các số liệu cụ thể thì không thể biết được trạng thái thực tế của sản phẩm",
      "E. Chỉ cần sản phẩm chạy được là đủ, không cần biết năng suất và chất lượng ở mức độ nào"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "Slide 3 nêu rõ triết lý cốt lõi: *Không đo → không kiểm soát • Không kiểm soát → không cải tiến • Phần mềm mang tính vô hình*.",
    "tip": "Slide 3 nêu rõ triết lý cốt lõi: *Không đo → không kiểm soát • Không kiểm soát →..."
  },
  {
    "id": 21,
    "chapter": 2,
    "tag": "Slide 4, 6",
    "type": "multiple",
    "question": "Để quản trị và cải tiến quy trình công nghệ phần mềm, dữ liệu phải trải qua chu trình chuyển hóa 3 cấp độ: **Measurement → Metrics → Indicators**. Hãy chọn những phát biểu đúng về bản chất của từng cấp độ:",
    "options": [
      "A. **Metrics**: Là đại lượng định lượng được tính toán và chuẩn hóa từ một hoặc nhiều phép đo (ví dụ: Defect Density = 50 lỗi / 10 KLOC = 5 lỗi/KLOC)",
      "B. Metric và Measurement là hai từ đồng nghĩa hoàn toàn, có thể dùng thay thế cho nhau trong mọi tình huống",
      "C. **Measurement**: Là phép đo thô (raw data) thu thập trực tiếp từ hoạt động đo (ví dụ: đếm được 50 lỗi trong quá trình kiểm thử)",
      "D. **Indicators**: Là chỉ báo định hướng quản lý được đúc kết từ metrics, giúp PM đưa ra quyết định hành động (ví dụ: nhận thấy chất lượng mã nguồn chưa đạt, cần cải tiến khâu kiểm thử)",
      "E. Measurement bản thân nó không có nhiều ý nghĩa quản lý nếu không được chuyển hóa thành Metric và Indicator",
      "F. Measurement là cấp độ cao nhất dùng trực tiếp để ra quyết định sa thải nhân viên"
    ],
    "answer": [
      0,
      2,
      3,
      4
    ],
    "explanation": "Slide 4 & 6 phân biệt chuẩn: *Measurement = Phép đo thô (raw data) • Metrics = Đại lượng tính từ measurement • Indicators = Chỉ báo giúp ra quyết định quản lý*. Measurement vô nghĩa nếu không chuyển thành Metric và Indicator.",
    "tip": "Slide 4 & 6 phân biệt chuẩn: *Measurement = Phép đo thô (raw data) • Metrics = Đ..."
  },
  {
    "id": 22,
    "chapter": 2,
    "tag": "Slide 7",
    "type": "multiple",
    "question": "Theo Roger Pressman, việc áp dụng số liệu tràn lan không chọn lọc sẽ gây lãng phí nguồn lực. Một **Số liệu tốt (Pressman)** bắt buộc phải thỏa mãn 4 đặc điểm cốt lõi nào sau đây?",
    "options": [
      "A. **Có ý nghĩa** (Phản ánh đúng bản chất mục tiêu quản lý và chất lượng thực tế)",
      "B. **Thu thập được** (Khả thi về chi phí và công sức khi lấy dữ liệu trong quá trình làm việc)",
      "C. Giữ bí mật tuyệt đối, không cho các thành viên trong nhóm biết kết quả đo",
      "D. **Đơn giản** (Dễ hiểu, dễ tính toán, không đòi hỏi công thức toán học quá phức tạp)",
      "E. **Có thể hành động** (Cung cấp cơ sở rõ ràng để PM đưa ra quyết định cải tiến cụ thể)",
      "F. Phức tạp tối đa với hàng chục biến số ngầm để thể hiện tính hàn lâm"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Slide 7 nêu chính xác 4 đặc điểm: *Đơn giản • Có ý nghĩa • Thu thập được • Có thể hành động*.",
    "tip": "Slide 7 nêu chính xác 4 đặc điểm: *Đơn giản • Có ý nghĩa • Thu thập được • Có th..."
  },
  {
    "id": 23,
    "chapter": 2,
    "tag": "Slide 8, 9",
    "type": "multiple",
    "question": "Trong quản lý kỹ nghệ phần mềm, hệ thống số liệu được phân thành 3 nhóm lớn: **Số liệu quy trình (Process Metrics)**, **Số liệu dự án (Project Metrics)** và **Số liệu sản phẩm (Product Metrics)**. Hãy chọn các nhận định đúng về mục tiêu và ví dụ điển hình của từng loại:",
    "options": [
      "A. **Process Metrics**: Tập trung vào việc đánh giá hiệu quả của quy trình nhằm cải tiến quy trình phần mềm (ví dụ: Defect Removal Efficiency - Hiệu quả loại bỏ lỗi)",
      "B. Process Metrics chỉ dùng riêng cho lập trình viên mới vào nghề, không áp dụng cho quản lý cấp cao",
      "C. Số liệu quy trình giúp tổ chức so sánh hiệu quả giữa các dự án khác nhau và nâng cao độ trưởng thành quy trình",
      "D. Project Metrics chỉ tính toán một lần sau khi dự án đã bàn giao và thanh lý hợp đồng",
      "E. **Project Metrics**: Dùng để điều hành và theo dõi dự án đang chạy (ví dụ: Cost Variance - Chênh lệch chi phí, Schedule Variance - Chênh lệch tiến độ)"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Slide 8, 9, 12 xác định rõ mục tiêu: *Process Metrics: Cải tiến quy trình, so sánh giữa các dự án (ví dụ Defect removal efficiency)*; *Project Metrics: Quản lý dự án (ví dụ Cost variance, Schedule variance)*.",
    "tip": "Slide 8, 9, 12 xác định rõ mục tiêu: *Process Metrics: Cải tiến quy trình, so sá..."
  },
  {
    "id": 24,
    "chapter": 2,
    "tag": "Slide 11, 13, 14",
    "type": "multiple",
    "question": "Khi theo dõi sức khỏe của một dự án phần mềm đang diễn ra, người quản lý dự án thường xuyên thu thập các **Số liệu quy trình (Process Metrics)** và **Số liệu dự án (Project Metrics)** cụ thể nào sau đây?",
    "options": [
      "A. Số liệu dự án: Chỉ số huyết áp và nhịp tim trung bình của lập trình viên",
      "B. Các đơn vị đo lường dự án phổ biến: Số dòng lệnh trên tháng (LOC/tháng), Điểm chức năng trên người-tháng (FP/person-month)",
      "C. Số liệu dự án: Tiến độ thực tế, Chi phí tiêu hao, Năng suất của đội ngũ",
      "D. Số liệu quy trình: Thời gian thực hiện các công đoạn, Hiệu suất làm việc, Tỷ lệ lỗi theo từng giai đoạn phát triển",
      "E. Số liệu quy trình: Số lượng email rác nhận được trong hòm thư công ty"
    ],
    "answer": [
      1,
      2,
      3
    ],
    "explanation": "Slide 11, 13, 14 liệt kê: *Process Metrics gồm Thời gian thực hiện, Hiệu suất, Tỷ lệ lỗi theo giai đoạn*; *Project Metrics gồm Tiến độ, Chi phí, Năng suất (LOC/tháng, FP/người-tháng)*.",
    "tip": "Slide 11, 13, 14 liệt kê: *Process Metrics gồm Thời gian thực hiện, Hiệu suất, T..."
  },
  {
    "id": 25,
    "chapter": 2,
    "tag": "Slide 15, 16",
    "type": "multiple",
    "question": "Một dự án hoàn thành việc viết 8,000 dòng lệnh (8,000 LOC) với tổng nỗ lực công sức là 10 người-tháng (10 person-month). Dựa trên bài tập thực hành trong bài giảng:",
    "options": [
      "A. Nguyên tắc quản trị: Không nên dùng chỉ số LOC/PM này để so sánh trực tiếp giữa các dự án sử dụng các ngôn ngữ lập trình khác nhau (ví dụ Assembly vs Python)",
      "B. Đội ngũ nào viết được 100,000 LOC cho cùng một tính năng chắc chắn có năng suất cao gấp 10 lần đội ngũ viết 10,000 LOC",
      "C. Nguyên tắc quản trị: Chỉ nên so sánh năng suất LOC trong cùng tổ chức và có sự tương đồng về công nghệ/môi trường",
      "D. Năng suất tính theo công thức: Productivity = (8 / ,000 LOC10 person)-month = 800 LOC/person-month",
      "E. Mức năng suất 800 LOC/PM được đánh giá là ở mức trung bình – khá"
    ],
    "answer": [
      0,
      2,
      3,
      4
    ],
    "explanation": "Slide 15, 16 tính chuẩn: Productivity = 800 LOC/PM; Nhận xét: *Mức trung bình – khá • Không nên so sánh giữa các ngôn ngữ khác nhau • Chỉ so sánh trong cùng tổ chức*.",
    "tip": "Slide 15, 16 tính chuẩn: Productivity = 800 LOC/PM; Nhận xét: *Mức trun..."
  },
  {
    "id": 26,
    "chapter": 2,
    "tag": "Slide 18, 19, 20, 21",
    "type": "multiple",
    "question": "Hai phương pháp phổ biến nhất để **Đo kích thước phần mềm** là đo bằng số dòng mã lệnh (LOC - Lines of Code) và đo bằng Điểm chức năng (FP - Function Point). Những nhận định nào sau đây đúng về ưu/nhược điểm bản chất của chúng?",
    "options": [
      "A. LOC có nhược điểm lớn là phụ thuộc nặng nề vào ngôn ngữ lập trình (ngôn ngữ bậc cao tốn ít dòng code hơn ngôn ngữ bậc thấp để cùng giải quyết một bài toán)",
      "B. LOC có thể đo lường chính xác ngay từ giai đoạn lấy yêu cầu trước khi thiết kế hệ thống",
      "C. Function Point không thể dùng để ước lượng chi phí vì không đo được số dòng lệnh thực tế",
      "D. Function Point đo kích thước dựa trên các chức năng nghiệp vụ mà người dùng nhìn thấy, hoàn toàn độc lập với công nghệ và ngôn ngữ triển khai",
      "E. LOC có ưu điểm là dễ đo, trực quan, có thể đếm tự động bằng công cụ",
      "F. Đơn vị đo năng suất và chi phí tương ứng là: FP / Person-month hoặc LOC / Person-month"
    ],
    "answer": [
      0,
      3,
      4,
      5
    ],
    "explanation": "Slide 18, 19, 20, 21 phân tích: *LOC: Dễ đo, Phụ thuộc ngôn ngữ*; *FP: Đo theo chức năng, Độc lập công nghệ*; *Đo năng suất: FP/Person-month, LOC/Person-month*.",
    "tip": "Slide 18, 19, 20, 21 phân tích: *LOC: Dễ đo, Phụ thuộc ngôn ngữ*; *FP: Đo theo c..."
  },
  {
    "id": 27,
    "chapter": 2,
    "tag": "Slide 22, 23",
    "type": "multiple",
    "question": "Bảng tổng kết so sánh giữa **LOC và Function Point (FP)** ở Slide 23 đưa ra những kết luận quan trọng nào sau đây mà người làm quản lý dự án phải ghi nhớ?",
    "options": [
      "A. Tiêu chí \"Khả năng dùng sớm (ở pha phân tích/đặc tả yêu cầu)\": LOC rất khó dùng; FP rất dễ dùng",
      "B. Không thể ước lượng nỗ lực sớm bằng FP vì khách hàng không hiểu điểm chức năng",
      "C. Kết luận bài học: Phương pháp Function Point (FP) phù hợp hơn cho công tác quản lý dự án phần mềm",
      "D. Tiêu chí \"So sánh giữa các dự án khác nhau\": LOC thể hiện kém; FP thể hiện tốt",
      "E. Tiêu chí \"Phụ thuộc ngôn ngữ\": LOC có phụ thuộc; FP không phụ thuộc",
      "F. LOC phù hợp cho quản lý dự án hơn FP vì LOC phản ánh đúng số byte lưu trữ trên ổ đĩa"
    ],
    "answer": [
      0,
      2,
      3,
      4
    ],
    "explanation": "Slide 23 khẳng định: *Phụ thuộc ngôn ngữ (LOC: Có, FP: Không) • Dùng sớm (LOC: Khó, FP: Dễ) • So sánh dự án (LOC: Kém, FP: Tốt) → FP phù hợp hơn cho quản lý dự án*.",
    "tip": "Slide 23 khẳng định: *Phụ thuộc ngôn ngữ (LOC: Có, FP: Không) • Dùng sớm (LOC: K..."
  },
  {
    "id": 28,
    "chapter": 2,
    "tag": "Slide 25, 26, 27",
    "type": "multiple",
    "question": "Tại sao trong quản trị dự án phần mềm hiện đại, các chuyên gia khuyến nghị **Cần nhiều cách đo và kết hợp cả LOC lẫn FP** thay vì chỉ dựa vào một thước đo duy nhất?",
    "options": [
      "A. Vì đo càng nhiều cách thì càng làm khách hàng bối rối và dễ dàng ký nghiệm thu dự án hơn",
      "B. Giúp người quản lý điều phối số liệu linh hoạt phù hợp với từng mục tiêu quản trị cụ thể",
      "C. Mỗi phương pháp đo đều có những hạn chế cố hữu riêng",
      "D. LOC và FP bổ sung cho nhau rất tốt: FP dùng để ước lượng sớm ở pha yêu cầu/thiết kế, còn LOC dùng để kiểm soát chi tiết ở pha lập trình và kiểm thử",
      "E. Trong kỹ nghệ phần mềm không tồn tại một số liệu đo lường nào là hoàn hảo tuyệt đối"
    ],
    "answer": [
      1,
      2,
      3,
      4
    ],
    "explanation": "Slide 25, 26, 27 khẳng định: *Mỗi cách có hạn chế • Không có số liệu hoàn hảo • Kết hợp LOC & FP bổ sung cho nhau, phù hợp từng giai đoạn • Lựa chọn phù hợp mục tiêu*.",
    "tip": "Slide 25, 26, 27 khẳng định: *Mỗi cách có hạn chế • Không có số liệu hoàn hảo • ..."
  },
  {
    "id": 29,
    "chapter": 2,
    "tag": "Slide 29, 30, 31",
    "type": "multiple",
    "question": "Về khía cạnh **Số liệu cho chất lượng phần mềm**, những phát biểu nào sau đây đúng theo định nghĩa bài giảng?",
    "options": [
      "A. Phần mềm có chất lượng cao nhất là phần mềm viết nhiều dòng lệnh nhất bất kể số lỗi",
      "B. Khái niệm chất lượng phần mềm bao hàm các thuộc tính cốt lõi: Độ tin cậy (Reliability), Dễ bảo trì (Maintainability), Dễ sử dụng (Usability)",
      "C. Các số liệu đánh giá chất lượng phần mềm gồm: Số lượng lỗi, Mật độ lỗi (Defect Density), Thời gian sửa lỗi",
      "D. Mật độ lỗi (Defect Density) được tính chuẩn hóa theo quy mô: Lỗi / KLOC (nghìn dòng lệnh) hoặc Lỗi / FP (điểm chức năng)",
      "E. Mật độ lỗi chỉ là con số lý thuyết, không phản ánh được mức độ ổn định của sản phẩm"
    ],
    "answer": [
      1,
      2,
      3
    ],
    "explanation": "Slide 29, 30, 31 chỉ rõ: *Chất lượng gồm Độ tin cậy, Dễ bảo trì, Dễ sử dụng*; *Số liệu: Số lỗi, Mật độ lỗi, Thời gian sửa lỗi*; *Defect Density = Lỗi/KLOC hoặc Lỗi/FP*.",
    "tip": "Slide 29, 30, 31 chỉ rõ: *Chất lượng gồm Độ tin cậy, Dễ bảo trì, Dễ sử dụng*; *S..."
  },
  {
    "id": 30,
    "chapter": 2,
    "tag": "Slide 32, 33",
    "type": "multiple",
    "question": "Một dự án phần mềm có quy mô 12,000 dòng lệnh (12,000 LOC = 12 KLOC). Giai đoạn kiểm thử phát hiện tổng cộng 60 lỗi. Phân tích số liệu này dưới góc độ quản lý:",
    "options": [
      "A. Mức 5 lỗi/KLOC được đánh giá là ở mức trung bình trong ngành phần mềm thương mại",
      "B. Hành động cần thiết của PM: Tăng cường kiểm thử và rà soát lại quy trình phát triển",
      "C. Khi mật độ lỗi đạt 5 lỗi/KLOC, PM có thể yên tâm bàn giao hệ thống thanh toán tự động ngay mà không cần kiểm thử thêm",
      "D. Điểm nhấn bài học: \"Defect density là chỉ báo chất lượng, không phải chỉ để báo cáo hình thức\"",
      "E. Đối với các hệ thống có độ quan trọng cao (như ngân hàng, y tế, hàng không), mức 5 lỗi/KLOC là CHƯA ĐẠT yêu cầu chất lượng",
      "F. Mật độ lỗi: Defect Density = (6 / 0 l)ỗi12 KLOC = 5 lỗi/KLOC"
    ],
    "answer": [
      0,
      1,
      3,
      4,
      5
    ],
    "explanation": "Slide 32, 33 giải quyết bài toán: Defect Density = 5 lỗi/KLOC; Đánh giá: *Mức trung bình; Với hệ thống quan trọng: chưa đạt; Cần tăng kiểm thử, rà soát quy trình; Defect density là chỉ báo chất lượng, không phải chỉ để báo cáo*.",
    "tip": "Slide 32, 33 giải quyết bài toán: Defect Density = 5 lỗi/KLOC; Đánh gi..."
  },
  {
    "id": 31,
    "chapter": 2,
    "tag": "Slide 35, 36, 37",
    "type": "multiple",
    "question": "Để việc đo lường phát huy hiệu quả thực tế, **Số liệu phải được tích hợp xuyên suốt vòng đời phần mềm**. Hoạt động này bao gồm những nội dung nào?",
    "options": [
      "A. Khai thác dữ liệu để phát hiện các điểm nghẽn, điểm yếu trong quy trình và ra quyết định cải tiến",
      "B. Thu thập số liệu nhằm mục đích chính là tìm lỗi của lập trình viên để trừ lương thưởng",
      "C. Chỉ thu thập số liệu vào ngày cuối cùng trước khi đóng dự án",
      "D. Đo lường liên tục trong các giai đoạn: Phân tích → Thiết kế → Lập trình → Kiểm thử",
      "E. Xây dựng quy trình thu thập và công cụ lưu trữ số liệu tập trung để tạo kho dữ liệu lịch sử"
    ],
    "answer": [
      0,
      3,
      4
    ],
    "explanation": "Slide 35, 36, 37 nêu rõ: *Đo lường trong vòng đời: Phân tích, Thiết kế, Lập trình, Kiểm thử • Thu thập & lưu trữ: Công cụ, Quy trình • Sử dụng số liệu: Phát hiện điểm yếu, Ra quyết định cải tiến*.",
    "tip": "Slide 35, 36, 37 nêu rõ: *Đo lường trong vòng đời: Phân tích, Thiết kế, Lập trìn..."
  },
  {
    "id": 32,
    "chapter": 2,
    "tag": "Slide 39, 40, 41",
    "type": "multiple",
    "question": "Phương pháp **Kiểm soát quy trình dựa trên thống kê (Statistical Process Control - SPC)** và **Biểu đồ kiểm soát (Control Chart)** ứng dụng trong quản lý phần mềm như thế nào?",
    "options": [
      "A. Biểu đồ kiểm soát (Control Chart) thiết lập hai đường biên thống kê quan trọng: Giới hạn kiểm soát trên (Upper Control Limit - UCL) và Giới hạn kiểm soát dưới (Lower Control Limit - LCL)",
      "B. Nếu số lỗi nằm trong dải giữa UCL và LCL thì quy trình được coi là ổn định và nằm trong tầm kiểm soát thống kê",
      "C. SPC chứng minh rằng mọi dự án phần mềm đều không có bất kỳ sự biến đổi nào xảy ra",
      "D. SPC dựa trên việc phân tích Dữ liệu lịch sử, Xu hướng biến thiên và thiết lập các Ngưỡng kiểm soát",
      "E. Control Chart là biểu đồ dùng để vẽ sơ đồ đường đi của cáp mạng máy chủ",
      "F. Giúp quản lý các nguồn biến đổi nội tại của dự án: biến đổi về Yêu cầu, Nhân lực, Công nghệ"
    ],
    "answer": [
      0,
      1,
      3,
      5
    ],
    "explanation": "Slide 39, 40, 41 xác định: *Biến đổi: Yêu cầu, Nhân lực, Công nghệ • SPC: Dữ liệu lịch sử, Xu hướng, Ngưỡng kiểm soát • Control Chart: Upper Control Limit (UCL) và Lower Control Limit (LCL)*.",
    "tip": "Slide 39, 40, 41 xác định: *Biến đổi: Yêu cầu, Nhân lực, Công nghệ • SPC: Dữ liệ..."
  },
  {
    "id": 33,
    "chapter": 2,
    "tag": "Slide 42, 43",
    "type": "multiple",
    "question": "Một dự án theo dõi số lượng lỗi phát hiện mỗi tuần bằng biểu đồ kiểm soát SPC. Trong 3 tuần đầu, số lỗi dao động rất ổn định dưới ngưỡng UCL. Đến tuần thứ 4, số lỗi tăng vọt vượt qua đường giới hạn kiểm soát trên (UCL). Dưới góc độ quản lý dự án chuyên nghiệp:",
    "options": [
      "A. Hiện tượng này có ý nghĩa: Quy trình phát triển phần mềm đang có dấu hiệu mất kiểm soát",
      "B. Bắt đội kiểm thử giảm bớt số ca test để tuần sau số lỗi giảm xuống dưới ngưỡng UCL",
      "C. Nguyên tắc xử lý vàng của PM: \"Sửa quy trình, không sửa triệu chứng\"",
      "D. Hành động đúng đắn của PM: Dừng lại phân tích nguyên nhân gốc rễ, không vội vàng thúc ép nhân viên sửa code một cách chắp vá",
      "E. Hiện tượng này chứng tỏ đã xuất hiện biến đổi đặc biệt (special cause - ví dụ thay đổi công nghệ đột ngột, nhân sự mới chưa qua đào tạo)",
      "F. Hành động đúng của PM: Lập tức xóa bỏ dữ liệu tuần 4 khỏi biểu đồ để báo cáo dự án trông vẫn đẹp và an toàn"
    ],
    "answer": [
      0,
      2,
      3,
      4
    ],
    "explanation": "Slide 42, 43 kết luận: *1. Ý nghĩa: Quy trình có dấu hiệu mất kiểm soát, Xuất hiện biến đổi đặc biệt (special cause); 2. Hành động: Phân tích nguyên nhân, Không vội sửa code, \"Sửa quy trình, không sửa triệu chứng\"*.",
    "tip": "Slide 42, 43 kết luận: *1. Ý nghĩa: Quy trình có dấu hiệu mất kiểm soát, Xuất hi..."
  },
  {
    "id": 34,
    "chapter": 2,
    "tag": "Slide 46",
    "type": "multiple",
    "question": "Để khép lại Chương 2, bài giảng đúc kết **3 thông điệp tổng kết mang tính nguyên tắc cốt tử** cho người làm quản lý dự án phần mềm gồm:",
    "options": [
      "A. Đo lường là nền tảng để cải tiến quy trình",
      "B. Đo càng nhiều số liệu không dùng đến càng thể hiện trình độ chuyên môn cao",
      "C. Tuyệt đối không đo lường theo kiểu hình thức, đối phó",
      "D. Số liệu sinh ra chỉ để phục vụ cho các đợt thanh tra bên ngoài công ty",
      "E. Số liệu thu thập bắt buộc phải phục vụ cho việc ra quyết định hành động"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Slide 46 nêu nguyên văn 3 kết luận: *Đo lường là nền tảng cải tiến quy trình • Số liệu phải phục vụ quyết định • Không đo hình thức*.",
    "tip": "Slide 46 nêu nguyên văn 3 kết luận: *Đo lường là nền tảng cải tiến quy trình • S..."
  },
  {
    "id": 35,
    "chapter": 3,
    "tag": "Slide 3",
    "type": "multiple",
    "question": "Một số lập trình viên cho rằng: *\"Dự án phần mềm thay đổi liên tục theo phương pháp Agile, việc gì phải mất công ngồi lập kế hoạch dự án ban đầu?\"*. Dựa trên nội dung cốt lõi của bài học (Slide 3), người quản lý dự án phải khẳng định **Vì sao bắt buộc phải lập kế hoạch dự án** dựa trên 3 nguyên nhân nền tảng nào?",
    "options": [
      "A. Phần mềm có độ phức tạp cao (nhiều thành phần, nhiều luồng tương tác logic phức tạp)",
      "B. Vì phần mềm là sản phẩm có độ lặp lại hoàn toàn giống hệt sản xuất công nghiệp hàng loạt",
      "C. Dự án tiềm ẩn nhiều rủi ro (rủi ro công nghệ, rủi ro con người, rủi ro biến động yêu cầu)",
      "D. Nguồn lực của tổ chức luôn ở trạng thái hạn chế (giới hạn về thời gian, ngân sách và nhân sự)",
      "E. Để có lý do kéo dài thời gian phát triển và trì hoãn ngày giao hàng cho khách hàng"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": "Slide 3 nêu 3 nguyên nhân cốt lõi: *Phần mềm phức tạp • Nhiều rủi ro • Nguồn lực hạn chế*.",
    "tip": "Slide 3 nêu 3 nguyên nhân cốt lõi: *Phần mềm phức tạp • Nhiều rủi ro • Nguồn lực..."
  },
  {
    "id": 36,
    "chapter": 3,
    "tag": "Slide 4, 32",
    "type": "multiple",
    "question": "Theo Roger Pressman, kế hoạch dự án được ví như *\"bản lộ trình (roadmap) định hướng cho cả nhóm\"*. Việc **Lập kế hoạch dự án nhằm đạt được những mục đích trọng yếu** nào sau đây?",
    "options": [
      "A. Phân bổ và tối ưu hóa các nguồn lực dự án",
      "B. Nhận diện sớm các rủi ro tiềm ẩn để có phương án phòng ngừa",
      "C. Giúp người quản lý dự án rảnh rỗi không cần giám sát gì trong suốt quá trình phát triển",
      "D. Thiết lập đường cơ sở (Baseline) làm cơ sở cho việc theo dõi và kiểm soát dự án",
      "E. Dự báo chính xác thời gian hoàn thành và chi phí ngân sách cần thiết",
      "F. Xác định rõ ràng các công việc và phạm vi cần làm"
    ],
    "answer": [
      0,
      1,
      3,
      4,
      5
    ],
    "explanation": "Slide 4 & 32 quy định mục đích lập kế hoạch: *Xác định công việc cần làm, dự báo thời gian & chi phí, phân bổ nguồn lực; Theo Pressman: Xác định phạm vi rõ ràng, Ước lượng chi phí & thời gian, Phân bổ nguồn lực, Nhận diện rủi ro, Làm cơ sở kiểm soát dự án (\"A project plan provides a roadmap for the team\")*.",
    "tip": "Slide 4 & 32 quy định mục đích lập kế hoạch: *Xác định công việc cần làm, dự báo..."
  },
  {
    "id": 37,
    "chapter": 3,
    "tag": "Slide 5, 32",
    "type": "multiple",
    "question": "Một **Bản kế hoạch dự án phần mềm hoàn chỉnh** cấu thành từ 4 thành phần trụ cột nào và điều gì sẽ xảy ra nếu dự án **Không có kế hoạch**?",
    "options": [
      "A. Nếu không có kế hoạch: Người quản lý không có thước đo chuẩn để đánh giá được các sai lệch công việc",
      "B. Dự án không có kế hoạch sẽ luôn hoàn thành đúng hạn vì nhân sự làm việc thoải mái không bị áp lực",
      "C. Nếu không có kế hoạch: Tổ chức không thể kiểm soát chi phí, dễ dẫn đến tình trạng vỡ ngân sách",
      "D. Nếu không có kế hoạch: Nhóm sẽ mất khả năng kiểm soát tiến độ thực tế",
      "E. Kế hoạch dự án chỉ cần ghi tên các thành viên trong nhóm, không cần ước lượng hay phân tích rủi ro",
      "F. Kế hoạch dự án gồm 4 phần: Phạm vi (Scope), Ước lượng (Estimates), Lịch trình (Schedule), Rủi ro (Risks)"
    ],
    "answer": [
      0,
      2,
      3,
      5
    ],
    "explanation": "Slide 5 & 32: *Kế hoạch dự án gồm: Phạm vi, Ước lượng, Lịch trình, Rủi ro*; *Nếu không có kế hoạch: Không kiểm soát tiến độ, Không kiểm soát chi phí, Không đánh giá được sai lệch*.",
    "tip": "Slide 5 & 32: *Kế hoạch dự án gồm: Phạm vi, Ước lượng, Lịch trình, Rủi ro*; *Nếu..."
  },
  {
    "id": 38,
    "chapter": 3,
    "tag": "Slide 6, 7, 8",
    "type": "multiple",
    "question": "Khi bắt đầu lập kế hoạch dự án, việc **Xác định Phạm vi phần mềm (Scope)** đòi hỏi người quản lý dự án phải làm rõ những nội dung gì và sử dụng các tài liệu nào?",
    "options": [
      "A. Xác định rõ Mục tiêu của hệ thống, các Chức năng chính và các Ràng buộc kỹ thuật/nghiệp vụ",
      "B. Để phạm vi ở trạng thái mở, khách hàng muốn thêm bất kỳ chức năng nào nhóm cũng phải làm ngay mà không cần bàn bạc",
      "C. Văn bản hóa phạm vi thông qua các tài liệu chuẩn: Tài liệu tầm nhìn (Vision document) và Tài liệu đặc tả yêu cầu mức cao (High-level SRS)",
      "D. Phạm vi phần mềm chỉ bao gồm danh sách các dòng code sẽ viết, không cần quan tâm đến mục tiêu kinh doanh",
      "E. Định nghĩa rõ ranh giới hệ thống: Những gì hệ thống sẽ làm và Những gì hệ thống không làm"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Slide 6, 7, 8 chỉ rõ: *Phạm vi là: Những gì hệ thống sẽ làm & Những gì hệ thống không làm*; *Xác định phạm vi: Mục tiêu, Chức năng chính, Ràng buộc*; *Tài liệu: Vision, SRS mức cao*.",
    "tip": "Slide 6, 7, 8 chỉ rõ: *Phạm vi là: Những gì hệ thống sẽ làm & Những gì hệ thống ..."
  },
  {
    "id": 39,
    "chapter": 3,
    "tag": "Slide 33",
    "type": "multiple",
    "question": "Theo Roger Pressman (Slide 33), một **Bản mô tả phạm vi phần mềm đầy đủ** bắt buộc phải bao quát 4 thành phần nào và **Hậu quả nghiêm trọng nếu phạm vi không rõ ràng** là gì?",
    "options": [
      "A. Hậu quả nếu phạm vi không rõ: Dẫn đến ước lượng sai lệch nghiêm trọng về thời gian và chi phí",
      "B. Hậu quả nếu phạm vi không rõ: Dẫn đến xung đột, mâu thuẫn gay gắt với khách hàng trong giai đoạn nghiệm thu",
      "C. Phạm vi không rõ ràng là cơ hội tốt để nhóm phát triển kéo dài dự án thêm nhiều năm mà không sợ bị phàn nàn",
      "D. Nguyên tắc vàng của Pressman: *\"The scope must be bounded and clearly understood\"* (Phạm vi phải có ranh giới và được thấu hiểu rõ ràng)",
      "E. 4 thành phần phạm vi gồm: Chức năng (Functions), Hiệu năng (Performance), Ràng buộc (Constraints), Giao diện tương tác (Interfaces)",
      "F. Hậu quả nếu phạm vi không rõ: Dẫn đến hiện tượng Scope Creep (phạm vi phình to không kiểm soát)"
    ],
    "answer": [
      0,
      1,
      3,
      4,
      5
    ],
    "explanation": "Slide 33 nêu chi tiết: *Phạm vi gồm: Chức năng (Functions), Hiệu năng (Performance), Ràng buộc (Constraints), Giao diện (Interfaces)*; *Hậu quả nếu phạm vi không rõ: Scope creep, Ước lượng sai, Mâu thuẫn khách hàng*; *Pressman: The scope must be bounded and clearly understood*.",
    "tip": "Slide 33 nêu chi tiết: *Phạm vi gồm: Chức năng (Functions), Hiệu năng (Performan..."
  },
  {
    "id": 40,
    "chapter": 3,
    "tag": "Slide 10, 11, 12",
    "type": "multiple",
    "question": "Trong công tác lập kế hoạch, **Nguồn lực dự án phần mềm** được phân loại như thế nào và nhóm thường đối mặt với những vấn đề nguồn lực nào?",
    "options": [
      "A. Phân loại nguồn lực tổng quát (Slide 10) gồm 4 yếu tố: Nhân lực, Phần cứng, Phần mềm, Thời gian",
      "B. Các vấn đề phổ biến về nguồn lực (Slide 12): Thiếu người, Thiếu kỹ năng chuyên môn phù hợp, Phân bổ nguồn lực sai lệch/thiếu cân đối",
      "C. Thời gian là đại lượng vô hạn trong dự án phần mềm nên không cần quản lý",
      "D. Cơ cấu nhân lực dự án (Slide 11) gồm các vai trò chính: Project Manager (PM), Developer (Lập trình), Tester (Kiểm thử)",
      "E. Nguồn lực phần cứng và phần mềm luôn có sẵn miễn phí nên không cần đưa vào kế hoạch"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "Slide 10: *Phân loại nguồn lực: Nhân lực, Phần cứng, Phần mềm, Thời gian*; Slide 11: *Nhân lực gồm: PM, Developer, Tester*; Slide 12: *Vấn đề nguồn lực: Thiếu người, Thiếu kỹ năng, Phân bổ sai*.",
    "tip": "Slide 10: *Phân loại nguồn lực: Nhân lực, Phần cứng, Phần mềm, Thời gian*; Slide..."
  },
  {
    "id": 41,
    "chapter": 3,
    "tag": "Slide 13, 35",
    "type": "multiple",
    "question": "Roger Pressman phân chia tài nguyên dự án thành **3 nhóm nguồn lực (Resources) kinh điển**. Hãy xác định tên chuẩn của 3 nhóm này cùng ví dụ cụ thể của chúng:",
    "options": [
      "A. **Human Resources (Nhân lực)**: Gồm đội ngũ phát triển như Developer, Tester, PM (được bài giảng nhấn mạnh là nguồn lực quan trọng nhất)",
      "B. Financial Speculation Resources: Hoạt động đầu tư chứng khoán của công ty phát triển",
      "C. **Environmental Resources (Môi trường)**: Gồm hạ tầng phần cứng, Server máy chủ, máy tính phát triển, mạng nội bộ, công cụ kiểm thử",
      "D. Nhân lực chỉ đóng vai trò thứ cấp so với phần cứng máy tính và đường truyền Internet",
      "E. **Reusable Software Resources (Phần mềm tái sử dụng)**: Gồm Frameworks, thư viện mã nguồn, các thành phần COTS (Commercial Off-The-Shelf)"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Slide 13 & 35: 3 nhóm nguồn lực theo Pressman gồm: *1. Human Resources (Nhân lực - quan trọng nhất), 2. Reusable Software Resources (Phần mềm tái sử dụng), 3. Environmental Resources (Môi trường)*.",
    "tip": "Slide 13 & 35: 3 nhóm nguồn lực theo Pressman gồm: *1. Human Resources (Nhân lực..."
  },
  {
    "id": 42,
    "chapter": 3,
    "tag": "Slide 14, 15, 16",
    "type": "multiple",
    "question": "Hoạt động **Định lượng dự án phần mềm (Project Estimation)** là bước then chốt để lập kế hoạch. Những phát biểu nào sau đây đúng về bản chất của hoạt động này?",
    "options": [
      "A. Các đại lượng và đơn vị đo lường thường dùng: Số dòng lệnh (LOC), Điểm chức năng (Function Point), Người-tháng (Person-month)",
      "B. Định lượng dự án là hoạt động: Ước lượng kích thước (Size), Ước lượng công sức nỗ lực (Effort), Ước lượng chi phí (Cost)",
      "C. Person-month (người-tháng) là đơn vị dùng để đo kích thước dung lượng file cài đặt phần mềm",
      "D. Định lượng phần mềm là hoạt động đoán mò và ép con số deadline theo ý muốn chủ quan của khách hàng",
      "E. Cơ sở để định lượng đáng tin cậy dựa trên: Kinh nghiệm chuyên gia, Dữ liệu lịch sử từ các dự án tương tự, và Các mô hình toán học/kinh nghiệm"
    ],
    "answer": [
      0,
      1,
      4
    ],
    "explanation": "Slide 14, 15, 16 nêu rõ: *Định lượng là: Ước lượng kích thước, công sức, chi phí*; *Dựa trên: Kinh nghiệm, Dữ liệu lịch sử, Mô hình toán học*; *Đại lượng: LOC, Function Point, Person-month*.",
    "tip": "Slide 14, 15, 16 nêu rõ: *Định lượng là: Ước lượng kích thước, công sức, chi phí..."
  },
  {
    "id": 43,
    "chapter": 3,
    "tag": "Slide 17, 36",
    "type": "multiple",
    "question": "Một dự án phần mềm dự kiến có quy mô 20,000 dòng lệnh (20,000 LOC). Năng suất trung bình của đội ngũ là 800 LOC / người-tháng. Nếu bố trí nhóm 5 lập trình viên làm việc toàn thời gian:",
    "options": [
      "A. Trong thực tế, mối quan hệ giữa số người và thời gian phát triển phần mềm không hoàn toàn là quan hệ tuyến tính hoàn hảo",
      "B. Thời gian hoàn thành dự kiến: Duration = (2 / 5 person)-month5 người = 5 tháng",
      "C. Cảnh báo quan trọng của Pressman: Phép ước lượng theo LOC chỉ mang tính chất tương đối và phụ thuộc rất lớn vào ngôn ngữ lập trình",
      "D. Nếu tuyển ngay 25 người vào làm thì chắc chắn dự án sẽ hoàn thành tuyệt đối chỉ trong vòng đúng 1 tháng mà không phát sinh thêm chi phí giao tiếp",
      "E. Nỗ lực công sức tính theo công thức: Effort = (2 / 0,000 LOC800 LOC)/PM = 25 person-month"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Slide 17, 36: Effort = 25 PM; Duration = 5 tháng; Cảnh báo Pressman: *LOC chỉ ước lượng tương đối, phụ thuộc ngôn ngữ*.",
    "tip": "Slide 17, 36: Effort = 25 PM; Duration = 5 tháng; Cảnh báo Pre..."
  },
  {
    "id": 44,
    "chapter": 3,
    "tag": "Slide 18, 37",
    "type": "multiple",
    "question": "Một dự án phân tích có tổng Điểm chức năng chưa điều chỉnh là UFP = 200. Theo dữ liệu tổ chức, trung bình 1 FP ≈ 50 LOC đối với ngôn ngữ lập trình đang dùng, năng suất đội ngũ đạt 1,000 LOC/person-month. Dựa trên bài tập thực hành trong bài giảng:",
    "options": [
      "A. Quy mô tương đương: LOC = 200 × 50 = 10,000 LOC",
      "B. Ước lượng bằng Function Point tốn kém hơn và bắt buộc phải viết mã nguồn trước mới tính được điểm chức năng",
      "C. Nỗ lực công sức: Effort = (1 / 0,000 LOC1,000 LOC)/PM = 10 person-month",
      "D. Điểm nhấn bài học: Ước lượng theo Function Point (FP) có thể triển khai được ngay từ giai đoạn rất sớm (ngay khi có tài liệu phân tích yêu cầu)",
      "E. Điểm nhấn bài học: Ước lượng theo Function Point (FP) tốt hơn LOC vì FP không phụ thuộc ngôn ngữ lập trình"
    ],
    "answer": [
      0,
      2,
      3,
      4
    ],
    "explanation": "Slide 18 & 37: LOC = 10,000; Effort = 10 person-month; FP tốt hơn LOC vì: *Không phụ thuộc ngôn ngữ, Dùng được từ giai đoạn sớm*.",
    "tip": "Slide 18 & 37: LOC = 10,000; Effort = 10 person-month; FP tốt hơn LOC..."
  },
  {
    "id": 45,
    "chapter": 3,
    "tag": "Slide 19, 20, 21, 22",
    "type": "multiple",
    "question": "Kỹ thuật **Phân rã phần mềm (Decomposition)** là kỹ năng quan trọng bậc nhất của người làm lập kế hoạch. Hãy chọn các nhận định đúng về kỹ thuật này:",
    "options": [
      "A. Công cụ trực quan và phổ biến nhất để thực hiện phân rã là Cấu trúc phân rã công việc WBS (Work Breakdown Structure)",
      "B. Phân rã dự án làm nhóm phát triển mất thời gian vô ích và làm tăng độ rủi ro của hệ thống",
      "C. Nhận định của Roger Pressman: *\"Decomposition reduces uncertainty\"* (Phân rã làm giảm thiểu độ không chắc chắn của dự án)",
      "D. Phân rã theo chức năng: Chia hệ thống thành các Module, Sub-module, Feature (ví dụ: Module giỏ hàng, Module thanh toán)",
      "E. Phân rã theo công việc: Chia dự án theo các giai đoạn quy trình phát triển (Phân tích → Thiết kế → Lập trình → Kiểm thử → Triển khai)",
      "F. Bản chất của phân rã là chia nhỏ dự án lớn thành các phần việc cụ thể, giúp dự án dễ ước lượng và dễ quản lý hơn"
    ],
    "answer": [
      0,
      2,
      3,
      4,
      5
    ],
    "explanation": "Slide 19, 20, 21, 22: *Phân rã: Chia nhỏ, dễ ước lượng, dễ quản lý (\"Decomposition reduces uncertainty\")*; *2 cách phân rã: Theo chức năng (Module, Feature) và Theo công việc (Phân tích, Thiết kế, Lập trình, Kiểm thử)*; *Công cụ: WBS*.",
    "tip": "Slide 19, 20, 21, 22: *Phân rã: Chia nhỏ, dễ ước lượng, dễ quản lý (\"Decompositi..."
  },
  {
    "id": 46,
    "chapter": 3,
    "tag": "Slide 24, 25, 26, 27",
    "type": "multiple",
    "question": "Để hạn chế việc ước lượng dựa vào cảm tính cá nhân, ngành công nghệ phần mềm sử dụng các **Mô hình định lượng dựa trên kinh nghiệm (Empirical Estimation Models)** như COCOMO. Những nhận định nào sau đây đúng?",
    "options": [
      "A. Ưu và nhược điểm của mô hình kinh nghiệm: Tính toán nhanh chóng, nhưng phụ thuộc rất lớn vào độ chính xác của dữ liệu đầu vào",
      "B. Mục tiêu của mô hình ước lượng: Giảm sự phụ thuộc vào trực giác cảm tính và cung cấp cơ sở khoa học, có thể lượng hóa được",
      "C. Các mô hình kinh nghiệm cho phép PM không cần hiểu nghiệp vụ mà vẫn đưa ra kết quả ước lượng đúng tuyệt đối 100%",
      "D. Mô hình COCOMO cơ bản giúp tính toán 3 thông số then chốt: Kích thước (Size), Công sức (Effort), và Thời gian biểu (Schedule)",
      "E. Cơ chế hoạt động: Mô hình kinh nghiệm dựa trên việc phân tích dữ liệu quá khứ của hàng trăm dự án và căn cứ vào đặc trưng cụ thể của dự án mới"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Slide 24, 25, 26, 27 nêu rõ: *Giảm phụ thuộc cảm tính, có cơ sở khoa học • Dựa dữ liệu quá khứ và đặc trưng dự án • COCOMO: Size, Effort, Schedule • Ưu nhược điểm: Nhanh, nhưng phụ thuộc dữ liệu đầu vào*.",
    "tip": "Slide 24, 25, 26, 27 nêu rõ: *Giảm phụ thuộc cảm tính, có cơ sở khoa học • Dựa d..."
  },
  {
    "id": 47,
    "chapter": 3,
    "tag": "Slide 28, 39",
    "type": "multiple",
    "question": "Trong mô hình **Basic COCOMO (COCOMO cơ bản)** do Barry Boehm phát triển:",
    "options": [
      "A. Ở chế độ phát triển thông thường (Organic mode - nhóm nhỏ, quen thuộc với bài toán), các hệ số chuẩn là: a = 2.4 và b = 1.05",
      "B. Công thức Basic COCOMO là hàm bậc nhất: Effort = a × KLOC + b",
      "C. Với dự án Organic mode có quy mô KLOC = 32, biết 32^1.05 ≈ 35, nỗ lực tính được là: Effort ≈ 2.4 × 35 ≈ 84 person-month",
      "D. Nhận xét quản trị: Số mũ b = 1.05 > 1 phản ánh rằng khi kích thước phần mềm tăng lên thì độ phức tạp và công sức cần thiết sẽ tăng theo hàm phi tuyến, chứ không phải tăng đều tuyến tính đơn giản",
      "E. Công thức tính toán nỗ lực công sức chuẩn: Effort = a × (KLOC)^b (đơn vị: person-month)"
    ],
    "answer": [
      0,
      2,
      3,
      4
    ],
    "explanation": "Slide 28 & 39: Công thức chuẩn: Effort = a × (KLOC)^b; Organic mode: a = 2.4; b = 1.05; KLOC = 32 → Effort ≈ 84 PM; Nhận xét: *Effort cao hơn tính đơn giản, COCOMO phản ánh độ phức tạp tăng phi tuyến*.",
    "tip": "Slide 28 & 39: Công thức chuẩn: Effort = a × (KLOC)^b; Organic mode: a =..."
  },
  {
    "id": 48,
    "chapter": 3,
    "tag": "Slide 29, 40",
    "type": "multiple",
    "question": "Trong một dự án thực tế, người Quản lý dự án (PM) ước lượng theo trực giác và kinh nghiệm cá nhân là mất **6 tháng**, trong khi mô hình định lượng COCOMO lại đưa ra kết quả là **10 tháng**. Người PM chuyên nghiệp cần xử lý tình huống bất đồng này như thế nào?",
    "options": [
      "A. Giải pháp: Sử dụng kết hợp nhiều phương pháp ước lượng khác nhau (ước lượng từ dưới lên, tương đương, mô hình toán học)",
      "B. Giải pháp: Đặt kết quả của các phương pháp lên bàn cân để so sánh và phân tích nguyên nhân tạo ra sự sai lệch",
      "C. Giải pháp: Hiệu chỉnh kết quả tính toán dựa trên kinh nghiệm thực tế và đặc thù riêng của tổ chức",
      "D. Cách xử lý tốt nhất là luôn chọn ngay con số 6 tháng để làm khách hàng vui lòng ký hợp đồng trước rồi tính sau",
      "E. Lời khuyên của Pressman: *\"Estimation should be iterative\"* (Ước lượng phải là một quá trình liên tục lặp lại và tinh chỉnh dần qua từng giai đoạn)",
      "F. Nguyên tắc nền tảng: Không bao giờ nên tin cậy tuyệt đối vào một nguồn ước lượng duy nhất"
    ],
    "answer": [
      0,
      1,
      2,
      4,
      5
    ],
    "explanation": "Slide 29 & 40: *Không nên tin một nguồn duy nhất; Giải pháp: Dùng nhiều phương pháp, So sánh kết quả, Điều chỉnh theo kinh nghiệm tổ chức; Pressman: Estimation should be iterative*.",
    "tip": "Slide 29 & 40: *Không nên tin một nguồn duy nhất; Giải pháp: Dùng nhiều phương p..."
  },
  {
    "id": 49,
    "chapter": 4,
    "tag": "Slide 4, 5, 6",
    "type": "multiple",
    "question": "Khi bàn về công tác quản trị dự án phần mềm, người quản lý dự án (PM) cần hiểu đúng bản chất **Khái niệm và Thuộc tính của Rủi ro (Risk)** thông qua những đặc trưng cốt lõi nào sau đây?",
    "options": [
      "A. Rủi ro về bản chất mang tính \"không chắc chắn\" (uncertainty)",
      "B. Rủi ro là sự kiện có khả năng xảy ra trong tương lai (chưa xảy ra ở thời điểm hiện tại)",
      "C. Rủi ro là những sai sót, sự cố kỹ thuật chắc chắn 100% đã xảy ra trên môi trường máy chủ thực tế",
      "D. Công thức định lượng mối quan hệ: Risk = Probability × Impact (Xác suất × Tác động)",
      "E. Thuộc tính của rủi ro bao gồm: Có xác suất xảy ra (0 < P < 1) và Có hậu quả / mức độ thiệt hại (Loss)",
      "F. Rủi ro là sự kiện có thể gây ra ảnh hưởng hoặc thiệt hại tiêu cực đối với mục tiêu dự án"
    ],
    "answer": [
      0,
      1,
      3,
      4,
      5
    ],
    "explanation": "Slide 4, 5, 6 xác định chuẩn: *Rủi ro = sự kiện có khả năng xảy ra trong tương lai • Có thể gây ảnh hưởng tiêu cực • Thuộc tính: Không chắc chắn, Có xác suất xảy ra, Có hậu quả (thiệt hại) • Risk = Probability x Impact*. Sự kiện đã xảy ra 100% là Issue, không phải Risk.",
    "tip": "Slide 4, 5, 6 xác định chuẩn: *Rủi ro = sự kiện có khả năng xảy ra trong tương l..."
  },
  {
    "id": 50,
    "chapter": 4,
    "tag": "Slide 7",
    "type": "multiple",
    "question": "Trong các cuộc họp tiến độ, việc nhầm lẫn giữa **Rủi ro (Risk)** và **Vấn đề / Sự cố (Issue)** thường dẫn đến hành động sai lệch. Bảng đối chiếu ở Slide 7 phân biệt sự khác nhau mang tính bản chất giữa hai khái niệm này dựa trên những tiêu chí nào?",
    "options": [
      "A. Về hành động ứng phó: Rủi ro đòi hỏi phải lập kế hoạch dự phòng (Precaution/Contingency); Vấn đề đòi hỏi phải kích hoạt xử lý giải quyết ngay lập tức (Action/Resolve)",
      "B. Về xác suất: Rủi ro gắn liền với xác suất (0 < P < 1); Vấn đề có xác suất là 100% xảy ra",
      "C. Rủi ro và Vấn đề là hai từ hoàn toàn đồng nghĩa, cùng phản ánh một sự việc đã xảy ra trên máy chủ",
      "D. Về trạng thái xảy ra: Rủi ro là sự kiện chưa xảy ra; Vấn đề (Issue) là sự kiện đã xảy ra",
      "E. Về chi phí: Rủi ro luôn gây tốn kém tiền bạc gấp đôi so với các vấn đề đã xảy ra"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "Bảng so sánh Slide 7 quy định rõ: *Trạng thái (Risk: Chưa xảy ra vs Issue: Đã xảy ra) • Xác suất (Risk: Có xác suất vs Issue: 100% xảy ra) • Hành động (Risk: Cần dự phòng vs Issue: Cần xử lý)*.",
    "tip": "Bảng so sánh Slide 7 quy định rõ: *Trạng thái (Risk: Chưa xảy ra vs Issue: Đã xả..."
  },
  {
    "id": 51,
    "chapter": 4,
    "tag": "Slide 8",
    "type": "multiple",
    "question": "Đại lượng **Mức độ phơi nhiễm rủi ro (Risk Exposure - RE)** là chỉ số tài chính và định lượng quan trọng nhất để PM so sánh các rủi ro. Hãy chọn các phát biểu đúng về RE:",
    "options": [
      "A. RE càng thấp thì rủi ro đó càng đòi hỏi mức độ ưu tiên xử lý khẩn cấp nhất",
      "B. Ví dụ bài học: Nếu rủi ro có xác suất xảy ra P = 0.4 và thiệt hại ước tính Loss = 50,000 USD, thì mức độ phơi nhiễm là RE = 0.4 × 50,000 USD = 20,000 USD",
      "C. Đơn vị của RE thường được quy đổi thành tiền tệ (USD hoặc VNĐ) hoặc đơn vị công sức (người-tháng)",
      "D. Công thức tính toán là thương số: RE = (Probability / Loss)",
      "E. Công thức tính toán chuẩn: RE = Probability × Loss (Xác suất xảy ra × Mức độ thiệt hại ước tính)"
    ],
    "answer": [
      1,
      2,
      4
    ],
    "explanation": "Slide 8 nêu rõ: RE = Probability × Loss; Ví dụ P = 0.4, Loss = 50,000 USD → RE = 20,000 USD.",
    "tip": "Slide 8 nêu rõ: RE = Probability × Loss; Ví dụ P = 0.4, Loss = 50,000 USD ..."
  },
  {
    "id": 52,
    "chapter": 4,
    "tag": "Slide 9, 10",
    "type": "multiple",
    "question": "Tại sao các chuyên gia kỹ nghệ phần mềm đều nhận định **Dự án phần mềm có mức độ rủi ro rất cao** và **Vai trò của quản lý rủi ro** là gì?",
    "options": [
      "A. Vì sao rủi ro cao: Sản phẩm phần mềm mang tính vô hình, khó kiểm soát chất lượng bằng mắt thường",
      "B. Quản lý rủi ro giúp triệt tiêu hoàn toàn 100% mọi bất trắc và đảm bảo phần mềm không có lỗi",
      "C. Vì sao rủi ro cao: Yêu cầu của khách hàng liên tục thay đổi trong suốt quá trình phát triển",
      "D. Vai trò của quản lý rủi ro: Nâng cao tỷ lệ khả năng thành công và cải thiện chất lượng của các quyết định quản lý",
      "E. Vai trò của quản lý rủi ro: Giúp giảm bớt sự bất ngờ thụ động cho nhóm",
      "F. Vì sao rủi ro cao: Công nghệ thông tin biến đổi với tốc độ rất nhanh, công cụ cũ nhanh chóng bị lỗi thời",
      "G. Vì sao rủi ro cao: Quá trình phát triển phụ thuộc rất lớn vào năng lực và tâm lý của con người"
    ],
    "answer": [
      0,
      2,
      3,
      4,
      5,
      6
    ],
    "explanation": "Slide 9 nêu lý do rủi ro cao: *Yêu cầu thay đổi • Sản phẩm vô hình • Phụ thuộc con người • Công nghệ thay đổi nhanh*; Slide 10 nêu vai trò: *Giảm bất ngờ • Tăng khả năng thành công • Cải thiện ra quyết định*.",
    "tip": "Slide 9 nêu lý do rủi ro cao: *Yêu cầu thay đổi • Sản phẩm vô hình • Phụ thuộc c..."
  },
  {
    "id": 53,
    "chapter": 4,
    "tag": "Slide 11, 12, 13, 14, 17",
    "type": "multiple",
    "question": "Roger Pressman phân chia rủi ro phần mềm thành **3 nhóm rủi ro chính (Three Major Risk Categories)**. Hãy chọn các phát biểu đúng về định nghĩa và ví dụ cụ thể của từng nhóm:",
    "options": [
      "A. Rủi ro kinh doanh (Business Risk) được coi là nguy hiểm nhất vì dù phần mềm làm ra hoàn hảo về mặt kỹ thuật, nhưng nếu khách hàng hủy dự án hoặc không ai mua thì toàn bộ giá trị dự án vẫn trở về con số 0",
      "B. Technical Risks chỉ gồm các rủi ro liên quan đến việc hỏng hóc chuột và bàn phím máy tính",
      "C. **Project Risks (Rủi ro dự án)**: Đe dọa trực tiếp đến tiến độ và nguồn lực dự án (ví dụ: Trễ tiến độ, Ước lượng sai, Thiếu nhân lực, Thay đổi phạm vi)",
      "D. **Technical Risks (Rủi ro kỹ thuật)**: Đe dọa chất lượng và tính khả thi kỹ thuật của phần mềm (ví dụ: Sử dụng công nghệ mới chưa kiểm chứng, Thiết kế kiến trúc chưa rõ, Lỗi tích hợp hệ thống, Hiệu năng không đạt)",
      "E. **Business Risks (Rủi ro kinh doanh)**: Đe dọa khả năng sinh lời và sự tồn tại thương mại của sản phẩm (ví dụ: Thị trường biến động, Khách hàng đột ngột hủy dự án, Sản phẩm không sinh lợi, Thay đổi chiến lược kinh doanh)"
    ],
    "answer": [
      0,
      2,
      3,
      4
    ],
    "explanation": "Slide 11–14 & 17 phân tích chi tiết 3 nhóm rủi ro: *Project Risks • Technical Risks • Business Risks*; Thảo luận Slide 17: *Business Risk nguy hiểm nhất vì dù làm tốt kỹ thuật nhưng không bán được hoặc khách hủy thì dự án bằng 0*.",
    "tip": "Slide 11–14 & 17 phân tích chi tiết 3 nhóm rủi ro: *Project Risks • Technical Ri..."
  },
  {
    "id": 54,
    "chapter": 4,
    "tag": "Slide 15",
    "type": "multiple",
    "question": "Theo giáo trình của Roger Pressman (Slide 15), có **4 nguồn rủi ro phổ biến hàng đầu** xuất hiện trong hầu hết các dự án công nghệ thông tin gồm những nguồn rủi ro nào?",
    "options": [
      "A. Fluctuations in office rental prices (Biến động giá thuê văn phòng làm việc)",
      "B. **Customer characteristics** (Đặc trưng của khách hàng: khả năng giao tiếp, tính quyết đoán, hiểu biết về CNTT)",
      "C. **Staff experience** (Kinh nghiệm và trình độ kỹ năng thực tế của đội ngũ nhân sự)",
      "D. **Size uncertainty** (Sự không chắc chắn về kích thước và quy mô thực tế của phần mềm)",
      "E. **Process maturity** (Độ trưởng thành của quy trình phát triển phần mềm trong tổ chức)",
      "F. Power outages during rainstorms (Hiện tượng mất điện khi trời mưa bão)"
    ],
    "answer": [
      1,
      2,
      3,
      4
    ],
    "explanation": "Slide 15 liệt kê chính xác 4 nguồn rủi ro phổ biến theo Pressman: *Size uncertainty • Customer characteristics • Process maturity • Staff experience*.",
    "tip": "Slide 15 liệt kê chính xác 4 nguồn rủi ro phổ biến theo Pressman: *Size uncertai..."
  },
  {
    "id": 55,
    "chapter": 4,
    "tag": "Slide 18, 42",
    "type": "multiple",
    "question": "**Quy trình quản lý rủi ro chuẩn mực** trong kỹ nghệ phần mềm bao gồm 4 bước nối tiếp nhau theo đúng chu trình nào sau đây?",
    "options": [
      "A. Bước 4: Theo dõi và giám sát rủi ro (Risk Monitoring)",
      "B. Bước 3: Lập kế hoạch ứng phó rủi ro (Risk Planning)",
      "C. Bước 1: Nhận diện rủi ro (Risk Identification)",
      "D. Bước 2: Phân tích và định lượng rủi ro (Risk Analysis)",
      "E. Chu trình ngược lại: Monitor rủi ro trước rồi mới đi tìm hiểu xem rủi ro đó là gì",
      "F. Chu trình tóm tắt chuẩn xác: Identify → Analyze → Plan → Monitor"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      5
    ],
    "explanation": "Slide 18 & 42 quy định quy trình 4 bước: *Nhận diện (Identify) → Phân tích (Analyze) → Lập kế hoạch (Plan) → Theo dõi (Monitor)*.",
    "tip": "Slide 18 & 42 quy định quy trình 4 bước: *Nhận diện (Identify) → Phâ..."
  },
  {
    "id": 56,
    "chapter": 4,
    "tag": "Slide 19, 20, 21, 22, 23",
    "type": "multiple",
    "question": "Trong bước đầu tiên (Nhận diện rủi ro), bài giảng giới thiệu **4 kỹ thuật xác định rủi ro kinh điển**. Hãy chọn các nhận định đúng về bản chất của từng kỹ thuật:",
    "options": [
      "A. Checklist là kỹ thuật chỉ áp dụng cho kiểm thử phần cứng, không dùng cho phần mềm",
      "B. **SWOT**: Ma trận phân tích điểm mạnh (Strength), điểm yếu (Weakness), cơ hội (Opportunity) và thách thức (Threat) trong dự án",
      "C. **Historical data**: Khai thác dữ liệu lịch sử từ các dự án trước, báo cáo bài học kinh nghiệm (Lessons learned) và hồ sơ lưu trữ lỗi cũ",
      "D. Brainstorming quy định ai đưa ra rủi ro viển vông sẽ bị đuổi ngay ra khỏi phòng họp",
      "E. **Brainstorming**: Kỹ thuật họp động não nhóm, khuyến khích các thành viên liệt kê rủi ro tự do và tuyệt đối không phê phán ý kiến của nhau trong lúc liệt kê",
      "F. **Checklist**: Sử dụng bảng danh mục rủi ro chuẩn đã được đúc kết từ trước (như danh mục về Scope change, Schedule slip, Technology risk, People risk)"
    ],
    "answer": [
      1,
      2,
      4,
      5
    ],
    "explanation": "Slide 19–23 trình bày 4 kỹ thuật: *Brainstorming (Họp nhóm, Liệt kê tự do, Không phê phán) • Checklist (Danh mục rủi ro chuẩn) • Historical data (Dự án trước, Lessons learned, Báo cáo lỗi) • SWOT*.",
    "tip": "Slide 19–23 trình bày 4 kỹ thuật: *Brainstorming (Họp nhóm, Liệt kê tự do, Không..."
  },
  {
    "id": 57,
    "chapter": 4,
    "tag": "Slide 26, 28, 29, 30, 32",
    "type": "multiple",
    "question": "Về các công cụ và nguyên tắc dùng cho hoạt động **Định lượng, Xếp hạng và Sàng lọc rủi ro**:",
    "options": [
      "A. Khi sàng lọc, PM chỉ cần quan tâm đến rủi ro có xác suất cao nhất, còn mức độ thiệt hại bao nhiêu không quan trọng",
      "B. Nguyên tắc sàng lọc (Slide 32): Tuyệt đối không được bỏ qua các rủi ro có xác suất xảy ra thấp nhưng nếu xảy ra thì mức độ thiệt hại mang tính hủy diệt (ví dụ sự cố rò rỉ dữ liệu khách hàng)",
      "C. Ma trận rủi ro (Risk Matrix 3x3) trực quan hóa mức độ nghiêm trọng dựa trên hai trục: Xác suất (Probability: Low - Med - High) và Tác động (Impact: Low - Med - High)",
      "D. Xếp hạng rủi ro thường chia thành 3 cấp độ ưu tiên: Cao (High), Trung bình (Medium), Thấp (Low)",
      "E. Hoạt động định lượng rủi ro gồm việc: Gán xác suất xảy ra (từ 0 đến 1), Ước lượng mức độ thiệt hại (Loss), và Tính chỉ số RE",
      "F. Nguyên tắc sàng lọc (Slide 32): Ưu tiên tập trung nguồn lực xử lý các rủi ro có chỉ số RE cao nhất"
    ],
    "answer": [
      1,
      2,
      3,
      4,
      5
    ],
    "explanation": "Slide 26, 28, 29, 30, 32 nêu rõ: *Định lượng: Gán xác suất (0-1), Ước lượng thiệt hại, Tính RE • Xếp hạng: High, Medium, Low • Risk Matrix 3x3 • Nguyên tắc sàng lọc: Ưu tiên RE cao, Không bỏ qua rủi ro hiếm nhưng thiệt hại lớn*.",
    "tip": "Slide 26, 28, 29, 30, 32 nêu rõ: *Định lượng: Gán xác suất (0-1), Ước lượng thiệ..."
  },
  {
    "id": 58,
    "chapter": 4,
    "tag": "Slide 34, 35",
    "type": "multiple",
    "question": "Khi lập kế hoạch ứng phó rủi ro, người quản lý dự án có **4 chiến lược xử lý rủi ro kinh điển**. Hãy chọn các cặp ghép nối chính xác giữa tên chiến lược và hành động thực tế:",
    "options": [
      "A. Chiến lược Avoid và Transfer là giống hệt nhau về bản chất thực hiện",
      "B. **Mitigate (Giảm thiểu rủi ro)**: Thực hiện các hành động chủ động nhằm làm giảm xác suất xảy ra hoặc làm giảm mức độ thiệt hại của rủi ro (ví dụ: làm bản prototype thử nghiệm trước, đào tạo nhân sự, tăng cường kiểm thử sớm)",
      "C. **Transfer (Chuyển giao rủi ro)**: Chuyển trách nhiệm thiệt hại sang bên thứ ba (ví dụ: thuê ngoài đơn vị chuyên gia bảo mật uy tín phát triển cổng thanh toán, mua bảo hiểm rủi ro phần mềm)",
      "D. **Accept (Chấp nhận rủi ro)**: Chấp nhận khả năng rủi ro có thể xảy ra và chủ động thiết lập quỹ dự phòng ngân sách và quỹ thời gian đệm (Buffer) để khắc phục nếu rủi ro ập đến",
      "E. **Avoid (Tránh rủi ro)**: Thay đổi kế hoạch hoặc thiết kế để loại bỏ hoàn toàn nguyên nhân gây ra rủi ro (ví dụ: quyết định không dùng công nghệ AI thử nghiệm nữa mà chuyển sang dùng thuật toán truyền thống đã ổn định)",
      "F. **Ignore (Lờ đi rủi ro)**: Giả vờ không biết để dự án không bị tăng chi phí dự phòng"
    ],
    "answer": [
      1,
      2,
      3,
      4
    ],
    "explanation": "Slide 34, 35 định nghĩa 4 chiến lược chuẩn: *Avoid (Tránh) • Mitigate (Giảm thiểu) • Transfer (Chuyển giao) • Accept (Chấp nhận)*.",
    "tip": "Slide 34, 35 định nghĩa 4 chiến lược chuẩn: *Avoid (Tránh) • Mitigate (Giảm thiể..."
  },
  {
    "id": 59,
    "chapter": 4,
    "tag": "Slide 35, 57",
    "type": "single",
    "question": "Trong một dự án xây dựng ứng dụng tài chính, đội ngũ nhận diện được rủi ro: *\"Công nghệ thư viện AI nhận diện khuôn mặt mới chọn chưa thực sự ổn định\"*. PM quyết định chỉ đạo: **Cho một nhóm nhỏ làm bản Prototype thử nghiệm trước trong 2 tuần, đồng thời gửi lập trình viên đi đào tạo chuyên sâu và đưa quy trình kiểm thử vào sớm**. Đây là biểu hiện cụ thể của chiến lược xử lý nào?",
    "options": [
      "A. Chiến lược Chấp nhận (Accept)",
      "B. Chiến lược Giảm thiểu (Mitigate)",
      "C. Chiến lược Tránh (Avoid)",
      "D. Chiến lược Chuyển giao (Transfer)"
    ],
    "answer": 1,
    "explanation": "Slide 35 & 57 nêu rõ: *Mitigate = Giảm xác suất hoặc giảm tác động bằng cách làm Prototype trước, Đào tạo nhân sự, Kiểm thử sớm*.",
    "tip": "Slide 35 & 57 nêu rõ: *Mitigate = Giảm xác suất hoặc giảm tác động bằng cách làm..."
  },
  {
    "id": 60,
    "chapter": 4,
    "tag": "Slide 36, 37, 41",
    "type": "multiple",
    "question": "Về công tác **Theo dõi rủi ro (Risk Monitoring)** và tài liệu **Sổ đăng ký rủi ro (Risk Register)**:",
    "options": [
      "A. Risk Register là tài liệu tĩnh, chỉ lập một lần trong tuần đầu tiên rồi khóa lại không chỉnh sửa",
      "B. Theo dõi rủi ro bao gồm việc: Thường xuyên theo dõi các dấu hiệu cảnh báo sớm (triggers) và Cập nhật định kỳ nội dung bảng Risk Register",
      "C. Hoạt động theo dõi rủi ro chỉ bắt đầu khi dự án đã bị trễ hạn bàn giao ít nhất 1 tháng",
      "D. Rủi ro cần phải được giám sát liên tục theo suốt vòng đời dự án: Lập kế hoạch → Thiết kế → Lập trình → Kiểm thử → Triển khai",
      "E. Các cột thông tin tiêu chuẩn cấu thành một bảng Risk Register gồm: Mã nhận diện (ID), Mô tả rủi ro (Description), Xác suất (Probability), Tác động/Thiệt hại (Impact/Loss), Người chịu trách nhiệm theo dõi (Owner), Chỉ số RE và Chiến lược xử lý"
    ],
    "answer": [
      1,
      3,
      4
    ],
    "explanation": "Slide 36, 37, 41 quy định: *Theo dõi trigger, Cập nhật Risk Register • Cột bảng: ID, Description, Probability, Impact, Owner, RE, Strategy • Giám sát suốt vòng đời dự án*.",
    "tip": "Slide 36, 37, 41 quy định: *Theo dõi trigger, Cập nhật Risk Register • Cột bảng:..."
  },
  {
    "id": 61,
    "chapter": 4,
    "tag": "Slide 46, 55",
    "type": "multiple",
    "question": "Xem xét bài toán so sánh giữa hai rủi ro thực tế (Slide 46, 55): - Rủi ro A: Xác suất P = 0.5, Thiệt hại ước tính Loss = 10,000 USD - Rủi ro B: Xác suất P = 0.2, Thiệt hại ước tính Loss = 50,000 USD Dưới góc độ người quản lý dự án được đào tạo bài bản, những kết luận nào sau đây là chính xác?",
    "options": [
      "A. Rủi ro A chắc chắn nguy hiểm hơn Rủi ro B vì xác suất 50% lớn hơn 20% gấp 2.5 lần",
      "B. Mức độ phơi nhiễm rủi ro A là: RE(A) = 0.5 × 10,000 USD = 5,000 USD",
      "C. Mức độ phơi nhiễm rủi ro B là: RE(B) = 0.2 × 50,000 USD = 10,000 USD",
      "D. Bài học quản trị rút ra: \"Khi đánh giá rủi ro, người quản lý không được chỉ nhìn vào mỗi xác suất xảy ra, mà bắt buộc phải nhân với mức độ thiệt hại để nhìn ra tổng thiệt hại kỳ vọng (RE)\"",
      "E. Vì RE(B) = 10,000 USD > RE(A) = 5,000 USD, nên Rủi ro B nguy hiểm hơn và cần được ưu tiên xử lý trước",
      "F. Không thể so sánh được vì hai rủi ro này có xác suất và số tiền khác nhau"
    ],
    "answer": [
      1,
      2,
      3,
      4
    ],
    "explanation": "Slide 46 & 55: RE(A) = 5,000 USD; RE(B) = 10,000 USD; Kết luận: *Risk B nguy hiểm hơn • Không chỉ nhìn xác suất, phải nhìn tổng thiệt hại*.",
    "tip": "Slide 46 & 55: RE(A) = 5,000 USD; RE(B) = 10,000 USD; Kết luận: *Risk B nguy hiể..."
  },
  {
    "id": 62,
    "chapter": 4,
    "tag": "Slide 43, 52",
    "type": "multiple",
    "question": "Dựa vào bài tập phân loại rủi ro chuẩn trong bài giảng (Slide 43, 52), hãy xác định đúng nhóm rủi ro tương ứng của từng tình huống thực tế sau đây:",
    "options": [
      "A. \"Công nghệ mới áp dụng vào hệ thống chưa ổn định, hay bị lỗi timeout\" → Được phân loại vào nhóm **Technical Risk (Rủi ro kỹ thuật)**",
      "B. \"Khách hàng cắt giảm ngân sách đầu tư\" → Thuộc nhóm Technical Risk vì làm giảm tiền mua bản quyền công nghệ",
      "C. \"Khách hàng gặp khủng hoảng tài chính và cắt giảm 50% ngân sách đầu tư\" → Được phân loại vào nhóm **Business Risk (Rủi ro kinh doanh)**",
      "D. \"Phía khách hàng liên tục thay đổi và bổ sung yêu cầu nghiệp vụ mỗi tuần\" → Được phân loại vào nhóm **Project Risk (Rủi ro dự án)**",
      "E. \"Lập trình viên chủ chốt phụ trách kiến trúc đột ngột xin nghỉ việc\" → Được phân loại vào nhóm **Project Risk (Rủi ro dự án)**"
    ],
    "answer": [
      0,
      2,
      3,
      4
    ],
    "explanation": "Slide 43 & 52 phân loại chuẩn xác: *Dev nghỉ việc → Project Risk • Công nghệ mới → Technical Risk • Cắt ngân sách → Business Risk • Thay đổi yêu cầu → Project Risk*.",
    "tip": "Slide 43 & 52 phân loại chuẩn xác: *Dev nghỉ việc → Project Risk • C..."
  }
];

const ESSAY_QUESTIONS = [
  {
    "id": 101,
    "chapter": 1,
    "tag": "Bài tập cuối chương",
    "title": "Chương 1 - Bài tập 1: Ba nguyên nhân khiến dự án phần mềm thất bại và cách phòng tránh",
    "question": "Trình bày 3 nguyên nhân hàng đầu khiến dự án phần mềm thất bại trong thực tế và đề xuất các giải pháp phòng tránh cụ thể cho từng nguyên nhân.",
    "rubric": [
      "Nguyên nhân 1 (1.5 đ): Yêu cầu mơ hồ, thay đổi liên tục (Scope creep) -> Giải pháp phòng tránh",
      "Nguyên nhân 2 (1.5 đ): Ước lượng sai thời gian và chi phí -> Giải pháp phòng tránh",
      "Nguyên nhân 3 (1.5 đ): Giao tiếp kém và thiếu sự cam kết từ Stakeholders -> Giải pháp phòng tránh"
    ],
    "model_answer": "1. Nguyên nhân 1: Yêu cầu không rõ ràng, thay đổi liên tục (Scope Creep)\n   - Phòng tránh: Làm rõ và chốt tài liệu đặc tả SRS từ sớm; áp dụng quy trình kiểm soát thay đổi (Change Request) chặt chẽ; phân loại ưu tiên tính năng theo MoSCoW (Must-have, Should-have...).\n\n2. Nguyên nhân 2: Ước lượng sai lầm về thời gian và nỗ lực\n   - Phòng tránh: Phân rã công việc WBS chi tiết đến các gói công việc nhỏ; sử dụng dữ liệu lịch sử và mô hình định lượng (COCOMO, Function Point); áp dụng nguyên tắc 'ước lượng lặp' (Iterative estimation).\n\n3. Nguyên nhân 3: Giao tiếp rời rạc và thiếu sự cam kết từ Stakeholders\n   - Phòng tránh: Tổ chức các buổi họp Daily Standup ngắn gọn; sử dụng công cụ quản lý tập trung (Jira, Slack); định kỳ demo sản phẩm thực tế sau mỗi sprint 2 tuần để nhận phản hồi sớm từ khách hàng.",
    "keywords": [
      "Scope Creep",
      "Quy trình Change Request",
      "WBS phân rã",
      "COCOMO",
      "Daily Standup",
      "Demo định kỳ"
    ],
    "pm_insight": "Phần mềm thất bại phần lớn không phải do trình độ code kém, mà do sự đứt gãy trong giao tiếp và buông lỏng quản lý phạm vi."
  },
  {
    "id": 102,
    "chapter": 1,
    "tag": "Bài tập cuối chương",
    "title": "Chương 1 - Bài tập 2: Lập cấu trúc WBS phân rã cho dự án 'Ứng dụng Quản lý Sinh viên'",
    "question": "Hãy xây dựng cấu trúc WBS dạng dự án (Project WBS) gồm 3 mức phân cấp cho hệ thống 'Ứng dụng Quản lý Sinh viên'.",
    "rubric": [
      "Mức 1 (1.0 đ): Tên hệ thống tổng thể (Ứng dụng Quản lý Sinh viên)",
      "Mức 2 (2.0 đ): 5 giai đoạn chuẩn của vòng đời (Khảo sát/Phân tích -> Thiết kế -> Lập trình -> Kiểm thử -> Triển khai)",
      "Mức 3 (1.5 đ): Các gói công việc cụ thể (Work packages) cho từng phân hệ"
    ],
    "model_answer": "Mức 1: Hệ thống Ứng dụng Quản lý Sinh viên\nMức 2 & 3:\n  1.0. Phân tích yêu cầu\n     1.1. Khảo sát phòng Đào tạo và Giảng viên\n     1.2. Viết tài liệu đặc tả yêu cầu phần mềm (SRS)\n  2.0. Thiết kế hệ thống\n     2.1. Thiết kế cơ sở dữ liệu (Bảng điểm, Sinh viên, Môn học)\n     2.2. Thiết kế giao diện UI/UX Web và Mobile\n  3.0. Lập trình phát triển\n     3.1. Phân hệ Quản lý hồ sơ & Điểm số sinh viên\n     3.2. Phân hệ Đăng ký tín chỉ / môn học online\n     3.3. Phân hệ Báo cáo thống kê và tra cứu\n  4.0. Kiểm thử phần mềm\n     4.1. Kiểm thử chức năng và luồng dữ liệu (Functional Testing)\n     4.2. Kiểm thử tải khi 5,000 sinh viên cùng đăng ký (Load Testing)\n  5.0. Triển khai & Chuyển giao\n     5.1. Cài đặt lên máy chủ trường (Deployment)\n     5.2. Đào tạo cán bộ đào tạo và viết hướng dẫn sử dụng",
    "keywords": [
      "Project WBS",
      "Work Packages",
      "Phân tích -> Thiết kế -> Lập trình -> Kiểm thử -> Triển khai"
    ],
    "pm_insight": "Nguyên tắc 100%: Tổng tất cả công việc ở mức 3 phải bao phủ trọn vẹn 100% mục tiêu của mức 1, không được thừa việc vô ích và không được thiếu chức năng cốt lõi."
  },
  {
    "id": 103,
    "chapter": 1,
    "tag": "Bài tập cuối chương",
    "title": "Chương 1 - Bài tập 3: Tình huống xử lý dự án trễ tiến độ do khách hàng đổi yêu cầu",
    "question": "Một dự án bị trễ tiến độ do khách hàng liên tục thay đổi yêu cầu nghiệp vụ trong quá trình phát triển. Với tư cách là PM, bạn cần làm gì?",
    "rubric": [
      "Bước 1 (1.0 đ): Đóng băng phạm vi hiện tại (Scope Freeze / Baseline)",
      "Bước 2 (1.5 đ): Phân tích tác động (Impact Analysis) đến Thời gian và Chi phí",
      "Bước 3 (1.5 đ): Đàm phán với khách hàng dựa trên Tam giác dự án (Scope - Time - Cost)",
      "Bước 4 (1.0 đ): Thiết lập quy trình Change Request chính thức"
    ],
    "model_answer": "1. Đóng băng phạm vi tạm thời (Scope Freeze): Dừng việc nhận yêu cầu qua chat/miệng. Rà soát lại hiện trạng dự án để xác định đường cơ sở (Baseline).\n2. Phân tích tác động (Impact Analysis): Đo lường xem các yêu cầu mới khiến dự án trễ thêm bao nhiêu tuần và phát sinh thêm bao nhiêu chi phí.\n3. Thương lượng với khách hàng theo Tam giác quản lý dự án:\n   - Lựa chọn 1: Nếu khách hàng giữ nguyên hạn bàn giao -> Buộc phải cắt bớt các tính năng thứ yếu sang giai đoạn sau (Phase 2).\n   - Lựa chọn 2: Nếu khách hàng kiên quyết làm đủ tính năng -> Khách hàng phải chấp thuận dời deadline và ký phụ lục trả thêm ngân sách.\n4. Áp dụng quy tắc MoSCoW: Ưu tiên làm trước các tính năng 'Must-have' (sống còn) để bàn giao phiên bản chạy được cho khách hàng kiểm tra trước.\n5. Siết chặt quy trình Change Request: Mọi thay đổi bắt buộc phải có văn bản đề xuất và ký duyệt chính thức.",
    "keywords": [
      "Đóng băng phạm vi",
      "Phân tích tác động",
      "Tam giác dự án",
      "MoSCoW",
      "Change Request"
    ],
    "pm_insight": "Khách hàng thường không nhận thức được việc thêm một nút bấm nhỏ có thể phá vỡ toàn bộ cấu trúc database phía sau. PM phải dùng số liệu để giải thích."
  },
  {
    "id": 104,
    "chapter": 2,
    "tag": "Bài tập cuối chương",
    "title": "Chương 2 - Bài tập 1: Tính toán và nhận xét chỉ số Năng suất (Productivity Metric)",
    "question": "Một dự án viết được 8,000 dòng lệnh (LOC) với tổng nỗ lực công sức của nhóm là 10 person-month. Yêu cầu:\na) Tính Productivity của đội ngũ.\nb) Đưa ra nhận xét về chỉ số này và lưu ý khi so sánh.",
    "rubric": [
      "Câu a (2.0 đ): Áp dụng đúng công thức Productivity = Size / Effort và tính ra 800 LOC / person-month",
      "Câu b (2.0 đ): Nhận xét mức trung bình - khá; lưu ý không so sánh giữa các ngôn ngữ lập trình khác nhau"
    ],
    "model_answer": "a) Tính toán:\n   Productivity = Kích thước / Nỗ lực = 8,000 LOC / 10 person-month = 800 LOC / person-month.\n\nb) Nhận xét chuyên môn:\n   - Mức năng suất 800 LOC/người-tháng thuộc mức trung bình - khá đối với các ngôn ngữ lập trình bậc cao hiện đại (Java, C#, TypeScript).\n   - Lưu ý cốt lõi của Pressman: Tuyệt đối KHÔNG sử dụng chỉ số LOC/tháng để so sánh giữa các dự án viết bằng các ngôn ngữ khác nhau (ví dụ: Python vs C++), vì độ cô đọng của ngôn ngữ khác nhau hoàn toàn. Chỉ số này chỉ có ý nghĩa so sánh trong cùng một công nghệ và tổ chức.",
    "keywords": [
      "Productivity = Size / Effort",
      "800 LOC/person-month",
      "Không so sánh liên ngôn ngữ"
    ],
    "pm_insight": "Năng suất cao bằng số dòng code không có nghĩa là phần mềm tốt. 100 dòng code sạch, tối ưu tốt hơn 1,000 dòng code rác copy-paste."
  },
  {
    "id": 105,
    "chapter": 2,
    "tag": "Bài tập cuối chương",
    "title": "Chương 2 - Bài tập 2: So sánh đo kích thước bằng LOC (Lines of Code) và Function Point (FP)",
    "question": "So sánh chi tiết hai phương pháp đo kích thước phần mềm LOC và Function Point theo các tiêu chí: Sự phụ thuộc ngôn ngữ, Giai đoạn sử dụng và Khả năng so sánh liên dự án.",
    "rubric": [
      "Tiêu chí 1 (1.5 đ): Phụ thuộc ngôn ngữ (LOC có phụ thuộc, FP độc lập hoàn toàn)",
      "Tiêu chí 2 (1.5 đ): Giai đoạn sử dụng (LOC dùng muộn sau khi code, FP dùng sớm từ khâu yêu cầu)",
      "Tiêu chí 3 (1.5 đ): Khả năng so sánh liên dự án (LOC kém, FP rất tốt)"
    ],
    "model_answer": "Bảng so sánh chi tiết:\n1. Phụ thuộc ngôn ngữ lập trình:\n   - LOC: Phụ thuộc rất lớn vào ngôn ngữ (ngôn ngữ bậc cao ít dòng code hơn ngôn ngữ bậc thấp dù cùng nghiệp vụ).\n   - FP: Hoàn toàn độc lập với ngôn ngữ và công nghệ, đo dựa trên chức năng nghiệp vụ bàn giao cho người dùng.\n\n2. Giai đoạn áp dụng:\n   - LOC: Chỉ có thể đo lường chính xác ở giai đoạn muộn (sau khi đã viết mã nguồn xong).\n   - FP: Có thể đo lường và ước lượng được từ rất sớm (ngay từ khâu phân tích đặc tả yêu cầu SRS).\n\n3. Khả năng so sánh giữa các dự án:\n   - LOC: Rất kém (so sánh khập khiễng nếu khác tech-stack).\n   - FP: Rất tốt (chuẩn hóa được để so sánh năng suất giữa các dự án và tổ chức khác nhau).\n\n=> Kết luận Pressman: Function Point (FP) phù hợp hơn rất nhiều cho công tác quản trị và ước lượng dự án.",
    "keywords": [
      "Độc lập ngôn ngữ",
      "Đo sớm từ khâu yêu cầu",
      "FP phù hợp hơn cho quản lý"
    ],
    "pm_insight": "Muốn đàm phán hợp đồng giá trị phần mềm với khách hàng ngay từ đầu, hãy dùng Function Point chứ đừng hứa hẹn số dòng code."
  },
  {
    "id": 106,
    "chapter": 2,
    "tag": "Bài tập cuối chương",
    "title": "Chương 2 - Bài tập 3: Tính toán Defect Density và Đánh giá chất lượng sơ bộ",
    "question": "Một dự án phần mềm có tổng kích thước 12,000 LOC. Giai đoạn kiểm thử hệ thống phát hiện được 60 lỗi. Yêu cầu:\na) Tính chỉ số Defect Density.\nb) Đánh giá chất lượng sơ bộ và đề xuất hành động.",
    "rubric": [
      "Câu a (2.0 đ): Đổi 12,000 LOC = 12 KLOC; tính Defect Density = 60 / 12 = 5 lỗi/KLOC",
      "Câu b (2.0 đ): Đánh giá mức trung bình cho app thường nhưng chưa đạt cho hệ thống quan trọng; đề xuất hành động"
    ],
    "model_answer": "a) Tính toán Defect Density:\n   Quy đổi: 12,000 LOC = 12 KLOC.\n   Defect Density = Số lỗi phát hiện / KLOC = 60 lỗi / 12 KLOC = 5 lỗi / KLOC.\n\nb) Đánh giá chất lượng & Chỉ báo hành động:\n   - Đánh giá: Mức 5 lỗi/KLOC là mức trung bình đối với các ứng dụng thương mại điện tử hoặc website thông thường.\n   - Tuy nhiên, nếu đây là hệ thống đòi hỏi độ an toàn cao (ngân hàng, tài chính, điều khiển thiết bị y tế) thì mức 5 lỗi/KLOC là CHƯA ĐẠT CHUẨN an toàn (chuẩn ngành nghiêm ngặt đòi hỏi < 1 lỗi/KLOC).\n   - Hành động đề xuất của PM:\n     + Không vội vàng bàn giao sản phẩm ngay.\n     + Tăng cường kiểm thử hồi quy (Regression Testing) cho các module nhạy cảm.\n     + Rà soát lại quy trình kiểm tra mã nguồn (Code Review) trước khi merge code.",
    "keywords": [
      "Defect Density = Số lỗi / KLOC",
      "5 lỗi / KLOC",
      "Kiểm thử hồi quy",
      "Chưa đạt chuẩn hệ thống trọng yếu"
    ],
    "pm_insight": "Mật độ lỗi là một CHỈ BÁO (Indicator) để hành động phòng ngừa rủi ro phát hành, không phải con số báo cáo hình thức."
  },
  {
    "id": 107,
    "chapter": 2,
    "tag": "Bài tập cuối chương",
    "title": "Chương 2 - Bài tập 4: Phân tích biểu đồ kiểm soát quy trình bằng thống kê (SPC Control Chart)",
    "question": "Trong dự án phần mềm, nhóm theo dõi số lỗi kiểm thử phát hiện mỗi tuần:\n- Tuần 1 đến 3: Số lỗi dao động ổn định trong khoảng 10 - 15 lỗi/tuần (nằm giữa UCL và LCL).\n- Tuần 4: Số lỗi tăng đột biến lên 75 lỗi/tuần (vượt qua đường UCL).\nHỏi: Hiện tượng này phản ánh điều gì và PM cần làm gì?",
    "rubric": [
      "Ý 1 (2.0 đ): Ý nghĩa: Quy trình có dấu hiệu mất kiểm soát do xuất hiện biến đổi đặc biệt (Special cause)",
      "Ý 2 (2.5 đ): Hành động của PM: Họp phân tích nguyên nhân gốc rễ, quán triệt 'Sửa quy trình, không sửa triệu chứng'"
    ],
    "model_answer": "1. Ý nghĩa của hiện tượng:\n   - Vượt qua đường giới hạn kiểm soát trên (UCL) là dấu hiệu khẳng định quy trình phát triển đang MẤT KIỂM SOÁT.\n   - Đây không phải là biến động ngẫu nhiên thông thường (Common cause), mà là sự xuất hiện của biến đổi bất thường đặc biệt (Special cause). Ví dụ: Đưa thư viện mới bị lỗi kiến trúc vào, tuyển dev mới chưa được đào tạo chuẩn coding, hoặc merge module lớn chưa qua review.\n\n2. Hành động chuẩn xác của PM:\n   - Bước 1: Tổ chức họp phân tích nguyên nhân gốc rễ (Root Cause Analysis - RCA) cùng Technical Lead.\n   - Bước 2: KHÔNG vội vàng ép dev cắm đầu vá code một cách chắp vá (vì vá ngọn sẽ sinh ra thêm bug mới).\n   - Bước 3: Tuân thủ triết lý SPC: 'SỬA QUY TRÌNH, KHÔNG SỬA TRIỆU CHỨNG'. Chấn chỉnh lại quy trình code review bắt buộc, siết chặt khâu kiểm tra đầu vào của thư viện bên thứ ba và đào tạo lại nhân sự.",
    "keywords": [
      "Mất kiểm soát quy trình",
      "Special cause",
      "Root Cause Analysis",
      "Sửa quy trình, không sửa triệu chứng"
    ],
    "pm_insight": "Biểu đồ SPC là chiếc chuông báo cháy của dự án. Khi chuông kêu, việc cần làm là đi tìm đốm lửa để dập, chứ không phải đi tháo pin cái chuông."
  },
  {
    "id": 108,
    "chapter": 2,
    "tag": "Bài tập cuối chương",
    "title": "Chương 2 - Case Study: Đánh giá toàn diện dự án Web (15,000 LOC, trễ 2 tuần, 90 lỗi)",
    "question": "Một dự án web có quy mô 15,000 LOC, tổng công sức tiêu tốn là 12 person-month, phát hiện 90 lỗi trong giai đoạn test và bàn giao trễ hạn 2 tuần.\nYêu cầu:\n1. Tính các metric chính của dự án.\n2. Đánh giá chất lượng và tiến độ dự án.\n3. Đề xuất phương án cải tiến cho dự án tiếp theo.",
    "rubric": [
      "Ý 1 (1.5 đ): Tính đúng Productivity = 1,250 LOC/PM; Defect Density = 6 lỗi/KLOC; Schedule Slip = +2 tuần",
      "Ý 2 (1.5 đ): Đánh giá hiện tượng code vội đuổi deadline dẫn đến chất lượng kém, làm tắc nghẽn khâu test",
      "Ý 3 (1.5 đ): Đề xuất cải tiến (Unit test, Code review, CI/CD, không chỉ đo năng suất bằng LOC)"
    ],
    "model_answer": "1. Tính các metric chính:\n   - Năng suất (Productivity) = 15,000 LOC / 12 PM = 1,250 LOC / person-month.\n   - Mật độ lỗi (Defect Density) = 90 lỗi / 15 KLOC = 6 lỗi / KLOC.\n   - Độ trễ hạn (Schedule Slip) = +2 tuần so với kế hoạch ban đầu.\n\n2. Đánh giá dự án:\n   - Nghịch lý dự án: Năng suất viết code bề ngoài có vẻ rất cao (1,250 LOC/PM), nhưng mật độ lỗi lại quá cao (6 lỗi/KLOC) và dự án vẫn bị trễ hạn.\n   - Bản chất: Đội ngũ lập trình đã chạy đua viết code thật nhanh để kịp tiến độ, bỏ qua khâu tự kiểm thử và code review -> Dẫn đến việc đẩy một 'núi bug' sang giai đoạn test, khiến khâu kiểm thử bị nghẽn cổ chai và tốn quá nhiều thời gian sửa lỗi, kéo theo dự án bị trễ hạn chung cuộc.\n\n3. Đề xuất cải tiến cho dự án sau:\n   - Chuyển đổi tư duy: Không chỉ đo năng suất thuần túy bằng số dòng code (LOC) mà phải gắn liền với chỉ tiêu chất lượng (Quality-driven metrics).\n   - Đưa khâu kiểm soát chất lượng vào sớm (Shift-Left Testing): Bắt buộc viết Unit Test tự động (> 70% coverage), thực hiện Code Review chéo trước khi merge, và áp dụng quy trình tích hợp liên tục (CI/CD).",
    "keywords": [
      "Productivity = 1,250 LOC/PM",
      "Defect Density = 6 lỗi/KLOC",
      "Shift-Left Testing",
      "Chất lượng gắn liền năng suất"
    ],
    "pm_insight": "Viết code nhanh mà nhiều lỗi thì không gọi là năng suất cao; sửa lỗi ở giai đoạn cuối tốn kém gấp 10-50 lần so với phòng ngừa từ đầu."
  },
  {
    "id": 109,
    "chapter": 3,
    "tag": "Bài tập cuối chương",
    "title": "Chương 3 - Bài tập 1: Viết bản mô tả phạm vi phần mềm cho 'Hệ thống Quản lý kho quét mã Barcode'",
    "question": "Hãy viết bản mô tả phạm vi phần mềm (Scope) cho hệ thống 'Ứng dụng Quản lý kho có quét barcode' gồm đủ: Chức năng chính, Ràng buộc kỹ thuật và Đối tượng người dùng.",
    "rubric": [
      "Ý 1 (1.5 đ): Chức năng chính (Nhập/xuất kho bằng barcode, quản lý danh mục, báo cáo tồn kho thời gian thực)",
      "Ý 2 (1.5 đ): Ràng buộc kỹ thuật (Tương thích Android 10+, tích hợp ERP qua REST API, camera quét nhanh)",
      "Ý 3 (1.5 đ): Người dùng hệ thống (Thủ kho, Quản lý kho, Kế toán kho)"
    ],
    "model_answer": "Bản mô tả Phạm vi phần mềm (Software Scope):\n\n1. Chức năng chính (Functions):\n   - Quản lý danh mục hàng hóa (mã vạch, tên, đơn vị tính, hạn sử dụng, vị trí kệ hàng).\n   - Quét mã vạch (Barcode/QR code) trực tiếp qua camera thiết bị để thực hiện nhập kho, xuất kho và kiểm kê định kỳ siêu tốc.\n   - Báo cáo tồn kho theo thời gian thực và tự động phát cảnh báo khi số lượng hàng dưới định mức an toàn.\n\n2. Ràng buộc kỹ thuật & môi trường (Constraints):\n   - Ứng dụng di động phải hoạt động ổn định trên hệ điều hành Android từ phiên bản 10 trở lên.\n   - Phải tích hợp đồng bộ dữ liệu hai chiều với hệ thống ERP hiện có của doanh nghiệp qua giao thức RESTful API.\n   - Thời gian phản hồi quét mã và tra cứu thông tin sản phẩm không được vượt quá 1.5 giây.\n\n3. Đối tượng người dùng (Users):\n   - Thủ kho: Thao tác quét mã nhập/xuất trực tiếp tại kho bãi.\n   - Quản lý kho: Xem báo cáo thống kê, duyệt phiếu kiểm kê và phân quyền nhân viên.",
    "keywords": [
      "Functions (Chức năng)",
      "Constraints (Ràng buộc)",
      "Tích hợp ERP",
      "Đối tượng người dùng"
    ],
    "pm_insight": "Phạm vi rõ ràng ngay từ đầu sẽ giúp chặn đứng 80% tranh chấp hợp đồng phát sinh sau này."
  },
  {
    "id": 110,
    "chapter": 3,
    "tag": "Bài tập cuối chương",
    "title": "Chương 3 - Bài tập 2: Phân loại nguồn lực dự án theo chuẩn Pressman",
    "question": "Một dự án được cấp phát: 4 lập trình viên, 1 tester, 1 máy chủ database, 2 bộ máy tính trạm, framework Spring Boot và thư viện React. Hãy phân loại các nguồn lực trên theo đúng 3 nhóm tài nguyên của Pressman.",
    "rubric": [
      "Nhóm 1 (1.5 đ): Human Resources (4 Dev, 1 Tester)",
      "Nhóm 2 (1.5 đ): Reusable Software Resources (Framework Spring Boot, thư viện React)",
      "Nhóm 3 (1.5 đ): Environmental Resources (1 máy chủ database, 2 bộ máy tính trạm)"
    ],
    "model_answer": "Theo cách phân loại nguồn lực dự án của Pressman:\n\n1. Nguồn lực con người (Human Resources):\n   - 4 Lập trình viên (Developers)\n   - 1 Kiểm thử viên (Tester / QC)\n   => Nhấn mạnh: Đây là nguồn lực QUAN TRỌNG NHẤT và KHÓ QUẢN LÝ NHẤT trong dự án.\n\n2. Nguồn lực phần mềm tái sử dụng (Reusable Software Resources):\n   - Framework Spring Boot (hỗ trợ phát triển backend nhanh chóng)\n   - Thư viện React (hỗ trợ xây dựng giao diện frontend có sẵn component)\n   => Giúp giảm thời gian lập trình và chi phí dự án.\n\n3. Nguồn lực môi trường (Environmental Resources):\n   - 1 Máy chủ cơ sở dữ liệu (Database Server)\n   - 2 Bộ máy tính trạm làm việc\n   => Cung cấp hạ tầng phần cứng để hệ thống vận hành và thử nghiệm.",
    "keywords": [
      "Human Resources",
      "Reusable Software Resources",
      "Environmental Resources"
    ],
    "pm_insight": "Quản lý nguồn lực là bài toán dung hòa: Thiếu phần mềm tái sử dụng thì tốn công viết lại từ đầu; thiếu môi trường thì dự án bị đình trệ; thiếu con người thì mọi kế hoạch đều phá sản."
  },
  {
    "id": 111,
    "chapter": 3,
    "tag": "Bài tập cuối chương",
    "title": "Chương 3 - Bài tập 3: Ước lượng nỗ lực và thời gian hoàn thành theo LOC",
    "question": "Dự án dự kiến quy mô 20,000 LOC. Năng suất trung bình của đội ngũ là 800 LOC / person-month. Yêu cầu:\na) Tính nỗ lực công sức (Effort).\nb) Nếu nhóm có 5 lập trình viên, thời gian dự kiến hoàn thành là bao lâu?",
    "rubric": [
      "Câu a (2.0 đ): Áp dụng công thức Effort = Size / Productivity và tính ra 25 person-month",
      "Câu b (2.5 đ): Áp dụng Duration = Effort / Số người và tính ra 5 tháng; ghi chú hạn chế tuyến tính"
    ],
    "model_answer": "a) Tính nỗ lực công sức (Effort):\n   Effort = Kích thước / Năng suất = 20,000 LOC / 800 LOC/PM = 25 person-month (người-tháng).\n\nb) Tính thời gian hoàn thành (Duration):\n   Duration = Effort / Số lập trình viên = 25 person-month / 5 người = 5 tháng.\n\nc) Cảnh báo quản trị của Pressman:\n   - Phép tính chia đôi thời gian bằng cách gấp đôi nhân sự chỉ mang tính chất lý thuyết toán học tuyến tính.\n   - Trong thực tế quản lý dự án phần mềm, mối quan hệ giữa người và thời gian là phi tuyến tính (Định luật Brooks). Không thể cho 9 phụ nữ mang bầu để sinh một đứa bé trong 1 tháng!",
    "keywords": [
      "Effort = 25 person-month",
      "Duration = 5 tháng",
      "Quan hệ phi tuyến",
      "LOC ước lượng tương đối"
    ],
    "pm_insight": "Khi lập kế hoạch với khách hàng, luôn phải cộng thêm hệ số rủi ro dự phòng (Buffer time 10-20%) chứ không được báo sát nút con số 5 tháng lý thuyết."
  },
  {
    "id": 112,
    "chapter": 3,
    "tag": "Bài tập cuối chương",
    "title": "Chương 3 - Bài tập 4: Ước lượng nỗ lực dựa trên Điểm chức năng (Function Point)",
    "question": "Dự án có tổng số điểm chức năng chưa điều chỉnh UFP = 200 FP. Dữ liệu lịch sử của tổ chức cho biết: 1 FP tương đương 50 dòng code (LOC). Năng suất lập trình trung bình là 1,000 LOC / person-month. Yêu cầu:\na) Ước lượng kích thước dòng lệnh LOC.\nb) Tính nỗ lực công sức (Effort) theo person-month.",
    "rubric": [
      "Câu a (2.0 đ): Tính đúng LOC = 200 * 50 = 10,000 LOC",
      "Câu b (2.5 đ): Tính đúng Effort = 10,000 / 1,000 = 10 person-month; nêu ưu điểm của FP"
    ],
    "model_answer": "a) Ước lượng kích thước LOC từ Function Point:\n   Kích thước LOC = Tổng số FP x Hệ số quy đổi = 200 FP x 50 LOC/FP = 10,000 LOC.\n\nb) Tính nỗ lực công sức (Effort):\n   Effort = Tổng số LOC / Năng suất = 10,000 LOC / 1,000 LOC/PM = 10 person-month.\n\nc) Điểm nhấn kiến thức Pressman:\n   - Phương pháp Function Point (FP) ưu việt hơn phương pháp đo LOC thuần túy vì nó hoàn toàn độc lập với ngôn ngữ lập trình và có thể tính toán được ngay từ khâu đặc tả yêu cầu chức năng, giúp PM lập kế hoạch sớm mà không cần chờ code xong.",
    "keywords": [
      "LOC = 10,000",
      "Effort = 10 person-month",
      "Ưu việt của Function Point"
    ],
    "pm_insight": "Kỹ thuật đổi FP sang LOC là bước đệm kinh điển trong các mô hình ước lượng công nghiệp."
  },
  {
    "id": 113,
    "chapter": 4,
    "tag": "Bài tập cuối chương",
    "title": "Chương 4 - Bài tập 1: Phân loại rủi ro phần mềm theo chuẩn Pressman",
    "question": "Hãy phân loại 4 rủi ro sau đây vào 3 nhóm chuẩn của Pressman (Project Risk, Technical Risk, Business Risk):\n1. Lập trình viên chủ chốt nghỉ việc giữa chừng.\n2. Công nghệ mới chưa ổn định, phát sinh nhiều lỗi ngầm.\n3. Khách hàng cắt giảm ngân sách đầu tư do suy thoái tài chính.\n4. Yêu cầu nghiệp vụ thay đổi liên tục từ phía người dùng.",
    "rubric": [
      "Rủi ro 1 (1.0 đ): Lập trình viên chủ chốt nghỉ việc -> Project Risk",
      "Rủi ro 2 (1.0 đ): Công nghệ mới chưa ổn định -> Technical Risk",
      "Rủi ro 3 (1.0 đ): Khách hàng cắt ngân sách -> Business Risk",
      "Rủi ro 4 (1.5 đ): Yêu cầu thay đổi liên tục -> Project Risk (ảnh hưởng trực tiếp tiến độ/nguồn lực)"
    ],
    "model_answer": "Phân loại chuẩn xác theo Pressman:\n\n1. Lập trình viên chủ chốt nghỉ việc: PROJECT RISK (Rủi ro dự án)\n   - Giải thích: Ảnh hưởng trực tiếp đến nhân sự, tiến độ bàn giao và việc phân công nguồn lực của dự án.\n\n2. Công nghệ mới chưa ổn định: TECHNICAL RISK (Rủi ro kỹ thuật)\n   - Giải thích: Đe dọa đến tính khả thi về mặt kỹ thuật, kiến trúc và chất lượng vận hành của sản phẩm.\n\n3. Khách hàng cắt ngân sách: BUSINESS RISK (Rủi ro kinh doanh)\n   - Giải thích: Đe dọa trực tiếp đến tính sống còn về tài chính và khả năng thanh toán của hợp đồng.\n\n4. Yêu cầu nghiệp vụ thay đổi liên tục: PROJECT RISK (Rủi ro dự án)\n   - Giải thích: Phá vỡ kế hoạch phạm vi (Scope), gây xáo trộn lịch trình và đe dọa trực tiếp thời hạn bàn giao.",
    "keywords": [
      "Project Risk",
      "Technical Risk",
      "Business Risk",
      "Phân loại theo Pressman"
    ],
    "pm_insight": "Phân loại rủi ro đúng nhóm giúp phân công đúng người xử lý: Kỹ thuật thì giao Lead Dev, tiến độ giao PM, kinh doanh thì báo cáo Ban Giám Đốc."
  },
  {
    "id": 114,
    "chapter": 4,
    "tag": "Bài tập cuối chương",
    "title": "Chương 4 - Bài tập 2: Tính toán và đánh giá mức độ phơi nhiễm rủi ro (Risk Exposure - RE)",
    "question": "Rủi ro 'Hệ thống bị tấn công mạng làm rò rỉ cơ sở dữ liệu khách hàng' được đánh giá có:\n- Xác suất xảy ra: P = 0.2 (20%).\n- Mức độ thiệt hại ước tính: Loss = 200,000$.\nYêu cầu: Tính chỉ số RE và đánh giá mức độ ưu tiên theo chuẩn Pressman.",
    "rubric": [
      "Ý 1 (2.0 đ): Tính đúng công thức RE = P * Loss = 0.2 * 200,000$ = 40,000$",
      "Ý 2 (2.5 đ): Đánh giá RE rất cao; nhấn mạnh nguyên tắc Pressman: Rủi ro có RE cao bắt buộc phải có Mitigation Plan rõ ràng"
    ],
    "model_answer": "1. Tính chỉ số Risk Exposure (RE):\n   Công thức: RE = Probability (P) x Loss (Mức thiệt hại)\n   Thay số: RE = 0.2 x 200,000$ = 40,000$.\n\n2. Đánh giá mức độ & Khuyến nghị quản trị:\n   - Đánh giá: Mặc dù xác suất P = 0.2 (20%) chỉ ở mức thấp - trung bình, nhưng chỉ số phơi nhiễm RE = 40,000$ là CỰC KỲ CAO do quy mô thiệt hại khổng lồ (200,000$).\n   - Khuyến nghị theo Pressman: Những rủi ro có RE cao bắt buộc phải được xếp vào nhóm ưu tiên hàng đầu và phải có Kế hoạch giảm thiểu rủi ro (Risk Mitigation Plan) chi tiết ngay từ đầu.\n   - Hành động cụ thể: Cài đặt hệ thống tường lửa, mã hóa dữ liệu nhạy cảm (AES-256), dùng cơ chế Tokenization của ngân hàng và thuê chuyên gia kiểm thử thâm nhập (Penetration Test) định kỳ.",
    "keywords": [
      "RE = P * Loss",
      "RE = 40,000$",
      "Risk Mitigation Plan",
      "Xếp hạng ưu tiên cao"
    ],
    "pm_insight": "Đừng bao giờ chủ quan vì xác suất chỉ là 20%. Nếu 20% đó xảy ra và làm mất 200,000$, công ty của bạn có thể phá sản ngay ngày mai."
  },
  {
    "id": 115,
    "chapter": 4,
    "tag": "Bài tập cuối chương",
    "title": "Chương 4 - Bài tập 3: So sánh mức độ nguy hiểm giữa 2 rủi ro dựa trên Risk Exposure",
    "question": "Cho 2 rủi ro trong dự án:\n- Rủi ro A: Xác suất P = 0.5, Thiệt hại Loss = 10,000$.\n- Rủi ro B: Xác suất P = 0.2, Thiệt hại Loss = 50,000$.\nHỏi: Rủi ro nào nguy hiểm hơn và tại sao? Rút ra bài học quản trị của Pressman.",
    "rubric": [
      "Ý 1 (1.5 đ): Tính RE(A) = 5,000$ và RE(B) = 10,000$",
      "Ý 2 (1.5 đ): Kết luận Rủi ro B nguy hiểm hơn vì RE(B) > RE(A)",
      "Ý 3 (1.5 đ): Rút ra bài học Pressman: Không nhìn phiến diện vào xác suất, phải nhìn vào tổng thiệt hại kỳ vọng"
    ],
    "model_answer": "1. Tính toán Risk Exposure (RE):\n   - RE(A) = P(A) x Loss(A) = 0.5 x 10,000$ = 5,000$.\n   - RE(B) = P(B) x Loss(B) = 0.2 x 50,000$ = 10,000$.\n\n2. Kết luận so sánh:\n   - RỦI RO B NGUY HIỂM HƠN RỦI RO A vì có chỉ số phơi nhiễm rủi ro RE cao gấp đôi (10,000$ > 5,000$).\n\n3. Bài học quản trị của Pressman:\n   - 'Không chỉ nhìn vào xác suất xảy ra, mà bắt buộc phải nhìn vào tổng mức thiệt hại kỳ vọng (RE)'.\n   - Rất nhiều PM nghiệp dư mắc sai lầm là chỉ lo sợ những việc hay xảy ra (P = 50%) mà bỏ quên những sự cố ít xảy ra nhưng nếu xảy ra thì làm sập cả dự án (Loss = 50,000$).",
    "keywords": [
      "RE(B) = 10,000$ > RE(A) = 5,000$",
      "Rủi ro B nguy hiểm hơn",
      "Tổng thiệt hại kỳ vọng"
    ],
    "pm_insight": "Quản lý rủi ro thông minh là phân bổ nguồn lực dựa trên tổn thất kỳ vọng, không chạy theo cảm xúc sợ hãi."
  },
  {
    "id": 116,
    "chapter": 4,
    "tag": "Bài tập cuối chương",
    "title": "Chương 4 - Bài tập 4: Lập bảng Risk Register mẫu cho dự án 'Website thương mại điện tử'",
    "question": "Hãy lập một bảng Sổ theo dõi rủi ro (Risk Register) hoàn chỉnh cho dự án Website thương mại điện tử gồm 5 rủi ro thực tế (thanh toán, máy chủ, dữ liệu, nhân sự, tiến độ). Nêu rõ xác suất, thiệt hại, RE và chiến lược xử lý.",
    "rubric": [
      "Cấu trúc bảng (1.5 đ): Đủ các cột ID, Tên rủi ro, Xác suất P, Thiệt hại Loss, RE, Chiến lược",
      "Nội dung rủi ro (1.5 đ): Bao gồm đủ 5 rủi ro (Payment, Server, Data leak, Dev nghỉ việc, Delay)",
      "Chiến lược phù hợp (1.5 đ): Áp dụng chuẩn Avoid, Mitigate, Accept/Monitor"
    ],
    "model_answer": "Bảng Risk Register chuẩn theo giáo án Thăng Long:\n\n| ID | Tên rủi ro | Xác suất (P) | Thiệt hại (Loss) | RE (P x Loss) | Chiến lược xử lý |\n| :---: | :--- | :---: | :---: | :---: | :--- |\n| R1 | Lỗi cổng thanh toán trực tuyến (Payment failure) | 0.3 | 50,000$ | 15,000$ | Mitigate (Tích hợp thêm cổng dự phòng) |\n| R2 | Máy chủ quá tải ngày Black Friday (Server overload) | 0.4 | 30,000$ | 12,000$ | Mitigate (Cấu hình Auto-scaling trên đám mây) |\n| R3 | Rò rỉ dữ liệu thẻ khách hàng (Data leak) | 0.2 | 200,000$ | 40,000$ | Avoid / Mitigate (Dùng Tokenization ngân hàng, mã hóa DB) |\n| R4 | Lập trình viên chính nghỉ việc (Dev turnover) | 0.3 | 20,000$ | 6,000$ | Mitigate (Pair Programming, viết tài liệu chuẩn) |\n| R5 | Chậm tiến độ bàn giao 1 tuần (Delay) | 0.5 | 10,000$ | 5,000$ | Accept / Monitor (Theo dõi, dùng thời gian đệm Buffer) |",
    "keywords": [
      "Risk Register",
      "R1 đến R5",
      "RE = P x Loss",
      "Mitigate / Avoid / Accept"
    ],
    "pm_insight": "Risk Register phải được cập nhật hàng tuần trong các buổi họp giao ban, không phải lập ra rồi cất vào ngăn kéo."
  }
];

const WBS_DATA = [
  {
    "code": "1",
    "name": "Phân tích yêu cầu hệ thống",
    "level": 1,
    "parent": "",
    "hasChildren": true,
    "isWorkPackage": false
  },
  {
    "code": "1.1",
    "name": "Khảo sát và thu thập thông tin",
    "level": 2,
    "parent": "1",
    "hasChildren": true,
    "isWorkPackage": false
  },
  {
    "code": "1.1.1",
    "name": "Xác định đối tượng khách hàng",
    "level": 3,
    "parent": "1.1",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "1.1.2",
    "name": "Khảo sát nhu cầu khách hàng",
    "level": 3,
    "parent": "1.1",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "1.1.3",
    "name": "Phân tích quy trình kinh doanh",
    "level": 3,
    "parent": "1.1",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "1.2",
    "name": "Thu thập yêu cầu hệ thống",
    "level": 2,
    "parent": "1",
    "hasChildren": true,
    "isWorkPackage": false
  },
  {
    "code": "1.2.1",
    "name": "Thu thập yêu cầu chức năng",
    "level": 3,
    "parent": "1.2",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "1.2.2",
    "name": "Thu thập yêu cầu phi chức năng",
    "level": 3,
    "parent": "1.2",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "1.2.3",
    "name": "Xác định yêu cầu người dùng",
    "level": 3,
    "parent": "1.2",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "1.2.4",
    "name": "Xác định yêu cầu quản trị viên",
    "level": 3,
    "parent": "1.2",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "1.3",
    "name": "Phân tích yêu cầu",
    "level": 2,
    "parent": "1",
    "hasChildren": true,
    "isWorkPackage": false
  },
  {
    "code": "1.3.1",
    "name": "Phân tích chức năng quản lý tài khoản",
    "level": 3,
    "parent": "1.3",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "1.3.2",
    "name": "Phân tích chức năng quản lý sản phẩm",
    "level": 3,
    "parent": "1.3",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "1.3.3",
    "name": "Phân tích chức năng giỏ hàng",
    "level": 3,
    "parent": "1.3",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "1.3.4",
    "name": "Phân tích chức năng đặt hàng",
    "level": 3,
    "parent": "1.3",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "1.3.5",
    "name": "Phân tích chức năng thanh toán",
    "level": 3,
    "parent": "1.3",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "1.3.6",
    "name": "Phân tích chức năng quản lý đơn hàng",
    "level": 3,
    "parent": "1.3",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "1.4",
    "name": "Lập tài liệu yêu cầu",
    "level": 2,
    "parent": "1",
    "hasChildren": true,
    "isWorkPackage": false
  },
  {
    "code": "1.4.1",
    "name": "Xây dựng tài liệu đặc tả yêu cầu phần mềm (SRS)",
    "level": 3,
    "parent": "1.4",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "1.4.2",
    "name": "Xác định phạm vi chức năng hệ thống",
    "level": 3,
    "parent": "1.4",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "1.4.3",
    "name": "Xác nhận yêu cầu với khách hàng",
    "level": 3,
    "parent": "1.4",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "2",
    "name": "Thiết kế hệ thống",
    "level": 1,
    "parent": "",
    "hasChildren": true,
    "isWorkPackage": false
  },
  {
    "code": "2.1",
    "name": "Phân tích mô hình hệ thống",
    "level": 2,
    "parent": "2",
    "hasChildren": true,
    "isWorkPackage": false
  },
  {
    "code": "2.1.1",
    "name": "Xác định tác nhân hệ thống",
    "level": 3,
    "parent": "2.1",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "2.1.2",
    "name": "Xây dựng biểu đồ Use Case",
    "level": 3,
    "parent": "2.1",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "2.1.3",
    "name": "Xây dựng biểu đồ Activity",
    "level": 3,
    "parent": "2.1",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "2.1.4",
    "name": "Xây dựng biểu đồ Sequence",
    "level": 3,
    "parent": "2.1",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "2.1.5",
    "name": "Xây dựng mô hình nghiệp vụ",
    "level": 3,
    "parent": "2.1",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "2.2",
    "name": "Thiết kế giao diện người dùng",
    "level": 2,
    "parent": "2",
    "hasChildren": true,
    "isWorkPackage": false
  },
  {
    "code": "2.2.1",
    "name": "Thiết kế giao diện trang chủ",
    "level": 3,
    "parent": "2.2",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "2.2.2",
    "name": "Thiết kế giao diện danh sách sản phẩm",
    "level": 3,
    "parent": "2.2",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "2.2.3",
    "name": "Thiết kế giao diện chi tiết sản phẩm",
    "level": 3,
    "parent": "2.2",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "2.2.4",
    "name": "Thiết kế giao diện giỏ hàng",
    "level": 3,
    "parent": "2.2",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "2.2.5",
    "name": "Thiết kế giao diện thanh toán",
    "level": 3,
    "parent": "2.2",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "2.2.6",
    "name": "Thiết kế giao diện đăng ký và đăng nhập",
    "level": 3,
    "parent": "2.2",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "2.2.7",
    "name": "Thiết kế giao diện quản trị viên",
    "level": 3,
    "parent": "2.2",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "2.3",
    "name": "Thiết kế cơ sở dữ liệu",
    "level": 2,
    "parent": "2",
    "hasChildren": true,
    "isWorkPackage": false
  },
  {
    "code": "2.3.1",
    "name": "Xác định các thực thể",
    "level": 3,
    "parent": "2.3",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "2.3.2",
    "name": "Xây dựng biểu đồ ERD",
    "level": 3,
    "parent": "2.3",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "2.3.3",
    "name": "Xác định mối quan hệ giữa các thực thể",
    "level": 3,
    "parent": "2.3",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "2.3.4",
    "name": "Thiết kế các bảng dữ liệu",
    "level": 3,
    "parent": "2.3",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "2.3.5",
    "name": "Xác định khóa chính và khóa ngoại",
    "level": 3,
    "parent": "2.3",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "2.4",
    "name": "Thiết kế kiến trúc hệ thống",
    "level": 2,
    "parent": "2",
    "hasChildren": true,
    "isWorkPackage": false
  },
  {
    "code": "2.4.1",
    "name": "Thiết kế kiến trúc giao diện",
    "level": 3,
    "parent": "2.4",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "2.4.2",
    "name": "Thiết kế kiến trúc xử lý phía máy chủ",
    "level": 3,
    "parent": "2.4",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "2.4.3",
    "name": "Thiết kế kiến trúc cơ sở dữ liệu",
    "level": 3,
    "parent": "2.4",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "2.4.4",
    "name": "Thiết kế giao tiếp giữa các thành phần hệ thống",
    "level": 3,
    "parent": "2.4",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3",
    "name": "Phát triển hệ thống",
    "level": 1,
    "parent": "",
    "hasChildren": true,
    "isWorkPackage": false
  },
  {
    "code": "3.1",
    "name": "Thiết lập môi trường phát triển",
    "level": 2,
    "parent": "3",
    "hasChildren": true,
    "isWorkPackage": false
  },
  {
    "code": "3.1.1",
    "name": "Cài đặt công cụ lập trình",
    "level": 3,
    "parent": "3.1",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.1.2",
    "name": "Khởi tạo dự án",
    "level": 3,
    "parent": "3.1",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.1.3",
    "name": "Cấu hình môi trường phát triển",
    "level": 3,
    "parent": "3.1",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.1.4",
    "name": "Kết nối cơ sở dữ liệu",
    "level": 3,
    "parent": "3.1",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.1.5",
    "name": "Thiết lập quản lý mã nguồn",
    "level": 3,
    "parent": "3.1",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.2",
    "name": "Phát triển giao diện người dùng",
    "level": 2,
    "parent": "3",
    "hasChildren": true,
    "isWorkPackage": false
  },
  {
    "code": "3.2.1",
    "name": "Phát triển trang chủ",
    "level": 3,
    "parent": "3.2",
    "hasChildren": true,
    "isWorkPackage": false
  },
  {
    "code": "3.2.1.1",
    "name": "Xây dựng phần đầu trang",
    "level": 4,
    "parent": "3.2.1",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.2.1.2",
    "name": "Xây dựng thanh tìm kiếm",
    "level": 4,
    "parent": "3.2.1",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.2.1.3",
    "name": "Hiển thị danh mục sản phẩm",
    "level": 4,
    "parent": "3.2.1",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.2.1.4",
    "name": "Hiển thị sản phẩm nổi bật",
    "level": 4,
    "parent": "3.2.1",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.2.1.5",
    "name": "Xây dựng phần cuối trang",
    "level": 4,
    "parent": "3.2.1",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.2.2",
    "name": "Phát triển trang danh sách sản phẩm",
    "level": 3,
    "parent": "3.2",
    "hasChildren": true,
    "isWorkPackage": false
  },
  {
    "code": "3.2.2.1",
    "name": "Hiển thị danh sách sản phẩm",
    "level": 4,
    "parent": "3.2.2",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.2.2.2",
    "name": "Xây dựng chức năng lọc sản phẩm",
    "level": 4,
    "parent": "3.2.2",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.2.2.3",
    "name": "Xây dựng chức năng phân trang",
    "level": 4,
    "parent": "3.2.2",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.2.3",
    "name": "Phát triển trang chi tiết sản phẩm",
    "level": 3,
    "parent": "3.2",
    "hasChildren": true,
    "isWorkPackage": false
  },
  {
    "code": "3.2.3.1",
    "name": "Hiển thị hình ảnh sản phẩm",
    "level": 4,
    "parent": "3.2.3",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.2.3.2",
    "name": "Hiển thị mô tả sản phẩm",
    "level": 4,
    "parent": "3.2.3",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.2.3.3",
    "name": "Hiển thị giá sản phẩm",
    "level": 4,
    "parent": "3.2.3",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.2.3.4",
    "name": "Xây dựng giao diện thêm vào giỏ hàng",
    "level": 4,
    "parent": "3.2.3",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.2.4",
    "name": "Phát triển giao diện giỏ hàng",
    "level": 3,
    "parent": "3.2",
    "hasChildren": true,
    "isWorkPackage": false
  },
  {
    "code": "3.2.4.1",
    "name": "Hiển thị sản phẩm trong giỏ hàng",
    "level": 4,
    "parent": "3.2.4",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.2.4.2",
    "name": "Cập nhật số lượng sản phẩm",
    "level": 4,
    "parent": "3.2.4",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.2.4.3",
    "name": "Xóa sản phẩm khỏi giỏ hàng",
    "level": 4,
    "parent": "3.2.4",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.2.4.4",
    "name": "Hiển thị tổng giá trị giỏ hàng",
    "level": 4,
    "parent": "3.2.4",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.2.5",
    "name": "Phát triển giao diện thanh toán",
    "level": 3,
    "parent": "3.2",
    "hasChildren": true,
    "isWorkPackage": false
  },
  {
    "code": "3.2.5.1",
    "name": "Xây dựng biểu mẫu thông tin khách hàng",
    "level": 4,
    "parent": "3.2.5",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.2.5.2",
    "name": "Xây dựng giao diện chọn phương thức thanh toán",
    "level": 4,
    "parent": "3.2.5",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.2.5.3",
    "name": "Xây dựng giao diện xác nhận đơn hàng",
    "level": 4,
    "parent": "3.2.5",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.2.5.4",
    "name": "Hiển thị kết quả thanh toán",
    "level": 4,
    "parent": "3.2.5",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.2.6",
    "name": "Phát triển giao diện đăng ký và đăng nhập",
    "level": 3,
    "parent": "3.2",
    "hasChildren": true,
    "isWorkPackage": false
  },
  {
    "code": "3.2.6.1",
    "name": "Xây dựng biểu mẫu đăng ký",
    "level": 4,
    "parent": "3.2.6",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.2.6.2",
    "name": "Xây dựng biểu mẫu đăng nhập",
    "level": 4,
    "parent": "3.2.6",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.2.6.3",
    "name": "Xây dựng giao diện thông tin cá nhân",
    "level": 4,
    "parent": "3.2.6",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.2.7",
    "name": "Phát triển giao diện quản trị viên",
    "level": 3,
    "parent": "3.2",
    "hasChildren": true,
    "isWorkPackage": false
  },
  {
    "code": "3.2.7.1",
    "name": "Xây dựng trang tổng quan",
    "level": 4,
    "parent": "3.2.7",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.2.7.2",
    "name": "Xây dựng giao diện quản lý sản phẩm",
    "level": 4,
    "parent": "3.2.7",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.2.7.3",
    "name": "Xây dựng giao diện quản lý đơn hàng",
    "level": 4,
    "parent": "3.2.7",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.2.7.4",
    "name": "Xây dựng giao diện quản lý người dùng",
    "level": 4,
    "parent": "3.2.7",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.3",
    "name": "Phát triển xử lý phía máy chủ",
    "level": 2,
    "parent": "3",
    "hasChildren": true,
    "isWorkPackage": false
  },
  {
    "code": "3.3.1",
    "name": "Phát triển chức năng quản lý người dùng",
    "level": 3,
    "parent": "3.3",
    "hasChildren": true,
    "isWorkPackage": false
  },
  {
    "code": "3.3.1.1",
    "name": "Xây dựng chức năng đăng ký",
    "level": 4,
    "parent": "3.3.1",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.3.1.2",
    "name": "Xây dựng chức năng đăng nhập",
    "level": 4,
    "parent": "3.3.1",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.3.1.3",
    "name": "Xây dựng chức năng cập nhật thông tin",
    "level": 4,
    "parent": "3.3.1",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.3.1.4",
    "name": "Xây dựng chức năng phân quyền",
    "level": 4,
    "parent": "3.3.1",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.3.2",
    "name": "Phát triển chức năng quản lý sản phẩm",
    "level": 3,
    "parent": "3.3",
    "hasChildren": true,
    "isWorkPackage": false
  },
  {
    "code": "3.3.2.1",
    "name": "Xây dựng chức năng thêm sản phẩm",
    "level": 4,
    "parent": "3.3.2",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.3.2.2",
    "name": "Xây dựng chức năng sửa sản phẩm",
    "level": 4,
    "parent": "3.3.2",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.3.2.3",
    "name": "Xây dựng chức năng xóa sản phẩm",
    "level": 4,
    "parent": "3.3.2",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.3.2.4",
    "name": "Xây dựng chức năng lấy danh sách sản phẩm",
    "level": 4,
    "parent": "3.3.2",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.3.3",
    "name": "Phát triển chức năng quản lý danh mục",
    "level": 3,
    "parent": "3.3",
    "hasChildren": true,
    "isWorkPackage": false
  },
  {
    "code": "3.3.3.1",
    "name": "Xây dựng chức năng thêm danh mục",
    "level": 4,
    "parent": "3.3.3",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.3.3.2",
    "name": "Xây dựng chức năng sửa danh mục",
    "level": 4,
    "parent": "3.3.3",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.3.3.3",
    "name": "Xây dựng chức năng xóa danh mục",
    "level": 4,
    "parent": "3.3.3",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.3.4",
    "name": "Phát triển chức năng quản lý giỏ hàng",
    "level": 3,
    "parent": "3.3",
    "hasChildren": true,
    "isWorkPackage": false
  },
  {
    "code": "3.3.4.1",
    "name": "Xây dựng chức năng thêm sản phẩm vào giỏ",
    "level": 4,
    "parent": "3.3.4",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.3.4.2",
    "name": "Xây dựng chức năng cập nhật giỏ hàng",
    "level": 4,
    "parent": "3.3.4",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.3.4.3",
    "name": "Xây dựng chức năng xóa sản phẩm khỏi giỏ",
    "level": 4,
    "parent": "3.3.4",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.3.5",
    "name": "Phát triển chức năng quản lý đơn hàng",
    "level": 3,
    "parent": "3.3",
    "hasChildren": true,
    "isWorkPackage": false
  },
  {
    "code": "3.3.5.1",
    "name": "Xây dựng chức năng tạo đơn hàng",
    "level": 4,
    "parent": "3.3.5",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.3.5.2",
    "name": "Xây dựng chức năng cập nhật trạng thái đơn hàng",
    "level": 4,
    "parent": "3.3.5",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.3.5.3",
    "name": "Xây dựng chức năng xem danh sách đơn hàng",
    "level": 4,
    "parent": "3.3.5",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.3.6",
    "name": "Phát triển chức năng thanh toán",
    "level": 3,
    "parent": "3.3",
    "hasChildren": true,
    "isWorkPackage": false
  },
  {
    "code": "3.3.6.1",
    "name": "Tích hợp phương thức thanh toán",
    "level": 4,
    "parent": "3.3.6",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.3.6.2",
    "name": "Xử lý kết quả thanh toán",
    "level": 4,
    "parent": "3.3.6",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.4",
    "name": "Phát triển cơ sở dữ liệu",
    "level": 2,
    "parent": "3",
    "hasChildren": true,
    "isWorkPackage": false
  },
  {
    "code": "3.4.1",
    "name": "Tạo bảng người dùng",
    "level": 3,
    "parent": "3.4",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.4.2",
    "name": "Tạo bảng sản phẩm",
    "level": 3,
    "parent": "3.4",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.4.3",
    "name": "Tạo bảng danh mục",
    "level": 3,
    "parent": "3.4",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.4.4",
    "name": "Tạo bảng giỏ hàng",
    "level": 3,
    "parent": "3.4",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.4.5",
    "name": "Tạo bảng đơn hàng",
    "level": 3,
    "parent": "3.4",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.4.6",
    "name": "Tạo bảng chi tiết đơn hàng",
    "level": 3,
    "parent": "3.4",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "3.4.7",
    "name": "Thiết lập quan hệ và ràng buộc dữ liệu",
    "level": 3,
    "parent": "3.4",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "4",
    "name": "Kiểm thử hệ thống",
    "level": 1,
    "parent": "",
    "hasChildren": true,
    "isWorkPackage": false
  },
  {
    "code": "4.1",
    "name": "Kiểm thử chức năng",
    "level": 2,
    "parent": "4",
    "hasChildren": true,
    "isWorkPackage": false
  },
  {
    "code": "4.1.1",
    "name": "Kiểm thử đăng ký",
    "level": 3,
    "parent": "4.1",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "4.1.2",
    "name": "Kiểm thử đăng nhập",
    "level": 3,
    "parent": "4.1",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "4.1.3",
    "name": "Kiểm thử quản lý sản phẩm",
    "level": 3,
    "parent": "4.1",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "4.1.4",
    "name": "Kiểm thử giỏ hàng",
    "level": 3,
    "parent": "4.1",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "4.1.5",
    "name": "Kiểm thử thanh toán",
    "level": 3,
    "parent": "4.1",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "4.1.6",
    "name": "Kiểm thử quản lý đơn hàng",
    "level": 3,
    "parent": "4.1",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "4.2",
    "name": "Kiểm thử giao diện",
    "level": 2,
    "parent": "4",
    "hasChildren": true,
    "isWorkPackage": false
  },
  {
    "code": "4.2.1",
    "name": "Kiểm thử khả năng hiển thị trên các thiết bị",
    "level": 3,
    "parent": "4.2",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "4.2.2",
    "name": "Kiểm thử giao diện trên các trình duyệt",
    "level": 3,
    "parent": "4.2",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "4.2.3",
    "name": "Kiểm thử tính nhất quán giao diện",
    "level": 3,
    "parent": "4.2",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "4.3",
    "name": "Kiểm thử tích hợp",
    "level": 2,
    "parent": "4",
    "hasChildren": true,
    "isWorkPackage": false
  },
  {
    "code": "4.3.1",
    "name": "Kiểm thử giao tiếp giữa giao diện và máy chủ",
    "level": 3,
    "parent": "4.3",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "4.3.2",
    "name": "Kiểm thử kết nối máy chủ và cơ sở dữ liệu",
    "level": 3,
    "parent": "4.3",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "4.3.3",
    "name": "Kiểm thử tích hợp thanh toán",
    "level": 3,
    "parent": "4.3",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "4.4",
    "name": "Kiểm thử phi chức năng",
    "level": 2,
    "parent": "4",
    "hasChildren": true,
    "isWorkPackage": false
  },
  {
    "code": "4.4.1",
    "name": "Kiểm thử hiệu năng",
    "level": 3,
    "parent": "4.4",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "4.4.2",
    "name": "Kiểm thử bảo mật cơ bản",
    "level": 3,
    "parent": "4.4",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "4.4.3",
    "name": "Kiểm thử khả năng tương thích",
    "level": 3,
    "parent": "4.4",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "4.5",
    "name": "Sửa lỗi và kiểm thử lại",
    "level": 2,
    "parent": "4",
    "hasChildren": true,
    "isWorkPackage": false
  },
  {
    "code": "4.5.1",
    "name": "Sửa lỗi giao diện",
    "level": 3,
    "parent": "4.5",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "4.5.2",
    "name": "Sửa lỗi xử lý phía máy chủ",
    "level": 3,
    "parent": "4.5",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "4.5.3",
    "name": "Sửa lỗi cơ sở dữ liệu",
    "level": 3,
    "parent": "4.5",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "4.5.4",
    "name": "Kiểm thử hồi quy",
    "level": 3,
    "parent": "4.5",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "5",
    "name": "Triển khai hệ thống",
    "level": 1,
    "parent": "",
    "hasChildren": true,
    "isWorkPackage": false
  },
  {
    "code": "5.1",
    "name": "Chuẩn bị môi trường triển khai",
    "level": 2,
    "parent": "5",
    "hasChildren": true,
    "isWorkPackage": false
  },
  {
    "code": "5.1.1",
    "name": "Cấu hình máy chủ",
    "level": 3,
    "parent": "5.1",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "5.1.2",
    "name": "Cấu hình cơ sở dữ liệu thực tế",
    "level": 3,
    "parent": "5.1",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "5.1.3",
    "name": "Cấu hình tên miền và dịch vụ lưu trữ",
    "level": 3,
    "parent": "5.1",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "5.1.4",
    "name": "Cấu hình các thông số hệ thống",
    "level": 3,
    "parent": "5.1",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "5.2",
    "name": "Triển khai website",
    "level": 2,
    "parent": "5",
    "hasChildren": true,
    "isWorkPackage": false
  },
  {
    "code": "5.2.1",
    "name": "Triển khai giao diện người dùng",
    "level": 3,
    "parent": "5.2",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "5.2.2",
    "name": "Triển khai xử lý phía máy chủ",
    "level": 3,
    "parent": "5.2",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "5.2.3",
    "name": "Triển khai cơ sở dữ liệu",
    "level": 3,
    "parent": "5.2",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "5.2.4",
    "name": "Kết nối các thành phần hệ thống",
    "level": 3,
    "parent": "5.2",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "5.3",
    "name": "Kiểm tra sau triển khai",
    "level": 2,
    "parent": "5",
    "hasChildren": true,
    "isWorkPackage": false
  },
  {
    "code": "5.3.1",
    "name": "Kiểm tra khả năng truy cập website",
    "level": 3,
    "parent": "5.3",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "5.3.2",
    "name": "Kiểm tra các chức năng chính",
    "level": 3,
    "parent": "5.3",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "5.3.3",
    "name": "Kiểm tra hiệu năng hệ thống",
    "level": 3,
    "parent": "5.3",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "5.3.4",
    "name": "Kiểm tra bảo mật cơ bản",
    "level": 3,
    "parent": "5.3",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "6",
    "name": "Bàn giao và kết thúc dự án",
    "level": 1,
    "parent": "",
    "hasChildren": true,
    "isWorkPackage": false
  },
  {
    "code": "6.1",
    "name": "Chuẩn bị tài liệu kỹ thuật",
    "level": 2,
    "parent": "6",
    "hasChildren": true,
    "isWorkPackage": false
  },
  {
    "code": "6.1.1",
    "name": "Tài liệu kiến trúc hệ thống",
    "level": 3,
    "parent": "6.1",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "6.1.2",
    "name": "Tài liệu cơ sở dữ liệu",
    "level": 3,
    "parent": "6.1",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "6.1.3",
    "name": "Tài liệu giao diện lập trình",
    "level": 3,
    "parent": "6.1",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "6.1.4",
    "name": "Tài liệu mã nguồn",
    "level": 3,
    "parent": "6.1",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "6.2",
    "name": "Chuẩn bị tài liệu hướng dẫn",
    "level": 2,
    "parent": "6",
    "hasChildren": true,
    "isWorkPackage": false
  },
  {
    "code": "6.2.1",
    "name": "Tài liệu hướng dẫn người dùng",
    "level": 3,
    "parent": "6.2",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "6.2.2",
    "name": "Tài liệu hướng dẫn quản trị viên",
    "level": 3,
    "parent": "6.2",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "6.2.3",
    "name": "Tài liệu cài đặt và cấu hình",
    "level": 3,
    "parent": "6.2",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "6.3",
    "name": "Bàn giao sản phẩm",
    "level": 2,
    "parent": "6",
    "hasChildren": true,
    "isWorkPackage": false
  },
  {
    "code": "6.3.1",
    "name": "Bàn giao mã nguồn",
    "level": 3,
    "parent": "6.3",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "6.3.2",
    "name": "Bàn giao website đã triển khai",
    "level": 3,
    "parent": "6.3",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "6.3.3",
    "name": "Bàn giao cơ sở dữ liệu",
    "level": 3,
    "parent": "6.3",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "6.3.4",
    "name": "Hướng dẫn khách hàng sử dụng hệ thống",
    "level": 3,
    "parent": "6.3",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "6.4",
    "name": "Nghiệm thu dự án",
    "level": 2,
    "parent": "6",
    "hasChildren": true,
    "isWorkPackage": false
  },
  {
    "code": "6.4.1",
    "name": "Kiểm tra các sản phẩm bàn giao",
    "level": 3,
    "parent": "6.4",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "6.4.2",
    "name": "Xác nhận đáp ứng yêu cầu",
    "level": 3,
    "parent": "6.4",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "6.4.3",
    "name": "Xác nhận nghiệm thu với khách hàng",
    "level": 3,
    "parent": "6.4",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "6.5",
    "name": "Kết thúc dự án",
    "level": 2,
    "parent": "6",
    "hasChildren": true,
    "isWorkPackage": false
  },
  {
    "code": "6.5.1",
    "name": "Lập báo cáo tổng kết",
    "level": 3,
    "parent": "6.5",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "6.5.2",
    "name": "Tổng hợp kinh nghiệm dự án",
    "level": 3,
    "parent": "6.5",
    "hasChildren": false,
    "isWorkPackage": true
  },
  {
    "code": "6.5.3",
    "name": "Xác nhận hoàn thành dự án",
    "level": 3,
    "parent": "6.5",
    "hasChildren": false,
    "isWorkPackage": true
  }
];
