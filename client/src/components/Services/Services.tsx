import { useEffect, useState } from "react";
import Table, { ServiceType } from "../Table/Table";
import Title from "../Title/Title";

export type StatusType = 'Active' | 'Expired' | 'Banned';

export interface Service {
    service_id:number;
    name:string;
    status:StatusType;
    comment:string;
}

interface Props {
    addUser: Function;
}



function Services() {


    const [services, setServices] = useState<Array<ServiceType>>([]);



    function getServices() {
        fetch('http://localhost:3000/services', {
            method: 'GET'/* ,
            headers:{
    
            } */
        })
            .then(res => res.json())
            .then(json => {
                setServices(json);
    
            })
    }
    
    
    function deleteService(id: number) {
        console.log('deleteService Func. ServiceID is:', id);
    
        fetch(`http://localhost:3000/services`, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ service_id: id })
    
    
        })
        /* .then(res => res.json()) 
            .then(json => {
                
                useState(() => ({
                    
                    deleteSuccess: true
                }))
    
                setTimeout(() => {
                    useState(() => ({
                        deleteSuccess: false
                    }))
                }, 2000)
            }) */
    
    
    
    
    }
    
    
    useEffect(getServices, [])




    
    return ( 
        <>
         <Title text={`Services Page`}>
                <small className="text-muted d-block">
                    <span>Very interesting stuff about services and stuff</span>
                </small>
            </Title>


            <div>
            <Table data={services} deleteService={deleteService} />
            </div>

        </>
     );
}

export default Services;