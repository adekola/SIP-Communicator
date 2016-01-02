/*
 * Check out the full guide at
 *   http://sipjs.com/guides/make-call/
 *
 * This sample uses
 *   http://sipjs.com/download/sip-0.7.0.min.js
 *
 * Login with your developer account to receive calls at
 *   http://sipjs.com/demo-phone
 */

var session;


var callButton = document.getElementById('makeCall');
var endButton = document.getElementById('endCall');


//here you determine whether the call has video and audio
var options = {
    media: {
        constraints: {
            audio: true,
            video: true
        },
        render: {
            remote: document.getElementById('remoteVideo'),
            local: document.getElementById('localVideo')
        }
    }
};

callButton.addEventListener("click", function () {

    //Creates a user agent with which to make calls
    var userAgent = new SIP.UA();
    session = userAgent.invite('sip:adekola.m.adebayo@jokola.onsip.com', options);
}, false);



endButton.addEventListener("click", function () {
    session.bye();
    alert("Call Ended");
}, false);

//use the sample code to enable the receipt of calls
var configuration = {
    uri: 'test@example.com',
    authorizationUser: 'test',
    password: 'password',
};

var rUserAgent = new SIP.UA(configuration);

rUserAgent.on('invite', function (session) {
    session.accept({
        media: {
            render: {
                remote: document.getElementById('remoteVideo'),
                local: document.getElementById('localVideo')
            }
        }
    });
});
