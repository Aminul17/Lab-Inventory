import React, {useState, useEffect} from 'react';
import {useParams, useNavigate} from "react-router-dom";
import "./AddEdit.css";
import fireDb from "../firebase";
import {toast} from "react-toastify";


const initialState = {
    name : "",
    email : "",
    contact : ""
}

function AddEdit() {
    const [state, setState] = useState(initialState);
    const [data, setData] = useState({});

    const {name, email, contact} = state;


    const history = useNavigate();

    //to input data in the form

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setState({...state, [name]: value})
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !email || !contact){
            toast.error("Please Provide the Values")
        } else{
            fireDb.child("contact").push(state, (err) => {
                if(err){
                    toast.error(err);
                } else{
                    toast.success("Contact is added successfully");
                }
            });

            history('/');
        }
    };
    return (
        <div style={{marginTop: "100px"}}>
            <form
                style={{
                    margin: "auto",
                    padding: "15px",
                    maxWidth: "400px",
                    alignContent: "center",
                }}
                onSubmit={handleSubmit}
            >
                <label htmlFor="name">Name</label>
                <input 
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name..."
                    value={name}
                    onChange={handleInputChange}
                    />
                    <br/>
                    <br/>

                <label htmlFor="email">Email</label>
                <input 
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email..."
                    value={email}
                    onChange={handleInputChange}
                    />
                    <br />
                    <br/>

                <label htmlFor="contact">Contact</label>
                <input 
                    type="number"
                    id="contact"
                    name="contact"
                    placeholder="Your contact..."
                    value={contact}
                    onChange={handleInputChange}
                    />

                    <br />
                    <br />
                
                <input type="submit" value="save"/>
            </form>
        </div>
    )
}

export default AddEdit;
