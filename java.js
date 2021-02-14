var vector=["Morado","Amarillo","Gris","Blanco"];
console.log(vector);

var si=function()
{
	var i=0;
	var cl=document.getElementById("cl").value;
	var ul=vector.length-1; 
	while(i<vector.length)
	{
		if(cl==vector[i])
		{
			var ult=vector[ul];
			vector[ul]=vector[i];
			vector[i]=ult;
			vector.pop();
			console.log(vector);
			i=vector.length;
			document.getElementById("re").value="Se elimino correctamente";
			document.getElementById("cl").value="";
		}
		else
		{
			i=i+1;
			if (cl!=vector[i])
			{
				document.getElementById("re").value=cl+" no está disponible";
			}
		}
	}
}

var ing=function()
{
	var nombi=document.getElementById("nombi").value;
	vector.push(nombi);
	console.log(vector);
	document.getElementById("nombi").value="";
}