import React, { useEffect } from 'react'
import { useServicesContext } from '../../Context/OurServicesContext'

const OurServices = (props) => {

    const { updateContext, services } = useServicesContext()

    //get all the services from the context api. 
    useEffect(async () => {
        updateContext()
    }, [])


    return (
        <>
            {services.map((service, key) => {
                return <section key={key}>
                    <h2>{service.serviceName}</h2>
                    <h3>Images</h3>
                    {service.images.map((image, key) => {
                        return <section key={key}>
                            <img src={image.imageURL} alt={image.imageName} />
                        </section>
                    })}
                </section>

            })}
        </>
    )
}

export default OurServices
