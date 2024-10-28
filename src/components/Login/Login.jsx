import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Loginlot from "../../assets/images/animation_llrui7id.json";
import { signInWithEmailAndPassword } from "firebase/auth";


import { auth } from "../Firebase/firebase";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    
    
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const [user, setUser] = useState({
    
    email: "",
    password: "",
  });
  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e)=>{
    e.preventDefault();
    
    const {email, password,}=user;


    if(email &&  password){
      setSubmitButtonDisabled(true)
      signInWithEmailAndPassword(auth, user.email, user.password).then(async (res)=>{
        setSubmitButtonDisabled(false)
        console.log(res)
        navigate("/home/movie")

       
      }).catch((err)=>{
        setSubmitButtonDisabled(false)
        console.log(err)
        alert(err.message)
      })

      
  
      
    
    }else{
      alert("fill all the fields")
    }}
  



  return (
    <div className="boxes">
      <div className="login-form">
        <Form
          className="form"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          method="POST"
        >
          
          
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom03">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="email"
                name="email"
                value={user.email}
                onChange={getUserData}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="password"
                value={user.password}
                onChange={getUserData}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid password.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          
          <div className="flex">
            <button disabled={submitButtonDisabled} onClick={postData} type="submit">Login</button>
          </div>
        </Form>
      </div>
      <div className="lottie">
        <Lottie
          animationData={Loginlot}
          style={{ width: "90%", height: "90%" }}
          loop={true}
          autoplay={true}
        />
      </div>
    </div>
  );
};

export default Login;
