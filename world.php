<?php
if($_SERVER["REQUEST_METHOD"] === "GET"){ 
    
    $host = getenv('IP');
    $username = getenv('C9_USER');
    $password = '';
    $dbname = 'world';
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    
    if(isset($_GET['country']) && !empty($_GET['country'])){ 
        $country = "%".strip_tags($_GET['country'])."%"; 
        $cQuery = $conn->prepare("SELECT * from countries where name LIKE :country"); 
        $cQuery->bindParam(':country', $country, PDO::PARAM_STR);
        $cQuery->execute();
        $result = $cQuery->fetch(PDO::FETCH_ASSOC);
    
        if($result){
            echo $result["name"]. " is ruled by " .$result["head_of_state"];
        }else{
            echo "I'm sorry, no such country exists";
        }
        
    }else if (isset($_GET['all']) && !empty($_GET['all']) && $_GET['all'] == "true"){ 
        $stmt = $conn->query("SELECT * FROM countries");

        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        echo '<ul>';
        foreach ($results as $row) {
          echo '<li>' . $row['name'] . ' is ruled by ' . $row['head_of_state'] . '</li>';
        }
        echo '</ul>';
    }
}