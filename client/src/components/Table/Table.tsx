import { Link } from "react-router-dom";
import { Service, StatusType } from "../Services/Services";
import Status from "../Status/Status";


export type ServiceType ={
    service_id:number;
    name:string;
    status:StatusType;
    comment:string;
}

interface Props {
    data: Array<Service>;
    deleteService: Function;
}

function Table(props: Props) {

    const serviceData = props.data;

    return (

        <table className="table table-hover">
            <thead>
                <tr>
                    <th className="w-25">Full Name</th>
                    <th className="w-25">Status</th>
                    <th className="w-50">Delete</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    serviceData.map(service =>
                        <tr key={service.service_id} className="bg-light">
                            
                            <td>
                               <Link to={`/update/${service.service_id}`}>{service.name}</Link> 
                            </td>

                            <td>
                                <Status type={service.status} />

                            </td>
                            
                            <td>
                                {/* We use the function () before deleteUser since otherwise the client will execute the deleteUser() right as the component would load */}
                                <button 
                                onClick={() => props.deleteService(service.service_id)} 
                                className="btn btn-default"> 
                                    <i className="bi-trash3"></i>
                                </button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>

    );
}

export default Table;