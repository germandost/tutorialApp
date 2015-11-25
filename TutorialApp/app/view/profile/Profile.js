Ext.define('MyApp.view.profile.Profile', { 
    extend: 'Ext.container.Container',
    alias: 'widget.profileprofile',

    requires: [
        'Ext.layout.container.HBox',
        'MyApp.view.profile.Actions'
    ],

    layout: {
        type : 'hbox',
        pack : 'center'
    },

    initComponent : function(){
        var me = this;
        Ext.apply(me,{
            items : me.buildItems()
        });
        me.callParent(arguments);
    },

    buildItems : function(){
        var me      = this,
            items   = [];
 
 
        items = [{
            xtype  : 'component',
	        html: '<div class="navbar-item h5">Dashboard</div>',
			position : 'left'
		},{
            xtype : 'profileactions',
            flex  : 1
        }];

    	return items;
    }
});

