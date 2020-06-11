const ClimbingGrade = require('climbing-grade'); 

exports.getConversion = (grade, fromSystem, toSystem) => {
    const convertedGrade = new ClimbingGrade(grade, fromSystem);
    return convertedGrade.format(toSystem)
}
