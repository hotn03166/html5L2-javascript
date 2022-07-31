/**
 * HTML5スピードマスター 5-10
 */
var rq = indexedDB.open("zoo", 1);

var employData1 = {id: "k20001", name: 'taro', address: 'tokyo'};
var employData2 = {id: "k20002", name: 'hanako', address: 'saitama'};

rq.onupgradeneeded = function(event) {
	var db = event.target.result;
	var store = db.createObjectStore("employee", {keyPath: "id"});
	var store2 = db.createObjectStore("item");
	store.createIndex("name", "name", {unique: false});
	store.createIndex("address", "address", {unique: true});
	
	store.transaction.oncomplete = function (event) {
		var eos = db.transaction("employee", "readwrite").objectStore("employee");
		eos.add(employData1);
		eos.add(employData2);
		
		var eos2 = db.transaction("item", "readwrite").objectStore("item");
		eos2.add("aaa");
	};
};

rq.onsuccess = function(event) {
	var db = event.target.result;
	console.log(db.name);
	console.log(db.objectStoreNames);
	console.dir(db);
};
