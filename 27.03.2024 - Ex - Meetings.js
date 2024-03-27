function meetings(input) {
    let meetings = {};
    input.forEach(element => {
        let [day, name] = element.split(` `);
        if (!meetings.hasOwnProperty(day)) {
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        } else {
            if(meetings.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`);
            }
        }

    });
    let routingPlan = Object.entries(meetings);
    routingPlan.forEach(element => {
        let day = element[0];
        let name = element[1];
        console.log(`${day} -> ${name}`);
    });


  
}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
);