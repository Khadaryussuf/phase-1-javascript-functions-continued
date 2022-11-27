// code your solution here
function saturdayFun(plan1 = "roller-skate"){
    return `This Saturday, I want to ${plan1}!`;
}
saturdayFun();

function saturdayFun(plan1 = "roller-skate"){
    return `This Saturday, I want to ${plan1}!`;
}
saturdayFun("bathe my dog");


const mondayWork = function(plan2 = "go to the office"){
    return `This Monday, I will ${plan2}.`
}
mondayWork();


function wrapAdjective(result="*"){
    return function(emphatic="special") {
        return `You are ${result}${emphatic}${result}!`
    }
}
console.log(wrapAdjective());
console.log(wrapAdjective("||"))