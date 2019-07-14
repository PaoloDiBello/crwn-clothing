import React from 'react'
import './menu-item.styles.scss'
import { withRouter } from 'react-router-dom'

const MenuItem = ({ title, subtitle, imageUrl, size, history, match, linkUrl }) => {
    return (
        <div
            className={`${size} menu-item`}
            onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
            <div
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
                className="background-image"
            />
            <div className="content">
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className="subtitle">{subtitle}</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem)