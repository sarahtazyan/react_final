import React, { useState } from 'react';

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState(""); 

    const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with the form data or dispatch an action
    }

    const handleChange = (e) => {
        setDate(e.target.value); // Set the value of the date state
        // props.dispatch(e);  // Dispatch the event to update Redux
    };

    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor='book-date'>Choose Date</label>
                            <input id='book-date' value={date} onChange={handleChange} type='date' required/>
                        </div>
                        {/* Time field */}
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;
