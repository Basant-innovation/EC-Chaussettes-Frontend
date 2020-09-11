import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./Home/home/home.component";
import { FooterComponent } from "./shared/layout/footer/footer.component";
import { NavbarComponent } from "./shared/layout/navbar/navbar.component";
import { HeaderComponent } from "./shared/layout/header/header.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
