import React, { useState } from 'react';

interface IProps {
    invitedPeople: {
        name: string,
        url: string,
        age: number,
        note?: "string",
    }[],
};

const List: React.FC<IProps> = (invitedPeople) => (

    <div >
        List

    </div>
);

export default List;
