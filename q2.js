var arr=[-3,8,7,6,5,-4,3,2,1];
var arr1=[];
var less=arr[0];
var p;
var max=arr[0];
for (i=0; i<arr.length; i++)
{
        if (max<arr[i]) max=arr[i];
}

for (var i=0;i<arr.length;i++)
{
        for (var j=0;j<arr.length;j++)
        {
                if (arr[j]!="x")
                {
                        if (less>arr[j]) 
                        {
                                less=arr[j];
                                p=j;
                        }
                }
        }
        arr1[i]=less;
        arr[p]="x";
        less=max;
}
console.log(arr1);
document.getElementById("demo").innerHTML = arr1;