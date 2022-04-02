
class Alert {
    static danger(msg){
        return `<p class="alert alert-danger d-flex justify-content-between">${msg} <button class="btn-close" data-bs-dismiss="alert"></button></p>`;
    }

    static warning(msg){
        return `<p class="alert alert-warning d-flex justify-content-between">${msg} <button class="btn-close" data-bs-dismiss="alert"></button></p>`;
    }

    static success(msg){
        return `<p class="alert alert-success d-flex justify-content-between">${msg} <button class="btn-close" data-bs-dismiss="alert"></button></p>`;
    }
    static info(msg){
        return `<p class="alert alert-info d-flex justify-content-between">${msg} <button class="btn-close" data-bs-dismiss="alert"></button></p>`;
    }
}

export default Alert;
