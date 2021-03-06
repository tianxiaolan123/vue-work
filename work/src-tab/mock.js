import Mock from "mockjs"

export default Mock.mock({
    'list|10-20': [

        {
            'title': '@ctitle(3,4)',
            'content': '@ctitle(10,20)',
            'time': '@date(yyyy-mm-dd)',
            'type|1-4': 1,
            'bool': '@boolean'
        }
    ]
});