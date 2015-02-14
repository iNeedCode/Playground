#!/usr/bin/env node
var schedule = require('node-schedule');
var ping = require('ping');
var Notification = require('node-notifier');

var rule = new schedule.RecurrenceRule();
rule.minute = new schedule.Range(0, 59, 1);

schedule.scheduleJob(rule, function(){

	var hosts = ['automalik.de'];
	hosts.forEach(function(host){
	    ping.sys.probe(host, function(isAlive){
	        var msg = isAlive ? 'host ' + host + ' is alive' : 'host ' + host + ' is dead';
	        console.log(msg);
	        console.log(isAlive)

			    if (isAlive) {	
				    var notifier = new Notification();
						notifier.notify({
						  "title": "Yuuuuuuuhuhuuu",
						  "subtitle": "Automalik.de ist wieder da!",
						  "message": "Automalik wurde von DomainFactory freigeschaltet.",
						  "sound": "Ping", // case sensitive
						  "contentImage": __dirname + "/automalik.jpg",
						  "appIcon": __dirname + "/automalik.jpg",
						});
					};
	    });
	});


});