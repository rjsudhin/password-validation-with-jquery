$(document).ready(function() {
  console.log('working done')
  $('#creationPasswordForm').validate({
    rules: {
      newPassword: {
        required: true,
        minlength: 6,
        maxlength: 12,
        regexp: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+]).+$/,
      },
      reenterPassword: {
        required: true,
        equalTo: "#newPwd",
      }
    },

    messages: {
      newPassword: {
        required: "Please enter a password",
        minlength: "Your password must be at least 6 characters",
        maxlength: "Your password cannot exceed 12 characters",
      }, 

      reenterPassword: {
        required: "Please re enter the same password"
      }
    }

  })

})

