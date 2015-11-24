Ext.define('MyApp.view.Canvas',{
    extend        : 'Ext.container.Container',
    alias	: 'widget.canvas',
    requires: [
        'MyApp.view.main.MainController',
        'Ext.layout.container.VBox',
        'MyApp.view.profile.Profile',
        'MyApp.view.Page'
    ],


    height: '100%',
    layout: 'fit',
    
    cls: 'canvas',
    items : [{
    	xtype : 'profileprofile',
    	cls   : 'heading'
    },{
   		xtype   : 'page',
        flex: 1
	}],
});


