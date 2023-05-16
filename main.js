


  function myFunction() {
    var registerForm = document.getElementById("register-form");
    registerForm.style.display = "block";
  }
  function myFunction() {
    var registerForm = document.getElementById("register-form");
    var registerSuccess = document.getElementById("register-success");
    
    // Hiển thị form đăng kí
    registerForm.style.display = "block";
    
    // Bắt đầu theo dõi sự kiện submit form
    registerForm.addEventListener("submit", function(event) {
      event.preventDefault();
      
      // Ẩn form đăng kí
      registerForm.style.display = "none";
      
      // Hiển thị thông báo đăng kí thành công
      registerSuccess.style.display = "block";
    });
  }
  


  const registerForm = document.querySelector('#register-form');
registerForm.addEventListener('submit', handleRegister);

function handleRegister(event) {
  event.preventDefault();
  // TODO: Xử lý đăng kí và gửi dữ liệu đi
  // Hiển thị thông báo đăng kí thành công
  alert('Đăng kí thành công!');
}




  const form = document.querySelector('#contact-form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  // TODO: Gửi form đi và xử lý kết quả ở đây
  // Hiển thị thông báo gửi thành công
  alert('Gửi thành công');
}
 