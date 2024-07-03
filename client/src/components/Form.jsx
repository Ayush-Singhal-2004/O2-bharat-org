import { useState } from "react";
import axios from "axios";

function Form() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async(event) => {
        event.preventDefault();

        try {
            const response = await axios.post("http://localhost:3001/user/data", {
                "firstName": firstName, 
                "lastName": lastName, 
                "phoneNumber": number, 
                "email": email, 
                "message": message
            });
            if(response.status == 200) {
                setFirstName("");
                setLastName("");
                setEmail("");
                setMessage("");
                setNumber("");
            }
        } catch(err) {
            console.log(err);
        }
    };

    return (
        <form className="w-[30vw] py-8 px-10 shadow-lg rounded-md max-sm:w-[85vw] 
        max-sm:px-5 max-sm:py-4" onSubmit={handleSubmit}>
            <div>
                <label>First Name</label>
                <input type="text" placeholder="Enter your name" 
                value={firstName} onChange={e => setFirstName(e.target.value)}/>
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" placeholder="Enter your name" 
                value={lastName} onChange={e => setLastName(e.target.value)}/>
            </div>
            <div>
                <label>Phone Number</label>
                <input type="text" placeholder="Enter your number"
                value={number} onChange={e => setNumber(e.target.value)} />
            </div>
            <div>
                <label>Email</label>
                <input type="text" placeholder="Enter your email" 
                value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Message</label>
                <textarea type="text" placeholder="Enter your message"
                className="resize-none px-2 py-1"
                value={message} onChange={e => setMessage(e.target.value)} />
            </div>
            <div>    
                <button className="bg-[#00715D] text-white px-4 py-2 
                rounded">
                    Send Message
                </button>
            </div>
        </form>
    )
}

export default Form;