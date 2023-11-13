export const licensePlateRegExp = /^[АВЕКМНОРСТУХ]{1}\d{3}[АВЕКМНОРСТУХ]{2}$/

export const fioRegExp = /^[^\s]+(\s[^\s]+){2}$/

export const whenIssuedRegExp = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/

export const pasportSeriesRegExp = /^\d{4}$/
export const pasportNumberRegExp = /^\d{6}$/

export const requeredField = {
  value: true,
  message: 'Поле должно быть заполнено',
}
