document.addEventListener('DOMContentLoaded', function() {
  const sampleData = [
    {
        id: 1,
        code: 'BT001',
        image: 'assets/img/giaidoc.jpg',
        name: 'Thanh nhiệt giải độc',
        price: 740000,
        date: "2024-06-02",
        description: 'Bài thuốc giúp thanh lọc cơ thể, giảm nóng trong, làm mát gan, lợi tiểu. Thích hợp cho những người thường xuyên bị nóng trong, da khô ráp, hay bị mụn nhọt, và muốn cải thiện sức khỏe tổng quát. Sử dụng đều đặn sẽ giúp cơ thể cảm thấy nhẹ nhàng, dễ chịu và tươi mới hơn. Bài thuốc cũng có tác dụng hỗ trợ chức năng gan, thận và cải thiện hệ tiêu hóa.',
        ingredients: [
            { id: 1, name: "Cam thảo", quantity: 12, price: 5000 },
            { id: 7, name: "Râu ngô", quantity: 10, price: 8000 },
            { id: 24, name: "Diệp hạ châu", quantity: 8, price: 10000 },
            { id: 25, name: "Nhân trần", quantity: 10, price: 8500 },
            { id: 23, name: "Sài đất", quantity: 15, price: 13500 },
            { id: 21, name: "Râu ngô", quantity: 7, price: 5600 },
            { id: 27, name: "Thổ phục linh", quantity: 9, price: 11700 },
            { id: 28, name: "Ý dĩ", quantity: 8, price: 10000 }
        ],
        usage: 'Pha 10g hỗn hợp thuốc với 200ml nước sôi. Uống 2 lần mỗi ngày sau bữa ăn. Sử dụng liên tục trong 2 tuần để đạt hiệu quả tối ưu.'
    },
    {
        id: 2,
        code: 'BT002',
        image: 'assets/img/bothan.jpg',
        name: 'Bổ thận tráng dương',
        price: 760000,
        date: "2024-06-05",
        description: 'Bài thuốc này giúp bổ thận, tráng dương, tăng cường sinh lực. Thích hợp cho nam giới có vấn đề về sinh lý, yếu sinh lý, và những người muốn tăng cường sức khỏe sinh dục. Các thành phần trong bài thuốc hỗ trợ tăng cường hormone nam, cải thiện sức khỏe toàn diện và giảm mệt mỏi. Ngoài ra, bài thuốc còn giúp tăng cường chức năng thận, tăng cường sức đề kháng và cải thiện chất lượng giấc ngủ.',
        ingredients: [
            { id: 9, name: "Nhục thung dung", quantity: 5, price: 12500 },
            { id: 11, name: "Ba kích", quantity: 6, price: 13000 },
            { id: 22, name: "Hà thủ ô", quantity: 4, price: 9000 },
            { id: 12, name: "Mạch môn", quantity: 10, price: 16000 },
            { id: 13, name: "Thiên môn", quantity: 9, price: 18000 },
            { id: 10, name: "Câu kỷ tử", quantity: 8, price: 16000 },
            { id: 8, name: "Đỗ trọng", quantity: 7, price: 11000 },
            { id: 26, name: "Bạch hoa xà thiệt thảo", quantity: 6, price: 10000 }
        ],
        usage: 'Nấu 15g hỗn hợp thuốc với 500ml nước. Đun sôi trong 20 phút, để nguội và uống 3 lần mỗi ngày. Nên uống trước bữa ăn sáng, trưa và tối.'
    },
    {
        id: 3,
        code: 'BT003',
        image: 'assets/img/bokhi.jpg',
        name: 'Bổ khí huyết',
        price: 1810000,
        date: "2024-06-10",
        description: 'Bài thuốc bổ khí huyết giúp tăng cường sức khỏe, cải thiện lưu thông máu và nâng cao sức đề kháng. Phù hợp cho những người bị suy nhược cơ thể, mệt mỏi kéo dài, và cần hồi phục sau bệnh tật. Thành phần chính trong bài thuốc giúp bồi bổ khí huyết, tăng cường chức năng các cơ quan nội tạng và nâng cao sức khỏe tổng quát. Sử dụng đều đặn sẽ giúp cơ thể trở nên khỏe mạnh, đầy năng lượng và tinh thần minh mẫn.',
        ingredients: [
            { id: 2, name: "Đương quy", quantity: 15, price: 20000 },
            { id: 3, name: "Hoàng kỳ", quantity: 20, price: 30000 },
            { id: 4, name: "Bạch thược", quantity: 12, price: 15000 },
            { id: 5, name: "Xuyên khung", quantity: 10, price: 13000 },
            { id: 6, name: "Địa hoàng", quantity: 8, price: 18000 },
            { id: 14, name: "Bạch truật", quantity: 11, price: 14000 },
            { id: 20, name: "Ngưu tất", quantity: 10, price: 15000 },
            { id: 19, name: "Đan sâm", quantity: 8, price: 19000 }
        ],
        usage: 'Pha 15g hỗn hợp thuốc với 200ml nước sôi. Uống 2 lần mỗi ngày sau bữa ăn. Duy trì sử dụng trong 2 tuần để đạt hiệu quả tối ưu.'
    },
    {
        id: 4,
        code: 'BT004',
        image: 'assets/img/bonao.jpg',
        name: 'An thần bổ não',
        price: 1020000,
        date: "2024-06-12",
        description: 'Bài thuốc an thần bổ não giúp cải thiện giấc ngủ, giảm căng thẳng, lo âu, và tăng cường trí nhớ. Thích hợp cho những người thường xuyên mất ngủ, căng thẳng tinh thần, và người cao tuổi cần bổ sung dưỡng chất cho não bộ. Các thành phần trong bài thuốc giúp an thần, cải thiện tuần hoàn não, và tăng cường sức khỏe tinh thần. Sử dụng thường xuyên sẽ giúp cơ thể cảm thấy thư giãn, giấc ngủ sâu hơn và tinh thần sảng khoái.',
        ingredients: [
            { id: 1, name: "Cam thảo", quantity: 10, price: 5000 },
            { id: 15, name: "Sa nhân", quantity: 8, price: 15000 },
            { id: 16, name: "Trần bì", quantity: 10, price: 9000 },
            { id: 17, name: "Hương phụ", quantity: 13, price: 11000 },
            { id: 18, name: "Quế chi", quantity: 12, price: 12000 },
            { id: 12, name: "Mạch môn", quantity: 10, price: 16000 },
            { id: 13, name: "Thiên môn", quantity: 9, price: 18000 },
            { id: 14, name: "Bạch truật", quantity: 11, price: 14000 }
        ],
        usage: 'Nấu 20g hỗn hợp thuốc với 600ml nước. Đun sôi trong 30 phút, lọc lấy nước uống 2 lần mỗi ngày sau bữa ăn. Duy trì liên tục trong 3 tuần.'
    },
    {
        id: 5,
        code: 'BT005',
        image: 'assets/img/cuongthan.jpg',
        name: 'Cường thân kiện thể',
        price: 680000,
        date: "2024-06-15",
        description: 'Bài thuốc cường thân kiện thể giúp tăng cường sức mạnh cơ bắp, cải thiện sức bền và thể lực. Phù hợp cho những người luyện tập thể thao, cần bổ sung năng lượng và dưỡng chất để cơ thể luôn khỏe mạnh và dẻo dai. Thành phần trong bài thuốc giúp tăng cường lưu thông máu, cung cấp năng lượng cho cơ bắp, và giảm mệt mỏi sau khi luyện tập. Sử dụng thường xuyên sẽ giúp cơ thể trở nên khỏe mạnh, năng động và có sức bền tốt hơn.',
        ingredients: [
            { id: 1, name: "Cam thảo", quantity: 10, price: 5000 },
            { id: 7, name: "Râu ngô", quantity: 10, price: 8000 },
            { id: 9, name: "Nhục thung dung", quantity: 5, price: 12500 },
            { id: 11, name: "Ba kích", quantity: 6, price: 13800 },
            { id: 22, name: "Hà thủ ô", quantity: 4, price: 8800 },
            { id: 13, name: "Thiên môn", quantity: 9, price: 18000 },
            { id: 10, name: "Câu kỷ tử", quantity: 8, price: 16000 },
            { id: 28, name: "Ý dĩ", quantity: 8, price: 10000 }
        ],
        usage: 'Hòa 10g hỗn hợp thuốc vào 300ml nước ấm. Uống 2 lần mỗi ngày vào buổi sáng và buổi tối. Sử dụng liên tục trong 2 tuần.'
    },
    {
        id: 6,
        code: 'BT006',
        image: 'assets/img/dauvaigay.jpg',
        name: 'Giảm đau vai gáy',
        price: 960000,
        date: "2024-06-03",
        description: 'Bài thuốc này giúp giảm đau vai gáy, cải thiện tuần hoàn máu và giảm căng thẳng cơ bắp. Thích hợp cho những người thường xuyên phải làm việc nhiều với máy tính hoặc có thói quen ngồi không đúng tư thế, dẫn đến đau vai gáy. Sử dụng đều đặn sẽ giúp giảm hẳn triệu chứng đau mỏi, cảm thấy thoải mái và dễ chịu hơn trong công việc hàng ngày.',
        ingredients: [
            { id: 3, name: "Hoàng kỳ", quantity: 10, price: 15000 },
            { id: 9, name: "Nhục thung dung", quantity: 8, price: 25000 },
            { id: 14, name: "Bạch truật", quantity: 12, price: 14000 },
            { id: 15, name: "Sa nhân", quantity: 10, price: 15000 },
            { id: 20, name: "Ngưu tất", quantity: 9, price: 15000 },
            { id: 30, name: "Bạch chỉ", quantity: 7, price: 14000 },
            { id: 18, name: "Quế chi", quantity: 5, price: 12000 }
        ],
        usage: 'Pha 12g hỗn hợp thuốc với 250ml nước sôi. Uống 2 lần mỗi ngày sau bữa ăn. Sử dụng liên tục trong 1 tháng để đạt hiệu quả tối ưu.'
    },
    {
        id: 7,
        code: 'BT007',
        image: 'assets/img/tieuhoa.jpg',
        name: 'Cải thiện tiêu hóa',
        price: 930000,
        date: "2024-06-03",
        description: 'Bài thuốc giúp cải thiện chức năng tiêu hóa, giảm triệu chứng đầy hơi, khó tiêu, và cải thiện chức năng của dạ dày và ruột. Đặc biệt hữu ích cho những người có hệ tiêu hóa yếu, thường xuyên bị khó tiêu hoặc đầy bụng sau khi ăn. Sử dụng bài thuốc này đều đặn sẽ giúp hệ tiêu hóa hoạt động tốt hơn, cảm thấy dễ chịu và thoải mái hơn sau mỗi bữa ăn.',
        ingredients: [
            { id: 2, name: "Đương quy", quantity: 8, price: 20000 },
            { id: 6, name: "Địa hoàng", quantity: 10, price: 18000 },
            { id: 17, name: "Hương phụ", quantity: 12, price: 11000 },
            { id: 16, name: "Trần bì", quantity: 9, price: 10000 },
            { id: 11, name: "Ba kích", quantity: 7, price: 23000 },
            { id: 27, name: "Thổ phục linh", quantity: 8, price: 13000 },
            { id: 26, name: "Bạch hoa xà thiệt thảo", quantity: 10, price: 11000 }
        ],
        usage: 'Nấu 18g hỗn hợp thuốc với 700ml nước. Đun sôi trong 25 phút, để nguội và uống 2 lần mỗi ngày sau bữa ăn. Sử dụng liên tục trong 3 tuần.'
    },
    {
        id: 8,
        code: 'BT008',
        image: 'assets/img/xuongkhop.jpg',
        name: 'Giảm đau nhức xương khớp',
        price: 1000000,
        date: "2024-06-03",
        description: 'Bài thuốc này có tác dụng giảm đau nhức xương khớp, cải thiện linh hoạt và hỗ trợ điều trị viêm khớp. Đặc biệt thích hợp cho người cao tuổi, những người bị viêm khớp mãn tính hoặc những người thường xuyên phải lao động nặng. Sử dụng đều đặn sẽ giúp giảm hẳn các triệu chứng đau nhức, tăng cường sức mạnh và sự linh hoạt của các khớp xương.',
        ingredients: [
            { id: 1, name: "Nhân sâm", quantity: 5, price: 50000 },
            { id: 10, name: "Câu kỷ tử", quantity: 7, price: 20000 },
            { id: 8, name: "Đỗ trọng", quantity: 8, price: 17000 },
            { id: 28, name: "Ý dĩ", quantity: 11, price: 10000 },
            { id: 29, name: "Thục địa", quantity: 6, price: 16000 },
            { id: 12, name: "Mạch môn", quantity: 9, price: 16000 },
            { id: 13, name: "Thiên môn", quantity: 7, price: 18000 }
        ],
        usage: 'Pha 10g hỗn hợp thuốc với 200ml nước ấm. Uống 2 lần mỗi ngày trước bữa ăn sáng và tối. Duy trì sử dụng trong 2 tuần.'
    },
    {
        id: 9,
        code: 'BT009',
        image: 'assets/img/tieuduong.jpg',
        name: 'Hỗ trợ điều trị tiểu đường',
        price: 660000,
        date: "2024-06-03",
        description: 'Bài thuốc này hỗ trợ điều trị tiểu đường, giúp ổn định đường huyết và cải thiện chức năng gan, thận. Thích hợp cho những người bị tiểu đường hoặc có nguy cơ cao mắc tiểu đường. Sử dụng bài thuốc này đều đặn sẽ giúp ổn định lượng đường trong máu, tăng cường sức khỏe và giảm thiểu các biến chứng do bệnh tiểu đường gây ra.',
        ingredients: [
            { id: 4, name: "Bạch thược", quantity: 10, price: 12000 },
            { id: 5, name: "Xuyên khung", quantity: 7, price: 13000 },
            { id: 18, name: "Quế chi", quantity: 5, price: 12000 },
            { id: 14, name: "Bạch truật", quantity: 8, price: 14000 },
            { id: 23, name: "Sài đất", quantity: 12, price: 9000 },
            { id: 30, name: "Bạch chỉ", quantity: 6, price: 14000 },
            { id: 25, name: "Nhân trần", quantity: 10, price: 8500 }
        ],
        usage: 'Nấu 15g hỗn hợp thuốc với 500ml nước. Đun sôi trong 20 phút, để nguội và uống 2 lần mỗi ngày sau bữa ăn. Sử dụng liên tục trong 1 tháng.'
    },
    {
        id: 10,
        code: 'BT010',
        image: 'assets/img/sinhly.jpg',
        name: 'Tăng cường sinh lý nam',
        price: 1050000,
        date: "2024-06-03",
        description: 'Bài thuốc này giúp tăng cường sinh lý nam, cải thiện chất lượng tinh trùng và tăng cường sức khỏe sinh sản. Đặc biệt hữu ích cho những người gặp vấn đề về yếu sinh lý, tinh trùng yếu hoặc muốn cải thiện sức khỏe sinh sản. Sử dụng bài thuốc này đều đặn sẽ giúp cải thiện rõ rệt về sinh lý, tăng cường sức khỏe và sự tự tin trong đời sống vợ chồng.',
        ingredients: [
            { id: 11, name: "Ba kích", quantity: 6, price: 23000 },
            { id: 19, name: "Đan sâm", quantity: 7, price: 19000 },
            { id: 9, name: "Nhục thung dung", quantity: 5, price: 25000 },
            { id: 1, name: "Nhân sâm", quantity: 5, price: 50000 },
            { id: 10, name: "Câu kỷ tử", quantity: 8, price: 20000 },
            { id: 2, name: "Đương quy", quantity: 7, price: 20000 },
            { id: 8, name: "Đỗ trọng", quantity: 6, price: 17000 }
        ],
        usage: 'Pha 8g hỗn hợp thuốc với 250ml nước sôi. Uống 1 lần mỗi ngày trước khi đi ngủ. Duy trì sử dụng trong 2 tuần.'
    },
    {
        id: 11,
        code: 'BT011',
        image: 'assets/img/momau.jpg',
        name: 'Giảm mỡ máu',
        price: 780000,
        date: "2024-06-03",
        description: 'Bài thuốc này giúp giảm mỡ máu, tăng cường sức khỏe tim mạch và giảm nguy cơ mắc các bệnh về tim. Thích hợp cho những người có lượng mỡ máu cao, nguy cơ mắc bệnh tim mạch cao hoặc muốn duy trì sức khỏe tim mạch tốt. Sử dụng đều đặn sẽ giúp cải thiện sức khỏe tổng quát, giảm nguy cơ mắc bệnh và cảm thấy khỏe mạnh hơn mỗi ngày.',
        ingredients: [
            { id: 6, name: "Địa hoàng", quantity: 8, price: 18000 },
            { id: 15, name: "Sa nhân", quantity: 7, price: 15000 },
            { id: 17, name: "Hương phụ", quantity: 10, price: 11000 },
            { id: 22, name: "Hà thủ ô", quantity: 6, price: 22000 },
            { id: 26, name: "Bạch hoa xà thiệt thảo", quantity: 9, price: 11000 },
            { id: 28, name: "Ý dĩ", quantity: 8, price: 10000 },
            { id: 29, name: "Ngưu tất", quantity: 7, price: 16000 }
        ],
         usage: 'Nấu 12g hỗn hợp thuốc với 400ml nước. Đun sôi trong 20 phút, lọc lấy nước uống 2 lần mỗi ngày sau bữa ăn. Sử dụng liên tục trong 3 tuần.'
    },
    {
        id: 12,
        code: 'BT012',
        image: 'assets/img/trinho.jpg',
        name: 'Tăng cường trí nhớ',
        price: 950000,
        date: "2024-06-03",
        description: 'Bài thuốc này giúp tăng cường trí nhớ, cải thiện khả năng tập trung và giảm thiểu triệu chứng suy giảm trí nhớ. Đặc biệt hữu ích cho những người làm việc trí óc nhiều, học sinh, sinh viên hoặc những người lớn tuổi có dấu hiệu suy giảm trí nhớ. Sử dụng bài thuốc này đều đặn sẽ giúp cải thiện khả năng ghi nhớ, tăng cường sự tỉnh táo và hiệu quả trong công việc, học tập.',
        ingredients: [
            { id: 1, name: "Nhân sâm", quantity: 5, price: 50000 },
            { id: 2, name: "Đương quy", quantity: 7, price: 20000 },
            { id: 12, name: "Mạch môn", quantity: 9, price: 16000 },
            { id: 13, name: "Thiên môn", quantity: 6, price: 18000 },
            { id: 5, name: "Xuyên khung", quantity: 7, price: 13000 },
            { id: 7, name: "Râu ngô", quantity: 10, price: 9000 },
            { id: 8, name: "Đỗ trọng", quantity: 8, price: 17000 }
        ],
        usage: 'Hòa 10g hỗn hợp thuốc vào 300ml nước ấm. Uống 2 lần mỗi ngày vào buổi sáng và buổi tối. Sử dụng liên tục trong 1 tháng.'
    },
    {
        id: 13,
        code: 'BT013',
        image: 'assets/img/giacngu.jpg',
        name: 'Cải thiện giấc ngủ',
        price: 720000,
        date: "2024-06-03",
        description: 'Bài thuốc này giúp cải thiện giấc ngủ, giảm triệu chứng mất ngủ và nâng cao chất lượng giấc ngủ. Thích hợp cho những người bị mất ngủ, khó ngủ hoặc thường xuyên bị gián đoạn giấc ngủ. Sử dụng bài thuốc này đều đặn sẽ giúp bạn dễ dàng đi vào giấc ngủ, ngủ sâu hơn và thức dậy với tinh thần sảng khoái, tràn đầy năng lượng.',
        ingredients: [
            { id: 3, name: "Hoàng kỳ", quantity: 7, price: 15000 },
            { id: 4, name: "Bạch thược", quantity: 6, price: 12000 },
            { id: 9, name: "Nhục thung dung", quantity: 5, price: 25000 },
            { id: 16, name: "Trần bì", quantity: 10, price: 9000 },
            { id: 18, name: "Quế chi", quantity: 5, price: 12000 },
            { id: 22, name: "Hà thủ ô", quantity: 8, price: 22000 },
            { id: 30, name: "Bạch chỉ", quantity: 7, price: 14000 }
        ],
        usage: 'Pha 8g hỗn hợp thuốc với 250ml nước ấm. Uống 1 lần trước khi đi ngủ. Sử dụng liên tục trong 1 tháng để cải thiện giấc ngủ.'
    },
    {
        id: 14,
        code: 'BT014',
        image: 'assets/img/giamcan.jpg',
        name: 'Giảm cân an toàn',
        price: 850000,
        date: "2024-06-03",
        description: 'Bài thuốc này giúp giảm cân an toàn, thanh lọc cơ thể và tăng cường quá trình trao đổi chất. Đặc biệt thích hợp cho những người muốn giảm cân một cách tự nhiên, không gây hại cho sức khỏe. Sử dụng bài thuốc này đều đặn kết hợp với chế độ ăn uống và luyện tập hợp lý sẽ giúp bạn đạt được cân nặng mong muốn, cải thiện vóc dáng và sức khỏe tổng thể.',
        ingredients: [
            { id: 6, name: "Địa hoàng", quantity: 10, price: 18000 },
            { id: 14, name: "Bạch truật", quantity: 12, price: 14000 },
            { id: 17, name: "Hương phụ", quantity: 8, price: 11000 },
            { id: 21, name: "Râu ngô", quantity: 15, price: 8000 },
            { id: 23, name: "Sài đất", quantity: 10, price: 9000 },
            { id: 25, name: "Nhân trần", quantity: 12, price: 8500 },
            { id: 27, name: "Thổ phục linh", quantity: 8, price: 13000 }
        ],
        usage: 'Nấu 18g hỗn hợp thuốc với 600ml nước. Đun sôi trong 30 phút, để nguội và uống 2 lần mỗi ngày sau bữa ăn. Sử dụng liên tục trong 1 tháng.'
    },
    {
        id: 15,
        code: 'BT015',
        image: 'assets/img/gan.jpg',
        name: 'Cải thiện chức năng gan',
        price: 670000,
        date: "2024-06-03",
        description: 'Bài thuốc này giúp cải thiện chức năng gan, thanh lọc và giải độc gan, đồng thời bảo vệ gan khỏi các tác nhân gây hại. Thích hợp cho những người có chức năng gan kém, thường xuyên sử dụng rượu bia hoặc thuốc tây. Sử dụng đều đặn sẽ giúp gan hoạt động hiệu quả hơn, cải thiện sức khỏe tổng quát và cảm thấy dễ chịu hơn.',
        ingredients: [
            { id: 5, name: "Xuyên khung", quantity: 7, price: 13000 },
            { id: 13, name: "Thiên môn", quantity: 6, price: 18000 },
            { id: 21, name: "Râu ngô", quantity: 10, price: 8000 },
            { id: 24, name: "Diệp hạ châu", quantity: 8, price: 10000 },
            { id: 25, name: "Nhân trần", quantity: 12, price: 8500 },
            { id: 26, name: "Bạch hoa xà thiệt thảo", quantity: 9, price: 11000 },
            { id: 29, name: "Ngưu tất", quantity: 7, price: 16000 }
        ],
        usage: 'Pha 10g hỗn hợp thuốc với 250ml nước ấm. Uống 2 lần mỗi ngày trước bữa ăn sáng và tối. Duy trì sử dụng trong 2 tuần.'
    },
    {
        id: 16,
        code: 'BT016',
        image: 'assets/img/dekhang.jpg',
        name: 'Tăng cường sức đề kháng',
        price: 950000,
        date: "2024-06-03",
        description: 'Bài thuốc này giúp tăng cường sức đề kháng, nâng cao khả năng chống chọi với bệnh tật và cải thiện sức khỏe tổng quát. Đặc biệt hữu ích cho những người có hệ miễn dịch yếu, dễ mắc các bệnh lây nhiễm. Sử dụng bài thuốc này đều đặn sẽ giúp cơ thể mạnh mẽ hơn, ít bị bệnh và cảm thấy tràn đầy năng lượng hơn mỗi ngày.',
        ingredients: [
            { id: 1, name: "Nhân sâm", quantity: 5, price: 50000 },
            { id: 6, name: "Địa hoàng", quantity: 10, price: 18000 },
            { id: 12, name: "Mạch môn", quantity: 9, price: 16000 },
            { id: 17, name: "Hương phụ", quantity: 7, price: 11000 },
            { id: 22, name: "Hà thủ ô", quantity: 6, price: 22000 },
            { id: 25, name: "Nhân trần", quantity: 8, price: 8500 },
            { id: 27, name: "Thổ phục linh", quantity: 8, price: 13000 }
        ],
        usage: 'Nấu 12g hỗn hợp thuốc với 500ml nước. Đun sôi trong 20 phút, để nguội và uống 2 lần mỗi ngày sau bữa ăn. Sử dụng liên tục trong 3 tuần.'
    },
    {
        id: 17,
        code: 'BT017',
        image: 'assets/img/daday.jpg',
        name: 'Giảm đau dạ dày',
        price: 580000,
        date: "2024-06-03",
        description: 'Bài thuốc này giúp giảm đau dạ dày, cải thiện chức năng tiêu hóa và làm lành niêm mạc dạ dày. Đặc biệt hữu ích cho những người bị viêm loét dạ dày, đau dạ dày mãn tính hoặc có các triệu chứng đau dạ dày sau khi ăn. Sử dụng bài thuốc này đều đặn sẽ giúp giảm hẳn các triệu chứng đau, cải thiện sức khỏe dạ dày và giúp bạn cảm thấy dễ chịu hơn.',
        ingredients: [
            { id: 4, name: "Bạch thược", quantity: 8, price: 12000 },
            { id: 7, name: "Râu ngô", quantity: 10, price: 8000 },
            { id: 16, name: "Trần bì", quantity: 9, price: 9000 },
            { id: 20, name: "Ngưu tất", quantity: 5, price: 15000 },
            { id: 23, name: "Sài đất", quantity: 12, price: 9000 },
            { id: 25, name: "Nhân trần", quantity: 10, price: 8500 },
            { id: 28, name: "Ý dĩ", quantity: 6, price: 10000 }
        ],
        usage: 'Pha 8g hỗn hợp thuốc với 300ml nước sôi. Uống 1 lần mỗi ngày trước khi đi ngủ. Duy trì sử dụng trong 1 tháng.'
    },
    {
        id: 18,
        code: 'BT018',
        image: 'assets/img/thiluc.jpg',
        name: 'Cải thiện thị lực',
        price: 730000,
        date: "2024-06-03",
        description: 'Bài thuốc này giúp cải thiện thị lực, giảm mỏi mắt và bảo vệ mắt khỏi các tác nhân gây hại. Thích hợp cho những người làm việc nhiều với máy tính, đọc sách hoặc có vấn đề về thị lực. Sử dụng bài thuốc này đều đặn sẽ giúp tăng cường sức khỏe mắt, giảm thiểu triệu chứng mỏi mắt và giúp bạn nhìn rõ hơn, mắt sáng khỏe hơn.',
        ingredients: [
            { id: 10, name: "Câu kỷ tử", quantity: 8, price: 20000 },
            { id: 14, name: "Bạch truật", quantity: 7, price: 14000 },
            { id: 15, name: "Sa nhân", quantity: 6, price: 15000 },
            { id: 19, name: "Đan sâm", quantity: 5, price: 19000 },
            { id: 26, name: "Bạch hoa xà thiệt thảo", quantity: 9, price: 11000 },
            { id: 28, name: "Ý dĩ", quantity: 10, price: 10000 },
            { id: 29, name: "Thục địa", quantity: 6, price: 16000 }
        ],
        usage: 'Nấu 15g hỗn hợp thuốc với 400ml nước. Đun sôi trong 20 phút, lọc lấy nước uống 2 lần mỗi ngày sau bữa ăn. Sử dụng liên tục trong 2 tuần.'
    },
    {
        id: 19,
        code: 'BT019',
        image: 'assets/img/stress.jpg',
        name: 'Giảm stress',
        price: 770000,
        date: "2024-06-03",
        description: 'Bài thuốc này giúp giảm stress, cân bằng tinh thần và nâng cao sức khỏe tâm lý. Đặc biệt hữu ích cho những người thường xuyên bị căng thẳng, áp lực trong công việc hoặc cuộc sống. Sử dụng bài thuốc này đều đặn sẽ giúp bạn cảm thấy thư giãn hơn, tinh thần thoải mái và lạc quan hơn, từ đó nâng cao chất lượng cuộc sống.',
        ingredients: [
            { id: 3, name: "Hoàng kỳ", quantity: 7, price: 15000 },
            { id: 8, name: "Đỗ trọng", quantity: 8, price: 17000 },
            { id: 12, name: "Mạch môn", quantity: 9, price: 16000 },
            { id: 17, name: "Hương phụ", quantity: 6, price: 11000 },
            { id: 21, name: "Râu ngô", quantity: 10, price: 8000 },
            { id: 22, name: "Hà thủ ô", quantity: 8, price: 22000 },
            { id: 30, name: "Bạch chỉ", quantity: 5, price: 14000 }
        ],
        usage: 'Hòa 10g hỗn hợp thuốc vào 200ml nước ấm. Uống 2 lần mỗi ngày vào buổi sáng và buổi tối. Sử dụng liên tục trong 1 tháng để đạt hiệu quả tối ưu.'
    },
    {
        id: 20,
        code: 'BT020',
        image: 'assets/img/nangluong.jpg',
        name: 'Tăng cường năng lượng',
        price: 990000,
        date: "2024-06-03",
        description: 'Bài thuốc này giúp tăng cường năng lượng, cải thiện sức khỏe tổng quát và giảm mệt mỏi. Thích hợp cho những người thường xuyên cảm thấy mệt mỏi, thiếu năng lượng hoặc cần tăng cường sức mạnh trong các hoạt động hàng ngày. Sử dụng bài thuốc này đều đặn sẽ giúp bạn cảm thấy tràn đầy năng lượng, sức khỏe cải thiện rõ rệt và có thể hoàn thành công việc một cách hiệu quả hơn.',
        ingredients: [
            { id: 1, name: "Nhân sâm", quantity: 5, price: 50000 },
            { id: 2, name: "Đương quy", quantity: 7, price: 20000 },
            { id: 6, name: "Địa hoàng", quantity: 10, price: 18000 },
            { id: 11, name: "Ba kích", quantity: 6, price: 23000 },
            { id: 17, name: "Hương phụ", quantity: 8, price: 11000 },
            { id: 19, name: "Đan sâm", quantity: 7, price: 19000 },
            { id: 25, name: "Nhân trần", quantity: 8, price: 8500 }
        ],
        usage: 'Pha 12g hỗn hợp thuốc với 250ml nước sôi. Uống 2 lần mỗi ngày sau bữa ăn. Duy trì sử dụng trong 3 tuần để đạt kết quả tốt nhất.'
    }
];
// Function to render the table data
function renderTableData(data) {
  const medicineTable = document.getElementById('medicineTable');
  medicineTable.innerHTML = ''; // Clear the table
  data.forEach((item, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.code}</td>
      <td><img src="${item.image}" alt="${item.name}" class="medicine-image" onclick="showModal(${item.id})"></td>
      <td>${item.name}</td>
      <td>${item.price.toLocaleString('vi-VN')}</td>
      <td>${item.date}</td>
      <td>
        <button class="btn btn-warning btn-sm" onclick="editMedicine(${item.id})"><i class="bi bi-pencil-square"></i></button>
        <button class="btn btn-danger btn-sm" onclick="deleteMedicine(${item.id})"><i class="bi bi-trash"></i></button>
      </td>
    `;
    medicineTable.appendChild(row); // Append the row to the table
  });
}

// Initial render of the table data
renderTableData(sampleData);

// Function to edit a medicine
window.editMedicine = function(id) {
  const medicine = sampleData.find(item => item.id === id);
  if (medicine) {
    document.getElementById('editMedicineId').value = medicine.id;
    document.getElementById('editMedicineName').value = medicine.name;
    document.getElementById('editMedicinePrice').value = medicine.price;
    document.getElementById('editMedicineDate').value = medicine.date;
    document.getElementById('editMedicineDescription').value = medicine.description;
    document.getElementById('editMedicineUsage').value = medicine.usage;
    renderIngredients(medicine.ingredients, medicine.id); // Render ingredients separately
    const editModal = new bootstrap.Modal(document.getElementById('editMedicineModal'));
    editModal.show();
  }
};

// Function to render the ingredients list
window.renderIngredients = function(ingredients, medicineId) {
  const editIngredientsList = document.getElementById('editMedicineIngredients');
  editIngredientsList.innerHTML = ''; // Clear the ingredients list
  ingredients.forEach((ingredient, index) => {
    const ingredientDiv = document.createElement('div');
    ingredientDiv.classList.add('ingredient-item');
    ingredientDiv.innerHTML = `
      <span>Tên:</span>
      <input type="text" value="${ingredient.name}" class="form-control ingredient-name" required>
      <span>Số lượng/ 10gram:</span>
      <input type="number" value="${ingredient.quantity}" class="form-control ingredient-quantity" required>
      <span>Đơn giá/ gram:</span>
      <input type="number" value="${ingredient.price}" class="form-control ingredient-price" required>
      <button type="button" class="btn btn-danger remove-ingredient" onclick="removeIngredient(${index}, ${medicineId})">Remove</button>
    `;
    editIngredientsList.appendChild(ingredientDiv); // Append the ingredient to the list
  });
};

// Function to remove an ingredient
window.removeIngredient = function(index, medicineId) {
  const medicine = sampleData.find(item => item.id === medicineId);
  if (medicine) {
    medicine.ingredients.splice(index, 1); // Remove the ingredient
    renderIngredients(medicine.ingredients, medicineId); // Re-render the ingredients list
    updatePrice(medicineId); // Update the price
  }
};

// Function to add a new ingredient
window.addNewIngredient = function(medicineId) {
  const medicine = sampleData.find(item => item.id === medicineId);
  if (medicine) {
    medicine.ingredients.push({ name: '', quantity: 0, price: 0 });
    renderIngredients(medicine.ingredients, medicineId); // Re-render the ingredients list
  }
};

// Attach event listener once when the document is ready
  document.getElementById('addNewIngredient').onclick = function() {
    const medicineId = document.getElementById('editMedicineId').value;
    if (medicineId) {
      addNewIngredient(Number(medicineId));
    }
  };

  document.getElementById('addIngredientButton').addEventListener('click', function() {
    const addIngredientsList = document.getElementById('addMedicineIngredients');
    const ingredientDiv = document.createElement('div');
    ingredientDiv.classList.add('ingredient-item');
    ingredientDiv.innerHTML = `
      <input type="text" class="form-control ingredient-name" placeholder="Tên vị thuốc" required>
      <input type="number" class="form-control ingredient-quantity" placeholder="Số lượng/ 10gram" required>
      <input type="number" class="form-control ingredient-price" placeholder="Đơn giá/ gram" required>
      <button type="button" class="btn btn-danger remove-ingredient" onclick="removeIngredientDiv(this)">Remove</button>
    `;
    addIngredientsList.appendChild(ingredientDiv); // Append the new ingredient to the list
  });

// Function to remove an ingredient div (for Add Medicine Modal)
window.removeIngredientDiv = function(element) {
  element.parentElement.remove();
};

// Function to update the price of the medicine
window.updatePrice = function(medicineId) {
  const medicine = sampleData.find(item => item.id === medicineId);
  if (medicine) {
    let totalPrice = 0;
    medicine.ingredients.forEach(ingredient => {
      totalPrice += ingredient.price * ingredient.quantity; // Calculate the total price
    });
    medicine.price = totalPrice;
    document.getElementById('editMedicinePrice').value = totalPrice; // Update the price field
  }
};

// Function to delete a medicine
window.deleteMedicine = function(id) {
  if (confirm('Bạn có chắc chắn muốn xóa bài thuốc này?')) {
    const index = sampleData.findIndex(item => item.id === id);
    if (index !== -1) {
      sampleData.splice(index, 1); // Remove the medicine from the data
      renderTableData(sampleData); // Re-render the table data
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Đã xóa bài thuốc thành công.',
        showConfirmButton: false,
        timer: 800
      });
    }
  }
};

// Function to show the modal with medicine details
window.showModal = function(id) {
  const medicine = sampleData.find(item => item.id === id);
  if (medicine) {
    document.getElementById('viewMedicineImage').src = medicine.image;
    document.getElementById('viewMedicineName').textContent = medicine.name;
    document.getElementById('viewMedicineDescription').textContent = medicine.description;
    document.getElementById('viewMedicineUsage').textContent = medicine.usage;

    // Display the ingredients
    const ingredientsList = document.getElementById('viewMedicineIngredients');
    ingredientsList.innerHTML = '';
    medicine.ingredients.forEach(ingredient => {
      const li = document.createElement('li');
      li.textContent = `${ingredient.name}: ${ingredient.quantity * 10} gram`;
      ingredientsList.appendChild(li); // Append the ingredient to the list
    });
    const viewModal = new bootstrap.Modal(document.getElementById('viewMedicineModal'));
    viewModal.show();
  }
};
/** */
  $(document).ready(function() {
    $('#addMedicineModal').on('hidden.bs.modal', function () {
      if ($('.modal.show').length > 0) {
        $('body').addClass('modal-open');
      } else {
        $('body').removeClass('modal-open');
        $('body').css('overflow', '');
      }
      $('.modal-backdrop').remove();
    });

    $('#addMedicineModal').on('shown.bs.modal', function () {
      if (!$('.modal-backdrop').length) {
        $('<div class="modal-backdrop fade show"></div>').appendTo(document.body);
      }
    });
  });
// Function to add a new medicine
document.getElementById('addMedicineForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const ingredients = [];
  document.querySelectorAll('#addMedicineIngredients .ingredient-item').forEach((item, index) => {
    const name = item.querySelector('.ingredient-name').value;
    const quantity = parseInt(item.querySelector('.ingredient-quantity').value);
    const price = parseInt(item.querySelector('.ingredient-price').value);
    if (name && quantity && price) {
      ingredients.push({ id: sampleData.length + index + 1, name, quantity, price });
    }
  });

  const newMedicine = {
    id: sampleData.length + 1,
    code: `BT00${sampleData.length + 1}`,
    image: URL.createObjectURL(document.getElementById('medicineImage').files[0]),
    name: document.getElementById('medicineName').value,
    price: ingredients.reduce((acc, ing) => acc + ing.price * ing.quantity, 0), // Calculate the total price
    date: document.getElementById('medicineDate').value,
    description: document.getElementById('medicineDescription').value,
    usage: document.getElementById('medicineUsage').value,
    ingredients: ingredients // Add ingredients to the new medicine
  };

  sampleData.push(newMedicine); // Add the new medicine to the data
  renderTableData(sampleData); // Re-render the table data
  document.getElementById('addMedicineForm').reset();
  const addModal = bootstrap.Modal.getInstance(document.getElementById('addMedicineModal'));
  addModal.hide();
  Swal.fire({
    icon: 'success',
    title: 'Success!',
    text: 'Đã thêm bài thuốc thành công.',
    showConfirmButton: false,
    timer: 800
  });
});
// Function to edit a medicine
document.getElementById('editMedicineForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const id = parseInt(document.getElementById('editMedicineId').value);
  const index = sampleData.findIndex(item => item.id === id);
  if (index !== -1) {
    sampleData[index].name = document.getElementById('editMedicineName').value;
    sampleData[index].price = document.getElementById('editMedicinePrice').value;
    sampleData[index].date = document.getElementById('editMedicineDate').value;
    sampleData[index].description = document.getElementById('editMedicineDescription').value;
    sampleData[index].usage = document.getElementById('editMedicineUsage').value;

    // Update the ingredients
    const ingredients = [];
    document.querySelectorAll('#editMedicineIngredients .ingredient-item').forEach((item, i) => {
      const name = item.querySelector('.ingredient-name').value;
      const quantity = parseInt(item.querySelector('.ingredient-quantity').value);
      const price = parseInt(item.querySelector('.ingredient-price').value);
      if (name && quantity && price) {
        ingredients.push({ id: sampleData[index].ingredients[i] ? sampleData[index].ingredients[i].id : sampleData.length + i + 1, name, quantity, price });
      }
    });

    sampleData[index].ingredients = ingredients; // Update the ingredients list
    if (document.getElementById('editMedicineImage').files[0]) {
      sampleData[index].image = URL.createObjectURL(document.getElementById('editMedicineImage').files[0]);
    }
    renderTableData(sampleData); // Re-render the table data
    const editModal = bootstrap.Modal.getInstance(document.getElementById('editMedicineModal'));
    editModal.hide();
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Bài thuốc đã được cập nhật.',
      showConfirmButton: false,
      timer: 800
    });
  }
});

/* SEARCHHHHHHHHHHHHHHHHHHHHHHHH */
  document.getElementById('searchInput').addEventListener('input', function() {
    const keyword = this.value.toLowerCase();
    const filteredData = sampleData.filter(item => item.name.toLowerCase().includes(keyword) || item.code.toLowerCase().includes(keyword));
    renderTableData(filteredData);
  });

/*etriesPerpageeeeeeeeeeeeeeeee */
document.getElementById('entriesPerPage').addEventListener('change', function() {
  const entriesPerPage = this.value === 'all' ? sampleData.length : parseInt(this.value);
  renderTableData(sampleData.slice(0, entriesPerPage));
  renderPagination(entriesPerPage, 1);
});
function renderPagination(entriesPerPage, currentPage) {
  const totalPages = Math.ceil(sampleData.length / entriesPerPage);
  const pagination = document.getElementById('pagination');
  pagination.innerHTML = '';
  const maxPagesToShow = 5;

  function createPageItem(page, text = page) {
    const li = document.createElement('li');
    li.classList.add('page-item');
    const a = document.createElement('a');
    a.classList.add('page-link');
    a.href = "#";
    a.textContent = text;
    if (page === currentPage) {
      a.classList.add('active');
    }
    a.addEventListener('click', function(event) {
      event.preventDefault();
      renderPagination(entriesPerPage, page);
      const start = (page - 1) * entriesPerPage;
      const end = page * entriesPerPage;
      renderTableData(sampleData.slice(start, end));
    });
    li.appendChild(a);
    return li;
  }

  if (currentPage > 1) {
    pagination.appendChild(createPageItem(currentPage - 1, 'Previous'));
  }

  const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  if (startPage > 1) {
    pagination.appendChild(createPageItem(1));
    if (startPage > 2) {
      const li = document.createElement('li');
      li.classList.add('page-item');
      li.innerHTML = '<span>...</span>';
      pagination.appendChild(li);
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pagination.appendChild(createPageItem(i));
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      const li = document.createElement('li');
      li.classList.add('page-item');
      li.innerHTML = '<span>...</span>';
      pagination.appendChild(li);
    }
    pagination.appendChild(createPageItem(totalPages));
  }

  if (currentPage < totalPages) {
    pagination.appendChild(createPageItem(currentPage + 1, 'Next'));
  }
}

// Initial render
renderTableData(sampleData.slice(0, totalPages));
renderPagination(totalPages, 1);

});
(function () {
  "use strict";

  /**
 * Easy selector helper function
 */
  const select = (el, all = false) => {
      el = el.trim()
      if (all) {
          return [...document.querySelectorAll(el)]
      } else {
          return document.querySelector(el)
      }
  }

  /**
 * Easy event listener function
 */
  const on = (type, el, listener, all = false) => {
      if (all) {
          select(el, all).forEach(e => e.addEventListener(type, listener))
      } else {
          select(el, all).addEventListener(type, listener)
      }
  }
  /**
  * Easy on scroll event listener 
  */
  const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener)
  }

  /**
 * Back to top button
 */
  let backtotop = select('.back-to-top')
  if (backtotop) {
      const toggleBacktotop = () => {
          if (window.scrollY > 100) {
              backtotop.classList.add('active')
          } else {
              backtotop.classList.remove('active')
          }
      }
      window.addEventListener('load', toggleBacktotop)
      onscroll(document, toggleBacktotop)
  }

})();



/* SORT FAIL
  function sortTable(columnIndex) {
    const tableBody = document.getElementById('medicineTable');
    const rows = Array.from(tableBody.rows);
    const currentIsAscending = tableBody.getAttribute('data-sort') === 'asc';

    rows.sort((a, b) => {
      const aText = a.cells[columnIndex].innerText;
      const bText = b.cells[columnIndex].innerText;
      return currentIsAscending 
        ? aText.localeCompare(bText, 'vi', { numeric: true })
        : bText.localeCompare(aText, 'vi', { numeric: true });
    });

    tableBody.innerHTML = '';
    rows.forEach(row => tableBody.appendChild(row));
    tableBody.setAttribute('data-sort', currentIsAscending ? 'desc' : 'asc');
  }

/*------------------------------------------------------------- */