

function theBeatlesPlay (name, instruments) {
  var array = [];
  for (let i = 0; i < name.length ; i++  ) {
    array[i] =  name[i] + " plays " + instruments[i];
    console.log (array[i]);
  }
  return (array);
}

function johnLennonFacts(facts) {
  const array = [];
  for (let i = 0; i < facts.length ; i++  ) {
    array[i] =  facts[i] + "!!!";
    console.log (array[i]);
  }
  return (array);
}
