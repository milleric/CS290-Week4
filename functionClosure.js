/*
Author: 	Rick Miller
Course: 	CS 290
Date:		1/30/16
Assignment:	JS Example 5 Activity (Scope and Closure - Week 4)

*/

function buildList(list) 
{
    var result = [];
	var item;
    for (var i = 0; i < list.length; i++) 
	{
        result.push( 
						function(x) 
						{
							return function()
							{
								item = 'item' + list[x];
								console.log(item + ' ' + list[x]);
							};
						}(i)//no semicolon here
					);
	}
    return result;
}
 
function testList() {
    var fnlist = buildList([1,2,3]);
    // using j only to help prevent confusion - could use i
    for (var j = 0; j < fnlist.length; j++) {
        fnlist[j]();
    }
}

testList();