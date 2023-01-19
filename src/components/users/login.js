import React, { useState } from "react";

import "../../App.css";
import Horuslog from "../assets/img/hor.png";


const Login = () => {
    const [data, setData] = useState({
        user:"",
        password:"",
    });
    const {user,password} = data;
    const changeHandler = e =>{
        setData({...data,[e.target.name]: [e.target.value]});

     
    }


    const submitHandler= e =>{
        e.preventDefault();
        console.log(data);     
    }

    return (

        <div className='container-fluid c1 '>
            <div className="Card Card1" >

                <form className="form-label" onSubmit={submitHandler} >
                    <div className="mb-3 bb2">

                    <img src={Horuslog} alt="" width="290" height="90"/>
                        <div className="mb-3 ">
                            <label  className="tit1">USUARIO</label>

                            <input type="text"
                             className="form-control inpt "
                             name="user"
                             value={user}
                             onChange={changeHandler}
                          />
                       
                        </div>
                        
                        <div className="mb-3 ">
                            <label  className="tit1">PASSWORD</label>
                            <input type="password" name="password"
                             className="form-control inpt"
                             value={password}
                             onChange={changeHandler}
                             />
                          <p>{data.user}</p>
                          

                        </div>
                 
                    </div>

                    <button className='btn btn1' type="submit ">INICIA SESI&Oacute;N</button>

                </form>
            </div>
        </div>



    )
}

export default Login