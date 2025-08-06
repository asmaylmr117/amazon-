import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";



function CardItem ({title, linkText, body }) {
    return (
        <Card style={{ width: '18rem' }} className=' py-[15px] px-[7px] max-w-[319px] max-h-[472px] flex justify-center'>
            <Card.Title className='sm:mb-0 md:mb-[-2px] font-bold ml-[7px]'>{title}</Card.Title>
            <Card.Body className='flex flex-wrap gap-2'>
                    {body}
            </Card.Body>
              <Link className='text-[#78d4e2] ml-[7px] font-bold' to="/products">{linkText}
            </Link>
        </Card>
    )
}

export default CardItem;
