
//const submitButton = document.getElementById('submit');
//submitButton.addEventListener('click', submitForm);


//function submitForm() {
    event.preventDefault();
    const formname = document.getElementById('name').value
    const formemail = document.getElementById('email').value
    const formsubject = document.getElementById('subject').value
    const formmessage = document.getElementById('message').value

    let allinfo = []

    allinfo.push({
        name : formname,
        email: formemail,
        subject: formsubject,
        message: formmessage,
    })

    console.log(allinfo);


    
}