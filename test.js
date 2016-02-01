var test1="Ford";
var test2="Honda";

intComparator(test1,test2);
console.log(test1);

function getrank(item1)
{
	//Rick: I picked up this rank array idea from Piazza hints thanks
	//		to James Grunewald and the instructor.
	var makeRank=["Ford", "GMC", "Honda", "Lotus", ]
	var typeRank=["roadster", "pickup", "suv", "wagon", "sedan"];
	var rank1, rank2;
	for (var i=0; i<makeRank.length; i++)
	if (item1==makeRank[i]||item1==typeRank[i])
		return i++; 
	else
	{}
}

/*A comparator takes two arguments and uses some algorithm to compare them. If the first
argument is larger or greater than the 2nd it returns true, otherwise it returns false. 
Here is an example that works on integers*/
function intComparator(int1, int2)
{
	console.log(int1+" "+typeof(int1));
	if (typeof(int1)=="string")
	{
		int1=getrank(int1);
		int2=getrank(int2);
		console.log(int1+" "+int2);
	}
    if (int1 > int2){
        return true;
    } else {
        return false;
    }
}

//This is used to pass console.log into another function
var log=console.log.bind(console);


/*
var testobj = { name: "Big Bird",
				sayName: function(){
					console.log(this.name);	
				}
};

testobj.sayName();
*/