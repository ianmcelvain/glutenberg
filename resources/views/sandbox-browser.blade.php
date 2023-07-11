<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,400;0,600;0,700;0,800;1,400&display=swap" rel="stylesheet">

    <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>

    <script src="{{ asset('js/isolated-block-editor.js') }}"></script>
    <link rel="stylesheet" href="{{asset('css/core.css')}}">
    <link rel="stylesheet" href="{{asset('css/isolated-block-editor.css')}}">

{{--    @vite(['resources/css/app.css', 'resources/js/app.js'])--}}
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    <script src="{{ mix('js/app.js') }}" defer></script>

    <!-- Styles -->
    <style>
        * {
            font-family: Nunito Sans, serif;
        }
    </style>
</head>
<body class="antialiased w-full p-4">
    <h1 class="text-3xl font-bold underline">Hello</h1>
    <section class="flex max-w-3xl mt-4">
        <textarea id="editor" class="border w-full"></textarea>
    </section>

    <script>
        console.log(window.wp);
        wp.attachEditor( document.getElementById( 'editor' ) );
    </script>
</body>
</html>
