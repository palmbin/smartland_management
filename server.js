const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id' : 1,
            // 'image' : 'https://placeimg.com/64/64/any',
            'image' : 'https://picsum.photos/64/64/',  
            'name' : '이순신',
            'gender' : '남자',
            'birthday' : '20/05/05',
            'momname' : '이정/변주영',
            'phonenumber' : '010-1111-1111',
            'address' : '서울특별시 강남구 도곡동',
            'time' : '2023-12-01 00:00:00'
          },
          {
            'id' : 2,
            // 'image' : 'https://placeimg.com/64/64/any',
            'image' : 'https://picsum.photos/64/64/',
            'name' : '신사임당',
            'gender' : '여자',
            'birthday' : '19/09/19',
            'momname' : '신명화/이지은',
            'phonenumber' : '010-2222-2222',
            'address' : '강원도 강릉시 율곡로 3139번길 24',
            'time' : '2023-12-02 00:00:00'
          },
          {
            'id' : 3,
            // 'image' : 'https://placeimg.com/64/64/any',
            'image' : 'https://picsum.photos/64/64/',
            'name' : '홍길동',
            'gender' : '남자',
            'birthday' : '19/12/12',
            'momname' : '홍상직/춘섬',
            'phonenumber' : '010-3333-3333',
            'address' : '서울특별시 종로구 관훈동',
            'time' : '2023-12-03 00:00:00'
          },
          {
            'id' : 4,
            // 'image' : 'https://placeimg.com/64/64/any',
            'image' : 'https://picsum.photos/64/64/',  
            'name' : '이황',
            'gender' : '남자',
            'birthday' : '20/07/17',
            'momname' : '이식/박춘천',
            'phonenumber' : '010-1111-5555',
            'address' : '경상북도 안동시 도산면 온혜리',
            'time' : '2023-12-04 00:00:00'
          }
    ]);
});

app.get('/api/hello', (req, res) => {
    res.send({message: 'Hello Express!!!'});
});

app.listen(port, ()=> console.log(`Listening on port ${port}`));
