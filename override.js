<body style="text-align:center;"> 

	<h1 style="color:green;" id="h1"> 
		GeeksForGeeks 
	</h1> 

	<p id="GFG_UP" style="font-size: 15px; 
						font-weight: bold;"> 
	</p> 

	<button onclick="GFG_Fun()"> 
		click here 
	</button> 

	<p id="GFG_DOWN" style="color:green; 
							font-size: 20px; 
							font-weight: bold;"> 
	</p> 

	<script> 
		var up = document.getElementById('GFG_UP');	 
		
		up.innerHTML = "Click on the button to override" 
					+ " the function."; 
		
		var down = document.getElementById('GFG_DOWN'); 
		
		down.innerHTML = "Floor value of '2.345' is "; 
		
		function GFG_Fun() { 
			
			// Override 
			parseFloat = function(x) { 
				return "Floor value of '2.345' is " 
							+ Math.floor(x); 
			} 
			
			// Overriding the parseFloat function and 
			// use it as Math.floor 
			down.innerHTML = parseFloat(2.345); 
		} 
	</script> 
</body>
