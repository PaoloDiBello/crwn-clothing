import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'

import { CollectionOverviewContainer } from './collections-overview.styles'
import CollectionPreview from '../collection-preview/collection-preview.component'

const CollectionsOverview = ({ collections }) => {
    return (
        <CollectionOverviewContainer>
            {
                collections.map(({ id, ...otherCollectionProps }) => {
                    return <CollectionPreview key={id} id={id} {...otherCollectionProps} />
                })
            }
        </CollectionOverviewContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);
