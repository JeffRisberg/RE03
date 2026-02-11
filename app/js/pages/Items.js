import React from 'react';
import { useParams } from 'react-router-dom';
import { Medium, LessThanMedium } from '../toolkit';
import ItemListContainer from '../components/Items/ItemListContainer';
import ItemFormContainer from '../components/Items/ItemFormContainer';

function Items() {
  const { id } = useParams();

  const content = (id != undefined) ?
    <ItemFormContainer id={id} /> : <ItemListContainer />;

  return (
    <div>
      <Medium>
        <div style={{ borderBottom: '5px solid red' }}>
          {content}
        </div>
      </Medium>
      <LessThanMedium>
        <div style={{ borderBottom: '5px solid blue' }}>
          {content}
        </div>
      </LessThanMedium>
    </div>
  );
}

export default Items;
