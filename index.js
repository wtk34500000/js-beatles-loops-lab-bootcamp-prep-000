function theBeatlesPlay(arrMus, arrIns)
{
  var newArr=[] 
  
  for(let i=0; i<arrMus.length; i++)
  {
    newArr.push(arrMus[i]+ " plays " +arrIns[i])
  }
  return newArr
}

  const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts)
{
  var newArr=[]
  
  var i=0
  while(i<facts.length)
  {
    newArr.push(facts[i++]+'!!!')
  }
  
  return newArr
}

function iloveTheBeatles(n)
{
  if(n<15)
  {
    
  }else
  return 'I love the Beatles'
}