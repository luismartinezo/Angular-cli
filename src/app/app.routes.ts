
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";

const appRoutes: Routes = [
  { path: '', redirectTo: '/gallery', pathMatch: 'full' },
  { path: 'gallery',      component: GalleryComponent },
  { path: 'contact',      component: ContactComponent },
  { path: 'about',      component:AboutComponent }
];

export const router:ModuleWithProviders = RouterModule.forRoot(appRoutes);