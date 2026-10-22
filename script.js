$(document).ready(function() {
  console.log('working done')

  $('#creationPasswordForm').validate({
    rules: {
      newPassword: {
        required: true,
        minlength: 5,
      },
      reenterPassword: {
        required: true,
        minlength: 5,
        equalTo: "#newPwd"
      }
    },

    messages: {
      newPassword: {
        required: "Please enter password"
      }, 

      reenterPassword: {
        required: "Please re enter the same password"
      }
    }

  })

  $('input').blur(function() {
    checkingFields()

  })

})


function checkingFields() {
  console.log('fields are checking everytime is fine')
}