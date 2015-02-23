
var $config = {
    app_url: 'http://fjalori.fs.al',
    api_url: 'https://btranslator.org',

    lng: 'sq',
    vocabulary: 'ICT_sq',
    webapp_url: 'https://l10n.org.al',

    // Settings for oauth2 authentication.
    oauth2: {
	app_id: 'vocabulary',
	auth_flow: 'password',     // password | proxy
	proxy_url: 'https://l10n.org.al/user/oauth2_login?proxy=true',
	token_endpoint: 'https://btranslator.org/oauth2/token',
	client_id: 'vocabulary-jquery-ict-sq',
	client_secret: 'Wadek9kAwgoovnepecOal8',
	scope: 'user_profile',
    },

    // Disqus.
    disqus: {
	shortname: 'l10n-sq',
    },
};
