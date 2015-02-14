Ext.onReady(function(){
	
	Ext.define("MyApp.skating.Jump",{
		waltz  : function(){
			console.log("Waltz: a one-half rotation jump that forms the basis
						 for the axel jump.");
		},

		axel  : function(){
			console.log("Axel: A single axel actually has 1.5 rotations");
		},

		split  : function(){
			console.log("Split: With either a flip, lutz, or loop entry and 
						 split or straddle position in the air.");
		}
	});
￼});