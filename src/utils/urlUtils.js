//Get's nth origin url segment
export function getPathnameSegment(n)
{
    let arr = window.location.pathname.split("/");
    return arr[n];
}


