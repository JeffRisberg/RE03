import React from 'react';
import { Medium, LessThanMedium } from '../toolkit';
import ItemsListContainer from '../components/Items/ItemListContainer';

class Items extends React.Component {

    render() {
        return (
            <div>
                <Medium>
                    <div className="alpha">
                        <ItemsListContainer />
                    </div>
                </Medium>
                <LessThanMedium>
                    <div className="alpha">
                        <ItemsListContainer />
                    </div>
                </LessThanMedium>
            </div>
        )
    }
}

export default Items;