Ext.define('MyApp.view.profile.Actions', { 
    extend        : 'Ext.toolbar.Toolbar',
    alias         : 'widget.profileactions',
    ui            : 'plain',

    requires: [
        'MyApp.view.profile.Menu'
    ],

    cls : 'profile',
    height        : '100%',


    initComponent : function(){
        var me = this;
        Ext.apply(me,{
            items : me.buildItems()
        });
        me.callParent(arguments);
    },

    buildItems : function(){
        var me                = this,
            items = [];

        items = [{
            xtype     : 'button',
            itemId    : 'usermenu',
            arrowCls  : 'dropdown-menu heading-actions-icon',
            text      : '<i class="fa fa-bell-o"></i><span class="label label-sm up warn">3</span>',
            scale     : 'medium',
            cls       : 'heading-username',
            uppercase : false,
            menu      : {
                xtype : 'profilemenu',
                marginTop       : 50
            }
        },{
            xtype     : 'button',
            scale     : 'medium',
            top: 0,
            text    : '<span class="avatar w-32"><img src="/resources/images/a0.jpg"> <i class="on b-white bottom"></i></span>'
        }];


        return Ext.Array.merge(['->'], items);
    }
});

