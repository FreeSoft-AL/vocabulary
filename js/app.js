
var $app = (function () {

    {% include options.js %}
    {% include _app/settings.js %}
    {% include _app/translate_in_context.js %}
    {% include _app/google_analytics.js %}
    {% include _app/menu.js %}
    {% include _app/l10n.js %}
    {% include _app/page_vocabulary.js %}
    {% include _app/social_share.js %}
    {% include _app/disqus.js %}
    {% include _app/term.js %}
    {% include _app/suggestions.js %}
    {% include _app/translations.js %}
    {% include _app/translation.js %}
    {% include _app/messages.js %}
    {% include _app/http_request.js %}
    
})();
