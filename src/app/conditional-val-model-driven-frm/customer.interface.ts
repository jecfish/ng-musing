export interface Customer {
  name: string;
  paymentMethod: {
    type: string; // must be either 'bank' or 'card'
    card: {
      cardNo: string; // must be visa, master, amex
      cardHolder: string;
      expiry: string; // must be format MM/YY
    },
    bank: {
      accountNo: string;
      accountHolder: string;
      routingNo: string;
    }
  }
}