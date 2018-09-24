<?php

require_once('mysql_credentials.php');

$query = 'SELECT * FROM students';

$result = mysqli_query($conn, $query);
$output = [
    'success' => false,
    'students' => [],
    'errors' => []
];

if($result) {
    //query connection is successfull
    if(mysqli_num_rows($result) > 0){
        //query returned data
        $output['success'][] = true;
        //ask Dan about a safer way to do this loop to protect from sql injection attacks
        while($row = mysqli_fetch_assoc($result)){
            $output['students'][] = $row;
        }
    } else {
        //the query data is empty!?!
        $output['errors'][] = 'no data availible';
    }
} else {
    $output['errors'][] = "Error with query";
}

$json_output = json_encode($output);
print($json_output);

?>