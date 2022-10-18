export type CardType = {
    id: number;
    uid: number;
    name: string;
    description: string;
    phone: string;
    address: string;
    siteURL: string;
    imgURL: string;

}

interface Props {
    data: CardType;
}


function Card(props: Props) {

    
    const cardData = props.data;


    return (
        <>
            {<div className="card m-4 shadow bg-light bg-opacity-10">
                <img src={cardData.imgURL} alt={cardData.name} className="card-img-top" />

                <div><p className="card-text">{cardData.uid}</p></div>
                <div className="card-body">
                    <h2 className="card-title">{cardData.name}</h2>
                    <p className="card-text">{cardData.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{cardData.phone}</li>
                    <li className="list-group-item">{cardData.address}</li>
                </ul>
                <div className="card-body">
                    <a href={cardData.siteURL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">To Website</a>
                </div>

            </div>}



        </>
    );
}

export default Card;