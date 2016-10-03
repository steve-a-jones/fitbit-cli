var http  = require('http');

var server = http.createServer(function (req, res) {
	switch(req.url){
		case '/auth':
        res.writeHead(301, {'Location' : fBAuthUrl()});
    	res.end();
			break;
		case '/':
            console.log('Authorization response received!');
            console.log('Storing authorization info for client-id: ' + getActiveProfileClientId());
            console.log('fbit CLI setup complete for profile, enjoy!');
			break;
		default:
			res.writeHead(404);
			res.end();
	}
});

const storeOAuthInfoForProfile = () => {
    // TODO.
}

const localhostPortConfiguredInFBDevDashboard = () => 8080

const getActiveProfileClientId = () => '123456';

const getActiveProfileScopes = () => 'activity nutrition heartrate location nutrition profile settings sleep social weight';

const getActiveProfileTokenExpireTime = () => '604800';

const fBAuthUrl = () => {
    return 'https://www.fitbit.com/oauth2/authorize?client_id='+getActiveProfileClientId()+'&response_type=code&scope='+getActiveProfileScopes()+'&expires_in='+getActiveProfileTokenExpireTime();
}

const localhostUrlThatRedirectsToFBAuthUrl = () => {
    return 'http://127.0.0.1:8080/auth';
}

server.listen(localhostPortConfiguredInFBDevDashboard(), function () {
	console.log("oAuth server listening on port:", localhostPortConfiguredInFBDevDashboard());
    console.log('Open  ' + localhostUrlThatRedirectsToFBAuthUrl() + '  in your browser to authenticate your profile.');
});