function sendEmail() {
    var nameContact = document.querySelector('.inputBoxinput[name="nameContact"]');
    var emailContact = document.querySelector('.inputBoxinput[name="emailContact"]');
    var subjectContact = document.querySelector('.inputBoxinput[name="subjectContact"]');
    var messageContact = document.querySelector('.messageContact');
    emailContact.send({
            Host: "smtp.gmail.com",
            Username: "webfortravelling@gmail.com",
            Password: "travelling2022",
            To: emailContact.ariaValueMax,
            From: "webfortravellingÂgmail.com",
            Subject: "Reply from travel website",
            Body: "Hi" + nameContact.value + " and message: " + messageContact.value + ". Follow us on the media to get the most useful information about travel!",
        })
        .then(function(message) {
            alert("mail sent successfully" + emailContact.value)
        });
}