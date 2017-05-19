import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {NewsComponent} from "./modules/news/news.component";
import {HomeComponent} from "./core/home/home.component";
import {AuthenticationComponent} from "./modules/authentication/authentication.component";
import {QuizComponent} from "./modules/quiz/quiz.component";


const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "news", component:NewsComponent},
  {path: "auth", component:AuthenticationComponent},
  {path: "quiz", component:QuizComponent},
  {path: "**", redirectTo:"/"}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
