//Reduce method

// const myNums = [1,2,3,4,5];

//  const newNums = myNums.reduce( (acc, cv) => {
//     console.log(`acc: ${acc} and ${cv}`);
//     return acc + cv;
//  }, 0);
//  console.log(newNums);


const shopingCart = [
    {
        itemName: "webdevelopment",
        price: 2999
    },

    {
        itemName: "appdevelopment",
        price: 3999
    },

    {
        itemName: "web3",
        price: 12999
    },
];

const total = shopingCart.reduce( (acc, item) =>  {
    console.log(`acc: ${acc} and ${item.price}`)
    return acc + item.price;
}, 0);

console.log(total);