const { exec } = require("child_process");

for (let i=0 ; i<28; i++){

exec("git checkout -b"+ i, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
}