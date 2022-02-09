var uploadField = document.getElementById("upload");
var file_info_field = document.getElementById("upload-info");
var base_info = file_info_field.innerText;
const file_size_limit = 104857600

uploadField.onchange = function() {
    let fn = this.value.split('\\').pop();
    if(this.files[0].size >= file_size_limit){
       alert(`${fn} is too big!\nExpected less than ${file_size_limit/1024/1024}mb\nFound ${Math.round((this.files[0].size/1024/1024) * 100) / 100}mb`);
       this.value = "";
       file_info_field.innerText = base_info;
    }
    else {
        file_info_field.innerText = fn
    }

};