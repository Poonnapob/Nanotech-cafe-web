
document.addEventListener('DOMContentLoaded', function() {

    
    const calculateButton = document.getElementById('calculate-btn');

 
    calculateButton.addEventListener('click', calculateAndDisplaySales);

  
    function calculateAndDisplaySales() {
     
        const salesDetailsList = document.getElementById('sales-details-list');
        const totalSalesDisplay = document.getElementById('total-sales');

     
        const menuItems = [
            { name: 'น้ำมะพร้าวปั่น (ใหญ่)', id: 'coconut-large-qty', price: 35 },
            { name: 'น้ำมะพร้าวปั่น (เล็ก)', id: 'coconut-small-qty', price: 25 },
            { name: 'น้ำชง', id: 'tea-qty', price: 25 },
            { name: 'มัทฉะลาเต้', id: 'matcha-qty', price: 40 }
        ];

        let totalRevenue = 0;
        let salesDetailsHtml = ''; 

       
        menuItems.forEach(item => {
           
            const quantityInput = document.getElementById(item.id);
            const quantity = parseInt(quantityInput.value) || 0; 

            
            if (quantity > 0) {
               
                const subtotal = quantity * item.price;
                
               
                totalRevenue += subtotal;

          
                salesDetailsHtml += `<li>${item.name}: ${quantity} แก้ว - ยอดรวม ${subtotal.toLocaleString()} บาท</li>`;
            }
        });
        
       
        if (salesDetailsHtml === '') {
            salesDetailsList.innerHTML = '<li>ยังไม่มีรายการขาย</li>';
        } else {
            
            salesDetailsList.innerHTML = salesDetailsHtml;
        }

       
        totalSalesDisplay.textContent = `ยอดรวมทั้งหมด: ${totalRevenue.toLocaleString()} บาท`;
    }


});
