
var _l10n = {
    /** Translate the application interface. */
    translate: function () {
        // Translate seetings.
        $('#lang').html(_('Language'));
        $('#vocab').html(_('Vocabulary'));
        $('label[for="custom-keyboard"]').html(_('Use Custom Keyboard:'));
        $('#done').html(_('Done'));

        // Translate search.
        $('#search-term').attr('placeholder', _t('Search for a word...'));
        $('#add-new-term').html( _('Add New Term'));

        // Translate menu.
        _menu.update();
    },

    /** Load the translations for the given language. */
    set_language: function (lng) {
        $.getScript('l10n/po/' + lng + '.js')
            .done(_l10n.translate)
            .fail(function () {
                if (lng=='en') return;
                _l10n.set_language('en');
            });
    },
}
