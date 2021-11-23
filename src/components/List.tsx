import React from 'react';
import { IState as IProps } from './../App'

const List: React.FC<IProps> = ({ invitedPeople }) => {

    const renderPeopleList = () => {

        return invitedPeople.map(invitedPerson => {
            return (
                <li className="list" key={invitedPerson.name}>
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