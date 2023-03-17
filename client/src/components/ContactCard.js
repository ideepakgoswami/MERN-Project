import React from 'react'

const ContactCard = ({ text, heading, icon }) => {
    return (
        <>
            <div className="col-sm-4">
                <div className="card">
                    <div className="card-body d-flex align-items-center">
                        {icon}
                        <div>
                            <h5 className="card-title mb-0">{heading}</h5>
                            <small className="text-muted">{text}</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactCard