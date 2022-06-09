function receivesAFunction(callBackFunction){
    callBackFunction();
}

// function toBeNamed(){
//     return 'a named function';
// }

function returnsANamedFunction(){
    const toBeNamed = function(){
        return 'a named function'
    }
    return toBeNamed;
}

function returnsAnAnonymousFunction(){
    return function(){
        return 'before all'
    }
}

