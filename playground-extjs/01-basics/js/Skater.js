Ext.onReady(function(){
  
  Ext.define("MyApp.single.Skater",{
    extend : "Ext.util.Observable",  //Step 1 
    mixins : {
      jump  : "js/Jump",
      spin  : "js/Spin",
      footwork: "js/Footwork"
    },

    constructor  : function(options){
      Ext.apply(this,options);  //Step 3
    },

    compete  : function(){  //Step 4
      var me = this;

      console.log(me.name+" from "+me.nationality+" starts the program! Good luck!");
      me.waltz();
      me.mohawk();
      me.camel();
      me.axel();
      me.spreadeagle();
      me.scratch();
      console.log(me.name+" ends the program and gets the first place!");
    }
    
    });

  var taky = Ext.create("MyApp.single.Skater",{
     name      : "Taky",
     nationality  : "Japan"
   });
   taky.compete();

});

/*
*
*  Step 1: We have extended from the Observable class, this will allow us to implement 
*          events and listeners. We will explore more about events in future chapters, 
*          for now we will use the class as an example.
*
*  Step 2: We have defined an object with the mixins we want to apply to our class. 
*          This will allow us to use all the methods and properties from those classes 
*          in our Skater class. We're mixing all the classes to have one with all the 
*          functionality from all of them.
*
*  Step 3: We've created the constructor method. This receives a parameter that should
*          be an object to be applied to the instance at runtime. This will allow us to 
*          configure our instance easily.
*
*  Step 4: Step 4: We created the compete method. This method defines the skater's program
*          for the competition. Note that this method contains calls to the methods defined
*          in the mixed classes. We can call all the Jump, Spin, and Footwork methods! We're
*          also using the name and nationality properties, which should be set at runtime
*          when we create instances.
*/