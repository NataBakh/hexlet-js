import pkg from 'lodash'
const { capitalize, intersection, last} = pkg

const myFunctionCap = (str) => { 
  const bigChar = console.log(capitalize(str))
  return bigChar
}

const myFunctionInter = (arr1,arr2) => { 
  const newArr = console.log(intersection(arr1,arr2))
  return newArr
}

const myFunctionLt = (arr) => { 
  const lastItem = console.log(last(arr))
  return lastItem
}
export {myFunctionCap, myFunctionInter, myFunctionLt}