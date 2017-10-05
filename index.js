

function theBeatlesPlay (name, instruments) {
  var array = [];
  for (let i = 0; i < name.length ; i++  ) {
    array[i] =  name[i] + " plays " + instruments[i];
    console.log (array[i]);
  }
  return (array);
}
