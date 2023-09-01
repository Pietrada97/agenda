document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const table = document.getElementById("contact-table").getElementsByTagName("tbody")[0];
    
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      
      const nameInput = document.getElementById("name");
      const phoneInput = document.getElementById("phone");
      
      const name = nameInput.value;
      const phone = phoneInput.value;
      
      if (name && phone) {
        const newRow = table.insertRow();
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        
        cell1.innerHTML = name;
        cell2.innerHTML = phone;
        
        nameInput.value = "";
        phoneInput.value = "";
      }
    });
  });