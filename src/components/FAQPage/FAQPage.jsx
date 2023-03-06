import React, { useState } from 'react';
import { FAQs } from '../../data/FAQs';

export const FAQPage = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    }

    return (
        <div className='container py-5'>
            <h3 className='text-center py-5'>Preguntas Frecuentes</h3>
            <div className="accordion">
                {FAQs.map((faq, index) => (
                    <div className="accordion" key={faq.id}>
                        <h1 className="accordion-header" id={`heading${faq.id}`}>
                            <h4 className="accordion-button collapsed bg-dark text-white" type="button" onClick={() => toggleAccordion(index)} aria-expanded={activeIndex === index} aria-controls={`collapse${faq.id}`}>
                                {faq.question}
                            </h4>
                        </h1>
                        <div id={`collapse${faq.id}`} className={`accordion-collapse collapse${activeIndex === index ? ' show' : ''}`} aria-labelledby={`heading${faq.id}`} data-bs-parent="#accordionExample">
                            <div className="accordion-body bg-light">
                                <p>
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
