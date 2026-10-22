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

  })

  $('input').blur(function() {
    checkingFields()

  })

})


function checkingFields() {
  console.log('fields are checking everytime is fine')
}