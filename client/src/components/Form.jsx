import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RotatingLines } from 'react-loader-spinner'

function Form() {

    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const params = useParams();

    const handleSubmit = async(event) => {
        event.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(
                `http://localhost:3001/user/data/${params.user}`,
                {
                "name": name,
                "email": email, 
                "phoneNumber": number, 
            });
            if(response.status == 200) {
                toast.success("Joined!!");
                setLoading(false);
                setName("");
                setEmail("");
                setNumber("");
            }
        } catch(err) {
            console.log(err);
        }
    };

    return (
        <div>
            <ToastContainer />
            <form className="w-[30vw] py-8 px-10 shadow-lg rounded-md max-sm:w-[85vw] 
            max-sm:px-5 max-sm:py-4" onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" placeholder="Enter your name" 
                    value={name} onChange={e => setName(e.target.value)}/>
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
                    <button className="bg-[#00715D] text-white px-4 py-2 
                    rounded flex justify-center">
                        {
                            loading ?
                            <RotatingLines
                            visible={true}
                            height="30"
                            width="30"
                            strokeWidth="5"
                            strokeColor="white"
                            animationDuration="0.75"
                            ariaLabel="rotating-lines-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            /> : <> Send Message </>
                        }
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form;