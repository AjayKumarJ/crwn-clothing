import React from 'react'
import { withRouter } from 'react-router';
import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size, history, match }) => (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${title}`)}>
        <div style={{backgroundImage: `url(${imageUrl})`}} className="background-image">
        </div>
        <div className="content">
            <div className="title">
                {title.toUpperCase()}
                <div className="subtitle">
                    SHOP NOW
                </div>
            </div>
        </div>
    </div>
)

export default withRouter(MenuItem);