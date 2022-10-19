import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRequest } from "../../Services/api";
import { ServiceType } from "../Table/Table";
import Title from "../Title/Title";
import UpdateForm from "./UpdateForm";


function UpdateService() {
    const { service_id } = useParams();
    const [service, setService] = useState<ServiceType>();
    const [comment, setComment] = useState<string>('');


    useEffect(() => {
        
        
        const res = getRequest(`services/${service_id}`);
        if (!res) {
            console.log('Error');
            
            return;
            
        }

        res.then(res => res.json())
            .then(service => {
                setService(service);
                setComment(service.comment);
            })
    }, [service_id]);



    return (
        <>
            <Title text="Update Your Service">
                <small className="text-muted d-block">
                    <h3>Mailing List</h3>
                </small>
            </Title>

            {
                service &&
                <UpdateForm service={service} />
                
            }
            
<h1>UpdateService works</h1>
        </>
    );
}

export default UpdateService;