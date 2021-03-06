
var $config = {
    app_url: 'http://v.btranslator.org',
    api_url: 'https://btranslator.org',

    lng: 'sq',
    vocabulary: 'ICT_sq',
    custom_keyboard: false,
    webapp_url: 'https://l10n.org.al',

    // Settings for oauth2 authentication.
    oauth2: {
        app_id: 'vocabulary',
        auth_flow: 'proxy',     // password | proxy
        proxy_endpoint: 'https://l10n.org.al/oauth2/proxy',
        token_endpoint: 'https://btranslator.org/oauth2/token',
        client_id: 'vocabulary-jquery-ict-sq',
        client_secret: 'Wadek9kAwgoovnepecOal8',
        scope: 'user_profile',
    },

    // Use an iframe to narrow the window, when the screen is too wide.
    use_iframe: false,

    // When the user changes the language of translations,
    // the language of the application interface is changed as well.
    update_app_language: true,

    // Enable translation in context for the UI of this application.
    translate_in_context: true,

    // Google Analytics ID (something like: 'UA-XXXX-Y')
    ga_id: null,

    // Links that are displayed on the menu.
    external_links: [
        { title: 'G-Translate',
          href: 'https://translate.google.com/',
        },
    ]
};
