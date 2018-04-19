const add=(a,b)=>a+b;
const generateGreet =(name) =>{return `Hello ${name}!`}
test('should add two numbers',()=>{
    const result=add(3,4);
   /* if(result!==7){
        throw new Error(`You added 3 and 4. The result was ${result}.Expect 7` );
    }*/
    expect(result).toBe(7);
});

test ('should format string',()=>{
    const result=generateGreet('Tom');
    expect(result).toBe('Hello Tom!');
});
test ('should format string',()=>{
    const result=generateGreet();
    expect(result).toBe('Hello undefined!');
});