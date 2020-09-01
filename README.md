# Registre

http://pauduranregistre.orgfree.com/

Registre es composa de dues parts:

1. REGISTRE D'USUARIS:

  Diferents camps que verifiquen si la informació de l'input és correcta o no. També valida si els camps estan plens o buits.
  Un cop s'ha generat NOM, COGNOMS i DNI, un botó apareix dins la casella d'USERNAME per generar un nom d'usuari barrejant els camps anterios.
  
  El botó REGISTRAR resgistre la informació a una base de dades de phpmyadmin
  
  
2. REGISTRE DE PISOS:

  Inputs que a mesura que es van omplint, copien la informació a la columna de la dreta.
  Un cop posades la direcció i número de l'edifici clicant el botó BUSCAR ADREÇA ens troba la longitud i latitud exacta del punt que nosaltres hem introduït.
  
  El botó GEOLOCALITZACIÓ busca el punt on nosaltres ens trobem.
  
  També tenim un select anomenat DISTRICTE amb tots els districtes de Barcelona que un cop seleccionem una opció ens permet seleccionar al select BARRI només els barris de       Barcelona d'aquest districte, si canviem el districte, automàticament canviaran els barris.
