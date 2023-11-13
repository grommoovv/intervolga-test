import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FormType } from '../types'
import {
  fioRegExp,
  licensePlateRegExp,
  pasportNumberRegExp,
  pasportSeriesRegExp,
  requeredField,
  whenIssuedRegExp,
} from '../constants'

const FormTask: FC = () => {
  const storageValues = localStorage.getItem('formValues')
  const defaultValues = JSON.parse(storageValues as string)

  const {
    getValues,
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<FormType>({
    mode: 'onChange',
    defaultValues: defaultValues,
  })

  const onSubmit: SubmitHandler<FormType> = (data) => console.log(data)

  const formValues = getValues()

  localStorage.setItem('formValues', JSON.stringify(formValues))

  return (
    <>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <h1>Транспортные средства и водители</h1>
        <label>
          <span>Гос-номер</span>
          <input
            placeholder='Укажите гос-номер'
            {...register('licensePlate', {
              required: requeredField,
              maxLength: {
                value: 6,
                message: 'Укажите верный формат гос-номера',
              },
              pattern: {
                value: licensePlateRegExp,
                message: 'Укажите верный формат гос-номера',
              },
            })}
          />
          {errors.licensePlate && <div className='error'>{errors.licensePlate.message}</div>}
        </label>

        <label>
          <span>Транспортное средство</span>
          <input
            placeholder='Транспортное средство'
            {...register('vehicle', { required: requeredField })}
          />
          {errors.vehicle && <div className='error'>{errors.vehicle.message}</div>}
        </label>

        <label>
          <span>Ориентировочная дата прибытия к покупателю</span>
          <input type='date' {...register('arrivalDate', { required: requeredField })} />
          {errors.arrivalDate && <div className='error'>{errors.arrivalDate.message}</div>}
        </label>

        <h2>Данные о водителе</h2>

        <label>
          <span>ФИО</span>
          <input
            placeholder='Укажите ФИО водителя'
            {...register('fio', {
              required: requeredField,
              pattern: { value: fioRegExp, message: 'Укажите полное ФИО' },
            })}
          />
          {errors.fio && <div className='error'>{errors.fio.message}</div>}
        </label>

        <label>
          <span>Паспортные данные</span>
          <div style={{ display: 'flex', gap: 20 }}>
            <input
              placeholder='Серия'
              type='number'
              {...register('pasport.series', {
                required: {
                  value: true,
                  message: 'Поля должны быть заполнены',
                },
                pattern: {
                  value: pasportSeriesRegExp,
                  message: 'Укажите верные паспортные данные',
                },
              })}
            />
            <input
              placeholder='Номер'
              type='number'
              {...register('pasport.number', {
                required: {
                  value: true,
                  message: 'Поля должны быть заполнены',
                },
                pattern: {
                  value: pasportNumberRegExp,
                  message: 'Укажите верные паспортные данные',
                },
              })}
            />
          </div>
          {(errors.pasport?.series || errors.pasport?.number) && (
            <div className='error'>
              {errors.pasport?.series?.message || errors.pasport?.number?.message}
            </div>
          )}
        </label>

        <label>
          <span>Кем выдан</span>
          <input
            placeholder='Кем выдан'
            {...register('pasport.byWhoIssued', { required: requeredField })}
          />
          {errors.pasport?.byWhoIssued && (
            <div className='error'>{errors.pasport?.byWhoIssued.message}</div>
          )}
        </label>

        <label>
          <span>Когда выдан</span>
          <input
            placeholder='дд.мм.гггг'
            {...register('pasport.whenIssued', {
              required: requeredField,
              pattern: {
                value: whenIssuedRegExp,
                message: 'Укажите верный формат даты',
              },
            })}
          />
          {errors.pasport?.whenIssued && (
            <div className='error'>{errors.pasport?.whenIssued.message}</div>
          )}
        </label>

        <div className='buttons'>
          <button className='sumbit-btn' type='submit' disabled={!isValid}>
            Отправить
          </button>
          <button className='reset-btn' type='reset'>
            Отменить
          </button>
        </div>
      </form>
    </>
  )
}

export { FormTask }
