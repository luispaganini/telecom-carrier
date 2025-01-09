export interface PhoneNumber {
    id: number;
    value: string;
    monthlyPrice: string;
    setupPrice: string;
    currency: string;
}

const mockNumbers: PhoneNumber[] = [
    { id: 1, value: '+55 84 91234-4321', monthlyPrice: '0.03', setupPrice: '3.40', currency: 'U$' },
    { id: 2, value: '+55 11 98765-1234', monthlyPrice: '0.05', setupPrice: '4.20', currency: 'U$' },
];

const simulateDelay = <T extends unknown>(data: T): Promise<T> => {
    return new Promise((resolve) => setTimeout(() => resolve(data), 2000));
};

export const getNumbers = async (): Promise<PhoneNumber[]> => {
    const numbers = JSON.parse(localStorage.getItem('numbers') || '[]') as PhoneNumber[];
    return simulateDelay(numbers.length ? numbers : mockNumbers);
};

export const addNumber = async (newNumber: PhoneNumber): Promise<PhoneNumber[]> => {
    const numbers = JSON.parse(localStorage.getItem('numbers') || '[]') as PhoneNumber[];
    const updatedNumbers = [...numbers, newNumber];
    localStorage.setItem('numbers', JSON.stringify(updatedNumbers));
    return simulateDelay(updatedNumbers);
};

export const updateNumber = async (updatedNumber: PhoneNumber): Promise<PhoneNumber[]> => {
    const numbers = JSON.parse(localStorage.getItem('numbers') || '[]') as PhoneNumber[];
    const updatedNumbers = numbers.map((num) =>
        num.id === updatedNumber.id ? updatedNumber : num
    );
    localStorage.setItem('numbers', JSON.stringify(updatedNumbers));
    return simulateDelay(updatedNumbers);
};

export const deleteNumber = async (id: number): Promise<PhoneNumber[]> => {
    const numbers = JSON.parse(localStorage.getItem('numbers') || '[]') as PhoneNumber[];
    const updatedNumbers = numbers.filter((num) => num.id !== id);
    localStorage.setItem('numbers', JSON.stringify(updatedNumbers));
    return simulateDelay(updatedNumbers);
};