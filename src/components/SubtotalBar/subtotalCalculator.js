const subtotalCalculator = (itemArray) => itemArray.map(item =>(Number(item.price))).reduce((accumulator, currentValue) => accumulator + currentValue).toFixed(2)

export default subtotalCalculator