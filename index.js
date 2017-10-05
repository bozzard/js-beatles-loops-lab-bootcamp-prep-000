

function theBeatlesPlay (name, instruments) {
  var array = [];
  for (let i = 0; i < name.length ; i++  ) {
    array[i] =  name[i] + instruments;
    console.log (array[i]);
  }
  return ('done');
}
