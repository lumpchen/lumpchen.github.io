var PDF_DIFF = PDF_DIFF || {};
PDF_DIFF.diff_report_data = {
    "test_pdf_json_obj": {
        "pageCount": 4,
        "fileName": "test.pdf",
        "keywords": "",
        "author": "Li, Mike",
        "subject": "",
        "created": "Fri Nov 17 16:56:16 CST 2017",
        "title": "",
        "version": "1.5",
        "pages": [
            {
                "num": 0,
                "width": 612,
                "imageTag": "test-0.png",
                "height": 792
            },
            {
                "num": 1,
                "width": 612,
                "imageTag": "test-1.png",
                "height": 792
            },
            {
                "num": 2,
                "width": 612,
                "imageTag": "test-2.png",
                "height": 792
            },
            {
                "num": 3,
                "width": 612,
                "imageTag": "test-3.png",
                "height": 792
            }
        ],
        "fileSize": "723078 Bytes",
        "modified": "Fri Nov 17 16:56:16 CST 2017",
        "producer": "Microsoft® Word 2013",
        "location": "C:\\dev\\xdiff\\testcases\\showcase\\misc\\test.pdf"
    },
    "Base_Stroke_Color": "red",
    "Base_Fill_Color": "rgba(138, 43, 226, 0.2)",
    "Test_Fill_Color": "rgba(138, 43, 226, 0.2)",
    "FileFormat": "pdf",
    "diff_accepted_page_nums": [],
    "ShowDifferentPagesOnly": false,
    "Test_Stroke_Color": "red",
    "diff_page_count": 1,
    "page_xor_images": {
        "0": "0-xor.png",
        "1": "1-xor.png",
        "3": "3-xor.png"
    },
    "Rendering_Resolution": 96,
    "diff_page_nums": [0],
    "base_pdf_json_obj": {
        "pageCount": 4,
        "fileName": "control.pdf",
        "keywords": "",
        "author": "Li, Mike",
        "subject": "",
        "created": "Fri Nov 17 14:21:00 CST 2017",
        "title": "",
        "version": "1.5",
        "pages": [
            {
                "num": 0,
                "width": 612,
                "imageTag": "base-0.png",
                "height": 792
            },
            {
                "num": 1,
                "width": 612,
                "imageTag": "base-1.png",
                "height": 792
            },
            {
                "num": 2,
                "width": 612,
                "imageTag": "base-2.png",
                "height": 792
            },
            {
                "num": 3,
                "width": 612,
                "imageTag": "base-3.png",
                "height": 792
            }
        ],
        "fileSize": "723063 Bytes",
        "modified": "Fri Nov 17 14:21:00 CST 2017",
        "producer": "Microsoft® Word 2013",
        "location": "C:\\dev\\xdiff\\testcases\\showcase\\misc\\control.pdf"
    },
    "diff_content_json_obj": [{
        "PageNo": 0,
        "Result": {
            "Path": [],
            "Annot": [],
            "Page": [],
            "Text": [
                {
                    "SubOutline": [
                        [],
                        []
                    ],
                    "AcceptDiffRegion": [
                        [],
                        []
                    ],
                    "Attributes": [{
                        "Equals": false,
                        "Value": [
                            "#INSERT#",
                            "add some text here,"
                        ],
                        "Key": "Text"
                    }],
                    "Outline": [
                        [],
                        [
                            314.106,
                            566.257,
                            86.788,
                            9.072
                        ]
                    ]
                },
                {
                    "SubOutline": [
                        [],
                        []
                    ],
                    "AcceptDiffRegion": [
                        [],
                        []
                    ],
                    "Attributes": [{
                        "Equals": false,
                        "Value": [
                            "has several new standard structure elements and attributes",
                            "#DELETE#"
                        ],
                        "Key": "Text"
                    }],
                    "Outline": [
                        [
                            163.68,
                            201.518,
                            265.599,
                            7.612
                        ],
                        []
                    ]
                }
            ],
            "Image": [],
            "Accept_Difference": []
        }
    }]
}