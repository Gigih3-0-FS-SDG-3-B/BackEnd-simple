import { eachDayOfInterval, format } from 'date-fns';

export function explodeDates(inputArray, startDateKey, endDateKey) {
    const resultArray = [];
  
    inputArray.forEach(item => {
      const startDate = new Date(item[startDateKey]);
      const endDate = new Date(item[endDateKey]);
  
      const datesArray = eachDayOfInterval({ start: startDate, end: endDate });
  
      const explodedObjects = datesArray.map(date => ({
        ...item,
        date: format(date, 'yyyy-MM-dd'),
      }));
  
      resultArray.push(...explodedObjects);
    });
  
    return resultArray;
  }