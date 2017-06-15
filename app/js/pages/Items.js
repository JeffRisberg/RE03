import React from 'react';
import { Medium, LessThanMedium } from '../toolkit';
import ItemListContainer from '../components/Items/ItemListContainer';
import ItemFormContainer from '../components/Items/ItemFormContainer';

class Items extends React.Component {

    render() {
        const id = this.props.params != undefined ? this.props.params.id : undefined;
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