setTimeout(theFunction, 1000);
setTimeout(theFunction, 2000);

function theFunction() {
    console.log('theFunction called from the future');
}

const thePromise = new Promise(theCallBack)

thePromise
    .then(()=> console.log('resolved'))
    .catch(()=> console.log('rejected'))



function theCallBack(resolve, reject) {
    setTimeout(() => 
    reject(),
    //resolve(), 
    3000)
}
