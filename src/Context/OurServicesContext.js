import axios from 'axios';
import React, { useState, useContext } from 'react';
import config from '../config';

const OurServicesContext = React.createContext()

export const useServicesContext = () => useContext(OurServicesContext)

export const OurServicesProvider = (props) => {
    const [services, setServices] = useState([]);

    const updateContext = () => {
        return axios.get(config.API_ENDPOINT + '/allServices')
            .then(response => {
                console.log(response.data);
                setServices(response.data);
            })
    }

    const value = {
        services: services,
        updateContext: updateContext
    }

    return (
        <OurServicesContext.Provider value={value}>
            {props.children}
        </OurServicesContext.Provider>
    )
}
