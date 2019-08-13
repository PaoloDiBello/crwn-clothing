import shopActionTypes from './shop.actions'

export const updateCollections = (collectionsMap) => ({
    type: shopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap
})