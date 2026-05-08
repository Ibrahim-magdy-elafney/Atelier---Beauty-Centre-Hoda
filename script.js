const form = document.getElementById("form");
const Program = document.getElementById("Program");
const result = document.getElementById("result");
const total = document.getElementById("total");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const messageField = document.getElementById("message").value;

    const date1 = document.querySelectorAll(".date")[0].value;
    const time1 = document.querySelectorAll(".time")[0].value;

    const date2 = document.querySelectorAll(".date")[1].value;
    const time2 = document.querySelectorAll(".time")[1].value;

    if (!name || !phoneNumber || !date1 || !time1) {
        result.style.color = "red";
        result.innerText = "من فضلك املي البيانات الأساسية!";
        return;
    }

    const price = Number(Program.value);
    const serviceText = Program.options[Program.selectedIndex].text;

    total.innerText = `السعر التقريبي: ${price.toLocaleString()} جنيه`;

    result.style.color = "green";
    result.innerText = "تم إرسال الطلب بنجاح 💄";

    const message = `✨ طلب حجز جديد

👩 الاسم: ${name}
📞 رقم التليفون: ${phoneNumber}
📧 الايميل: ${email}

💄 الخدمة: ${serviceText}

💰 السعر التقريبي: ${price.toLocaleString()} جنيه

📅 ميعاد الحجز: ${date1}
⏰ الساعة: ${time1}

📅 ميعاد الزيارة المتوقع: ${date2 || "غير محدد"}
⏰ الساعة: ${time2 || "غير محدد"}

📝 ملاحظات: ${messageField || "لا يوجد"}`;

    const phone = "2010xxxxxxxx";

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
        window.open(url, "_blank");
    }, 800);
});