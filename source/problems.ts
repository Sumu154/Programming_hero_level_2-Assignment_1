{
  const formatString = (s: string, toUpper?: boolean): string => {
    if(toUpper === false){
      return s.toLowerCase();
    }
    else{
      return s.toUpperCase();
    }
  }

}


{
  const filterByRating = (items: {title: string, rating: number}[]): {title: string, rating: number}[] => {
    return items.filter(it => {
      return it.rating >= 4
    })
  }
  
}

{
  const concatenateArrays = <T>(...a: T[][]): T[] => {
    const res: T[] = [];
    for(const i of a){
      for(const j of i){
        res.push(j);
      }
    }

    return res;
  }

}

{
  class Vehicle {
    constructor(
      private make: string,
      public year: number,
    ){}

    getInfo () {
      console.log(`"Make: ${this.make}, Year: ${this.year}"`)
    }
  }

  class Car extends Vehicle {
    constructor(
      make: string,
      year: number,
      private model: string
    ){ super(make, year)};


    getModel ()  {
      console.log(`"Model: ${this.model}"`)
    }
  }

}

{
  const processValue = <T>(value: string | number): number => {
    if(typeof value === "string"){
      return value.length;
    }
    else if(typeof value === "number"){
      return value*2
    }

    throw new Error("invalid type")
  }

}


{
  interface Product {
    name: string;
    price: number;
  }

  const getMostExpensiveProduct = (products: Product[]): Product | null => {
    if(products.length === 0){
      return null;
    }

    let res: Product = products[0];
    for(const i of products){
      if(i.price > res.price){
        res = i;
      }
    }
    return res;
  }

  
}

{
  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  const getDayType= (day: Day): string => {
    if(day===Day.Saturday || day===Day.Sunday){
      return "Weekend";
    }
    else{
      return "Weekday";
    }
  }


}


{
  const squareAsync = async (n: number): Promise<number> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(n<0){
          reject(new Error("Negative number not allowed"));
        }
        else{
          resolve(n*n);
        }
      }, 1000);
    })
  }


}