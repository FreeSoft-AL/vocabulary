/**
 * Implement "translation in context".
 *
 * It works like this: when the user makes a Ctrl+Click on a
 * string/translation anywhere on the UI, a browser tab/window is
 * opened automatically with the correct url in the translation server
 * (web application), where he can give a translation or a new
 * suggestion for the selected string. (Of course, for a normal Click
 * the UI works as normally it should.)
 *
 * Hopefully this can help to improve the quality of translations,
 * since the user knows the context where the string is being used. It
 * can also facilitate giving feedback and suggestions to the
 * translator(s) of a program.
 */

var _translate_in_context = {
    /**
     * Override the gettext function "_()", so that instead of the
     * translation it returns a "decorated" translation (which can
     * handle Ctrl+Click properly). The function "_t()" will always
     * return the original undecorated translation.
     */
    init: function () {
        // The function "_t()" will always return the original
        // undecorated translation.
        window._t = window._;

        // Override the gettext function "_()", so that instead of the
        // translation it returns a "decorated" translation (which can
        // handle Ctrl+Click properly).
        if ($config.translate_in_context) {
            window._t = window._;
            window._ = _translate_in_context.get_decorated_translation;
            for (var property in window._t)
                window._[property] = window._t[property];

            // Assign event handler to elements of class 'gettext'.
            $(document).ready(_translate_in_context.apply);
        }
    },

    /**
     * Return a "decorated" translation (which can handle Ctrl+Click
     * properly). The ID of the string is included as an attribute.
     */
    get_decorated_translation: function (text) {
        var sguid = Sha1.hash(text);
        var decorated_translation = 
            '<span class="gettext" sguid="' + sguid + '">'
            + _t(text)
            + '</span>';
        return decorated_translation;
    },
    
    /**
     * Return the URL of the selected string on the translation
     * server.
     */
    get_url: function (el) {
        var url = 'https://btranslator.org/translations/';
        if ( _options[$config.lng]
             && _options[$config.lng].translate_in_context_url )
        {
            url = _options[$config.lng].translate_in_context_url;
        }
        var sguid = $(el).attr('sguid');
        return url + $config.lng + '/' + sguid;
    },

    /**
     * Assign the event handler function to the elements with class
     * 'gettext'.
     */
    apply: function () {
        if ($config.translate_in_context) {
            $('.gettext').off('click', _translate_in_context.handle_ctrl_click);
            $('.gettext').on('click', _translate_in_context.handle_ctrl_click); 
        }
    },

    /**
     * Handle the Ctrl+Click event by opening a browser tab with the
     * correct URL. Return 'false' so that the click event fails.
     */
    handle_ctrl_click: function(event) {
        if (event.ctrlKey) {
            var url = _translate_in_context.get_url(this);
            try {
                var w = window.open(url, 'translate');
                w.href= url;
            } catch (e) {}
            finally {
                return false;
            }
        }
    },
};

// Initialize translation in context.
_translate_in_context.init();

