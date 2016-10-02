module.exports = {
    activities : [
        () => 'activities.json',
        (date) => 'activities/date/%s.json',
        (resource, date, periodOrEndDate) => 'activities/%s/date/%s/%s.json'
    ],
    tracker : [
        () => 'activities.json',
        (date) => 'activities/date/%s.json',
        (resource, dateOrBaseDate, periodOrEndDate) => 'activities/tracker/%s/date/%s/%s.json'
    ]
};