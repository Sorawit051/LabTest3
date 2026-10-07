abstract class Discount{
    constructor(public price: number){}
    abstract tax():void;
}

class FixedDiscount extends Discount{
    tax(): void{
        console.log(`${this.price}`);
    }
}

class PercentageDiscount extends Discount{
    tax(): void{
        console.log(`${this.price}`);
    }
}

const tax1 = new FixedDiscount(1000);
const dis : number  = tax1.price - 100/2;
tax1.tax();
console.log(`${dis}`);




