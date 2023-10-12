// your code here
 document.getElementById("button").addEventListener("click", function () {
        // Get the values from the input fields
        var name = document.getElementById("name").value;
        var year = document.getElementById("year").value;

        // Construct the query string
        var queryString = "?name=" + encodeURIComponent(name) + "&year=" + encodeURIComponent(year);

        // Update the URL in the h3 element
        document.getElementById("url").textContent = "URL: https://localhost:8080/" + queryString;
    });