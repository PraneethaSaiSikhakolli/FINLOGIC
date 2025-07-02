export interface Transaction {
  id: number;
  amount: number;
  category: string;
  type: 'income' | 'expense';
  note?: string;
  createdAt: string;
}