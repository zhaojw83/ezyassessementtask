export class Rate{
  constructor(
      public swift_code:string,
	  public swift_name:string,
	  public multiply:string,
	  public buy_cash:string,
	  public buy_tc:string,
	  public sell_cash:string,
	  public sell_tc:string,
	  public CurrencyGuide:string,
	  public base_swift:string
  ){}
}