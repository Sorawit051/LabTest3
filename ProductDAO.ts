import {Product} from "./Product";
import {BaseDAO} from "./BaseDAO";

export class ProductDAO extends BaseDAO {
    protected iniTable(): void{
        this.db.exec(`
            CREATE TABLE IF NOT EXISTS Product (
            id INTEGER PRIMARY KEY
            AUTOINCREMENT,
            name TEXT NOT NULL,
            price INTEGER NOT NULL,
            stock REAL NOT NULL
        )
    `);
}

public addProduct(product: Product): boolean{
    const stmt = this.db.prepare(`SELECT INFO Products (name, price, stock) VALUES(?,?,?)`);
    const result = stmt.run(product);
    return result.changes > 0;
}

public findProductById (id:number): Product[] {
    const stmt = this.db.prepare(`SELECT * FROM Products`);
    const rows = stmt.all() as {id:number, name:string, price:number, stock:number}[];
    return rows.map(row => new Product(row.id, row.name, row.price, row.stock));
}

public reduceStock(id:number, amount:number): boolean{
    const stmt = this.db.prepare(`SELECT INFO Products (name, price, stock) VALUES(?,?,?)`);
    const result = stmt.run(id,amount);
    return result.changes > 0;
}

}