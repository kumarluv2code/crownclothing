import  shopData  from './shop.data'
const InitialState = {
  collections: shopData
}
const shopReducer = (state= InitialState ,action) => {
  switch (action.type) {
    default: return state
  }
}
export default shopReducer