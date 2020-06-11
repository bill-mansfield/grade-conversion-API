const ClimbingGrade = require('climbing-grade'); 

exports.getConversion = (grade, fromSystem, toSystem) => {
    const convertedGrade = new ClimbingGrade(grade, fromSystem);

    let conversionObj = {}
    conversionObj.convertedGrade = convertedGrade.format(toSystem)
        
    return conversionObj 
}
