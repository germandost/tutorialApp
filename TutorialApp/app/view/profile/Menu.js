Ext.define('MyApp.view.profile.Menu', { 
    extend        : 'Ext.menu.Menu',
    alias         : 'widget.profilemenu',
    initComponent : function(){
        var me = this;
        Ext.apply(me,{
            border    : false,
            width     : 150,
            defaults  : {
                cls     : 'tw-menu-item-link',
                plain   : true,
                scope   : me,
                handler : me.onClickItem
            },
            items     : me.buildItems()
        });
        me.callParent(arguments);
    },

    cls : 'notifications-menu',
    
    buildItems : function(){
        var me = this;

        return [{
            text    : 'Inbox'
        },{
            text    : 'Profile'
        },{
            text    : 'Settings'
        }];
    }

});

