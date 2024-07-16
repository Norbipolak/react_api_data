function GetUrlVariable(name, defValue)  {
    const params = new URLSearchParams(window.location.search);
    return params.get(name) !== null ? params.get(name) : defValue;
    /*
    és ha mondjuk a name az id akkor a params.get(name)-vel meg lehet kapni az id-kat (1, 2, 3) ha ez az id=1 így tovább  
    const [limit, setLimit] = useState(parseInt(GetUrlVariable("limit", 16)));
    */
}

export default GetUrlVariable;

/*
ez a current URL-ünk 
https://www.example.com/page?user=JohnDoe&theme=dark

és így szerezzük meg meghívásnál 
const user = getQueryParam('user', 'DefaultUser');
console.log(user); // Output: "JohnDoe"

const language = getQueryParam('language', 'en');
console.log(language); // Output: "en"

const mode = getQueryParam('mode');
console.log(mode); // Output: null

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Query Parameter Example</title>
    <script>
        function getQueryParam(name, defValue = null) {
            const params = new URLSearchParams(window.location.search);
            return params.get(name) !== null ? params.get(name) : defValue;
        }

        window.onload = function() {
            // Example usage
            const user = getQueryParam('user', 'DefaultUser');
            const theme = getQueryParam('theme', 'light');
            const language = getQueryParam('language', 'en');
            
            console.log('User:', user);       // Output: "JohnDoe"
            console.log('Theme:', theme);     // Output: "dark"
            console.log('Language:', language); // Output: "en"
        };
    </script>
</head>
<body>
    <h1>Check the console for query parameter values</h1>
</body>
</html>
*/