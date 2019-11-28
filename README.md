# Print HTML page with header and footer on each page

## Sample HTML template

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Your document</title>
    <link crossorigin="anonymous" media="all" rel="stylesheet" href="dist/html-printing-canvas.css" />
</head>
<body>
    <header>
        This is your header
    </header>
    <article>
        Page content of any size (more than 1 page on printer)
    </article>
    <footer>
        This is your footer
    </footer>
    <script crossorigin="anonymous" src="dist/html-printing-canvas.js"></script>
</body>
</html>
```

