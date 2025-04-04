import "./index.scss";

export const initChooseDeliveryType = () => {
    document.querySelectorAll(".order__accordion-item").forEach(orderItem => {
        const deliveryRadios = orderItem.querySelectorAll(".order__delivery-type input[type='radio']");

        if (!deliveryRadios.length) {
            return
        }

        const updateType = (selectedInput) => {
            orderItem.dataset.deliveryType = selectedInput.id === "choose-delivery-point" ? "point" : "address";
        };

        const checkedRadio = orderItem.querySelector(".order__delivery-type input[type='radio']:checked");
        if (checkedRadio) {
            updateType(checkedRadio)
        }

        deliveryRadios.forEach(radio => {
            radio.addEventListener("change", () => updateType(radio));
        });
    });
};
