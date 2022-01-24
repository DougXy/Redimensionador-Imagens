const sharp = require('sharp');
const compress_images = require('compress-images')

let path = process.argv[2];
let width = Number(process.argv[3]);


function resize(inputPath,outputPath,width){
    sharp(inputPath).resize({width:width}).toFile(outputPath,(error)=>{
            if(error){
                console.log(error)
            }
            else{
                console.log('Imagem Redimensionada com sucesso');
            }
    })
}



resize(path,"./temp/outputPath.png" ,width);









