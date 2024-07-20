class KahootInScratch {
    constructor() {
    }
    
    getInfo() {
        return {
            "id": "Kahoot in scratch",
            "name": "Kahoot in scratch",
            "blocks": [
                {
                    "opcode": "Join Kahoot Game",
                    "blockType": "command",
                    "text": "Join game with code [code] and name [name]",
                    "arguments": {
                        "code": {
                            "type": "string",
                            "defaultValue": "06612757"
                        },
                        "name": {
                            "type": "string",
                            "defaultValue": "NeoTG"
                        }
                    }
                },
                {
                    "opcode": "jsonExtract",
                    "blockType": "reporter",
                    "text": "extract [name] from [data]",
                    "arguments": {
                        "name": {
                            "type": "string",
                            "defaultValue": "temperature"
                        },
                        "data": {
                            "type": "string",
                            "defaultValue": '{"temperature": 12.3}'
                        },
                    }
                },
            ],
        };
    }

    /* add methods for blocks */
}

Scratch.extensions.register(new ScratchKahoot())