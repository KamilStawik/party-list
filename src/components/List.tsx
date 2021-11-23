import React from 'react';

interface IProps {
    invitedPeople: {
        name: string,
        url: string,
        age: number,
        note?: string,
    }[],
};

const List: React.FC<IProps> = ({ invitedPeople }) => {

    const renderPeopleList = () => {

        return invitedPeople.map(invitedPerson => {
            return (
                <li className="list">
                    <img className="list__image" src={invitedPerson.url} alt="zdjęcie zaproszonej osoby" />
                    <h2 className="list__header">{invitedPerson.name}</h2>
                    <p className="list__age">{invitedPerson.age} lat</p>
                    <p className="list__note">{invitedPerson.note}</p>
                </li>
            );
        });
    };

    return (
        <ul >
            {renderPeopleList()}
        </ul >
    );
};

export default List;