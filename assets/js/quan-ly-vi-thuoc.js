document.addEventListener('DOMContentLoaded', function() {
  const sampleData = [
    {
        id: 1,
        code: 'VT001',
        image: 'assets/img/nhansam.jpg',
        name: 'Nhân sâm',
        weight: 100,
        price: 500000,
        quantity: 10,
        description: 'Nhân sâm là một loại thảo dược quý hiếm đã được sử dụng trong y học cổ truyền từ hàng ngàn năm nay.                         Nó có tác dụng bồi bổ cơ thể, tăng cường sinh lực, và chống suy nhược. Nhân sâm còn được biết đến với khả năng tăng cường hệ miễn dịch, giúp cơ thể chống lại các bệnh tật và nhiễm trùng. Ngoài ra, nhân sâm còn có tác dụng cải thiện trí nhớ, giảm căng thẳng và làm chậm quá trình lão hóa. Sử dụng nhân sâm đúng cách có thể mang lại nhiều lợi ích sức khỏe, giúp cải thiện chất lượng cuộc sống và kéo dài tuổi thọ. Nhân sâm còn được biết đến với khả năng hỗ trợ tiêu hóa, tăng cường chức năng gan và thận, và cải thiện tuần hoàn máu, giúp cơ thể luôn ở trạng thái tốt nhất.'
    },
    {
        id: 2,
        code: 'VT002',
        image: 'assets/img/duongquy.jpg',
        name: 'Đương quy',
        weight: 100,
        price: 200000,
        quantity: 15,
        description: 'Đương quy là một loại thảo dược quý được sử dụng rộng rãi trong y học cổ truyền để bổ huyết và điều kinh. Nó giúp cải thiện tuần hoàn máu, giảm đau bụng kinh, và điều hòa kinh nguyệt. Đương quy còn được biết đến với khả năng tăng cường sức khỏe tổng thể và hỗ trợ hệ tiêu hóa. Ngoài ra, đương quy còn có tác dụng giảm viêm nhiễm và cải thiện tình trạng mệt mỏi. Sử dụng đương quy thường xuyên có thể giúp cơ thể khỏe mạnh và cân bằng hơn, đồng thời giảm các triệu chứng của mãn kinh. Đương quy cũng được biết đến với tác dụng chống oxy hóa, giúp bảo vệ cơ thể khỏi các gốc tự do và làm chậm quá trình lão hóa.'
    },
    {
        id: 3,
        code: 'VT003',
        image: 'assets/img/hoangky.jpg',
        name: 'Hoàng kỳ',
        weight: 100,
        price: 150000,
        quantity: 20,
        description: 'Hoàng kỳ là một loại thảo dược có nhiều công dụng trong việc tăng cường hệ miễn dịch và bồi bổ cơ thể. Nó giúp cải thiện sức khỏe tổng thể, chống suy nhược, và tăng cường sinh lực. Hoàng kỳ còn có tác dụng tăng cường tuần hoàn máu và cải thiện chức năng gan. Ngoài ra, hoàng kỳ còn giúp giảm viêm nhiễm và tăng cường khả năng chống lại bệnh tật. Sử dụng hoàng kỳ đúng cách có thể giúp cơ thể khỏe mạnh và tràn đầy năng lượng. Hoàng kỳ còn được biết đến với khả năng cải thiện chức năng thận, giúp thải độc cơ thể và hỗ trợ quá trình tiêu hóa. Nó cũng có tác dụng làm giảm căng thẳng, giúp cơ thể thư giãn và cải thiện chất lượng giấc ngủ.'
    },
    {
        id: 4,
        code: 'VT004',
        image: 'assets/img/bachthuoc.jpg',
        name: 'Bạch thược',
        weight: 100,
        price: 120000,
        quantity: 12,
        description: 'Bạch thược là một loại thảo dược có tác dụng bồi bổ cơ thể và giảm đau. Nó giúp điều hòa kinh nguyệt, giảm đau bụng kinh, và chống co thắt. Bạch thược còn có tác dụng tăng cường tuần hoàn máu và cải thiện chức năng gan. Ngoài ra, bạch thược còn hỗ trợ hệ tiêu hóa và giảm triệu chứng viêm nhiễm. Sử dụng bạch thược thường xuyên có thể giúp cơ thể khỏe mạnh và cân bằng hơn. Bạch thược còn được biết đến với khả năng làm dịu hệ thần kinh, giúp giảm căng thẳng và lo âu. Nó cũng có tác dụng chống oxy hóa, bảo vệ cơ thể khỏi các tác nhân gây hại từ môi trường và cải thiện làn da.'
    },
    {
        id: 5,
        code: 'VT005',
        image: 'assets/img/xuyenkhung.jpg',
        name: 'Xuyên khung',
        weight: 100,
        price: 130000,
        quantity: 10,
        description: 'Xuyên khung là một loại thảo dược có tác dụng hoạt huyết và giảm đau đầu. Nó giúp tăng cường tuần hoàn máu và cải thiện chức năng gan. Xuyên khung còn có tác dụng giảm viêm nhiễm và hỗ trợ hệ tiêu hóa. Sử dụng xuyên khung đúng cách có thể giúp cơ thể khỏe mạnh và tràn đầy năng lượng. Xuyên khung còn được biết đến với khả năng cải thiện chức năng thận, giúp thải độc cơ thể và hỗ trợ quá trình tiêu hóa. Nó cũng có tác dụng làm giảm căng thẳng, giúp cơ thể thư giãn và cải thiện chất lượng giấc ngủ. Xuyên khung còn có tác dụng chống oxy hóa, bảo vệ cơ thể khỏi các gốc tự do và làm chậm quá trình lão hóa.'
    },
    {
        id: 6,
        code: 'VT006',
        image: 'assets/img/diahoang.jpg',
        name: 'Địa hoàng',
        weight: 100,
        price: 180000,
        quantity: 8,
        description: 'Địa hoàng là một loại thảo dược giúp bổ thận và dưỡng âm, được sử dụng trong nhiều bài thuốc y học cổ truyền. Nó có tác dụng hỗ trợ điều trị các bệnh về thận, cải thiện chức năng gan, và tăng cường sinh lực. Địa hoàng còn giúp thanh nhiệt và giải độc, làm mát cơ thể. Sử dụng địa hoàng đúng cách có thể giúp cải thiện sức khỏe tổng thể và tăng cường hệ miễn dịch. Địa hoàng cũng có tác dụng làm giảm căng thẳng, giúp cơ thể thư giãn và cải thiện chất lượng giấc ngủ. Ngoài ra, địa hoàng còn hỗ trợ hệ tiêu hóa và giúp cải thiện tình trạng viêm nhiễm. Địa hoàng còn được biết đến với khả năng chống oxy hóa, bảo vệ cơ thể khỏi các gốc tự do và làm chậm quá trình lão hóa.'
    },
    {
        id: 7,
        code: 'VT007',
        image: 'assets/img/camthao.jpg',
        name: 'Cam thảo',
        weight: 100,
        price: 50000,
        quantity: 30,
        description: 'Cam thảo là một loại thảo dược có tác dụng thanh nhiệt và giải độc, được sử dụng phổ biến trong nhiều bài thuốc y học cổ truyền. Nó giúp điều hòa các vị thuốc khác, tăng cường hệ miễn dịch và cải thiện sức khỏe tổng thể. Cam thảo còn có tác dụng chống viêm nhiễm và hỗ trợ hệ tiêu hóa. Sử dụng cam thảo đúng cách có thể giúp cơ thể khỏe mạnh và cân bằng hơn. Cam thảo còn được biết đến với khả năng giảm căng thẳng, giúp cơ thể thư giãn và cải thiện chất lượng giấc ngủ. Ngoài ra, cam thảo còn hỗ trợ điều trị các bệnh về hô hấp, giảm ho và tiêu đờm. Cam thảo cũng có tác dụng chống oxy hóa, bảo vệ cơ thể khỏi các gốc tự do và làm chậm quá trình lão hóa.'
    },
    {
        id: 8,
        code: 'VT008',
        image: 'assets/img/dotrong.jpg',
        name: 'Đỗ trọng',
        weight: 100,
        price: 170000,
        quantity: 14,
        description: 'Đỗ trọng là một loại thảo dược giúp bổ gan thận và mạnh gân cốt, được sử dụng trong nhiều bài thuốc y học cổ truyền. Nó có tác dụng hỗ trợ điều trị đau lưng, mỏi gối và các vấn đề về xương khớp. Đỗ trọng còn giúp thanh nhiệt và giải độc, làm mát cơ thể. Sử dụng đỗ trọng đúng cách có thể giúp cải thiện sức khỏe tổng thể và tăng cường hệ miễn dịch. Đỗ trọng còn được biết đến với khả năng cải thiện chức năng thận, giúp thải độc cơ thể và hỗ trợ quá trình tiêu hóa. Ngoài ra, đỗ trọng còn có tác dụng giảm căng thẳng, giúp cơ thể thư giãn và cải thiện chất lượng giấc ngủ. Đỗ trọng cũng có tác dụng chống oxy hóa, bảo vệ cơ thể khỏi các gốc tự do và làm chậm quá trình lão hóa.'
    },
    {
        id: 9,
        code: 'VT009',
        image: 'assets/img/nhungthungdung.jpg',
        name: 'Nhục thung dung',
        weight: 100,
        price: 250000,
        quantity: 6,
        description: 'Nhục thung dung là một loại thảo dược có tác dụng bổ thận và tráng dương, được sử dụng trong nhiều bài thuốc y học cổ truyền. Nó giúp tăng cường sinh lực, cải thiện sức khỏe tổng thể và chống suy nhược. Nhục thung dung còn có tác dụng tăng cường tuần hoàn máu và cải thiện chức năng gan. Ngoài ra, nhục thung dung còn hỗ trợ hệ tiêu hóa và giảm triệu chứng viêm nhiễm. Sử dụng nhục thung dung đúng cách có thể giúp cơ thể khỏe mạnh và tràn đầy năng lượng. Nhục thung dung còn được biết đến với khả năng làm dịu hệ thần kinh, giúp giảm căng thẳng và lo âu. Nó cũng có tác dụng chống oxy hóa, bảo vệ cơ thể khỏi các gốc tự do và làm chậm quá trình lão hóa.'
    },
    {
        id: 10,
        code: 'VT010',
        image: 'assets/img/caukytu.jpg',
        name: 'Câu kỷ tử',
        weight: 100,
        price: 200000,
        quantity: 12,
        description: 'Câu kỷ tử là một loại thảo dược có tác dụng bồi bổ gan thận và sáng mắt, được sử dụng trong nhiều bài thuốc y học cổ truyền. Nó giúp tăng cường sinh lực, cải thiện sức khỏe tổng thể và chống suy nhược. Câu kỷ tử còn có tác dụng tăng cường tuần hoàn máu và cải thiện chức năng gan. Ngoài ra, câu kỷ tử còn hỗ trợ hệ tiêu hóa và giảm triệu chứng viêm nhiễm. Sử dụng câu kỷ tử đúng cách có thể giúp cơ thể khỏe mạnh và tràn đầy năng lượng. Câu kỷ tử còn được biết đến với khả năng làm dịu hệ thần kinh, giúp giảm căng thẳng và lo âu. Nó cũng có tác dụng chống oxy hóa, bảo vệ cơ thể khỏi các gốc tự do và làm chậm quá trình lão hóa.'
    },
    {
        id: 11,
        code: 'VT011',
        image: 'assets/img/bakich.jpg',
        name: 'Ba kích',
        weight: 100,
        price: 230000,
        quantity: 8,
        description: 'Ba kích là một loại thảo dược có tác dụng bổ thận và tráng dương, được sử dụng trong nhiều bài thuốc y học cổ truyền. Nó giúp hỗ trợ điều trị yếu sinh lý, tăng cường sinh lực và cải thiện sức khỏe tổng thể. Ba kích còn có tác dụng tăng cường tuần hoàn máu và cải thiện chức năng gan. Ngoài ra, ba kích còn hỗ trợ hệ tiêu hóa và giảm triệu chứng viêm nhiễm. Sử dụng ba kích đúng cách có thể giúp cơ thể khỏe mạnh và tràn đầy năng lượng. Ba kích còn được biết đến với khả năng làm dịu hệ thần kinh, giúp giảm căng thẳng và lo âu. Nó cũng có tác dụng chống oxy hóa, bảo vệ cơ thể khỏi các gốc tự do và làm chậm quá trình lão hóa.'
    },
    {
        id: 12,
        code: 'VT012',
        image: 'assets/img/machmon.jpg',
        name: 'Mạch môn',
        weight: 100,
        price: 160000,
        quantity: 10,
        description: 'Mạch môn là một loại thảo dược có tác dụng dưỡng âm và thanh nhiệt, được sử dụng trong nhiều bài thuốc y học cổ truyền. Nó giúp lợi tiểu, giảm ho và cải thiện sức khỏe tổng thể. Mạch môn còn có tác dụng tăng cường tuần hoàn máu và cải thiện chức năng gan. Ngoài ra, mạch môn còn hỗ trợ hệ tiêu hóa và giảm triệu chứng viêm nhiễm. Sử dụng mạch môn đúng cách có thể giúp cơ thể khỏe mạnh và cân bằng hơn. Mạch môn còn được biết đến với khả năng làm dịu hệ thần kinh, giúp giảm căng thẳng và lo âu. Nó cũng có tác dụng chống oxy hóa, bảo vệ cơ thể khỏi các gốc tự do và làm chậm quá trình lão hóa.'
    },
    {
        id: 13,
        code: 'VT013',
        image: 'assets/img/thienmon.jpg',
        name: 'Thiên môn',
        weight: 100,
        price: 180000,
        quantity: 9,
        description: 'Thiên môn là một loại thảo dược có tác dụng dưỡng âm và thanh nhiệt, được sử dụng trong nhiều bài thuốc y học cổ truyền. Nó giúp giảm ho, bổ phổi và cải thiện sức khỏe tổng thể. Thiên môn còn có tác dụng tăng cường tuần hoàn máu và cải thiện chức năng gan. Ngoài ra, thiên môn còn hỗ trợ hệ tiêu hóa và giảm triệu chứng viêm nhiễm. Sử dụng thiên môn đúng cách có thể giúp cơ thể khỏe mạnh và cân bằng hơn. Thiên môn còn được biết đến với khả năng làm dịu hệ thần kinh, giúp giảm căng thẳng và lo âu. Nó cũng có tác dụng chống oxy hóa, bảo vệ cơ thể khỏi các gốc tự do và làm chậm quá trình lão hóa.'
    },
    {
        id: 14,
        code: 'VT014',
        image: 'assets/img/bachtruat.jpg',
        name: 'Bạch truật',
        weight: 100,
        price: 140000,
        quantity: 11,
        description: 'Bạch truật là một loại thảo dược có tác dụng kiện tỳ và ích khí, được sử dụng trong nhiều bài thuốc y học cổ truyền. Nó giúp chống suy nhược cơ thể, tăng cường sức khỏe tổng thể và cải thiện chức năng tiêu hóa. Bạch truật còn có tác dụng tăng cường tuần hoàn máu và cải thiện chức năng gan. Ngoài ra, bạch truật còn hỗ trợ hệ tiêu hóa và giảm triệu chứng viêm nhiễm. Sử dụng bạch truật đúng cách có thể giúp cơ thể khỏe mạnh và cân bằng hơn. Bạch truật còn được biết đến với khả năng làm dịu hệ thần kinh, giúp giảm căng thẳng và lo âu. Nó cũng có tác dụng chống oxy hóa, bảo vệ cơ thể khỏi các gốc tự do và làm chậm quá trình lão hóa.'
    },
    {
        id: 15,
        code: 'VT015',
        image: 'assets/img/sanhan.jpg',
        name: 'Sa nhân',
        weight: 100,
        price: 150000,
        quantity: 10,
        description: 'Sa nhân là một loại thảo dược có tác dụng kiện tỳ và hành khí, được sử dụng trong nhiều bài thuốc y học cổ truyền. Nó giúp trừ thấp, chống đầy hơi, khó tiêu và cải thiện chức năng tiêu hóa. Sa nhân còn có tác dụng tăng cường tuần hoàn máu và cải thiện chức năng gan. Ngoài ra, sa nhân còn hỗ trợ hệ tiêu hóa và giảm triệu chứng viêm nhiễm. Sử dụng sa nhân đúng cách có thể giúp cơ thể khỏe mạnh và cân bằng hơn. Sa nhân còn được biết đến với khả năng làm dịu hệ thần kinh, giúp giảm căng thẳng và lo âu. Nó cũng có tác dụng chống oxy hóa, bảo vệ cơ thể khỏi các gốc tự do và làm chậm quá trình lão hóa.'
    },
    {
        id: 16,
        code: 'VT016',
        image: 'assets/img/tranbi.jpg',
        name: 'Trần bì',
        weight: 100,
        price: 90000,
        quantity: 20,
        description: 'Trần bì là một loại thảo dược có tác dụng hành khí và kiện tỳ, được sử dụng trong nhiều bài thuốc y học cổ truyền. Nó giúp tiêu đờm, giảm ho, chống đầy hơi, khó tiêu và cải thiện chức năng tiêu hóa. Trần bì còn có tác dụng tăng cường tuần hoàn máu và cải thiện chức năng gan. Ngoài ra, trần bì còn hỗ trợ hệ tiêu hóa và giảm triệu chứng viêm nhiễm. Sử dụng trần bì đúng cách có thể giúp cơ thể khỏe mạnh và cân bằng hơn. Trần bì còn được biết đến với khả năng làm dịu hệ thần kinh, giúp giảm căng thẳng và lo âu. Nó cũng có tác dụng chống oxy hóa, bảo vệ cơ thể khỏi các gốc tự do và làm chậm quá trình lão hóa.'
    },
    {
        id: 17,
        code: 'VT017',
        image: 'assets/img/huongphu.jpg',
        name: 'Hương phụ',
        weight: 100,
        price: 110000,
        quantity: 13,
        description: 'Hương phụ là một loại thảo dược có tác dụng hành khí và giảm đau, được sử dụng trong nhiều bài thuốc y học cổ truyền. Nó giúp điều hòa kinh nguyệt, giảm đau bụng kinh và cải thiện chức năng tiêu hóa. Hương phụ còn có tác dụng tăng cường tuần hoàn máu và cải thiện chức năng gan. Ngoài ra, hương phụ còn hỗ trợ hệ tiêu hóa và giảm triệu chứng viêm nhiễm. Sử dụng hương phụ đúng cách có thể giúp cơ thể khỏe mạnh và cân bằng hơn. Hương phụ còn được biết đến với khả năng làm dịu hệ thần kinh, giúp giảm căng thẳng và lo âu. Nó cũng có tác dụng chống oxy hóa, bảo vệ cơ thể khỏi các gốc tự do và làm chậm quá trình lão hóa.'
    },
    {
        id: 18,
        code: 'VT018',
        image: 'assets/img/hoaison.jpg',
        name: 'Hoài sơn',
        weight: 100,
        price: 130000,
        quantity: 10,
        description: 'Hoài sơn là một loại thảo dược có tác dụng kiện tỳ và bổ thận, được sử dụng trong nhiều bài thuốc y học cổ truyền. Nó giúp tăng cường sức khỏe tổng thể, cải thiện chức năng tiêu hóa và chống suy nhược cơ thể. Hoài sơn còn có tác dụng tăng cường tuần hoàn máu và cải thiện chức năng gan. Ngoài ra, hoài sơn còn hỗ trợ hệ tiêu hóa và giảm triệu chứng viêm nhiễm. Sử dụng hoài sơn đúng cách có thể giúp cơ thể khỏe mạnh và cân bằng hơn. Hoài sơn còn được biết đến với khả năng làm dịu hệ thần kinh, giúp giảm căng thẳng và lo âu. Nó cũng có tác dụng chống oxy hóa, bảo vệ cơ thể khỏi các gốc tự do và làm chậm quá trình lão hóa.'
    },
    {
        id: 19,
        code: 'VT019',
        image: 'assets/img/thucdia.jpg',
        name: 'Thục địa',
        weight: 100,
        price: 140000,
        quantity: 11,
        description: 'Thục địa là một loại thảo dược có tác dụng bổ thận và dưỡng âm, được sử dụng trong nhiều bài thuốc y học cổ truyền. Nó giúp tăng cường sinh lực, cải thiện chức năng tiêu hóa và chống suy nhược cơ thể. Thục địa còn có tác dụng tăng cường tuần hoàn máu và cải thiện chức năng gan. Ngoài ra, thục địa còn hỗ trợ hệ tiêu hóa và giảm triệu chứng viêm nhiễm. Sử dụng thục địa đúng cách có thể giúp cơ thể khỏe mạnh và cân bằng hơn. Thục địa còn được biết đến với khả năng làm dịu hệ thần kinh, giúp giảm căng thẳng và lo âu. Nó cũng có tác dụng chống oxy hóa, bảo vệ cơ thể khỏi các gốc tự do và làm chậm quá trình lão hóa.'
    },
    {
        id: 20,
        code: 'VT020',
        image: 'assets/img/longnhan.jpg',
        name: 'Long nhãn',
        weight: 100,
        price: 150000,
        quantity: 12,
        description: 'Long nhãn là một loại thảo dược có tác dụng bổ huyết và an thần, được sử dụng trong nhiều bài thuốc y học cổ truyền. Nó giúp cải thiện chất lượng giấc ngủ, giảm căng thẳng và lo âu. Long nhãn còn có tác dụng tăng cường tuần hoàn máu và cải thiện chức năng gan. Ngoài ra, long nhãn còn hỗ trợ hệ tiêu hóa và giảm triệu chứng viêm nhiễm. Sử dụng long nhãn đúng cách có thể giúp cơ thể khỏe mạnh và cân bằng hơn. Long nhãn còn được biết đến với khả năng làm dịu hệ thần kinh, giúp giảm căng thẳng và lo âu. Nó cũng có tác dụng chống oxy hóa, bảo vệ cơ thể khỏi các gốc tự do và làm chậm quá trình lão hóa.'
    },
    {
      id: 21,
      code: 'VT021',
      image: 'assets/img/raungo.jpg',
      name: 'Râu ngô',
      weight: 100,
      price: 80000,
      quantity: 25,
      description: 'Râu ngô là một loại thảo dược có tác dụng lợi tiểu, thanh nhiệt, và giải độc, được sử dụng trong nhiều bài thuốc y học cổ truyền. Nó giúp hỗ trợ điều trị các vấn đề viêm nhiễm đường tiết niệu và giảm triệu chứng tiểu buốt, tiểu rắt. Râu ngô còn có khả năng giúp giảm sưng phù và hỗ trợ chức năng thận. Sử dụng râu ngô đúng cách có thể giúp cơ thể thải độc và duy trì cân bằng nước. Râu ngô còn được biết đến với khả năng làm dịu hệ thần kinh, giúp giảm căng thẳng và lo âu. Nó cũng có tác dụng chống oxy hóa, bảo vệ cơ thể khỏi các gốc tự do và làm chậm quá trình lão hóa.'
  },
  {
      id: 22,
      code: 'VT022',
      image: 'assets/img/hathuo.jpg',
      name: 'Hà thủ ô',
      weight: 100,
      price: 220000,
      quantity: 6,
      description: 'Hà thủ ô là một loại thảo dược nổi tiếng với tác dụng bổ gan thận và làm đen tóc, được sử dụng trong nhiều bài thuốc y học cổ truyền. Nó giúp tăng cường sức khỏe tổng thể, cải thiện chức năng tiêu hóa và chống suy nhược cơ thể. Hà thủ ô còn có tác dụng tăng cường tuần hoàn máu và cải thiện chức năng gan. Ngoài ra, hà thủ ô còn hỗ trợ hệ tiêu hóa và giảm triệu chứng viêm nhiễm. Sử dụng hà thủ ô đúng cách có thể giúp cơ thể khỏe mạnh và cân bằng hơn. Hà thủ ô còn được biết đến với khả năng làm dịu hệ thần kinh, giúp giảm căng thẳng và lo âu. Nó cũng có tác dụng chống oxy hóa, bảo vệ cơ thể khỏi các gốc tự do và làm chậm quá trình lão hóa.'
  },
  {
      id: 23,
      code: 'VT023',
      image: 'assets/img/saidat.jpg',
      name: 'Sài đất',
      weight: 100,
      price: 90000,
      quantity: 20,
      description: 'Sài đất là một loại thảo dược có tác dụng thanh nhiệt, giải độc và tiêu viêm, được sử dụng trong nhiều bài thuốc y học cổ truyền. Nó giúp hỗ trợ điều trị các vấn đề về mụn nhọt, viêm da và các bệnh lý liên quan đến nhiệt độc. Sài đất còn có tác dụng tăng cường tuần hoàn máu và cải thiện chức năng gan. Ngoài ra, sài đất còn hỗ trợ hệ tiêu hóa và giảm triệu chứng viêm nhiễm. Sử dụng sài đất đúng cách có thể giúp cơ thể khỏe mạnh và cân bằng hơn. Sài đất còn được biết đến với khả năng làm dịu hệ thần kinh, giúp giảm căng thẳng và lo âu. Nó cũng có tác dụng chống oxy hóa, bảo vệ cơ thể khỏi các gốc tự do và làm chậm quá trình lão hóa.'
  },
  {
      id: 24,
      code: 'VT024',
      image: 'assets/img/diephachau.jpg',
      name: 'Diệp hạ châu',
      weight: 100,
      price: 100000,
      quantity: 18,
      description: 'Diệp hạ châu là một loại thảo dược có tác dụng giải độc gan, thanh nhiệt và lợi tiểu, được sử dụng trong nhiều bài thuốc y học cổ truyền. Nó giúp hỗ trợ điều trị viêm gan, bảo vệ gan và cải thiện chức năng gan. Diệp hạ châu còn có tác dụng tăng cường tuần hoàn máu và giảm triệu chứng viêm nhiễm. Ngoài ra, diệp hạ châu còn hỗ trợ hệ tiêu hóa và giúp cơ thể thải độc hiệu quả. Sử dụng diệp hạ châu đúng cách có thể giúp cơ thể khỏe mạnh và cân bằng hơn. Diệp hạ châu còn được biết đến với khả năng làm dịu hệ thần kinh, giúp giảm căng thẳng và lo âu. Nó cũng có tác dụng chống oxy hóa, bảo vệ cơ thể khỏi các gốc tự do và làm chậm quá trình lão hóa.'
  },
  {
      id: 25,
      code: 'VT025',
      image: 'assets/img/nhantran.jpg',
      name: 'Nhân trần',
      weight: 100,
      price: 85000,
      quantity: 22,
      description: 'Nhân trần là một loại thảo dược có tác dụng thanh nhiệt, lợi tiểu và giải độc gan, được sử dụng trong nhiều bài thuốc y học cổ truyền. Nó giúp hỗ trợ điều trị viêm gan và các vấn đề liên quan đến gan, cải thiện chức năng gan và tăng cường sức khỏe tổng thể. Nhân trần còn có tác dụng tăng cường tuần hoàn máu và giảm triệu chứng viêm nhiễm. Ngoài ra, nhân trần còn hỗ trợ hệ tiêu hóa và giúp cơ thể thải độc hiệu quả. Sử dụng nhân trần đúng cách có thể giúp cơ thể khỏe mạnh và cân bằng hơn. Nhân trần còn được biết đến với khả năng làm dịu hệ thần kinh, giúp giảm căng thẳng và lo âu. Nó cũng có tác dụng chống oxy hóa, bảo vệ cơ thể khỏi các gốc tự do và làm chậm quá trình lão hóa.'
  },
  {
      id: 26,
      code: 'VT026',
      image: 'assets/img/nhietthao.jpg',
      name: 'Bạch hoa xà thiệt thảo',
      weight: 100,
      price: 110000,
      quantity: 16,
      description: 'Bạch hoa xà thiệt thảo là một loại thảo dược có tác dụng thanh nhiệt, giải độc, tiêu viêm và kháng khuẩn, được sử dụng trong nhiều bài thuốc y học cổ truyền. Nó giúp hỗ trợ điều trị các bệnh lý viêm nhiễm, mụn nhọt và các vấn đề về da. Bạch hoa xà thiệt thảo còn có tác dụng tăng cường tuần hoàn máu và cải thiện chức năng gan. Ngoài ra, bạch hoa xà thiệt thảo còn hỗ trợ hệ tiêu hóa và giảm triệu chứng viêm nhiễm. Sử dụng bạch hoa xà thiệt thảo đúng cách có thể giúp cơ thể khỏe mạnh và cân bằng hơn. Bạch hoa xà thiệt thảo còn được biết đến với khả năng làm dịu hệ thần kinh, giúp giảm căng thẳng và lo âu. Nó cũng có tác dụng chống oxy hóa, bảo vệ cơ thể khỏi các gốc tự do và làm chậm quá trình lão hóa.'
  },
  {
      id: 27,
      code: 'VT027',
      image: 'assets/img/thophuclinh.jpg',
      name: 'Thổ phục linh',
      weight: 100,
      price: 130000,
      quantity: 10,
      description: 'Thổ phục linh là một loại thảo dược có tác dụng thanh nhiệt, giải độc, tiêu viêm và lợi tiểu, được sử dụng trong nhiều bài thuốc y học cổ truyền. Nó giúp hỗ trợ điều trị viêm khớp, giảm đau và cải thiện chức năng tiêu hóa. Thổ phục linh còn có tác dụng tăng cường tuần hoàn máu và cải thiện chức năng gan. Ngoài ra, thổ phục linh còn hỗ trợ hệ tiêu hóa và giảm triệu chứng viêm nhiễm. Sử dụng thổ phục linh đúng cách có thể giúp cơ thể khỏe mạnh và cân bằng hơn. Thổ phục linh còn được biết đến với khả năng làm dịu hệ thần kinh, giúp giảm căng thẳng và lo âu. Nó cũng có tác dụng chống oxy hóa, bảo vệ cơ thể khỏi các gốc tự do và làm chậm quá trình lão hóa.'
  },
  {
      id: 28,
      code: 'VT028',
      image: 'assets/img/ydi.jpg',
      name: 'Ý dĩ',
      weight: 100,
      price: 100000,
      quantity: 20,
      description: 'Ý dĩ là một loại thảo dược có tác dụng kiện tỳ, lợi tiểu, thanh nhiệt và giải độc, được sử dụng trong nhiều bài thuốc y học cổ truyền. Nó giúp hỗ trợ điều trị viêm khớp, phù thũng và các vấn đề liên quan đến tiêu hóa. Ý dĩ còn có tác dụng tăng cường tuần hoàn máu và cải thiện chức năng gan. Ngoài ra, ý dĩ còn hỗ trợ hệ tiêu hóa và giảm triệu chứng viêm nhiễm. Sử dụng ý dĩ đúng cách có thể giúp cơ thể khỏe mạnh và cân bằng hơn. Ý dĩ còn được biết đến với khả năng làm dịu hệ thần kinh, giúp giảm căng thẳng và lo âu. Nó cũng có tác dụng chống oxy hóa, bảo vệ cơ thể khỏi các gốc tự do và làm chậm quá trình lão hóa.'
  },
  {
    id: 29,
    code: 'VT029',
    image: 'assets/img/nguutat.jpg',
    name: 'Ngưu tất',
    weight: 100,
    price: 160000,
    quantity: 14,
    description: 'Ngưu tất, một loại dược liệu quý hiếm từ thiên nhiên, đã được biết đến từ rất lâu với các giá trị về sức khỏe và vẻ đẹp. Là một phần của y học cổ truyền, ngưu tất đã được sử dụng trong nhiều thế kỷ để điều trị nhiều vấn đề sức khỏe khác nhau. Đặc biệt, ngưu tất được biết đến với khả năng cải thiện tuần hoàn máu, giảm viêm, và hỗ trợ hệ thống miễn dịch. Với thành phần tự nhiên và tính hiệu quả cao, ngưu tất là lựa chọn lý tưởng cho những ai đang tìm kiếm giải pháp tự nhiên cho sức khỏe của mình.'
},
{
    id: 30,
    code: 'VT030',
    image: 'assets/img/bachchi.jpg',
    name: 'Bạch chỉ',
    weight: 100,
    price: 140000,
    quantity: 12,
    description: 'Bạch chỉ là một trong những loại dược liệu phổ biến trong y học cổ truyền, được biết đến với nhiều công dụng hỗ trợ sức khỏe. Với tác dụng giải biểu, khu phong, trừ thấp, giảm đau, bạch chỉ thường được sử dụng để điều trị các vấn đề liên quan đến cảm lạnh, đau đầu và các triệu chứng khác. Đặc biệt, bạch chỉ cũng được ưa chuộng vì khả năng kích thích tuần hoàn máu và giúp cơ thể phục hồi nhanh chóng. Với thành phần tự nhiên và hiệu quả, bạch chỉ là sự lựa chọn hoàn hảo cho mọi người quan tâm đến sức khỏe tự nhiên và cải thiện chất lượng cuộc sống.'
}
  ];

  function renderTableData(data) {
    const medicineTable = document.getElementById('medicineTable');
    medicineTable.innerHTML = '';
    data.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.code}</td>
            <td><img src="${item.image}" alt="${item.name}" class="medicine-image" onclick="showModal('${item.name}', '${item.image}', '${item.description}')"></td>
            <td>${item.name}</td>
            <td>${item.weight}</td>
            <td>${item.price.toLocaleString('vi-VN')}</td>
            <td>${item.quantity}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="editMedicine(${item.id})"><i class="bi bi-pencil-square"></i></button>
                <button class="btn btn-danger btn-sm" onclick="deleteMedicine(${item.id})"><i class="bi bi-trash"></i></button>
            </td>
        `;
        medicineTable.appendChild(row);
    });
}
  
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
renderTableData(sampleData);
  window.editMedicine = function(id) {
    const medicine = sampleData.find(item => item.id === id);
    if (medicine) {
      document.getElementById('editMedicineId').value = medicine.id;
      document.getElementById('editMedicineName').value = medicine.name;
      document.getElementById('editMedicineWeight').value = medicine.weight;
      document.getElementById('editMedicinePrice').value = medicine.price;
      document.getElementById('editMedicineQuantity').value = medicine.quantity;
      document.getElementById('editMedicineDescription').value = medicine.description;
      const editModal = new bootstrap.Modal(document.getElementById('editMedicineModal'));
      editModal.show();
    }
  };
  //delete
  window.deleteMedicine = function(id) {
    if (confirm('Bạn có chắc chắn muốn xóa vị thuốc này?')) {
      const index = sampleData.findIndex(item => item.id === id);
      if (index !== -1) {
        sampleData.splice(index, 1);
        renderTableData(sampleData);
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Đã xóa vị thuốc thành công.',
          showConfirmButton: false,
          timer: 800
        });
      }
    }
  };
  // view
  window.showModal = function(name, image, description) {
    document.getElementById('viewMedicineImage').src = image;
    document.getElementById('viewMedicineName').textContent = name;
    document.getElementById('viewMedicineDescription').textContent = description;
    const viewModal = new bootstrap.Modal(document.getElementById('viewMedicineModal'));
    viewModal.show();
  };
  //add
  document.getElementById('addMedicineForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const newMedicine = {
      id: sampleData.length + 1,
      code: `VT00${sampleData.length + 1}`,
      image: URL.createObjectURL(document.getElementById('medicineImage').files[0]),
      name: document.getElementById('medicineName').value,
      weight: document.getElementById('medicineWeight').value,
      price: document.getElementById('medicinePrice').value,
      quantity: document.getElementById('medicineQuantity').value,
      description: document.getElementById('medicineDescription').value,
    };
    sampleData.push(newMedicine);
    renderTableData(sampleData);
    // Release the object URL to free memory
    document.getElementById('addMedicineForm').reset();
    const addModal = bootstrap.Modal.getInstance(document.getElementById('addMedicineModal'));
    
    addModal.hide();
    $('#addMedicineModal').on('hidden.bs.modal', function () {
      if ($('.modal.show').length > 0) {
          $('body').addClass('modal-open');
      } else {
          $('body').removeClass('modal-open');
          $('body').css('overflow', '');
      }
      $('.modal-backdrop').remove();
  });
  // on background wwhen opening
  $('#addMedicineModal').on('shown.bs.modal', function () {
    if (!$('.modal-backdrop').length) {
        $('<div class="modal-backdrop fade show"></div>').appendTo(document.body);
    }
});
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Đã thêm vị thuốc thành công.',
      showConfirmButton: false,
      timer: 800
    });
    
  });

  //edit
  document.getElementById('editMedicineForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const id = parseInt(document.getElementById('editMedicineId').value);
    const index = sampleData.findIndex(item => item.id === id);
    if (index !== -1) {
      sampleData[index].name = document.getElementById('editMedicineName').value;
      sampleData[index].weight = document.getElementById('editMedicineWeight').value;
      sampleData[index].price = document.getElementById('editMedicinePrice').value;
      sampleData[index].quantity = document.getElementById('editMedicineQuantity').value;
      sampleData[index].description = document.getElementById('editMedicineDescription').value;
      if (document.getElementById('editMedicineImage').files[0]) {
        sampleData[index].image = URL.createObjectURL(document.getElementById('editMedicineImage').files[0]);
      }
      renderTableData(sampleData);
      const editModal = bootstrap.Modal.getInstance(document.getElementById('editMedicineModal'));
      editModal.hide();
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Vị thuốc đã được cập nhật.',
        showConfirmButton: false,
        timer: 800
      });
    }
    
  });

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

