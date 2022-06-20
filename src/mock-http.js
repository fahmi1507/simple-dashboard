import moment from "moment";
export const mock = (success, timeout, calendar) => {
    const { startDate, endDate } = calendar;

    const start = parseInt(moment(startDate).format("DD-MM-YYYY").substring(0, 2))
    const end = parseInt(moment(endDate).format("DD-MM-YYYY").substring(0, 2))

    
    const data = [
        {
            label: 'Unit Per Transaction',
            data: [...Array(6)].map(()=>{return Math.floor(Math.random()*start*end)}),
            backgroundColor: '#707070',
        },
        {
            label: 'Average Purchase',
            data: [...Array(6)].map(()=>{return Math.floor(Math.random()*start*end)}),
            backgroundColor: '#7AE28C',
        },
        {
          label: 'Gross',
          data: [...Array(6)].map(()=>{return Math.floor(Math.random()*start*end)}),
          backgroundColor: '#289E45',
        },
        {
          label: 'Nett',
          data: [...Array(6)].map(()=>{return Math.floor(Math.random()*start*end)}),
          backgroundColor: '#37B04C',
        },    
    ]

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(success) {
          resolve(data);
        } else {
          reject({message: 'Internal Server Error'});
        }
      }, timeout);
    });
}
