import { useState, useEffect } from "react";
import Card, { CardType } from "../Card/Card";
import Title from "../Title/Title";
import "./Main.css"

export enum displayMode {
    grid = 'grid',
    list = 'list'
}

export enum filterMode {
    default = 'default',
    filtered = 'filtered'
}

interface MainProps {
    defaultDisplay: displayMode;
    defaultFilter: filterMode;
}

function Main(props: MainProps) {

    const [display, setDisplay] = useState<displayMode>(props.defaultDisplay);
    //const [filterToggle, setFilterToggle] = useState<Array<string>>(["default", "filtered"]);
    const [filterToggle, setFilterToggle] = useState<filterMode>(props.defaultFilter);


    const [cards, setCards] = useState<Array<CardType>>([]);

    const [filter, setFilter] = useState<Array<CardType>>([]);
    const [searchPhrase, setSearchPhrase] = useState<string>("")



    function getCards() {
        fetch('http://localhost:3000/cards', {
            method: 'GET'/* ,
            headers:{

            } */
        })
            .then(res => res.json())
            .then(json => {
                setCards(json);

            })
    }

    const onChange = (event: any) => {

        const searchPhrase = event.target.value;
        setSearchPhrase(searchPhrase);


        const newFilter = cards.filter((value) => {
            console.log(searchPhrase);
            console.log(searchPhrase === "");

            console.log(filter);




            return value.name.toLowerCase().includes(searchPhrase.toLowerCase());
        })

        if (searchPhrase === "") {
            setFilter([]);
        } else {
            setFilter(newFilter);
        }

    }



    function changeDisplay(mode: displayMode) {
        setDisplay(mode);
    }

    /*  function changeFilter(filter: filterMode) {
         setFilterToggle(filter)
     } */

    useEffect(getCards, []);



    return (

        <>

            <Title text={`Home Page`}>
                <small className="text-muted d-block">
                    <span>Very interesting bottom text</span>
                </small>
            </Title>

            <div className="search">
                <div className="search-inputs">
                    <input type="text" value={searchPhrase} onChange={onChange} />

                </div>

            </div>

            <div className="d-flex flex-row-reverse me-3">
                <button onClick={(e) => changeDisplay(displayMode.list)} className="btn btn-default">
                    <i className="bi-list-ul"></i>
                </button>
                <button onClick={(e) => changeDisplay(displayMode.grid)} className="btn btn-default">
                    <i className="bi-grid-3x3-gap-fill"></i>
                </button>
            </div>

            <div className={filterToggle}>
                <div className={display}>

                    {cards.map((card) => <Card
                        key={card.id}
                        data={card} />
                    )}


                </div>
            </div>





            {/*  {searchPhrase.length !== 0 && (
                <div className={display}>
                    {filter.map((value, key) => {
                        return (
                            <Card
                                key={value.id}
                                data={value} />
                        );
                    })}
                </div>
            )} */}
        </>
    );
}

export default Main;