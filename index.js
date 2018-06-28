function theBeatlesPlay(arrMus, arrIns)
{
  var newArr={} 
  
  for(let i=0; i<arrMus.length; i++)
  {
    newArr[i]='${arrMus[i]} plays ${arrIns[i]}'
  }
  return newArr
}