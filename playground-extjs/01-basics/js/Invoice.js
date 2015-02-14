Ext.onReady(function(){
	Ext.define("MyApp.data.Invoice",{
	   config : {
	       client   : '',
	       tax      : 0.083,
	       subtotal : 0,
	       total    : 0
		},

		constructor  : function(config){
  			var me = this;
  			me.initConfig(config);    //Step 2
  		}
	});

});





/*
	Step 2: We have initialized the configurations by executing the initConfig 
			method and passing the configuration's parameter. This is a really
			important step and it's required if we want to use the configuration feature. 
*/