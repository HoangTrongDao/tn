let selectedSet = null; // Bộ đề đã chọn
const questions =[
  {
    "question": "1. Hoạt động dạy và hoạt động học là 2 thành tố có vai trò như thế nào trong quá trình dạy học?",
    "options": [
      "Trung tâm, đặc trưng",
      "Trung tâm, không đặc trưng",
      "Không trung tâm, không đặc trưng",
      "Không trung tâm, đặc trưng,ooooo"
    ],
    "correct": 0
  },
  {
    "question": "2. Quá trình dạy học không có dạng mâu thuẫn nào?",
    "options": [
      "Mâu thuẫn bên trong",
      "Mâu thuẫn bên ngoài",
      "Mâu thuẫn cơ bản",
      "Mâu thuẫn chủ yếu"
    ],
    "correct": 3
  },
  {
    "question": "3. Dạy học phải chú ý đến khả năng nhận thức của người học là yêu cầu của nguyên tắc dạy học nào sau đây?",
    "options": [
      "Nguyên tắc đảm bảo thống nhất giữa tính khoa học và tính giáo dục",
      "Nguyên tắc đảm bảo sự thống nhất giữa lý luận và thực tiễn",
      "Nguyên tắc đảm bảo sự thống nhất giữa tính vững chắc của tri thức và tính mềm dẻo của tư duy",
      "Nguyên tắc đảm bảo tính vừa sức"
    ],
    "correct": 3
  },
  {
    "question": "4. Hệ thống kinh nghiệm hoạt động sáng tạo là thành phần của",
    "options": [
      "nội dung dạy học",
      "phương pháp dạy học",
      "mục tiêu dạy học",
      "hình thức tổ chức dạy học"
    ],
    "correct": 0
  },
  {
    "question": "5. Đâu không phải là phương pháp dạy học tích cực trong số các phương pháp dạy học dưới đây?",
    "options": [
      "Phương pháp dạy học vấn đáp",
      "Phương pháp quan sát",
      "Phương pháp dạy học theo dự án",
      "Phương pháp thuyết trình"
    ],
    "correct": 3
  },
  {
    "question": "6. “Học là sự thay đổi hành vi” là tư tưởng chủ đạo của lý thuyết học tập nào dưới đây?",
    "options": [
      "Thuyết Nhận thức",
      "Thuyết Hành vi",
      "Thuyết Kiến tạo",
      "Thuyết Đa trí tuệ"
    ],
    "correct": 1
  },
   {
    "question": "7. “Kích thích và phản ứng” là cơ chế của lý thuyết học tập nào sau đây?",
    "options": [
      "Thuyết Kiến tạo",
      "Thuyết Nhận thức",
      "Thuyết Hành vi",
      "Thuyết Đa trí tuệ"
    ],
    "correct": 2
  },
  {
    "question": "8. Trong quá trình dạy học, giáo viên có vai trò gì?",
    "options": [
      "Tổ chức và định hướng hoạt động học",
      "Tổ chức và thực hiện hoạt động học",
      "Đồng hành và thực hiện hoạt động học",
      "Định hướng và tích cực thực hiện hoạt động học"
    ],
    "correct": 0
  },
  {
    "question": "9. Yêu cầu về ngôn ngữ và phong cách của giáo viên là yêu cầu của phương pháp dạy học nào dưới đây?",
    "options": [
      "Phương pháp dạy học Giải quyết vấn đề",
      "Phương pháp dạy học Thuyết trình",
      "Phương pháp dạy học vấn đáp",
      "Phương pháp dạy học"
    ],
    "correct": 1
  },
  {
    "question": "10. Dạy học phải làm cho người học thấy được nguồn gốc thực tiễn của những tri thức khoa học là yêu cầu thuộc về",
    "options": [
      "phương pháp dạy học",
      "nguyên tắc dạy học",
      "nội dung dạy học",
      "mục tiêu dạy học"
    ],
    "correct": 1
  },
  {
    "question": "11. Bản chất của quá trình dạy học là",
    "options": [
      "quá trình tổ chức các hoạt động học tập cho học sinh",
      "quá trình truyền thụ tri thức cho học sinh",
      "quá trình tổ chức cho học sinh nghiên cứu tài liệu học tập",
      "quá trình tổ chức cho học sinh làm tự học"
    ],
    "correct": 0
  },
  {
    "question": "12. Mục tiêu dạy học là",
    "options": [
      "kết quả học tập mong đợi đối với học sinh",
      "kết quả giảng dạy mong đợi đối với giáo viên",
      "kết quả dự kiến về hoạt động giảng dạy của giáo viên",
      "kết quả dự kiến về chất lượng dạy học môn học"
    ],
    "correct": 0
  },
   {
    "question": "13. Mâu thuẫn giữa người dạy với người học thuộc loại mâu thuẫn nào của quá trình dạy học?",
    "options": ["Mâu thuẫn bên ngoài", "Mâu thuẫn cơ bản", "Mâu thuẫn chủ yếu", "Mâu thuẫn trọng yếu"],
    "correct": 1
  },
  {
    "question": "14. Phát triển trí tuệ cho học sinh là yêu cầu của",
    "options": ["mục tiêu dạy học", "nhiệm vụ dạy học", "nội dung dạy học", "phương pháp dạy học"],
    "correct": 1
  },
  {
    "question": "15. Dạy học theo định hướng phát triển năng lực học sinh là",
    "options": ["quan điểm dạy học", "phương pháp dạy học", "kỹ thuật dạy học", "hình thức tổ chức dạy học"],
    "correct": 0
  },
  {
    "question": "15. “Học là quá trình giải quyết vấn đề” là tư tưởng chủ đạo của lý thuyết học tập nào?",
    "options": ["Thuyết kiến tạo", "Thuyết hành vi", "Thuyết nhận thức", "Thuyết đa trí tuệ"],
    "correct": 2
  },
  {
    "question": "16. Người học được tham gia vào hoạt động thực tiễn dựa trên hiểu biết và kinh nghiệm sẵn có của chính người học là bản chất của quan điểm dạy học nào?",
    "options": ["Dạy học tích hợp", "Dạy học phân hóa", "Dạy học trải nghiệm", "Dạy học truyền thống"],
    "correct": 2
  },
  {
    "question": "17. Phương pháp dạy học là.........hoạt động thống nhất giữa người dạy với người học",
    "options": ["cách thức", "tổ hợp", "mối quan hệ", "hình thức"],
    "correct": 0
  },
  {
    "question": "18. Sắp xếp các ý sau đây sao cho đúng với logic của quá trình dạy học:",
    "options": [
      "Tổ chức, hỗ trợ học sinh hình thành tri thức mới",
      "Tổ chức, hỗ trợ học sinh củng cố tri thức, hình thành và rèn luyện kĩ năng, kĩ xảo",
      "Tổ chức kiểm tra đánh giá và tổ chức cho HS tự kiểm tra, tự đánh giá",
      "Kích thích thái độ học tập tích cực của học sinh"
    ],
    "correct_order": [3, 0, 1, 2]
  },
  {
    "question": "19. Nguyên tắc dạy học có vai trò gì trong quá trình dạy học?",
    "options": ["Định hướng", "Chỉ đạo", "Dự báo", "Đánh giá"],
    "correct": 1
  },
  {
    "question": "20. Trong quá trình dạy học, học sinh có vai trò gì?",
    "options": ["Chủ đạo", "Chủ động", "Điều khiển", "Định hướng"],
    "correct": 1
  },
  {
    "question": "21. Hệ thống tri thức, kỹ năng, kỹ xảo là các thành phần của",
    "options": ["nội dung dạy học", "mục tiêu dạy học", "phương pháp dạy học", "hình thức tổ chức dạy học"],
    "correct": 0
  },
  {
    "question": "22. Động lực chủ yếu của quá trình dạy học là kết quả của giải quyết mâu thuẫn nào sau đây?",
    "options": ["Mâu thuẫn bên trong", "Mâu thuẫn bên ngoài", "Mâu thuẫn cơ bản", "Mâu thuẫn chủ yếu"],
    "correct": 2
  },
  {
    "question": "23. Mối quan hệ biện chứng giữa hoạt động dạy và hoạt động học thể hiện nội dung của",
    "options": ["nguyên tắc dạy học", "qui luật dạy học", "logic quá trình dạy học", "phương pháp dạy học"],
    "correct": 1
  },
  {
    "question": "24. Đảm bảo sự thống nhất biện chứng giữa tính vững chắc của tri thức và mềm dẻo của tư duy trong dạy học là yêu cầu của",
    "options": ["nội dung dạy học", "phương pháp dạy học", "nguyên tắc dạy học", "qui luật dạy học"],
    "correct": 2
  },
  {
    "question": "25. Trong quá trình dạy học, giáo viên không làm thay, làm hộ học sinh là yêu cầu của nguyên tắc dạy học nào?",
    "options": [
      "Nguyên tắc đảm bảo tính vừa sức",
      "Nguyên tắc đảm bảo sự thống nhất giữa vai trò chủ đạo của giáo viên và vai trò chủ động của học sinh",
      "Nguyên tắc đảm bảo sự thống nhất biện chứng giữa tính khoa học và tính giáo dục",
      "Nguyên tắc đảm bảo sự thống nhất giữa lý luận và thực tiễn"
    ],
    "correct": 1
  },
  {
    "question": "26. Chương trình dạy học là biểu hiện của",
    "options": ["phương pháp dạy học", "nội dung dạy học", "hình thức tổ chức dạy học", "mục tiêu dạy học"],
    "correct": 1
  },
  {
    "question": "27. Khi lựa chọn phương pháp dạy học, giáo viên phải lưu ý những gì?",
    "options": [
      "Phù hợp với nội dung dạy học",
      "Phù hợp với phương tiện dạy học",
      "Phù hợp với năng lực của giáo viên",
      "Phù hợp với phương pháp đánh giá"
    ],
    "correct": 0
  },
  {
    "question": "28. Học tập là quá trình cá nhân tự hình thành kiến thức cho mình là tư tưởng chủ đạo của lý thuyết học tập nào?",
    "options": ["Thuyết nhận thức", "Thuyết kiến tạo", "Thuyết hành vi", "Thuyết hoạt động"],
    "correct": 1
  },
  {
    "question": "29. Phát hiện và điều chỉnh hoạt động dạy và học là chức năng của",
    "options": [
      "phương pháp dạy học",
      "đánh giá kết quả học tập",
      "phương tiện dạy học",
      "hình thức tổ chức dạy học"
    ],
    "correct": 1
  },
  {
    "question": "30. Tổ chức cho học sinh giải quyết vấn đề học tập là bản chất của phương pháp dạy học nào?",
    "options": [
      "Phương pháp Thuyết trình",
      "Phương pháp Vấn đáp",
      "Phương pháp Giải quyết vấn đề",
      "Phương pháp Thực hành"
    ],
    "correct": 2
  },
  {
    "question": "31. Tối đa hóa sự tham gia của người học, tối thiểu hóa sự áp đặt của người dạy là yêu cầu của",
    "options": [
      "nội dung dạy học hiện đại",
      "phương pháp dạy học hiện đại",
      "phương tiện dạy học hiện đại",
      "hình thức tổ chức dạy học hiện đại"
    ],
    "correct": 1
  },
  {
    "question": "32. Đảm bảo tính quan sát trong dạy học là yêu cầu của phương pháp dạy học nào?",
    "options": [
      "Phương pháp Thảo luận nhóm",
      "Phương pháp Vấn đáp",
      "Phương pháp Trực quan",
      "Phương pháp Thực hành"
    ],
    "correct": 2
  },
  {
    "question": "33. Mục tiêu dạy học chịu sự qui định của",
    "options": [
      "nội dung dạy học",
      "các điều kiện xã hội",
      "phương pháp dạy học",
      "phương tiện dạy học"
    ],
    "correct": 1
  },
  {
    "question": "34. Mâu thuẫn bên trong của quá trình dạy học là",
    "options": [
      "mâu thuẫn giữa các thành tố của quá trình dạy học với điều kiện xã hội",
      "mâu thuẫn giữa các thành tố của quá trình dạy học với nhau",
      "mâu thuẫn giữa các điều kiện xã hội với môi trường giáo dục nhà trường",
      "mâu thuẫn giữa môi trường giáo dục nhà trường và môi trường lớp học"
    ],
    "correct": 1
  },
  {
    "question": "35. Kế hoạch giảng dạy môn học là biểu hiện của",
    "options": [
      "hình thức tổ chức dạy học",
      "phương tiện dạy học",
      "nội dung dạy học",
      "phương pháp dạy học"
    ],
    "correct": 2
  },
  {
    "question": "36. B-Learning là",
    "options": [
      "phương pháp dạy học",
      "hình thức tổ chức dạy học",
      "phương tiện dạy học",
      "nội dung dạy học"
    ],
    "correct": 1
  },
  {
    "question": "37. Tính tích cực của mỗi cá nhân học sinh là lưu ý khi giáo viên sử dụng phương pháp dạy học nào sau đây?",
    "options": [
      "Phương pháp Thuyết trình",
      "Phương pháp Vấn đáp",
      "Phương pháp Dạy học bằng tình huống",
      "Phương pháp Dạy học nhóm"
    ],
    "correct": 1
  },
  {
    "question": "38. Học tập qua trải nghiệm là quá trình cá nhân huy động tối đa......... khi trực tiếp tham gia vào các hoạt động gắn với thực tiễn.",
    "options": [
      "kiến thức và kĩ năng môn học",
      "cảm xúc và kinh nghiệm sẵn có",
      "nhân cách và mối quan hệ sẵn có",
      "trách nhiệm và trung thực"
    ],
    "correct": 1
  },
  {
    "question": "39. Thiết lập mối quan hệ giữa kiến thức, kĩ năng các môn học, tránh sự lặp lại kiến thức ở các môn học là một trong những lý do để",
    "options": [
      "dạy học phân hóa",
      "dạy học trải nghiệm",
      "dạy học tích hợp",
      "dạy học tiếp cận nội dung"
    ],
    "correct": 2
  },
  {
    "question": "40a. Khéo thể hiện cảm xúc bằng cử chỉ, điệu bộ là biểu hiện đặc trưng của dạng trí tuệ nào?",
    "options": [
      "Trí tuệ ngôn ngữ",
      "Trí tuệ cảm xúc",
      "Trí tuệ hình thể",
      "Trí tuệ âm nhạc"
    ],
    "correct": 2
  },
  {
    "question": "40b. Học là sự tìm kiếm và khám phá là đặc trưng của lý thuyết học tập nào?",
    "options": ["Thuyết hành vi", "Thuyết nhận thức", "Thuyết kiến tạo", "Thuyết đa trí tuệ"],
    "correct": 2
  },
  {
    "question": "41. Kiến thức, kĩ năng, thái độ là...................để có năng lực",
    "options": ["cấu trúc", "điều kiện đủ", "điều kiện cần", "điều kiện cần và đủ"],
    "correct": 3
  },
  {
    "question": "42. Giáo viên phải tạo môi trường học tập để học sinh tìm tòi và khám phá là yêu cầu được rút ra từ lý thuyết học tập nào?",
    "options": ["Thuyết hành vi", "Thuyết nhận thức", "Thuyết kiến tạo", "Thuyết hoạt động"],
    "correct": 2
  },
  {
    "question": "43. Mục tiêu dạy học là",
    "options": ["kết quả học tập người học cần phải đạt được", "kết quả dạy học người dạy phải đạt được", "nhiệm vụ giáo viên sẽ phải thực hiện", "nhiệm vụ học sinh sẽ phải thực hiện"],
    "correct": 0
  },
  {
    "question": "44. Phát triển thế giới quan khoa học cho học sinh là yêu cầu của",
    "options": ["mục tiêu dạy học", "nội dung dạy học", "nguyên tắc dạy học", "nhiệm vụ dạy học"],
    "correct": 3
  },
  {
    "question": "45. Yêu cầu, nhiệm vụ học tập đặt ra cho học sinh do tiến trình dạy học dẫn đến là điều kiện để",
    "options": ["thực hiện các phương pháp dạy học", "thực hiện nội dung dạy học", "giải quyết mâu thuẫn cơ bản của quá trình dạy học", "sử dụng các phương tiện dạy học"],
    "correct": 2
  },
  {
    "question": "46. Phát âm rõ ràng, chính xác, tốc độ và tần số âm thanh vừa phải là yêu cầu của phương pháp dạy học nào?",
    "options": ["Phương pháp Vấn đáp", "Phương pháp Dạy học trực quan", "Phương pháp Thuyết trình", "Phương pháp Thực hành"],
    "correct": 2
  },
  {
    "question": "47. Phương tiện dạy học trực quan phải tác động nhiều nhất đến",
    "options": ["thị giác của người học", "thính giác của người học", "giác quan của người học", "sự khéo léo của người học"],
    "correct": 0
  },
  {
    "question": "48. Bản chất quá trình dạy học là quá trình tổ chức hoạt động học tập có tính.......cho học sinh",
    "options": ["độc đáo", "khoa học", "thực tiễn", "riêng biệt"],
    "correct": 0
  },
  {
    "question": "49. Kinh tế- xã hội của địa phương chưa đáp ứng được việc thực hiện chương trình dạy học của cấp học, đó là biểu hiện của mâu thuẫn nào dưới đây?",
    "options": ["Mâu thuẫn giữa nội dung dạy học với phương pháp dạy học", "Mâu thuẫn giữa mục tiêu dạy học với phương tiện dạy học", "Mâu thuẫn giữa nội dung dạy học với điều kiện kinh tế- xã hội", "Mâu thuẫn giữa phương tiện dạy học với nội dung dạy học"],
    "correct": 2
  },
  {
    "question": "50. Để phát triển năng lực hành động cho học sinh, giáo viên cần sử dụng các phương pháp dạy học nào dưới đây?",
    "options": ["Phương pháp Vấn đáp", "Phương pháp Dạy học dựa vào tình huống", "Phương pháp Thuyết trình", "Phương pháp Quan sát"],
    "correct": 1
  },
  {
    "question": "51. Động lực của quá trình dạy học là kết quả của................của quá trình dạy học.",
    "options": ["hình thành kiến thức mới", "giải quyết mâu thuẫn vốn có", "hình thành kĩ năng, kĩ xảo", "nêu vấn đề học tập"],
    "correct": 1
  },
  {
    "question": "52a. Đặc trưng của phương pháp dạy học tích cực là:",
    "options": ["Phát huy tính tích cực nhận thức cho người học", "Phát huy tính tích cực của người dạy", "Phát huy tính hiện đại của chương trình dạy học", "Phát huy tính hiện đại của phương tiện dạy học"],
    "correct": 0
  },
  {
    "question": "52b. Trong mỗi giờ học, học sinh được tư duy nhiều, được tham gia các hoạt động học tập nhiều là biểu hiện của",
    "options": ["dạy học lấy người học làm trung tâm", "dạy học lấy người dạy làm trung tâm", "dạy học lấy môi trường làm trung tâm", "dạy học lấy phương tiện trực quan làm trung tâm"],
    "correct": 0
  },
  {
    "question": "53. Quan sát - phản ánh là một khâu trong",
    "options": ["dạy học phân hóa", "dạy học tích hợp", "dạy học trải nghiệm", "dạy học tích cực"],
    "correct": 2
  },
  {
    "question": "54. Đối tượng nhận thức của học sinh là những tri thức khoa học",
    "options": ["chưa hề có với nhân loại", "đã có sẵn và mới với học sinh", "đã có sẵn và không mới với học sinh", "chưa có sẵn và mới với học sinh"],
    "correct": 1
  },
  {
    "question": "55. “Học là quá trình giải quyết vấn đề” là tư tưởng chủ đạo của lý thuyết học tập nào?",
    "options": ["Thuyết kiến tạo", "Thuyết nhận thức", "Thuyết hành vi", "Thuyết đa trí tuệ"],
    "correct": 1
  },
  {
    "question": "56. “Học tập dựa vào hiểu biết và kinh nghiệm của bản thân“ là cơ chế học tập nào ở người học?",
    "options": ["Học tập trải nghiệm", "Học tập phân hóa", "Học tập tích hợp", "Học tập đa phương tiện"],
    "correct": 0
  },
  {
    "question": "57. Trong các hình thức tổ chức dạy học dưới đây, đâu là hình thức tổ chức dạy học hiện đại?",
    "options": ["Lên lớp", "Phụ đạo", "Tham quan học tập", "B-Learning"],
    "correct": 3
  },
  {
    "question": "58. Bản chất của quá trình dạy học là",
    "options": ["quá trình tổ chức các hoạt động học tập cho học sinh", "quá trính trang bị kiến thức cho học sinh", "quá trình rèn luyện kĩ năng, kĩ xảo cho học sinh", "quá trình phát triển năng lực cho học sinh"],
    "correct": 0
  },
  {
    "question": "59. Trong quá trình dạy học, hoạt động nhận thức của người học có tính chất",
    "options": ["độc quyền", "độc đắc", "độc đáo", "độc lập"],
    "correct": 2
  },
  {
    "question": "60. Mối quan hệ giữa người dạy và người học trong quá trình dạy học là mối quan hệ",
    "options": ["phục tùng", "biện chứng", "thứ bậc", "đồng đẳng"],
    "correct": 1
  },
   {
    "question": "61. Mối quan hệ nào dưới đây thể hiện qui luật cơ bản của quá trình dạy học?",
    "options": [
      "Mối quan hệ biện chứng giữa các thành tố của quá trình dạy học",
      "Mối quan hệ biện chứng giữa nội dung, phương pháp và phương tiện dạy học",
      "Mối quan hệ biện chứng giữa người dạy và người học",
      "Mối quan hệ biện chứng giữa nội dung dạy học với người dạy và người học"
    ],
    "correct": 2
  },
  {
    "question": "62. Nguyên tắc dạy học được xây dựng trên cơ sở nào sau đây?",
    "options": ["Mục tiêu dạy học", "Qui luật dạy học", "Phương pháp dạy học", "Người dạy và người học"],
    "correct": 1
  },
  {
    "question": "63. Trong quá trình dạy học, học sinh có vai trò gì đối với hoạt động học tập của bản thân?",
    "options": ["Chủ trì", "Chủ đạo", "Chủ ý", "Chủ động"],
    "correct": 3
  },
  {
    "question": "64. Dạy học chú trọng đến quá trình tương tác giữa học sinh với môi trường học tập là yêu cầu của lý thuyết học tập nào?",
    "options": ["Thuyết đa trí tuệ", "Thuyết hành vi", "Thuyết kiến tạo", "Thuyết nhận thức"],
    "correct": 2
  },
  {
    "question": "65. Để phát triển năng lực vận dụng kiến thức vào thực tiễn và tránh trùng lặp kiến thức giữa các môn học, giáo viên nên thực hiện dạy học nào sau đây?",
    "options": ["Dạy học phân hóa", "Dạy học tích hợp", "Dạy học trải nghiệm", "Dạy học tiếp cận nội dung"],
    "correct": 1
  },
  {
    "question": "66. Quá trình dạy học muốn giúp học sinh vận dụng kiến thức vào thực tiễn cuộc sống, giáo viên cần thực hiện nguyên tắc dạy học nào?",
    "options": [
      "Đảm bảo sự thống nhất giữa tính khoa học và tính giáo dục",
      "Đảm bảo sự thống nhất giữa tính vững chắc của tri thức và mềm dẻo của tư duy",
      "Đảm bảo sự thống nhất giữa lý luận và thực tiễn",
      "Đảm bảo sự thống nhất giữa vai trò chủ đạo của người dạy và vai trò chủ động của người học"
    ],
    "correct": 2
  },
  {
    "question": "67. Dạy học vấn đáp là giáo viên sử dụng................trong quá trình dạy học.",
    "options": ["bài tập", "phương tiện trực quan", "lời nói", "câu hỏi"],
    "correct": 3
  },
  {
    "question": "68. Kết quả học tập người học cần đạt được trong dạy học là muốn nói tới thành tố nào sau đây?",
    "options": ["Mục tiêu dạy học", "Nội dung dạy học", "Phương pháp dạy học", "Hình thức tổ chức dạy học"],
    "correct": 0
  },
  {
    "question": "69. Nội dung dạy học gồm những thành phần nào sau đây?",
    "options": [
      "Hệ thống tri thức, kĩ năng kĩ xảo",
      "Hệ thống chuẩn mực, kinh nghiệm hoạt động sáng tạo",
      "Hệ thống tri thức và chuẩn mực đạo đức xã hội",
      "A và B"
    ],
    "correct": 3
  },
  {
    "question": "70. Sự phát triển trí tuệ của học sinh trong dạy học được đặc trưng bởi những dấu hiệu nào sau đây?",
    "options": [
      "Nắm vững tri thức và thao tác tư duy thành thạo",
      "Nắm vững tri thức và trình bày tri thức trôi chảy",
      "Nắm vững tri thức và biết cách vận dụng tri thức",
      "Nắm vững tri thức và thao tác kĩ năng thành thạo"
    ],
    "correct": 0
  },
  {
    "question": "71. Muốn đổi mới phương pháp dạy học, giáo viên phải chú ý đến các thành tố còn lại của quá trình dạy học, điều này thể hiện giáo viên tuân theo qui luật dạy học nào?",
    "options": [
      "Qui luật về sự thống nhất biện chứng giữa người dạy với người học",
      "Qui luật về sự thống nhất biện chứng giữa dạy học và phát triển trí tuệ",
      "Qui luật về sự thống nhất biện chứng giữa các thành tố của quá trình dạy học với nhau",
      "Qui luật về sự thống nhất biện chứng giữa các thành tố của quá trình dạy học với điều kiện xã hội"
    ],
    "correct": 2
  },
  {
    "question": "72. Học là quá trình giải quyết vấn đề là tư tưởng chủ đạo của lý thuyết học tập nào?",
    "options": ["Thuyết kiến tạo", "Thuyết nhận thức", "Thuyết hành vi", "Thuyết đa trí tuệ"],
    "correct": 1
  },
  {
    "question": "73. Phương pháp dạy học nào dưới đây thuộc nhóm các phương pháp dạy học tích cực?",
    "options": ["Phương pháp thuyết trình", "Phương pháp vấn đáp", "Phương pháp dạy học dựa vào dự án", "Phương pháp dạy học thực hành"],
    "correct": 2
  },
  {
    "question": "74. Mâu thuẫn cơ bản của quá trình dạy học là",
    "options": [
      "mâu thuẫn giữa mục tiêu và nội dung dạy học",
      "mâu thuẫn giữa nội dung dạy học và phương pháp dạy học",
      "mâu thuẫn giữa người dạy với phương pháp dạy học",
      "mâu thuẫn giữa người dạy với người học"
    ],
    "correct": 3
  },
  {
    "question": "75. Nguyên tắc dạy học là những luận điểm có tính .....................của quá trình dạy học, có vai trò....................quá trình dạy học.",
    "options": [
      "qui luật.................chỉ đạo",
      "qui luật...................nền tảng",
      "qui định ..................định hướng",
      "nguyên lý.................chỉ đạo"
    ],
    "correct": 0
  },
  {
    "question": "76. Trong dạy học, phương tiện trực quan phải đảm bảo tính thẩm mỹ, tính giáo dục là yêu cầu của phương pháp dạy học nào?",
    "options": ["Phương pháp vấn đáp", "Phương pháp trực quan", "Phương pháp thực hành", "Phương pháp thuyết trình"],
    "correct": 1
  },
  {
    "question": "77. Giáo viên phải kết hợp giữa lời nói với ngôn ngữ cơ thể là yêu cầu của phương pháp dạy học nào?",
    "options": ["Phương pháp giải quyết vấn đề", "Phương pháp thuyết trình", "Phương pháp vấn đáp", "Phương pháp thực hành"],
    "correct": 1
  },
  {
    "question": "78. Các thành tố nào sau đây tạo nên tính chất 2 mặt của quá trình dạy học?",
    "options": ["Nội dung và phương pháp dạy học", "Mục tiêu và nội dung dạy học", "Hoạt động dạy và hoạt động học", "Hoạt động học và kết quả dạy học"],
    "correct": 2
  },
  {
    "question": "79. Để mâu thuẫn cơ bản được giải quyết, yêu cầu, nhiệm vụ học tập giao cho học sinh cần",
    "options": [
      "khó hơn một chút so với khả năng nhận thức của học sinh",
      "dễ hơn khả năng nhận thức của học sinh",
      "ngang bằng với khả năng nhận thức của học sinh",
      "khó hơn nhiều so với khả năng nhận thức của học sinh"
    ],
    "correct": 0
  },
  {
    "question": "80. Giải quyết mâu thuẫn nào của quá trình dạy học sẽ tạo nên điều kiện cho sự phát triển của quá trình dạy học?",
    "options": ["Mâu thuẫn bên trong", "Mâu thuẫn bên ngoài", "Mâu thuẫn cơ bản", "Mâu thuẫn không cơ bản"],
    "correct": 2
  },
  {
    "question": "81. Tích cực hóa hoạt động nhận thức của học sinh là một khâu thuộc về",
    "options": ["bản chất của quá trình dạy học", "động lực của quá trình dạy học", "nhiệm vụ dạy học", "logic quá trình dạy học"],
    "correct": 3
  },
  {
    "question": "82. Trong quá trình dạy học, giáo viên tổ chức cho học sinh vận dụng kiến thức vào thực tiễn, điều này chứng tỏ giáo viên đã vận dụng nguyên tắc dạy học nào?",
    "options": [
      "Nguyên tắc đảm bảo sự thống nhất biện chứng giữa tính vừa sức chung và vừa sức riêng",
      "Nguyên tắc đảm bảo sự thống nhất biện chứng giữa người dạy với người học",
      "Nguyên tắc đảm bảo sự thống nhất biện chứng giữa lý luận và thực tiễn",
      "Nguyên tắc đảm bảo chuyển từ quá trình dạy - học sang quá trình dạy - tự học"
    ],
    "correct": 2
  },
  {
    "question": "83. Sắp xếp theo thứ tự đúng theo logic của quá trình dạy học",
    "options": [
      "Tổ chức cho học sinh lĩnh hội tri thức mới",
      "Tổ chức cho học sinh tự kiểm tra, tự đánh giá",
      "Tích cực hóa hoạt động nhận thức của học sinh",
      "Tổ chức cho học sinh rèn luyện kĩ năng, kĩ xảo"
    ],
    "correct": 2
  },
  {
    "question": "84. Trong quá trình dạy học, giáo viên không làm hộ, làm thay học sinh là biểu hiện của vận dụng nguyên tắc dạy học nào?",
    "options": [
      "Đảm bảo sự thống nhất biện chứng giữa tính khoa học và tính giáo dục",
      "Đảm bảo sự thống nhất biện chứng giữa lý luận và thực tiễn",
      "Đảm bảo sự thống nhất biện chứng giữa vai trò chủ đạo của người dạy và vai trò chủ động của người học",
      "Đảm bảo sự thống nhất biện chứng giữa tính vững chắc của tri thức và tính mềm dẻo của tư duy"
    ],
    "correct": 2
  },
  {
    "question": "85. Yêu cầu sử dụng của phương pháp dạy học trực quan tập trung vào",
    "options": [
      "ngôn ngữ của giáo viên",
      "phương tiện trực quan",
      "câu hỏi vấn đáp",
      "không gian lớp học"
    ],
    "correct": 1
  },
  {
    "question": "86. Kết quả hoạt động học tập phụ thuộc vào quá trình tư duy của học sinh là đặc trưng cơ bản của lý thuyết học tập nào?",
    "options": [
      "Thuyết hành vi",
      "Thuyết kiến tạo",
      "Thuyết nhận thức",
      "Thuyết đa trí tuệ"
    ],
    "correct": 2
  },
  {
    "question": "87. Đâu là mâu thuẫn cơ bản của quá trình dạy học?",
    "options": [
      "Mâu thuẫn giữa mục tiêu với nội dung dạy học",
      "Mâu thuẫn giữa nội dung với phương pháp dạy học",
      "Mâu thuẫn giữa hoạt động dạy với hoạt động học",
      "Mâu thuẫn giữa mục tiêu dạy học với kết quả dạy học"
    ],
    "correct": 2
  },
  {
    "question": "88. Để tạo nên động lực chủ yếu của quá trình dạy học, cần giải quyết mâu thuẫn nào dưới đây của quá trình dạy học?",
    "options": [
      "Mâu thuẫn giữa người dạy và người học",
      "Mâu thuẫn giữa người dạy với phương pháp dạy học",
      "Mâu thuẫn giữa phương pháp và phương tiện dạy học",
      "Mâu thuẫn giữa nội dung dạy học với sự tiến bộ của khoa học - công nghệ"
    ],
    "correct": 1
  },
  {
    "question": "89. Quá trình dạy học có nhiệm vụ nào sau đây?",
    "options": [
      "Tổ chức cho học sinh lĩnh hội kiến thức rèn luyện kĩ năng",
      "Phát triển trí tuệ cho học sinh",
      "Củng cố kiến thức kiến thức, kĩ năng, kĩ xảo.",
      "A và B"
    ],
    "correct": 3
  },
  {
    "question": "90. Các thành tố nào sau đây tạo nên tính chất 2 mặt của quá trình dạy học?",
    "options": [
      "Nội dung và phương pháp dạy học",
      "Mục tiêu và nội dung dạy học",
      "Hoạt động dạy và hoạt động học",
      "Hoạt động học và kết quả dạy học"
    ],
    "correct": 2
  },
  {
    "question": "91. Tích cực hóa hoạt động nhận thức của học sinh là một khâu thuộc về",
    "options": [
      "bản chất của quá trình dạy học",
      "động lực của quá trình dạy học",
      "nhiệm vụ dạy học",
      "logic quá trình dạy học"
    ],
    "correct": 3
  },
  {
    "question": "92. Trong quá trình dạy học, giáo viên không được tạo nên bầu không khí lớp học căng thẳng, là yêu cầu của nguyên tắc dạy học nào?",
    "options": [
      "Nguyên tắc đảm bảo sự thống nhất biện chứng giữa tính vừa sức trong dạy học",
      "Nguyên tắc đảm bảo sự thống nhất biện chứng giữa người dạy với người học",
      "Nguyên tắc đảm bảo sự cảm xúc tích cực trong dạy học",
      "Nguyên tắc đảm bảo chuyển từ quá trình dạy - học sang quá trình dạy - tự học"
    ],
    "correct": 2
  },
  {
    "question": "93. Trong quá trình dạy học, giáo viên không làm hộ, làm thay học sinh là biểu hiện của vận dụng nguyên tắc dạy học nào?",
    "options": [
      "Đảm bảo sự thống nhất biện chứng giữa tính khoa học và tính giáo dục",
      "Đảm bảo sự thống nhất biện chứng giữa lý luận và thực tiễn",
      "Đảm bảo sự thống nhất biện chứng giữa vai trò chủ đạo của người dạy và vai trò chủ động của người học",
      "Đảm bảo sự thống nhất biện chứng giữa tính vững chắc của tri thức và tính mềm dẻo của tư duy"
    ],
    "correct": 2
  },
  {
    "question": "94. Yêu cầu sử dụng của phương pháp dạy học vấn đáp tập trung vào",
    "options": [
      "ngôn ngữ của giáo viên",
      "phương tiện trực quan",
      "hệ thống câu hỏi",
      "không gian lớp học"
    ],
    "correct": 2
  },
  {
    "question": "95. Kết quả hoạt động học tập phụ thuộc vào tính tích cực tương tác của cá nhân với môi trường học tập, là đặc trưng cơ bản của lý thuyết học tập nào?",
    "options": [
      "Thuyết hành vi",
      "Thuyết kiến tạo",
      "Thuyết nhận thức",
      "Thuyết đa trí tuệ"
    ],
    "correct": 1
  },
  {
    "question": "96. Kĩ thuật dạy học là những ................của giáo viên và học sinh nhằm thực hiện và điều khiển quá trình dạy học",
    "options": [
      "hành động",
      "hoạt động",
      "thao tác hành động nhỏ",
      "thao tác hành động"
    ],
    "correct": 3
  },
  {
    "question": "97. Phương pháp Thuyết trình là phương pháp dạy học ở cấp độ",
    "options": [
      "vĩ mô",
      "trung gian",
      "vi mô",
      "không thuộc 3 cấp độ trên"
    ],
    "correct": 1
  }
]


const quizForm = document.getElementById("quizForm");

function renderQuestions() {
  quizForm.innerHTML = "";
  questions.forEach((q, index) => {
    const optionsHTML = q.options.map((opt, i) => `
      <label data-q="${index}" data-option="${i}">
        <input type="radio" name="q${index}" value="${i}"> ${opt}
      </label>
    `).join("");

    quizForm.innerHTML += `
      <div class="question-block" id="q${index}">
        <p><strong>Câu ${index + 1}:</strong> ${q.question}</p>
        <div class="options">${optionsHTML}</div>
        <hr>
      </div>
    `;
  });
}

function login() {
  const name = document.getElementById("username").value.trim();
  const studentId = document.getElementById("studentId").value.trim();
  const studentClass = document.getElementById("studentClass").value.trim();
  const now = new Date();

  if (name === "" || studentId === "" || studentClass === "") {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  // Ẩn login, hiển thị phần làm bài và thông tin
  document.getElementById("login-container").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
  document.getElementById("student-info-box").style.display = "block";

  document.getElementById("display-username").innerText = name;
  document.getElementById("display-student-id").innerText = studentId;
  document.getElementById("display-student-class").innerText = studentClass;

  document.getElementById("start-time").innerText = now.toLocaleTimeString() + " " + now.toLocaleDateString();

  renderQuestions();
}

function submitQuiz() {
  let correct = 0;
  const questionsToUse = window.shuffledQuestions || questions;

  questionsToUse.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    const selectedIndex = selected ? parseInt(selected.value) : null;
    const correctIndex = q.correct;

    const labels = document.querySelectorAll(`#q${index} label`);

    labels.forEach(label => {
      const optIdx = parseInt(label.getAttribute("data-option"));
      label.classList.remove("highlight-correct", "highlight-wrong");

      if (optIdx === correctIndex) {
        label.classList.add("highlight-correct");
      }

      if (optIdx === selectedIndex && selectedIndex !== correctIndex) {
        label.classList.add("highlight-wrong");
      }
    });

    if (selectedIndex === correctIndex) {
      correct++;
      document.getElementById(`q${index}`).classList.add("correct");
    } else {
      document.getElementById(`q${index}`).classList.add("incorrect");
    }

    const answerNote = document.createElement("p");
    answerNote.classList.add("answer-note");
    answerNote.innerHTML = `✅ Đúng: <b>${q.options[correctIndex]}</b> | 📝 Bạn chọn: <b>${selected ? q.options[selectedIndex] : "Không chọn"}</b>`;
    document.getElementById(`q${index}`).appendChild(answerNote);
  });

  const total = questionsToUse.length;
  const wrong = total - correct;
  const percent = ((correct / total) * 100).toFixed(1);
  const score = ((correct / total) * 10).toFixed(2); // Thang điểm 10

  document.getElementById("result").innerHTML = `
    <div class="result-table">
      <h3>📊 Kết quả</h3>
      <ul>
        <li>✅ Số câu đúng: <b>${correct}</b></li>
        <li>❌ Số câu sai: <b>${wrong}</b></li>
        <li>📈 Tỉ lệ đúng: <b>${percent}%</b></li>
        <li>🎯 Điểm số: <b>${score} / 10</b></li>
      </ul>
    </div>
  `;

  document.querySelectorAll("input[type='radio']").forEach(r => r.disabled = true);
}


function resetQuiz() {
  document.getElementById("result").innerText = "";
  renderQuestions();
  window.scrollTo(0, 0);
}
function makeDraggable(elementId) {
  const el = document.getElementById(elementId);
  let isDragging = false;
  let offsetX, offsetY;

  el.addEventListener("mousedown", function (e) {
    isDragging = true;
    offsetX = e.clientX - el.getBoundingClientRect().left;
    offsetY = e.clientY - el.getBoundingClientRect().top;
    el.style.transition = "none";
  });

  document.addEventListener("mousemove", function (e) {
    if (isDragging) {
      el.style.left = e.clientX - offsetX + "px";
      el.style.top = e.clientY - offsetY + "px";
    }
  });

  document.addEventListener("mouseup", function () {
    isDragging = false;
  });
}

// Gọi sau khi trang load
window.addEventListener("DOMContentLoaded", () => {
  makeDraggable("student-info-box");
});
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
function renderQuestions() {
  quizForm.innerHTML = "";

  // ✅ Clone và shuffle câu hỏi
  const shuffledQuestions = JSON.parse(JSON.stringify(questions));
  shuffleArray(shuffledQuestions);

  shuffledQuestions.forEach((q, index) => {
    // Gắn nhãn từng option với đúng/sai
    const optionsWithFlag = q.options.map((opt, i) => ({
      text: opt,
      isCorrect: i === q.correct
    }));

    // ✅ Shuffle đáp án
    shuffleArray(optionsWithFlag);

    // ✅ Cập nhật lại options và đáp án đúng
    const newOptions = optionsWithFlag.map(o => o.text);
    const newCorrect = optionsWithFlag.findIndex(o => o.isCorrect);

    q.options = newOptions;
    q.correct = newCorrect;

    const optionsHTML = q.options.map((opt, i) => `
      <label data-q="${index}" data-option="${i}">
        <input type="radio" name="q${index}" value="${i}">
        ${opt}
      </label>
    `).join("");

    quizForm.innerHTML += `
      <div class="question-block" id="q${index}">
        <p><strong>Câu ${index + 1}:</strong> ${q.question}</p>
        <div class="options">${optionsHTML}</div>
        <hr>
      </div>
    `;

    // Lưu lại để chấm đúng (gắn từng câu lại)
    shuffledQuestions[index].correct = q.correct;
    shuffledQuestions[index].options = q.options;
  });

  // Lưu lại danh sách đã xáo để dùng khi chấm
  window.shuffledQuestions = shuffledQuestions;
}
function submitQuiz() {
  let correct = 0;
  const questionsToUse = window.shuffledQuestions || questions;

  questionsToUse.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    const selectedIndex = selected ? parseInt(selected.value) : null;
    const correctIndex = q.correct;

    const labels = document.querySelectorAll(`#q${index} label`);

    labels.forEach(label => {
      const optIdx = parseInt(label.getAttribute("data-option"));
      label.classList.remove("highlight-correct", "highlight-wrong");

      if (optIdx === correctIndex) label.classList.add("highlight-correct");
      if (optIdx === selectedIndex && selectedIndex !== correctIndex)
        label.classList.add("highlight-wrong");
    });

    if (selectedIndex === correctIndex) correct++;

    const answerNote = document.createElement("p");
    answerNote.classList.add("answer-note");
    answerNote.innerHTML = `✅ Đúng: <b>${q.options[correctIndex]}</b> | 📝 Bạn chọn: <b>${selected ? q.options[selectedIndex] : "Không chọn"}</b>`;
    document.getElementById(`q${index}`).appendChild(answerNote);
    document.getElementById("result-box").style.display = "block";

  });

  const total = questionsToUse.length;
  const wrong = total - correct;
  const percent = ((correct / total) * 100).toFixed(1);
  const score = ((correct / total) * 10).toFixed(2);

  // Cập nhật nội dung kết quả
  const resultContent = document.getElementById("result-content");
  resultContent.innerHTML = `
    <strong>📊 KẾT QUẢ:</strong>
    ✅ Đúng: <b>${correct}/${total}</b><br>
    ❌ Sai: <b>${wrong}</b><br>
    📈 Chính xác: <b>${percent}%</b><br>
    🎯 Điểm: <b>${score}/10</b>
  `;
  document.getElementById("result-box").style.display = "block";

  document.querySelectorAll("input[type='radio']").forEach(r => r.disabled = true);
}
function closeResult() {
  document.getElementById("result-box").style.display = "none";
}

// Kéo thả result-box
const dragElement = (elmnt) => {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();

    pos3 = e.clientX;
    pos4 = e.clientY;

    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;

    pos3 = e.clientX;
    pos4 = e.clientY;

    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
};

window.onload = () => {
  dragElement(document.getElementById("result-box"));
};
document.getElementById("result-content").innerHTML = `
  <strong>📊 KẾT QUẢ:</strong>
  ✅ Đúng: <b>${correct}/${questionsToUse.length}</b><br>
  ❌ Sai: <b>${questionsToUse.length - correct}</b><br>
  📈 Chính xác: <b>${((correct / questionsToUse.length) * 100).toFixed(1)}%</b><br>
  🎯 Điểm: <b>${((correct / questionsToUse.length) * 10).toFixed(2)}/10</b>
`;
document.getElementById("result-box").style.display = "block";
function closeResult() {
  document.getElementById("result-box").style.display = "none";
}
window.onload = function () {
  const resultBox = document.getElementById("result-box");
  let isDown = false, offset = [0, 0];

  resultBox.addEventListener('mousedown', function(e) {
    isDown = true;
    offset = [resultBox.offsetLeft - e.clientX, resultBox.offsetTop - e.clientY];
  }, true);

  document.addEventListener('mouseup', function() { isDown = false; }, true);

  document.addEventListener('mousemove', function(e) {
    if (isDown) {
      resultBox.style.left = (e.clientX + offset[0]) + 'px';
      resultBox.style.top = (e.clientY + offset[1]) + 'px';
      resultBox.style.bottom = 'auto'; // bỏ neo dưới nếu di chuyển
      resultBox.style.right = 'auto';
    }
  }, true);
};

