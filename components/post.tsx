import axios from 'axios'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { flexbox } from '@mui/system';

const Post = ()=> {

    const [value, setValue] = useState("");
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [value3, setValue3] = useState("");
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    const handleChange1 = (e) => {
        setValue1(e.target.value)
    }
    const handleChange2 = (e) => {
        setValue2(e.target.value)
    }
    const handleChange3 = (e) => {
        setValue3(e.target.value)
    }
    const getvalue=()=>{
        const url='https://jsonplaceholder.typicode.com/users'
        axios.post(url,{
            id:value3,
            name:value,
            username:value1,
            email:value2
        }).then((response)=>{
            console.log(response)
        }
        )
        setValue("");
        setValue1("");
        setValue2("");
        setValue3("");
    }
    return(
        <form className='styles.form'>
            <TextField  id="id" label="Enter id" type="number" value={value3} onChange={handleChange3}/>
            <TextField  id="name" label="Enter name" type="text" value={value} onChange={handleChange} />
            <TextField  id="username" label="Enter username" type="text" value={value1} onChange={handleChange1}/>
            <TextField  id="email" label="Enter email" type="email" value={value2} onChange={handleChange2}/>
            <Button variant="contained" onClick={getvalue}>Post</Button>
        </form>
    )
}

export default Post;