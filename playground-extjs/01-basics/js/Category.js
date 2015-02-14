Ext.onReady(function(){

	Ext.define("MyApp.Category",{
    	extend  : "Ext.data.Model",
     	
     	fields  : [
       		"id",
       		"name",
      		"description"
     	]
	});

});