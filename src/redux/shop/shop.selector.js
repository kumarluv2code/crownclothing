import { createSelector } from 'reselect'
import collectionPreview from '../../components/collection-preview/collection-preview.component';
const selectShop = state => state.shop;

const CATEGORY_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
  
}
export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollection = (categoryUrlParam) => 
  createSelector(
    [selectCollections],
    collections =>
      collections.find(
        collection => collection.id === CATEGORY_ID_MAP[categoryUrlParam]
      )
  );