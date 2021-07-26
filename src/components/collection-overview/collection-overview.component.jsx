import React from 'react';

import './collection-overview.styles.scss'

import CollectionPreview from '../../components/collection-preview/collection-preview.component'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectShopSectionsForPreview } from '../../redux/shop/shop.selector';



const CollectionOverview = ({ collection }) =>  (
            <div className="collection-overview">
            {
                collection.map(({id, ...remainingProperties}) => (
                    <CollectionPreview key={id} {...remainingProperties} />
                ))
            } 
            </div>
        )

const mapStateToProps = createStructuredSelector({
    collection: selectShopSectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview)

