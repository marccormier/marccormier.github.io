function Users(){
	for (j = 0 ; j < z.length ; ++j);
	this.x= {
		fN:O('fN').value,
		id:j,
		lN:O('lN').value,
		mail:O('mail').value,
		mp:O('mp').value,
		age : O("age").value,
		eyeColor : O("eyeColor").value,
		nationality : O("nationality").value,
		userName : O("userName").value,
		changeUserName : (name)=> {this.userName = name},
		changePword : (pw)=> {this.mp = pw},
		fullName : () => {return this.firstName+' '+this.lastName},
		display : ()=>{}//apply()
	};
	y=JSON.stringify(x);
	z.push(y);
	console.clear();
	console.log(z);
	l=JSON.parse(z[j]);
	console.log(l);
	// session - local, Storage - SQL
	//send email to client with something like a pid that would have to be insert 
	Valid();
};