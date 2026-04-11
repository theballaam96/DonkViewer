let url_data = {};

function updateURLString() {

}

function updateURLData(data, update_string = true) {
    Object.keys(data).forEach(k => {
        url_data[k] = data[k];
    });
    if (update_string) {
        updateURLString();
    }
}
window.updateURLData = updateURLData;

function toURLString() {

}

function fromURLString() {

}