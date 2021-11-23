import React, { useState } from 'react';

const Form = (): JSX.Element => {

    const [input, setInput] = useState(
        {
            name: "",
            age: "",
            url: "",
            note: "",
        }
    );

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    };

    return (
        <form className="form">My Form
            <input
                name="name"
                type="text"
                placeholder="Name"
                className="form__input"
                value={input.name}
                onChange={handleChange}
            />
            <input
                name="age"
                type="text"
                placeholder="Age"
                className="form__input"
                value={input.age}
                onChange={handleChange}
            />
            <input
                name="url"
                type="text"
                placeholder="Image url"
                className="form__input"
                value={input.url}
                onChange={handleChange}
            />
            <textarea
                name="note"
                placeholder="Note"
                className="form__input"
                value={input.note}
                onChange={handleChange}
            />
        </form>
    );
};

export default Form;