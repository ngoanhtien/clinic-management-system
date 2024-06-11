document.addEventListener('DOMContentLoaded', function() {
  const sampleData = [
    {
      id: 1,
      code: 'VT001',
      image: 'assets//img/messages-1.jpg',
      name: 'Thuốc A',
      category: 'Loại 1',
      weight: 100,
      price: 50000,
      quantity: 10,
      description: 'Mô tả ngắn gọn cho thuốc A. Đây là một đoạn mô tả đầy đủ cho thuốc A.'
    },
    {
      id: 2,
      code: 'VT002',
      image: 'assets//img/messages-2.jpg',
      name: 'Thuốc B',
      category: 'Loại 2',
      weight: 103330,
      price: 510000,
      quantity: 1110,
      description: 'Mô tả ngắn gọn cho thuốc B. Đây là một đoạn mô tả đầy đủ cho thuốc B.'
    },
    {
      id: 3,
      code: 'VT003',
      image: 'assets//img/messages-3.jpg',
      name: 'Thuốc C',
      category: 'Loại 3',
      weight: 33100,
      price: 3350000,
      quantity: 3310,
      description: 'Mô tả ngắn gọn cho thuốc C. Đây là một đoạn mô tả đầy đủ cho thuốc C.'
    },
    {
      id: 4,
      code: 'VT004',
      image: 'assets//img/messages-1.jpg',
      name: 'Thuốc A',
      category: 'Loại 1',
      weight: 100,
      price: 50000,
      quantity: 10,
      description: 'Mô tả ngắn gọn cho thuốc A. Đây là một đoạn mô tả đầy đủ cho thuốc A.'
    },
    {
      id: 5,
      code: 'VT005',
      image: 'assets//img/messages-2.jpg',
      name: 'Thuốc B',
      category: 'Loại 2',
      weight: 103330,
      price: 510000,
      quantity: 1110,
      description: 'Mô tả ngắn gọn cho thuốc B. Đây là một đoạn mô tả đầy đủ cho thuốc B.'
    },
    {
      id: 6,
      code: 'VT006',
      image: 'assets//img/messages-3.jpg',
      name: 'Thuốc C',
      category: 'Loại 3',
      weight: 33100,
      price: 3350000,
      quantity: 3310,
      description: 'Mô tả ngắn gọn cho thuốc C. Đây là một đoạn mô tả đầy đủ cho thuốc C.'
    },
    {
      id: 7,
      code: 'VT007',
      image: 'assets//img/messages-2.jpg',
      name: 'Thuốc B',
      category: 'Loại 2',
      weight: 103330,
      price: 510000,
      quantity: 1110,
      description: 'Mô tả ngắn gọn cho thuốc B. Đây là một đoạn mô tả đầy đủ cho thuốc B.'
    },
    {
      id: 8,
      code: 'VT008',
      image: 'assets//img/messages-3.jpg',
      name: 'Thuốc C',
      category: 'Loại 3',
      weight: 33100,
      price: 3350000,
      quantity: 3310,
      description: 'Mô tả ngắn gọn cho thuốc C. Đây là một đoạn mô tả đầy đủ cho thuốc C.'
    },
    {
      id: 9,
      code: 'VT009',
      image: 'assets//img/messages-1.jpg',
      name: 'Thuốc A',
      category: 'Loại 1',
      weight: 100,
      price: 50000,
      quantity: 10,
      description: 'Mô tả ngắn gọn cho thuốc A. Đây là một đoạn mô tả đầy đủ cho thuốc A.'
    },
    {
      id: 10,
      code: 'VT010',
      image: 'assets//img/messages-2.jpg',
      name: 'Thuốc B',
      category: 'Loại 2',
      weight: 103330,
      price: 510000,
      quantity: 1110,
      description: 'Mô tả ngắn gọn cho thuốc B. Đây là một đoạn mô tả đầy đủ cho thuốc B.'
    },
    {
      id: 11,
      code: 'VT011',
      image: 'assets//img/messages-3.jpg',
      name: 'Thuốc C',
      category: 'Loại 3',
      weight: 33100,
      price: 3350000,
      quantity: 3310,
      description: 'Mô tả ngắn gọn cho thuốc C. Đây là một đoạn mô tả đầy đủ cho thuốc C.'
    },
  ];

  function renderTableData(data) {
    const medicineTable = document.getElementById('medicineTable');
    medicineTable.innerHTML = '';
    data.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.code}</td>
            <td><img src="${item.image}" alt="${item.name}" width="50"></td>
            <td>${item.name}</td>
            <td>${item.category}</td>
            <td>${item.weight}</td>
            <td>${item.price}</td>
            <td>${item.quantity}</td>
            <td>
                <span class="truncate" data-full-text="${item.description}">
                    ${item.description.substring(0, 20)}...
                </span>
                <button class="btn btn-link p-0" onclick="toggleDescription(this)">Xem thêm</button>
            </td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="editMedicine(${item.id})"><i class="bi bi-pencil-square"></i></button>
                <button class="btn btn-danger btn-sm" onclick="deleteMedicine(${item.id})"><i class="bi bi-trash"></i></button>
            </td>
        `;
        medicineTable.appendChild(row);
    });
}

function toggleDescription(button) {
    const span = button.previousElementSibling;
    const fullText = span.getAttribute('data-full-text');
    if (span.classList.contains('truncate')) {
        span.textContent = fullText;
        span.classList.remove('truncate');
        button.textContent = 'Thu gọn';
    } else {
        span.textContent = fullText.substring(0, 20) + '...';
        span.classList.add('truncate');
        button.textContent = 'Xem thêm';
    }
}

  /*sỏttttttttttttttttttttttttttt */
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
      document.getElementById('editMedicineCategory').value = medicine.category;
      document.getElementById('editMedicineWeight').value = medicine.weight;
      document.getElementById('editMedicinePrice').value = medicine.price;
      document.getElementById('editMedicineQuantity').value = medicine.quantity;
      document.getElementById('editMedicineDescription').value = medicine.description;
      const editModal = new bootstrap.Modal(document.getElementById('editMedicineModal'));
      editModal.show();
    }
  };

  window.deleteMedicine = function(id) {
    if (confirm('Bạn có chắc chắn muốn xóa vị thuốc này?')) {
      const index = sampleData.findIndex(item => item.id === id);
      if (index !== -1) {
        sampleData.splice(index, 1);
        renderTableData(sampleData);
      }
    }
  };

  document.getElementById('addMedicineForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const newMedicine = {
      id: sampleData.length + 1,
      code: `VT00${sampleData.length + 1}`,
      image: URL.createObjectURL(document.getElementById('medicineImage').files[0]),
      name: document.getElementById('medicineName').value,
      category: document.getElementById('medicineCategory').value,
      weight: document.getElementById('medicineWeight').value,
      price: document.getElementById('medicinePrice').value,
      quantity: document.getElementById('medicineQuantity').value,
      description: document.getElementById('medicineDescription').value
    };
    sampleData.push(newMedicine);
    renderTableData(sampleData);
    document.getElementById('addMedicineForm').reset();
    const addModal = bootstrap.Modal.getInstance(document.getElementById('addMedicineModal'));
    addModal.hide();
  });

  document.getElementById('editMedicineForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const id = parseInt(document.getElementById('editMedicineId').value);
    const index = sampleData.findIndex(item => item.id === id);
    if (index !== -1) {
      sampleData[index].name = document.getElementById('editMedicineName').value;
      sampleData[index].category = document.getElementById('editMedicineCategory').value;
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
    renderPagination(entriesPerPage);
  });

  function renderPagination(entriesPerPage) {
    const totalPages = Math.ceil(sampleData.length / entriesPerPage);
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
      const li = document.createElement('li');
      li.classList.add('page-item');
      li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
      li.addEventListener('click', function() {
        const start = (i - 1) * entriesPerPage;
        const end = i * entriesPerPage;
        renderTableData(sampleData.slice(start, end));
      });
      pagination.appendChild(li);
    }
  }

  renderTableData(sampleData);
  // renderPagination(5);
});