{
  const formatString = (s: string, toUpper?: boolean): string => {
    if(toUpper === false){
      return s.toLowerCase();
    }
    else{
      return s.toUpperCase();
    }
  }

  console.log(formatString("Hello"));          // Output: "HELLO"
  console.log(formatString("Hello", true));   // Output: "HELLO"
  console.log(formatString("Hello", false));  // Output: "hello"
}