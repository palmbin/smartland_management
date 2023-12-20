import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


class App extends Component {

  state = {
    customers: ""
  }

  componentDidMount() {
      this.callApi()
        .then(res => this.setState({customers: res}))
        .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  render() {
    return (
      <div>
        <Table>
          <TableHead>
          <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>부모이름</TableCell>
              <TableCell>연락처</TableCell>
              <TableCell>주소</TableCell>
              <TableCell>등록일시</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.customers ? this.state.customers.map(c => {return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} gender={c.gender} birthday={c.birthday} momname={c.momname} phonenumber={c.phonenumber} address={c.address} time={c.time}/>);
            }) : ""}
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
