import React from "react";

function ContactItem({ contact }) {
    return (
       <li>
            <a 
                href={contact.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="a-content"
                style={{
                "--hover-color": contact.hoverColor,
                }}
            >
                {contact.icon && <img src={contact.icon} alt={contact.name} />}
                <span>{contact.name === "Email" ? "lucasjusinho@gmail.com" : `Mon ${contact.name}`}</span>
            </a>
        </li>
    );
};

export default ContactItem;
