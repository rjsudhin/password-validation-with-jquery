$(document).ready(function() {
  $('input').blur(function() {
    let pass = $('input[name=newPassword]').val()
    let repass = $('input[name=reenterPass').val()

    if ( $('input[name=newPassword]').val() != $('input[name=reenterPass]').val() ) {
      console.log('they are not the same')
      $('#newPwd').removeClass().addClass('has-error')
      $('#rePwd').removeClass().addClass('has-error')
    } else {
      $('#newPwd').removeClass().addClass('pwd-success')
      $('#rePwd').removeClass().addClass('pwd-success')
    }
  
  })
})