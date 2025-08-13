function chain(ch){
ch1="";
i=ch.length;
while(i=> ch.length/2){
    ch1=ch1+ch.charAt(i)
    i--

}
som=0;
i2=0;
while(i2<=ch.length){
    i2++
    if (isNaN(ch.charAt(i2))== true){
        som=som+1


    }
}
Majus=ch.toUpperCase()

}
function table(t1){
    max=0;
    min=t1(0);
    i=0
    som=0
    v= true
    while(i<t1.length)
    {
        if (t1(i)<min){
            min=t1(i)
        }
        else if(t1(i)>max){
            max=t1(i)
        }
        som=som+Number(t1(i))
        i++
        if(t1(i).length>3)
        {
            return false

        }

    
    }

return max,min


}
function fact(x)
{
return x*fact(x-1)



}
function premier(x){
    i=1
    som=0
    while(i<=x)
    {
        if(x/i==0){
            som=som+1

        
    }
    if (som==2){
        return(x+"un nombre premier")
    }
    else{
        return(x+"n'est pas un nombre premier")
    }



function fibonacci(n)
{
  a=0
  b=1
  for(i=2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;




}