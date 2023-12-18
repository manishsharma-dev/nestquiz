import { Repository } from 'typeorm';
import { Quiz } from './quiz.entity';
import { Injectable } from '@nestjs/common';
@Injectable()
export class QuizRepository extends Repository<Quiz> {}
