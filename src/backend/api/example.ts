import axios from 'axios'

export const getYandexICal = async () => {
  const yandexToken = process.env.YANDEX_TOKEN ?? ''
  try {
    if (yandexToken === '') {
      throw new Error('YANDEX_TOKEN is not set')
    }

    const response = await axios.get(`https://calendar.yandex.ru/export/ics.xml?private_token=${yandexToken}&tz_id=Europe/Moscow`)
    return response.data
  } catch (error) {
    console.error('Failed to get iCal from yandex: ', error)
  }

  return null
}
