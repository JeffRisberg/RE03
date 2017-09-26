import React, { Component } from 'react';
import { Medium, LessThanMedium } from '../toolkit';
import ItemListContainer from '../components/Items/ItemListContainer';
import ItemFormContainer from '../components/Items/ItemFormContainer';

class Items extends Component {

  render() {
    const id = this.props.match.params != undefined ? this.props.match.params.id : undefined;
    const content = (id != undefined) ?
      <ItemFormContainer {...this.props} /> : <ItemListContainer {...this.props} />;

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
    )
  }
}

export default Items;
