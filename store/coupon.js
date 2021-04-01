export const state = () => ({
  discount: 0,
  discountCodes: [{
      id: 1,
      code: 'Easter',
      discount: 25
    },
    {
      id: 2,
      code: 'Black Friday',
      discount: 50
    },
    {
      id: 3,
      code: 'Evan You',
      discount: 75
    }
  ],
  discountCode: {}
})

export const mutations = {
  selectedCoupon(state, discountCode) {
    state.discountCode = discountCode
  },
}
