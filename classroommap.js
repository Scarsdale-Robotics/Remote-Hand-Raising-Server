// Implement a map of classroom ids (ints or strings) to the number of people who have their hand raised
// Three functions:
// 1. raiseHand(classroomid) -> Implements the raised count for a classroomid
// 2. lowerHand(classroomid) -> Decrements the raised a classroomid
// 3. hasHandRaised(classroomid) -> returns whether anyone has their hand raised.



let classId = new Map();


function raiseHand(classroomid) {
    let handRaise = classId.get(classroomid);
    classId.set('classroomId', handRaise + 1);
}

function lowerHand(classroomid) {
    let handRaise = classId.get(classroomid);
    classId.set('classroomId', handRaise - 1);
}

function hasHandRaised(classroomid) {
    if (classId.get(classroomid) > 0) {
        return true;
    }
    return false;
}

exports.raiseHand = raiseHand;
exports.lowerHand = lowerHand;
exports.hasHandRaised = hasHandRaised;
