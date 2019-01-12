import Mock from 'mockjs';
export default Mock.mock('T1_data', {
  "msg": "请求成功",
  "data": {
    "listTop|6": [
        {
          "c|19-39": 1,  //-50-50"
          "p|31-87": 1,  //0-100
          "m|253-868": 1, //0-1000
          "s|1": ["fine","cold","fine","fine","fine","hot","fine","fine","fine","fine","fine"]
        }
    ],
    "listBottom": [
      {
        "c|11-17": 1
      },
      {
        "c|31-39": 1
      },
      {
        "c|11-17": 1
      },
      {
        "c|31-39": 1
      }
    ]
  },
  "status": "success"
});
