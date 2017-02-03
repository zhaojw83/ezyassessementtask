import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>The fantastic javascript exampleList</h1>
             <table>
			    <td><a href="#" (click)="LoadList();">Read list to the right</a></td>
				<td>
				   <ul>
				      <li *ngFor="let item of items">
					    <a href='#' (click)="onSelect(item)">{{item}}</a>
					  </li>
				   </ul>
				</td>
			 </table>
			 <p>Time is: <span >{{nowTime}}</span></p>
  `,
})
export class AppComponent  {  
     nowTime:any=Date();
     items:number[]=[];
	 constructor() {
       setTimeout(function(){alert('you have now been on the page for half a minute');}, 30000);
    }
	 LoadList(){
	     this.items=[0,1,2,3,4,5,6,7,8,9];
	 }
	 onSelect(i:number){
	     if (i == 5)
             {
                 alert('five');
             }else {
                 alert(i);
			 }
	 }
 }
