import request from 'superagent'

const CALENDAR_ID = 'scouts1690@gmail.com'
const zebra = 'AIzaSyD_JdC_kVZHBg7Sp1N8ESWsCu9SB7Uebxw'
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${zebra}`

export function getEvents (callback) {
  request
    .get(url)
    .end((err, resp) => {
      if (!err) {
        const events = []
        console.log(JSON.parse(resp.text));
        JSON.parse(resp.text).items.map((event) => {
          events.push({
            start: event.start.date || event.start.dateTime,
            end: event.end.date || event.end.dateTime,
            title: event.summary,
          })
        })
        callback(events)
      }
    })
}

