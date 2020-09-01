<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
	<script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script> 
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
	<script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/tinymce.min.js" referrerpolicy="origin"></script>
	<link rel="stylesheet" href="style/style.css">
	<script src="js/functions.js"></script></head>
	<script src="js/functions2.js"></script></head>
<?php
	try {
		$db = new PDO("mysql:host=localhost;dbname=m6", "root", "");
		$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	} catch (PDOException $e) {
		die ($e->getMessage());
	} 
?>
<body>
	<div class="container pt-5 pb-5">
		<h4>Formulari de registre de pisos</h4>

		<div class="row">
			<div class="col-6">
				<form id="form-user-register">
					<div class="form-row mt-5 mb-4">
						<div class="col-8">
							<label for="">Nom*</label>
							<input type="text" class="form-control" id="validationNom1" value="" name="nom1">
						</div>

						<div class="col-4">
							<label for="">Preu*</label>
							<input type="text" class="form-control" id="validationPreu" value="" name="preu">
						</div>	
					</div>
					
					<div class="form-row mb-4">
						<div class="col-4">
							<label for="">Via</label>
							<select class="custom-select" id="validationVia">
								<option selected>Open this select menu</option>
								<option value="Carrer">Carrer</option>
								<option value="Torrent">Torrent</option>
								<option value="Avinguda">Avinguda</option>
							</select>
						</div>

						<div class="col-4">
							<label for="">Nom</label>
							<input type="text" class="form-control" id="validationNom2">
						</div>

						<div class="col-4">
							<label for="">Número</label>
							<input type="text" class="form-control" id="validationNumero">
						</div>
					</div>

					<div class="form-row mb-4">
						<div class="col-4">
							<label for="">Pis</label>
							<input type="text" class="form-control" id="validationPis">
						</div>

						<div class="col-4">
							<label for="">Escala</label>
							<input type="text" class="form-control" id="validationEscala">
						</div>

						<div class="col-4">
							<label for="">Porta</label>
							<input type="text" class="form-control" id="validationPorta">
						</div>
					</div>
					
					<div class="form-row mb-4">
						<div id="map"></div> 
			
						<button type="button" class="btn btn-secondary" id="findLoc">Buscar adreça</button>  
						<button type="button" class="btn btn-success" id="addressOk">Guardar</button>  
						<button type="button" class="btn btn-warning" id="geoLoc">Geolocalització</button>  
					</div>

					<div class="form-row mb-4">
						<div class="col-4">
							<label for="">CP</label>
							<input type="text" class="form-control" id="validationCP">
						</div>

						<div class="col-4">
							<label for="">Districte</label>
							<select class="custom-select" id="select_districte">
								<option selected>Open this select menu</option>
								<?php
									$consulta = "SELECT * FROM districtes";
									$result = $db->query($consulta);
									if (!$result) {
										print "Error en la consulta.\n";
									}
									else {
										foreach ($result as $valor) {
											echo '<option value="'.$valor["id"].'">'.$valor["name"].'</option>';
										}
									}
								?>
							</select>
						</div>

						<div class="col-4">
							<label for="">Barri</label>
							<select class="custom-select" id="select_barri"> 
								<option selected>Open this select menu</option>
							
							</select>
						</div>
					</div>

					<div class="form-row mb-4">
						<div class="col-4">
							<label for="">Població</label>
							<select class="custom-select">
								<option selected>Open this select menu</option>
								<option value="1">One</option>
								<option value="2">Two</option>
								<option value="3">Three</option>
							</select>
						</div>

						<div class="col-4">
							<label for="">Latitud</label>
							<input type="text" class="form-control" id="lat">
						</div>

						<div class="col-4">
							<label for="">Longitud</label>
							<input type="text" class="form-control" id="lng">
						</div>
					</div>

					
					<form method="post">
      					<textarea id="mytextarea">Hello, World!</textarea>
				    </form>

					
					<button class="btn btn-primary" type="submit">Registrar</button>

					<button class="btn btn-info">Visualitzar</button>
				</form>
			</div>

			<div class="col-6 pt-5">
				<h4 id="nomPis">Nom + barri, districte</h4>
				<!--<p id="preu">300€</p>
				<p>Text</p>-->
				<div class="container">
					<div class="row">
						<div class="titolinfo col-sm">
						VIA:
						</div>
						<div class="col-sm" id=infoVia>
						</div>
					</div>
					<div class="row">
						<div class="titolinfo col-sm">
						NOM: 
						</div>
						<div class="col-sm" id="infoNom">
						</div>
					</div>
					<div class="row">
						<div class="titolinfo col-sm">
						NÚMERO: 
						</div>
						<div class="col-sm" id="infoNum">
						</div>
					</div>
					<div class="row">
						<div class="titolinfo col-sm">
						PIS: 
						</div>
						<div class="col-sm" id="infoPis">
						</div>
					</div>
					<div class="row">
						<div class="titolinfo col-sm">
						ESCALA:
						</div>
						<div class="col-sm" id="infoEscala">
						</div>
					</div>
					<div class="row">
						<div class="titolinfo col-sm">
						PORTA:
						</div>
						<div class="col-sm" id="infoPorta">
						</div>
					</div>
					<div class="row">
						<div class="titolinfo col-sm">
						CODI POSTAL: 
						</div>
						<div class="col-sm" id=infoCP>
						</div>
					</div>
					<div class="row">
						<div class="titolinfo col-sm">
						DISTRICTE:
						</div>
						<div class="col-sm" id="infoDis">
						</div>
					</div>
					<div class="row">
						<div class="titolinfo col-sm">
						BARRI:
						</div>
						<div class="col-sm" id="infoBarri">
						</div>
					</div>
					<div class="row">
						<div class="titolinfo col-sm">
						POBLACIÓ: 
						</div>
						<div class="col-sm" id="infoPobl">
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>


</body>
</html>

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD1LqPNfReHlA4RTAU1YOuVKZxTqvCPa0g&callback=initMap" async defer></script>
