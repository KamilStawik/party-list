import React, { useState } from 'react';
import { IState as Props } from './../App'

interface IProps {
    invitedPeople: Props["invitedPeople"],
    setInvitedPeople: React.Dispatch<React.SetStateAction<Props["invitedPeople"]>>
};

const Form: React.FC<IProps> = ({ invitedPeople, setInvitedPeople }): JSX.Element => {

    const [input, setInput] = useState(
        {
            name: "",
            age: "",
            url: "",
            note: "",
        }
    );

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        });
    };

    const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
        event.preventDefault();
        if (
            !input.name ||
            !input.age ||
            !input.url
        ) {
            return;
        } else {
            console.log(input);
            setInvitedPeople([
                ...invitedPeople,
                {
                    name: input.name,
                    age: +input.age,
                    url: input.url,
                    note: input.note,
                }
            ]);
            setInput({
                name: "",
                age: "",
                url: "",
                note: "",
            });
        };
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
            <button
                className="form__button"
                onClick={handleClick}>Add to list</button>
        </form>
    );
};

export default Form;