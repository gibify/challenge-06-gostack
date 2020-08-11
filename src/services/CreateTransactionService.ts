import { getCustomRepository } from 'typeorm';
// import AppError from '../errors/AppError';

import TransactionRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface Request {
  title: string;
  type: 'income' | 'outcome';
  value: number;
  category: string;
}

class CreateTransactionService {
  public async execute({ title, type, value, category }: Request): Promise<Transaction> {
    const transactionRepository =  getCustomRepository(TransactionRepository);

    const transaction = transactionRepository.create({
      title,
      type,
      value,
    });

    await transactionRepository.save(transaction);

    return transaction;
  }

  
}

export default CreateTransactionService;
