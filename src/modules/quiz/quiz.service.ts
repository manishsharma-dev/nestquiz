import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuizDto } from './dto/CreateQuiz.dto';
import { Quiz } from './quiz.entity';
import { Repository } from 'typeorm';
import { Observable, defer, map, switchMap, tap } from 'rxjs';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz) private quizRepository: Repository<Quiz>,
  ) {}

  fetchAllQuizes() {
    return defer(() => this.quizRepository.find());
  }

  findOne(id: number) {
    return defer(() => this.quizRepository.findOne({ where: { id } })).pipe(
      tap((user) => {
        if (!user) throw new NotFoundException('User not found!');
      }),
      map((quiz) => {
        return quiz;
      }),
    );
  }

  async createNewQuiz(quiz: CreateQuizDto) {
    return await this.quizRepository.save(quiz);
  }

  update(id: number, attrs: Partial<Quiz>): Observable<Quiz> {
    return this.findOne(id).pipe(
      switchMap((user) => {
        Object.assign(user, attrs);

        return defer(() => this.quizRepository.save(user));
      }),
    );
  }
}
