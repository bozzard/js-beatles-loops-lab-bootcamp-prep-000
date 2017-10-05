

function theBeatlesPlay (name, instruments) {
  var array = [];
  for (let i = 0; i < name.length ; i++  ) {
    array[i] =  name[i] + instruments[i];
    console.log (array[i]);
  }
  return ('done');
}
