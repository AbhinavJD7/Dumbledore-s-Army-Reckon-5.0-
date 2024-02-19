


const accountSid = 'AC9cfd44760816b984b894ab5e8e781a07';
const authToken = '090ed5db7a97b76ed1a956fd0d568666';
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        body: 'CHL JA BHAUSDIKE ',
        messagingServiceSid: 'MG3e02ce83360a59f0c00b6788b56b784b',
        to: '+917521007110'
    })
    .then(message => {
        console.log('Message SID:', message.sid);
        console.log('Message Status:', message.status);
    })
    .catch(error => {
        console.error('Error:', error);
    });