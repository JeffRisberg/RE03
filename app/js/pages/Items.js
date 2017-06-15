import React from 'react';
import { Medium, LessThanMedium } from '../toolkit';
import ItemListContainer from '../components/Items/ItemListContainer';
import ItemFormContainer from '../components/Items/ItemFormContainer';

class Items extends React.Component {

    render() {
        const id = this.props.params != undefined ? this.props.params.id : undefined;

        return (
            <div>
                <Medium>
                    <div style={{ background: 'red' }}>
                        {id != undefined ? <ItemFormContainer {...this.props} /> : <ItemListContainer /> }
                    </div>
                </Medium>
                <LessThanMedium>
                    <div style={{ background: 'blue' }}>
                        {id != undefined ? <ItemFormContainer {...this.props} /> : <ItemListContainer /> }
                    </div>
                </LessThanMedium>
            </div>
        )
    }
}

export default Items;