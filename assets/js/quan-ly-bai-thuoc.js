document.addEventListener('DOMContentLoaded', function() {
    const medicines = [
      {
        id: 1,
        code: 'BT001',
        image: 'assets//img/messages-1.jpg',
        name: 'Thuốc A',
        price: 50000,
        date: "2024-06-02",
        description: 'Mô tả ngắn gọn cho thuốc A. Đây là một đoạn mô tả đầy đủ cho thuốc A.',
        ingredients: [
          { id: 1, name: "Vị thuốc 1", category: "Loại 1", quantity: 10, price: 5000 },
          { id: 2, name: "Vị thuốc 2", category: "Loại 2", quantity: 20, price: 7000 },
          { id: 3, name: "Vị thuốc 3", category: "Loại 3", quantity: 15, price: 6000 },
          { id: 3, name: "Vị thuốc 3", category: "Loại 3", quantity: 15, price: 6000 },
      ]
      },
      {
        id: 2,
        code: 'BT002',
        image: 'assets//img/messages-2.jpg',
        name: 'Thuốc B',
        price: 510000,
        date: "2024-06-02",
        description: 'Mô tả ngắn gọn cho thuốc B. Đây là một đoạn mô tả đầy đủ cho thuốc B.',
        ingredients: [
          { id: 1, name: "Vị thuốc 1", category: "Loại 1", quantity: 10, price: 5000 },
          { id: 2, name: "Vị thuốc 2", category: "Loại 2", quantity: 20, price: 7000 },
          { id: 3, name: "Vị thuốc 3", category: "Loại 3", quantity: 15, price: 6000 },
          { id: 3, name: "Vị thuốc 3", category: "Loại 3", quantity: 15, price: 6000 },
      ]
      },
      {
        id: 3,
        code: 'BT003',
        image: 'assets//img/messages-3.jpg',
        name: 'Thuốc C',
        price: 3350000,
        date: "2024-06-02",
        description: 'Mô tả ngắn gọn cho thuốc C. Đây là một đoạn mô tả đầy đủ cho thuốc C.',
        ingredients: [
          { id: 1, name: "Vị thuốc 1", category: "Loại 1", quantity: 10, price: 5000 },
          { id: 2, name: "Vị thuốc 2", category: "Loại 2", quantity: 20, price: 7000 },
          { id: 3, name: "Vị thuốc 3", category: "Loại 3", quantity: 15, price: 6000 },
          { id: 3, name: "Vị thuốc 3", category: "Loại 3", quantity: 15, price: 6000 },
      ]
      },
      {
        id: 4,
        code: 'BT004',
        image: 'assets//img/messages-1.jpg',
        name: 'Thuốc A',
        price: 50000,
        date: "2024-06-02",
        description: 'Mô tả ngắn gọn cho thuốc A. Đây là một đoạn mô tả đầy đủ cho thuốc A.',
        ingredients: [
          { id: 1, name: "Vị thuốc 1", category: "Loại 1", quantity: 10, price: 5000 },
          { id: 2, name: "Vị thuốc 2", category: "Loại 2", quantity: 20, price: 7000 },
          { id: 3, name: "Vị thuốc 3", category: "Loại 3", quantity: 15, price: 6000 },
          { id: 3, name: "Vị thuốc 3", category: "Loại 3", quantity: 15, price: 6000 },
      ]
      },
      {
        id: 5,
        code: 'BT005',
        image: 'assets//img/messages-2.jpg',
        name: 'Thuốc B',
        price: 510000,
        date: "2024-06-02",
        description: 'Mô tả ngắn gọn cho thuốc B. Đây là một đoạn mô tả đầy đủ cho thuốc B.',
        ingredients: [
          { id: 1, name: "Vị thuốc 1", category: "Loại 1", quantity: 10, price: 5000 },
          { id: 2, name: "Vị thuốc 2", category: "Loại 2", quantity: 20, price: 7000 },
          { id: 3, name: "Vị thuốc 3", category: "Loại 3", quantity: 15, price: 6000 },
          { id: 3, name: "Vị thuốc 3", category: "Loại 3", quantity: 15, price: 6000 },
      ]
      },
      {
        id: 6,
        code: 'BT006',
        image: 'assets//img/messages-3.jpg',
        name: 'Thuốc C',
        price: 3350000,
        date: "2024-06-02",
        description: 'Mô tả ngắn gọn cho thuốc C. Đây là một đoạn mô tả đầy đủ cho thuốc C.',
        ingredients: [
          { id: 1, name: "Vị thuốc 1", category: "Loại 1", quantity: 10, price: 5000 },
          { id: 2, name: "Vị thuốc 2", category: "Loại 2", quantity: 20, price: 7000 },
          { id: 3, name: "Vị thuốc 3", category: "Loại 3", quantity: 15, price: 6000 },
          { id: 3, name: "Vị thuốc 3", category: "Loại 3", quantity: 15, price: 6000 },
      ]
      },
      {
        id: 7,
        code: 'BT007',
        image: 'assets//img/messages-2.jpg',
        name: 'Thuốc B',
        price: 510000,
        date: "2024-06-02",
        description: 'Mô tả ngắn gọn cho thuốc B. Đây là một đoạn mô tả đầy đủ cho thuốc B.',
        ingredients: [
          { id: 1, name: "Vị thuốc 1", category: "Loại 1", quantity: 10, price: 5000 },
          { id: 2, name: "Vị thuốc 2", category: "Loại 2", quantity: 20, price: 7000 },
          { id: 3, name: "Vị thuốc 3", category: "Loại 3", quantity: 15, price: 6000 },
          { id: 3, name: "Vị thuốc 3", category: "Loại 3", quantity: 15, price: 6000 },
      ]
      },
      {
        id: 8,
        code: 'BT008',
        image: 'assets//img/messages-3.jpg',
        name: 'Thuốc C',
        price: 3350000,
        date: "2024-06-02",
        description: 'Mô tả ngắn gọn cho thuốc C. Đây là một đoạn mô tả đầy đủ cho thuốc C.',
        ingredients: [
          { id: 1, name: "Vị thuốc 1", category: "Loại 1", quantity: 10, price: 5000 },
          { id: 2, name: "Vị thuốc 2", category: "Loại 2", quantity: 20, price: 7000 },
          { id: 3, name: "Vị thuốc 3", category: "Loại 3", quantity: 15, price: 6000 },
          { id: 3, name: "Vị thuốc 3", category: "Loại 3", quantity: 15, price: 6000 },
      ]
      },
      {
        id: 9,
        code: 'BT009',
        image: 'assets//img/messages-1.jpg',
        name: 'Thuốc A',
        price: 50000,
        date: "2024-06-02",
        description: 'Mô tả ngắn gọn cho thuốc A. Đây là một đoạn mô tả đầy đủ cho thuốc A.',
        ingredients: [
          { id: 1, name: "Vị thuốc 1", category: "Loại 1", quantity: 10, price: 5000 },
          { id: 2, name: "Vị thuốc 2", category: "Loại 2", quantity: 20, price: 7000 },
          { id: 3, name: "Vị thuốc 3", category: "Loại 3", quantity: 15, price: 6000 },
          { id: 3, name: "Vị thuốc 3", category: "Loại 3", quantity: 15, price: 6000 },
      ]
      },
      {
        id: 10,
        code: 'BT010',
        image: 'assets//img/messages-2.jpg',
        name: 'Thuốc B',
        price: 510000,
        date: "2024-06-02",
        description: 'Mô tả ngắn gọn cho thuốc B. Đây là một đoạn mô tả đầy đủ cho thuốc B.',
        ingredients: [
          { id: 1, name: "Vị thuốc 1", category: "Loại 1", quantity: 10, price: 5000 },
          { id: 2, name: "Vị thuốc 2", category: "Loại 2", quantity: 20, price: 7000 },
          { id: 3, name: "Vị thuốc 3", category: "Loại 3", quantity: 15, price: 6000 },
          { id: 3, name: "Vị thuốc 3", category: "Loại 3", quantity: 15, price: 6000 },
      ]
      },
      {
        id: 11,
        code: 'BT011',
        image: 'assets//img/messages-3.jpg',
        name: 'Thuốc C',
        price: 3350000,
        date: "2024-06-02",
        description: 'Mô tả ngắn gọn cho thuốc C. Đây là một đoạn mô tả đầy đủ cho thuốc C.',
        ingredients: [
          { id: 1, name: "Vị thuốc 1", category: "Loại 1", quantity: 10, price: 5000 },
          { id: 2, name: "Vị thuốc 2", category: "Loại 2", quantity: 20, price: 7000 },
          { id: 3, name: "Vị thuốc 3", category: "Loại 3", quantity: 15, price: 6000 },
          { id: 3, name: "Vị thuốc 3", category: "Loại 3", quantity: 15, price: 6000 },
      ]
      },
    ];
  
    let currentPage = 1;
    let medicinesPerPage = 5;
  
    let ingredientsData = [];
          medicines.forEach(medicine => {
            medicine.ingredients.forEach(ingredient => {
                  if (!ingredientsData.find(i => i.ingredientName === ingredient.ingredientName)) {
                      ingredientsData.push(ingredient);
                  }
              });
          });
  
    function renderTableData(medicines) {
      const medicinesTableBody = document.getElementById('medicinesTableBody');
      medicinesTableBody.innerHTML = '';
      medicines.forEach((medicine, index) => {
          const row = document.createElement('tr');
          row.innerHTML = `
              <td>${index + 1}</td>
              <td>${medicine.code}</td>
              <td><img src="${medicine.image}" alt="${medicine.name}" width="50"></td>
              <td>${medicine.name}</td>
              <td>${medicine.price}</td>
              <td>${medicine.date}</td>
              <td><button onclick="viewMedicineDetails(${medicine.code})">Xem</button></td>
              <td>
                  <button class="btn btn-warning btn-sm" onclick="editMedicine(${medicine.code})"><i class="bi bi-pencil-square"></i></button>
                  <button class="btn btn-danger btn-sm" onclick="deleteMedicine(${medicine.code})"><i class="bi bi-trash"></i></button>
              </td>
          `;
          medicinesTableBody.appendChild(row);
      });
    }
    //next page
    function renderPagination() {
      document.getElementById('prevPageBtn').disabled = currentPage === 1;
      document.getElementById('nextPageBtn').disabled = currentPage * medicinesPerPage >= medicines.length;
    }
    function paginateMedicines() {
      const start = (currentPage - 1) * medicinesPerPage;
      const end = start + medicinesPerPage;
      renderMedicinesTable(medicines.slice(start, end));
      renderPagination();
    }
  
    function changePage(direction) {
      currentPage += direction;
      paginateMedicines();
    }
    
  /* ẨN BỚT ĐI 
    /*sỏttttttttttttttttttttttttttt
    function sortTable(columnIndex) {
      const tableBody = document.getElementById('medicinesTableBody');
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
   */
  /*------------------------------------------------------------- */
  renderTableData(medicines);
    window.editMedicine = function(id) {
      const medicine = medicines.find(medicine => medicine.id === id);
      if (medicine) {
        document.getElementById('editMedicineId').value = medicine.id;
        document.getElementById('editMedicineName').value = medicine.name;
        document.getElementById('editMedicinePrice').value = medicine.price;
        document.getElementById('editMedicineDate').value = medicine.date;
        document.getElementById('editMedicineDescription').value = medicine.description;
        const editModal = new bootstrap.Modal(document.getElementById('editMedicineModal'));
        editModal.show();
      }
    };
  
    window.deleteMedicine = function(id) {
      if (confirm('Bạn có chắc chắn muốn xóa bài thuốc này?')) {
        const index = medicines.findIndex(medicine => medicine.id === id);
        if (index !== -1) {
          medicines.splice(index, 1);
          renderTableData(medicines);
        }
      }
    };
  /////////////////////////////////
    document.getElementById('addMedicineForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const newMedicine = {
        id: medicines.length + 1,
        code: `BT00${medicines.length + 1}`,
        image: URL.createObjectURL(document.getElementById('medicineImage').files[0]),
        name: document.getElementById('medicineName').value,
        price: document.getElementById('medicinePrice').value,
        quantity: document.getElementById('medicineDate').value,
        description: document.getElementById('medicineDescription').value
      };
      medicines.push(newMedicine);
      renderTableData(medicines);
      document.getElementById('addMedicineForm').reset();
      const addModal = bootstrap.Modal.getInstance(document.getElementById('addMedicineModal'));
      addModal.hide();
    });
  
    document.getElementById('editMedicineForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const id = parseInt(document.getElementById('editMedicineId').value);
      const index = medicines.findIndex(medicine => medicine.id === id);
      if (index !== -1) {
        medicines[index].name = document.getElementById('editMedicineName').value;
        medicines[index].category = document.getElementById('editMedicineCategory').value;
        medicines[index].weight = document.getElementById('editMedicineWeight').value;
        medicines[index].price = document.getElementById('editMedicinePrice').value;
        medicines[index].quantity = document.getElementById('editMedicineQuantity').value;
        medicines[index].description = document.getElementById('editMedicineDescription').value;
        if (document.getElementById('editMedicineImage').files[0]) {
          medicines[index].image = URL.createObjectURL(document.getElementById('editMedicineImage').files[0]);
        }
        renderTableData(medicines);
        const editModal = bootstrap.Modal.getInstance(document.getElementById('editMedicineModal'));
        editModal.hide();
      }
    });
  
    document.getElementById('searchInput').addEventListener('input', function() {
      const keyword = this.value.toLowerCase();
      const filteredData = medicines.filter(medicine => medicine.name.toLowerCase().includes(keyword) || medicine.code.toLowerCase().includes(keyword));
      renderTableData(filteredData);
    });
  
  /*etriesPerpageeeeeeeeeeeeeeeee */
  
    document.getElementById('entriesPerPage').addEventListener('change', function() {
      const entriesPerPage = this.value === 'all' ? medicines.length : parseInt(this.value);
      renderTableData(medicines.slice(0, entriesPerPage));
      renderPagination(entriesPerPage);
    });
  
    function renderPagination(entriesPerPage) {
      const totalPages = Math.ceil(medicines.length / entriesPerPage);
      const pagination = document.getElementById('pagination');
      pagination.innerHTML = '';
      for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement('li');
        li.classList.add('page-medicine');
        li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
        li.addEventListener('click', function() {
          const start = (i - 1) * entriesPerPage;
          const end = i * entriesPerPage;
          renderTableData(medicines.slice(start, end));
        });
        pagination.appendChild(li);
      }
    }
  
    renderTableData(medicines);
    renderPagination(5);
  
  
  
  });
  