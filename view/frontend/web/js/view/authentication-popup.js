define([
    'Magento_Customer/js/view/authentication-popup',
    'Razzzila_SignInPopup/js/model/authentication-popup'
], function (authPopupView, authPopupModel) {
    'use strict';

    return authPopupView.extend({
        defaults: {
            template: 'Razzzila_SignInPopup/authentication-popup'
        },

        /** Init popup login window */
        setModalElement: function (element) {
            if (authPopupModel.modalWindow == null) {
                authPopupModel.createPopUp(element);
            }
        }
    });
});
