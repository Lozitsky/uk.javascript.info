function byField(fieldName){
  return (a, b) => fieldName === 'age' ? a.age > b.age : a[fieldName].localeCompare(b[fieldName], 'uk');
}
