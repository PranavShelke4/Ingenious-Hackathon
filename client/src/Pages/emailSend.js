import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const EmailSend= () => {

    const [email, setEmail] = useState("");

    // Calling to the sendEmail-API
    const sendEmail = async(e) =>{
        e.preventDefault();

        const res = await fetch("/sendemail",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },body:JSON.stringify({
                email
            })
        });
        console.log(res);
    }
   
    return(
        <>
            <div className="container mt-20">
                <div className="d-flex justify-content-center">
                    <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" name="email" placeholder="Enter email" />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={sendEmail}>
                        Send
                    </Button>
                    </Form>
                </div>
            </div>
        </>
    );
}

export default EmailSend;
