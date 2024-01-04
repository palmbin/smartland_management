import React, { Component } from 'react';
import Customer from './components/Customer';
import CustomerAdd from './components/CustomerAdd';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  root: {
    width:'90%',
    // marginTop: theme.spacing.unit * 3,
    marginTop: theme.spacing(3),
    marginLeft: 20,
    marginRight: 20,
    overflowX: "auto",
    align: 'center'
  },
  table: {
    minWith: "auto",
    align: 'center'
  },
  progress: {
    //margin:theme.spacing.unit * 2
    marginTop: theme.spacing(2)
  }
});


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      customers: '',
      completed: 0
    }
  }

  stateRefresh = () => {
    this.setState({
      customers: '',
      completed: 0
    });
    this.callApi()
    .then(res => this.setState({customers: res}))
    .catch(err => console.log(err));

  }
  
  componentDidMount() {
      this.timer = setInterval(this.progress, 20);
      this.callApi()
        .then(res => this.setState({customers: res}))
        .catch(err => console.log(err));     
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root}>
          <Table className={classes.table}>
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
              {this.state.customers ? this.state.customers.map(c => {
                return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} gender={c.gender} birthday={c.birthday} momname={c.momname} phonenumber={c.phonenumber} address={c.address} posttime={c.posttime}/>);
              }) : 
              <TableRow>
                <TableCell colSpan="6" align="center">
                  <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed}/>
                </TableCell>
              </TableRow>
              }
            </TableBody>
          </Table>
        </Paper>
        <CustomerAdd stateRefresh={this.stateRefresh}/>
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

export default withStyles(styles)(App);
