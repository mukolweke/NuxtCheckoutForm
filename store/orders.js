export const state = () => ({
  orders: [{
      id: 1,
      name: 'Thunderbolt 3 to 2 adapter',
      quantity: 1,
      price: '8.00'
    },
    {
      id: 2,
      name: 'Thunderbolt Cable',
      quantity: 1,
      price: '4.52'
    }
  ],
  orderTotal: 0
})


export const mutations = {
  addQuantity(state, orderId) {
    let orderIndex = state.orders.findIndex((obj => obj.id == orderId));
    let stockAvailable = 10;
    if (state.orders[orderIndex].quantity < stockAvailable) state.orders[orderIndex].quantity++;
  },
  reduceQuantity(state, orderId) {
    let orderIndex = state.orders.findIndex((obj => obj.id == orderId));
    if (state.orders[orderIndex].quantity > 0) state.orders[orderIndex].quantity--;
  },
  removeOrder(state, orderId) {
    state.orders = state.orders.filter(item => item.id !== orderId)
  },
  updateOrderTotals(state, amount) {
    state.orderTotal = amount;
  }
}
