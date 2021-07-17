import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

import SHOP_DATA from './sections.data.js'

export default class ShopPage extends React.Component {
    constructor() {
        super()
        this.state = {
            collection: SHOP_DATA
        }
    }
    render() {
        const { collection }  = this.state
        return (
            <div className="shop-page">
            {
                collection.map(({id, ...remainingProperties}) => (
                    <CollectionPreview key={id} {...remainingProperties} />
                ))
            } 
            </div>
        )
    }
}