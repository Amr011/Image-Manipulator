// Congfiguration
const express = require('express')
const app = express()
const { createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(1000, 1000)
const ctx = canvas.getContext('2d')

// Load Image From Directory
const ImageSource = './public/images/Template.png'
loadImage(ImageSource).then((image) => {
  // Font Configuration
  const fontStyle = 'AirArabia Normal'
  const fontSize = '54px'

  var lineDown = 0 // The Padding Btween Texts
  // Main Text
  var pragraphText = 'لم تكن يوماً مشكلة;امكانيات ; بل مشكلة عقليات'

  ctx.drawImage(image, 0, 0, 1000, 1000) // Image Setings ( X , Y , Whidth , Height )

  ctx.font = `${fontSize} ${fontStyle}` // Font Style
  var pragraphTextX = 500 // Text Horizontal Align
  ctx.textAlign = 'center' // Text Center

  var TextLineArr = pragraphText.split(';') // Splite The Text To Multiple Lines By Adding ' ; '

  var pragraphTextY = 4 * 105 // Text Vertical Align

  for (var i = 0; i <= TextLineArr.length - 1; i++) {
    // Printing The Splitted Text Array Items
    var progress = pragraphTextY + lineDown

    lineDown = lineDown + 80

    if (TextLineArr.length < 1) {
      ctx.fillText(pragraphText, pragraphTextX, pragraphTextY, 500)
    } else {
      // Printing The Text By (Paragraph , X , Y , Whidth)
      ctx.fillText(TextLineArr[i], pragraphTextX, progress, 500)
      // Log Postion Of Each Item
      console.log(lineDown + pragraphTextY)
    }
  }
})

// Display Image as HTML Tag
app.get('/img', (req, res) => {
  // canvas.toDataURL() => Image Generated Code
  res.send(`<img src="${canvas.toDataURL()}">`)
})

// Server Listening
const port = 2900
app.listen(port, () => {
  console.log(`server running on port ${port}`)
})
