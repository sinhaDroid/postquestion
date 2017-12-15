$('document').ready(function() {
    
    /* validation */
    $("#regForm").formValidate({
        rules: {
            firstName: {
                required: true
            },
            last_name: {
                validators: {
                    stringLength: {
                        min: 2
                    },
                    notEmpty: {
                        message: 'This field cannot be left blank.'
                    }
                }
            },
            usn: {
                validators: {
                    stringLength: {
                        min: 10
                    },
                    notEmpty: {
                        message: 'This field cannot be left blank.'
                    }
                }
            },
            college: {
                validators: {
                    stringLength: {
                        min: 4
                    },
                    notEmpty: {
                        message: 'This field cannot be left blank.'
                    }
                }
            },
            course: {
                validators: {
                    notEmpty: {
                        message: 'This field cannot be left blank.'
                    }
                }
            },
            semester: {
                validators: {
                    notEmpty: {
                        message: 'This field cannot be left blank.'
                    }
                }
            }
        }
    })
    .on('success.form.fv', function(e) {
        // Prevent form submission
        e.preventDefault();

        // Get the form instance
        var $form = $(e.target),
            fv = $form.data('formValidate');

        // Use Ajax to submit form data
        $.ajax({
            url: $form.attr('action'),
            type: 'POST',
            data: $form.serialize(),
            success: function(result) {
                // Process the response returned by the server ...
                console.log(responseText);
            }
        });
    });
});