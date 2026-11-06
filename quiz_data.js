// NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM VÀ TỰ LUẬN QUẢN LÝ DỰ ÁN PHẦN MỀM
// Tổng hợp chuẩn 100% slide bài giảng - GV: Vũ Duy Khương (Đại học Thăng Long)
// Phân loại: Single-Select (cân bằng A, B, C, D) & Multi-Select (nhiều đáp án kèm nút kiểm tra)

const MCQ_QUESTIONS = [
  {
    "id": 1,
    "chapter": 1,
    "tag": "Khái niệm",
    "type": "multiple",
    "question": "Theo định nghĩa chuẩn trong bài giảng, một DỰ ÁN được cấu thành từ những đặc trưng cơ bản nào sau đây? (Chọn tất cả các đáp án đúng)",
    "options": [
      "A. Có mục tiêu cụ thể",
      "B. Kế hoạch tài chính hàng năm của tổ chức",
      "C. Thời gian xác định (có bắt đầu và kết thúc)",
      "D. Nguồn lực giới hạn (ngân sách, nhân sự, thiết bị)",
      "E. Quy trình vận hành lặp đi lặp lại vô thời hạn",
      "F. Kết quả đầu ra rõ ràng"
    ],
    "answer": [
      0,
      2,
      3,
      5
    ],
    "explanation": "Theo slide bài giảng: Dự án = Tập hợp các hoạt động có: • Mục tiêu cụ thể • Thời gian xác định • Nguồn lực giới hạn • Kết quả đầu ra rõ ràng. Kế hoạch tài chính hàng năm hay quy trình lặp lại vô hạn là hoạt động vận hành thường nhật (Operations).",
    "tip": "Nhớ 4 gạch đầu dòng: Mục tiêu cụ thể - Thời gian xác định - Nguồn lực giới hạn - Kết quả rõ ràng."
  },
  {
    "id": 2,
    "chapter": 1,
    "tag": "Khái niệm",
    "type": "multiple",
    "question": "Đặc thù nổi bật của DỰ ÁN PHẦN MỀM so với các dự án xây dựng/sản xuất truyền thống gồm những ý nào sau đây? (Chọn tất cả các đáp án đúng)",
    "options": [
      "A. Sản phẩm vô hình (Intangible)",
      "B. Yêu cầu cố định tuyệt đối, không bao giờ thay đổi",
      "C. Yêu cầu thay đổi liên tục",
      "D. Phụ thuộc máy móc nhiều hơn con người",
      "E. Phụ thuộc con người nhiều hơn máy móc",
      "F. Rủi ro cao"
    ],
    "answer": [
      0,
      2,
      4,
      5
    ],
    "explanation": "Theo slide bài giảng, 4 đặc điểm dự án phần mềm là: • Sản phẩm vô hình • Yêu cầu thay đổi liên tục • Phụ thuộc con người nhiều hơn máy móc • Rủi ro cao.",
    "tip": "4 đặc điểm PM: Vô hình - Đổi liên tục - Phụ thuộc con người - Rủi ro cao."
  },
  {
    "id": 3,
    "chapter": 1,
    "tag": "Khái niệm",
    "type": "multiple",
    "question": "Theo Roger Pressman, 4 yếu tố cốt lõi (4P) trong Quản lý dự án phần mềm bao gồm những yếu tố nào? (Chọn tất cả các đáp án đúng)",
    "options": [
      "A. Con người (People)",
      "B. Lợi nhuận (Profit)",
      "C. Sản phẩm (Product)",
      "D. Quy trình (Process)",
      "E. Kế hoạch (Plan)",
      "F. Dự án (Project)"
    ],
    "answer": [
      0,
      2,
      3,
      5
    ],
    "explanation": "4P của Pressman bao gồm: People (Con người), Product (Sản phẩm), Process (Quy trình), Project (Dự án). Trong đó People là yếu tố quan trọng nhất.",
    "tip": "4P = People + Product + Process + Project (Không có Plan hay Profit)."
  },
  {
    "id": 4,
    "chapter": 1,
    "tag": "Khái niệm",
    "type": "multiple",
    "question": "Tam giác Quản lý dự án (Project Management Triangle) thể hiện sự cân bằng giữa 3 yếu tố ràng buộc cốt lõi nào? (Chọn tất cả các đáp án đúng)",
    "options": [
      "A. Thời gian (Time)",
      "B. Lợi nhuận kỳ vọng (Profit)",
      "C. Chi phí / Ngân sách (Cost)",
      "D. Uy tín thương hiệu (Reputation)",
      "E. Chất lượng / Phạm vi (Quality / Scope)"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Tam giác dự án là sự cân bằng giữa 3 yếu tố: Thời gian (Time), Chi phí (Cost), Chất lượng sản phẩm / Phạm vi (Quality/Scope). Khi một yếu tố thay đổi, ít nhất một yếu tố khác phải được điều chỉnh.",
    "tip": "Tam giác dự án = Thời gian + Chi phí + Chất lượng."
  },
  {
    "id": 5,
    "chapter": 1,
    "tag": "Khái niệm",
    "type": "multiple",
    "question": "Theo slide bài giảng, các NHIỆM VỤ CỐT LÕI trong Quản lý dự án gồm những nhiệm vụ nào sau đây? (Chọn tất cả các đáp án đúng)",
    "options": [
      "A. Kiểm soát (Controlling)",
      "B. Trực tiếp viết toàn bộ mã nguồn hệ thống",
      "C. Chỉ đạo (Directing)",
      "D. Cắt giảm lương nhân viên khi trễ hạn",
      "E. Tạo động lực (Motivation)",
      "F. Tổ chức (Organizing)"
    ],
    "answer": [
      0,
      2,
      4,
      5
    ],
    "explanation": "Theo slide bài giảng, các nhiệm vụ trong quản lý dự án là: • Kiểm soát (controlling) • Chỉ đạo (directing) • Tạo động lực (motivation) • Tổ chức (organizing).",
    "tip": "4 nhiệm vụ PM: Kiểm soát - Chỉ đạo - Tạo động lực - Tổ chức."
  },
  {
    "id": 6,
    "chapter": 1,
    "tag": "Khái niệm",
    "type": "multiple",
    "question": "Người Quản lý dự án (Project Manager) đảm nhiệm những VAI TRÒ cơ bản nào sau đây? (Chọn tất cả các đáp án đúng)",
    "options": [
      "A. Lập kế hoạch (Planning)",
      "B. Tổ chức và điều phối nguồn lực (Organizing & Coordinating)",
      "C. Thay mặt Ban giám đốc ký kết báo cáo tài chính toàn công ty",
      "D. Theo dõi và kiểm soát (Monitoring & Controlling)",
      "E. Lãnh đạo và tạo động lực cho đội ngũ (Leading)"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Quản lý dự án là quá trình: Lập kế hoạch, Tổ chức, Điều phối, Theo dõi & kiểm soát, Lãnh đạo nhằm đạt mục tiêu dự án trong các ràng buộc.",
    "tip": "PM vai trò: Planning, Organizing, Coordinating, Monitoring & Controlling."
  },
  {
    "id": 7,
    "chapter": 1,
    "tag": "Phương pháp",
    "type": "multiple",
    "question": "Kỹ thuật Phân rã cấu trúc công việc (WBS) mang lại những LỢI ÍCH quan trọng nào cho dự án? (Chọn tất cả các đáp án đúng)",
    "options": [
      "A. Giúp xác định rõ ràng và đầy đủ phạm vi công việc",
      "B. Đảm bảo phần mềm viết ra tuyệt đối không có lỗi",
      "C. Tạo cơ sở chính xác để ước lượng thời gian và chi phí",
      "D. Giúp phân công trách nhiệm minh bạch cho từng nhóm/cá nhân",
      "E. Tự động sinh mã nguồn chương trình"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": "WBS là kỹ thuật phân chia dự án thành các phần việc nhỏ hơn giúp: định rõ phạm vi, làm cơ sở ước lượng thời gian/chi phí, phân công trách nhiệm và theo dõi tiến độ.",
    "tip": "WBS lợi ích: Rõ phạm vi + Cơ sở ước lượng + Phân công trách nhiệm."
  },
  {
    "id": 8,
    "chapter": 1,
    "tag": "Phương pháp",
    "type": "multiple",
    "question": "Những nguyên tắc và đặc điểm nào sau đây là ĐÚNG khi xây dựng biểu đồ WBS chuẩn? (Chọn tất cả các đáp án đúng)",
    "options": [
      "A. Tuân thủ nguyên tắc 100% (bao quát toàn bộ và duy nhất phạm vi dự án)",
      "B. Số mức phân rã thông thường từ 3 đến 6 mức",
      "C. Phần tử nhỏ nhất ở mức đáy cùng được gọi là Gói công việc (Work Package)",
      "D. Các gói công việc ở các nhánh khác nhau được phép trùng lặp nội dung",
      "E. Cần phân rã càng sâu càng tốt, tối thiểu phải từ 12 đến 15 mức"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "WBS chuẩn: Tuân thủ quy tắc 100%, số mức thường từ 3 đến 6 mức, đáy cùng là Work Package, các nhánh không được chồng chéo/trùng lặp.",
    "tip": "WBS: Quy tắc 100%, 3-6 mức, đáy là Work Package."
  },
  {
    "id": 9,
    "chapter": 1,
    "tag": "Công cụ",
    "type": "multiple",
    "question": "Biểu đồ Gantt (Gantt Chart) có những ĐẶC ĐIỂM và CÔNG DỤNG nào sau đây trong theo dõi tiến độ? (Chọn tất cả các đáp án đúng)",
    "options": [
      "A. Thể hiện trực quan các công việc trên trục thời gian ngang",
      "B. Cho thấy các mốc thời gian bắt đầu và kết thúc của từng tác vụ",
      "C. Dùng để đo lường độ phức tạp thuật toán của mã nguồn",
      "D. Thể hiện mối quan hệ phụ thuộc trước - sau giữa các công việc",
      "E. Giúp xác định và theo dõi tỷ lệ phần trăm hoàn thành"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Biểu đồ Gantt là đồ thị thanh ngang biểu diễn lịch trình: thời gian bắt đầu/kết thúc, phụ thuộc giữa các công việc, theo dõi tiến độ hoàn thành.",
    "tip": "Gantt Chart: Biểu đồ thanh ngang, thời gian, sự phụ thuộc, tiến độ."
  },
  {
    "id": 10,
    "chapter": 1,
    "tag": "Khái niệm",
    "type": "multiple",
    "question": "Theo các khảo sát chuẩn công nghiệp, đâu là những NGUYÊN NHÂN HÀNG ĐẦU dẫn đến sự thất bại của dự án phần mềm? (Chọn tất cả các đáp án đúng)",
    "options": [
      "A. Yêu cầu của người dùng không hoàn chỉnh hoặc thay đổi liên tục",
      "B. Thiếu sự tham gia tích cực của người dùng (End-users)",
      "C. Áp dụng quy trình kiểm thử và nghiệm thu nghiêm ngặt",
      "D. Kỳ vọng phi thực tế và ước lượng thời gian quá ngắn",
      "E. Quản lý rủi ro yếu kém hoặc bỏ qua quản lý rủi ro"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Nguyên nhân thất bại hàng đầu: Yêu cầu mơ hồ/thay đổi liên tục, thiếu người dùng tham gia, ước lượng phi thực tế, thiếu quản trị rủi ro.",
    "tip": "Thất bại vì: Yêu cầu thay đổi + Thiếu người dùng + Ước lượng phi thực tế + Rủi ro."
  },
  {
    "id": 11,
    "chapter": 1,
    "tag": "Vận dụng",
    "type": "single",
    "question": "Khách hàng yêu cầu nhóm dự án phải bàn giao phần mềm sớm hơn 1 tháng so với hợp đồng nhưng kiên quyết không tăng ngân sách. Dựa trên Tam giác Quản lý dự án, phương án khả thi nhất của PM là gì?",
    "options": [
      "A. Đàm phán giảm bớt một số tính năng chưa cấp thiết để thu hẹp phạm vi",
      "B. Ép toàn bộ lập trình viên làm thêm giờ (OT) liên tục mà không trả thêm lương",
      "C. Bỏ qua hoàn toàn giai đoạn kiểm thử phần mềm để kịp bàn giao đúng hạn",
      "D. Vay thêm vốn bên ngoài để tự ý tuyển thêm nhân sự cấp cao vào dự án"
    ],
    "answer": 0,
    "explanation": "Theo tam giác dự án (Thời gian - Chi phí - Chất lượng/Phạm vi), khi Thời gian giảm mà Chi phí giữ nguyên, để bảo đảm Chất lượng thì bắt buộc phải đàm phán giảm Phạm vi (Scope).",
    "tip": "Thời gian giảm + Chi phí giữ nguyên => Phải giảm Phạm vi (Scope)."
  },
  {
    "id": 12,
    "chapter": 1,
    "tag": "Vận dụng",
    "type": "single",
    "question": "Một công ty liên tục ký hợp đồng bảo trì, vá lỗi nhỏ và hỗ trợ người dùng cho một cổng dịch vụ công suốt 8 năm qua mà không có ngày kết thúc. Hoạt động này được phân loại chính xác là gì?",
    "options": [
      "A. Dự án phát triển phần mềm dài hạn trọng điểm quốc gia",
      "B. Hoạt động vận hành thường nhật (Operations), không phải một dự án",
      "C. Dự án phần mềm quy mô lớn áp dụng mô hình xoắn ốc",
      "D. Dự án nghiên cứu và thử nghiệm công nghệ thông tin (R&D)"
    ],
    "answer": 1,
    "explanation": "Dự án mang tính tạm thời, bắt buộc phải có thời gian xác định (bắt đầu và kết thúc). Hoạt động hỗ trợ lặp đi lặp lại vô thời hạn là vận hành (Operations).",
    "tip": "Không có thời hạn kết thúc = Operations, không phải Project."
  },
  {
    "id": 13,
    "chapter": 1,
    "tag": "Khái niệm",
    "type": "single",
    "question": "Theo phân tích của Roger Pressman, trong 4 yếu tố cốt lõi (4P), yếu tố nào giữ vai trò quan trọng nhất quyết định trực tiếp đến sự thành bại của dự án?",
    "options": [
      "A. Yếu tố Sản phẩm (Product) vì tạo ra giá trị nghiệp vụ cho khách hàng",
      "B. Yếu tố Quy trình (Process) vì chuẩn hóa các bước thực hiện khoa học",
      "C. Yếu tố Con người (People) vì trực tiếp tạo ra và vận hành mọi sản phẩm",
      "D. Yếu tố Dự án (Project) vì điều phối tiến độ và ngân sách tổng thể"
    ],
    "answer": 2,
    "explanation": "Pressman khẳng định Con người (People) là yếu tố quan trọng nhất. Một đội ngũ có kỹ năng, đoàn kết và được tạo động lực tốt có thể vượt qua mọi hạn chế công nghệ.",
    "tip": "Quan trọng nhất trong 4P = People (Con người)."
  },
  {
    "id": 14,
    "chapter": 1,
    "tag": "Khái niệm",
    "type": "single",
    "question": "Nguyên tắc cốt lõi '100% Rule' trong xây dựng Cấu trúc phân rã công việc (WBS) được phát biểu chính xác như thế nào?",
    "options": [
      "A. Mọi thành viên trong đội dự án phải dành 100% thời gian làm việc tại công ty",
      "B. Dự án phải đạt 100% độ chính xác tuyệt đối không được phép có rủi ro",
      "C. Toàn bộ 100% yêu cầu của khách hàng phải hoàn thành ngay trong giai đoạn 1",
      "D. Tổng các công việc con ở mức dưới phải bao quát 100% công việc của mức cha"
    ],
    "answer": 3,
    "explanation": "Quy tắc 100%: WBS phải bao gồm 100% công việc được xác định bởi phạm vi dự án và không chứa công việc nào nằm ngoài phạm vi đó.",
    "tip": "Quy tắc 100%: Mức con cộng lại bằng đúng 100% mức cha."
  },
  {
    "id": 15,
    "chapter": 1,
    "tag": "Khái niệm",
    "type": "single",
    "question": "Khái niệm nguyên tắc W5HH nổi tiếng trong quản lý dự án phần mềm do chuyên gia nào sau đây đề xuất?",
    "options": [
      "A. Barry Boehm",
      "B. Frederick Brooks",
      "C. Roger Pressman",
      "D. Tom DeMarco"
    ],
    "answer": 0,
    "explanation": "Nguyên tắc W5HH (Why, What, When, Who, Where, How, How much) do Barry Boehm đề xuất nhằm hướng dẫn lập kế hoạch và quản lý dự án hiệu quả.",
    "tip": "W5HH => Barry Boehm."
  },
  {
    "id": 16,
    "chapter": 1,
    "tag": "Khái niệm",
    "type": "single",
    "question": "Trong cấu trúc WBS, thành phần ở mức phân rã thấp nhất mà tại đó chi phí và thời gian có thể ước lượng đáng tin cậy được gọi là gì?",
    "options": [
      "A. Milestone (Cột mốc dự án)",
      "B. Work Package (Gói công việc)",
      "C. Deliverable (Sản phẩm bàn giao)",
      "D. Project Phase (Giai đoạn dự án)"
    ],
    "answer": 1,
    "explanation": "Gói công việc (Work Package) là phần tử ở mức thấp nhất của WBS, có thể gán cho một nhóm/cá nhân, dễ dàng ước lượng chi phí và theo dõi tiến độ.",
    "tip": "Đáy cùng WBS = Work Package."
  },
  {
    "id": 17,
    "chapter": 1,
    "tag": "Vận dụng",
    "type": "single",
    "question": "Một dự án có một công việc A nằm trên Đường găng (Critical Path) bị chậm tiến độ 4 ngày. Tiến độ tổng thể của toàn dự án sẽ bị ảnh hưởng như thế nào?",
    "options": [
      "A. Không bị ảnh hưởng vì các công việc khác có thể làm bù lại thời gian",
      "B. Dự án chỉ bị trễ 2 ngày nhờ có thời gian dự trữ tự do (Free Float)",
      "C. Toàn bộ ngày bàn giao của dự án chắc chắn sẽ bị trễ ít nhất 4 ngày",
      "D. Chi phí dự án sẽ tự động tăng gấp đôi nhưng thời gian không đổi"
    ],
    "answer": 2,
    "explanation": "Đường găng (Critical Path) là chuỗi các công việc có thời gian dự trữ bằng 0 (Zero Float). Bất kỳ sự chậm trễ nào trên đường găng đều làm chậm tiến độ toàn dự án đúng bằng khoảng thời gian đó.",
    "tip": "Chậm trên đường găng => Toàn dự án chậm tương ứng."
  },
  {
    "id": 18,
    "chapter": 1,
    "tag": "Khái niệm",
    "type": "single",
    "question": "Đặc thù 'Sản phẩm vô hình' (Intangible) của phần mềm dẫn đến khó khăn lớn nhất nào sau đây cho người quản lý dự án?",
    "options": [
      "A. Không thể lưu trữ phần mềm trên các thiết bị vật lý thông thường",
      "B. Khách hàng không bao giờ chịu thanh toán chi phí theo từng giai đoạn",
      "C. Không thể áp dụng các ngôn ngữ lập trình hiện đại để xây dựng mã",
      "D. Khó nhìn thấy bằng mắt thường để đánh giá chính xác mức độ hoàn thiện"
    ],
    "answer": 3,
    "explanation": "Tính vô hình khiến tiến độ phần mềm không thể quan sát bằng mắt thường như xây dựng công trình, mà phải dựa trên kiểm thử chức năng và tài liệu nghiệm thu.",
    "tip": "Vô hình => Không nhìn thấy được tiến độ bằng mắt thường."
  },
  {
    "id": 19,
    "chapter": 1,
    "tag": "Khái niệm",
    "type": "single",
    "question": "Trong nguyên tắc W5HH của Barry Boehm, câu hỏi 'WHY is the system being developed?' tập trung giải quyết vấn đề gì?",
    "options": [
      "A. Xác định rõ lý do kinh doanh và mục tiêu chiến lược của dự án",
      "B. Lập danh sách công nghệ và ngôn ngữ lập trình sử dụng cho hệ thống",
      "C. Xác định lịch trình chi tiết và ngày bàn giao chính xác của dự án",
      "D. Phân bổ ngân sách tiền lương cho từng kỹ sư trong nhóm phát triển"
    ],
    "answer": 0,
    "explanation": "Câu hỏi 'Why' nhằm xác định tính hợp lý về mặt kinh doanh (Business reason) và mục tiêu cốt lõi tại sao phần mềm này cần được phát triển.",
    "tip": "Why = Mục tiêu và lý do kinh doanh của dự án."
  },
  {
    "id": 20,
    "chapter": 1,
    "tag": "Khái niệm",
    "type": "single",
    "question": "Khái niệm 'Milestone' (Cột mốc) trong quản lý tiến độ dự án phần mềm có đặc trưng kỹ thuật quan trọng nào sau đây?",
    "options": [
      "A. Là một công việc có thời lượng dài nhất trong toàn bộ chu kỳ dự án",
      "B. Là một sự kiện có thời lượng bằng 0, đánh dấu hoàn thành một mốc lớn",
      "C. Luôn đòi hỏi ít nhất 5 lập trình viên cùng thực hiện trong một tuần",
      "D. Là tài liệu thiết kế kiến trúc hệ thống trước khi bắt đầu viết mã"
    ],
    "answer": 1,
    "explanation": "Milestone là một điểm mốc thời gian (thời lượng = 0), đánh dấu sự hoàn thành của một giai đoạn quan trọng hoặc một sản phẩm bàn giao then chốt.",
    "tip": "Milestone = Sự kiện đánh dấu, thời lượng bằng 0."
  },
  {
    "id": 21,
    "chapter": 1,
    "tag": "Vận dụng",
    "type": "single",
    "question": "Khách hàng liên tục gửi các yêu cầu bổ sung nhỏ qua tin nhắn mà không bổ sung kinh phí hay gia hạn thời gian. Hiện tượng tiêu cực này được gọi là gì?",
    "options": [
      "A. Hiện tượng mạ vàng tính năng kỹ thuật (Gold Plating)",
      "B. Hiện tượng vỡ nợ dự án phần mềm (Project Bankruptcy)",
      "C. Hiện tượng phình phạm vi dự án mất kiểm soát (Scope Creep)",
      "D. Hiện tượng tái cấu trúc quy trình nghiệp vụ (Business Reengineering)"
    ],
    "answer": 2,
    "explanation": "Scope Creep là hiện tượng phạm vi dự án liên tục mở rộng không kiểm soát do các yêu cầu phát sinh không thông qua quy trình phê duyệt thay đổi chính thức.",
    "tip": "Yêu cầu tự do tăng dần không kiểm soát = Scope Creep."
  },
  {
    "id": 22,
    "chapter": 1,
    "tag": "Vận dụng",
    "type": "single",
    "question": "Trong ma trận phân công trách nhiệm RACI, chữ cái nào thể hiện người DUY NHẤT có thẩm quyền phê duyệt và chịu trách nhiệm giải trình cuối cùng?",
    "options": [
      "A. Chữ cái R (Responsible - Người trực tiếp làm công việc)",
      "B. Chữ cái C (Consulted - Người được hỏi ý kiến tư vấn)",
      "C. Chữ cái I (Informed - Người được thông báo kết quả)",
      "D. Chữ cái A (Accountable - Người chịu trách nhiệm giải trình)"
    ],
    "answer": 3,
    "explanation": "Trong RACI: R = Responsible (Người thực hiện), A = Accountable (Người chịu trách nhiệm giải trình duy nhất), C = Consulted (Tư vấn), I = Informed (Thông báo).",
    "tip": "RACI: A = Accountable (Chịu trách nhiệm cuối cùng, duy nhất 1 người)."
  },
  {
    "id": 23,
    "chapter": 1,
    "tag": "Khái niệm",
    "type": "single",
    "question": "Theo chuẩn quản lý dự án chuyên nghiệp, tỷ lệ thời gian mà một PM thường dành cho hoạt động GIAO TIẾP (Communication) là khoảng bao nhiêu?",
    "options": [
      "A. Khoảng 75% đến 90% tổng thời gian làm việc",
      "B. Khoảng 10% đến 20% tổng thời gian làm việc",
      "C. Khoảng 30% đến 40% tổng thời gian làm việc",
      "D. Khoảng 50% đến 60% tổng thời gian làm việc"
    ],
    "answer": 0,
    "explanation": "PM dành từ 75% đến 90% thời gian để giao tiếp với khách hàng, đội ngũ phát triển, nhà quản lý và các bên liên quan để bảo đảm thông tin thông suốt.",
    "tip": "PM dành 75% - 90% thời gian cho giao tiếp."
  },
  {
    "id": 24,
    "chapter": 1,
    "tag": "Khái niệm",
    "type": "single",
    "question": "Trong nguyên tắc W5HH, câu hỏi 'WHEN will it be done?' nhằm xác định nội dung trọng tâm nào sau đây?",
    "options": [
      "A. Xác định chi phí tài chính và tiền công theo từng giờ lập trình",
      "B. Lập lịch trình tổng thể và xác định các mốc bàn giao mấu chốt",
      "C. Đánh giá trình độ kỹ thuật của các thành viên trong nhóm dự án",
      "D. Thiết kế chi tiết cơ sở dữ liệu quan hệ và mô hình thực thể ERD"
    ],
    "answer": 1,
    "explanation": "Câu hỏi 'When' trong W5HH nhằm xây dựng lịch trình (Schedule) và xác định thời điểm hoàn thành các mốc quan trọng (Milestones).",
    "tip": "When = Lịch trình thời gian và mốc hoàn thành."
  },
  {
    "id": 25,
    "chapter": 1,
    "tag": "Khái niệm",
    "type": "single",
    "question": "Một dự án phần mềm được công nhận là THÀNH CÔNG TOÀN DIỆN khi đáp ứng đầy đủ điều kiện nào sau đây?",
    "options": [
      "A. Hoàn thành đúng hạn nhưng vượt 50% ngân sách cho phép ban đầu",
      "B. Viết được số dòng lệnh nhiều nhất trong lịch sử các dự án của công ty",
      "C. Đạt mục tiêu, đúng hạn, trong ngân sách và làm hài lòng các bên liên quan",
      "D. Không phát sinh bất kỳ yêu cầu thay đổi nào trong suốt chu kỳ dự án"
    ],
    "answer": 2,
    "explanation": "Thành công dự án toàn diện là đạt mục tiêu đã đề ra, hoàn thành trong thời gian và chi phí cho phép, bảo đảm chất lượng và làm thỏa mãn stakeholder.",
    "tip": "Thành công = Mục tiêu + Đúng hạn + Trong ngân sách + Thỏa mãn stakeholder."
  },
  {
    "id": 26,
    "chapter": 1,
    "tag": "Vận dụng",
    "type": "single",
    "question": "Khi hai lập trình viên kỳ cựu bất đồng sâu sắc về kiến trúc phần mềm, nhiệm vụ quản trị nào của PM cần phát huy để thống nhất định hướng?",
    "options": [
      "A. Nhiệm vụ Kiểm soát (Controlling)",
      "B. Nhiệm vụ Cắt giảm biên chế nhân sự",
      "C. Nhiệm vụ Báo cáo xử lý kỷ luật lên ban giám đốc",
      "D. Nhiệm vụ Chỉ đạo và Tạo động lực (Directing & Motivation)"
    ],
    "answer": 3,
    "explanation": "Nhiệm vụ Chỉ đạo (Directing) và Tạo động lực (Motivation) giúp PM định hướng đội ngũ, giải quyết xung đột xây dựng và duy trì tinh thần làm việc tích cực.",
    "tip": "Bất đồng kỹ thuật => PM phát huy vai trò Chỉ đạo & Tạo động lực."
  },
  {
    "id": 27,
    "chapter": 1,
    "tag": "Khái niệm",
    "type": "single",
    "question": "Vì sao Quản lý dự án thường được coi là sự kết hợp nhuần nhuyễn giữa 'KHOA HỌC' và 'NGHỆ THUẬT'?",
    "options": [
      "A. Khoa học về quy trình, công cụ chuẩn và Nghệ thuật lãnh đạo con người",
      "B. Khoa học về thuật toán máy tính và Nghệ thuật vẽ giao diện người dùng",
      "C. Khoa học về công cụ toán học và Nghệ thuật thuyết phục nhà đầu tư",
      "D. Khoa học về phần cứng máy chủ và Nghệ thuật viết tài liệu quảng cáo"
    ],
    "answer": 0,
    "explanation": "QLDA là Khoa học vì áp dụng quy trình, công cụ, số liệu chuẩn; là Nghệ thuật vì đòi hỏi kỹ năng mềm lãnh đạo, giao tiếp và tạo động lực cho con người.",
    "tip": "Khoa học (công cụ, quy trình) + Nghệ thuật (lãnh đạo con người)."
  },
  {
    "id": 28,
    "chapter": 1,
    "tag": "Vận dụng",
    "type": "single",
    "question": "Đối tượng nào sau đây KHÔNG PHẢI là một Bên liên quan (Stakeholder) trực tiếp của dự án phát triển cổng học tập trực tuyến cho trường đại học?",
    "options": [
      "A. Sinh viên và giảng viên trực tiếp sử dụng hệ thống học tập",
      "B. Một công dân hoàn toàn không có mối liên hệ nào với ngành giáo dục",
      "C. Phòng Đào tạo và Ban Giám hiệu nhà trường quản lý dữ liệu",
      "D. Đội ngũ kỹ sư phần mềm chịu trách nhiệm phát triển và bảo trì hệ thống"
    ],
    "answer": 1,
    "explanation": "Stakeholder là cá nhân hoặc tổ chức có quyền lợi, nghĩa vụ hoặc bị ảnh hưởng bởi dự án. Người không có bất kỳ liên hệ nào thì không phải stakeholder.",
    "tip": "Không liên quan, không bị ảnh hưởng => Không phải Stakeholder."
  },
  {
    "id": 29,
    "chapter": 2,
    "tag": "Khái niệm",
    "type": "multiple",
    "question": "Theo bài giảng, một SỐ LIỆU PHẦN MỀM TỐT (Good Metric) cần thỏa mãn những ĐẶC TÍNH cơ bản nào sau đây? (Chọn tất cả các đáp án đúng)",
    "options": [
      "A. Đơn giản, dễ hiểu và dễ tính toán",
      "B. Đo lường khách quan và có tính nhất quán cao",
      "C. Cần phức tạp và sử dụng công thức toán học cao cấp nhất",
      "D. Chi phí thu thập và phân tích hợp lý, không tốn kém",
      "E. Cung cấp thông tin có ý nghĩa hỗ trợ ra quyết định"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Đặc tính của số liệu tốt: Đơn giản dễ hiểu, Khách quan nhất quán, Chi phí thu thập hợp lý, Có tính ứng dụng cao hỗ trợ quyết định quản lý.",
    "tip": "Số liệu tốt: Đơn giản + Khách quan + Chi phí hợp lý + Có ý nghĩa hành động."
  },
  {
    "id": 30,
    "chapter": 2,
    "tag": "Khái niệm",
    "type": "multiple",
    "question": "Những số liệu nào sau đây được phân loại chính xác vào nhóm SỐ LIỆU QUY TRÌNH (Process Metrics)? (Chọn tất cả các đáp án đúng)",
    "options": [
      "A. Hiệu quả phát hiện lỗi trong quá trình Review tài liệu (DRE)",
      "B. Tốc độ sửa lỗi trung bình của quy trình kiểm thử",
      "C. Chi phí chất lượng (Cost of Quality - CoQ) của tổ chức",
      "D. Tổng số dòng mã nguồn (LOC) của một phần mềm cụ thể",
      "E. Mức độ tuân thủ quy trình chuẩn CMMI của các dự án"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Process Metrics đo lường đặc tính của quy trình phát triển nhằm cải tiến quy trình lâu dài. Tổng số dòng code của một sản phẩm là Product/Project metric.",
    "tip": "Process metrics: Đo lường quy trình để cải tiến tổ chức lâu dài."
  },
  {
    "id": 31,
    "chapter": 2,
    "tag": "Khái niệm",
    "type": "multiple",
    "question": "Những số liệu nào sau đây thuộc nhóm SỐ LIỆU DỰ ÁN (Project Metrics) phục vụ quản lý dự án hiện tại? (Chọn tất cả các đáp án đúng)",
    "options": [
      "A. Tiến độ thực tế so với kế hoạch mốc bàn giao",
      "B. Chi phí thực tế tiêu hao so với ngân sách dự kiến",
      "C. Năng suất làm việc trung bình của đội ngũ trong đợt bàn giao này",
      "D. Đạo luật bảo hộ quyền tác giả phần mềm của quốc gia",
      "E. Số lượng lỗi phát sinh theo từng module trong giai đoạn kiểm thử"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Project Metrics giúp theo dõi, đánh giá và kiểm soát tiến độ, chi phí, năng suất và chất lượng của chính dự án đang diễn ra.",
    "tip": "Project metrics: Tiến độ, Chi phí, Năng suất, Lỗi của dự án hiện tại."
  },
  {
    "id": 32,
    "chapter": 2,
    "tag": "Phương pháp",
    "type": "multiple",
    "question": "Đo lường quy mô bằng Điểm chức năng (Function Points - FP) có những ƯU ĐIỂM nổi trội nào so với đo bằng Số dòng lệnh (LOC)? (Chọn tất cả các đáp án đúng)",
    "options": [
      "A. Độc lập hoàn toàn với ngôn ngữ lập trình được sử dụng",
      "B. Có thể ước lượng sớm ngay từ khâu phân tích yêu cầu khi chưa có code",
      "C. Luôn tự động đếm được chính xác 100% bằng câu lệnh dòng lệnh",
      "D. Đánh giá quy mô dựa trên góc nhìn chức năng của người sử dụng",
      "E. Phù hợp tốt với các công nghệ và nền tảng lập trình hiện đại"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Ưu điểm của FP: Độc lập ngôn ngữ, đo từ góc nhìn người dùng, tính được từ giai đoạn yêu cầu. Nhược điểm là tính toán cần chuyên môn, không đếm tự động như LOC.",
    "tip": "Ưu điểm FP: Độc lập ngôn ngữ + Ước lượng sớm từ yêu cầu + Góc nhìn người dùng."
  },
  {
    "id": 33,
    "chapter": 2,
    "tag": "Phương pháp",
    "type": "multiple",
    "question": "Phương pháp đo lường quy mô dựa trên Số dòng mã nguồn (LOC) tồn tại những HẠN CHẾ và NHƯỢC ĐIỂM lớn nào? (Chọn tất cả các đáp án đúng)",
    "options": [
      "A. Phụ thuộc nặng nề vào ngôn ngữ lập trình được sử dụng",
      "B. Khó ước lượng chính xác ở đầu dự án khi chưa có mã nguồn",
      "C. Dễ dẫn đến hành vi tiêu cực: viết code dài dòng để tăng số dòng",
      "D. Không phản ánh được công sức dành cho phân tích, thiết kế và tài liệu",
      "E. Hoàn toàn không có ai trong ngành công nghiệp sử dụng nữa"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Nhược điểm LOC: Phụ thuộc ngôn ngữ, không đo được hoạt động phi lập trình, không khuyến khích tối ưu code, khó ước lượng sớm.",
    "tip": "Nhược điểm LOC: Phụ thuộc ngôn ngữ + Khó ước lượng sớm + Khuyến khích code dài."
  },
  {
    "id": 34,
    "chapter": 2,
    "tag": "Khái niệm",
    "type": "multiple",
    "question": "Theo phương pháp Function Points (FP), 5 THÀNH PHẦN CHỨC NĂNG cơ bản được sử dụng để tính toán kích thước phần mềm là gì? (Chọn tất cả các đáp án đúng)",
    "options": [
      "A. Dữ liệu đầu vào từ bên ngoài (External Inputs - EI)",
      "B. Dữ liệu đầu ra gửi ra bên ngoài (External Outputs - EO)",
      "C. Yêu cầu truy vấn tương tác từ bên ngoài (External Inquiries - EQ)",
      "D. Các tệp dữ liệu logic nội bộ (Internal Logical Files - ILF)",
      "E. Các tệp giao diện liên kết bên ngoài (External Interface Files - EIF)",
      "F. Dung lượng bộ nhớ RAM tiêu thụ của ứng dụng"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "5 thành phần FP: EI (Inputs), EO (Outputs), EQ (Inquiries), ILF (Internal Logical Files), EIF (External Interface Files).",
    "tip": "5 thành phần FP = EI + EO + EQ + ILF + EIF."
  },
  {
    "id": 35,
    "chapter": 2,
    "tag": "Công cụ",
    "type": "multiple",
    "question": "Biểu đồ kiểm soát quy trình thống kê (SPC Control Chart) bao gồm những ĐƯỜNG GIỚI HẠN VÀ THÀNH PHẦN CƠ BẢN nào? (Chọn tất cả các đáp án đúng)",
    "options": [
      "A. Đường trung bình của quy trình (Center Line / Mean)",
      "B. Giới hạn kiểm soát trên (Upper Control Limit - UCL)",
      "C. Giới hạn kiểm soát dưới (Lower Control Limit - LCL)",
      "D. Đường dự báo tăng trưởng doanh thu quý tiếp theo",
      "E. Các điểm dữ liệu đo lường thu thập tuần tự theo thời gian"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Biểu đồ SPC gồm: Đường trung bình (Mean), Giới hạn kiểm soát trên (UCL), Giới hạn kiểm soát dưới (LCL) và các điểm dữ liệu đo đạc thực tế.",
    "tip": "SPC Chart: Mean + UCL + LCL + Data points."
  },
  {
    "id": 36,
    "chapter": 2,
    "tag": "Khái niệm",
    "type": "single",
    "question": "Trong tháp giá trị đo lường phần mềm, trật tự nâng cao giá trị thông tin nào sau đây là ĐÚNG?",
    "options": [
      "A. Metric (Số đo) -> Measurement (Đo lường) -> Indicator (Chỉ báo)",
      "B. Indicator (Chỉ báo) -> Metric (Số đo) -> Measurement (Đo lường)",
      "C. Measurement (Đo lường) -> Metric (Số đo) -> Indicator (Chỉ báo)",
      "D. Metric (Số đo) -> Indicator (Chỉ báo) -> Measurement (Đo lường)"
    ],
    "answer": 2,
    "explanation": "Trật tự nâng cao giá trị: Measurement (hành động thu thập số liệu thô) -> Metric (chỉ số kết hợp phản ánh đặc tính) -> Indicator (chỉ báo hỗ trợ ra quyết định).",
    "tip": "Tháp đo lường: Measurement -> Metric -> Indicator."
  },
  {
    "id": 37,
    "chapter": 2,
    "tag": "Vận dụng",
    "type": "single",
    "question": "Kiểm thử phát hiện 120 lỗi, tính ra mật độ 1.2 lỗi/KLOC. PM so sánh với ngưỡng cho phép (< 2.0 lỗi/KLOC) và quyết định cho phép release phần mềm. Hành động kết luận này thuộc cấp độ nào?",
    "options": [
      "A. Cấp độ Measurement (Đo lường số liệu thô)",
      "B. Cấp độ Metric (Chỉ số đo lường trung gian)",
      "C. Cấp độ Raw Data (Thu thập dữ liệu kiểm thử)",
      "D. Cấp độ Indicator (Chỉ báo hỗ trợ ra quyết định)"
    ],
    "answer": 3,
    "explanation": "Khi số liệu được phân tích so sánh với mục tiêu để cung cấp cái nhìn sâu sắc và đưa ra quyết định hành động, nó đạt cấp độ Indicator (Chỉ báo).",
    "tip": "Dùng số liệu để đưa ra quyết định = Indicator."
  },
  {
    "id": 38,
    "chapter": 2,
    "tag": "Vận dụng",
    "type": "single",
    "question": "Lập trình viên A viết 500 dòng code Python, Lập trình viên B viết 2000 dòng code Assembly để cùng hoàn thành chức năng như nhau. Nhận định nào sau đây là CHUẨN XÁC?",
    "options": [
      "A. Năng suất theo LOC cao hơn chỉ do ngôn ngữ bậc thấp tốn nhiều dòng mã hơn",
      "B. Lập trình viên B chắc chắn có năng suất lao động thực tế cao gấp 4 lần A",
      "C. Lập trình viên A lười biếng hơn vì không chịu viết nhiều dòng code như B",
      "D. Số dòng lệnh LOC hoàn toàn không thể dùng để so sánh hai dự án cùng ngôn ngữ"
    ],
    "answer": 0,
    "explanation": "LOC phụ thuộc vào ngôn ngữ lập trình. Ngôn ngữ bậc thấp (như Assembly) tốn nhiều dòng code cho cùng một chức năng, nên số LOC cao không đồng nghĩa năng suất cao hơn.",
    "tip": "Ngôn ngữ bậc thấp nhiều LOC nhưng không có nghĩa năng suất cao hơn."
  },
  {
    "id": 39,
    "chapter": 2,
    "tag": "Tính toán",
    "type": "single",
    "question": "Một dự án có tổng quy mô là 30.000 dòng lệnh (30 KLOC), tổng công sức thực tế tiêu hao là 6 người-tháng (Person-Months). NĂNG SUẤT trung bình của nhóm là bao nhiêu?",
    "options": [
      "A. 3.0 KLOC / Person-Month",
      "B. 5.0 KLOC / Person-Month",
      "C. 4.0 KLOC / Person-Month",
      "D. 6.0 KLOC / Person-Month"
    ],
    "answer": 1,
    "explanation": "Năng suất = Kích thước / Công sức = 30 KLOC / 6 PM = 5 KLOC/PM (tương đương 5.000 LOC/người-tháng).",
    "tip": "Productivity = KLOC / Effort = 30 / 6 = 5 KLOC/PM."
  },
  {
    "id": 40,
    "chapter": 2,
    "tag": "Tính toán",
    "type": "single",
    "question": "Một phần mềm có kích thước 40 KLOC. Trong toàn bộ quá trình kiểm thử, nhóm QA đã ghi nhận tổng cộng 48 lỗi. MẬT ĐỘ LỖI (Defect Density) của phần mềm này là bao nhiêu?",
    "options": [
      "A. 0.83 lỗi / KLOC",
      "B. 1.50 lỗi / KLOC",
      "C. 1.20 lỗi / KLOC",
      "D. 2.40 lỗi / KLOC"
    ],
    "answer": 2,
    "explanation": "Mật độ lỗi (Defect Density) = Tổng số lỗi / Kích thước KLOC = 48 / 40 = 1.2 lỗi/KLOC.",
    "tip": "Defect Density = Defects / KLOC = 48 / 40 = 1.2."
  },
  {
    "id": 41,
    "chapter": 2,
    "tag": "Vận dụng",
    "type": "single",
    "question": "Trên biểu đồ kiểm soát SPC, một điểm số liệu về tỷ lệ lỗi của sprint vừa qua bất ngờ vọt lên NẰM PHÍA TRÊN đường giới hạn kiểm soát trên (UCL). Hiện tượng này chỉ báo điều gì?",
    "options": [
      "A. Quy trình đang hoạt động với độ ổn định rất cao và tối ưu",
      "B. Quy trình kiểm thử đang phát hiện được ít lỗi hơn bình thường",
      "C. Dự án đã hoàn thành vượt mức tiến độ và ngân sách được giao",
      "D. Quy trình đang mất kiểm soát (Out of Control), cần điều tra nguyên nhân đặc biệt"
    ],
    "answer": 3,
    "explanation": "Khi dữ liệu vượt ra ngoài giới hạn kiểm soát (trên UCL hoặc dưới LCL), quy trình được coi là mất kiểm soát (Out of Control), nguyên nhân đặc biệt cần được điều tra và xử lý.",
    "tip": "Vượt ra ngoài UCL/LCL => Quy trình mất kiểm soát (Out of Control)."
  },
  {
    "id": 42,
    "chapter": 2,
    "tag": "Khái niệm",
    "type": "single",
    "question": "Mục đích tối cao của việc thu thập và phân tích các SỐ LIỆU DỰ ÁN (Project Metrics) là gì?",
    "options": [
      "A. Theo dõi tiến độ, kiểm soát chi phí và điều chỉnh kịp thời các sai lệch",
      "B. Lập báo cáo thành tích để xin thêm vốn đầu tư mạo hiểm",
      "C. Thay thế hoàn toàn người quản lý dự án trong việc đưa ra quyết định",
      "D. Công khai toàn bộ mã nguồn của công ty ra cộng đồng quốc tế"
    ],
    "answer": 0,
    "explanation": "Project Metrics giúp theo dõi tiến độ, phát hiện sớm các sai lệch so với kế hoạch về chi phí, chất lượng, thời gian để PM kịp thời điều chỉnh.",
    "tip": "Project metrics: Theo dõi và điều chỉnh dự án hiện tại."
  },
  {
    "id": 43,
    "chapter": 2,
    "tag": "Khái niệm",
    "type": "single",
    "question": "Mục đích cốt lõi dài hạn của việc thu thập các SỐ LIỆU QUY TRÌNH (Process Metrics) trong tổ chức là gì?",
    "options": [
      "A. Đánh giá chất lượng của một đoạn code cụ thể trong ngày",
      "B. Cải tiến liên tục năng lực và hiệu quả của quy trình phần mềm cho tổ chức",
      "C. Trừ điểm thưởng của các kỹ sư kiểm thử nếu phát hiện ít lỗi",
      "D. Cung cấp dữ liệu cho phòng nhân sự tính tiền lương theo giờ"
    ],
    "answer": 1,
    "explanation": "Process Metrics được thu thập xuyên suốt nhiều dự án nhằm đánh giá điểm mạnh/yếu của quy trình, từ đó cải tiến liên tục năng lực của tổ chức.",
    "tip": "Process metrics: Cải tiến liên tục quy trình dài hạn cho tổ chức."
  },
  {
    "id": 44,
    "chapter": 2,
    "tag": "Vận dụng",
    "type": "single",
    "question": "Nếu công ty áp dụng chính sách thưởng tiền cho lập trình viên dựa trên số lượng dòng code (LOC) viết được, hậu quả tiêu cực nào sau đây RẤT DỄ XẢY RA?",
    "options": [
      "A. Lập trình viên sẽ viết code cực kỳ ngắn gọn, tối ưu thuật toán",
      "B. Không ai thèm viết mã nguồn nữa vì tiền thưởng quá thấp",
      "C. Lập trình viên cố tình viết code rườm rà, lặp lại để tăng số dòng nhận thưởng",
      "D. Toàn bộ mã nguồn sẽ tự động chuyển đổi sang ngôn ngữ Assembly"
    ],
    "answer": 2,
    "explanation": "Thưởng theo LOC tạo động cơ tiêu cực (Perverse Incentive): lập trình viên viết code dài dòng, tránh tái sử dụng thư viện, copy-paste để tăng số dòng mã.",
    "tip": "Thưởng theo LOC => Viết code dài dòng, phình mã nguồn để lấy thưởng."
  },
  {
    "id": 45,
    "chapter": 2,
    "tag": "Khái niệm",
    "type": "single",
    "question": "Đặc tính nào của số liệu đảm bảo rằng hai người khác nhau khi đo đạc trên cùng một phần mềm thì thu được kết quả giống nhau?",
    "options": [
      "A. Tính trừu tượng (Abstract)",
      "B. Tính chủ quan (Subjective)",
      "C. Tính bảo mật (Confidential)",
      "D. Tính khách quan và nhất quán (Objective & Consistent)"
    ],
    "answer": 3,
    "explanation": "Số liệu tốt phải có tính Khách quan và Nhất quán, loại bỏ yếu tố cảm tính để người đo khác nhau trong điều kiện như nhau đều cho kết quả tương đương.",
    "tip": "Hai người đo ra cùng kết quả = Tính khách quan và nhất quán."
  },
  {
    "id": 46,
    "chapter": 2,
    "tag": "Tính toán",
    "type": "single",
    "question": "Trong giai đoạn kiểm thử nội bộ phát hiện 90 lỗi. Sau khi bàn giao cho khách hàng phát hiện thêm 10 lỗi nữa. Hiệu quả loại bỏ lỗi (Defect Removal Efficiency - DRE) là bao nhiêu?",
    "options": [
      "A. 90%",
      "B. 10%",
      "C. 80%",
      "D. 100%"
    ],
    "answer": 0,
    "explanation": "DRE = E / (E + D) = 90 / (90 + 10) = 90 / 100 = 90%. (Trong đó E là lỗi nội bộ, D là lỗi khách hàng phát hiện sau bàn giao).",
    "tip": "DRE = E / (E + D) = 90 / (90 + 10) = 90%."
  },
  {
    "id": 47,
    "chapter": 2,
    "tag": "Khái niệm",
    "type": "single",
    "question": "Một số liệu đo lường phần mềm chỉ thực sự mang lại GIÁ TRỊ THỰC TẾ khi nó thỏa mãn điều kiện nào sau đây?",
    "options": [
      "A. Được tính toán bằng thuật toán học máy phức tạp nhất",
      "B. Giúp nhà quản lý đưa ra quyết định can thiệp hoặc cải tiến đúng đắn",
      "C. Được xuất bản trong các bài báo khoa học quốc tế uy tín",
      "D. Luôn giữ nguyên một giá trị cố định không bao giờ biến động"
    ],
    "answer": 1,
    "explanation": "Tom DeMarco từng nói 'Đo lường mà không dẫn đến hành động là vô nghĩa'. Số liệu chỉ có giá trị khi nó cung cấp thông tin để PM đưa ra quyết định đúng.",
    "tip": "Số liệu có giá trị = Giúp đưa ra quyết định hành động đúng đắn."
  },
  {
    "id": 48,
    "chapter": 2,
    "tag": "Vận dụng",
    "type": "single",
    "question": "Khi đang ở giai đoạn phân tích yêu cầu sơ bộ (chưa viết một dòng code nào), kỹ thuật đo lường quy mô nào sau đây là KHẢ THI NHẤT?",
    "options": [
      "A. Đo đếm số dòng mã nguồn (LOC)",
      "B. Đếm số lượng tệp nhị phân (.exe) tạo ra",
      "C. Đo lường theo Điểm chức năng (Function Points - FP)",
      "D. Đo dung lượng tệp cơ sở dữ liệu sau 5 năm vận hành"
    ],
    "answer": 2,
    "explanation": "Function Points (FP) dựa trên các yêu cầu chức năng bên ngoài (đầu vào, đầu ra, tệp dữ liệu...), cho phép ước lượng quy mô ngay từ khâu đặc tả yêu cầu khi chưa có mã nguồn.",
    "tip": "Chưa có code, đầu dự án => Dùng Function Points (FP)."
  },
  {
    "id": 49,
    "chapter": 2,
    "tag": "Khái niệm",
    "type": "single",
    "question": "Trong biểu đồ kiểm soát SPC chuẩn, các giới hạn kiểm soát trên (UCL) và dưới (LCL) thường được thiết lập cách đường trung bình (Mean) một khoảng là:",
    "options": [
      "A. Đúng bằng 1 lần độ lệch chuẩn (± 1 sigma)",
      "B. Đúng bằng 2 lần độ lệch chuẩn (± 2 sigma)",
      "C. Đúng bằng 6 lần độ lệch chuẩn (± 6 sigma)",
      "D. Đúng bằng 3 lần độ lệch chuẩn (± 3 sigma)"
    ],
    "answer": 3,
    "explanation": "Theo lý thuyết kiểm soát quy trình thống kê SPC của Shewhart, giới hạn kiểm soát UCL và LCL được đặt tại khoảng cách 3 độ lệch chuẩn (± 3σ) so với đường trung bình.",
    "tip": "SPC chuẩn: UCL và LCL đặt tại ± 3 sigma."
  },
  {
    "id": 50,
    "chapter": 3,
    "tag": "Khái niệm",
    "type": "multiple",
    "question": "Theo bài giảng slide, VÌ SAO PHẢI LẬP KẾ HOẠCH DỰ ÁN? (Chọn tất cả các đáp án đúng - đúng theo từng gạch đầu dòng slide)",
    "options": [
      "A. Phần mềm phức tạp",
      "B. Đảm bảo phần mềm không cần kiểm thử vẫn chạy đúng",
      "C. Nhiều rủi ro",
      "D. Thay thế hoàn toàn vai trò của lập trình viên",
      "E. Nguồn lực hạn chế",
      "F. Khách hàng không cần tham gia nghiệm thu"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Theo đúng gạch đầu dòng slide bài giảng: VÌ SAO PHẢI LẬP KẾ HOẠCH DỰ ÁN? • Phần mềm phức tạp • Nhiều rủi ro • Nguồn lực hạn chế.",
    "tip": "3 lý do lập kế hoạch: Phần mềm phức tạp + Nhiều rủi ro + Nguồn lực hạn chế."
  },
  {
    "id": 51,
    "chapter": 3,
    "tag": "Khái niệm",
    "type": "multiple",
    "question": "Theo Roger Pressman, 3 NGUỒN LỰC DỰ ÁN cơ bản cần xác định khi lập kế hoạch là những nguồn lực nào? (Chọn tất cả các đáp án đúng)",
    "options": [
      "A. Nguồn lực Con người (Human Resources / People)",
      "B. Nguồn lực Vốn đầu tư mạo hiểm từ ngân hàng",
      "C. Thành phần phần mềm có thể tái sử dụng (Reusable Software Components)",
      "D. Bằng sáng chế độc quyền vô thời hạn",
      "E. Môi trường phát triển: phần cứng, mạng, công cụ (Environmental Resources)"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Pressman xác định 3 nguồn lực: 1. Con người (People) 2. Thành phần phần mềm tái sử dụng (Reusable components) 3. Môi trường phát triển (Environment).",
    "tip": "3 nguồn lực Pressman: Con người + Thành phần tái sử dụng + Môi trường."
  },
  {
    "id": 52,
    "chapter": 3,
    "tag": "Khái niệm",
    "type": "multiple",
    "question": "Các loại THÀNH PHẦN PHẦN MỀM TÁI SỬ DỤNG được Pressman phân loại bao gồm những nhóm nào sau đây? (Chọn tất cả các đáp án đúng)",
    "options": [
      "A. Thành phần có sẵn thương mại đóng gói (Off-the-shelf components - COTS)",
      "B. Thành phần có trải nghiệm đầy đủ (Full-experience components)",
      "C. Thành phần có trải nghiệm một phần (Partial-experience components)",
      "D. Thành phần mới hoàn toàn phải xây dựng (New components)",
      "E. Các đoạn mã nguồn vi phạm bản quyền trôi nổi trên mạng"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "4 loại thành phần tái sử dụng theo Pressman: Off-the-shelf (COTS), Full-experience, Partial-experience, và New components.",
    "tip": "4 loại component: Off-the-shelf (COTS) + Full-exp + Partial-exp + New."
  },
  {
    "id": 53,
    "chapter": 3,
    "tag": "Phương pháp",
    "type": "multiple",
    "question": "Hai KỸ THUẬT PHÂN RÃ (Decomposition Techniques) cơ bản thường được áp dụng khi lập kế hoạch dự án là gì? (Chọn tất cả các đáp án đúng)",
    "options": [
      "A. Phân rã theo các chức năng bài toán cần giải quyết (Decomposition by Functions)",
      "B. Phân rã theo quy trình thực hiện các tác vụ công việc (Decomposition by Process Tasks)",
      "C. Phân rã theo mức lương thưởng hàng tháng của từng nhân sự",
      "D. Phân rã theo các văn phòng địa lý của khách hàng"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Lập kế hoạch phân rã theo 2 cách: Phân rã theo chức năng sản phẩm (Functions) và Phân rã theo quy trình các bước công việc (Process tasks).",
    "tip": "2 kỹ thuật phân rã: Phân rã Chức năng (Functions) & Phân rã Quy trình (Process)."
  },
  {
    "id": 54,
    "chapter": 3,
    "tag": "Khái niệm",
    "type": "multiple",
    "question": "Những NGUYÊN NHÂN phổ biến nào sau đây dẫn đến hiện tượng Phình phạm vi (Scope Creep) làm vỡ kế hoạch dự án? (Chọn tất cả các đáp án đúng)",
    "options": [
      "A. Yêu cầu ban đầu của khách hàng mơ hồ, không được làm rõ",
      "B. Khách hàng liên tục đòi thêm tính năng nhỏ không qua phê duyệt chính thức",
      "C. Đội ngũ tự ý 'mạ vàng' (Gold Plating) thêm tính năng kỹ thuật mà khách không cần",
      "D. Áp dụng quy trình kiểm soát thay đổi (Change Control) quá chặt chẽ",
      "E. Thiếu sự quản lý và theo dõi đường cơ sở phạm vi (Scope Baseline)"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Scope Creep xuất phát từ: Yêu cầu mơ hồ ban đầu, chấp nhận thay đổi tùy tiện không qua quy trình, tự ý thêm tính năng không cần thiết (Gold Plating), thiếu baseline.",
    "tip": "Nguyên nhân Scope Creep: Yêu cầu mơ hồ + Đổi tùy tiện + Gold Plating + Thiếu baseline."
  },
  {
    "id": 55,
    "chapter": 3,
    "tag": "Khái niệm",
    "type": "multiple",
    "question": "Mô hình ước lượng Basic COCOMO của Barry Boehm phân loại dự án phần mềm thành 3 CHẾ ĐỘ (Modes) nào? (Chọn tất cả các đáp án đúng)",
    "options": [
      "A. Chế độ Dự án đơn giản, quen thuộc (Organic Mode)",
      "B. Chế độ Dự án quy mô vừa, độ phức tạp trung bình (Semi-detached Mode)",
      "C. Chế độ Dự án nhúng, ràng buộc phần cứng khắt khe (Embedded Mode)",
      "D. Chế độ Dự án mã nguồn mở toàn cầu (Open Source Mode)",
      "E. Chế độ Dự án điện toán đám mây phân tán (Cloud Distributed Mode)"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Basic COCOMO chia làm 3 chế độ: Organic (đơn giản, đội ngũ nhỏ quen thuộc), Semi-detached (vừa phải, hỗn hợp kinh nghiệm), Embedded (nhúng, ràng buộc khắt khe).",
    "tip": "3 chế độ COCOMO = Organic + Semi-detached + Embedded."
  },
  {
    "id": 56,
    "chapter": 3,
    "tag": "Khái niệm",
    "type": "single",
    "question": "Theo Slide bài giảng Chương 3 (Slide 10), nguồn lực của dự án phần mềm được phân loại thành những yếu tố nào?",
    "options": [
      "A. Nhân lực, Phần cứng, Phần mềm, Thời gian",
      "B. Tiền vốn, Mặt bằng văn phòng, Cổ phiếu, Trái phiếu",
      "C. Khách hàng, Giám đốc, Kế toán, Thủ kho",
      "D. Mã nguồn mở, Mã nguồn đóng, Bản quyền, Bằng sáng chế"
    ],
    "answer": 0,
    "explanation": "Theo Slide 10 Chương 3, Phân loại nguồn lực gồm: Nhân lực, Phần cứng, Phần mềm, Thời gian.",
    "tip": "Slide 10: Nguồn lực gồm Nhân lực, Phần cứng, Phần mềm, Thời gian."
  },
  {
    "id": 57,
    "chapter": 3,
    "tag": "Khái niệm",
    "type": "single",
    "question": "Công thức toán học chuẩn để tính Công sức (Effort) theo mô hình ước lượng Basic COCOMO là gì?",
    "options": [
      "A. Effort = a + b * (KLOC)",
      "B. Effort = a * (KLOC)^b",
      "C. Effort = (a * KLOC) / b",
      "D. Effort = a * b * (KLOC)"
    ],
    "answer": 1,
    "explanation": "Công thức Basic COCOMO: Effort = a * (KLOC)^b (Đơn vị tính là Person-Months / Người-tháng, trong đó a và b là các hệ số phụ thuộc chế độ dự án).",
    "tip": "Basic COCOMO: Effort = a * (KLOC)^b."
  },
  {
    "id": 58,
    "chapter": 3,
    "tag": "Tính toán",
    "type": "single",
    "question": "Dự án chế độ Organic có hệ số a = 2.4, b = 1.05. Quy mô ước tính là KLOC = 10. Giá trị công sức Effort ước tính xấp xỉ bằng bao nhiêu người-tháng?",
    "options": [
      "A. 15.6 Person-Months",
      "B. 42.1 Person-Months",
      "C. 26.9 Person-Months",
      "D. 55.4 Person-Months"
    ],
    "answer": 2,
    "explanation": "Effort = 2.4 * (10)^1.05 ≈ 2.4 * 11.22 ≈ 26.93 Person-Months.",
    "tip": "Effort = 2.4 * 10^1.05 ≈ 26.9 PM."
  },
  {
    "id": 59,
    "chapter": 3,
    "tag": "Vận dụng",
    "type": "single",
    "question": "Nhóm lập trình tự ý thiết kế thêm các hiệu ứng 3D và thuật toán phức tạp vào phần mềm quản lý kho dù khách hàng không hề yêu cầu. Hành vi này trong QLDA gọi là gì?",
    "options": [
      "A. Scope Creep (Phình phạm vi do khách hàng yêu cầu)",
      "B. Value Engineering (Kỹ thuật tối ưu hóa giá trị sản phẩm)",
      "C. Agile Refactoring (Tái cấu trúc mã nguồn theo chuẩn linh hoạt)",
      "D. Gold Plating (Mạ vàng sản phẩm do nhóm phát triển tự ý làm)"
    ],
    "answer": 3,
    "explanation": "Gold Plating (Mạ vàng) là việc đội dự án tự ý thêm vào các tính năng hoặc sự hoàn hảo kỹ thuật không có trong yêu cầu đã thỏa thuận, gây lãng phí thời gian và rủi ro lỗi.",
    "tip": "Đội tự ý làm thêm cái khách không yêu cầu = Gold Plating."
  },
  {
    "id": 60,
    "chapter": 3,
    "tag": "Khái niệm",
    "type": "single",
    "question": "Trong 3 nguồn lực dự án theo Pressman, nguồn lực nào giữ vị trí NÒNG CỐT quyết định việc huy động và sử dụng hiệu quả các nguồn lực còn lại?",
    "options": [
      "A. Nguồn lực Con người (Human Resources / People)",
      "B. Nguồn lực Môi trường phát triển (Environmental Resources)",
      "C. Nguồn lực Thành phần phần mềm có sẵn (COTS Components)",
      "D. Nguồn lực Công cụ kiểm thử tự động (Testing Tools)"
    ],
    "answer": 0,
    "explanation": "Con người (People) là nguồn lực quan trọng nhất, trực tiếp quyết định việc lựa chọn công nghệ, sử dụng môi trường phát triển và tái sử dụng linh kiện phần mềm.",
    "tip": "Nòng cốt nhất trong 3 nguồn lực = Con người (People)."
  },
  {
    "id": 61,
    "chapter": 3,
    "tag": "Khái niệm",
    "type": "single",
    "question": "Khi xác định Phạm vi phần mềm (Software Scope), hai yếu tố CỐT LÕI BẮT BUỘC phải làm rõ ngay từ ban đầu là gì?",
    "options": [
      "A. Danh sách phần cứng máy chủ và địa chỉ IP cụ thể của mạng nội bộ",
      "B. Chức năng/hành vi của hệ thống và Giới hạn/ràng buộc về hiệu năng",
      "C. Tên tuổi và địa chỉ nhà riêng của toàn bộ lập trình viên tham gia",
      "D. Bảng giá cổ phiếu của công ty khách hàng trên thị trường chứng khoán"
    ],
    "answer": 1,
    "explanation": "Scope xác định: 1. Chức năng và hành vi của phần mềm (hệ thống làm được gì) và 2. Giới hạn/ràng buộc về hiệu năng, độ tin cậy và giao diện.",
    "tip": "Software Scope: Chức năng/Hành vi + Giới hạn/Ràng buộc."
  },
  {
    "id": 62,
    "chapter": 3,
    "tag": "Phương pháp",
    "type": "single",
    "question": "Nhóm dự án áp dụng kỹ thuật Ước lượng từ dưới lên (Bottom-up Estimating). Nhóm sẽ tiến hành các bước như thế nào?",
    "options": [
      "A. Ước lượng tổng chi phí toàn dự án rồi chia đều xuống từng tuần",
      "B. Lấy báo giá của đối thủ cạnh tranh rẻ nhất rồi giảm thêm 20%",
      "C. Ước lượng công sức cho từng gói công việc nhỏ nhất ở đáy WBS rồi cộng dồn lên",
      "D. Nhờ ban giám đốc tự áp đặt con số ngân sách và thời hạn bàn giao"
    ],
    "answer": 2,
    "explanation": "Bottom-up Estimating: Phân rã dự án xuống mức gói công việc nhỏ nhất (Work Package), ước lượng cho từng gói này rồi tổng hợp cộng dồn ngược lên trên.",
    "tip": "Bottom-up: Ước lượng từ gói nhỏ nhất ở đáy WBS rồi cộng dồn lên."
  },
  {
    "id": 63,
    "chapter": 3,
    "tag": "Khái niệm",
    "type": "single",
    "question": "Đơn vị đo chuẩn của Công sức dự án phần mềm là 'Person-Month' (Người-tháng). Đơn vị này phản ánh điều gì?",
    "options": [
      "A. Một người phải làm việc liên tục 24 giờ mỗi ngày trong vòng một tháng",
      "B. Chi phí tiền lương cố định của một nhân viên trong một tháng làm việc",
      "C. Số lượng dòng mã nguồn tối đa mà một nhóm lập trình viên viết được",
      "D. Khối lượng công việc mà một kỹ sư bình thường thực hiện trong một tháng"
    ],
    "answer": 3,
    "explanation": "Person-Month là đơn vị đo công sức lao động, đại diện cho khối lượng công việc hoàn thành bởi một người làm việc bình thường trong một tháng tiêu chuẩn.",
    "tip": "Person-Month = Khối lượng công việc một người làm trong một tháng."
  },
  {
    "id": 64,
    "chapter": 3,
    "tag": "Khái niệm",
    "type": "single",
    "question": "Theo bài giảng Chương 3 (Slide 20-21), có hai cách phân rã phần mềm (Decomposition) phổ biến là gì?",
    "options": [
      "A. Phân rã theo chức năng (Module, Feature) và Phân rã theo công việc (Phân tích, Thiết kế, Lập trình, Kiểm thử)",
      "B. Phân rã theo mức lương nhân sự và Phân rã theo độ tuổi nhân viên",
      "C. Phân rã theo số dòng code frontend và Phân rã theo số dòng code backend",
      "D. Phân rã theo dung lượng ổ cứng và Phân rã theo băng thông đường truyền mạng"
    ],
    "answer": 0,
    "explanation": "Slide 20-21 Chương 3 nêu rõ 2 cách phân rã: Phân rã theo chức năng (Module, Feature) và Phân rã theo công việc (Phân tích, Thiết kế, Lập trình, Kiểm thử).",
    "tip": "2 cách phân rã: Theo chức năng (Module/Feature) và Theo công việc."
  },
  {
    "id": 65,
    "chapter": 3,
    "tag": "Khái niệm",
    "type": "single",
    "question": "Trong mô hình COCOMO, chế độ dự án nào có hệ số b lớn nhất, phản ánh mức độ phức tạp và ràng buộc công nghệ khắt khe nhất?",
    "options": [
      "A. Chế độ Organic Mode (Hệ số b = 1.05)",
      "B. Chế độ Embedded Mode (Hệ số b = 1.20)",
      "C. Chế độ Semi-detached Mode (Hệ số b = 1.12)",
      "D. Chế độ Agile Mode (Hệ số b = 1.00)"
    ],
    "answer": 1,
    "explanation": "Chế độ Embedded (Dự án nhúng, ràng buộc phần cứng/quy chuẩn khắt khe) có hệ số b = 1.20 cao nhất, công sức tăng nhanh nhất theo quy mô.",
    "tip": "Embedded Mode có hệ số b = 1.20 (lớn nhất)."
  },
  {
    "id": 66,
    "chapter": 3,
    "tag": "Khái niệm",
    "type": "single",
    "question": "Khái niệm 'Baseline' (Đường cơ sở) của kế hoạch dự án phần mềm có ý nghĩa cốt lõi nào sau đây?",
    "options": [
      "A. Là bản kế hoạch sơ bộ ban đầu trước khi thảo luận với khách hàng",
      "B. Là danh sách các công việc kiểm thử tự động do nhóm QA lập ra",
      "C. Là bản kế hoạch chính thức đã phê duyệt, làm mốc so sánh kiểm soát sai lệch",
      "D. Là bản cam kết bảo hành sản phẩm sau khi đã bàn giao 1 năm"
    ],
    "answer": 2,
    "explanation": "Baseline là bản kế hoạch đã được phê chuẩn chính thức, dùng làm chuẩn đối chiếu để phát hiện và đo lường sự sai lệch về tiến độ, chi phí trong quá trình thực hiện.",
    "tip": "Baseline = Mốc chuẩn đã phê duyệt để đo lường sai lệch."
  },
  {
    "id": 67,
    "chapter": 3,
    "tag": "Khái niệm",
    "type": "single",
    "question": "Một kế hoạch dự án phần mềm được cộng đồng chuyên gia đánh giá là 'TỐT VÀ KHẢ THI' khi thỏa mãn tiêu chí nào?",
    "options": [
      "A. Không bao giờ được phép thay đổi bất kỳ chi tiết nào dù tình hình biến động",
      "B. Luôn cam kết bàn giao sớm hơn yêu cầu của khách hàng ít nhất 3 tháng",
      "C. Được xây dựng hoàn toàn bởi trí tuệ nhân tạo mà không cần PM tham gia",
      "D. Có tính thực tế, linh hoạt thích ứng khi có biến động và được các bên đồng thuận"
    ],
    "answer": 3,
    "explanation": "Kế hoạch tốt là kế hoạch dựa trên cơ sở thực tế, có tính linh hoạt thích ứng khi điều kiện thay đổi và nhận được sự cam kết đồng thuận từ các bên liên quan.",
    "tip": "Kế hoạch tốt: Khả thi + Linh hoạt thích ứng + Được đồng thuận."
  },
  {
    "id": 68,
    "chapter": 4,
    "tag": "Khái niệm",
    "type": "multiple",
    "question": "Sự khác biệt bản chất giữa RỦI RO (Risk) và SỰ CỐ (Issue) được thể hiện qua những ý nào sau đây? (Chọn tất cả các đáp án đúng)",
    "options": [
      "A. Rủi ro là sự kiện chưa xảy ra ở hiện tại, chỉ có khả năng xảy ra trong tương lai",
      "B. Sự cố là vấn đề ĐÃ xảy ra ở hiện tại và đang gây tác động tiêu cực",
      "C. Rủi ro có tính bất định, xác suất nằm trong khoảng 0 < P < 1",
      "D. Sự cố mang tính chắc chắn, xác suất đã là P = 1 (100%)",
      "E. Quản lý rủi ro mang tính chủ động phòng ngừa, xử lý sự cố mang tính khắc phục",
      "F. Rủi ro và sự cố hoàn toàn là một khái niệm đồng nghĩa không có gì khác nhau"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Phân biệt kinh điển: Risk (chưa xảy ra, 0 < P < 1, chủ động phòng ngừa) vs Issue (đã xảy ra, P = 1, bị động khắc phục xử lý).",
    "tip": "Chưa xảy ra = Risk. Đã xảy ra = Issue."
  },
  {
    "id": 69,
    "chapter": 4,
    "tag": "Khái niệm",
    "type": "multiple",
    "question": "3 NHÓM RỦI RO PHẦN MỀM cơ bản được phân loại trong bài giảng bao gồm những nhóm nào? (Chọn tất cả các đáp án đúng)",
    "options": [
      "A. Rủi ro dự án (Project Risks - ảnh hưởng tiến độ, ngân sách, nhân sự)",
      "B. Rủi ro kỹ thuật (Technical Risks - ảnh hưởng thiết kế, công nghệ, chất lượng)",
      "C. Rủi ro kinh doanh (Business Risks - ảnh hưởng thị trường, doanh thu, khả năng bán)",
      "D. Rủi ro chính trị quốc gia (Political Risks)",
      "E. Rủi ro địa chất và thời tiết vũ trụ (Geological Risks)"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "3 nhóm rủi ro chuẩn: 1. Project risks (tiến độ, ngân sách, tài nguyên) 2. Technical risks (thiết kế, công nghệ, chất lượng) 3. Business risks (thị trường, khả năng bán).",
    "tip": "3 nhóm rủi ro = Project risks + Technical risks + Business risks."
  },
  {
    "id": 70,
    "chapter": 4,
    "tag": "Chiến lược",
    "type": "multiple",
    "question": "4 CHIẾN LƯỢC ỨNG PHÓ RỦI RO (Risk Response Strategies) kinh điển gồm những chiến lược nào? (Chọn tất cả các đáp án đúng)",
    "options": [
      "A. Tránh rủi ro (Risk Avoidance)",
      "B. Giảm thiểu rủi ro (Risk Mitigation)",
      "C. Chuyển giao rủi ro (Risk Transfer)",
      "D. Chấp nhận rủi ro (Risk Acceptance)",
      "E. Phớt lờ và che giấu rủi ro (Risk Concealment)",
      "F. Đổ lỗi rủi ro cho nhà phát triển khác (Risk Blaming)"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "4 chiến lược ứng phó chuẩn: Tránh (Avoidance), Giảm thiểu (Mitigation), Chuyển giao (Transfer), Chấp nhận (Acceptance).",
    "tip": "4 chiến lược rủi ro: Tránh - Giảm thiểu - Chuyển giao - Chấp nhận."
  },
  {
    "id": 71,
    "chapter": 4,
    "tag": "Công cụ",
    "type": "multiple",
    "question": "Sổ theo dõi rủi ro (Risk Register) chuẩn cần ghi nhận những THÔNG TIN QUAN TRỌNG nào sau đây? (Chọn tất cả các đáp án đúng)",
    "options": [
      "A. Mô tả chi tiết nội dung rủi ro",
      "B. Xác suất xảy ra của rủi ro (Probability - P)",
      "C. Mức độ thiệt hại nếu rủi ro xảy ra (Loss / Impact)",
      "D. Giá trị mức độ phơi nhiễm rủi ro (Risk Exposure - RE)",
      "E. Kế hoạch và biện pháp ứng phó cụ thể",
      "F. Người chịu trách nhiệm theo dõi và kích hoạt xử lý (Risk Owner)"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4,
      5
    ],
    "explanation": "Sổ rủi ro (Risk Register) lưu trữ: ID/Mô tả, Xác suất P, Mức thiệt hại Loss, RE = P x Loss, Chiến lược ứng phó, và Risk Owner (người chịu trách nhiệm).",
    "tip": "Risk Register: Mô tả + P + Loss + RE + Biện pháp + Risk Owner."
  },
  {
    "id": 72,
    "chapter": 4,
    "tag": "Quy trình",
    "type": "multiple",
    "question": "Quy trình Quản lý rủi ro phần mềm chuyên nghiệp bao gồm các HOẠT ĐỘNG CHÍNH nào sau đây? (Chọn tất cả các đáp án đúng)",
    "options": [
      "A. Nhận diện rủi ro (Risk Identification)",
      "B. Phân tích và đánh giá rủi ro (Risk Analysis & Evaluation)",
      "C. Lập kế hoạch ứng phó rủi ro (Risk Response Planning)",
      "D. Theo dõi và kiểm soát rủi ro định kỳ (Risk Monitoring & Control)",
      "E. Xóa bỏ các rủi ro có khả năng xảy ra cao khỏi báo cáo để tránh lo lắng"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Quy trình quản lý rủi ro gồm 4 bước: 1. Nhận diện (Identification) -> 2. Phân tích (Analysis) -> 3. Lập kế hoạch ứng phó (Planning) -> 4. Theo dõi & kiểm soát (Monitoring).",
    "tip": "Quy trình: Nhận diện -> Phân tích -> Kế hoạch -> Theo dõi."
  },
  {
    "id": 73,
    "chapter": 4,
    "tag": "Khái niệm",
    "type": "multiple",
    "question": "Những tình huống nào sau đây được xếp vào nhóm RỦI RO KỸ THUẬT (Technical Risks)? (Chọn tất cả các đáp án đúng)",
    "options": [
      "A. Sử dụng một framework công nghệ hoàn toàn mới mà nhóm chưa từng có kinh nghiệm",
      "B. Yêu cầu tải 100.000 truy cập đồng thời vượt quá khả năng chịu đựng của kiến trúc",
      "C. Dịch vụ API thanh toán của bên thứ ba không cung cấp tài liệu tích hợp chuẩn",
      "D. Khách hàng cắt giảm 40% ngân sách thanh toán do khủng hoảng tài chính",
      "E. Đối thủ cạnh tranh tung ra phần mềm tương tự với giá rẻ hơn một nửa"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Rủi ro kỹ thuật liên quan đến: công nghệ mới, kiến trúc không đáp ứng tải, tích hợp bên thứ ba, thuật toán khó. Khách giảm ngân sách hay đối thủ cạnh tranh là Business/Project risk.",
    "tip": "Kỹ thuật: Công nghệ mới + Kiến trúc/Tải + Giao tiếp tích hợp API."
  },
  {
    "id": 74,
    "chapter": 4,
    "tag": "Khái niệm",
    "type": "multiple",
    "question": "Những sự kiện nào sau đây là ví dụ điển hình của nhóm RỦI RO KINH DOANH (Business Risks)? (Chọn tất cả các đáp án đúng)",
    "options": [
      "A. Xây dựng một sản phẩm phần mềm xuất sắc nhưng thị trường không có nhu cầu sử dụng",
      "B. Sản phẩm không còn phù hợp với định hướng chiến lược kinh doanh của công ty",
      "C. Đội ngũ bán hàng không hiểu sản phẩm nên không bán được cho khách hàng",
      "D. Thuật toán sắp xếp dữ liệu bị lỗi tràn bộ nhớ khi chạy trên server",
      "E. Đối thủ cạnh tranh ra mắt tính năng tương tự sớm hơn 2 tháng và chiếm lĩnh thị phần"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Rủi ro kinh doanh đe dọa khả năng sinh lời và thương mại: thị trường không đón nhận, không phù hợp chiến lược, bán hàng yếu, đối thủ cạnh tranh.",
    "tip": "Kinh doanh: Thị trường không cần + Đối thủ vượt mặt + Bán hàng yếu."
  },
  {
    "id": 75,
    "chapter": 4,
    "tag": "Khái niệm",
    "type": "single",
    "question": "Công thức toán học chuẩn để xác định Mức độ phơi nhiễm rủi ro (Risk Exposure - RE) là gì?",
    "options": [
      "A. RE = P * Loss (Xác suất nhân với mức độ thiệt hại)",
      "B. RE = P + Loss (Tổng xác suất và thiệt hại)",
      "C. RE = Loss / P (Thiệt hại chia cho xác suất)",
      "D. RE = (P * 100) - Loss"
    ],
    "answer": 0,
    "explanation": "Risk Exposure (RE) = P * Loss (Trong đó P là xác suất xảy ra 0 < P < 1, Loss là mức độ tổn thất khi rủi ro xảy ra).",
    "tip": "Công thức RE = P * Loss."
  },
  {
    "id": 76,
    "chapter": 4,
    "tag": "Tính toán",
    "type": "single",
    "question": "Rủi ro 'Máy chủ lưu trữ bị tấn công mạng' có xác suất xảy ra P = 0.25 (25%), ước tính tổn thất nếu xảy ra là 40.000 USD. Giá trị phơi nhiễm RE là:",
    "options": [
      "A. 5.000 USD",
      "B. 10.000 USD",
      "C. 15.000 USD",
      "D. 20.000 USD"
    ],
    "answer": 1,
    "explanation": "RE = P * Loss = 0.25 * 40.000 USD = 10.000 USD.",
    "tip": "RE = 0.25 * 40.000 = 10.000 USD."
  },
  {
    "id": 77,
    "chapter": 4,
    "tag": "Vận dụng",
    "type": "single",
    "question": "Nhận thấy tính năng nạp tiền bằng thẻ cào điện thoại tiềm ẩn rủi ro lừa đảo quá lớn, ban quản trị quyết định LOẠI BỎ HOÀN TOÀN tính năng này ra khỏi phạm vi. Đây là chiến lược gì?",
    "options": [
      "A. Giảm thiểu rủi ro (Risk Mitigation)",
      "B. Chuyển giao rủi ro (Risk Transfer)",
      "C. Tránh rủi ro (Risk Avoidance)",
      "D. Chấp nhận rủi ro (Risk Acceptance)"
    ],
    "answer": 2,
    "explanation": "Tránh rủi ro (Risk Avoidance) là thay đổi kế hoạch hoặc loại bỏ hoàn toàn tính năng/hoạt động có rủi ro để đưa xác suất xảy ra về 0.",
    "tip": "Cắt bỏ hoàn toàn tính năng rủi ro = Tránh rủi ro (Risk Avoidance)."
  },
  {
    "id": 78,
    "chapter": 4,
    "tag": "Vận dụng",
    "type": "single",
    "question": "Công ty ký hợp đồng thuê hạ tầng đám mây AWS với cam kết bảo đảm uptime 99.99% và mua gói bảo hiểm sự cố dữ liệu. Đây là ví dụ của chiến lược nào?",
    "options": [
      "A. Tránh rủi ro (Risk Avoidance)",
      "B. Giảm thiểu rủi ro (Risk Mitigation)",
      "C. Chấp nhận rủi ro (Risk Acceptance)",
      "D. Chuyển giao rủi ro (Risk Transfer)"
    ],
    "answer": 3,
    "explanation": "Chuyển giao rủi ro (Risk Transfer) là chuyển phần lớn tác động tiêu cực hoặc trách nhiệm xử lý sang bên thứ ba (qua bảo hiểm, thuê ngoài, cam kết SLA).",
    "tip": "Thuê ngoài có cam kết SLA / Mua bảo hiểm = Chuyển giao (Risk Transfer)."
  },
  {
    "id": 79,
    "chapter": 4,
    "tag": "Vận dụng",
    "type": "single",
    "question": "Để phòng ngừa rủi ro lập trình viên chính nghỉ việc đột xuất, PM yêu cầu thành viên phải viết tài liệu chi tiết hàng ngày và làm việc theo cặp (Pair Programming). Đây là chiến lược nào?",
    "options": [
      "A. Giảm thiểu rủi ro (Risk Mitigation)",
      "B. Chuyển giao rủi ro (Risk Transfer)",
      "C. Tránh rủi ro (Risk Avoidance)",
      "D. Chấp nhận rủi ro (Risk Acceptance)"
    ],
    "answer": 0,
    "explanation": "Giảm thiểu rủi ro (Risk Mitigation) là hành động chủ động thực hiện các biện pháp phòng ngừa để giảm xác suất xảy ra hoặc giảm mức độ thiệt hại của rủi ro.",
    "tip": "Chủ động viết tài liệu, làm theo cặp để giảm tác hại = Giảm thiểu (Mitigation)."
  },
  {
    "id": 80,
    "chapter": 4,
    "tag": "Vận dụng",
    "type": "single",
    "question": "Một lỗi hiển thị lệch 1 pixel trên trình duyệt cũ có xác suất xuất hiện dưới 0.1%, chi phí sửa lại cao hơn giá trị mang lại. PM quyết định ghi nhận và không can thiệp. Đây là chiến lược nào?",
    "options": [
      "A. Tránh rủi ro (Risk Avoidance)",
      "B. Chấp nhận rủi ro (Risk Acceptance)",
      "C. Chuyển giao rủi ro (Risk Transfer)",
      "D. Giảm thiểu rủi ro (Risk Mitigation)"
    ],
    "answer": 1,
    "explanation": "Chấp nhận rủi ro (Risk Acceptance) là quyết định có ý thức không thực hiện hành động phòng ngừa nào, chấp nhận hậu quả nếu nó xảy ra (thường áp dụng cho rủi ro mức thấp).",
    "tip": "Rủi ro quá nhỏ, chấp nhận không sửa = Chấp nhận (Risk Acceptance)."
  },
  {
    "id": 81,
    "chapter": 4,
    "tag": "Vận dụng",
    "type": "single",
    "question": "Sáng nay lúc 8h30, ổ cứng máy chủ lưu trữ chính của công ty bất ngờ phát nổ và toàn bộ dịch vụ ngân hàng trực tuyến bị tê liệt. Sự việc này được xếp loại chính xác là gì?",
    "options": [
      "A. Một Rủi ro tiềm ẩn (Potential Risk)",
      "B. Một Cơ hội kinh doanh mới (Business Opportunity)",
      "C. Một Sự cố kỹ thuật (Issue / Incident)",
      "D. Một Rào cản phạm vi dự án (Scope Constraint)"
    ],
    "answer": 2,
    "explanation": "Sự việc đã thực sự xảy ra ở hiện tại (xác suất P = 1) và đang gây tác động tiêu cực, do đó nó là Sự cố (Issue), không còn là Rủi ro nữa.",
    "tip": "Đã xảy ra ở hiện tại = Sự cố (Issue)."
  },
  {
    "id": 82,
    "chapter": 4,
    "tag": "Khái niệm",
    "type": "single",
    "question": "Ma trận đánh giá rủi ro (Risk Matrix) tiêu chuẩn kết hợp 2 trục thông tin nào để xác định mức độ ưu tiên?",
    "options": [
      "A. Trục Chi phí dự án và Trục Thời gian bàn giao",
      "B. Trục Số lượng nhân sự và Trục Số dòng mã nguồn",
      "C. Trục Đánh giá của khách hàng và Trục Lương của lập trình viên",
      "D. Trục Xác suất xảy ra (Probability) và Trục Mức độ tổn thất (Impact/Loss)"
    ],
    "answer": 3,
    "explanation": "Ma trận rủi ro (Risk Matrix) kết hợp: Trục Xác suất (Probability) và Trục Mức độ tổn thất (Impact/Loss) để phân chia rủi ro thành các vùng: Rất cao, Cao, Vừa, Thấp.",
    "tip": "Ma trận rủi ro: Xác suất (Probability) x Tác động (Impact/Loss)."
  },
  {
    "id": 83,
    "chapter": 4,
    "tag": "Phương pháp",
    "type": "single",
    "question": "Khi sắp xếp thứ tự ưu tiên xử lý các rủi ro trong Sổ theo dõi rủi ro (Risk Register), người quản lý căn cứ vào tiêu chí nào đầu tiên?",
    "options": [
      "A. Giá trị mức độ phơi nhiễm rủi ro (RE = P * Loss) từ cao xuống thấp",
      "B. Tên chữ cái của rủi ro theo bảng chữ cái từ A đến Z",
      "C. Rủi ro nào do khách hàng trực tiếp báo cáo sẽ làm trước",
      "D. Rủi ro nào có chi phí xử lý rẻ nhất sẽ ưu tiên làm trước"
    ],
    "answer": 0,
    "explanation": "Ưu tiên xử lý rủi ro luôn được xếp theo giá trị phơi nhiễm rủi ro (Risk Exposure - RE) giảm dần: Rủi ro có RE lớn nhất được ưu tiên phân bổ nguồn lực xử lý trước.",
    "tip": "Xếp ưu tiên xử lý: Căn cứ vào RE từ cao xuống thấp."
  },
  {
    "id": 84,
    "chapter": 4,
    "tag": "Vận dụng",
    "type": "single",
    "question": "Trưởng nhóm kiểm thử xin nghỉ thai sản đột xuất trùng đúng thời điểm bắt đầu đợt kiểm thử tích hợp (UAT), đe dọa chậm tiến độ 3 tuần. Rủi ro này thuộc nhóm nào?",
    "options": [
      "A. Rủi ro kỹ thuật (Technical Risk)",
      "B. Rủi ro dự án (Project Risk)",
      "C. Rủi ro kinh doanh (Business Risk)",
      "D. Rủi ro thị trường (Market Risk)"
    ],
    "answer": 1,
    "explanation": "Rủi ro thiếu hụt nhân sự, tác động trực tiếp đến tiến độ và ngân sách dự án được phân loại vào nhóm Rủi ro dự án (Project Risk).",
    "tip": "Mất nhân sự, chậm tiến độ = Rủi ro dự án (Project Risk)."
  },
  {
    "id": 85,
    "chapter": 4,
    "tag": "Khái niệm",
    "type": "single",
    "question": "Thuật ngữ 'Risk Owner' (Chủ sở hữu rủi ro) trong quản lý dự án được hiểu chính xác là ai?",
    "options": [
      "A. Người vô tình gây ra rủi ro cho toàn bộ dự án",
      "B. Giám đốc điều hành cao nhất của doanh nghiệp phần mềm",
      "C. Cá nhân được giao trách nhiệm theo dõi và kích hoạt kế hoạch ứng phó cho rủi ro đó",
      "D. Khách hàng chi trả tiền cho hợp đồng phát triển phần mềm"
    ],
    "answer": 2,
    "explanation": "Risk Owner là người được chỉ định chịu trách nhiệm giám sát một rủi ro cụ thể và kích hoạt các hành động ứng phó khi các dấu hiệu cảnh báo xuất hiện.",
    "tip": "Risk Owner = Người chịu trách nhiệm theo dõi và kích hoạt xử lý rủi ro."
  },
  {
    "id": 86,
    "chapter": 4,
    "tag": "Khái niệm",
    "type": "single",
    "question": "Kế hoạch ứng phó dự phòng (Contingency Plan) được xây dựng với mục đích nào sau đây?",
    "options": [
      "A. Kích hoạt ngay lập tức ngay từ ngày đầu tiên bắt đầu dự án",
      "B. Dùng để xin thêm kinh phí đầu tư từ khách hàng mỗi tháng",
      "C. Dùng để thay thế toàn bộ bản kế hoạch WBS hiện có",
      "D. Là kế hoạch thay thế chỉ được kích hoạt khi rủi ro thực sự biến thành sự cố"
    ],
    "answer": 3,
    "explanation": "Contingency Plan (Kế hoạch dự phòng) là các bước hành động đã được chuẩn bị sẵn và chỉ được kích hoạt khi rủi ro được cảnh báo xảy ra trở thành sự cố.",
    "tip": "Contingency Plan = Kế hoạch chuẩn bị sẵn, chỉ kích hoạt khi rủi ro xảy ra."
  },
  {
    "id": 87,
    "chapter": 4,
    "tag": "Khái niệm",
    "type": "single",
    "question": "Nếu một rủi ro có xác suất xảy ra được đánh giá là P = 100% (P = 1.0), thì theo lý thuyết quản lý dự án, nó được coi là gì?",
    "options": [
      "A. Một sự thật hiển nhiên / Ràng buộc chắc chắn của dự án, không còn là rủi ro",
      "B. Vẫn là một rủi ro thông thường nhưng ở mức cực kỳ nguy hiểm",
      "C. Một cơ hội thuận lợi để gia tăng lợi nhuận cho dự án",
      "D. Một sai số trong quá trình tính toán của người quản lý"
    ],
    "answer": 0,
    "explanation": "Rủi ro bắt buộc phải có tính bất định (0 < P < 1). Nếu xác suất chắc chắn 100% (P = 1), nó trở thành một Ràng buộc (Constraint) hoặc một Sự việc chắc chắn cần lập kế hoạch xử lý.",
    "tip": "Xác suất 100% => Không còn là rủi ro, mà là Ràng buộc / Sự việc chắc chắn."
  },
  {
    "id": 88,
    "chapter": 4,
    "tag": "Quy trình",
    "type": "single",
    "question": "Hoạt động rà soát và đánh giá lại rủi ro (Risk Review) nên được thực hiện với tần suất như thế nào trong dự án?",
    "options": [
      "A. Chỉ thực hiện duy nhất 1 lần khi bắt đầu khởi động dự án",
      "B. Thực hiện định kỳ liên tục trong suốt vòng đời dự án ở các buổi họp tiến độ",
      "C. Chỉ thực hiện khi dự án đã bị trễ hạn hơn 1 tháng",
      "D. Chỉ thực hiện sau khi dự án đã bàn giao và thanh lý hợp đồng"
    ],
    "answer": 1,
    "explanation": "Quản lý rủi ro là một quy trình liên tục lặp lại. Rủi ro cũ có thể biến mất, rủi ro mới có thể xuất hiện, nên cần rà soát định kỳ ở các cuộc họp tiến độ.",
    "tip": "Rà soát rủi ro: Thực hiện định kỳ liên tục trong suốt dự án."
  },
  {
    "id": 89,
    "chapter": 4,
    "tag": "Khái niệm",
    "type": "single",
    "question": "Mục đích tối cao của việc Quản trị rủi ro trong một dự án phần mềm là gì?",
    "options": [
      "A. Loại bỏ tuyệt đối 100% mọi bất trắc để dự án không bao giờ có lỗi",
      "B. Chứng minh với khách hàng rằng nhóm phát triển không bao giờ có sai sót",
      "C. Giảm thiểu các tác động tiêu cực và chủ động bảo vệ mục tiêu dự án",
      "D. Tăng thời gian và chi phí của dự án lên mức tối đa có thể"
    ],
    "answer": 2,
    "explanation": "Không thể loại bỏ 100% mọi rủi ro trong phần mềm. Mục đích của QLRR là chủ động nhận biết, giảm thiểu tác động tiêu cực để bảo đảm đạt được mục tiêu dự án.",
    "tip": "Mục đích QLRR: Chủ động giảm thiểu tác động tiêu cực, bảo vệ mục tiêu."
  },
  {
    "id": 90,
    "chapter": 4,
    "tag": "Vận dụng",
    "type": "single",
    "question": "Một PM tuyên bố: 'Dự án của chúng tôi lập kế hoạch hoàn hảo nên xác suất có rủi ro là 0%'. Phát biểu này thể hiện điều gì?",
    "options": [
      "A. Dự án có quy trình quản lý chất lượng ở mức tối thượng CMMI mức 5",
      "B. Đội ngũ phát triển có trình độ kỹ thuật vượt trội so với thế giới",
      "C. Khách hàng đã thanh toán toàn bộ 100% chi phí ngay từ ngày đầu",
      "D. Sự thiếu hiểu biết thực tế, vì phần mềm luôn tiềm ẩn rủi ro do tính vô hình và biến động"
    ],
    "answer": 3,
    "explanation": "Dự án phần mềm luôn có rủi ro cao vì sản phẩm vô hình, yêu cầu thay đổi liên tục và phụ thuộc con người. Tuyên bố rủi ro 0% là ảo tưởng và phi thực tế.",
    "tip": "Phần mềm luôn có rủi ro cao. Tuyên bố rủi ro 0% là ảo tưởng."
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
