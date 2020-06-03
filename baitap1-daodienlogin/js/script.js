function submitForm() 
{
    var firstName = $('#First_Name').val();
    var lastName = $('#Last_Name').val();
    var email = $('#email').val();
    var password = $('#password').val();

    if(firstName == ''){
        $('#First_Name').css('border', 'solid 2px red');
        $('#note1').text('First Name cannot be empty!').css({'color':'red', 'float':'right','padding':'15px'});
        $('#First_Name').css(
            {
                'background-image': 'url(./public/images/icon-error.svg)',
                'background-repeat': 'no-repeat',
                'background-position': 'right'
            }
        );
    }else{
        $('#First_Name').css('border', 'solid 2px green');
        $('#note1').text('');
        $('#First_Name').css(
            {
                'background-image': 'url(./public/images/tick.svg)',
                'background-repeat': 'no-repeat',
                'background-position': 'right'
            }
        );
    }
    if(lastName == ''){
        $('#Last_Name').css('border', 'solid 2px red');
        $('#note2').text('Last Name cannot be empty!').css({'color':'red', 'float':'right','padding':'15px'});
        $('#Last_Name').css(
            {
                'background-image': 'url(./public/images/icon-error.svg)',
                'background-repeat': 'no-repeat',
                'background-position': 'right'
            }
        );
    }else{
        $('#Last_Name').css('border', 'solid 2px green');
        $('#note2').text('');
        $('#Last_Name').css(
            {
                'background-image': 'url(./public/images/tick.svg)',
                'background-repeat': 'no-repeat',
                'background-position': 'right'
            }
        );
    }
    if(email == ''){
        $('#email').css('border', 'solid 2px red');
        $('#note3').text('Email cannot be empty!').css({'color':'red', 'float':'right','padding':'15px'});
        $('#email').css(
            {
                'background-image': 'url(./public/images/icon-error.svg)',
                'background-repeat': 'no-repeat',
                'background-position': 'right'
            }
        );
    }else{
        $('#email').css('border', 'solid 2px green');
        $('#note3').text('');
        $('#email').css(
            {
                'background-image': 'url(./public/images/tick.svg)',
                'background-repeat': 'no-repeat',
                'background-position': 'right'
            }
        );
    }
    if(password == ''){
        $('#password').css('border', 'solid 2px red');
        $('#note4').text('Password cannot be empty!').css({'color':'red', 'float':'right','padding':'15px'});
        $('#password').css(
            {
                'background-image': 'url(./public/images/icon-error.svg)',
                'background-repeat': 'no-repeat',
                'background-position': 'right'
            }
        );
    }else{
        $('#password').css('border', 'solid 2px green');
        $('#note4').text('');
        $('#password').css(
            {
                'background-image': 'url(./public/images/tick.svg)',
                'background-repeat': 'no-repeat',
                'background-position': 'right'
            }
        );
    }
}

