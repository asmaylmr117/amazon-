import Card from 'react-bootstrap/Card';

function CardBody ({src, text}) {
    return (
        <Card style={{ width: "48%", border: "none" }}>
            <Card.Img variant="top" src={src}/>
            <Card.Text className='text-[12px] font-bold pt-[4px]'>
                {text}
            </Card.Text>

        </Card>
    )
}

export default CardBody;