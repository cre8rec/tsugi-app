var sendSms = () => {

const accountSid = 'ACfb7496ed2eae8d44811adcf9ab8bae3b';
const authToken = '8475c3dc3aca448163cac508cb72b4f2';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+16042104424',
     to: '+14036059733'
   })
  .then(message => console.log(message.sid));

};

sendSms();