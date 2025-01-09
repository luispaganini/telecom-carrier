export const saveToLocalStorage = (data: any): void => {
    localStorage.setItem('numbers', JSON.stringify(data));
  };
  
  export const getFromLocalStorage = (): any[] => {
    const data = localStorage.getItem('numbers');
    return data ? JSON.parse(data) : [];
  };
  