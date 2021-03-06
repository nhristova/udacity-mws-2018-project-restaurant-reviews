
/** Displays messages with information */
// Based on http://toastrjs.com
const showMessage = function(text, toastClass, options = {}) {
    let container = document.getElementById('toast-container');
    let message = document.createElement('div');
    message.classList.add('toast', toastClass);
    message.innerHTML = text;

    container.insertAdjacentElement('beforeend', message);

    if(options.onclick || this.options.onclick) {
        message.addEventListener('click', options.onclick ? options.onclick : this.options.onclick);
        return;
    }

    setTimeout(() => container.removeChild(message), this.options.timeOut);
};

export const toasty = {
    type : {
        error: 'toast-error',
        info: 'toast-info',
        success: 'toast-success',
        warning: 'toast-warning'
    },

    options: {
        onclick: false,
        timeOut: 5000
    },

    showMessage: showMessage
};
