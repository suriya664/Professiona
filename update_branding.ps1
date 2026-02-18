$rootDir = "c:\slot 3 (30)\tutor-master"
$faviconLink = '<link rel="icon" type="image/png" href="images/favicon.png">'

Get-ChildItem -Path $rootDir -Filter "*.html" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    
    # 1. Remove branding from title
    $content = $content -replace "(<title>.*?)(&mdash; Free Website Template by Colorlib)(</title>)", '$1$3'
    $content = $content -replace "(<title>.*?)(\s*&mdash;\s*Free Website Template by Colorlib)(</title>)", '$1$3'

    # 2. Add favicon if not present
    if ($content -notmatch 'rel="icon"' -and $content -notmatch 'rel="shortcut icon"') {
        $content = $content.Replace("</head>", "  $faviconLink`n</head>")
    }
    
    Set-Content -Path $_.FullName -Value $content -Encoding utf8
    Write-Host "Updated $($_.Name)"
}
