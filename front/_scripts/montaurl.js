
function montaurl() {

if ( !$palavrachave && !$vlenome && !$vlecidade && !$vleespecialidade) {
  $dataselect="http://vhospital.herokuapp.com/apiv0/medico/";
console.log($dataselect);
}
else {
  if (!$palavrachave && !$vlenome && !$vlecidade) {
    $dataselect="http://vhospital.herokuapp.com/apiv0/medico/?especialidade=" + $vleespecialidade;
    console.log($dataselect);
  }
  else {
    if (!$vlenome && !$vlecidade && !$vleespecialidade){
    $dataselect="http://vhospital.herokuapp.com/apiv0/medico/?palavrachave=" +  $palavrachave;
    console.log($dataselect);
    }
    else {
      if (!$palavrachave && !$vlenome && !$vleespecialidade){
        $dataselect="http://vhospital.herokuapp.com/apiv0/medico/?cidade=" + $vlecidade;
        console.log($dataselect);
      }
      else {
        if (!$palavrachave && !$vlecidade && !$vleespecialidade){
          $dataselect="http://vhospital.herokuapp.com/apiv0/medico/?nome=" + $vlenome;
          console.log($dataselect);
        }
        else{
          if (!$palavrachave && !$vlenome ) {
            $dataselect="http://vhospital.herokuapp.com/apiv0/medico/?cidade=" + $vlecidade + "&especialidade=" + $vleespecialidade;
            console.log($dataselect);
          }
          else {
            if (!$vlecidade && !$vleespecialidade){
              $dataselect="http://vhospital.herokuapp.com/apiv0/medico/?palavrachave=" + $palavrachave + "&nome=" + $vlenome;
              console.log($dataselect);
            }
            else {
              if (!$vlenome && !$vlecidade){
                $dataselect="http://vhospital.herokuapp.com/apiv0/medico/?palavrachave=" + $palavrachave  + "&especialidade=" + $vleespecialidade;
                console.log($dataselect);
              }
              else {
                if (!$vlenome && !$vleespecialidade){
                  $dataselect="http://vhospital.herokuapp.com/apiv0/medico/?palavrachave=" + $palavrachave + "&cidade=" +  $vlecidade;
                  console.log($dataselect);
                }
                else {
                  if (!$palavrachave && !$vlecidade){
                    $dataselect="http://vhospital.herokuapp.com/apiv0/medico/?nome=" + $vlenome + "&especialidade=" +  $vleespecialidade;
                    console.log($dataselect);
                  }
                  else {
                    if (!$palavrachave && !$vleespecialidade){
                      $dataselect="http://vhospital.herokuapp.com/apiv0/medico/?nome=" + $vlenome + "&cidade=" +  $vlecidade;
                      console.log($dataselect);
                    }
                    else {
                      if (!$palavrachave) {
                        $dataselect="http://vhospital.herokuapp.com/apiv0/medico/?nome=" + $vlenome + "&cidade=" + $vlecidade + "&especialidade=" + $vleespecialidade;
                        console.log($dataselect);
                      }
                      else {
                        if (!$vlenome){
                          $dataselect="http://vhospital.herokuapp.com/apiv0/medico/?palavrachave=" + $palavrachave  + "&cidade" + $vlecidade + "&especialidade=" + $vleespecialidade;;
                          console.log($dataselect);
                        }
                        else {
                          if (!$vlecidade){
                            $dataselect="http://vhospital.herokuapp.com/apiv0/medico/?palavrachave=" + $palavrachave + "&nome=" + $vlenome + "&especialidade=" + $vleespecialidade;;
                            console.log($dataselect);
                          }
                          else {
                            if (!$vleespecialidade){
                              $dataselect="http://vhospital.herokuapp.com/apiv0/medico/?palavrachave=" + $palavrachave + "&nome=" + $vlenome + "&cidade=" + $vlecidade;
                              console.log($dataselect);
                            }
                            else {
                              $dataselect="http://vhospital.herokuapp.com/apiv0/medico/?palavrachave=" + $palavrachave + "&nome=" +  $vlenome + "&cidade=" + $vlecidade + "&especialidade=" + $vleespecialidade;
                              console.log($dataselect);
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
};
};
