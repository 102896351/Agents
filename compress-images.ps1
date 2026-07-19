Add-Type -AssemblyName System.Drawing

$dir = "C:\Users\dell\.mavis\sessions\mvs_9b20c472f50b495c9adef589733e5ba2\workspace\gonglue.xyz\blog"

Get-ChildItem $dir -Filter "*.jpg" | Where-Object { $_.Length -gt 400KB } | ForEach-Object {
    $path = $_.FullName
    $bmp = New-Object System.Drawing.Bitmap($path)
    $temp = [System.IO.Path]::GetTempFileName() + ".jpg"

    # Save as JPEG at 75% quality
    $jpegEncoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
    $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 72L)

    $bmp.Save($temp, $jpegEncoder, $encoderParams)
    $bmp.Dispose()

    $oldSize = [math]::Round($_.Length / 1KB, 1)
    Copy-Item $temp $path -Force
    Remove-Item $temp

    $newSize = [math]::Round((Get-Item $path).Length / 1KB, 1)
    Write-Host "$($_.Name): ${oldSize}KB -> ${newSize}KB"
}
