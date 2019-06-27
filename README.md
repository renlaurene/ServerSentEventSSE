# ServerSentEventSSE
Server Sent Event
    The EventSource object is used to receive 
    server-sent event notifications. 
    - "demo_sse.php" is a server program
    var source = new EventSource("demo_sse.php");

    Possible event types:
     onopen: When a connection to the server is opened
     onmessage: When a message is received
     onerror: When an error occurs
