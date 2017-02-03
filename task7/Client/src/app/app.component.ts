import { Component } from '@angular/core';
import {Rate} from './rate';
import {DataService} from './data.service';
import './rxjs-operators';
@Component({
  selector: 'my-app',
  template: `<h1>The Rates</h1>
             <table>
			    <td><Button (click)="LoadRates();">Load Rates</Button></td>
				<td>
				   <ul>
				      <li *ngFor="let rate of rates">
					    <span>swift_code: {{rate.swift_code}}</span><br />
						<span>swift_name: {{rate.swift_name}}</span><br />
					    <span>multiply: {{rate.multiply}}</span><br />
						<span>buy_cash: {{rate.buy_cash}}</span><br />
						<span>buy_tc: {{rate.buy_tc}}</span><br />
						<span>sell_cash: {{rate.sell_cash}}</span><br />
						<span>sell_tc: {{rate.sell_tc}}</span><br />
						<span>CurrencyGuide: {{rate.CurrencyGuide}}</span><br />
						<span>base_swift: {{rate.base_swift}}</span><br />
						<hr />
					  </li>
				   </ul>
				</td>
			 </table>
  `,
  providers:[DataService]
})
export class AppComponent  {  
    errorMessage:string;
	rates:Rate[];
	constructor(private dataService:DataService) {
      
    }
	
	 LoadRates(){
	     this.dataService.getRates()
						 .subscribe(
						      rates=>this.rates=rates,
							  error=>this.errorMessage=<any>error);
	 }
	 
 }
 
