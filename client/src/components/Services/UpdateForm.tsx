import { ErrorMessage, Formik, validateYupSchema } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { patchRequest } from "../../Services/api";
import { ServiceType } from "../Table/Table";
import { Service } from "./Services";
//import { IErrors } from "../auth/Login";

interface Props {
    service: ServiceType;
    /* data:Array<Service>; */

}



function UpdateForm(props: Props) {
    const navigate = useNavigate();
    const [errMsg, setErrorMsg] = useState<string>('');
    const service = props.service;
    const [services, setServices] = useState<Array<ServiceType>>([])

    const [status, setStatus] =useState<Array<string>>(['Active', 'Disabled'])




    function handleSubmit(values: ServiceType) {
        console.log("values: ", values);
        
        const res = patchRequest(`services/${service.service_id}`, values);

        if (!res) {
            return;
        }

        res.then(res => {
            if (res.ok) {
                navigate('/');
                setErrorMsg('');
            }
            else {
                setErrorMsg('something went wrong');
            }
        })
    }


    

    return (
        <>
            {
                errMsg.length > 0 &&
                <div className="alert alert-danger">
                    {errMsg}
                </div>
            }

            {
                services.map
            }

            <Formik
                initialValues={service}
                /* validate={validate} */
                onSubmit={(values => handleSubmit(values))}
            >
                {
                    ({
                        values,
                        handleChange,
                        handleSubmit,
                        setValues,
                        isSubmitting,
                        dirty,
                        isValid,
                        errors
                    }) => (
                        <form onSubmit={handleSubmit}>
                            

                            <div className="mb-3">
                                <label>Status:</label>
                                <select
                                    className="form-select"
                                    id="service"
                                    name="service"
                                    onChange={handleChange}
                                    value={values.status}

                                >
                                    {
                                        status.map((status)=>
                                            <option key={status} value={status}>{status}</option>
                                        )
                                    }

                                </select>
                            </div>

                            <div className="mb-3">
                                <textarea
                                    className="form-control"
                                    
                                    placeholder="comments"
                                    name="comment"
                                    value={values.comment}
                                    onChange={handleChange}
                                />
                            </div>


                            <input
                                value="Update Service"
                                type="submit"
                                className="btn btn-primary"
                                /* disabled={!(dirty && isValid) || isSubmitting} */
                            />

                        </form>
                    )
                }
            </Formik>
        </>
    );
}

export default UpdateForm;