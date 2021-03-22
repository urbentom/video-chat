export const schema = {
    "models": {
        "ActiveCalls": {
            "name": "ActiveCalls",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "offerCandidates": {
                    "name": "offerCandidates",
                    "isArray": false,
                    "type": {
                        "nonModel": "RTCSessionDescription"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "answerCandidates": {
                    "name": "answerCandidates",
                    "isArray": false,
                    "type": {
                        "nonModel": "RTCSessionDescription"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "offerUser": {
                    "name": "offerUser",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "answerUser": {
                    "name": "answerUser",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "ActiveCalls",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "private",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "RtcSdpType": {
            "name": "RtcSdpType",
            "values": [
                "ANSWER",
                "OFFER",
                "PRANSWER",
                "ROLLBACK"
            ]
        }
    },
    "nonModels": {
        "RTCSessionDescription": {
            "name": "RTCSessionDescription",
            "fields": {
                "sdp": {
                    "name": "sdp",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "RtcSdpType"
                    },
                    "isRequired": true,
                    "attributes": []
                }
            }
        }
    },
    "version": "ef7f391b0c42e99368a7ad77564a9635"
};