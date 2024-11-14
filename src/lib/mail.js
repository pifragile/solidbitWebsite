const nodemailer = require('nodemailer');

/**
 * Sends an email using the specified SMTP configuration.
 *
 * @param {string} host - The mail server host.
 * @param {number} port - The mail server port.
 * @param {string} user - The username for the mail server.
 * @param {string} password - The password for the mail server.
 * @param {string} from - The email address to send from.
 * @param {string} to - The recipient's email address.
 * @param {string} subject - The subject of the email.
 * @param {string} text - The plain text body of the email.
 * @param {string} html - The HTML body of the email (optional).
 */
export async function sendEmail({ from, to, subject, text, html }) {
    try {
        // Create a transporter object
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            secure: process.env.MAIL_PORT === 465, // Use secure if port is 465
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        // Define email options
        const mailOptions = {
            from: from,
            to: to,
            subject: subject,
            text: text,
            html: html,
        };

        // Send the email
        const info = await transporter.sendMail(mailOptions);

        console.log(`Email sent: ${info.messageId}`);
    } catch (error) {
        console.error('Error sending email:', error);
    }
}