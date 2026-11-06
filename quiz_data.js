// DỮ LIỆU ÔN THI MÔN QUẢN LÝ DỰ ÁN PHẦN MỀM - BÁM SÁT 100% SLIDE
// ĐẠI HỌC THĂNG LONG - GIẢNG VIÊN VŨ DUY KHƯƠNG

const MCQ_QUESTIONS = [
  {
    "id": 1,
    "chapter": 1,
    "tag": "Khái niệm",
    "question": "Dự án là gì theo định nghĩa trong bài giảng?",
    "options": [
      "A. Tập hợp các hoạt động có: Mục tiêu cụ thể, Thời gian xác định, Nguồn lực giới hạn, Kết quả đầu ra rõ ràng",
      "B. Quá trình vận hành kinh doanh lặp đi lặp lại vô thời hạn của công ty",
      "C. Hoạt động viết mã nguồn phần mềm của một nhóm lập trình viên",
      "D. Kế hoạch tài chính hàng năm của tổ chức"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 1 (trang 5): Dự án = tập hợp các hoạt động có: • Mục tiêu cụ thể • Thời gian xác định • Nguồn lực giới hạn • Kết quả đầu ra rõ ràng.",
    "tip": "Dự án = Mục tiêu cụ thể + Thời gian xác định + Nguồn lực giới hạn + Kết quả đầu ra rõ ràng."
  },
  {
    "id": 2,
    "chapter": 1,
    "tag": "Khái niệm",
    "question": "Trong slide bài giảng, các ví dụ điển hình nào được đưa ra cho một dự án?",
    "options": [
      "A. Xây dựng website bán hàng, triển khai hệ thống ERP",
      "B. Trả lương định kỳ hàng tháng cho nhân viên",
      "C. Quét dọn văn phòng hàng ngày",
      "D. Bảo trì máy tính định kỳ vô thời hạn"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 1 (trang 5): Ví dụ dự án: Xây dựng website bán hàng, triển khai hệ thống ERP.",
    "tip": "Ví dụ dự án: Xây dựng website bán hàng, triển khai hệ thống ERP."
  },
  {
    "id": 3,
    "chapter": 1,
    "tag": "Khái niệm",
    "question": "Đặc điểm của dự án phần mềm gồm những ý nào sau đây?",
    "options": [
      "A. Sản phẩm hữu hình, yêu cầu cố định, ít rủi ro",
      "B. Sản phẩm vô hình, Yêu cầu thay đổi liên tục, Phụ thuộc con người nhiều hơn máy móc, Rủi ro cao",
      "C. Phụ thuộc máy móc nhiều hơn con người, không có rủi ro",
      "D. Không bao giờ thay đổi yêu cầu sau khi đã ký hợp đồng"
    ],
    "answer": 1,
    "explanation": "Theo slide Chương 1 (trang 6): ĐẶC ĐIỂM DỰ ÁN PHẦN MỀM: • Sản phẩm vô hình • Yêu cầu thay đổi liên tục • Phụ thuộc con người nhiều hơn máy móc • Rủi ro cao.",
    "tip": "Đặc điểm phần mềm: Sản phẩm vô hình • Yêu cầu thay đổi liên tục • Phụ thuộc con người nhiều hơn máy móc • Rủi ro cao."
  },
  {
    "id": 4,
    "chapter": 1,
    "tag": "Khái niệm",
    "question": "Quản lý dự án là gì?",
    "options": [
      "A. Là chỉ ép nhân viên làm thêm giờ để kịp ngày bàn giao",
      "B. Áp dụng kiến thức, kỹ năng, công cụ và kỹ thuật vào các hoạt động của dự án nhằm đáp ứng yêu cầu của dự án",
      "C. Chỉ là công việc của giám đốc công ty",
      "D. Là việc viết tài liệu hướng dẫn sử dụng phần mềm"
    ],
    "answer": 1,
    "explanation": "Theo slide Chương 1 (trang 7): Quản lý dự án là áp dụng kiến thức, kỹ năng, công cụ và kỹ thuật vào các hoạt động của dự án nhằm đáp ứng yêu cầu của dự án.",
    "tip": "QLDA = Áp dụng kiến thức, kỹ năng, công cụ, kỹ thuật để đáp ứng yêu cầu dự án."
  },
  {
    "id": 5,
    "chapter": 1,
    "tag": "Khái niệm",
    "question": "Quản lý dự án nhằm đạt được các mục tiêu nào sau đây?",
    "options": [
      "A. Đạt mục tiêu dự án; Đạt hoặc vượt kỳ vọng của stakeholders; Cân bằng giữa: thời gian, chi phí, chất lượng sản phẩm",
      "B. Chỉ cần hoàn thành phần mềm không cần quan tâm chi phí",
      "C. Cắt giảm tối đa nhân sự để tiết kiệm tiền",
      "D. Bỏ qua yêu cầu của khách hàng để làm theo ý đội ngũ kỹ thuật"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 1 (trang 7): • Đạt mục tiêu dự án • Đạt hoặc vượt các yêu cầu hay kỳ vọng của stakeholders • Cân bằng giữa các yếu tố: thời gian, chi phí, chất lượng sản phẩm.",
    "tip": "Mục tiêu QLDA: Đạt mục tiêu • Đạt/vượt kỳ vọng stakeholders • Cân bằng thời gian, chi phí, chất lượng."
  },
  {
    "id": 6,
    "chapter": 1,
    "tag": "Khái niệm",
    "question": "Về mặt quy trình, Quản lý dự án là quá trình gồm những hoạt động nào?",
    "options": [
      "A. Lập kế hoạch (Planning), Tổ chức (Organizing), Điều phối (Coordinating), Theo dõi & kiểm soát (Monitoring & Controlling)",
      "B. Mua máy chủ, cài hệ điều hành, viết code, sửa lỗi",
      "C. Phỏng vấn tuyển dụng, trả lương, sa thải nhân viên",
      "D. Họp báo, quảng cáo sản phẩm, bán hàng"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 1 (trang 8): Quản lý dự án là quá trình: • Lập kế hoạch (Planning) • Tổ chức (Organizing) • Điều phối (Coordinating) • Theo dõi & kiểm soát (Monitoring & Controlling) nhằm đạt mục tiêu dự án trong các ràng buộc.",
    "tip": "Quy trình QLDA: Lập kế hoạch • Tổ chức • Điều phối • Theo dõi & kiểm soát."
  },
  {
    "id": 7,
    "chapter": 1,
    "tag": "Khái niệm",
    "question": "Nhiệm vụ nào trong quản lý dự án trả lời cho câu hỏi: 'Nhắm tới mục tiêu nào, tại sao?'",
    "options": [
      "A. Lập kế hoạch (Planning)",
      "B. Tổ chức (Organizing)",
      "C. Chỉ đạo (Directing)",
      "D. Kiểm soát (Controlling)"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 1 (trang 9): Lập kế hoạch (Planning): Nhắm tới mục tiêu nào, tại sao?",
    "tip": "Lập kế hoạch (Planning) = Nhắm tới mục tiêu nào, tại sao?"
  },
  {
    "id": 8,
    "chapter": 1,
    "tag": "Khái niệm",
    "question": "Nhiệm vụ nào trong quản lý dự án trả lời cho câu hỏi: 'Liên quan đến cái gì, tại sao?'",
    "options": [
      "A. Lập kế hoạch (Planning)",
      "B. Tổ chức (Organizing)",
      "C. Chỉ đạo (Directing)",
      "D. Tạo động lực (Motivation)"
    ],
    "answer": 1,
    "explanation": "Theo slide Chương 1 (trang 9): Tổ chức (Organizing): Liên quan đến cái gì, tại sao?",
    "tip": "Tổ chức (Organizing) = Liên quan đến cái gì, tại sao?"
  },
  {
    "id": 9,
    "chapter": 1,
    "tag": "Khái niệm",
    "question": "Nhiệm vụ nào trong quản lý dự án trả lời cho câu hỏi: 'Ai quyết định cái gì, khi nào?'",
    "options": [
      "A. Lập kế hoạch (Planning)",
      "B. Chỉ đạo (Directing)",
      "C. Tạo động lực (Motivation)",
      "D. Kiểm soát (Controlling)"
    ],
    "answer": 1,
    "explanation": "Theo slide Chương 1 (trang 9): Chỉ đạo (Directing): Ai quyết định cái gì, khi nào?",
    "tip": "Chỉ đạo (Directing) = Ai quyết định cái gì, khi nào?"
  },
  {
    "id": 10,
    "chapter": 1,
    "tag": "Khái niệm",
    "question": "Nhiệm vụ nào trong quản lý dự án giải quyết câu hỏi: 'Điều gì khiến mọi người có thể bộc lộ những phẩm chất tốt nhất trong công việc?'",
    "options": [
      "A. Chỉ đạo (Directing)",
      "B. Tạo động lực (Motivation)",
      "C. Kiểm soát (Controlling)",
      "D. Tổ chức (Organizing)"
    ],
    "answer": 1,
    "explanation": "Theo slide Chương 1 (trang 9): Tạo động lực (Motivation): Điều gì khiến mọi người có thể bộc lộ những phẩm chất tốt nhất trong công việc?",
    "tip": "Tạo động lực (Motivation) = Bộc lộ phẩm chất tốt nhất trong công việc."
  },
  {
    "id": 11,
    "chapter": 1,
    "tag": "Khái niệm",
    "question": "Nhiệm vụ nào trong quản lý dự án trả lời cho câu hỏi: 'Ai thẩm định kết quả? Dựa vào các tiêu chuẩn nào?'",
    "options": [
      "A. Kiểm soát (Controlling)",
      "B. Lập kế hoạch (Planning)",
      "C. Chỉ đạo (Directing)",
      "D. Tổ chức (Organizing)"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 1 (trang 9): Kiểm soát (Controlling): Ai thẩm định kết quả? Dựa vào các tiêu chuẩn nào?",
    "tip": "Kiểm soát (Controlling) = Ai thẩm định kết quả? Tiêu chuẩn nào?"
  },
  {
    "id": 12,
    "chapter": 1,
    "tag": "Khái niệm",
    "question": "Tam giác dự án gồm những yếu tố nào?",
    "options": [
      "A. Phạm vi (Scope), Thời gian (Time), Chi phí (Cost); Chất lượng là kết quả cân bằng 3 yếu tố",
      "B. Con người, Công cụ, Máy chủ",
      "C. Frontend, Backend, Database",
      "D. Lập trình, Kiểm thử, Bảo trì"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 1 (trang 10): TAM GIÁC DỰ ÁN: • Phạm vi (Scope) • Thời gian (Time) • Chi phí (Cost) • Chất lượng là kết quả cân bằng 3 yếu tố.",
    "tip": "Tam giác dự án: Scope - Time - Cost; Chất lượng ở trung tâm cân bằng."
  },
  {
    "id": 13,
    "chapter": 1,
    "tag": "Khái niệm",
    "question": "Bốn yếu tố liên quan đến quản lý dự án (4P) gồm những gì?",
    "options": [
      "A. Con người, Sản phẩm, Quy trình, Dự án",
      "B. Planning, Programming, Testing, Deploying",
      "C. People, Price, Place, Promotion",
      "D. Phạm vi, Tiến độ, Ngân sách, Chất lượng"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 1 (trang 12): 4 YẾU TỐ LIÊN QUAN ĐẾN QUẢN LÝ DỰ ÁN: • Con người (quan trọng nhất) • Sản phẩm • Quy trình • Dự án.",
    "tip": "4P của QLDA: Con người • Sản phẩm • Quy trình • Dự án."
  },
  {
    "id": 14,
    "chapter": 1,
    "tag": "Khái niệm",
    "question": "Theo slide bài giảng, yếu tố nào là QUAN TRỌNG NHẤT của dự án trong 4 yếu tố?",
    "options": [
      "A. Sản phẩm",
      "B. Quy trình",
      "C. Con người",
      "D. Dự án"
    ],
    "answer": 2,
    "explanation": "Theo slide Chương 1 (trang 12): 'Con người — yếu tố quan trọng nhất của dự án'.",
    "tip": "Con người = Yếu tố quan trọng nhất của dự án."
  },
  {
    "id": 15,
    "chapter": 1,
    "tag": "Khái niệm",
    "question": "Vai trò của PM (Project Manager) gồm những nội dung nào?",
    "options": [
      "A. Kết nối giữa khách hàng – đội dự án – tổ chức; Ra quyết định; Quản lý rủi ro; Đảm bảo giao tiếp hiệu quả",
      "B. Viết toàn bộ code backend của hệ thống",
      "C. Trực tiếp chạy máy chủ và cài đặt mạng",
      "D. Đi bán hàng thu tiền trực tiếp từ người dùng cuối"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 1 (trang 13): VAI TRÒ PM: • Kết nối giữa khách hàng – đội dự án – tổ chức • Ra quyết định • Quản lý rủi ro • Đảm bảo giao tiếp hiệu quả.",
    "tip": "Vai trò PM: Kết nối 3 bên • Ra quyết định • Quản lý rủi ro • Đảm bảo giao tiếp."
  },
  {
    "id": 16,
    "chapter": 1,
    "tag": "Khái niệm",
    "question": "Thế nào là một 'Dự án thành công' theo slide?",
    "options": [
      "A. Hoàn thành đúng hạn, Trong ngân sách, Đáp ứng yêu cầu người dùng, Chất lượng chấp nhận được",
      "B. Chỉ cần xong đúng hạn, chi phí bao nhiêu cũng được",
      "C. Làm ra thật nhiều tính năng dù người dùng không cần",
      "D. Tiết kiệm được 90% tiền dù sản phẩm bị lỗi nhiều"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 1 (trang 15): DỰ ÁN THÀNH CÔNG: • Hoàn thành đúng hạn • Trong ngân sách • Đáp ứng yêu cầu người dùng • Chất lượng chấp nhận được.",
    "tip": "Thành công: Đúng hạn • Trong ngân sách • Đáp ứng yêu cầu • Chất lượng chấp nhận được."
  },
  {
    "id": 17,
    "chapter": 1,
    "tag": "Khái niệm",
    "question": "Thế nào là một 'Dự án thất bại' theo slide?",
    "options": [
      "A. Trễ tiến độ, Vượt chi phí, Sản phẩm không dùng được, Bị hủy giữa chừng",
      "B. Hoàn thành trước hạn và dư thừa ngân sách",
      "C. Khách hàng khen ngợi nhưng không dùng hết tính năng",
      "D. Được giải thưởng công nghệ nhưng phải cập nhật bản vá"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 1 (trang 16): DỰ ÁN THẤT BẠI: • Trễ tiến độ • Vượt chi phí • Sản phẩm không dùng được • Bị hủy giữa chừng.",
    "tip": "Thất bại: Trễ tiến độ • Vượt chi phí • Không dùng được • Bị hủy giữa chừng."
  },
  {
    "id": 18,
    "chapter": 1,
    "tag": "Khái niệm",
    "question": "Các nguyên nhân chính khiến dự án thất bại gồm:",
    "options": [
      "A. Yêu cầu không rõ ràng, Thiếu quản lý rủi ro, Giao tiếp kém, Ước lượng sai, Thiếu cam kết từ stakeholders",
      "B. Sử dụng màn hình máy tính quá nhỏ",
      "C. Lập trình viên không biết tiếng Anh",
      "D. Không có phòng nghỉ ngơi cho nhân viên"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 1 (trang 17): NGUYÊN NHÂN THẤT BẠI: • Yêu cầu không rõ ràng • Thiếu quản lý rủi ro • Giao tiếp kém • Ước lượng sai • Thiếu cam kết từ stakeholders.",
    "tip": "Nguyên nhân thất bại: Yêu cầu không rõ • Thiếu quản lý rủi ro • Giao tiếp kém • Ước lượng sai • Thiếu cam kết."
  },
  {
    "id": 19,
    "chapter": 1,
    "tag": "Khái niệm",
    "question": "Bốn vấn đề trọng tâm cần quản lý trong dự án là:",
    "options": [
      "A. Tiến trình (Process / Schedule), Sản phẩm (Product), Nhân lực (People), Môi trường & tài nguyên (Environment & Resources)",
      "B. Bàn ghế, Máy tính, Điều hòa, Tiền điện",
      "C. Tuyển dụng, Đào tạo, Trả lương, Bảo hiểm",
      "D. Khảo sát, Báo giá, Thu tiền, Xuất hóa đơn"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 1 (trang 20): CÁC VẤN ĐỀ CẦN QUẢN LÝ: • Tiến trình (Process / Schedule) • Sản phẩm (Product) • Nhân lực (People) • Môi trường & tài nguyên (Environment & Resources).",
    "tip": "4 vấn đề cần quản lý: Tiến trình • Sản phẩm • Nhân lực • Môi trường & tài nguyên."
  },
  {
    "id": 20,
    "chapter": 1,
    "tag": "Khái niệm",
    "question": "Các công cụ dùng để quản lý tiến trình gồm:",
    "options": [
      "A. WBS (Work Breakdown Structure), Gantt Chart, Milestone",
      "B. Photoshop, Illustrator, Figma",
      "C. Word, Excel, PowerPoint",
      "D. GitHub, GitLab, Bitbucket"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 1 (trang 21): Công cụ quản lý tiến trình: • WBS (Work Breakdown Structure) • Gantt Chart • Milestone.",
    "tip": "Công cụ quản lý tiến trình: WBS • Gantt Chart • Milestone."
  },
  {
    "id": 21,
    "chapter": 1,
    "tag": "Khái niệm",
    "question": "WBS là gì và có tác dụng gì?",
    "options": [
      "A. Là viết tắt của Web Browser System để duyệt web",
      "B. Cấu trúc phân rã công việc giúp: Chia nhỏ công việc, Dễ ước lượng, Dễ quản lý",
      "C. Phần mềm diệt virus cho máy tính dự án",
      "D. Bảng chấm công hàng ngày của lập trình viên"
    ],
    "answer": 1,
    "explanation": "Theo slide Chương 1 (trang 22): WBS: • Chia nhỏ công việc • Dễ ước lượng • Dễ quản lý.",
    "tip": "WBS = Chia nhỏ công việc • Dễ ước lượng • Dễ quản lý."
  },
  {
    "id": 22,
    "chapter": 1,
    "tag": "Khái niệm",
    "question": "Phân biệt hai loại cấu trúc phân rã công việc WBS:",
    "options": [
      "A. Contract WBS (CWBS) gồm 2-3 mức đầu dùng theo dõi mức cao; Project WBS (PWBS) gắn với sản phẩm phân phối dùng theo dõi mức thấp nhất",
      "B. CWBS dùng cho nhà nước, PWBS dùng cho tư nhân",
      "C. CWBS dùng cho phần cứng, PWBS dùng cho phần mềm",
      "D. Hai loại này hoàn toàn giống nhau"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 1 (trang 22): 1- WBS dạng hợp đồng (CWBS): chỉ gồm 2 hoặc 3 mức đầu tiên, thường dùng để theo dõi các công việc ở mức cao. 2- WBS dạng dự án (PWBS): được định nghĩa bởi PM và đội dự án, các công việc gắn liền với sản phẩm phân phối, dùng để theo dõi công việc ở mức thấp nhất.",
    "tip": "CWBS = 2-3 mức đầu (theo dõi mức cao); PWBS = theo dõi mức thấp nhất."
  },
  {
    "id": 23,
    "chapter": 1,
    "tag": "Khái niệm",
    "question": "Scope (Phạm vi) phần mềm là gì?",
    "options": [
      "A. Những gì được làm và Những gì không làm",
      "B. Toàn bộ tiền vốn của công ty",
      "C. Khoảng cách địa lý từ công ty đến khách hàng",
      "D. Số lượng nhân viên tối đa của dự án"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 1 (trang 27): SCOPE LÀ GÌ? • Những gì được làm • Những gì không làm.",
    "tip": "Scope = Những gì được làm • Những gì không làm."
  },
  {
    "id": 24,
    "chapter": 1,
    "tag": "Khái niệm",
    "question": "Các câu hỏi cốt lõi W5HH theo Pressman gồm những từ nào?",
    "options": [
      "A. Why, What, When, Who, Where, How, How much",
      "B. Which, What, When, Who, Where, How, How long",
      "C. What, When, Where, Why, Whom, Hardware, Help",
      "D. Why, What, Which, When, Who, How, How often"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 1 (trang 29): CÁC CÂU HỎI CỐT LÕI (W5HH – PRESSMAN): • Why • What • When • Who • Where • How • How much.",
    "tip": "W5HH: Why, What, When, Who, Where, How, How much."
  },
  {
    "id": 25,
    "chapter": 1,
    "tag": "Khái niệm",
    "question": "Cơ cấu nhóm dự án thông thường gồm những vai trò nào?",
    "options": [
      "A. PM, Dev, Tester, Stakeholder",
      "B. Giám đốc, Kế toán, Lễ tân, Bảo vệ",
      "C. Thu ngân, Thủ kho, Giao hàng, Tạp vụ",
      "D. Nhà tài trợ, Khán giả, MC, Trọng tài"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 1 (trang 32): CƠ CẤU NHÓM DỰ ÁN: • PM • Dev • Tester • Stakeholder.",
    "tip": "Cơ cấu nhóm: PM • Dev • Tester • Stakeholder."
  },
  {
    "id": 26,
    "chapter": 1,
    "tag": "Khái niệm",
    "question": "Môi trường dự án gồm những gì theo slide?",
    "options": [
      "A. Công cụ (IDE, Jira, Git), Hạ tầng (Server, mạng), Văn hóa tổ chức",
      "B. Bàn ghế, Quạt điện, Nước uống",
      "C. Xe đưa đón, Đồng phục, Thẻ nhân viên",
      "D. Giấy A4, Bút bi, Ghim bấm"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 1 (trang 35): Môi trường dự án gồm: • Công cụ (IDE, Jira, Git) • Hạ tầng (Server, mạng) • Văn hóa tổ chức.",
    "tip": "Môi trường: Công cụ (IDE, Jira, Git) • Hạ tầng (Server, mạng) • Văn hóa tổ chức."
  },
  {
    "id": 27,
    "chapter": 1,
    "tag": "Khái niệm",
    "question": "Quản lý tài nguyên trong dự án gồm những gì?",
    "options": [
      "A. Thời gian, Ngân sách, Thiết bị",
      "B. Đồ ăn, Nước uống, Cà phê",
      "C. Quần áo, Giày dép, Ba lô",
      "D. Vé xe, Phòng khách sạn"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 1 (trang 35 & 37): Quản lý tài nguyên: • Thời gian • Ngân sách • Thiết bị.",
    "tip": "Tài nguyên: Thời gian • Ngân sách • Thiết bị."
  },
  {
    "id": 28,
    "chapter": 1,
    "tag": "Khái niệm",
    "question": "Các rủi ro môi trường thường gặp trong dự án phần mềm là:",
    "options": [
      "A. Mạng yếu, Thiếu server, Thiếu license",
      "B. Mưa bão làm hỏng bàn ghế",
      "C. Thiếu bút viết bảng",
      "D. Máy in hết giấy"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 1 (trang 38): RỦI RO MÔI TRƯỜNG: • Mạng yếu • Thiếu server • Thiếu license.",
    "tip": "Rủi ro môi trường: Mạng yếu • Thiếu server • Thiếu license."
  },
  {
    "id": 29,
    "chapter": 2,
    "tag": "Khái niệm",
    "question": "VÌ SAO CẦN ĐO LƯỜNG TRONG PHẦN MỀM?",
    "options": [
      "A. Không đo → không kiểm soát; Không kiểm soát → không cải tiến; Phần mềm mang tính vô hình",
      "B. Để trừ lương lập trình viên khi viết thiếu dòng code",
      "C. Bắt buộc theo luật doanh nghiệp để nộp thuế",
      "D. Để so sánh xem ai gõ bàn phím nhanh hơn"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 2 (trang 3): VÌ SAO CẦN ĐO LƯỜNG TRONG PHẦN MỀM? • Không đo → không kiểm soát • Không kiểm soát → không cải tiến • Phần mềm mang tính vô hình.",
    "tip": "Không đo → không kiểm soát • Không kiểm soát → không cải tiến • Phần mềm mang tính vô hình."
  },
  {
    "id": 30,
    "chapter": 2,
    "tag": "Khái niệm",
    "question": "Khái niệm nào sau đây định nghĩa đúng về Measurement, Metrics và Indicators?",
    "options": [
      "A. Measurement = Phép đo thô (raw data); Metrics = Đại lượng được tính từ measurement; Indicators = Chỉ báo giúp ra quyết định quản lý",
      "B. Measurement = Chỉ báo; Metrics = Phép đo thô; Indicators = Đại lượng tính toán",
      "C. Cả 3 khái niệm này đều mang ý nghĩa giống nhau",
      "D. Measurement là công cụ đo, Metrics là đơn vị mét, Indicators là đèn báo"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 2 (trang 4 & 6): • Measurement ==> Phép đo thô (raw data) / hoạt động đo • Metrics ==> Đại lượng được tính từ measurement / số liệu định lượng • Indicators ==> Chỉ báo giúp ra quyết định quản lý / chỉ dẫn ra quyết định.",
    "tip": "Measurement = Đo thô • Metrics = Số liệu định lượng • Indicators = Chỉ báo ra quyết định."
  },
  {
    "id": 31,
    "chapter": 2,
    "tag": "Khái niệm",
    "question": "Trong ví dụ ở slide, nếu Measurement là 'số lỗi phát hiện = 50' và 'kích thước = 10 KLOC', thì Metric tương ứng là:",
    "options": [
      "A. Defect Density = 50 lỗi / 10 KLOC = 5 lỗi/KLOC",
      "B. 50 + 10 = 60",
      "C. 50 x 10 = 500",
      "D. Không tính được"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 2 (trang 4): Metric: Defect Density = 50 lỗi / 10 KLOC = 5 lỗi/KLOC. Indicator: Chất lượng mã nguồn chưa đạt, cần cải tiến quy trình kiểm thử.",
    "tip": "Metric = Defect Density = 50 / 10 = 5 lỗi/KLOC."
  },
  {
    "id": 32,
    "chapter": 2,
    "tag": "Khái niệm",
    "question": "Theo slide bài giảng, câu kết luận nào sau đây là chuẩn xác nhất?",
    "options": [
      "A. Measurement không có ý nghĩa nếu không chuyển thành Metric và Indicator",
      "B. Chỉ cần thu thập Measurement là đủ để quản lý dự án",
      "C. Metric quan trọng hơn Indicator trong việc ra quyết định",
      "D. Không cần đo lường bất cứ thứ gì trong dự án"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 2 (trang 4): '==> Measurement không có ý nghĩa nếu không chuyển thành Metric và Indicator.'",
    "tip": "Measurement không có ý nghĩa nếu không chuyển thành Metric và Indicator."
  },
  {
    "id": 33,
    "chapter": 2,
    "tag": "Khái niệm",
    "question": "Đặc điểm của một số liệu tốt (Good Metric) theo Pressman gồm:",
    "options": [
      "A. Đơn giản, Có ý nghĩa, Thu thập được, Có thể hành động",
      "B. Phức tạp, Bí mật, Đắt tiền, Khó lấy",
      "C. Dài dòng, Nhiều biến số ngầm, Khó tính",
      "D. Càng nhiều số thập phân càng tốt"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 2 (trang 7): ĐẶC ĐIỂM CỦA SỐ LIỆU TỐT (PRESSMAN): • Đơn giản • Có ý nghĩa • Thu thập được • Có thể hành động.",
    "tip": "Số liệu tốt: Đơn giản • Có ý nghĩa • Thu thập được • Có thể hành động."
  },
  {
    "id": 34,
    "chapter": 2,
    "tag": "Khái niệm",
    "question": "Phân loại số liệu trong kỹ nghệ phần mềm gồm 3 nhóm nào?",
    "options": [
      "A. Số liệu quy trình, Số liệu dự án, Số liệu sản phẩm",
      "B. Số liệu tài chính, Số liệu kế toán, Số liệu thuế",
      "C. Số liệu cá nhân, Số liệu tập thể, Số liệu công ty",
      "D. Số liệu ngắn hạn, Số liệu trung hạn, Số liệu dài hạn"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 2 (trang 8): PHÂN LOẠI SỐ LIỆU: • Số liệu quy trình • Số liệu dự án • Số liệu sản phẩm.",
    "tip": "3 nhóm số liệu: Số liệu quy trình • Số liệu dự án • Số liệu sản phẩm."
  },
  {
    "id": 35,
    "chapter": 2,
    "tag": "Khái niệm",
    "question": "Mục tiêu và ví dụ của Số liệu quy trình (Process Metrics) là:",
    "options": [
      "A. Mục tiêu: Cải tiến quy trình, So sánh giữa các dự án. Ví dụ: Defect removal efficiency, Tỷ lệ lỗi theo giai đoạn",
      "B. Mục tiêu: Quản lý chi phí hàng ngày của lập trình viên",
      "C. Mục tiêu: Đếm số phím gõ trong ngày",
      "D. Mục tiêu: Bán bản quyền phần mềm"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 2 (trang 9, 11, 12): Process Metrics: Mục tiêu cải tiến quy trình, so sánh giữa các dự án. Ví dụ: Defect removal efficiency, thời gian thực hiện, hiệu suất, tỷ lệ lỗi theo giai đoạn.",
    "tip": "Process Metrics = Cải tiến quy trình • Ví dụ: Defect removal efficiency."
  },
  {
    "id": 36,
    "chapter": 2,
    "tag": "Khái niệm",
    "question": "Mục tiêu và ví dụ của Số liệu dự án (Project Metrics) là:",
    "options": [
      "A. Mục tiêu: Quản lý dự án (Tiến độ, Chi phí, Năng suất). Ví dụ: Cost variance, Schedule variance, LOC/tháng, FP/người-tháng",
      "B. Mục tiêu: Đánh giá chất lượng của ngành phần mềm cả nước",
      "C. Mục tiêu: So sánh cấu hình phần cứng của các hãng máy tính",
      "D. Mục tiêu: Thay đổi ngôn ngữ lập trình của công ty"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 2 (trang 9, 13, 14): Project Metrics: Mục tiêu quản lý dự án (Tiến độ, Chi phí, Năng suất). Ví dụ: Cost variance, schedule variance, LOC/tháng, Function Point/người-tháng.",
    "tip": "Project Metrics = Quản lý dự án (Tiến độ, Chi phí, Năng suất) • Ví dụ: Cost variance, LOC/tháng."
  },
  {
    "id": 37,
    "chapter": 2,
    "tag": "Tính toán",
    "question": "Bài tập slide: Một dự án viết 8,000 LOC, tổng effort là 10 person-month. Năng suất (Productivity) là:",
    "options": [
      "A. 800 LOC / person-month",
      "B. 80 LOC / person-month",
      "C. 8,000 LOC / person-month",
      "D. 80,000 LOC / person-month"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 2 (trang 16): Productivity = 8000 / 10 = 800 LOC/person-month.",
    "tip": "Productivity = 8000 / 10 = 800 LOC/person-month."
  },
  {
    "id": 38,
    "chapter": 2,
    "tag": "Khái niệm",
    "question": "Theo lời giải trong slide, nhận xét nào sau đây đúng về mức năng suất 800 LOC/person-month?",
    "options": [
      "A. Mức trung bình – khá; Không nên so sánh giữa các ngôn ngữ khác nhau; Chỉ so sánh trong cùng tổ chức",
      "B. Mức quá kém cỏi cần sa thải nhân viên",
      "C. Mức kỷ lục thế giới không ai đạt được",
      "D. Có thể dùng để so sánh thẳng với dự án viết bằng Python"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 2 (trang 16): Nhận xét: • Mức trung bình – khá • Không nên so sánh giữa các ngôn ngữ khác nhau • Chỉ so sánh trong cùng tổ chức.",
    "tip": "800 LOC/PM: Mức trung bình - khá • Không so sánh giữa các ngôn ngữ khác nhau • Chỉ so sánh cùng tổ chức."
  },
  {
    "id": 39,
    "chapter": 2,
    "tag": "Khái niệm",
    "question": "Hai phương pháp chính để đo kích thước phần mềm là:",
    "options": [
      "A. LOC (Lines of Code) và Function Point (FP)",
      "B. Byte và Kilobyte",
      "C. Chiều dài và Chiều rộng",
      "D. Số trang tài liệu và Số slide"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 2 (trang 18): ĐO KÍCH THƯỚC PHẦN MỀM: • LOC (Lines of Code) • Function Point (FP).",
    "tip": "Đo kích thước: LOC và Function Point (FP)."
  },
  {
    "id": 40,
    "chapter": 2,
    "tag": "Khái niệm",
    "question": "Ưu và nhược điểm của phương pháp LOC là gì?",
    "options": [
      "A. Ưu điểm: Dễ đo; Nhược điểm: Phụ thuộc ngôn ngữ",
      "B. Ưu điểm: Độc lập công nghệ; Nhược điểm: Khó tính",
      "C. Ưu điểm: Đo được từ khâu yêu cầu; Nhược điểm: Quá đắt",
      "D. Không có nhược điểm nào"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 2 (trang 19): ƯU & NHƯỢC ĐIỂM LOC: • Dễ đo • Phụ thuộc ngôn ngữ.",
    "tip": "LOC: Dễ đo • Phụ thuộc ngôn ngữ."
  },
  {
    "id": 41,
    "chapter": 2,
    "tag": "Khái niệm",
    "question": "Đặc điểm của phương pháp Function Point (FP) là:",
    "options": [
      "A. Đo theo chức năng, Độc lập công nghệ",
      "B. Đếm số dòng lệnh viết ra trên IDE",
      "C. Phụ thuộc hoàn toàn vào việc dùng C++ hay Java",
      "D. Chỉ đếm được sau khi đã bàn giao sản phẩm"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 2 (trang 20): FUNCTION POINT: • Đo theo chức năng • Độc lập công nghệ.",
    "tip": "Function Point = Đo theo chức năng • Độc lập công nghệ."
  },
  {
    "id": 42,
    "chapter": 2,
    "tag": "Khái niệm",
    "question": "Bảng so sánh LOC vs Function Point (FP) trong slide bài giảng kết luận thế nào?",
    "options": [
      "A. Phụ thuộc ngôn ngữ: LOC (Có) vs FP (Không); Dùng sớm: LOC (Khó) vs FP (Dễ); So sánh dự án: LOC (Kém) vs FP (Tốt) ==> FP phù hợp hơn cho QLDA",
      "B. LOC ưu việt hơn FP về mọi mặt",
      "C. FP không dùng được cho quản lý dự án",
      "D. Cả hai phương pháp đều phụ thuộc ngôn ngữ như nhau"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 2 (trang 23): Bảng so sánh LOC vs FP: Phụ thuộc ngôn ngữ (Có vs Không); Dùng sớm (Khó vs Dễ); So sánh dự án (Kém vs Tốt) ==> FP phù hợp hơn cho quản lý dự án.",
    "tip": "FP: Không phụ thuộc ngôn ngữ • Dùng sớm dễ • So sánh dự án tốt ==> Phù hợp hơn cho QLDA."
  },
  {
    "id": 43,
    "chapter": 2,
    "tag": "Khái niệm",
    "question": "Chất lượng phần mềm theo slide bài giảng gồm các thuộc tính nào?",
    "options": [
      "A. Độ tin cậy, Dễ bảo trì, Dễ sử dụng",
      "B. Giá rẻ, Giao diện sặc sỡ, Nhiều hình ảnh",
      "C. Chạy được trên một máy tính duy nhất",
      "D. Số dòng code càng nhiều càng chất lượng"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 2 (trang 29): CHẤT LƯỢNG PHẦN MỀM LÀ GÌ? • Độ tin cậy • Dễ bảo trì • Dễ sử dụng.",
    "tip": "Chất lượng phần mềm: Độ tin cậy • Dễ bảo trì • Dễ sử dụng."
  },
  {
    "id": 44,
    "chapter": 2,
    "tag": "Khái niệm",
    "question": "Các số liệu đo lường chất lượng phần mềm gồm:",
    "options": [
      "A. Số lỗi, Mật độ lỗi, Thời gian sửa lỗi",
      "B. Số máy chủ, Tốc độ quạt tản nhiệt, Nhiệt độ phòng",
      "C. Số tiền lương, Số ngày nghỉ phép",
      "D. Số lần họp nhóm trong tuần"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 2 (trang 30): SỐ LIỆU CHẤT LƯỢNG: • Số lỗi • Mật độ lỗi • Thời gian sửa lỗi.",
    "tip": "Số liệu chất lượng: Số lỗi • Mật độ lỗi • Thời gian sửa lỗi."
  },
  {
    "id": 45,
    "chapter": 2,
    "tag": "Tính toán",
    "question": "Bài tập slide: Một dự án có tổng LOC: 12,000; số lỗi phát hiện trong kiểm thử: 60. Mật độ lỗi (Defect Density) là:",
    "options": [
      "A. 5 lỗi / KLOC",
      "B. 0.5 lỗi / KLOC",
      "C. 50 lỗi / KLOC",
      "D. 720 lỗi / KLOC"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 2 (trang 33): Defect Density = 60 / 12 = 5 lỗi/KLOC.",
    "tip": "Defect Density = 60 / 12 = 5 lỗi/KLOC."
  },
  {
    "id": 46,
    "chapter": 2,
    "tag": "Khái niệm",
    "question": "Theo lời giải bài tập slide, đánh giá nào sau đây là đúng về mức 5 lỗi/KLOC?",
    "options": [
      "A. 5 lỗi/KLOC là mức trung bình; Với hệ thống quan trọng là chưa đạt; Cần tăng kiểm thử và rà soát quy trình phát triển",
      "B. Mức hoàn hảo tuyệt đối không cần test nữa",
      "C. Đã đạt chuẩn cho mọi hệ thống hàng không và y tế",
      "D. Defect density chỉ tính cho vui để làm báo cáo, không có giá trị"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 2 (trang 33): Đánh giá: • 5 lỗi/KLOC → mức trung bình • Với hệ thống quan trọng: chưa đạt • Cần: Tăng kiểm thử, Rà soát quy trình phát triển ==> Defect density là chỉ báo chất lượng, không phải chỉ để “báo cáo”.",
    "tip": "5 lỗi/KLOC = Mức trung bình • Hệ thống quan trọng: Chưa đạt • Cần tăng test & rà soát quy trình."
  },
  {
    "id": 47,
    "chapter": 2,
    "tag": "Khái niệm",
    "question": "Biến đổi trong dự án phần mềm xuất phát từ những yếu tố nào?",
    "options": [
      "A. Yêu cầu, Nhân lực, Công nghệ",
      "B. Thời tiết, Giao thông, Giá xăng",
      "C. Hãng sản xuất chuột và bàn phím",
      "D. Giờ ăn trưa của công ty"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 2 (trang 39): BIẾN ĐỔI TRONG DỰ ÁN PHẦN MỀM: • Yêu cầu • Nhân lực • Công nghệ.",
    "tip": "Biến đổi trong dự án: Yêu cầu • Nhân lực • Công nghệ."
  },
  {
    "id": 48,
    "chapter": 2,
    "tag": "Khái niệm",
    "question": "Kiểm soát quy trình dựa trên thống kê (SPC) sử dụng các yếu tố nào?",
    "options": [
      "A. Dữ liệu lịch sử, Xu hướng, Ngưỡng kiểm soát (Control Chart: UCL, LCL)",
      "B. Cảm giác trực giác của người quản lý",
      "C. Lời hứa của lập trình viên",
      "D. Ý kiến cá nhân của khách hàng"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 2 (trang 40 & 41): SPC: • Dữ liệu lịch sử • Xu hướng • Ngưỡng kiểm soát (Upper Control Limit UCL, Lower Control Limit LCL).",
    "tip": "SPC = Dữ liệu lịch sử • Xu hướng • Ngưỡng kiểm soát (UCL, LCL)."
  },
  {
    "id": 49,
    "chapter": 2,
    "tag": "Khái niệm",
    "question": "Bài tập SPC trong slide: Số lỗi tuần 1–3 ổn định, tuần 4 tăng đột biến vượt ngưỡng. Ý nghĩa và hành động của PM là gì?",
    "options": [
      "A. Ý nghĩa: Quy trình có dấu hiệu mất kiểm soát (special cause). Hành động: Phân tích nguyên nhân, không vội sửa code, 'Sửa quy trình, không sửa triệu chứng'",
      "B. Ý nghĩa: Bình thường. Hành động: Bỏ qua",
      "C. Ý nghĩa: Tester làm việc quá chăm. Hành động: Yêu cầu ngừng test",
      "D. Ý nghĩa: Dev code giỏi hơn. Hành động: Thưởng tiền"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 2 (trang 43): 1. Ý nghĩa: Quy trình có dấu hiệu mất kiểm soát; Xuất hiện biến đổi đặc biệt (special cause). 2. Hành động: Phân tích nguyên nhân; Không vội sửa code; Sửa quy trình, không sửa triệu chứng.",
    "tip": "Lỗi tăng vọt: Quy trình mất kiểm soát (Special cause) • Hành động: Sửa quy trình, không sửa triệu chứng."
  },
  {
    "id": 50,
    "chapter": 3,
    "tag": "Khái niệm",
    "question": "VÌ SAO PHẢI LẬP KẾ HOẠCH DỰ ÁN?",
    "options": [
      "A. Phần mềm phức tạp, Nhiều rủi ro, Nguồn lực hạn chế",
      "B. Để hoàn thành thủ tục hành chính nộp phòng nhân sự",
      "C. Vì hợp đồng bắt buộc phải in ra giấy",
      "D. Để lập trình viên có thời gian nghỉ ngơi nhiều hơn"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 3 (trang 3): VÌ SAO PHẢI LẬP KẾ HOẠCH DỰ ÁN? • Phần mềm phức tạp • Nhiều rủi ro • Nguồn lực hạn chế.",
    "tip": "Vì sao lập kế hoạch: Phần mềm phức tạp • Nhiều rủi ro • Nguồn lực hạn chế."
  },
  {
    "id": 51,
    "chapter": 3,
    "tag": "Khái niệm",
    "question": "Mục đích của việc lập kế hoạch dự án là:",
    "options": [
      "A. Xác định công việc cần làm, Dự báo thời gian & chi phí, Phân bổ nguồn lực",
      "B. Chỉ để ký hợp đồng lấy tiền đặt cọc",
      "C. Cắt giảm tối đa các khâu kiểm thử",
      "D. Bắt nhân viên cam kết không xin nghỉ việc"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 3 (trang 4): MỤC ĐÍCH LẬP KẾ HOẠCH: • Xác định công việc cần làm • Dự báo thời gian & chi phí • Phân bổ nguồn lực.",
    "tip": "Mục đích lập kế hoạch: Xác định việc cần làm • Dự báo thời gian & chi phí • Phân bổ nguồn lực."
  },
  {
    "id": 52,
    "chapter": 3,
    "tag": "Khái niệm",
    "question": "Theo Pressman, mục đích lập kế hoạch dự án gồm những gì?",
    "options": [
      "A. Xác định phạm vi rõ ràng; Ước lượng chi phí & thời gian; Phân bổ nguồn lực; Nhận diện rủi ro; Làm cơ sở kiểm soát dự án",
      "B. Chỉ để báo cáo lãnh đạo cấp trên một lần duy nhất",
      "C. Để đảm bảo không bao giờ có bất kỳ rủi ro nào xảy ra",
      "D. Để không phải điều chỉnh tiến độ trong suốt quá trình làm"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 3 (trang 32): Theo Pressman, mục đích lập kế hoạch: • Xác định phạm vi rõ ràng • Ước lượng chi phí & thời gian • Phân bổ nguồn lực • Nhận diện rủi ro • Làm cơ sở kiểm soát dự án.",
    "tip": "Pressman: Xác định phạm vi • Ước lượng chi phí & thời gian • Phân bổ nguồn lực • Nhận diện rủi ro • Cơ sở kiểm soát."
  },
  {
    "id": 53,
    "chapter": 3,
    "tag": "Khái niệm",
    "question": "Điểm nhấn của Pressman về bản kế hoạch dự án là gì?",
    "options": [
      "A. 'A project plan provides a roadmap for the team' (Kế hoạch cung cấp bản đồ chỉ đường cho đội dự án)",
      "B. 'A project plan is fixed and never changes' (Kế hoạch là cố định không bao giờ đổi)",
      "C. 'A project plan is only for customers' (Kế hoạch chỉ dành cho khách hàng)",
      "D. 'A project plan replaces the project manager' (Kế hoạch thay thế vai trò PM)"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 3 (trang 32): '==> Điểm nhấn Pressman: A project plan provides a roadmap for the team.'",
    "tip": "Pressman: A project plan provides a roadmap for the team."
  },
  {
    "id": 54,
    "chapter": 3,
    "tag": "Khái niệm",
    "question": "Điều gì sẽ xảy ra nếu dự án KHÔNG CÓ KẾ HOẠCH?",
    "options": [
      "A. Không kiểm soát tiến độ, Không kiểm soát chi phí, Không đánh giá được sai lệch",
      "B. Dự án sẽ tự động hoàn thành sớm hơn",
      "C. Tiết kiệm được toàn bộ tiền quản lý",
      "D. Lập trình viên sẽ tự biết phải làm gì mà không cần giao việc"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 3 (trang 32): Nếu không có kế hoạch: • Không kiểm soát tiến độ • Không kiểm soát chi phí • Không đánh giá được sai lệch.",
    "tip": "Không có kế hoạch: Không kiểm soát tiến độ • Không kiểm soát chi phí • Không đánh giá được sai lệch."
  },
  {
    "id": 55,
    "chapter": 3,
    "tag": "Khái niệm",
    "question": "Kế hoạch dự án gồm những thành phần cốt lõi nào?",
    "options": [
      "A. Phạm vi, Ước lượng, Lịch trình, Rủi ro",
      "B. Tài chính, Ngân hàng, Cổ phiếu, Trái phiếu",
      "C. Hợp đồng, Hóa đơn, Biên lai, Phiếu chi",
      "D. Bàn ghế, Máy tính, Server, Thiết bị mạng"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 3 (trang 5): KẾ HOẠCH DỰ ÁN GỒM GÌ? • Phạm vi • Ước lượng • Lịch trình • Rủi ro.",
    "tip": "Kế hoạch gồm: Phạm vi • Ước lượng • Lịch trình • Rủi ro."
  },
  {
    "id": 56,
    "chapter": 3,
    "tag": "Khái niệm",
    "question": "Phạm vi phần mềm là gì?",
    "options": [
      "A. Những gì hệ thống sẽ làm và Những gì hệ thống không làm",
      "B. Toàn bộ mã nguồn viết bằng ngôn ngữ Java",
      "C. Giới hạn dung lượng ổ cứng cài đặt phần mềm",
      "D. Số lượng người dùng truy cập trang web"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 3 (trang 6): PHẠM VI PHẦN MỀM LÀ GÌ? • Những gì hệ thống sẽ làm • Những gì hệ thống không làm.",
    "tip": "Phạm vi = Những gì hệ thống sẽ làm • Những gì hệ thống không làm."
  },
  {
    "id": 57,
    "chapter": 3,
    "tag": "Khái niệm",
    "question": "Bản mô tả phạm vi phần mềm theo Pressman gồm những yếu tố nào?",
    "options": [
      "A. Chức năng (Functions), Hiệu năng (Performance), Ràng buộc (Constraints), Giao diện (Interfaces)",
      "B. Code, Test, Deploy, Bug",
      "C. Mua máy tính, Lắp mạng, Cài win, Đặt mật khẩu",
      "D. Lương, Thưởng, Nghỉ lễ, Bảo hiểm"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 3 (trang 33): Phạm vi gồm: • Chức năng (Functions) • Hiệu năng (Performance) • Ràng buộc (Constraints) • Giao diện (Interfaces).",
    "tip": "Phạm vi gồm: Chức năng (Functions) • Hiệu năng (Performance) • Ràng buộc (Constraints) • Giao diện (Interfaces)."
  },
  {
    "id": 58,
    "chapter": 3,
    "tag": "Khái niệm",
    "question": "Hậu quả gì xảy ra nếu phạm vi phần mềm không rõ ràng?",
    "options": [
      "A. Scope creep (phình to phạm vi), Ước lượng sai, Mâu thuẫn khách hàng",
      "B. Phần mềm chạy nhanh hơn bình thường",
      "C. Tiết kiệm được thời gian họp hành",
      "D. Dự án tự động được gia hạn thêm ngân sách"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 3 (trang 33): Nếu phạm vi không rõ: • Scope creep • Ước lượng sai • Mâu thuẫn khách hàng ==> Pressman: The scope must be bounded and clearly understood.",
    "tip": "Phạm vi không rõ: Scope creep • Ước lượng sai • Mâu thuẫn khách hàng."
  },
  {
    "id": 59,
    "chapter": 3,
    "tag": "Khái niệm",
    "question": "Phân loại nguồn lực dự án theo chuẩn Pressman gồm:",
    "options": [
      "A. Human Resources (Nhân lực), Reusable Software Resources (Phần mềm tái sử dụng), Environmental Resources (Môi trường)",
      "B. Tiền mặt, Vàng, Ngoại tệ",
      "C. Bàn ghế, Máy lạnh, Tủ lạnh",
      "D. Sơ cấp, Trung cấp, Cao cấp"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 3 (trang 10, 35): 1. Human Resources (Dev, Tester - quan trọng nhất) 2. Reusable Software Resources (Framework, thư viện) 3. Environmental Resources (Server, máy tính).",
    "tip": "Nguồn lực Pressman: Human Resources • Reusable Software Resources • Environmental Resources."
  },
  {
    "id": 60,
    "chapter": 3,
    "tag": "Khái niệm",
    "question": "Các vấn đề về nguồn lực thường gặp trong dự án là:",
    "options": [
      "A. Thiếu người, Thiếu kỹ năng, Phân bổ sai",
      "B. Máy tính quá mới không quen dùng",
      "C. Quá nhiều tiền không biết tiêu vào đâu",
      "D. Nhân viên không chịu nhận tiền thưởng"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 3 (trang 12): VẤN ĐỀ VỀ NGUỒN LỰC: • Thiếu người • Thiếu kỹ năng • Phân bổ sai.",
    "tip": "Vấn đề nguồn lực: Thiếu người • Thiếu kỹ năng • Phân bổ sai."
  },
  {
    "id": 61,
    "chapter": 3,
    "tag": "Khái niệm",
    "question": "Định lượng dự án phần mềm là gì và dựa trên cơ sở nào?",
    "options": [
      "A. Định lượng: Ước lượng kích thước, công sức, chi phí. Dựa trên: Kinh nghiệm, Dữ liệu lịch sử, Mô hình toán học",
      "B. Định lượng là cân đo trọng lượng của máy chủ phần cứng",
      "C. Định lượng là đếm số lượng người tải app trên Store",
      "D. Định lượng hoàn toàn dựa vào đoán mò may rủi"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 3 (trang 14 & 15): Định lượng là gì? • Ước lượng kích thước • Ước lượng công sức • Ước lượng chi phí. Định lượng dựa trên gì? • Kinh nghiệm • Dữ liệu lịch sử • Mô hình toán học.",
    "tip": "Định lượng = Kích thước, Công sức, Chi phí • Dựa trên: Kinh nghiệm, Dữ liệu lịch sử, Mô hình toán học."
  },
  {
    "id": 62,
    "chapter": 3,
    "tag": "Tính toán",
    "question": "Bài tập slide: Dự án dự kiến 20,000 LOC, năng suất 800 LOC / person-month, team 5 người. Effort và Thời gian hoàn thành là:",
    "options": [
      "A. Effort = 25 person-month, Thời gian = 5 tháng",
      "B. Effort = 20 person-month, Thời gian = 4 tháng",
      "C. Effort = 100 person-month, Thời gian = 20 tháng",
      "D. Effort = 50 person-month, Thời gian = 10 tháng"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 3 (trang 17 & 36): Effort = 20,000 / 800 = 25 person-month. Thời gian (Duration) = 25 / 5 = 5 tháng.",
    "tip": "Effort = 20,000 / 800 = 25 PM; Duration = 25 / 5 = 5 tháng."
  },
  {
    "id": 63,
    "chapter": 3,
    "tag": "Tính toán",
    "question": "Bài tập slide: Dự án có UFP = 200, giả sử 1 FP ≈ 50 LOC, năng suất 1,000 LOC/PM. Kích thước LOC và Effort là:",
    "options": [
      "A. LOC = 10,000 LOC, Effort = 10 person-month",
      "B. LOC = 5,000 LOC, Effort = 5 person-month",
      "C. LOC = 20,000 LOC, Effort = 20 person-month",
      "D. LOC = 10,000 LOC, Effort = 1 person-month"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 3 (trang 18 & 37): LOC = 200 x 50 = 10,000 LOC. Effort = 10,000 / 1000 = 10 person-month.",
    "tip": "LOC = 200 x 50 = 10,000; Effort = 10,000 / 1000 = 10 PM."
  },
  {
    "id": 64,
    "chapter": 3,
    "tag": "Khái niệm",
    "question": "Phân rã (Decomposition) là gì và Pressman có nhận định quan trọng nào?",
    "options": [
      "A. Phân rã là: Chia nhỏ dự án, Dễ ước lượng, Dễ quản lý ==> Pressman: 'Decomposition reduces uncertainty'",
      "B. Phân rã là chia tiền thưởng cho các thành viên",
      "C. Phân rã là xóa bỏ bớt mã nguồn cũ",
      "D. Phân rã là giải tán nhóm dự án sau khi hoàn thành"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 3 (trang 19 & 38): PHÂN RÃ LÀ GÌ? • Chia nhỏ dự án • Dễ ước lượng • Dễ quản lý ==> Pressman: Decomposition reduces uncertainty.",
    "tip": "Phân rã: Chia nhỏ dự án, Dễ ước lượng, Dễ quản lý • Pressman: Decomposition reduces uncertainty."
  },
  {
    "id": 65,
    "chapter": 3,
    "tag": "Khái niệm",
    "question": "Hai cách phân rã phần mềm là:",
    "options": [
      "A. Phân rã theo chức năng (Module, Feature) và Phân rã theo công việc (Phân tích, Thiết kế, Lập trình, Kiểm thử)",
      "B. Phân rã theo độ tuổi và theo giới tính",
      "C. Phân rã theo giá tiền và theo hợp đồng",
      "D. Phân rã theo ngày chẵn và ngày lẻ"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 3 (trang 20 & 21): • Phân rã theo chức năng: Module, Feature • Phân rã theo công việc: Phân tích, Thiết kế, Lập trình, Kiểm thử.",
    "tip": "Phân rã theo chức năng (Module, Feature) • Phân rã theo công việc (Phân tích, Thiết kế, Code, Test)."
  },
  {
    "id": 66,
    "chapter": 3,
    "tag": "Khái niệm",
    "question": "Công thức tính nỗ lực trong mô hình Basic COCOMO là:",
    "options": [
      "A. Effort = a × (KLOC)^b",
      "B. Effort = a × KLOC + b",
      "C. Effort = a / (KLOC)^b",
      "D. Effort = KLOC / (a × b)"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 3 (trang 28): Basic COCOMO: Effort = a × (KLOC)^b. Với Organic mode: a = 2.4, b = 1.05.",
    "tip": "Basic COCOMO: Effort = a × (KLOC)^b."
  },
  {
    "id": 67,
    "chapter": 3,
    "tag": "Khái niệm",
    "question": "Khi PM ước lượng 6 tháng nhưng mô hình COCOMO tính ra 10 tháng, cách xử lý theo slide bài giảng là:",
    "options": [
      "A. Không nên tin một nguồn duy nhất. Giải pháp: Dùng nhiều phương pháp, So sánh kết quả, Điều chỉnh theo kinh nghiệm tổ chức ==> Pressman: Estimation should be iterative",
      "B. Luôn luôn tin vào trực giác PM vì người quản lý hiểu dự án nhất",
      "C. Luôn luôn tin vào COCOMO và bỏ qua ý kiến của PM",
      "D. Hủy bỏ dự án ngay lập tức"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 3 (trang 40): Không nên tin một nguồn duy nhất. Giải pháp: • Dùng nhiều phương pháp • So sánh kết quả • Điều chỉnh theo kinh nghiệm tổ chức ==> Pressman: Estimation should be iterative.",
    "tip": "Mâu thuẫn ước lượng: Dùng nhiều phương pháp • So sánh kết quả • Pressman: Estimation should be iterative."
  },
  {
    "id": 68,
    "chapter": 4,
    "tag": "Khái niệm",
    "question": "Định nghĩa RỦI RO theo slide bài giảng là gì?",
    "options": [
      "A. Rủi ro = sự kiện có khả năng xảy ra trong tương lai, Có thể gây ảnh hưởng tiêu cực, Khác với 'vấn đề' (issue), Không chắc chắn",
      "B. Rủi ro là sự việc chắc chắn 100% sẽ xảy ra",
      "C. Rủi ro là cơ hội kiếm thêm lợi nhuận cho dự án",
      "D. Rủi ro chỉ là các lỗi code phát hiện trong kiểm thử"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 4 (trang 4 & 5): KHÁI NIỆM RỦI RO: • Rủi ro = sự kiện có khả năng xảy ra trong tương lai • Có thể gây ảnh hưởng tiêu cực • Khác với “vấn đề” (issue) • Không chắc chắn • Công thức: Risk = Probability × Impact.",
    "tip": "Rủi ro: Sự kiện có khả năng xảy ra trong tương lai • Ảnh hưởng tiêu cực • Khác Issue • Không chắc chắn."
  },
  {
    "id": 69,
    "chapter": 4,
    "tag": "Khái niệm",
    "question": "Ba thuộc tính cơ bản của rủi ro là:",
    "options": [
      "A. Không chắc chắn, Có xác suất xảy ra, Có hậu quả (thiệt hại)",
      "B. Chắc chắn xảy ra, Không gây hại, Dễ xử lý",
      "C. Đắt tiền, Cố định, Bất biến",
      "D. Tạm thời, Vĩnh viễn, Trung gian"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 4 (trang 6): THUỘC TÍNH RỦI RO: • Không chắc chắn • Có xác suất xảy ra • Có hậu quả (thiệt hại). Ví dụ: Dev nghỉ việc giữa dự án, Công nghệ mới không ổn định.",
    "tip": "3 thuộc tính rủi ro: Không chắc chắn • Có xác suất xảy ra • Có hậu quả (thiệt hại)."
  },
  {
    "id": 70,
    "chapter": 4,
    "tag": "Khái niệm",
    "question": "Bảng so sánh chuẩn giữa RỦI RO (Risk) và VẤN ĐỀ (Issue) trong slide:",
    "options": [
      "A. Risk: Chưa xảy ra, Có xác suất, Cần dự phòng; Issue: Đã xảy ra, 100% xảy ra, Cần xử lý",
      "B. Risk: Đã xảy ra; Issue: Chưa xảy ra",
      "C. Risk cần xử lý ngay, Issue cần dự phòng",
      "D. Cả hai đều có xác suất 100% xảy ra như nhau"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 4 (trang 7): Bảng RỦI RO & ISSUE: Risk (Chưa xảy ra, Có xác suất, Cần dự phòng) vs Issue (Đã xảy ra, 100% xảy ra, Cần xử lý).",
    "tip": "Risk = Chưa xảy ra, Có xác suất, Cần dự phòng • Issue = Đã xảy ra, 100% xảy ra, Cần xử lý."
  },
  {
    "id": 71,
    "chapter": 4,
    "tag": "Khái niệm",
    "question": "Công thức tính Mức độ phơi nhiễm rủi ro (Risk Exposure - RE) là:",
    "options": [
      "A. RE = Probability × Loss",
      "B. RE = Probability + Loss",
      "C. RE = Probability / Loss",
      "D. RE = Loss - Probability"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 4 (trang 8): RISK EXPOSURE (RE): RE = Probability × Loss. Ví dụ: P = 0.4, Loss = 50,000$ => RE = 20,000$.",
    "tip": "RE = Probability × Loss."
  },
  {
    "id": 72,
    "chapter": 4,
    "tag": "Khái niệm",
    "question": "VÌ SAO PHẦN MỀM RỦI RO CAO?",
    "options": [
      "A. Yêu cầu thay đổi, Sản phẩm vô hình, Phụ thuộc con người, Công nghệ thay đổi nhanh",
      "B. Do phần mềm không có hợp đồng pháp lý",
      "C. Do các công ty phần mềm không có bảo hiểm",
      "D. Do máy tính thường xuyên bị virus phá hủy"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 4 (trang 9): VÌ SAO PHẦN MỀM RỦI RO CAO? • Yêu cầu thay đổi • Sản phẩm vô hình • Phụ thuộc con người • Công nghệ thay đổi nhanh.",
    "tip": "Phần mềm rủi ro cao: Yêu cầu thay đổi • Sản phẩm vô hình • Phụ thuộc con người • Công nghệ thay đổi nhanh."
  },
  {
    "id": 73,
    "chapter": 4,
    "tag": "Khái niệm",
    "question": "Vai trò của quản lý rủi ro trong dự án là:",
    "options": [
      "A. Giảm bất ngờ, Tăng khả năng thành công, Cải thiện ra quyết định",
      "B. Giúp dự án loại bỏ hoàn toàn 100% rủi ro",
      "C. Tránh phải bồi thường tiền cho khách hàng",
      "D. Giảm số lượng nhân viên trong dự án"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 4 (trang 10): VAI TRÒ CỦA QUẢN LÝ RỦI RO: • Giảm bất ngờ • Tăng khả năng thành công • Cải thiện ra quyết định.",
    "tip": "Vai trò quản lý rủi ro: Giảm bất ngờ • Tăng khả năng thành công • Cải thiện ra quyết định."
  },
  {
    "id": 74,
    "chapter": 4,
    "tag": "Khái niệm",
    "question": "Ba nhóm rủi ro chính theo Pressman gồm những gì?",
    "options": [
      "A. Project Risks, Technical Risks, Business Risks",
      "B. High Risks, Medium Risks, Low Risks",
      "C. Financial Risks, Legal Risks, Marketing Risks",
      "D. Internal Risks, External Risks, Global Risks"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 4 (trang 11): BA NHÓM RỦI RO CHÍNH: • Project Risks • Technical Risks • Business Risks.",
    "tip": "3 nhóm rủi ro: Project Risks • Technical Risks • Business Risks."
  },
  {
    "id": 75,
    "chapter": 4,
    "tag": "Khái niệm",
    "question": "Nhóm Project Risks (Rủi ro dự án) gồm những ví dụ nào?",
    "options": [
      "A. Trễ tiến độ, Ước lượng sai, Thiếu nhân lực, Thay đổi phạm vi",
      "B. Công nghệ mới, Thiết kế chưa rõ, Tích hợp hệ thống",
      "C. Thị trường thay đổi, Khách hàng hủy dự án, Không sinh lợi",
      "D. Lạm phát, Khủng hoảng kinh tế toàn cầu"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 4 (trang 12): PROJECT RISKS: • Trễ tiến độ • Ước lượng sai • Thiếu nhân lực • Thay đổi phạm vi.",
    "tip": "Project Risks: Trễ tiến độ • Ước lượng sai • Thiếu nhân lực • Thay đổi phạm vi."
  },
  {
    "id": 76,
    "chapter": 4,
    "tag": "Khái niệm",
    "question": "Nhóm Technical Risks (Rủi ro kỹ thuật) gồm những ví dụ nào?",
    "options": [
      "A. Công nghệ mới, Thiết kế chưa rõ, Tích hợp hệ thống, Hiệu năng không đạt",
      "B. Trễ tiến độ, Thiếu nhân lực, Ước lượng sai",
      "C. Thị trường thay đổi, Khách hàng hủy dự án",
      "D. Giá cổ phiếu công ty sụt giảm"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 4 (trang 13): TECHNICAL RISKS: • Công nghệ mới • Thiết kế chưa rõ • Tích hợp hệ thống • Hiệu năng không đạt.",
    "tip": "Technical Risks: Công nghệ mới • Thiết kế chưa rõ • Tích hợp hệ thống • Hiệu năng không đạt."
  },
  {
    "id": 77,
    "chapter": 4,
    "tag": "Khái niệm",
    "question": "Nhóm Business Risks (Rủi ro kinh doanh) gồm những ví dụ nào?",
    "options": [
      "A. Thị trường thay đổi, Khách hàng hủy dự án, Không sinh lợi, Thay đổi chiến lược",
      "B. Code có nhiều bug, Sập máy chủ database",
      "C. Lập trình viên nghỉ ốm, Chậm tiến độ 2 ngày",
      "D. Quên sao lưu dữ liệu mã nguồn"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 4 (trang 14): BUSINESS RISKS: • Thị trường thay đổi • Khách hàng hủy dự án • Không sinh lợi • Thay đổi chiến lược.",
    "tip": "Business Risks: Thị trường thay đổi • Khách hàng hủy dự án • Không sinh lợi • Thay đổi chiến lược."
  },
  {
    "id": 78,
    "chapter": 4,
    "tag": "Khái niệm",
    "question": "Tại sao Business Risk được coi là nguy hiểm nhất?",
    "options": [
      "A. Vì dù sản phẩm có làm tốt về mặt kỹ thuật nhưng khách hàng hủy dự án hoặc thị trường không đón nhận thì toàn bộ giá trị dự án vẫn bằng 0",
      "B. Vì Business Risk chỉ xảy ra ở các công ty lớn",
      "C. Vì không thể dùng máy tính để đo Business Risk",
      "D. Vì Business Risk làm lập trình viên mất việc ngay lập tức"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 4 (trang 17): Business Risk nguy hiểm nhất vì nó trực tiếp hủy diệt mục đích kinh doanh của sản phẩm dù nhóm kỹ thuật hoàn thành xuất sắc 100%.",
    "tip": "Business Risk nguy hiểm nhất: Kỹ thuật tốt nhưng không bán được / khách hủy thì giá trị = 0."
  },
  {
    "id": 79,
    "chapter": 4,
    "tag": "Khái niệm",
    "question": "Các nguồn rủi ro phổ biến theo Pressman gồm:",
    "options": [
      "A. Size uncertainty, Customer characteristics, Process maturity, Staff experience",
      "B. Hardware, Software, Network, Cloud",
      "C. Junior, Middle, Senior, Lead",
      "D. Windows, Linux, macOS, Android"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 4 (trang 15): RỦI RO PHỔ BIẾN THEO PRESSMAN: • Size uncertainty • Customer characteristics • Process maturity • Staff experience.",
    "tip": "Pressman: Size uncertainty • Customer characteristics • Process maturity • Staff experience."
  },
  {
    "id": 80,
    "chapter": 4,
    "tag": "Khái niệm",
    "question": "Quy trình nhận diện và quản lý rủi ro gồm 4 bước tóm tắt là:",
    "options": [
      "A. Identify → Analyze → Plan → Monitor",
      "B. Plan → Code → Test → Deploy",
      "C. Start → Do → Check → Stop",
      "D. Buy → Use → Repair → Sell"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 4 (trang 18 & 42): TÓM TẮT QUY TRÌNH: Identify → Analyze → Plan → Monitor (Nhận diện → Phân tích → Lập kế hoạch → Theo dõi).",
    "tip": "Quy trình 4 bước: Identify → Analyze → Plan → Monitor."
  },
  {
    "id": 81,
    "chapter": 4,
    "tag": "Khái niệm",
    "question": "Các kỹ thuật xác định rủi ro trong slide gồm:",
    "options": [
      "A. Brainstorming, Checklist, Historical data, SWOT",
      "B. Google search, Bói bài, Phỏng vấn ngẫu nhiên",
      "C. Đọc báo, Xem tivi, Nghe đài",
      "D. Chạy thử phần mềm đến khi máy sập"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 4 (trang 19): XÁC ĐỊNH RỦI RO: • Brainstorming • Checklist • Historical data • SWOT.",
    "tip": "Kỹ thuật xác định: Brainstorming • Checklist • Historical data • SWOT."
  },
  {
    "id": 82,
    "chapter": 4,
    "tag": "Khái niệm",
    "question": "Nguyên tắc tiến hành Brainstorming trong nhận diện rủi ro là:",
    "options": [
      "A. Họp nhóm, Liệt kê tự do, Không phê phán",
      "B. Chỉ có PM nói, các thành viên khác ghi chép",
      "C. Phê bình gay gắt những ý kiến chưa hợp lý",
      "D. Bắt buộc mỗi người chỉ được nêu đúng 1 ý kiến"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 4 (trang 20): BRAINSTORMING: • Họp nhóm • Liệt kê tự do • Không phê phán.",
    "tip": "Brainstorming: Họp nhóm • Liệt kê tự do • Không phê phán."
  },
  {
    "id": 83,
    "chapter": 4,
    "tag": "Khái niệm",
    "question": "Danh sách rủi ro chuẩn trong Checklist gồm những mục nào?",
    "options": [
      "A. Scope change, Schedule slip, Technology risk, People risk",
      "B. CPU, RAM, Ổ cứng, Nguồn điện",
      "C. Frontend, Backend, Database, QA",
      "D. Khách hàng, Giám đốc, Kế toán, Bảo vệ"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 4 (trang 21): CHECKLIST - Danh sách rủi ro chuẩn: • Scope change • Schedule slip • Technology risk • People risk.",
    "tip": "Checklist: Scope change • Schedule slip • Technology risk • People risk."
  },
  {
    "id": 84,
    "chapter": 4,
    "tag": "Khái niệm",
    "question": "SWOT trong nhận diện rủi ro là viết tắt của:",
    "options": [
      "A. Strength, Weakness, Opportunity, Threat",
      "B. Software, Website, Online, Technology",
      "C. Schedule, Work, Organization, Task",
      "D. Simple, Wide, Open, True"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 4 (trang 23): SWOT TRONG NHẬN DIỆN RỦI RO: • Strength • Weakness • Opportunity • Threat.",
    "tip": "SWOT: Strength • Weakness • Opportunity • Threat."
  },
  {
    "id": 85,
    "chapter": 4,
    "tag": "Khái niệm",
    "question": "NGUYÊN TẮC SÀNG LỌC RỦI RO là:",
    "options": [
      "A. Ưu tiên RE cao; Không bỏ qua rủi ro hiếm nhưng thiệt hại lớn",
      "B. Chỉ tập trung vào rủi ro có xác suất 100%",
      "C. Bỏ qua tất cả rủi ro có mức thiệt hại dưới 1 tỷ đồng",
      "D. Chỉ xử lý rủi ro về mặt kỹ thuật, bỏ qua con người"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 4 (trang 32): NGUYÊN TẮC SÀNG LỌC: • Ưu tiên RE cao • Không bỏ qua rủi ro hiếm nhưng thiệt hại lớn.",
    "tip": "Nguyên tắc sàng lọc: Ưu tiên RE cao • Không bỏ qua rủi ro hiếm nhưng thiệt hại lớn."
  },
  {
    "id": 86,
    "chapter": 4,
    "tag": "Khái niệm",
    "question": "BỐN CHIẾN LƯỢC XỬ LÝ RỦI RO gồm những gì?",
    "options": [
      "A. Avoid (Tránh), Mitigate (Giảm thiểu), Transfer (Chuyển giao), Accept (Chấp nhận)",
      "B. Phớt lờ, Trốn chạy, Đổ lỗi, Chấp nhận",
      "C. Lập trình lại, Cài lại win, Thay máy mới, Mua license",
      "D. Xin lỗi, Bồi thường, Kiện tụng, Phá sản"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 4 (trang 34): CHIẾN LƯỢC XỬ LÝ RỦI RO: • Avoid • Mitigate • Transfer • Accept.",
    "tip": "4 chiến lược: Avoid • Mitigate • Transfer • Accept."
  },
  {
    "id": 87,
    "chapter": 4,
    "tag": "Khái niệm",
    "question": "Chiến lược Giảm thiểu rủi ro (Risk Mitigation) có mục đích là gì?",
    "options": [
      "A. Giảm xác suất hoặc giảm tác động",
      "B. Loại bỏ hoàn toàn 100% rủi ro không cho xuất hiện",
      "C. Đẩy toàn bộ trách nhiệm cho bên thứ ba gánh chịu",
      "D. Không làm gì cả và sống chung với rủi ro"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 4 (trang 35): RISK MITIGATION: • Giảm xác suất hoặc giảm tác động.",
    "tip": "Risk Mitigation = Giảm xác suất hoặc giảm tác động."
  },
  {
    "id": 88,
    "chapter": 4,
    "tag": "Khái niệm",
    "question": "Theo dõi rủi ro (Risk Monitoring) gồm các hoạt động:",
    "options": [
      "A. Theo dõi trigger, Cập nhật Risk Register",
      "B. Đi kiểm tra xem nhân viên có đang ngồi ở bàn làm việc không",
      "C. Kiểm tra tài khoản ngân hàng của khách hàng",
      "D. Đo nhiệt độ phòng máy chủ"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 4 (trang 36): RISK MONITORING: • Theo dõi trigger • Cập nhật Risk Register.",
    "tip": "Risk Monitoring: Theo dõi trigger • Cập nhật Risk Register."
  },
  {
    "id": 89,
    "chapter": 4,
    "tag": "Khái niệm",
    "question": "Theo dõi rủi ro theo vòng đời dự án diễn ra qua các giai đoạn nào?",
    "options": [
      "A. Lập kế hoạch → Thiết kế → Lập trình → Kiểm thử → Triển khai",
      "B. Bán hàng → Thu tiền → Chi tiêu → Báo cáo",
      "C. Tuyển dụng → Đào tạo → Làm việc → Sa thải",
      "D. Nhập hàng → Bày bán → Giảm giá → Thanh lý"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 4 (trang 41): THEO DÕI RỦI RO THEO VÒNG ĐỜI DỰ ÁN: • Lập kế hoạch • Thiết kế • Lập trình • Kiểm thử • Triển khai.",
    "tip": "Vòng đời theo dõi rủi ro: Lập kế hoạch → Thiết kế → Lập trình → Kiểm thử → Triển khai."
  },
  {
    "id": 90,
    "chapter": 4,
    "tag": "Tính toán",
    "question": "Bài tập slide: Risk A có P = 0.5, Loss = 10,000$; Risk B có P = 0.2, Loss = 50,000$. Rủi ro nào nguy hiểm hơn và bài học rút ra là gì?",
    "options": [
      "A. Risk B nguy hiểm hơn (RE = 10,000$ > 5,000$). Bài học: 'Không chỉ nhìn xác suất, phải nhìn tổng thiệt hại'",
      "B. Risk A nguy hiểm hơn vì P = 0.5 lớn hơn P = 0.2",
      "C. Hai rủi ro nguy hiểm như nhau",
      "D. Không thể so sánh vì hai rủi ro khác nhau"
    ],
    "answer": 0,
    "explanation": "Theo slide Chương 4 (trang 55): Risk A: 0.5 × 10,000 = 5,000; Risk B: 0.2 × 50,000 = 10,000 ==> Risk B nguy hiểm hơn ==> Không chỉ nhìn xác suất, phải nhìn tổng thiệt hại.",
    "tip": "Risk B nguy hiểm hơn: RE = 10,000$ > 5,000$ • Phải nhìn tổng thiệt hại, không chỉ nhìn xác suất!"
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
      "Định luật Brooks"
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
