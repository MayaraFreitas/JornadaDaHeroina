import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [PostsComponent],
  exports: [PostsComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PostsModule { }
