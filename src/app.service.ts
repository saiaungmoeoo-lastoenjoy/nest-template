import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  showRandomQuotes(): string {
    const quotes = [
      'The only way to do great work is to love what you do. - Steve Jobs',
      "Life is what happens when you're busy making other plans. - John Lennon",
      'The purpose of our lives is to be happy. - Dalai Lama',
      'Get busy living or get busy dying. - Stephen King',
      'You only live once, but if you do it right, once is enough. - Mae West',
      'Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer',
      "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
      "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
      'The best way to predict your future is to create it. - Peter Drucker',
      'To live is the rarest thing in the world. Most people exist, that is all. - Oscar Wilde',
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
}
