import React from  'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/directory/directory.selector'

import MenuItem from '../menu-item/menu-item.compponent'

import './directory.styles.scss'

const Directory = ({sections}) => (
            <div className="directory-menu">
                {
                    sections.map(({id, title, imageUrl, size, linkUrl}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
                    ))
                }
            </div>
        )

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})
export default connect(mapStateToProps)(Directory)