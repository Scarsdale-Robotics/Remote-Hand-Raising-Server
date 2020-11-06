const classroomMap = require("../classroommap")

function next() {
    let r = ""

    //We need this loop to make sure we don't get a duplicate (should only happen every 50000 ids)
    //Stackoverflow post explaining evrything: https://stackoverflow.com/a/8084248
    do {
        //Math.random() returns a decimal
        //.toString(36) converts it to base 36 (which only has letters and digits)
        //.substring(2, 8) cuts off the first two characters (will always be 0 and a decimal point)
        //We end up with a random looking string of letters and numbers
        r = Math.random().toString(36).substring(2, 8);
    } while(classroomMap.hasClassroomId(r))

    return r
}

exports.next = next