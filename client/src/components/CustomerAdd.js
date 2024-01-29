import React from 'react';
//import Post from 'axios';
import axios from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles'; 

const styles = theme => ({
    hidden: {
        display: 'none'
    }
});

class CustomerAdd extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            file: null,
            userName : '',
            gender: '',
            birthday: '',
            momname: '',
            phonenumber: '',
            userAddress: '',
            fileName: '',
            open: false
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        this.addCustomer()
            .then((response) => {
                console.log(response.data);
                this.props.stateRefresh();
            })
        this.setState({
            file: null,
            userName : '',
            gender: '',
            birthday: '',
            momname: '',
            phonenumber: '',
            userAddress: '',
            fileName: '',
            open: false
        })                
    }

    handleFileChange = (e) => {
        this.setState({
            file: e.target.files[0],
            fileName: e.target.value
        })
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    addCustomer = () => {
        const url = '/api/customers';
        const formData = new FormData();
        formData.append('image', this.state.file);
        formData.append('name', this.state.userName);
        formData.append('gender', this.state.gender);
        formData.append('birthday', this.state.birthday);
        formData.append('momname', this.state.momname);
        formData.append('phonenumber', this.state.phonenumber);
        formData.append('address', this.state.userAddress);        
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return axios.post(url, formData, config);
    }

    handleClickOpen = () => {
        this.setState({
            open: true
        });
    }

    handleClose = () => {
        this.setState({
            file: null,
            userName : '',
            gender: '',
            birthday: '',
            momname: '',
            phonenumber: '',
            userAddress: '',
            fileName: '',
            open: false
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
                    체험 등록 하기
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>체험 등록</DialogTitle>
                    <DialogContent>
                        <input className={classes.hidden} accept="image/*" id="raised-button-file" type="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange}/>
                        <label htmlFor="raised-button-file">
                            <Button variant="contained" color="primary" component ="span" name="file">
                                {this.state.fileName === "" ? "프로필 이미지 선택" : this.state.fileName}
                            </Button>
                        </label>
                        <br/>                        
                        <TextField label="아이 이름" type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange}/><br/>
                        <TextField label="성별" type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange}/><br/>
                        <TextField label="생년월일" type="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange}/><br/>
                        <TextField label="부모 이름" type="text" name="momname" value={this.state.momname} onChange={this.handleValueChange}/><br/>
                        <TextField label="전화번호" type="text" name="phonenumber" value={this.state.phonenumber} onChange={this.handleValueChange}/><br/>
                        <TextField label="주소" type="text" name="userAddress" value={this.state.userAddress} onChange={this.handleValueChange}/><br/>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={this.handleFormSubmit}>등록</Button>
                        <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
                    </DialogActions>
                </Dialog>
            </div>
            /*
            <form onSubmit={this.handleFormSubmit}>                
                <h1>체험등록</h1>
                프로필 이미지: <input type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange}/><br/>
                이름: <input type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange}/><br/>
                성별: <input type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange}/><br/>
                생년월일: <input type="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange}/><br/>
                부모이름: <input type="text" name="momname" value={this.state.momname} onChange={this.handleValueChange}/><br/>
                연락처: <input type="text" name="phonenumber" value={this.state.phonenumber} onChange={this.handleValueChange}/><br/>
                주소: <input type="text" name="userAddress" value={this.state.userAddress} onChange={this.handleValueChange}/><br/>                
                <button type="submit">등록하기</button>
            </form>
            */
        )
    }
    
}

export default withStyles(styles)(CustomerAdd);