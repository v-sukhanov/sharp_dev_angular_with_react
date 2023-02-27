import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactComponentDirective } from './react-component.directive';
import { TodosComponent } from './todos/todos.component';
import { LazyReactComponentDirective } from './lazy-react-component.directive';

@NgModule({
	declarations: [
		AppComponent,
		ReactComponentDirective,
		TodosComponent,
		LazyReactComponentDirective,
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
