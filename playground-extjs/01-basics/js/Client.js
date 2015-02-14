Ext.onReady(function(){

	Ext.define("MyApp.Client", {
		name : "John",
		lastName : "Doe",
     	
     	constructor  : function(config){
   			Ext.apply(this,config || {});
       		console.log("I'm a new client!");
     	}
	});

	// 1. Instanz erzeugt
	var client = Ext.create("MyApp.Client")
	console.log("Name: " + client.name);
    
    // 2. Instanz mit Parameter
	var client2 = Ext.create("MyApp.Client",{
   		name    : 'Susan',
   		lastName: 'Smith'
   	});
	console.log("Name: " + client.name);

});