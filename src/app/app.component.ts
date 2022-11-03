import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'Hello_World';
  imgUrl="../assets/bb.PNG";
  url = "https://www.bridgelabz.com/";
  userName:string="";
  nameError:string="";

  ngOnInit(): void
  {
    this.title = "Hello ,Whats Your Name ?"
  }

  onClick($event: any)
  {
    console.log("Save Button Is Clicked!", $event);
    window.open(this.url, "_blank");
  }

  onInput($event:any)
  {
    console.log("change event occured!",$event.data);
    const nameRegex=RegExp('[A-Z]{1}[a-z]{2}');
    if(nameRegex.test(this.userName))
    {
      this.nameError="";
      this.title=this.userName;
      return;
    }
    this.nameError="Name Is Incorrect";
  }

}
