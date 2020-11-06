//Classroom id (string) to number of people with hands raised (int)
let classroomMap = new Map();

//raiseHand(classroomid) -> Implements the raised count for a classroomid
function raiseHand(classroomid) {
    let handRaise = classroomMap.get(classroomid);
    if(handRaise === undefined) {
        handRaise = 0
    }
    classroomMap.set(classroomid, handRaise + 1);
}
//lowerHand(classroomid) -> Decrements the raised a classroomid
function lowerHand(classroomid) {
    let handRaise = classroomMap.get(classroomid);
    if(handRaise === undefined) {
        handRaise = 0
    }
    if(handRaise !== 0) {
        classroomMap.set(classroomid, handRaise - 1);
    }
}
//hasHandRaised(classroomid) -> returns whether anyone has their hand raised.
function hasHandRaised(classroomid) {
    return classroomMap.get(classroomid) > 0;
}
//hasClassroomId(classroomid) -> returns whether the classroomId is valid or not
function hasClassroomId(classroomid) {
    return classId.has(classroomid);
}


exports.raiseHand = raiseHand;
exports.lowerHand = lowerHand;
exports.hasHandRaised = hasHandRaised;
exports.hasClassroomId = hasClassroomId

