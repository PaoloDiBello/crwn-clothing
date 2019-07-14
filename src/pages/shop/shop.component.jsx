import React, { Component } from 'react'
import SHOP_DATA from './shop.data'

import PreviewCollection from '../../components/preview-collection/preview-collection.component'

class Shop extends Component {
    constructor(props) {
        super(props)

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state;
        return (
            <div className="shop-page">
                <h1>

                    {
                        collections.map(({ id, ...otherCollectionProps }) => {
                            return < PreviewCollection id={id} {...otherCollectionProps} />
                        })
                    }
                </h1>
            </div>
        )
    }
}


export default Shop;