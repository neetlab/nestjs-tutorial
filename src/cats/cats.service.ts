import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

export interface ICatsService {
  findAll(): Cat[];
}

@Injectable()
export class CatsService implements ICatsService {
  private readonly cats: Cat[] = [
    { name: 'Alice', age: 9, breed: 'Sphynx' },
    { name: 'Bob', age: 9, breed: 'Persian' },
  ];

  create(cat: Cat): void {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
