const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'xyz@xyz.com',
        subject: 'Welcome to the app',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`
    })
}

const sendGoodbyeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'xyz@xyz.com',
        subject: 'Cancel account notification',
        text: `Thank you by choose our app, ${name}. We hope that you get back soon`
    })
}


module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}