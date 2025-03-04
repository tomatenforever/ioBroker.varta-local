// filepath: /c:/Users/mathi/source/repos/ioBroker.varta-local/admin/index_m.js
'use strict';

function load(settings, onChange) {
    if (!settings) return;
    $('#hostname').val(settings.hostname);
    $('#interval').val(settings.interval);

    if (onChange) {
        $('input').change(onChange);
        $('select').change(onChange);
        $('textarea').change(onChange);
    }
}

function save(callback) {
    var obj = {
        hostname: $('#hostname').val(),
        interval: $('#interval').val()
    };

    callback(obj);
}

// This will be called by the admin adapter when the settings page loads
if (typeof module !== 'undefined' && module.parent) {
    module.exports = {
        load: load,
        save: save
    };
}