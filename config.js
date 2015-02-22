/** App settings. */
var $app_id = 'vocabulary';
var $app_url = 'http://fjalori.fs.al';

/** Vocabulary settings. */
var $vocabulary = 'ICT_sq';
var $lng = 'sq';
var $base_url = 'https://btranslator.org';
var $webapp_url = 'https://l10n.org.al';

/** Settings for oauth2 authentication. */
var $oauth2_settings = {
    app_id: $app_id,
    auth_flow: 'proxy',                  // password | proxy
    proxy_url: 'https://l10n.org.al/user/oauth2_login?proxy=true',
    token_endpoint: $base_url + '/oauth2/token',
    client_id: 'vocabulary-jquery-ict-sq',
    client_secret: 'Wadek9kAwgoovnepecOal8',
    scope: 'user_profile',
};

/** Disqus */
var $disqus_shortname = 'l10n-sq';
