import { useState } from "react";
import React from "react";

function ContactItem({ contact }) {
    const [hover, setHover] = useState(false);

    return (
       <li>
            <a 
                href={contact.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="a-content"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={{
                backgroundColor: hover ? contact.hoverColor : "#e9eef6", 
                color: hover ? "#fff" : "#333",
                transition: "0.3s ease",
                }}
            >
                {contact.icon && <img src={contact.icon} alt={contact.name} />}
                <span>{contact.name === "Email" ? "lucasjusinho@gmail.com" : `Mon ${contact.name}`}</span>
            </a>
        </li>
    );
};

export default ContactItem;
