<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
	<script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script> 
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

	<link rel="stylesheet" href="css/style.css">
	<script src="js/functions.js"></script>
</head>
<?php
	/*try {
		$db = new PDO("mysql:host=localhost;dbname=m6", "root", "");
		$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	} catch (PDOException $e) {
		die ($e->getMessage());
	} */
	try {
		$db = new PDO("mysql:host=localhost;dbname=152680", "152680", "Independencia47!");
		$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	} catch (PDOException $e) {
		die ($e->getMessage());
	} 
?>
<body>
	<div class="container pt-5">
		<h4>Formulari de registre d'usuaris</h4>
		<form action="#" method="POST" enctype="multipart/form-data" name="form-user-register" id="form-user-register">
			<div class="form-row mt-5 mb-4">
				<div class="col-4">
					<label for="validationNom">Nom*</label>
					<input type="text" class="form-control" id="validationNom" value="" name="nom" placeholder="Escriu el teu nom...">
					<div id="feedbackNom">
						
					</div>
				</div>

				<div class="col-4">
					<label for="validationCognoms">Cognoms*</label>
					<input type="text" class="form-control" id="validationCognoms" value="" name="cognoms" placeholder="Escriu el teu primer cognom...">
					<div id="feedbackCognoms">
						
					</div>
				</div>

				<div class="col-4">
					<label for="validationDNI">DNI*</label>
					<input type="text" class="form-control" id="validationDNI" value="" name="DNI" placeholder="Escriu el teu DNI...">
					<div id="feedbackDNI">
						
					</div>
				</div>
			</div>
			
			<div class="form-row mb-4">
				<div class="col-4">
					<label for="validationUsername">Username*</label>
					<div class="input-group">
						<div class="input-group-prepend d-none" id="btnUsername">
							<span class="input-group-text">@</span>
						</div>
						<input type="text" class="form-control" id="validationUsername" name="validationUsername">
						<div id="feedbackUsername">
						
						</div>
					</div>
				</div>

				<div class="col-4">
					<label for="validationEmail">Email*</label>
					<input type="email" class="form-control" id="validationEmail" name="validationEmail" placeholder="Escriu el teu email...">
					<div id="feedbakEmail">

					</div>
				</div>

				<div class="col-4">
					<label for="validationTelf">Telèfon*</label>
					<input type="text" class="form-control" id="validationTelf" name="validationTelf" placeholder="Escriu el teu telèfon tot junt...">
					<div id="feedbackTelf">
						
					</div>
				</div>
			</div>
			
			<button class="btn btn-primary" type="submit" id="registrar">Registrar</button>
		</form>
	</div>


</body>
</html>
