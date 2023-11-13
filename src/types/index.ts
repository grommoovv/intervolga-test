export type FormType = {
  licensePlate: string
  vehicle: string
  arrivalDate: Date
  fio: string
  pasport: {
    series: number
    number: number
    byWhoIssued: string
    whenIssued: string
  }
}
