import React from 'react';
import { useParams } from 'react-router-dom';
import { infoArr } from './InfoArr';

function InfoPage(): JSX.Element {
    const { id } = useParams();
    const oneItem = infoArr.filter((el) => el.id === Number(id));
    return (
        <div className="container">
            <div className="topCont">{oneItem[0].name}</div>
            <div className="botCont">{oneItem[0].bodyTwo}{oneItem[0].bodyOne}</div>
        </div>
    );
}

export default InfoPage;
