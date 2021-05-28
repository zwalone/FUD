
//Get's nth origin url segment
export function getSegment(n)
{
    let arr = window.location.pathname.split("/");
    return arr[n];
}