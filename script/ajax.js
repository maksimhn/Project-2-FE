
// sends a sign in request; hides unnecessary elements
var signIn = function() {
  // event.preventDefault();
  // this.blur();
  $.ajax(sa + '/login', {
    contentType: 'application/json',
    processData: false,
    data: JSON.stringify({
      credentials: {
        email: $('#email').val(),
        password: $('#password').val()
      }
    }),
    dataType: 'json',
    method: 'POST'
  }).done(function(data, textStatus, jqxhr){
    //$('#maincontainer > p').append('<h4>Logged in as ' + data.credentials.email + '</h4>');
  }).fail(function(jqxhr, textStatus, errorThrown){
    alert('Authorization failed. Please check login and password');
    //$('#result').val('login failed');
  });
  $('#email').val('');
  $('#password').val('');
};

// registers a new user with email/password combo
var registerPlayer = function () {
  // event.preventDefault();
  // this.blur();
  $.ajax(sa + '/register', {
    contentType: 'application/json',
    processData: false,
    data: JSON.stringify({
      credentials: {
        email: $('#email').val(),
        password: $('#password').val(),
        password_confirmation: $('#password').val()
      }
    }),
    dataType: 'json',
    method: 'POST'
  }).done(function(data, textStatus, jqxhr){
    //$('#result').val(JSON.stringify(data));
  }).fail(function(jqxhr, textStatus, errorThrown){
    alert('Registration failed. Please check login and password');
    //$('#result').val('registration failed');
  });
  $('#email').val('');
  $('#password').val('');
};
