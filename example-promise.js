// function getTempCallBack(location, callback) {
//     callback(undefined, 20);
//     callback('City not found');
// }
//
// getTempCallBack('Sydney',function(err, temp){
//   if (err) {
//     console.log('error: ' + err);
//   } else {
//     console.log('sucess: ' + temp);
//   }
// });
//
// function getTempPromise(location){
//   return new Promise(function(resolve, reject){
//     setTimeout(function(){
//       resolve(20);
//       reject('City not found');
//     },1000);
//   })
// }
//
// getTempPromise('Sydney').then(function(temp){
//   console.log('Promise success: ' + temp);
// }, function(err){
//   console.log('Promise error: ' + err);
// });

// challenge
function addPromise(a, b){
  return new Promise(function(resolve, reject){
    if (typeof a === 'number' && typeof b === 'number') {
      resolve( a + b );
    } else {
      reject( 'Both variables need to be numbers' );
    }
  })
}

addPromise(112, 24223).then(function(total){
  console.log('Sum of numbers: ', total);
},function(err){
  console.log(err);
});

addPromise('Chris', 24223).then(function(total){
  console.log('Sum of numbers: ', total);
},function(err){
  console.log(err);
});
