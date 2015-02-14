// http://docs.sencha.com/ext-js/4-0/#!/guide/getting_started
Ext.onReady(function () {
    
    // for dynamic loading
    //This will ensure that the file containing the code for Ext.container.Viewport is loaded before the application runs
    Ext.require('Ext.container.Viewport');

    Ext.application({
        name: 'HelloExt',
        launch: function() {
            Ext.create('Ext.container.Viewport', {
                layout: 'fit',
                items: [
                    {
                        title: 'Hello World',
                        html : 'Hello! Welcome to Ext JS.'
                    }
                ]
            });
        }
    });
});