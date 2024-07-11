import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardTile(props) {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/form/${props.user}`);
    };

    return (
        <div className="card-container">
            <Card style={{ width: '18rem' }} className="cursor-pointer border-none shadow-md" 
            onClick={handleClick}>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardTile;