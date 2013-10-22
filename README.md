# SDP-Jingle-JSON

## What is this?

Ever taken a peek at the data blobs that get sent back and forth in WebRTC
signalling? Yeah, that mess of line-oriented data is SDP. But sometimes
you want to have that data available in JSON, like if you want to use XMPP
Jingle for signalling.

This library will convert raw SDP into JSON that mirrors the structure of
XMPP Jingle content, making it simple to convert the SDP data into an XMPP 
stanza with any of the various JS XMPP libraries, such as [stanza.io](https://github.com/legastero/stanza.io),
or [xmpp-ftw](https://github.com/lloydwatkin/xmpp-ftw).

And since you're working with WebRTC, be sure to check out
[simplewebrtc](http://simplewebrtc.com).


## Installing

```
npm install sdp-jingle-json
```

Also suitable for use with browserify/CommonJS in the browser.

If you're not using browserify or you want AMD support use `sdp-jingle-json.bundle.js`.

## How to use it

```
var sjj = require('sdp-jingle-json');

// I have SDP, but want JSON:
var json = sjj.toSessionJSON(sdpBlob, 'initiator'); // or 'responder'

// I have JSON (a dictionary of session and content descriptions), but want SDP:
var sdp = sjj.toSessionSDP(jsonSession);
```

You can also use `toMediaSDP` and `toMediaJSON` to convert only a single media section.

## Jingle JSON

The format for the generated JSON content is:

```
{
    "action": "",
    "initiator": "",
    "responder": "",
    "sid": "",
    // ---- Content payload
    "grouping": [
        {
            "semantics": "",
            "contents": [],
        } //...
    ],
    "contents": [
        {
           "name": "",
           "creator": "",
           "senders": "",
           "description": {
               // ---- RTP description
               "descType": "rtp",
               "media": "",
               "ssrc": "",
               "ssrcs": [
                   {
                       "ssrc": "",
                       "cname": "",
                       "msid": "",
                       "mslabel": "",
                       "label": ""
                   } //...
               ],
               "bandwidth": "",
               "bandwidthType": "",
               "headerExtensions": [
                   {
                       "id": "",
                       "uri": "",
                       "senders": ""
                   } //...
               ],
               "payloads": [
                   {
                       "id": "",
                       "channels": "",
                       "clockrate": "",
                       "maxptime": "",
                       "ptime": "",
                       "name": "",
                       "parameters": [
                           {
                               "key": "",
                               "value": ""
                           } //...
                       ],
                       "feedback": [
                           {
                               "type": "",
                               "subtype": "",
                               "value": ""
                           } //...
                       ]
                   }
                ],
                "encryption": [
                    {
                        "cipherSuite": "",
                        "keyParams": "",
                        "sessionParams": "",
                        "tag": ""
                    } //...
                ]
           },
           "transport": {
               // ---- ICE UDP transport
               "transType": "iceUdp",
               "ufrag": "",
               "pwd": "",
               "setup": "",
               "candidates": [
                   {
                       "component": "",
                       "foundation": "",
                       "generation": "",
                       "id": "",
                       "ip": "",
                       "network": "",
                       "port": "",
                       "priority": "",
                       "protocol": "",
                       "relAddr": "",
                       "relPort": "",
                       "type": ""
                   } //...
               ],
               "fingerprints": [
                   {
                   "hash": "",
                   "value": ""
                   } // ...
               ]
           }
        } //...
    ]
}
```

## License

MIT

## Created By

If you like this, follow [@lancestout](http://twitter.com/lancestout) or [@HCornflower](http://twitter.com/HCornflower) on twitter.

SDP-Jingle-JSON is derived, in collaboration, from the work done by Philipp Hancke for [strophe.jingle](https://github.com/estos/strophe.jingle).
