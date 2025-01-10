import INumberInterface from "../interfaces/INumberInterface";

export function validateNumberForm(data: INumberInterface) {
  const errors: { [key: string]: string } = {};

  if (!data.value?.trim()) 
    errors.value = "Phone Number is required.";
  
  if (!data.monthlyPrice || Number(data.monthlyPrice) <= 0) 
    errors.monthlyPrice = "Monthly Price must be greater than 0.";

  if (!data.setupPrice || Number(data.setupPrice) <= 0) 
    errors.setupPrice = "Setup Price must be greater than 0.";

  if (!data.currency?.trim()) 
    errors.currency = "Currency is required.";
  
  return errors;
}
