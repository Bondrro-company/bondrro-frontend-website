import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { HowItWork } from './components/how-it-work/how-it-work';
import { Faq } from './components/faq/faq';
import { AboutUs } from './components/about-us/about-us';
import { ContactUs } from './components/contact-us/contact-us';
import { Disclaimer } from './components/disclaimer/disclaimer';
import { Privecy } from './components/privecy/privecy';
import { Impert } from './components/impert/impert';
import { Terms } from './components/terms/terms';

export const routes: Routes = [
    {path:'',redirectTo:"home",pathMatch:'full'},
    {path:'home',component:Home},
    {path:'how-its-work',component:HowItWork},
    {path:'faq',component:Faq},
    {path:'about-us',component:AboutUs},
    {path:'contact-us',component:ContactUs},
    {path:'disclaimer', component:Disclaimer},
    {path:'privacy',component:Privecy},
    {path:'impert',component:Impert},
    {path:'terms',component:Terms}
];
