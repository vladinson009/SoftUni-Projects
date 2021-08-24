function extractFile(input) {

    let filenameIndex = input.lastIndexOf('\\');
    let kindIndex = input.lastIndexOf('.');

    let filename = input.slice(filenameIndex + 1, kindIndex)
    let filetype = input.slice(kindIndex + 1);


    console.log(`File name: ${filename}`);
    console.log(`File extension: ${filetype}`);


}
extractFile('C:\\Projects\\Data-Structures\\template.bak.pptx');