export default {
    "scalars": [
        1,
        2,
        6
    ],
    "types": {
        "Article": {
            "id": [
                1
            ],
            "title": [
                2
            ],
            "url": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "ID": {},
        "String": {},
        "Mongo": {
            "url": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "Mutation": {
            "createArticle": [
                0,
                {
                    "title": [
                        2,
                        "String!"
                    ],
                    "url": [
                        2,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                2
            ]
        },
        "Query": {
            "article": [
                0,
                {
                    "articleID": [
                        2,
                        "String!"
                    ]
                }
            ],
            "articles": [
                0
            ],
            "mongo": [
                3
            ],
            "__typename": [
                2
            ]
        },
        "Boolean": {}
    }
}