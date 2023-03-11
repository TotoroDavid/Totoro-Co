import React from 'react'

export const FloatingButton = () => {
    return (
        <a href="https://wa.me/message/DV7VFDYSRPTPE1" target="_blank" rel="noopener noreferrer">
            <button className="floating-button">
                <img
                    className="px-1"
                    style={{
                        width: '50px'
                    }}
                    src='https://cdn-icons-png.flaticon.com/512/4494/4494495.png' alt='whatsApp' />
            </button>
        </a>
    )
}
