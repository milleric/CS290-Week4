//console.log(runMain);


function Automobile( year, make, model, type )
{
    this.year = year; //integer (ex. 2001, 1995)
    this.make = make; //string (ex. Honda, Ford)
    this.model = model; //string (ex. Accord, Focus)
    this.type = type; //string (ex. Pickup, SUV)
	
	function LogMe(value)//value should be a boolean value
	{
		if (value)
		{
			output.console(this.year+" "+this.make+" "+this.model+" "+this.type);
		}
		else
		{
			output.console(this.year+" "+this.make+" "+this.model);
		}
	}
}

var automobiles = [ 
    new Automobile(1995, "Honda", "Accord", "Sedan"),
    new Automobile(1990, "Ford", "F-150", "Pickup"),
    new Automobile(2000, "GMC", "Tahoe", "SUV"),
    new Automobile(2010, "Toyota", "Tacoma", "Pickup"),
    new Automobile(2005, "Lotus", "Elise", "Roadster"),
    new Automobile(2008, "Subaru", "Outback", "Wagon")
	];
	
console.log(automobiles);

/*This function sorts arrays using an arbitrary comparator. You pass it a comparator and
 an array of objects appropriate for that comparator and it will return a new array which 
 is sorted with the largest object in index 0 and the smallest in the last index*/
function sortArr(Comparator, array)
{
    var bool;
	var rerun=0;	//rerun=0 unless a swap happens
	var temp; 	//temporary array 
	
	do
	{
	rerun=0;
	
		for (var i=1; i<array.length; i++)
		{
			if (Comparator(array[i-1], array[i])== false)
			{
				//console.log(array[i-1]);
				temp=array[i-1];		//this if statement handles the element swap inside of array
				array[i-1]=array[i];
				array[i]=temp;
				rerun++;				//this causes the do-while loop to run again
				//console.log(array[i-1]);
			}
			else{}
		}
	}
	while(rerun>0);
	
	return array;
}

//var printYear=sortArr(yearComparator, automobiles);
var runMain=main(automobiles);
//var wrapLogMe=Automobile.LogMe.bind(Automobile);

function main(array)
{
	console.log("*****");
	console.log("The cars sorted by year are: ");
	
	for (var i=0; i<array.length; i++)
	{
		sortArr(yearComparator, array);
		outputArr(automobiles, true);
	}
}

function outputArr(array, bool)//Array is an individual car array, bool is boolean
{
	for (var i=0; i<array.length; i++)
	{
		array[i].LogMe(bool)
	}
}

function getrank(item1)//This functions is working
{
	//I picked up this rank array idea from Piazza hints thanks
	//to James Grunewald and the instructor.
	var makeRank=["Ford", "GMC", "Honda", "Lotus", ]
	var typeRank=["roadster", "pickup", "suv", "wagon", "sedan"];
	for (var i=0; i<makeRank.length; i++)
	if (item1==makeRank[i]||item1==typeRank[i])
		return i; 
	else
	{}
}

/*A comparator takes two arguments and uses some algorithm to compare them. If the first
argument is larger or greater than the 2nd it returns true, otherwise it returns false. 
Here is an example that works on integers*/
function intComparator(int1, int2)//This function is working
{
	if (typeof(int1)=="string")
	{
		int1=getrank(int1);
		int2=getrank(int2);
		console.log(int1+" "+int2);
	}
    if (int1 < int2)
	{
        return true;
    } 
	else 
	{
        return false;
    }
}

/*For all comparators if cars are 'tied' according to the comparison rules then the order 
of those 'tied' cars is not specified and either can come first*/

/*This compares two automobiles based on their year. Newer cars are "greater" than older cars.*/
function yearComparator(auto1, auto2)//this function is working
{
	if (intComparator(auto1.year, auto2.year))
	{
		return true;
	}
	else
	{
		return false;
	}
}

/*This compares two automobiles based on their make. It should be case insensitive and makes 
which are alphabetically earlier in the alphabet are "greater" than ones that come later.*/
function makeComparator(auto1, auto2)
{
    if (intComparator(auto1.make, auto2.make))
	{
		return true;
	}
	else
	{
		return false;
	}
}

/*This compares two automobiles based on their type. The ordering from "greatest" to "least" 
is as follows: roadster, pickup, suv, wagon, (types not otherwise listed). It should be case 
insensitive. */
function typeComparator(auto1, auto2)
{
	if (intComparator(auto1.type, auto2.type))
	{
		return true;
	}
	else
	{
		return false;
	}
}

/*Your program should output the following to the console.log, including the opening and 
closing 5 stars. All values in parenthesis should be replaced with appropriate values. Each 
line is a seperate call to console.log.

Each line representing a car should be produced via a logMe function. This function should 
be added to the Automobile class and accept a single boolean argument. If the argument is 
'true' then it prints "year make model type" with the year, make, model and type being the 
values appropriate for the automobile. If the argument is 'false' then the type is ommited 
and just the "year make model" is logged.

*****
The cars sorted by year are:
(year make model of the 'greatest' car)
(...)
(year make model of the 'least' car)

The cars sorted by make are:
(year make model of the 'greatest' car)
(...)
(year make model of the 'least' car)

The cars sorted by type are:
(year make model type of the 'greatest' car)
(...)
(year make model type of the 'least' car)
*****

As an example of the content in the parenthesis:
1990 Ford F-150 


































function LogMe(array, Bool, newLog, forE) //inside automobile class
	{
		//This is used to pass console.log into another function
		var newLog=console.log.bind(console);
		if (Bool==true)
		{
			for (var i=0; i<array.length; i++)
			{
				newLog(array[i].year+", "+array[i].make+", "+array[i].model);
			}
		}
		else
		{
			for (var i=0; i<array.length; i++)
			{
			newLog(array[i].year+", "+array[i].make+", "+array[i].model+", "+array[i].type);
			}
		}
	}



*/


