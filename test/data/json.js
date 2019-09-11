module.exports = {
    "contents": [
        {
            "creator": "initiator",
            "name": "0",
            "application": {
                "applicationType": "rtp",
                "media": "audio",
                "payloads": [
                    {
                        "id": "111",
                        "name": "opus",
                        "clockrate": "48000",
                        "channels": "2",
                        "parameters": [
                            {
                                "key": "minptime",
                                "value": "10"
                            },
                            {
                                "key": "useinbandfec",
                                "value": "1"
                            }
                        ],
                        "feedback": [
                            {
                                "id": "111",
                                "type": "transport-cc",
                                "subtype": "",
                                "parameters": []
                            }
                        ]
                    },
                    {
                        "id": "103",
                        "name": "ISAC",
                        "clockrate": "16000",
                        "channels": "1",
                        "parameters": [],
                        "feedback": []
                    },
                    {
                        "id": "104",
                        "name": "ISAC",
                        "clockrate": "32000",
                        "channels": "1",
                        "parameters": [],
                        "feedback": []
                    },
                    {
                        "id": "9",
                        "name": "G722",
                        "clockrate": "8000",
                        "channels": "1",
                        "parameters": [],
                        "feedback": []
                    },
                    {
                        "id": "0",
                        "name": "PCMU",
                        "clockrate": "8000",
                        "channels": "1",
                        "parameters": [],
                        "feedback": []
                    },
                    {
                        "id": "8",
                        "name": "PCMA",
                        "clockrate": "8000",
                        "channels": "1",
                        "parameters": [],
                        "feedback": []
                    },
                    {
                        "id": "106",
                        "name": "CN",
                        "clockrate": "32000",
                        "channels": "1",
                        "parameters": [],
                        "feedback": []
                    },
                    {
                        "id": "105",
                        "name": "CN",
                        "clockrate": "16000",
                        "channels": "1",
                        "parameters": [],
                        "feedback": []
                    },
                    {
                        "id": "13",
                        "name": "CN",
                        "clockrate": "8000",
                        "channels": "1",
                        "parameters": [],
                        "feedback": []
                    },
                    {
                        "id": "110",
                        "name": "telephone-event",
                        "clockrate": "48000",
                        "channels": "1",
                        "parameters": [],
                        "feedback": []
                    },
                    {
                        "id": "112",
                        "name": "telephone-event",
                        "clockrate": "32000",
                        "channels": "1",
                        "parameters": [],
                        "feedback": []
                    },
                    {
                        "id": "113",
                        "name": "telephone-event",
                        "clockrate": "16000",
                        "channels": "1",
                        "parameters": [],
                        "feedback": []
                    },
                    {
                        "id": "126",
                        "name": "telephone-event",
                        "clockrate": "8000",
                        "channels": "1",
                        "parameters": [],
                        "feedback": []
                    }
                ],
                "port": "9",
                "encryption": [],
                "feedback": [],
                "headerExtensions": [
                    {
                        "id": "1",
                        "senders": "both",
                        "uri": "urn:ietf:params:rtp-hdrext:ssrc-audio-level"
                    },
                    {
                        "id": "2",
                        "senders": "both",
                        "uri": "http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01"
                    },
                    {
                        "id": "3",
                        "senders": "both",
                        "uri": "urn:ietf:params:rtp-hdrext:sdes:mid"
                    },
                    {
                        "id": "4",
                        "senders": "both",
                        "uri": "urn:ietf:params:rtp-hdrext:sdes:rtp-stream-id"
                    },
                    {
                        "id": "5",
                        "senders": "both",
                        "uri": "urn:ietf:params:rtp-hdrext:sdes:repaired-rtp-stream-id"
                    }
                ],
                "ssrc": "1357361180",
                "mux": true,
                "sourceGroups": [],
                "sources": [
                    {
                        "ssrc": "1357361180",
                        "parameters": [
                            {
                                "key": "cname",
                                "value": "l4UVyLdoOcWXiwUs"
                            },
                            {
                                "key": "msid",
                                "value": "H48tXd3FYkzxkS2CnnyKjnUWYqUYthkLy4ta 40c1b8ba-4986-42ad-9b60-0d2c15355a70"
                            },
                            {
                                "key": "mslabel",
                                "value": "H48tXd3FYkzxkS2CnnyKjnUWYqUYthkLy4ta"
                            },
                            {
                                "key": "label",
                                "value": "40c1b8ba-4986-42ad-9b60-0d2c15355a70"
                            }
                        ]
                    }
                ]
            },
            "transport": {
                "transportType": "iceUdp",
                "candidates": [],
                "fingerprints": [
                    {
                        "hash": "sha-256",
                        "value": "AE:F3:14:B8:BD:7D:43:F7:B9:DD:0B:73:6A:0C:2B:FB:81:26:7C:7D:34:A6:F3:4B:01:AF:9A:6E:D0:58:74:AE",
                        "setup": "actpass"
                    }
                ],
                "trickleIce": true,
                "ufrag": "tMuf",
                "pwd": "86QW7lRCWJVsrKy/4NTMDNKr"
            },
            "senders": "both"
        },
        {
            "creator": "initiator",
            "name": "1",
            "application": {
                "applicationType": "rtp",
                "media": "video",
                "payloads": [
                    {
                        "id": "96",
                        "name": "VP8",
                        "clockrate": "90000",
                        "channels": "1",
                        "parameters": [],
                        "feedback": [
                            {
                                "id": "96",
                                "type": "goog-remb",
                                "subtype": "",
                                "parameters": []
                            },
                            {
                                "id": "96",
                                "type": "transport-cc",
                                "subtype": "",
                                "parameters": []
                            },
                            {
                                "id": "96",
                                "type": "ccm",
                                "subtype": "fir",
                                "parameters": []
                            },
                            {
                                "id": "96",
                                "type": "nack",
                                "subtype": "",
                                "parameters": []
                            },
                            {
                                "id": "96",
                                "type": "nack",
                                "subtype": "pli",
                                "parameters": []
                            }
                        ]
                    },
                    {
                        "id": "97",
                        "name": "rtx",
                        "clockrate": "90000",
                        "channels": "1",
                        "parameters": [
                            {
                                "key": "apt",
                                "value": "96"
                            }
                        ],
                        "feedback": []
                    },
                    {
                        "id": "98",
                        "name": "VP9",
                        "clockrate": "90000",
                        "channels": "1",
                        "parameters": [
                            {
                                "key": "profile-id",
                                "value": "0"
                            }
                        ],
                        "feedback": [
                            {
                                "id": "98",
                                "type": "goog-remb",
                                "subtype": "",
                                "parameters": []
                            },
                            {
                                "id": "98",
                                "type": "transport-cc",
                                "subtype": "",
                                "parameters": []
                            },
                            {
                                "id": "98",
                                "type": "ccm",
                                "subtype": "fir",
                                "parameters": []
                            },
                            {
                                "id": "98",
                                "type": "nack",
                                "subtype": "",
                                "parameters": []
                            },
                            {
                                "id": "98",
                                "type": "nack",
                                "subtype": "pli",
                                "parameters": []
                            }
                        ]
                    },
                    {
                        "id": "99",
                        "name": "rtx",
                        "clockrate": "90000",
                        "channels": "1",
                        "parameters": [
                            {
                                "key": "apt",
                                "value": "98"
                            }
                        ],
                        "feedback": []
                    },
                    {
                        "id": "100",
                        "name": "VP9",
                        "clockrate": "90000",
                        "channels": "1",
                        "parameters": [
                            {
                                "key": "profile-id",
                                "value": "2"
                            }
                        ],
                        "feedback": [
                            {
                                "id": "100",
                                "type": "goog-remb",
                                "subtype": "",
                                "parameters": []
                            },
                            {
                                "id": "100",
                                "type": "transport-cc",
                                "subtype": "",
                                "parameters": []
                            },
                            {
                                "id": "100",
                                "type": "ccm",
                                "subtype": "fir",
                                "parameters": []
                            },
                            {
                                "id": "100",
                                "type": "nack",
                                "subtype": "",
                                "parameters": []
                            },
                            {
                                "id": "100",
                                "type": "nack",
                                "subtype": "pli",
                                "parameters": []
                            }
                        ]
                    },
                    {
                        "id": "101",
                        "name": "rtx",
                        "clockrate": "90000",
                        "channels": "1",
                        "parameters": [
                            {
                                "key": "apt",
                                "value": "100"
                            }
                        ],
                        "feedback": []
                    },
                    {
                        "id": "102",
                        "name": "H264",
                        "clockrate": "90000",
                        "channels": "1",
                        "parameters": [
                            {
                                "key": "level-asymmetry-allowed",
                                "value": "1"
                            },
                            {
                                "key": "packetization-mode",
                                "value": "1"
                            },
                            {
                                "key": "profile-level-id",
                                "value": "42001f"
                            }
                        ],
                        "feedback": [
                            {
                                "id": "102",
                                "type": "goog-remb",
                                "subtype": "",
                                "parameters": []
                            },
                            {
                                "id": "102",
                                "type": "transport-cc",
                                "subtype": "",
                                "parameters": []
                            },
                            {
                                "id": "102",
                                "type": "ccm",
                                "subtype": "fir",
                                "parameters": []
                            },
                            {
                                "id": "102",
                                "type": "nack",
                                "subtype": "",
                                "parameters": []
                            },
                            {
                                "id": "102",
                                "type": "nack",
                                "subtype": "pli",
                                "parameters": []
                            }
                        ]
                    },
                    {
                        "id": "122",
                        "name": "rtx",
                        "clockrate": "90000",
                        "channels": "1",
                        "parameters": [
                            {
                                "key": "apt",
                                "value": "102"
                            }
                        ],
                        "feedback": []
                    },
                    {
                        "id": "127",
                        "name": "H264",
                        "clockrate": "90000",
                        "channels": "1",
                        "parameters": [
                            {
                                "key": "level-asymmetry-allowed",
                                "value": "1"
                            },
                            {
                                "key": "packetization-mode",
                                "value": "0"
                            },
                            {
                                "key": "profile-level-id",
                                "value": "42001f"
                            }
                        ],
                        "feedback": [
                            {
                                "id": "127",
                                "type": "goog-remb",
                                "subtype": "",
                                "parameters": []
                            },
                            {
                                "id": "127",
                                "type": "transport-cc",
                                "subtype": "",
                                "parameters": []
                            },
                            {
                                "id": "127",
                                "type": "ccm",
                                "subtype": "fir",
                                "parameters": []
                            },
                            {
                                "id": "127",
                                "type": "nack",
                                "subtype": "",
                                "parameters": []
                            },
                            {
                                "id": "127",
                                "type": "nack",
                                "subtype": "pli",
                                "parameters": []
                            }
                        ]
                    },
                    {
                        "id": "121",
                        "name": "rtx",
                        "clockrate": "90000",
                        "channels": "1",
                        "parameters": [
                            {
                                "key": "apt",
                                "value": "127"
                            }
                        ],
                        "feedback": []
                    },
                    {
                        "id": "125",
                        "name": "H264",
                        "clockrate": "90000",
                        "channels": "1",
                        "parameters": [
                            {
                                "key": "level-asymmetry-allowed",
                                "value": "1"
                            },
                            {
                                "key": "packetization-mode",
                                "value": "1"
                            },
                            {
                                "key": "profile-level-id",
                                "value": "42e01f"
                            }
                        ],
                        "feedback": [
                            {
                                "id": "125",
                                "type": "goog-remb",
                                "subtype": "",
                                "parameters": []
                            },
                            {
                                "id": "125",
                                "type": "transport-cc",
                                "subtype": "",
                                "parameters": []
                            },
                            {
                                "id": "125",
                                "type": "ccm",
                                "subtype": "fir",
                                "parameters": []
                            },
                            {
                                "id": "125",
                                "type": "nack",
                                "subtype": "",
                                "parameters": []
                            },
                            {
                                "id": "125",
                                "type": "nack",
                                "subtype": "pli",
                                "parameters": []
                            }
                        ]
                    },
                    {
                        "id": "107",
                        "name": "rtx",
                        "clockrate": "90000",
                        "channels": "1",
                        "parameters": [
                            {
                                "key": "apt",
                                "value": "125"
                            }
                        ],
                        "feedback": []
                    },
                    {
                        "id": "108",
                        "name": "H264",
                        "clockrate": "90000",
                        "channels": "1",
                        "parameters": [
                            {
                                "key": "level-asymmetry-allowed",
                                "value": "1"
                            },
                            {
                                "key": "packetization-mode",
                                "value": "0"
                            },
                            {
                                "key": "profile-level-id",
                                "value": "42e01f"
                            }
                        ],
                        "feedback": [
                            {
                                "id": "108",
                                "type": "goog-remb",
                                "subtype": "",
                                "parameters": []
                            },
                            {
                                "id": "108",
                                "type": "transport-cc",
                                "subtype": "",
                                "parameters": []
                            },
                            {
                                "id": "108",
                                "type": "ccm",
                                "subtype": "fir",
                                "parameters": []
                            },
                            {
                                "id": "108",
                                "type": "nack",
                                "subtype": "",
                                "parameters": []
                            },
                            {
                                "id": "108",
                                "type": "nack",
                                "subtype": "pli",
                                "parameters": []
                            }
                        ]
                    },
                    {
                        "id": "109",
                        "name": "rtx",
                        "clockrate": "90000",
                        "channels": "1",
                        "parameters": [
                            {
                                "key": "apt",
                                "value": "108"
                            }
                        ],
                        "feedback": []
                    },
                    {
                        "id": "124",
                        "name": "H264",
                        "clockrate": "90000",
                        "channels": "1",
                        "parameters": [
                            {
                                "key": "level-asymmetry-allowed",
                                "value": "1"
                            },
                            {
                                "key": "packetization-mode",
                                "value": "1"
                            },
                            {
                                "key": "profile-level-id",
                                "value": "4d0032"
                            }
                        ],
                        "feedback": [
                            {
                                "id": "124",
                                "type": "goog-remb",
                                "subtype": "",
                                "parameters": []
                            },
                            {
                                "id": "124",
                                "type": "transport-cc",
                                "subtype": "",
                                "parameters": []
                            },
                            {
                                "id": "124",
                                "type": "ccm",
                                "subtype": "fir",
                                "parameters": []
                            },
                            {
                                "id": "124",
                                "type": "nack",
                                "subtype": "",
                                "parameters": []
                            },
                            {
                                "id": "124",
                                "type": "nack",
                                "subtype": "pli",
                                "parameters": []
                            }
                        ]
                    },
                    {
                        "id": "120",
                        "name": "rtx",
                        "clockrate": "90000",
                        "channels": "1",
                        "parameters": [
                            {
                                "key": "apt",
                                "value": "124"
                            }
                        ],
                        "feedback": []
                    },
                    {
                        "id": "123",
                        "name": "H264",
                        "clockrate": "90000",
                        "channels": "1",
                        "parameters": [
                            {
                                "key": "level-asymmetry-allowed",
                                "value": "1"
                            },
                            {
                                "key": "packetization-mode",
                                "value": "1"
                            },
                            {
                                "key": "profile-level-id",
                                "value": "640032"
                            }
                        ],
                        "feedback": [
                            {
                                "id": "123",
                                "type": "goog-remb",
                                "subtype": "",
                                "parameters": []
                            },
                            {
                                "id": "123",
                                "type": "transport-cc",
                                "subtype": "",
                                "parameters": []
                            },
                            {
                                "id": "123",
                                "type": "ccm",
                                "subtype": "fir",
                                "parameters": []
                            },
                            {
                                "id": "123",
                                "type": "nack",
                                "subtype": "",
                                "parameters": []
                            },
                            {
                                "id": "123",
                                "type": "nack",
                                "subtype": "pli",
                                "parameters": []
                            }
                        ]
                    },
                    {
                        "id": "119",
                        "name": "rtx",
                        "clockrate": "90000",
                        "channels": "1",
                        "parameters": [
                            {
                                "key": "apt",
                                "value": "123"
                            }
                        ],
                        "feedback": []
                    },
                    {
                        "id": "114",
                        "name": "red",
                        "clockrate": "90000",
                        "channels": "1",
                        "parameters": [],
                        "feedback": []
                    },
                    {
                        "id": "115",
                        "name": "rtx",
                        "clockrate": "90000",
                        "channels": "1",
                        "parameters": [
                            {
                                "key": "apt",
                                "value": "114"
                            }
                        ],
                        "feedback": []
                    },
                    {
                        "id": "116",
                        "name": "ulpfec",
                        "clockrate": "90000",
                        "channels": "1",
                        "parameters": [],
                        "feedback": []
                    }
                ],
                "port": "9",
                "encryption": [],
                "feedback": [],
                "headerExtensions": [
                    {
                        "id": "14",
                        "senders": "both",
                        "uri": "urn:ietf:params:rtp-hdrext:toffset"
                    },
                    {
                        "id": "13",
                        "senders": "both",
                        "uri": "http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time"
                    },
                    {
                        "id": "12",
                        "senders": "both",
                        "uri": "urn:3gpp:video-orientation"
                    },
                    {
                        "id": "2",
                        "senders": "both",
                        "uri": "http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01"
                    },
                    {
                        "id": "11",
                        "senders": "both",
                        "uri": "http://www.webrtc.org/experiments/rtp-hdrext/playout-delay"
                    },
                    {
                        "id": "6",
                        "senders": "both",
                        "uri": "http://www.webrtc.org/experiments/rtp-hdrext/video-content-type"
                    },
                    {
                        "id": "7",
                        "senders": "both",
                        "uri": "http://www.webrtc.org/experiments/rtp-hdrext/video-timing"
                    },
                    {
                        "id": "8",
                        "senders": "both",
                        "uri": "http://tools.ietf.org/html/draft-ietf-avtext-framemarking-07"
                    },
                    {
                        "id": "9",
                        "senders": "both",
                        "uri": "http://www.webrtc.org/experiments/rtp-hdrext/color-space"
                    },
                    {
                        "id": "3",
                        "senders": "both",
                        "uri": "urn:ietf:params:rtp-hdrext:sdes:mid"
                    },
                    {
                        "id": "4",
                        "senders": "both",
                        "uri": "urn:ietf:params:rtp-hdrext:sdes:rtp-stream-id"
                    },
                    {
                        "id": "5",
                        "senders": "both",
                        "uri": "urn:ietf:params:rtp-hdrext:sdes:repaired-rtp-stream-id"
                    }
                ],
                "ssrc": "230994796",
                "mux": true,
                "rsize": true,
                "sourceGroups": [
                    {
                        "semantics": "FID",
                        "sources": [
                            "230994796",
                            "1243325027"
                        ]
                    }
                ],
                "sources": [
                    {
                        "ssrc": "230994796",
                        "parameters": [
                            {
                                "key": "cname",
                                "value": "l4UVyLdoOcWXiwUs"
                            },
                            {
                                "key": "msid",
                                "value": "H48tXd3FYkzxkS2CnnyKjnUWYqUYthkLy4ta cdb21b44-1ec2-456f-a5bd-5837a89af8f6"
                            },
                            {
                                "key": "mslabel",
                                "value": "H48tXd3FYkzxkS2CnnyKjnUWYqUYthkLy4ta"
                            },
                            {
                                "key": "label",
                                "value": "cdb21b44-1ec2-456f-a5bd-5837a89af8f6"
                            }
                        ]
                    },
                    {
                        "ssrc": "1243325027",
                        "parameters": [
                            {
                                "key": "cname",
                                "value": "l4UVyLdoOcWXiwUs"
                            },
                            {
                                "key": "msid",
                                "value": "H48tXd3FYkzxkS2CnnyKjnUWYqUYthkLy4ta cdb21b44-1ec2-456f-a5bd-5837a89af8f6"
                            },
                            {
                                "key": "mslabel",
                                "value": "H48tXd3FYkzxkS2CnnyKjnUWYqUYthkLy4ta"
                            },
                            {
                                "key": "label",
                                "value": "cdb21b44-1ec2-456f-a5bd-5837a89af8f6"
                            }
                        ]
                    }
                ]
            },
            "transport": {
                "transportType": "iceUdp",
                "candidates": [],
                "fingerprints": [
                    {
                        "hash": "sha-256",
                        "value": "AE:F3:14:B8:BD:7D:43:F7:B9:DD:0B:73:6A:0C:2B:FB:81:26:7C:7D:34:A6:F3:4B:01:AF:9A:6E:D0:58:74:AE",
                        "setup": "actpass"
                    }
                ],
                "trickleIce": true,
                "ufrag": "tMuf",
                "pwd": "86QW7lRCWJVsrKy/4NTMDNKr"
            },
            "senders": "both"
        },
        {
            "creator": "initiator",
            "name": "2",
            "application": {
                "applicationType": "datachannel",
                "port": "9",
                "sctpPort": "5000",
                "maxMessageSize": "262144"
            },
            "transport": {
                "transportType": "iceUdp",
                "candidates": [],
                "fingerprints": [
                    {
                        "hash": "sha-256",
                        "value": "AE:F3:14:B8:BD:7D:43:F7:B9:DD:0B:73:6A:0C:2B:FB:81:26:7C:7D:34:A6:F3:4B:01:AF:9A:6E:D0:58:74:AE",
                        "setup": "actpass"
                    }
                ],
                "sctp": [],
                "trickleIce": true,
                "ufrag": "tMuf",
                "pwd": "86QW7lRCWJVsrKy/4NTMDNKr"
            }
        }
    ],
    "groups": [
        {
            "semantics": "BUNDLE",
            "contents": [
                "0",
                "1",
                "2"
            ]
        }
    ]
};
