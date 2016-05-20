//REMOVED FOR BONUS 1
//var victimNo = prompt("How many victims are there?");
//

var victims = [];
var volunteers = [];
var volClosest = '';

newVictim();

//REMOVED FOR BONUS 1
//var volunteerNo = prompt("How many volunteers are there?");
//

newVolunteer();
needyVic();

function newVictim() {
    var confirmation = confirm("Would you like to add an additional victim?");
    if (confirmation){
        var person = {
			names: '',
			number: '',
			street:''
			};
		person.names = (prompt("Enter victim name:"));
		person.number = (prompt("Enter victim phone:"));
		person.street = (prompt("Enter victim street:"));
		victims.push(person);
		newVictim()
    }
}

function newVolunteer() {
    var confirmation = confirm("Would you like to add an additional volunteer?");
    if(confirmation) {
        var person = {
			names: '',
			number: '',
			street:''
			};
		person.names = (prompt("Enter volunteer name:"));
		person.number = (prompt("Enter volunteer phone:"));
		person.street = (prompt("Enter volunteer street:"));
		volunteers.push(person);
		newVolunteer()
    }
}

function needyVic() {
    var inNeed = prompt("Name a victim in need of urgent assistance");
    for(var i = 0; i < victims.length; i++) {
        if (inNeed === victims[i].names ) {
            for(var t = 0; t < volunteers.length; t++) {
				if(victims[i].street === volunteers[t].street) {
					volClosest += volunteers[t].names;
                }
            }
        }
    }
}

if (volClosest.length === 0) {
    alert("Good to see nobody is in too bad shape!");
} else {
    
    alert(volClosest + " is on the same street and is on the way to help!");
    }