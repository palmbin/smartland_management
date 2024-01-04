import React from 'react';
//import Post from 'axios';
import axios from 'axios';

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
            posttime: '',
            fileName: ''
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
            posttime: '',
            fileName: ''

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
        formData.append('posttime', this.state.posttime);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return axios.post(url, formData, config);
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <h1>체험등록</h1>
                프로필 이미지: <input type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange}/><br/>
                이름: <input type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange}/><br/>
                성별: <input type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange}/><br/>
                생년월일: <input type="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange}/><br/>
                부모이름: <input type="text" name="momname" value={this.state.momname} onChange={this.handleValueChange}/><br/>
                연락처: <input type="text" name="phonenumber" value={this.state.phonenumber} onChange={this.handleValueChange}/><br/>
                주소: <input type="text" name="userAddress" value={this.state.userAddress} onChange={this.handleValueChange}/><br/>
                등록일시: <input type="text" name="posttime" value={this.state.posttime} onChange={this.handleValueChange}/><br/>
                <button type="submit">등록하기</button>
            </form>
        )
    }
    
}

export default CustomerAdd;