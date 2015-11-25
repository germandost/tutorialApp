Ext.define('MyApp.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',

    requires: [
        'MyApp.view.login.LoginController',
        'Ext.form.Panel',
        'Ext.layout.container.VBox'
    ],
    layout: {
        type  : 'vbox',
        align : 'middle',
        pack  : 'center'
    },

    cls: 'ice',
    bodyCls: 'ice-body',
    controller: 'login',
    bodyPadding: 10,
    title: 'Login Window',
    closable: false,
    autoShow: true,

    items: {
        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            name: 'username',
           fieldLabel: 'Username1',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Password',
            allowBlank: false
        }, {
            xtype: 'displayfield',
            hideEmptyLabel: false,
            value: 'Enter any non-blank password'
        }],
        buttons: [{
            text: 'Login',
            //xtype: "button",
            //formBind: true,
            //listeners: {
            //    click: 'onLoginClick'
            //}
        }]
    }
});