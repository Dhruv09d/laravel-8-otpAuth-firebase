$(document).ready(function() {
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCG_wFXQI3k9q7RjWNQSMouiDm7swZQajw",
    authDomain: "otpapp-ba21b.firebaseapp.com",
    projectId: "otpapp-ba21b",
    storageBucket: "otpapp-ba21b.appspot.com",
    messagingSenderId: "1091040079951",
    appId: "1:1091040079951:web:0bf2b5441a3f78bcd0ba3a",
    measurementId: "G-0QHF1CXJ5Q"
  };

  // initialize the firebase
  firebase.initializeApp(firebaseConfig);

  //recaptcha varifier
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
    'size': 'invisible',
    'callback': function (response) {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
      console.log('recaptcha resolved');
    }
    
  });
  onSignInSubmit();
});

function onSignInSubmit() {
    $('#verifPhNum').on('click', function() {
        let phoneNo = '';
        var code = $('#codeToVerify').val();
        console.log(code);
        $(this).attr('disabled', 'disabled');
        $(this).text('processing...');
        confirmationResult.confirm(code).then(function (result) {
            alert('Success');
            var user = result.user;
            console.log(user);
        }.bind($(this))).catch(function (error) {
            $(this).removeAttr('disabled');
            $(this).text('invalid Code');
            setTimeout(()=>{
                $(this).text('verify Phone No');
            }, 2000);
        }.bind($(this)));
    });
  
  
  
  
  
    $('#getcode').on('click', function() {
      var phoneNo = $('#number').val();
      console.log(phoneNo);
  
      var appVerifier = window.recaptchaVerifier;
      firebase.auth().signInWithPhoneNumber(phoneNo, appVerifier).then(function (confirmationResult) {
          window.confirmationResult = confirmationResult;
          coderesult = confirmationResult;
          console.log(coderesult);
      }).catch(function (error) {
          console.log(error.message);
      });
    });
  
  
}