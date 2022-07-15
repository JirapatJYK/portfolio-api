import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { configuration } from './common/config/prod.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config =new DocumentBuilder()
    .setTitle('JirapatJYK SERVICES API')
    .setDescription('Jirapat JYK Services API Documentation')
    .setVersion('1.0.0')
    .addTag('')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(configuration.service_port);
}
bootstrap();
