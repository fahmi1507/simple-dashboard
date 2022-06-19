const data = [
    {
        label: 'Unit Per Transaction',
        data: [3, 4, 3, 5, 5, 5, 6],
        backgroundColor: '#707070',
    },
    {
        label: 'Average Purchase',
        data: [1, 2, 3, 5, 5, 5, 6],
        backgroundColor: '#7AE28C',
    },
    {
      label: 'Gross',
      data: [1, 2, 3, 5, 5, 5, 6],
      backgroundColor: '#289E45',
    },
    {
      label: 'Nett',
      data: [1, 2, 3, 5, 5, 5, 6],
      backgroundColor: '#37B04C',
    },    
]

export const mock = (success, timeout) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(success) {
          resolve(data);
        } else {
          reject({message: 'Error'});
        }
      }, timeout);
    });
}
  

export const someEvent = async () => {
try {
    const res = await mock(true, 1000);
    console.log(res, '<<<<<')
} catch (e) {
    console.log(e.message);
}
}

someEvent()