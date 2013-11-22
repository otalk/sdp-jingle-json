"use strict";

var fs = require('fs');
var test = require('tape');
var SJJ = require('../index');
var tojson = require('../lib/tojson');

var jsonData = require('./data/json');
var sdpData = require('./data/sdp');


// Data that is typically unique or time dependent
var sid = '1382398245712';
var time = '1385147470924';

test('to json', function (t) {
    tojson._setIdCounter(0);
    var json = SJJ.toSessionJSON(sdpData, 'initiator');

    t.deepEqual(json, jsonData);
    t.end();
});

test('to sdp', function (t) {
    var sdp = SJJ.toSessionSDP(jsonData, sid, time);
    t.deepEqual(sdp, sdpData);
    t.end();
});

test('multiple pases', function (t) {
    t.plan(2);

    tojson._setIdCounter(0);
    var json1 = SJJ.toSessionJSON(sdpData, 'initiator');
    var sdp1 = SJJ.toSessionSDP(json1, sid, time);

    tojson._setIdCounter(0);
    var json2 = SJJ.toSessionJSON(sdp1, 'initiator');
    var sdp2 = SJJ.toSessionSDP(json2, sid, time);

    t.deepEqual(json2, jsonData);
    t.deepEqual(sdp2, sdpData);
    t.end();
});
