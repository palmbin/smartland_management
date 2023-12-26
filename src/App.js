import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const customers = [{
  'id' : 1,
  // 'image' : 'https://placeimg.com/64/64/any',
  'image' : 'https://picsum.photos/64/64/',  
  'name' : '이순신',
  'momname' : '이정/변주영',
  'birthday' : '20/05/05',
  'gender' : '남자',
  'address' : '서울특별시 강남구 도곡동',
  'phonenumber' : '010-1111-1111',
  'posttime' : '2023-12-01 00:00:00'
},
{
  'id' : 2,
  // 'image' : 'https://placeimg.com/64/64/any',
  'image' : 'https://picsum.photos/64/64/',  
  'name' : '신사임당',
  'momname' : '신명화/이지은',
  'birthday' : '19/09/19',
  'gender' : '여자',
  'address' : '강원도 강릉시 율곡로 3139번길 24',
  'phonenumber' : '010-2222-2222',
  'posttime' : '2023-12-02 00:00:00'
},
{
  'id' : 3,
  // 'image' : 'https://placeimg.com/64/64/any',
  'image' : 'https://picsum.photos/64/64/',  
  'name' : '홍길동',
  'momname' : '홍상직/춘섬',
  'birthday' : '19/12/12',
  'gender' : '남자',
  'address' : '서울특별시 종로구 관훈동',
  'phonenumber' : '010-3333-3333',
  'posttime' : '2023-12-03 00:00:00'
},
{
  'id' : 4,
  // 'image' : 'https://placeimg.com/64/64/any',
  'image' : 'https://picsum.photos/64/64/',  
  'name' : '이황',
  'momname' : '이식/박춘천',
  'birthday' : '20/07/17',
  'gender' : '남자',
  'address' : '경상북도 안동시 도산면 온혜리',
  'phonenumber' : '010-1111-5555',
  'posttime' : '2023-12-04 00:00:00'
}
]

class App extends Component {
  render() {
    return (
      <div>
        <Table>
          <TableHead>
          <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>부모이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>주소</TableCell>
              <TableCell>연락처</TableCell>
              <TableCell>등록일시</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(c => {return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} momname={c.momname} birthday={c.birthday} gender={c.gender} address={c.address} phonenumber={c.phonenumber} posttime={c.posttime}/>);})}
          </TableBody>
        </Table>          
      </div>      
    );   
  }
}

// const c = [0, 1, 2, 3];

//class App extends Component {
//  render() {
//    return (
//      <div>
//        customers.map (function(c) {
//            <Customer
//              key={c.id}
//              id={c.id}
//              image={c.image}
//              name={c.name}
//              birthday={c.birthday}
//              gender={c.gender}
//              job={c.job}
//           />
//        });
//       
//      </div>
//    );
//  }
//}

export default App;
