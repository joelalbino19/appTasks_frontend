import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { registerLicense } from '@syncfusion/ej2-base';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
registerLicense('Ngo9BigBOggjHTQxAR8/V1NCaF5cXmZCeUx0Q3xbf1x0ZFZMYFVbRn5PIiBoS35RckVlW3dfc3FURGNUVUR0');