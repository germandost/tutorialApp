Ext.define('MyApp.view.Page',{
    extend        : 'Ext.container.Container',
    alias	: 'widget.page',
    requires: [
        'Ext.layout.container.HBox'
    ],
    cls : 'scrollable-wrapper',

    height : '100%',
    items : [{
   		xtype   : 'component',
        flex: 1
	}, {
        xtype   : 'component',
        cls : 'dark',
        width: 100
    }]
});


