// รอให้หน้าเว็บโหลดเสร็จก่อน
document.addEventListener('DOMContentLoaded', function() {

    // ดึงปุ่มคำนวณมาเก็บไว้ในตัวแปร
    const calculateButton = document.getElementById('calculate-btn');

    // เมื่อปุ่มถูกคลิก ให้เรียกใช้ฟังก์ชัน calculateAndDisplaySales
    calculateButton.addEventListener('click', calculateAndDisplaySales);

    /**
     * ฟังก์ชันหลักสำหรับคำนวณยอดขายและแสดงผล
     * จะอ่านค่าจำนวนแก้วจากทุกเมนู คำนวณยอดรวม และสร้างรายการสรุปผล
     */
    function calculateAndDisplaySales() {
        // อ้างอิงถึง element ที่จะแสดงผล
        const salesDetailsList = document.getElementById('sales-details-list');
        const totalSalesDisplay = document.getElementById('total-sales');

        // ข้อมูลเมนูทั้งหมด (ชื่อ, id ของ input, ราคา)
        // การเก็บข้อมูลแบบนี้ทำให้เพิ่ม/ลดเมนูในอนาคตได้ง่าย
        const menuItems = [
            { name: 'น้ำมะพร้าวปั่น (ใหญ่)', id: 'coconut-large-qty', price: 35 },
            { name: 'น้ำมะพร้าวปั่น (เล็ก)', id: 'coconut-small-qty', price: 25 },
            { name: 'น้ำชง', id: 'tea-qty', price: 25 },
            { name: 'มัทฉะลาเต้', id: 'matcha-qty', price: 40 }
        ];

        let totalRevenue = 0; // ตัวแปรเก็บยอดรวมทั้งหมด เริ่มที่ 0
        let salesDetailsHtml = ''; // ตัวแปรเก็บรายการขายในรูปแบบ HTML

        // วนลูปดูทีละเมนู
        menuItems.forEach(item => {
            // ดึงจำนวนแก้วที่กรอกจาก input
            const quantityInput = document.getElementById(item.id);
            const quantity = parseInt(quantityInput.value) || 0; // แปลงเป็นตัวเลข ถ้าไม่มีค่าให้เป็น 0

            // เช็คว่าเมนูนี้มีการขายหรือไม่ (จำนวนมากกว่า 0)
            if (quantity > 0) {
                // คำนวณยอดขายของเมนูนี้
                const subtotal = quantity * item.price;
                
                // บวกยอดขายเข้ากับยอดรวมทั้งหมด
                totalRevenue += subtotal;

                // สร้าง HTML สำหรับแสดงรายการขายของเมนูนี้
                salesDetailsHtml += `<li>${item.name}: ${quantity} แก้ว - ยอดรวม ${subtotal.toLocaleString()} บาท</li>`;
            }
        });
        
        // ตรวจสอบว่ามีรายการขายหรือไม่
        if (salesDetailsHtml === '') {
            salesDetailsList.innerHTML = '<li>ยังไม่มีรายการขาย</li>';
        } else {
            // นำ HTML ที่สร้างไว้ไปแสดงใน list
            salesDetailsList.innerHTML = salesDetailsHtml;
        }

        // แสดงยอดขายรวมทั้งหมด
        totalSalesDisplay.textContent = `ยอดรวมทั้งหมด: ${totalRevenue.toLocaleString()} บาท`;
    }

});