import React,{useState} from 'react'
import { useNavigate } from "react-router-dom"

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

      const postData = async () => {
        try {
          const url = "http://localhost:8000/home";
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            }, body: JSON.stringify({username,password})});
              if (response.ok) {
                const result = await response.json();
                if (result === "true") {
                    sessionStorage.setItem("isAuthenticated", "true");
                    navigate('/home');
                  } else {
                    setErrorMessage(result);
                  }
            } else {
              console.error('Request failed:', response.status);
              setErrorMessage('Đã xảy ra lỗi khi gửi, bạn kiểm tra lại kết nối mạng hoặc tải lại trang nhé');}
          } catch (error) {console.error('Lỗi:', error); }};

    const handleUserName = (e) => {const name = e.target.value; setUsername(name);setErrorMessage('');}
    const handlePassword = (e) => {const pass = e.target.value; setPassword(pass);setErrorMessage('');}

    const handleLogin = async () => {
        if (!username && !password) {
          setErrorMessage('Vui lòng điền tài khoản và mật khẩu');
        } else if (!username) {
          setErrorMessage('Vui lòng điền tài khoản');
        } else if (!password) {
          setErrorMessage('Vui lòng điền mật khẩu');
        } else {
          setLoading(true);
          await postData();
          setLoading(false);
          // alert(`${username}, ${password}`)
        }
      };

  return (
    <div className='py-2'>
        <div className='flex flex-col'>
            <TextField onChange={handleUserName} id="outlined-basic" value={username} label="Tài khoản" variant="outlined" style={{margin:"10px",backgroundColor:"white", borderRadius:"5px"}}/>
            <TextField onChange={handlePassword} type='password' id="outlined-basic" value={password} label="Mật khẩu" variant="outlined" style={{margin:"10px",backgroundColor:"white", borderRadius:"5px"}}/>
        </div>
        {errorMessage && <p className='text-center text-red-500 text-sm'>{errorMessage}</p>}
        <div className='flex justify-between mx-5'>
            <div className='flex items-center'>
                <input type="checkbox"/>
                <span className='text-xs px-1'>Ghi nhớ</span>
            </div>
            <a href="/quen-mat-khau" className='text-xs hover:text-sm hover:text-blue-900 p-2 underline underline-offset-4'>Quên mật khẩu</a>
        </div>

        <div className='flex justify-center p-3'>
            <Button onClick={handleLogin} variant="contained" disabled={loading}>
                {loading ? 'Đang Đăng Nhập...' : 'Đăng Nhập'}
            </Button>
        </div>
  </div>
  )
}
