import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateQuizDto } from './dto/CreateQuiz.dto';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
  constructor(private quizService: QuizService) {}

  @Get('/')
  getAllQuiz() {
    return this.quizService.fetchAllQuizes();
  }

  @Post('/')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async createQuiz(@Body() quizData: CreateQuizDto) {
    return await this.quizService.createNewQuiz(quizData);
  }

  @Patch('/:id')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async updateQuiz(@Param('id') id: string, @Body() quizData: CreateQuizDto) {
    return this.quizService.update(+id, quizData);
  }
}
