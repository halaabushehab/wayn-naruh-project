$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true, // تفعيل التكرار
        margin: 10, // المسافة بين العناصر
        nav: true, // إظهار الأسهم للتنقل
        dots: true, // إظهار النقاط للتنقل
        autoplay: true, // التشغيل التلقائي
        autoplayTimeout: 3000, // المدة بين كل تعليق (3 ثوانٍ)
        autoplayHoverPause: true, // الإيقاف المؤقت عند تمرير الماوس
        responsive: {
            0: {
                items: 1 // عنصر واحد على الشاشات الصغيرة
            },
            600: {
                items: 2 // عنصران على الشاشات المتوسطة
            },
            1000: {
                items: 3 // ثلاثة عناصر على الشاشات الكبيرة
            }
        }
    });
});




// تضمين المكتبة الخاصة بـ EmailJS
// تضمين المكتبة الخاصة بـ EmailJS
(function() {
    emailjs.init("your_user_id"); // استبدل بـ User ID الخاص بك من EmailJS
  })();
  
  // الاستماع إلى حدث الإرسال في النموذج
  document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault(); // منع الإرسال الافتراضي للنموذج
  
    // جمع البيانات من النموذج
    const formData = new FormData(event.target);
    const formDataObj = {};
    formData.forEach((value, key) => formDataObj[key] = value);
  
    // إرسال البريد الإلكتروني باستخدام EmailJS
    emailjs.send('your_service_id', 'your_template_id', formDataObj)
      .then(function(response) {
        alert('تم إرسال الاقتراح بنجاح!');
      }, function(error) {
        alert('حدث خطأ أثناء إرسال الاقتراح. حاول مرة أخرى.');
      });
  });
  