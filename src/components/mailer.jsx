import { getLocation , position } from './geoloc';

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service:'',
    auth:{
        user: 'margarita.herzog@ethereal.email' ,
        pass: 'bq2VGgxBuWFeyJPWXQ'
    }
});

var mailOptions = {
    from: 'margarita.herzog@ethereal.email',

    to:'johndavience@gmail.com',

    subject:'blah blah',
    text:'w'
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error
            );
    }else{
        console.log('Email sent:' + info.rsponse);
    }
})