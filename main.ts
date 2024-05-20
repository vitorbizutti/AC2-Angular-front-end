// Importa a função platformBrowserDynamic do pacote @angular/platform-browser-dynamic.
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Importa o módulo AppModule do arquivo './app/app.module'.
import { AppModule } from './app/app.module';

// Inicializa o módulo AppModule.
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err)); // Se ocorrer um erro durante a inicialização, ele será registrado no console.
