import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class AppScheduler {
  @Cron(CronExpression.EVERY_5_SECONDS)
  triggerEach5Seconds() {
    console.log(new Date(), `Executed each 5 minutes.`);
  }

  @Cron(CronExpression.EVERY_DAY_AT_1AM)
  triggerEveryDay1Am() {
    console.log(new Date(), `Executed every day at 1 am.`);
  }

  @Cron(CronExpression.EVERY_WEEKEND)
  triggerWeekend() {
    console.log(new Date(), `Executed every weekend.`);
  }

  @Cron('*/15 * * * * *')
  triggerEvery15Seconds() {
    console.log(new Date(), `Executed every 15 seconds.`);
  }

  @Cron('* */1 * * * *')
  triggerEvery1Minutes() {
    console.log(new Date(), `Executed every 1 minutes.`);
  }

  @Cron('*/5 25-30 * * * *')
  triggerBetween25To30Minutos() {
    console.log(new Date(), `Executed from 25 to 30 minutes.`);
  }
}
