// About: Bootstraps the Angular AppModule in the browser.
// Run: Use Angular CLI (`ng serve`) from the project root.

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err: unknown) => console.error(err));
