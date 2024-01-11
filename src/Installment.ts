export interface Installment {
    id?: number;
    customerId: number;
    name: string;
    mobile: string;
    email: string;
    prevdue: number;
    duration: number;
    installmentAmount: number;
  }