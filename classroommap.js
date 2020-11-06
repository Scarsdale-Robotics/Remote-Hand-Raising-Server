let classId = new Map();

//raiseHand(classroomid) -> Implements the raised count for a classroomid
function raiseHand(classroomid) {
    let handRaise = classId.get(classroomid);
    classId.set('classroomId', handRaise + 1);
}
//lowerHand(classroomid) -> Decrements the raised a classroomid
function lowerHand(classroomid) {
    let handRaise = classId.get(classroomid);
    classId.set('classroomId', handRaise - 1);
}
//hasHandRaised(classroomid) -> returns whether anyone has their hand raised.
function hasHandRaised(classroomid) {
    return classId.get(classroomid) > 0;
}
//hasClassroomId(classroomid) -> returns whether the classroomId is valid or not
function hasClassroomId(classroomid) {
    return classId.has(classroomid);
}


exports.raiseHand = raiseHand;
exports.lowerHand = lowerHand;
exports.hasHandRaised = hasHandRaised;

