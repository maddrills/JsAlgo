console.log("Hello World");
console.log("Hello World");
//git push --set-upstream origin main
//third

const nemo = ['nemo'];
const newArray = new Array(100).fill('nemo');

const searchThis = function (array){

    let time0 = performance.now();
    array.forEach((ele,index,fullarray) => {
        if(ele == 'nemo'){
            console.log('found nemo');
        }
    })
    let time1 = performance.now();

    console.log("time diff is: ",time1 - time0 );
}

searchThis(nemo);
searchThis(newArray);