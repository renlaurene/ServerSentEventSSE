<!--
- A server-sent event is when a web page automatically 
  gets updates from a server.
-->
<!DOCTYPE html>
<html>
<body>

<h1>Getting server updates</h1>
<div id="result"></div>

<script>
if(typeof(EventSource) !== "undefined") {
    // The EventSource object is used to receive 
    // server-sent event notifications. 
    // - "demo_sse.php" is a server program
    var source = new EventSource("demo_sse.php");

    // Possible event types:
    // - onopen: When a connection to the server is opened
    // - onmessage: When a message is received
    // - onerror: When an error occurs
    source.onmessage = function(event) {
        document.getElementById("result").innerHTML += event.data + "
";
    };
} else {
    document.getElementById("result").innerHTML = 
       "Sorry, your browser does not support server-sent events...";
}
</script>

</body>
</html>