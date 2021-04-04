export const state = () => ({
  cardInformation: {
    name: 'John Smith',
    number: '2666 5756 7567 5675',
    security_code: '···',
    expiry_date: '07/25',
    cardType: 'mastercard'
  }
})

export const getters = {
  cardInformation: (state) => {
    return state.cardInformation
  }
}

export const mutations = {
  updateCardInfo(state, paymentInfo) {
    console.log(paymentInfo, 'paymentInfo');
    state.cardInformation = paymentInfo;
  }
}
