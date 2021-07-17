import React from 'react'

import CollectionItem from '../collection-item/collection-item.component'
import './collection-preview.styles.scss'



const CollectionPreview = ({title, routeName, items}) => (

    <div className="collection-preview">
        <h1 className="title">{title}</h1>
        <div className="preview">
            {
                items
                .filter((item, idx) => idx < 4)
                .map(({id, ...restProperties}) => (
                    <CollectionItem key={id} {...restProperties}/>
                ))
            }
            
        </div>
    </div>
)


export default CollectionPreview