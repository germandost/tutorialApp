/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.container.Container',

    requires: [
        'MyApp.view.main.MainController',
        'Ext.layout.container.HBox',
        'MyApp.view.Canvas'
    ],

    layout        : {
        type  : 'hbox',
        pack: 'start',
        align: 'stretch'
    },

    xtype: 'app-main',

    controller: 'main',
    plugins: 'viewport',
    viewModel: {
        type: 'main'
    },

    cls : 'wrapper',


    items: [{
        xtype: 'panel',
        region: 'west',
        cls: 'west',
        html: '<ul class="nav"> <li> <a href="#"> <span class="nav-caret"> <i class="fa fa-caret-down"></i> </span> <span class="nav-label"> <b class="label rounded label-sm warn"> 5 </b> </span> <span class="nav-icon"><i class="fa fa-bars"></i></span> <span class="nav-text">Dashboard</span> </a> <ul class="nav-sub"> <li> <a href="inbox.html"><span class="nav-text">Inbox</span></a> </li><li> <a href="contact.html"><span class="nav-text">Contacts</span></a> </li><li class="hide"> <a><span class="nav-text">Calendar</span></a> </li><li class="hide"> <a><span class="nav-text">Note</span></a> </li><li class="hide"> <a><span class="nav-text">Todo</span></a> </li></ul> </li><li class="active"> <a href="#/app/docs"><span class="nav-icon"><i class="fa fa-dashboard"></i></span> <span class="nav-text">Manage</span></a> </li><li> <a href="#/app/docs"><span class="nav-icon"><i class="fa fa-line-chart"></i></span> <span class="nav-text">Reports</span></a> </li></ul>',
        width: 200,
        split: true,
        items :{
            xtype   : 'component',
            cls     : 'login-logo',
            html    : '<a href="#"><img src="/resources/images/Logo.png" style="max-height: 20px;"/></a>'
        }
    },{
        region: 'center',
        xtype: 'panel',
        flex: 1,
        cls : 'one',
        items : {
            xtype : 'canvas'
        }
    }]
});