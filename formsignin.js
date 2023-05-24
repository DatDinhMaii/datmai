$(document).ready(function () {
    //Khi bàn phím được nhấn và thả ra thì sẽ chạy phương thức này
    $("#signin").validate({
      rules: {
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          validatePassword: true,
          minlength: 8
      },
      },
      messages: {
        email: {
          required: "Vui lòng nhập vào email",
          email: "Email không đúng định dạng"
        },
        password: {
          required: "Vui lòng nhập mật khẩu!",
          minlength: "Độ dài tối thiểu 8 kí tự",
        },
      }
    });
    $.validator.addMethod("validatePassword", function (value, element) {
      return this.optional(element) || /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/i.test(value);
      }, "Hãy nhập password từ 8 đến 16 ký tự bao gồm chữ hoa, chữ thường và ít nhất một chữ số");
  });