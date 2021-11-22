import React, { useState } from 'react';

interface IProps {
    invitedPeople: {
        name: string,
        url: string,
        age: number,
        note?: "string",
    }[],
};

const List: React.FC<IProps> = ({ invitedPeople }) => {

    const renderPeopleList = () => {

        return invitedPeople.map(invitedPerson => {
            return (
                <li>
                    <span>{invitedPerson.name}</span>
                    <span>{invitedPerson.age} lat</span>
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
