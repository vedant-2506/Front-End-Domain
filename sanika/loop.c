#include<stdio.h>
int main()
{
    int n=0,i=0;
    printf("enter a number");
    scanf("%d",&n);

    for(i=0;i<n;i++)
    {
        (i%2==0)? printf("Even"):printf("odd");
    }
   return 0;




   
}