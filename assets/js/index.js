const form = document.querySelector('#form');
const inputCc = document.querySelector('#inputCc');
const inputEmail = document.querySelector('#inputEmail');
const inputOrigin = document.querySelector('#inputOrigin');
const textComents = document.querySelector('#textComents');
const inputCustomer = document.querySelector('#inputCustomer');
const inputLoadNumber = document.querySelector('#inputLoadNumber');
const inputDestination = document.querySelector('#inputDestination');
const inputPickupDateTime = document.querySelector('#inputPickupDateTime');
const inputDeliveryDateTime = document.querySelector('#inputDeliveryDateTime');

let checkbooks = "";
let checkbooksBody = "";

const loadEventListeners = () => {
    form.addEventListener('submit', submitForm);
}

const submitForm = (e) => {
    const textContent = document.createElement("h4")
    const link = document.createElement("a")
    link.appendChild(document.createTextNode(`<i> load ${inputLoadNumber.value} is ready. Click here`))
    link.innerHTML = `LoadNumber # ${inputLoadNumber.value.toUpperCase()}`
    document.getElementsByName("checkbooks").forEach(radio => {
        if (radio.checked) {
            checkbooks = radio.value;
            if (checkbooks === "Pickup") {
                checkbooksBody = "Please provide the ETA for PU or the check in/out times if already picked up and current location. In case of delay please provide the ETA and current location.";
            } else if (checkbooks === "Delivery") {
                checkbooksBody = "Please provide the ETA for DEL or the check in/out times if already delivered. In case of delay please provide the ETA and current location.";
            }
        }
    })
    link.setAttribute("href", "mailto:" + inputEmail.value + "?subject= LOAD # " + inputLoadNumber.value.toUpperCase() +
        " *** " + inputOrigin.value.toUpperCase() + " *** " + inputDestination.value.toUpperCase() + " *** " + "CONFIRM " + checkbooks.toUpperCase() + " *** " + inputCustomer.value.toUpperCase() + "&cc=" + inputCc.value.trim() + "&body=" + "Good morning,%0D%0A%0D%0AI am checking in to get an update on this load: %0D%0A%0D%0APickup appt date and time: " + inputPickupDateTime.value + "%0D%0ADelivery appt date and time: " + inputDeliveryDateTime.value + "%0D%0A%0D%0A" + checkbooksBody + " If you have the 360 APP feel free to update the location or in and out times of your load. Otherwise reply this email with the information and we'll do it for you. Also please provide the electronic logging device number if available.%0D%0A%0D%0A" + textComents.value)

    textContent.appendChild(link)
    document.querySelector("#buttonSubmit").appendChild(textContent)
    document.querySelector("a").click()

    setTimeout(() => { window.location.reload() }, 100);
    e.preventDefault();
}
